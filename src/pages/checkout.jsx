import CheckoutSec from "@/components/CheckoutSec";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
// const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";


export default function CheckoutPage() {
  const [rzpLoaded, setRzpLoaded] = useState(false);
  console.log(rzpLoaded)
  const handlePayment = async () => {
    try {
      const response = await fetch('/api/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 100,
          currency: 'INR',
          receipt: 'order_receipt',
        }),
      });
  
      const data = await response.json();
      const { order } = data;
  
      // Use the order object returned by the API for payment initiation
      console.log('Order created:', order);

      if (window && window.Razorpay && rzpLoaded) {
        const rzp = new window.Razorpay({
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: order.amount,
          currency: order.currency,
          name: 'Your Company Name',
          description: 'Payment for Product/Service',
          order_id: order.id,
          handler: function (response) {
            console.log(response);
            // Handle successful payment response
          },
          prefill: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            contact: '9876543210',
          },
          notes: {
            address: 'Razorpay Corporate Office',
          },
          theme: {
            color: '#F37254',
          },
        });
        
        rzp.on('payment.failed', function (response) {
          // Handle payment failure
          console.error('Payment failed:', response.error.code, response.error.description);
        });
  
        rzp.open();
      }
    } catch (error) {
      console.error('Error creating order:', error.message);
    }
  };
  useEffect(() => {
    const api = new WooCommerceRestApi({
        url: process.env.NEXT_PUBLIC_WOO_SITE_URL,
        consumerKey: process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY,
        consumerSecret: process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET,
        version: "wc/v3"
    });

    // api.get('shipping/zones/1/methods')
    // .then(response => {
    //     console.log('Order created successfully:', response.data);
    // })
    // .catch(error => {
    //     console.error('Error creating order:', error.response.data);
    // });


    const orderData = {
      payment_method: 'cod',
      payment_method_title: 'Cash on delivery',
      set_paid: true,
      billing: {
          first_name: 'John',
          last_name: 'Doe',
          address_1: '123 Main St',
          city: 'Anytown',
          state: 'NY',
          postcode: '12345',
          country: 'US',
          email: 'john.doe@example.com',
          phone: '123456789'
      },
      line_items: [
        {
          product_id: 138,
          quantity: 1
        }
      ]
  };
  // api.post('orders', orderData)
  //   .then(response => {
  //       console.log('Order created successfully:', response.data);
  //   })
  //   .catch(error => {
  //       console.error('Error creating order:', error.response.data);
  //   });
    // console.log("api",api)
  },[])
  return (
   <>
    <CheckoutSec rzpLoaded={rzpLoaded}/>
    <Script
      src="https://checkout.razorpay.com/v1/checkout.js"
      onLoad={() => setRzpLoaded(true)}
    />
    {/* <div style={{marginTop:150}}> */}
    {/* <h5 onClick={handlePayment}>Click me</h5> */}
    {/* <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setRzpLoaded(true)}
      />
    </div> */}
   </>
     
  );
}
