import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'TU_URL_AQUÍ'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'TU_CLAVE_AQUÍ'

export const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
