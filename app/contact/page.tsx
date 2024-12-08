import { FC } from 'react';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/footer';

const Contact: FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
        <Header/>
      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('/background-image.jpeg')" }}>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="text-sm mt-2">
            <a href="/" className="hover:underline">Home</a> / Contact
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-4">Get In Touch With Us</h2>
        <p className="text-gray-600 text-center mb-8">
          For more information about our product & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-gray-800">📍</div>
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-gray-800">📞</div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-gray-800">⏰</div>
              <div>
                <h4 className="font-medium">Working Time</h4>
                <p className="text-gray-600">Monday–Friday: 9:00–22:00</p>
                <p className="text-gray-600">Saturday–Sunday: 9:00–21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Abc"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Abc@def.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="This is an optional"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                placeholder="Hi! I'd like to ask about..."
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="font-medium">Free Delivery</h4>
            <p className="text-gray-600">For all orders over $50, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h4 className="font-medium">90 Days Return</h4>
            <p className="text-gray-600">If goods have problems, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h4 className="font-medium">Secure Payment</h4>
            <p className="text-gray-600">100% secure payment, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 text-center text-sm">
    <Footer/>
      </footer>
    </div>
  );
};

export default Contact;
