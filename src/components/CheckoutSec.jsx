import Link from "next/link";
import Image from "next/image";
import thumb1 from '@/asset/images/thumb1.png';
// import Select from "react-dropdown-select";
import { useState } from "react";

const CheckoutSec = () =>{

    // const options = [
    //     {
    //       id: 1,
    //       name: 'Leanne Graham'
    //     },
    //     {
    //       id: 2,
    //       name: 'Ervin Howell'
    //     }
    //   ];


      
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
                                                    <input type="text" name="Name" placeholder="Name"/>
                                                </div>
                                                <div className='contactInner'>
                                                    <input type="number" name="Mobile Number" placeholder="Mobile Number"/>
                                                </div>
                                                <div className='contactInner'>
                                                    <input type="email" name="email" placeholder="Email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="innerForm">
                                            <div className="innerHead">
                                                <h4>Shipping Details</h4>
                                            </div>
                                            <div className="innerformDtl">
                                                <div className='contactInner'>
                                                    <input type="text" name="Address line 1" placeholder="Address line 1"/>
                                                </div>
                                                <div className='contactInner'>
                                                    <input type="text" name="Address line 2" placeholder="Address line 2"/>
                                                </div>
                                                <div className='contactInner'>
                                                {/* <Select
                                                    options={options}
                                                    labelField="name"
                                                    valueField="id"
                                                    onChange={(values) => this.setValues(values)}
                                                    />; */}
                                                </div>
                                                <div className='contactInner'>
                                                    <input type="text" name="Address line 2" placeholder="Address line 2"/>
                                                </div>
                                                <div className='contactInner'>
                                                    <input type="number" name="PIn code" placeholder="PIn code"/>
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
                                    <div className="orderBox">
                                        <div className="orderImg">
                                            <Image src={thumb1} alt="thumb1"></Image>
                                        </div>
                                        <div className="orderDtl">
                                            <ul>
                                                <li className="orderHead">Elcom Power Strip </li>
                                                <li>Product code : 99920KISH</li>
                                                <li>Product color : White</li>
                                                <li>Quantity : 2</li>
                                            </ul>
                                        </div>
                                    </div>
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
                                                <input name="privacyCB" type="checkbox" value="false"/><span>I've taken notice of the <Link target="" href="/privacy-policy">Privacy Statement</Link></span>
                                            </label>
                                        </div>
                                        <div className="proceedBtn">
                                            <Link href={'#'}>Proceed</Link>
                                        </div>
                                    </div>
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