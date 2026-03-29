import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= VALIDATION =================
  const validate = () => {
    if (!email.trim()) return "Email is required!";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Enter a valid email!";
    if (!password.trim()) return "Password is required!";
    if (password.length < 6)
      return "Password must be at least 6 characters!";
    return "";
  };

  // ================= HANDLE LOGIN =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = validate();
    if (message) {
      setError(message);
      return;
    }

    try {
      setLoading(true);
      setError("");

      // 🔐 API LOGIN
      // Replace URL with your backend endpoint
      const res = await axios.post(
        "https://madarsa-backend-pro.onrender.com/auth/user/login",
        { email, password },
        { withCredentials: true }
      );

    localStorage.setItem("token", res.data.token);

// 🔥 ye line add karo
window.dispatchEvent(new Event("authChange"));

navigate("/student/dashboard");
 // redirect to dashboard after login
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md mt-20">
        {/* ================= LOGIN CARD ================= */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Student Login
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-1">
            Sign in to your account
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Enter your credentials to continue
          </p>

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition"
            >
              {loading ? "Signing In..." : "Sign In"}
              <ArrowRight size={18} />
            </button>
          </form>

          {/* ================= SIGNUP SECTION ================= */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              New student?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition"
              >
                Create an account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
