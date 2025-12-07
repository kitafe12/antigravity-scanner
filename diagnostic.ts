
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

// Load .env.local manually for the script
const envPath = path.resolve(process.cwd(), '.env.local')
const envConfig = dotenv.parse(fs.readFileSync(envPath))

const supabaseUrl = envConfig['NEXT_PUBLIC_SUPABASE_URL']
const supabaseServiceKey = envConfig['SUPABASE_SERVICE_ROLE_KEY']

console.log('--- DIAGNOSTIC START ---')
console.log('Checking credentials...')
if (!supabaseUrl) console.error('FAIL: NEXT_PUBLIC_SUPABASE_URL is missing')
else console.log('OK: Supabase URL found')

if (!supabaseServiceKey) console.error('FAIL: SUPABASE_SERVICE_ROLE_KEY is missing')
else console.log('OK: Service Role Key found')

if (!supabaseUrl || !supabaseServiceKey) {
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function testConnection() {
    console.log('Testing connection to table "master_traders"...')
    const { data, error } = await supabase.from('master_traders').select('count', { count: 'exact', head: true })

    if (error) {
        console.error('--- CONNECTION OR SCHEMA ERROR ---')
        console.error('Error Code:', error.code)
        console.error('Message:', error.message)
        console.error('Hint:', error.hint || 'No hint')

        if (error.code === '42P01') {
            console.error('\nDIAGNOSIS: The table "master_traders" DOES NOT EXIST.')
            console.error('SOLUTION: You must run the SQL migration in Supabase Dashboard.')
        } else if (error.code === 'PGRST301') {
            console.error('\nDIAGNOSIS: RLS Policy or JWT issue.')
        }
    } else {
        console.log('--- SUCCESS ---')
        console.log('Database connection OK.')
        console.log('Table "master_traders" exists.')
    }
}

testConnection()
