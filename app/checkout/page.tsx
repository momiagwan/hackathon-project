"use client";
import React from 'react';
import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/footer';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('bank');

  return (

    <div className="min-h-screen bg-gray-50">
    <Header/>
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Checkout</h1>
          <nav className="text-sm">
            <a href="/" className="text-gray-600">Home</a> / Checkout
          </nav>
        </div>
      </header>

      {/* Checkout Form */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing details</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-2 w-full rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-2 w-full rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            <select className="border border-gray-300 p-2 w-full rounded-md">
              <option>Sri Lanka</option>
            </select>
            <input
              type="text"
              placeholder="Street Address"
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            <input
              type="text"
              placeholder="Province"
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            <textarea
              placeholder="Additional Information"
              className="border border-gray-300 p-2 w-full rounded-md"
              rows={4}
            />
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Product</h2>
          <div className="bg-white shadow-md p-4 rounded-lg space-y-4">
            <div className="flex justify-between">
              <span>Asgaard Sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>Rs. 250,000.00</span>
            </div>

            {/* Payment Options */}
            <div className="space-y-2">
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                  />
                  <span>Direct Bank Transfer</span>
                </label>
                <p className="text-sm text-gray-600">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not
                  be shipped until the funds have cleared.
                </p>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    onChange={() => setPaymentMethod('cash')}
                  />
                  <span>Cash On Delivery</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
              Place Order
            </button>
          </div>
        </div>
      </div>

      
      <footer className="bg-gray-100 py-6 mt-8">
        <div className="container mx-auto px-4 text-center space-y-2">
          <div className="text-sm">Free Delivery | 90 Days Return | Secure Payment</div>
        <Footer/>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
