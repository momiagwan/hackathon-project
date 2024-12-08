
"use client";
import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/footer';
import React from 'react';
import Image from 'next/image';
// Image
const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>('L');
  const [selectedColor, setSelectedColor] = useState<string | null>('Black');

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    setQuantity((prev) => (type === 'increase' ? prev + 1 : Math.max(prev - 1, 1)));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
       <Header/>
      {/* Breadcrumb */}
      <header className="container mx-auto px-4 py-6">
        
        <nav className="text-sm text-gray-600">
          <a href="/" className="hover:underline">Home</a> / <a href="/shop" className="hover:underline">Shop</a> / Asgaard Sofa
        </nav>
      </header>

      {/* Product Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <Image src="/plain-console-with-teak-mirror.png" alt="Asgaard Sofa" width={300} height={300} className="rounded-lg shadow-md w-full" />
          <div className="flex mt-4 space-x-2">
            <Image src="/granite-dining-table.png" alt="Thumbnail" width={300} height={300} className="w-16 h-16 rounded-lg shadow-md" />
            <Image src="/outdoor-bar-table-and-stool.png" alt="Thumbnail" width={300} height={300} className="w-16 h-16 rounded-lg shadow-md" />
            <Image src="/asgaard sofa.png" alt="Thumbnail" width={300} height={300} className="w-16 h-16 rounded-lg shadow-md" />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Asgaard Sofa</h1>
          <p className="text-gray-600 mb-4">Rs. 250,000.00</p>
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex text-yellow-500">
              ★★★★★
            </div>
            <span className="text-sm text-gray-600">(5 Customer Reviews)</span>
          </div>
          <p className="text-gray-700 mb-4">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with well-balanced audio that boasts a clear midrange and extended highs.
          </p>

          {/* Size Selection */}
          <div className="mb-4">
            <h3 className="font-medium">Size</h3>
            <div className="flex space-x-2 mt-2">
              {['L', 'XL', 'XS'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size ? 'bg-black text-white' : 'bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-4">
            <h3 className="font-medium">Color</h3>
            <div className="flex space-x-2 mt-2">
              {['Black', 'Blue', 'Yellow'].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border ${
                    selectedColor === color ? 'ring-2 ring-black' : 'bg-gray-200'
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                className="px-4 py-2 text-lg"
                onClick={() => handleQuantityChange('decrease')}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-12 text-center border-l border-r border-gray-300"
              />
              <button
                className="px-4 py-2 text-lg"
                onClick={() => handleQuantityChange('increase')}
              >
                +
              </button>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Add To Cart
            </button>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-gray-600">
            <p>SKU: SS001</p>
            <p>Category: Sofas</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
          </div>
        </div>
      </div>

      {/* Tabs (Description, Additional Info, Reviews) */}
      <div className="container mx-auto px-4 mt-12">
        <div className="border-b">
          <div className="flex space-x-8">
            <button className="py-2 text-lg border-b-2 border-black">Description</button>
            <button className="py-2 text-lg">Additional Information</button>
            <button className="py-2 text-lg">Reviews (5)</button>
          </div>
        </div>
        <div className="mt-4 text-gray-700">
          <p>
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes
            the unmistakable look and sound of Marshall, unplugs the cords, and takes the show on the road.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Trenton Modular Sofa', 'Dining Table', 'Outdoor Bar Table', 'Console Table'].map(
            (product, idx) => (
              <div key={idx} className="border p-4 rounded-md">
                <image src={`/path-to-product${idx + 1}.jpg`} width={300} height={300} alt={product} className="w-full rounded-md mb-2" />
                <h3 className="text-sm">{product}</h3>
                <p className="text-sm text-gray-600">Rs. 25,000.00</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Footer */}
    <Footer/>
    </div>
    
  );
};

export default ProductPage;
