import axios from "axios";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { amount, currency, receipt } = req.body;
  
        const razorpayResponse = await axios.post(
          'https://api.razorpay.com/v1/orders',
          {
            amount: amount * 100, // amount in smallest currency unit (e.g., paisa)
            currency,
            receipt,
            payment_capture: 1,
          },
          {
            headers: {
              Authorization: `Basic ${Buffer.from(
                process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID + ':' + process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET
              ).toString('base64')}`,
            },
          }
        );
  
        res.status(200).json({ order: razorpayResponse.data });
      } catch (error) {
        console.error('Error creating Razorpay order:', error.message);
        res.status(500).json({ error: 'Order creation failed' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }