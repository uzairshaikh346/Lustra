"use client";
import Link from 'next/link';
import React from 'react';
import { addToCart } from '../action/action';
import swal from 'sweetalert2';

export interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  stock: number;
  quantity: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = () => {
    addToCart(product);
    swal.fire({
      background: 'black',
      color: 'white',
      position: 'top-right',
      icon: 'success',
      title: `"${product.name}" added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="flex flex-col w-full md:w-1/3 p-16 transform transition duration-300 bg-black text-white hover:bg-gray-700 hover:text-yellow-300 hover:shadow-lg hover:-translate-y-2 animate-fadeIn">
      <div className="flex flex-col grow text-xl">
        <img
          loading="lazy"
          src={product.imageUrl}
          alt={product.name}
          className="object-contain w-full transition-transform duration-300 hover:scale-110"
        />
        <div className="mt-4 text-center md:text-left">{product.name}</div>
        <h1 className="mt-2">{product.price} RS</h1>
        <div className="flex justify-around mt-5 text-[15px] md:text-lg">
          <button className="border-[2px] border-gray-400 py-2 px-4 transition-all duration-200 bg-transparent text-white hover:bg-white hover:text-black hover:border-white">
            <Link href={`/product_detail/${product._id}`}>View Product</Link>
          </button>
          <button
            className="border-[2px] border-gray-400 py-2 px-4 transition-all duration-200 bg-transparent text-white hover:bg-white hover:text-black hover:border-white"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
