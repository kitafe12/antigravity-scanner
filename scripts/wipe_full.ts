
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config({ path: resolve(__dirname, '../.env.local') })

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function wipe() {
    console.log('--- DELETING ALL TRADERS ---')
    const { error, count } = await supabase
        .from('master_traders')
        .delete({ count: 'exact' })
        .neq('exchange_uid', '0') // Delete everything

    if (error) console.error(error)
    else console.log(`Deleted ${count} total entries.`)
}

wipe()
