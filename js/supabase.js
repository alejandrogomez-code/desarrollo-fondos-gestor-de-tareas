import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://hoyqbbeycpgmqydkvznb.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhveXFiYmV5Y3BnbXF5ZGt2em5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwMzk1NDMsImV4cCI6MjA5MjYxNTU0M30.zIjCzGds1r_Hxq_gZfYFGeFawIaiVp1uhIfPwtgEy0w'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
