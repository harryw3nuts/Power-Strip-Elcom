import axios from "axios";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { orderId } = req.body;
  
        const razorpayResponse = await axios.patch(
          `https://api.razorpay.com/v1/orders/${orderId}`,
          {
            notes:{
              "cancleOrderByUser": "User has cancled this order manually while closing Payment popup",
            }
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
        console.error('Error updating Razorpay order:', error.message);
        res.status(500).json({ error: 'Order updation failed' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }