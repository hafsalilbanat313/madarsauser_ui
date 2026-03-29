import  { useState } from "react";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    aadhar: "",
    mobile: "",
    subject: "",
    message: "",
    dob: "",
    address: "",
    phone: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required.";
    if (!formData.mobile || formData.mobile.length !== 10) newErrors.mobile = "Valid 10-digit mobile no required.";
    if (!formData.feedback.trim()) newErrors.feedback = "Feedback is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      try {
        await fetch("https://formspree.io/f/your_form_id", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        alert("Form submitted successfully!");
        setFormData({});
      } catch (err) {
        alert("Submission failed. Try again.");
      }
    }
  };

  return (
    <div className="min-h-screen pt-28 px-4 bg-gradient-to-br from-white to-blue-50 flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-8 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">Feedback & Inquiry</h2>

        {/* Row 1: First/Last Name */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-semibold text-blue-800">First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/60 shadow-sm border border-gray-300 placeholder-gray-600 text-sm"
              placeholder="Enter first name"
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label className="text-sm font-semibold text-blue-800">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/60 shadow-sm border border-gray-300 placeholder-gray-600 text-sm"
              placeholder="Enter last name"
            />
          </div>
        </div>

        {/* Row 2: Email, Aadhar */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-semibold text-blue-800">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/60 shadow-sm border border-gray-300 text-sm"
              placeholder="example@gmail.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="text-sm font-semibold text-blue-800">Aadhar Number</label>
            <input
              type="text"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/60 shadow-sm border border-gray-300 text-sm"
              placeholder="xxxx xxxx xxxx"
            />
          </div>
        </div>

        {/* Row 3: Mobile, Phone */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-semibold text-blue-800">Mobile No*</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/60 shadow-sm border border-gray-300 text-sm"
              placeholder="Enter 10-digit number"
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>
          <div>
            <label className="text-sm font-semibold text-blue-800">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/60 shadow-sm border border-gray-300 text-sm"
              placeholder="Optional"
            />
          </div>
        </div>

        {/* Row 4: DOB, Address */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-semibold text-blue-800">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/60 shadow-sm border border-gray-300 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-blue-800">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/60 shadow-sm border border-gray-300 text-sm"
              placeholder="Full address"
            />
          </div>
        </div>

        {/* Row 5: Subject */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-blue-800">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded bg-white/60 shadow-sm border border-gray-300 text-sm"
            placeholder="Subject of message"
          />
        </div>

        {/* Row 6: Message */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-blue-800">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded bg-white/60 shadow-sm border border-gray-300 text-sm"
            placeholder="Type your message here..."
          />
        </div>

        {/* Row 7: Feedback */}
        <div className="mb-4">
          <label className="text-sm font-semibold text-blue-800">Feedback*</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 rounded bg-white/60 shadow-sm border border-gray-300 text-sm"
            placeholder="Your feedback and suggestions"
          />
          {errors.feedback && <p className="text-red-500 text-xs mt-1">{errors.feedback}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default Inquiry;
