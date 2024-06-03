import { InvoiceDocument } from "@/components/InvoiceDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

const About = () => {
    const [isClient, setIsClient] = useState(false)

    const newdata = {
        "headerLogo": {
            "sourceUrl": "https://multiatesting.in/elcom-powerstrip/wp-content/uploads/2024/05/Logo.svg"
        },
        "menuInfo": [
            {
                "link": {
                    "title": "About",
                    "target": "",
                    "url": "#aboutSec"
                },
                "scrollToSectionLink": true
            },
            {
                "link": {
                    "title": "Details",
                    "target": "",
                    "url": "#detailSec"
                },
                "scrollToSectionLink": true
            },
            {
                "link": {
                    "title": "Features",
                    "target": "",
                    "url": "#featuresSec"
                },
                "scrollToSectionLink": true
            },
            {
                "link": {
                    "title": "Benefits",
                    "target": "",
                    "url": "#benefitsSec"
                },
                "scrollToSectionLink": true
            },
            {
                "link": {
                    "title": "Highlights",
                    "target": "",
                    "url": "#highlightSec"
                },
                "scrollToSectionLink": true
            },
            {
                "link": {
                    "title": "FAQs",
                    "target": "",
                    "url": "#faqSec"
                },
                "scrollToSectionLink": true
            }
        ],
        "ctaOneInfo": {
            "title": "Contact",
            "target": "",
            "url": "#"
        },
        "ctaTwoInfo": {
            "title": "BUY NOW",
            "target": "",
            "url": "#"
        },
        "footerCopyrightInfo": "© Elcom International %s",
        "footerElcomLink": {
            "title": "elcom-in.com",
            "target": "_blank",
            "url": "http://elcom-in.com"
        },
        "twitterUri": "https://twitter.com",
        "linkedinUri": "https://www.linkedin.com",
        "facebookUri": "https://www.facebook.com",
        "youtubeUri": "https://www.youtube.com",
        "pdfLogo": {
            "sourceUrl": "https://multiatesting.in/elcom-powerstrip/wp-content/uploads/2024/05/Logo.png"
        },
        "pdfAddressInfo": "20, Prabhadevi Industrial Estate 408,\r\nVeer Savarkar Marg, Prabhadevi,\r\nMumbai, Maharashtra 400 025, India",
        "pdfGstInfo": "GST No: XXXXXXXXXXXXXXX",
        "pdfInvoiceText": "Invoice:",
        "pdfOrderDateText": "Order Date: ",
        "pdfCustomerDetailsText": "Customer Details",
        "pdfShippingAddressText": "Shipping Address",
        "pdfProductCodeText": "Product code",
        "pdfProductNameText": "Product Name",
        "pdfColorText": "Color",
        "pdfQuantityText": "Quantity",
        "pdfPriceText": "Price",
        "pdfSubtotalText": "Subtotal:",
        "pdfShippingText": "Shipping:",
        "pdfTotalText": "Total:",
        "pdfThankYouText": "Thank you for your purchase!",
        "successImage": {
            "sourceUrl": "https://multiatesting.in/elcom-powerstrip/wp-content/uploads/2024/05/sucess.svg"
        },
        "successHeading": "Your Payment is Successful!",
        "successDescription": "Thank you for your payment. An automated payment receipt will be sent to your registered email.\r\n\r\n",
        "successDownloadInvoiceButtonText": "Download Invoice",
        "successBackHomeText": "Page while be automatically redirected to the main page or click button",
        "successBackHomeButtonText": "Back home",
        "failImage": {
            "sourceUrl": "https://multiatesting.in/elcom-powerstrip/wp-content/uploads/2024/05/fail.svg"
        },
        "failHeading": "Payment Failed!",
        "failDescription": "Unfortunately payment was rejected, seems like there was some trouble We are there with you, just hold back.\r\n\r\n",
        "failRetryButtonText": "RETRY",
        "failBackHomeText": "Page while be automatically redirected to the main page or click button ",
        "failBackHomeButtonText": "Back home"
    }

      const newOrderInfo = {
        "id": 419,
        "parent_id": 0,
        "status": "processing",
        "currency": "INR",
        "version": "8.9.1",
        "prices_include_tax": false,
        "date_created": "2024-05-31T05:43:46",
        "date_modified": "2024-05-31T05:44:14",
        "discount_total": "0.00",
        "discount_tax": "0.00",
        "shipping_total": "0.00",
        "shipping_tax": "0.00",
        "cart_tax": "269.82",
        "total": "1768.82",
        "total_tax": "269.82",
        "customer_id": 0,
        "order_key": "wc_order_VSLkxyzo532O9",
        "billing": {
            "first_name": "Shubhama",
            "last_name": "Rathod",
            "company": "",
            "address_1": "Swati park",
            "address_2": "Kalawad road",
            "city": "Rajkot",
            "state": "GJ",
            "postcode": "360002",
            "country": "IN",
            "email": "shubham@gmail.com",
            "phone": "9874563210"
        },
        "shipping": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "state": "",
            "postcode": "",
            "country": "",
            "phone": ""
        },
        "payment_method": "razorpay",
        "payment_method_title": "Razor Pay Payment",
        "transaction_id": "",
        "customer_ip_address": "",
        "customer_user_agent": "",
        "created_via": "rest-api",
        "customer_note": "",
        "date_completed": null,
        "date_paid": "2024-05-31T05:44:14",
        "cart_hash": "",
        "number": "419",
        "meta_data": [
            {
                "id": 431,
                "key": "razorpay_order_id",
                "value": "order_OGzQHPSMp8VMAw"
            },
            {
                "id": 432,
                "key": "razorpay_payment_id",
                "value": "pay_OGzQSOqLHGQg3k"
            },
            {
                "id": 433,
                "key": "razorpay_signature",
                "value": "936456d4880a233e2d73937a35d57fcbf5a91e0f2646b5f3b3b760817772c2ce"
            }
        ],
        "line_items": [
            {
                "id": 268,
                "name": "Elcom Power Strip - Blue",
                "product_id": 146,
                "variation_id": 158,
                "quantity": 1,
                "tax_class": "",
                "subtotal": "1499.00",
                "subtotal_tax": "269.82",
                "total": "1499.00",
                "total_tax": "269.82",
                "taxes": [
                    {
                        "id": 3,
                        "total": "269.82",
                        "subtotal": "269.82"
                    }
                ],
                "meta_data": [
                    {
                        "id": 2208,
                        "key": "pa_color",
                        "value": "blue",
                        "display_key": "Color",
                        "display_value": "Blue"
                    }
                ],
                "sku": "product222",
                "price": 1499,
                "image": {
                    "id": 307,
                    "src": "https://multiatesting.in/elcom-powerstrip/wp-content/uploads/2024/05/thumbfull1.png"
                },
                "parent_name": "Elcom Power Strip"
            }
        ],
        "tax_lines": [
            {
                "id": 269,
                "rate_code": "IN-IGST-2",
                "rate_id": 3,
                "label": "IGST",
                "compound": false,
                "tax_total": "269.82",
                "shipping_tax_total": "0.00",
                "rate_percent": 18,
                "meta_data": []
            }
        ],
        "shipping_lines": [],
        "fee_lines": [],
        "coupon_lines": [],
        "refunds": [],
        "payment_url": "https://multiatesting.in/elcom-powerstrip/checkout/order-pay/419/?pay_for_order=true&key=wc_order_VSLkxyzo532O9",
        "is_editable": false,
        "needs_payment": false,
        "needs_processing": true,
        "date_created_gmt": "2024-05-31T05:43:46",
        "date_modified_gmt": "2024-05-31T05:44:14",
        "date_completed_gmt": null,
        "date_paid_gmt": "2024-05-31T05:44:14",
        "currency_symbol": "₹",
        "_links": {
            "self": [
                {
                    "href": "https://multiatesting.in/elcom-powerstrip/wp-json/wc/v3/orders/419"
                }
            ],
            "collection": [
                {
                    "href": "https://multiatesting.in/elcom-powerstrip/wp-json/wc/v3/orders"
                }
            ]
        }
    }

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <>
            <h1>HELLo</h1>
            <h1>HELLo</h1>
            <h1>HELLo</h1>
            <InvoiceDocument orderInfo={newOrderInfo} data={newdata} />
            {(isClient && newOrderInfo) &&
                <PDFDownloadLink document={<InvoiceDocument orderInfo={newOrderInfo} data={newdata} />} fileName="invoice.pdf">
                    {({ loading }) => (loading ? 'Loading invoice ...' : 'Download receipt')}
                </PDFDownloadLink>
            }
            
        </>
    );
}

export default About;