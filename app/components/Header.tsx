import Link from 'next/link';

const Header: React.FC = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <nav className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/singleproduct">Shop</Link>
        <Link href="/myaccount">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="flex space-x-4">
        <button className="text-gray-700">👤</button>
        <button className="text-gray-700">🔍</button>
        <button className="text-gray-700">🛒</button>
      </div>
    </div>
  </header>
);

export default Header;
