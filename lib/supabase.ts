import { createClient } from '@supabase/supabase-js'
import { Database } from '../utils/types/supabase'

export const supabase = createClient<Database>(
	`${process.env.NEXT_PUBLIC_SUPABASE_API_URL}`,
	`${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`
)
