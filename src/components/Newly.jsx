import React from 'react';
import { useState } from 'react';
import item from '../utils/constant';
import { Link } from 'react-router-dom';

export default function Newly() {
  const img = [
    ` /images/items/${item[7].sku}-1-product.webp`,
    ` /images/items/${item[7].sku}-2-product.webp`,
  ];
  // comment 6/9/23 
  const [image, setImage] = useState(img[0]);
  return (
    <section>
      <h1 className="py-4 text-center text-4xl font-medium">Newly Added</h1>
      <div className="sm:ml-9 py-4">
        <div className="grid grid-cols-4 gap-5">
          {item.map((product) => (
              <div className="my-6">
                <img
                  src={image}
                  onMouseOver={() => setImage(img[1])}
                  onMouseOut={() => setImage(img[0])}
                />
                <ul className="text-center">
                  <li className="py-1">{product.title}</li>
                  <li className="pb-4 tracking-wider">{product.price}</li>
                  <li className="my-1">
                    {product.availableSizes.map((e) => (
                      <span className="ml-3 border border-gray-400 p-2 rounded-sm">
                        {e}
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
          ))}
        </div>
        <div className='text-center mt-10'>
        <Link className='uppercase bg-black text-white py-2 px-7 text-sm' to='/All'>
        view all
        </Link>
        </div>
      </div>
    </section>
  );
}
