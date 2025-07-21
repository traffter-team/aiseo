import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Database {
  public: {
    Tables: {
      casino_submissions: {
        Row: {
          id: string;
          brand_name: string;
          target_country: string;
          target_language: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          brand_name: string;
          target_country: string;
          target_language: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          brand_name?: string;
          target_country?: string;
          target_language?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}

// Typed Supabase client
export const typedSupabase = createClient<Database>(supabaseUrl, supabaseAnonKey); 