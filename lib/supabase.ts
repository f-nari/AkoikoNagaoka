import { createClient } from '@supabase/supabase-js'

const supaBaseUrl =  process.env.SUPABASE_URL as string;
const api_anon_key = process.env.API_ANON_KEY as string

export const supabase = createClient(supaBaseUrl, api_anon_key)
