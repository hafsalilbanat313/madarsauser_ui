import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+91",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [emailOtp, setEmailOtp] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [showEmailOtp, setShowEmailOtp] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // ================= VALIDATION =================
  const validate = () => {
    if (!form.firstName.trim()) return "First name is required";
    if (!form.lastName.trim()) return "Last name is required";
    if (!form.email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Invalid email address";
    if (!form.phone.trim()) return "Phone number is required";
    if (form.password.length < 6)
      return "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword)
      return "Passwords do not match";
    if (!form.agree) return "Please accept terms & conditions";
    if (!emailVerified) return "Please verify your email";
    return "";
  };

  // ================= EMAIL OTP =================
  const sendEmailOtp = async () => {
    try {
      setLoading(true);
      await axios.post(
        "https://madarsa-backend-pro.onrender.com/auth/email/send-email-otp",
        { email: form.email },
        { withCredentials: true }
      );
      setShowEmailOtp(true);
      setError("");
      alert("OTP sent to your email");
    } catch {
      setError("Failed to send email OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyEmailOtp = async () => {
    try {
      setLoading(true);
      await axios.post(
        "https://madarsa-backend-pro.onrender.com/auth/email/verify-email-otp",
        { email: form.email, otp: emailOtp },
        { withCredentials: true }
      );
      setEmailVerified(true);
      setShowEmailOtp(false);
      setError("");
      alert("Email verified successfully");
    } catch {
      setError("Invalid email OTP");
    } finally {
      setLoading(false);
    }
  };

  // ================= SIGNUP =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = validate();
    if (message) {
      setError(message);
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://madarsa-backend-pro.onrender.com/auth/user/signup",
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
          phone: form.phone,
        },
        { withCredentials: true }
      );

      // Save JWT token
      localStorage.setItem("token", data.token);

      setError("");
      alert("Signup successful 🎉");
      navigate("/login"); // redirect to login
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg mt-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Create your account
          </h2>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              />
            </div>

            <div className="relative">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-32 border rounded-lg"
              />
              {!emailVerified && form.email && (
                <button
                  type="button"
                  onClick={sendEmailOtp}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Verify
                </button>
              )}
              {emailVerified && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 text-sm font-semibold">
                  ✓ Verified
                </span>
              )}
            </div>

            {showEmailOtp && (
              <div className="relative">
                <input
                  placeholder="Enter Email OTP"
                  value={emailOtp}
                  onChange={(e) => setEmailOtp(e.target.value)}
                  className="w-full px-4 py-3 pr-28 border rounded-lg"
                />
                <button
                  type="button"
                  onClick={verifyEmailOtp}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm bg-green-600 text-white px-3 py-1 rounded"
                >
                  Verify
                </button>
              </div>
            )}

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />

            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
              I agree to the Terms & Conditions
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg flex justify-center gap-2"
            >
              Create Account <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
