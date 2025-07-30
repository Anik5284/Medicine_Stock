import Link from "next/link";

// app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-between items-center px-8 py-4 shadow">
        <div className="text-2xl font-bold text-orange-500">StockEasy</div>
        <div className="space-x-6 font-medium">
          <a href="#">Profile</a>
          <a href="#">Stock</a>
          <a href="#">Customer</a>
          <a href="#">Payment</a>
          <a href="#">Reports</a>
          <a href="#">Sales</a>
          <a href="#" className="text-orange-500">Register</a>
        </div>
      </nav>

      <div className="flex flex-1 justify-center items-center p-10">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center">
          {/* Left Side - Form */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-2">StockEasy</h2>
            <p className="text-gray-500 mb-6">
              Now it is very easy to maintain stock. Save your time and enjoy the day.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Id"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded"
              />
              <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded">
                SIGN IN
              </button>
            </form>

            <div className="mt-4 text-sm flex justify-between text-gray-500">
              <a href="#">Forget Password?</a>
              <Link href="/Register" className="text-black">Create new account</Link>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="hidden md:block w-1/2">
            <img src="/illustration.png" alt="Doctors Illustration" className="w-full" />
          </div>
        </div>
      </div>

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
