
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

// Load .env.local manually for the script
const envPath = path.resolve(process.cwd(), '.env.local')
const envConfig = dotenv.parse(fs.readFileSync(envPath))

const supabaseUrl = envConfig['NEXT_PUBLIC_SUPABASE_URL']
const supabaseServiceKey = envConfig['SUPABASE_SERVICE_ROLE_KEY']

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing credentials')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function testWrite() {
    console.log('Testing WRITE (Upsert) permissions...')
    const testTrader = {
        exchange_name: 'TEST_EXCHANGE',
        exchange_uid: 'TEST_USER_999',
        nickname: 'Test Bot',
        trading_type: 'SPOT',
    }

    const { data, error } = await supabase
        .from('master_traders')
        .upsert(testTrader, { onConflict: 'exchange_name,exchange_uid' })
        .select()

    if (error) {
        console.error('WRITE FAILED:', error)
    } else {
        console.log('WRITE SUCCESS:', data)
    }
}

testWrite()
