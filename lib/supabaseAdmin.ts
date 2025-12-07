import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error('CRITICAL ERROR: Supabase credentials are not set in the environment variables.')
    throw new Error('Supabase credentials missing.')
}

// Note: This client has admin privileges. Use only in server-side contexts.
export const supabaseAdmin = createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
})
