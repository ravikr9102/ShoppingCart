import React from "react";
import item from "../utils/item";

export default function Item(){
    return(
        <div className="grid grid-cols-4 gap-4 sm:ml-9 mr-4 py-4 pt-12">
            {
                item.map((e) => (
                    <div>
                    <img src={`/images/item/${e.img}_1.webp`} />
                    <ul className="text-center p-2">
                        <li className="uppercase font-bold">{e.title}</li>
                        <li>{e.style}</li>
                    </ul>
                    </div>
                ))
            }
        </div>
    )
}