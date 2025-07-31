"use client";

import Image from "next/image";
import { FaPlus, FaEye, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function StockPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
          <h1 className="text-xl font-semibold">StockEasy</h1>
        </div>
        <nav className="flex space-x-6 font-medium">
          <a href="#" className="text-gray-600 hover:text-black">Profile</a>
          <a href="#" className="text-orange-500 font-semibold">Stock</a>
          <a href="#" className="text-gray-600 hover:text-black">Customer</a>
          <a href="#" className="text-gray-600 hover:text-black">Payment</a>
          <a href="#" className="text-gray-600 hover:text-black">Reports</a>
          <a href="#" className="text-gray-600 hover:text-black">Sales</a>
          <a href="#" className="text-gray-600 hover:text-black">Log Out</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row justify-between items-start px-6 py-8 gap-10">
        {/* Left Buttons */}
        <div className="flex flex-row gap-4">
          <button
            className="bg-orange-400 text-white px-4 py-2 rounded flex items-center gap-2"
            onClick={() => router.push("/addrecord")}
          >
            <FaPlus /> Add Record
          </button>
          <button
            className="bg-orange-400 text-white px-4 py-2 rounded flex items-center gap-2"
            onClick={() => router.push("/viewrecord")}
          >
            <FaEye /> View Record
          </button>
          <button
            className="bg-orange-400 text-white px-4 py-2 rounded flex items-center gap-2"
            onClick={() => router.push("/sell")}
          >
            <FaShoppingCart /> Sell
          </button>
        </div>

        {/* Right Side */}
        <div className="text-right md:text-left max-w-xl md:ml-auto">
          <h2 className="text-3xl font-semibold mb-2">StockEasy</h2>
          <p className="text-gray-600 mb-6">
            Now it is very easy to maintain stock. <br />
            Save your time and enjoy the day.
          </p>
          <Image
            src="/illustration.png"
            alt="Stock management illustration"
            width={400}
            height={300}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-4 text-sm">
        © Copyright - StockEasy
      </footer>
    </div>
  );
}
