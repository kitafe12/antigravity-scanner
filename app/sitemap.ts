import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabaseClient'

export const revalidate = 3600 // Update sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    // 1. Static Routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/scanner`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.9,
        },
    ]

    // 2. Dynamic Trader Routes
    const { data: traders } = await supabase
        .from('master_traders')
        .select('exchange_uid, last_updated')
        .limit(1000) // Reasonable limit for now

    const traderRoutes: MetadataRoute.Sitemap = (traders || []).map((trader) => ({
        url: `${baseUrl}/trader/${trader.exchange_uid}`,
        lastModified: new Date(trader.last_updated || new Date()),
        changeFrequency: 'daily',
        priority: 0.8,
    }))

    return [...staticRoutes, ...traderRoutes]
}
