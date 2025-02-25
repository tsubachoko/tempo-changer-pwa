import type { WebAppManifest } from '@remix-pwa/dev'
import { json } from '@remix-run/cloudflare'

export const loader = () => {
  return json(
    {
      short_name: 'テンポ変換',
      name: 'テンポ変換プレイヤー',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#a346ff',
      icons: [
        {
          src: '/app_icon_512.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/app_icon_512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    } as WebAppManifest,
    {
      headers: {
        'Cache-Control': 'public, max-age=600',
        'Content-Type': 'application/manifest+json',
      },
    },
  )
}
