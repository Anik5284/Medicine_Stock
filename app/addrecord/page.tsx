"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlus, FaEye, FaShoppingCart } from "react-icons/fa";

export default function StockPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-orange-500 rounded-full" />
          <h1 className="text-xl font-bold">StockEasy</h1>
        </div>
        <nav className="flex gap-6 font-medium text-sm md:text-base">
          <a href="#" className="text-gray-600 hover:text-black">Profile</a>
          <a href="#" className="text-orange-500 font-semibold">Stock</a>
          <a href="#" className="text-gray-600 hover:text-black">Customer</a>
          <a href="#" className="text-gray-600 hover:text-black">Payment</a>
          <a href="#" className="text-gray-600 hover:text-black">Reports</a>
          <a href="#" className="text-gray-600 hover:text-black">Sales</a>
          <a href="#" className="text-gray-600 hover:text-black">Log Out</a>
        </nav>
      </header>

      {/* Top Buttons */}
      <div className="flex gap-4 px-6 py-4">
        <button className="bg-orange-400 text-white px-4 py-2 rounded flex items-center gap-2">
          <FaPlus /> Add Record
        </button>
        <button
          onClick={() => router.push("/viewrecord")}
          className="bg-orange-400 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FaEye /> View Record
        </button>
        <button className="bg-orange-400 text-white px-4 py-2 rounded flex items-center gap-2">
          <FaShoppingCart /> Sell
        </button>
      </div>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row gap-8 px-6 pb-8 flex-grow">
        {/* Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
          {[
            "Batch No", "Med Name", "Manf. Name", "Manf. Date", "Exp. Date",
            "Buying Cost", "MRP", "Discount Cost", "Consumer Cost", "Prescription Needed",
            "Seller Id", "Seller Name", "Category", "Client ID", "Date of Entry",
            "Date of Dispatch", "Qty", "Type of Medicine"
          ].map((label, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={label}
              className="border border-gray-300 px-3 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          ))}
          <button
            type="submit"
            className="col-span-1 sm:col-span-2 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            SAVE
          </button>
        </form>

        {/* Info + Image */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-md mx-auto">
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
      <footer className="text-center text-gray-400 text-sm py-4 border-t">
        © Copyright - StockEasy
        <div className="mt-2 flex justify-center gap-3 text-gray-400 text-base">
          <span className="hover:text-black cursor-pointer">F</span>
          <span className="hover:text-black cursor-pointer">G</span>
          <span className="hover:text-black cursor-pointer">T</span>
          <span className="hover:text-black cursor-pointer">I</span>
        </div>
      </footer>
    </div>
  );
}
