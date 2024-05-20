import Link from "next/link";
import Image from "next/image";
import thumb1 from '@/asset/images/thumb1.png';
import Select from "react-dropdown-select";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const CheckoutSec = () => {
    const context = useContext(ThemeContext);
    const { products } = context;
    console.log("products", products)
    const [values, setValues] = useState();
    const options = [
        { id: 'AN', name: 'Andaman and Nicobar Islands' },
        { id: 'AP', name: 'Andhra Pradesh' },
        { id: 'AR', name: 'Arunachal Pradesh' },
        { id: 'AS', name: 'Assam' },
        { id: 'BR', name: 'Bihar' },
        { id: 'CH', name: 'Chandigarh' },
        { id: 'CG', name: 'Chhattisgarh' },
        { id: 'DN', name: 'Dadra and Nagar Haveli' },
        { id: 'DD', name: 'Daman and Diu' },
        { id: 'DL', name: 'Delhi' },
        { id: 'GA', name: 'Goa' },
        { id: 'GJ', name: 'Gujarat' },
        { id: 'HR', name: 'Haryana' },
        { id: 'HP', name: 'Himachal Pradesh' },
        { id: 'JK', name: 'Jammu and Kashmir' },
        { id: 'JH', name: 'Jharkhand' },
        { id: 'KA', name: 'Karnataka' },
        { id: 'KL', name: 'Kerala' },
        { id: 'LA', name: 'Ladakh' },
        { id: 'LD', name: 'Lakshadweep' },
        { id: 'MP', name: 'Madhya Pradesh' },
        { id: 'MH', name: 'Maharashtra' },
        { id: 'MN', name: 'Manipur' },
        { id: 'ML', name: 'Meghalaya' },
        { id: 'MZ', name: 'Mizoram' },
        { id: 'NL', name: 'Nagaland' },
        { id: 'OR', name: 'Odisha' },
        { id: 'PY', name: 'Puducherry' },
        { id: 'PB', name: 'Punjab' },
        { id: 'RJ', name: 'Rajasthan' },
        { id: 'SK', name: 'Sikkim' },
        { id: 'TN', name: 'Tamil Nadu' },
        { id: 'TS', name: 'Telangana' },
        { id: 'TR', name: 'Tripura' },
        { id: 'UP', name: 'Uttar Pradesh' },
        { id: 'UK', name: 'Uttarakhand' },
        { id: 'WB', name: 'West Bengal' }
    ];



    return (
        <>
            <div className="chekoutWrap">
                <div className="container">
                    <div className="checkoutGrp">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="checkoutForm">
                                    <div className="checkoutNav">
                                        <ul>
                                            <li className="powerDirect">
                                                <Link href={'#'}>Powerstrip</Link>
                                            </li>
                                            <li className="checkoutDirect">
                                                <Link href={'#'}>Checkout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="checkoutBox">
                                        <div className="personalDtl">
                                            <div className="checkoutHead">
                                                <h2>Checkout</h2>
                                            </div>
                                            <div className="innerForm">
                                                <div className="innerHead">
                                                    <h4>Personal  Details</h4>
                                                </div>
                                                <div className="innerformDtl">
                                                    <div className='contactInner'>
                                                        <input type="text" name="name" placeholder="Name" />
                                                    </div>
                                                    <div className='contactInner'>
                                                        <input type="number" name="mobile" placeholder="Mobile Number" />
                                                    </div>
                                                    <div className='contactInner'>
                                                        <input type="email" name="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="innerForm">
                                                <div className="innerHead">
                                                    <h4>Shipping Details</h4>
                                                </div>
                                                <div className="innerformDtl">
                                                    <div className='contactInner'>
                                                        <input type="text" name="addressLine1" placeholder="Address line 1" />
                                                    </div>
                                                    <div className='contactInner'>
                                                        <input type="text" name="addressLine2" placeholder="Address line 2" />
                                                    </div>
                                                    <div className='contactInner'>
                                                        <input type="text" name="city" placeholder="City" />
                                                    </div>
                                                    <div className='contactInner'>
                                                        <Select
                                                            options={options}
                                                            labelField="name"
                                                            valueField="id"
                                                            onChange={(values) => setValues(values)}
                                                            placeholder="State"
                                                        />
                                                    </div>
                                                    <div className='contactInner'>
                                                        <input type="number" name="pincode" placeholder="PIn code" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="titleBox">
                                    <div className="orderInner">
                                        <div className="titleHead">
                                            <h4>Your order</h4>
                                        </div>
                                        {(products.length > 0) ?
                                            <>
                                                {products?.map((product, index) => {
                                                    return (
                                                        <div className="orderBox" key={index}>
                                                            <div className="orderImg">
                                                                <Image src={product?.image?.sourceUrl} width={120} height={120} alt="thumb1"></Image>
                                                            </div>
                                                            <div className="orderDtl">
                                                                <ul>
                                                                    <li className="orderHead">{product.name}</li>
                                                                    <li>Product code : 99920KISH</li>
                                                                    {product?.attributes?.nodes.map((attribute) => {
                                                                        const { label, id, value } = attribute;
                                                                        return <li key={id}>Product {label} : {value}</li>
                                                                    })}
                                                                    {product?.selectedQty && <li>Quantity : {product.selectedQty}</li>}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                <div className="totalDtl">
                                                    <div className="totalBox">
                                                        <ul>
                                                            <li>
                                                                <p>Total</p>
                                                                <span>₹ 1099/-</span>
                                                            </li>
                                                            <li>
                                                                <p>Tax</p>
                                                                <span>₹ 0/-</span>
                                                            </li>
                                                            <li>
                                                                <p>Shipping</p>
                                                                <span>₹ 40/-</span>
                                                            </li>
                                                            <li>
                                                                <p className="subHead">Subtotal</p>
                                                                <span className="totalRs">₹ 1139/-</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="btnCheckbox">
                                                    <div className="checkbox_wrap">
                                                        <label>
                                                            <input name="privacyCB" type="checkbox" value="false" /><span>I've taken notice of the <Link target="" href="/privacy-policy">Privacy Statement</Link></span>
                                                        </label>
                                                    </div>
                                                    <div className="proceedBtn">
                                                        <Link href={'#'}>Proceed</Link>
                                                    </div>
                                                </div>
                                            </>
                                            : <h5>Please add product to checkout from <Link href={"/"}>here.</Link></h5>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutSec;