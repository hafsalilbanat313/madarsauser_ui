import { useState } from "react";
import axios from "axios";

export default function StudentFee() {
  const [screenshot, setScreenshot] = useState(null);
  const [issue, setIssue] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleUpload = async () => {
    if (!screenshot) return alert("Upload payment screenshot");

    const formData = new FormData();
    formData.append("paymentScreenshot", screenshot);
    formData.append("issue", issue);

    try {
      setLoading(true);

      await axios.post(
        "https://madarsa-backend-pro.onrender.com/auth/user/fee",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Failed to submit payment ❌");
    } finally {
      setLoading(false);
    }
  };

  // ✅ SUCCESS SCREEN
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
          <div className="text-green-500 text-5xl mb-4">✓</div>

          <h2 className="text-2xl font-bold mb-3">Thank You!</h2>

          <p className="text-gray-600 mb-3">
            Your payment and form request has been successfully submitted.
          </p>

          <p className="text-sm text-gray-500">
            Please check your application progress after some time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* ================= DISCLAIMER ================= */}
      <div className="max-w-6xl mx-auto mb-6 space-y-2">

        <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded text-sm text-red-700">
          ⚠️ Make sure you have submitted the admission application form first.
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded text-sm text-yellow-700">
          💡 Without fee, your submitted form will not be accepted.
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded text-sm text-blue-700">
          ℹ️ This fee is non-refundable. You can pay via any one method (UPI QR or Bank Transfer).
        </div>

      </div>

      {/* ================= PAYMENT CARD ================= */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT - BANK DETAILS */}
        <div className="bg-gray-50 p-5 rounded-lg">

          <h3 className="text-lg font-bold mb-4 text-center">
            Bank Transfer Details
          </h3>

          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Account Name:</span> Waseem Akram</p>
            <p><span className="font-semibold">Account Number:</span> 34951072040</p>
            <p><span className="font-semibold">Bank:</span> SBI</p>
            <p><span className="font-semibold">IFSC:</span> SBIN0007408</p>
            <p><span className="font-semibold">Branch:</span> Bhowapur Mastan Nagar</p>
          </div>

        </div>

        {/* RIGHT - QR CODE */}
        <div className="text-center flex flex-col justify-center items-center">

          <p className="font-semibold mb-3">Scan & Pay via UPI</p>

          <img
            src="/barcode_pay.jpeg"
            alt="QR Code"
            className="w-60 border rounded shadow"
          />

          <p className="text-sm text-gray-500 mt-3">
            Pay using PhonePe / Google Pay / Paytm
          </p>

        </div>

      </div>

      {/* ================= FORM SECTION ================= */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Fee Payment
        </h2>

        {/* Upload Screenshot */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Upload Payment Screenshot *
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setScreenshot(e.target.files[0])}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Issue */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Facing any issue?
          </label>

          <textarea
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="Write your issue here..."
            className="w-full border p-2 rounded"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded font-semibold"
          >
            {loading ? "Submitting..." : "Submit Payment"}
          </button>
        </div>

      </div>
    </div>
  );
}