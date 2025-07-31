"use client";

import { useState } from "react";

export default function CustomerPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Last 6 Months",
    "Last 3 Months",
    "Current Month",
    "Current Week",
    "Today",
  ];

  const dummyData = Array(6).fill({
    date: "11 - Sep - 2022",
    phone: "8945632500",
    email: "d@gmail.com",
    amount: "285.00",
  });

  const totalSales = dummyData.reduce(
    (acc, curr) => acc + parseFloat(curr.amount),
    0
  );

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-6">
      {/* Header */}
      <header className="flex justify-between items-center border-b p-4 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
          <h1 className="text-xl font-bold">StockEasy</h1>
        </div>
        <nav className="flex space-x-6 font-medium">
          <a href="#" className="hover:text-black">Profile</a>
          <a href="#" className="hover:text-black">Stock</a>
          <a href="#" className="text-orange-500 font-semibold">Customer</a>
          <a href="#" className="hover:text-black">Payment</a>
          <a href="#" className="hover:text-black">Reports</a>
          <a href="#" className="hover:text-black">Sales</a>
          <a href="#" className="hover:text-black">Log Out</a>
        </nav>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mt-6 mb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-1 rounded text-sm font-medium ${
              activeFilter === filter
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, index) => (
              <tr key={index} className="text-gray-700">
                <td className="p-2 border">{item.date}</td>
                <td className="p-2 border">{item.phone}</td>
                <td className="p-2 border">{item.email}</td>
                <td className="p-2 border text-right">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Sales */}
      <div className="flex justify-between bg-gray-100 px-4 py-2 mt-4 text-sm font-semibold text-gray-700">
        <span>Total Sales</span>
        <span>{totalSales.toFixed(2)}</span>
      </div>

      {/* Right Side Illustration */}
      <div className="mt-10 md:flex justify-between items-center">
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-2">StockEasy</h2>
          <p className="text-gray-600">
            Now it is very easy to maintain stock. <br />
            Save your time and enjoy the day.
          </p>
        </div>
        <img
          src="/illustration.png"
          alt="Doctor Illustration"
          className="w-72 mx-auto md:mx-0 mt-6 md:mt-0"
        />
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-4 text-sm mt-10">
        © Copyright - StockEasy
      </footer>
    </div>
  );
}
