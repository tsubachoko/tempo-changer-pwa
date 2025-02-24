import { Box } from '@radix-ui/themes'
import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [
    { title: 'テンポ変換プレイヤー' },
  ]
}

export default function Index() {
  return (
    <Box>
      サンプル
    </Box>
  )
}
