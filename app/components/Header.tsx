// app/components/Header.tsx
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#c0ad87]">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">Purity</div>

      {/* Search Bar */}
      <div className="flex-1 mx-4 relative">
        <input
          type="text"
          placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
          className="w-full px-4 py-2 pl-12 border rounded-lg focus:outline-none"
          style={{ height: '45px' }}
        />
        {/* Search Icon */}
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FaUser className="text-white text-2xl cursor-pointer hover:text-gray-300 transition" />
        <FaHeart className="text-white text-2xl cursor-pointer hover:text-gray-300 transition" />
        <FaShoppingCart className="text-white text-2xl cursor-pointer hover:text-gray-300 transition" />
      </div>
    </header>
  );
}


