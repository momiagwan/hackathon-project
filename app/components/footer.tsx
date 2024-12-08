const Footer: React.FC = () => (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div>
          <h3 className="font-semibold">Links</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Help</h3>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 px-4 py-2 rounded-l"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="text-center mt-6">&copy; 2023 Neutral House. All rights reserved.</p>
    </footer>
  );
  
  export default Footer;
  