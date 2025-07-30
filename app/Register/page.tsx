export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow">
        <div className="text-2xl font-bold text-orange-500">StockEasy</div>
        <div className="space-x-6 font-medium">
          <a href="#">Profile</a>
          <a href="#">Stock</a>
          <a href="#">Customer</a>
          <a href="#">Payment</a>
          <a href="#">Reports</a>
          <a href="#">Sales</a>
          <a href="#" className="text-orange-500">Sign In</a>
        </div>
      </nav>

      {/* Page Content */}
      <div className="flex flex-1 justify-center items-center p-6">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
          
          {/* Form Section */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Middle Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
            <input type="text" placeholder="Business Name" className="input col-span-2" />
            <input type="text" placeholder="Country" className="input" />
            <input type="text" placeholder="City" className="input" />
            <input type="text" placeholder="State" className="input col-span-2" />
            <input type="text" placeholder="Street Number" className="input" />
            <input type="text" placeholder="Pin code" className="input" />
            <input type="email" placeholder="Email Id" className="input col-span-2" />
            <input type="text" placeholder="Phone Number" className="input" />
            <input type="text" placeholder="Alternative Phone Number" className="input" />
            <input type="text" placeholder="GST Number" className="input" />
            <input type="text" placeholder="Aadhaar Number" className="input" />
            <input type="text" placeholder="Pan Card Number" className="input" />
            <input type="text" placeholder="Certificate Number" className="input" />

            <button className="col-span-2 bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600">
              REGISTER
            </button>

            <p className="col-span-2 text-sm text-gray-600 text-center mt-2">
              Have you already an account? <a href="#" className="text-black">Sign In Here</a>
            </p>
          </div>

          {/* Illustration Section */}
          <div className="hidden md:flex flex-col items-center justify-center w-1/2">
            <h2 className="text-3xl font-bold mb-2">StockEasy</h2>
            <p className="text-gray-500 mb-6 text-center">
              Now it is very easy to maintain stock.<br />Save your time and enjoy the day.
            </p>
            <img src="/illustration.png" alt="Doctors" className="w-full max-w-sm" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-4">
        © Copyright - StockEasy
        <div className="mt-2 space-x-3">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-google"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </footer>
    </div>
  );
}
