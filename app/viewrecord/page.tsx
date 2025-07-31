// pages/index.js

import Head from 'next/head';

export default function Home() {
  const tableHeaders = [
    "Batch No", "Med Name", "Manf. Name", "Manf Date", "Exp. Date",
    "Buying Cost", "MRP", "Discount Cost", "Consumer Cost", "Prescription"
  ];

  return (
    <>
      <Head>
        <title>StockEasy</title>
      </Head>
      <div className="min-h-screen bg-white">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
          <div className="text-orange-600 font-bold text-xl">StockEasy</div>
          <div className="flex space-x-6 text-gray-700 font-medium">
            <a href="#">Profile</a>
            <a href="#" className="text-orange-500 border-b-2 border-orange-500">Stock</a>
            <a href="#">Customer</a>
            <a href="#">Payment</a>
            <a href="#">Reports</a>
            <a href="#">Sales</a>
            <a href="#">Log Out</a>
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="flex justify-between items-center px-6 py-4">
          <div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded mr-2">Add Record</button>
            <button className="bg-white border px-4 py-2 rounded mr-2">View Record</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Sell</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-6">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                {tableHeaders.map((header, index) => (
                  <th key={index} className="px-3 py-2 border">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td colSpan={tableHeaders.length} className="py-4 text-gray-400">
                  No records available.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center my-4">
          <span className="h-2 w-2 rounded-full bg-orange-500 mx-1"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300 mx-1"></span>
          <span className="h-2 w-2 rounded-full bg-gray-300 mx-1"></span>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-4">
          © Copyright - StockEasy
        </footer>
      </div>
    </>
  );
}
