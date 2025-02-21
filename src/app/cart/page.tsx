"use client";
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { getCartItems, removeFromCart, updateCartQuantity } from '../action/action';
import { Product } from '../components/Productcard';
import { client } from '@/sanity/lib/client';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    contactNumber: '',
    email: ''
  });

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: '#d33',
      confirmButtonText: "Yes, remove it!",
    }).then((result: any) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed", "Item has been removed!", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.quantity + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity > 1) {
      handleQuantityChange(id, product.quantity - 1);
    }
  };

  const sendOrderToSanity = async (userData: any, cartItems: Product[]) => {
    try {
      const order = {
        _type: 'order',
        user: {
          name: userData.name,
          address: userData.address,
          contactNumber: userData.contactNumber,
          email: userData.email
        },
        products: cartItems.map(item => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        paymentMethod: 'Cash on Delivery',
        orderDate: new Date().toISOString()
      };
  
      await client.create(order);
      console.log('Order sent to Sanity:', order);
    } catch (error) {
      console.error('Error sending order to Sanity:', error);
    }
  };
  
  const handleSubmitOrder = () => {
    Swal.fire({
      title: 'Confirm Order',
      html: `
        <div style="text-align: left;">
          <p><strong>Name:</strong> ${userData.name}</p>
          <p><strong>Address:</strong> ${userData.address}</p>
          <p><strong>Contact Number:</strong> ${userData.contactNumber}</p>
          <p><strong>Email:</strong> ${userData.email}</p>
          <p><strong>Payment Method:</strong> Cash on Delivery</p>
          <p><strong>Order Details:</strong></p>
          <ul>
            ${cartItems.map(item => `<li>${item.name} - ${item.quantity} pcs - PKR: ${item.price}</li>`).join('')}
          </ul>
          <p><strong>Total Items:</strong> ${cartItems.length}</p>
        </div>
      `,
      icon: 'info',
      background: "black",
      color: "white",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm Order',
    }).then((result: any) => {
      if (result.isConfirmed) {
        sendOrderToSanity(userData, cartItems);
        Swal.fire("Success", "Your order has been placed!", "success");
      }
    });
  };

  const handleProceedToCheckout = () => {
    setShowForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className='w-full bg-black/80'>
      <div className="container mx-auto p-4 md:p-8 bg-black text-gray-400">
        <div className="shadow-md rounded-lg p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-4 md:text-3xl text-gray-200">Your Cart</h1>

          {cartItems.length > 0 ? (
            <div>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-4 mb-4">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                      <img src={item.imageUrl} className="rounded w-32" alt={item.name} />
                      <div>
                        <h2 className="text-lg font-medium md:text-xl">{item.name}</h2>
                        <h3>PKR: {item.price}</h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <button
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded"
                        onClick={() => handleDecrement(item._id)}
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border rounded">{item.quantity}</span>
                      <button
                        className="px-3 py-1 bg-gray-200 text-gray-800 rounded"
                        onClick={() => handleIncrement(item._id)}
                      >
                        +
                      </button>
                      <button
                        className="text-red-500 hover:underline ml-4 md:ml-8"
                        onClick={() => handleRemove(item._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-200 mt-8">Total</h2>
                <div className="flex justify-between mt-4">
                  <span>Total:</span>
                  <span>PKR: {(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)).toFixed(2)}</span>
                </div>
              </div>
              {!showForm && (
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded mt-4"
                  onClick={handleProceedToCheckout}
                >
                  Proceed to Checkout
                </button>
              )}
              {showForm && (
                <div className="mt-8 space-y-4">
                  <h2 className="text-xl font-bold text-gray-200">Checkout Form</h2>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Home Address"
                    value={userData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200"
                    required
                  />
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={userData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded bg-gray-800 text-gray-200"
                    required
                  />
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded mt-4"
                    onClick={handleSubmitOrder}
                  >
                    Confirm Order
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>Your cart is empty</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
