import { Box, Button } from '@radix-ui/themes'
import type { MetaFunction } from '@remix-run/cloudflare'
import { usePWAManager } from '@remix-pwa/client'
import { useEffect, useRef, useState } from 'react'

export const meta: MetaFunction = () => {
  return [{ title: 'テンポ変換プレイヤー' }]
}

export default function Index() {
  const [audioSrc, setAudioSrc] = useState('')
  const [tempo, setTempo] = useState(100)

  const player = useRef<HTMLAudioElement>(null)

  const audioInput = (event: any) => {
    var file = event.currentTarget.files[0]
    var objectUrl = URL.createObjectURL(file)
    setAudioSrc(objectUrl)
  }

  const changeTempo = (event: any) => {
    if (player.current) {
      setTempo(event.currentTarget.value)
      player.current.playbackRate = event.currentTarget.value / 100
    }
  }

  const { promptInstall } = usePWAManager()
  const install = () => {
    promptInstall(() => {
      console.log('install succeeded')
    })
  }

  return (
    <Box p="4">
      <Box>
        <input type="file" onChange={audioInput} />
        <div>
          <input
            type="range"
            min="50"
            max="200"
            value={tempo}
            onChange={changeTempo}
          />
          <p>再生速度 ×{tempo / 100}</p>
        </div>
        <audio src={audioSrc} controls ref={player}></audio>
      </Box>

      <Box mt="8">
        <Button style={{ backgroundColor: '#a346ff' }} onClick={install}>
          アプリのインストール
        </Button>
      </Box>
    </Box>
  )
}
