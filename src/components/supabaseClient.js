import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://zkhendzouvpqpuzphbpv.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpraGVuZHpvdXZwcXB1enBoYnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwMTIyNzMsImV4cCI6MjAzOTU4ODI3M30.FWoyZEqpWwsliIiRAtlGpi9gBDAA89r1EKjCge6U3y8'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase