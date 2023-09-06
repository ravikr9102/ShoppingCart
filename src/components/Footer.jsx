import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

export default function Footer(){
    return(
        <section className="p-12 border-t">
            <div className="grid grid-cols-4 gap-4 py-4">
                <div>
                    <h5>Visit Store</h5>
                    <ul className="py-1">
                        <li>Purnea: Get Directions</li>
                    </ul>
                </div>
                <div>
                    <h5>Contact Us</h5>
                    <ul className="py-1 text-sm">
                        <li className="py-1">FAQ</li>
                        <li className="py-1">Blogs</li>
                        <li className="py-1">Terms & Conditions</li>
                    </ul>
                </div>
                <div>
                    <h5>PLACE RETURN/EXCHANGE REQUEST</h5>
                    <ul className="py-1 text-sm">
                        <li className="py-1">RETURNS/EXCHANGE POLICY</li>
                        <li className="py-1">TRACK YOUR ORDER</li>
                    </ul>
                </div>
                <div className="sm:ml-20">
                    <h5 >CUSTOMER CARE</h5>
                    <ul className="py-1 text-sm">
                        <li className="py-1">Timings: 10 AM - 6:00 PM (Mon - Sat)</li>
                        <li className="py-1">call: +91 9102745605</li>
                        <li className="py-1">email: rkravikr9102@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <h5>SIGN UP AND SAVE</h5>
                <p className="py-4">Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!</p>
                <input className="" type="text" placeholder="Enter your email"></input>
                <div className="flex items-center py-5">
                <AiFillLinkedin className="mr-5 text-3xl" />
                <AiFillTwitterCircle className="mr-5 text-3xl" />
                <AiFillInstagram className="mr-5 text-3xl" />
                </div>
            </div>
            <div className="text-center text-sm py-10"><p>© 2023 SNITCH | All Rights Reserved</p></div>
        </section>
    )
}