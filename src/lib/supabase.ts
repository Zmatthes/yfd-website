import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!

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
    const { error: emailError } = await supabase.functions.invoke('send-quote-email', {
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