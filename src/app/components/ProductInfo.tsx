"use client";
import React, { useEffect, useState } from 'react';
import ProductCard, { Product } from './Productcard';
import { client } from '@/sanity/lib/client';

const ProductInfo: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    async function getDataFromSanity() {
      try {
        console.log('Starting data fetch from Sanity...');
        const data: Product[] = await client.fetch(`
          *[_type == "product"]{
            _id,
            name,
            "imageUrl": image.asset->url,
            description,
            price,
            stock
          }
        `);
        console.log('Data fetched from Sanity:', data);
        setProductData(data);
      } catch (error) {
        console.error('Error fetching data from Sanity:', error);
      }
    }

    getDataFromSanity();
  }, []);

  console.log('Product Data State:', productData);

  return (
    <div className="flex flex-col bg-black" id='Products'>
      <div className="shrink-0 w-full h-0 " />
      <div className="flex flex-col items-center pt-16 w-full max-md:pl-5 fade-in">
        <h1 className="text-3xl md:text-5xl font-medium text-[#FFB22C] animate__animated animate__bounce hover:animate-bounce">
          Cosmetics Info
        </h1>
        <div className="mt-24 w-full max-md:mt-10">
          <div className="flex flex-wrap justify-center max-md:flex-col">
            {productData.length > 0 ? (
              productData.map((product: Product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p className="text-white">No products available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
