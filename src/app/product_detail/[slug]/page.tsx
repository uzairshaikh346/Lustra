"use client";
import { Product } from '@/app/components/Productcard';
import React, { useEffect, useState } from 'react';
import { addToCart } from '@/app/action/action';
import swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data: Product[] = await client.fetch(
          `*[_type == "product" && _id == $id]{
            _id,
            name,
            "imageUrl": image.asset->url,
            description,
            price,
            stock,
            quantity
          }`,
          { id: params.slug }
        );
        setProduct(data[0]);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
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
    <section className="text-gray-300 bg-black body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.imageUrl}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-[#FFB22C] text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <div className="flex mb-4"></div>
            <p className="leading-relaxed">
              {product.description}
            </p>
            <div className="flex mt-5">
              <span className="title-font font-medium text-2xl text-gray-400">
                Rs {product.price}
              </span>
              <button
                className="ml-auto text-white border-[2px] border-gray-400 py-2 px-6 focus:outline-none hover:border-gray-100 hover:text-white rounded text-sm md:text-lg"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
