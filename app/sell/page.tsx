import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>StockEasy</title>
      </Head>
      <div className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between px-6 py-4 border-b shadow-sm">
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
        <div className="flex justify-start px-6 py-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded mr-2">Add Record</button>
          <button className="bg-white border px-4 py-2 rounded mr-2">View Record</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Sell</button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 py-6">
          {/* Left Side - Form */}
          <div className="max-w-md w-full space-y-4">
            <input
              type="text"
              placeholder="Medicine Name"
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Medicine Manf."
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Seller Name"
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Type of Medicine"
              className="w-full border rounded px-4 py-2"
            />
            <input
              type="number"
              placeholder="QTY"
              className="w-full border rounded px-4 py-2"
            />
            <button className="bg-orange-500 text-white w-full py-2 rounded">Go</button>
          </div>

          {/* Right Side - Illustration & Text */}
          <div className="flex flex-col justify-center items-center text-center mt-10 md:mt-0">
            <h2 className="text-3xl font-semibold text-gray-700">StockEasy</h2>
            <p className="text-gray-500 mt-2">
              Now it is very easy to maintain stock.
              <br />
              Save your time and enjoy the day.
            </p>
            <img
              src="/illustration.png" // Replace this with your actual image path or use next/image
              alt="Doctors Illustration"
              className="w-64 mt-6"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-4">
          © Copyright - StockEasy
          <div className="mt-2 space-x-3">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-google" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
          </div>
        </footer>
      </div>
    </>
  );
}
