// pages/index.js

import Head from 'next/head';

const mockData = Array(8).fill({
  batchNo: 
  medName: 
  manfName: 
  manfDate: 
  expDate: 
  buyingCost: 
  mrp: 
  discount: 
  consumerCost: 1350,
  prescription: 'Y'
});

export default function Home() {
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
                <th className="px-3 py-2 border">Batch No</th>
                <th className="px-3 py-2 border">Med Name</th>
                <th className="px-3 py-2 border">Manf. Name</th>
                <th className="px-3 py-2 border">Manf Date</th>
                <th className="px-3 py-2 border">Exp. Date</th>
                <th className="px-3 py-2 border">Buying Cost</th>
                <th className="px-3 py-2 border">MRP</th>
                <th className="px-3 py-2 border">Discount Cost</th>
                <th className="px-3 py-2 border">Consumer Cost</th>
                <th className="px-3 py-2 border">Prescription</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item, idx) => (
                <tr key={idx} className="text-center">
                  <td className="border px-2 py-1">{item.batchNo}</td>
                  <td className="border px-2 py-1">{item.medName}</td>
                  <td className="border px-2 py-1">{item.manfName}</td>
                  <td className="border px-2 py-1">{item.manfDate}</td>
                  <td className="border px-2 py-1">{item.expDate}</td>
                  <td className="border px-2 py-1">{item.buyingCost}</td>
                  <td className="border px-2 py-1">{item.mrp}</td>
                  <td className="border px-2 py-1">{item.discount}</td>
                  <td className="border px-2 py-1">{item.consumerCost}</td>
                  <td className="border px-2 py-1">{item.prescription}</td>
                </tr>
              ))}
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
