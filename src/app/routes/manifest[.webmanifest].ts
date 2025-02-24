import type { WebAppManifest } from '@remix-pwa/dev'
import { json } from '@remix-run/cloudflare'

export const loader = () => {
  return json(
    {
      short_name: 'テンポ変換',
      name: 'テンポ変換プレイヤー',
      start_url: '/',
      display: 'standalone',
      background_color: '#d3d7dd',
      theme_color: '#c34138',
    } as WebAppManifest,
    {
      headers: {
        'Cache-Control': 'public, max-age=600',
        'Content-Type': 'application/manifest+json',
      },
    },
  )
}
