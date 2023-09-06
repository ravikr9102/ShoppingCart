import React from "react";
import { AiFillShopping, AiOutlineShoppingCart, AiOutlineAlignLeft } from 'react-icons/ai';

export default function Navbar(){
    return(
        <div className="flex justify-between items-center px-16 py-8">
        <div className="text-3xl"><AiOutlineAlignLeft /></div>
            <div className="flex justify-center items-center text-center font-black text-3xl text-uppercase ...">
            <div className="flex justify-center items-center">
            <AiFillShopping />
            <p className="ml-4"> S  N  I  T  C  H </p>
            </div>
            </div>
            <div className="text-3xl"><AiOutlineShoppingCart /></div>
        </div>
    )
}