import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/footer';

const MyAccount = () => {
  return (
    <div className="min-h-screen flex flex-col">
     <Header/>


      {/* Banner */}
       <div className="bg-[url('/background-image.jpeg')] bg-cover bg-center bg-no-repeat py-8"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">My Account</h2>
          <p className="text-gray-600 mt-2">Home &gt; My account</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Login Section */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Log In</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600">Username or email address</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                placeholder="Enter your username or email"
              />
            </div>
            <div>
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember-me" className="h-4 w-4" />
              <label htmlFor="remember-me" className="text-gray-600">
                Remember me
              </label>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-md">
              Log In
            </button>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Lost Your Password?
            </a>
          </form>
        </section>

        {/* Register Section */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Register</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600">Email address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                placeholder="Enter your email"
              />
            </div>
            <p className="text-gray-600 text-sm">
              A link to set a new password will be sent to your email address.
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
            <button className="w-full bg-black text-white py-2 rounded-md">
              Register
            </button>
          </form>
        </section>
      </main>

      {/* Features Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-lg font-semibold">Free Delivery</h4>
            <p className="text-gray-600">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">90 Days Return</h4>
            <p className="text-gray-600">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Secure Payment</h4>
            <p className="text-gray-600">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

   <Footer/>
    </div>
  );
};

export default MyAccount;
