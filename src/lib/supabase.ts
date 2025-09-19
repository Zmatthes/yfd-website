import { supabase } from "@/integrations/supabase/client"

export { supabase }

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
    console.log("Attempting to insert quote into database...");
    
    // Insert quote into database
    const { data, error } = await supabase
      .from('quotes')
      .insert([quoteData])
      .select()
      .single()

    if (error) {
      console.error("Database insertion failed:", error);
      throw error;
    }

    console.log("Quote saved to database successfully:", data);
    return { data, success: true }
  } catch (error) {
    console.error('Error submitting quote:', error)
    throw error
  }
}