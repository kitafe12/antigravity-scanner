
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config({ path: resolve(__dirname, '.env.local') })

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function check() {
    const { count, error } = await supabase
        .from('master_traders')
        .select('*', { count: 'exact', head: true })

    if (error) {
        console.error('DB Error:', error)
    } else {
        console.log('Total Traders in DB:', count)
    }
}

check()
