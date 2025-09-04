import { createClient } from '@supabase/supabase-js'

// Use your actual Supabase project credentials
const supabaseUrl = "https://jsgyoqpzhgzhwnwfekjh.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzZ3lvcXB6aGd6aHdud2Zla2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MzgwNDUsImV4cCI6MjA3MjQxNDA0NX0.NFMZR3m1ZmWMTsjHNlAAI6fnqDJ8v9ZV7sE6tgIPxkk"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type QuoteSubmission = {
  id?: string
  created_at?: string
  name: string
  email: string
  phone: string
  vehicle_year: string
  vehicle_make: string
  vehicle_model: string
  service_type: string
  add_ons: string[]
  estimated_total: number
  additional_notes?: string
}

export const submitQuote = async (quoteData: Omit<QuoteSubmission, 'id' | 'created_at'>) => {
  try {
    // Insert quote into database
    const { data, error } = await supabase
      .from('quotes')
      .insert([quoteData])
      .select()
      .single()

    if (error) throw error

    // Send email notification
    const { error: emailError } = await supabase.functions.invoke('quote-email', {
      body: { quoteData }
    })

    if (emailError) {
      console.error('Email sending failed:', emailError)
      // Don't throw here - quote was saved successfully
    }

    return { data, success: true }
  } catch (error) {
    console.error('Error submitting quote:', error)
    throw error
  }
}