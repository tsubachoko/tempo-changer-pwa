import { Box, Button } from '@radix-ui/themes'
import type { MetaFunction } from '@remix-run/cloudflare'
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

  const installPromptEvent = useRef<any>(null)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (event) => {
      // Chrome67以前で自動的にプロンプトを表示しないようにする?
      event.preventDefault();

      // イベントを変数に保存する
      installPromptEvent.current = event
    });
  }, [])

  const install = () => {
    installPromptEvent?.current.prompt()
  }

  return (
    <Box>
      <Box>
        <input type="file" onChange={audioInput} />
        <div>
          <input
            type="range"
            min="50"
            max="200"
            color='red'
            value={tempo}
            onChange={changeTempo}
          />
          <p>再生速度 ×{tempo / 100}</p>
        </div>
        <audio src={audioSrc} controls ref={player}></audio>
      </Box>

      <Box mt="8">
        <Button onClick={install}>アプリのインストール</Button>
      </Box>
    </Box>
  )
}
