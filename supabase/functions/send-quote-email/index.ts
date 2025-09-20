import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json();
    console.log('Received request:', body);
    const quoteData = body.quoteData || body;

    const emailHtml = `
      <h2>New Quote Submission - Your Favorite Detailer</h2>
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h3>Customer Information:</h3>
        <p><strong>Name:</strong> ${quoteData.name}</p>
        <p><strong>Email:</strong> ${quoteData.email}</p>
        <p><strong>Phone:</strong> ${quoteData.phone}</p>
        
        <h3>Vehicle Information:</h3>
        <p><strong>Vehicle:</strong> ${quoteData.vehicle_year} ${quoteData.vehicle_make} ${quoteData.vehicle_model}</p>
        
        <h3>Service Details:</h3>
        <p><strong>Service Type:</strong> ${quoteData.service_type}</p>
        <p><strong>Add-ons:</strong> ${quoteData.add_ons.join(', ') || 'None'}</p>
        <p><strong>Estimated Total:</strong> $${quoteData.estimated_total}</p>
        
        ${quoteData.additional_notes ? `
        <h3>Additional Notes:</h3>
        <p>${quoteData.additional_notes}</p>
        ` : ''}
        
        <hr style="margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          This quote was submitted through yourfavoritedetailer.com
        </p>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'quotes@yourfavoritedetailer.com',
        to: ['zachmatthes@yahoo.com'],
        subject: `New Quote Request - ${quoteData.name}`,
        html: emailHtml,
      }),
    })

    if (!res.ok) {
      const error = await res.text()
      throw new Error(`Resend API error: ${error}`)
    }

    const data = await res.json()

    return new Response(
      JSON.stringify({ success: true, messageId: data.id }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})