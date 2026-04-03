import { useState, useEffect } from "react";
import TermsAndConditions from "../../utils/TermsAndConditions";
import axios from "axios";
import { CheckCircle } from "lucide-react";

/* =====================================================
   VALIDATION HELPERS
===================================================== */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;
const pincodeRegex = /^[0-9]{6}$/;

const isValidFile = (file) => {
  if (!file) return false;
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
  const maxSize = 2 * 1024 * 1024; // 2MB
  return allowedTypes.includes(file.type) && file.size <= maxSize;
};

/* =====================================================
   MAIN COMPONENT
===================================================== */
export default function AdmissionForm() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [checking, setChecking] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [files, setFiles] = useState({
    studentPhoto: null,
    studentSignature: null,
    idProof: null,
    lastMarksheet: null,
  });

  const [form, setForm] = useState({
    studentName: "",
    dob: "",
    gender: "",
    classApplied: "",

    fatherName: "",
    motherName: "",
    guardianName: "",
    guardianRelation: "",
    guardianOccupation: "",

    permanentAddress: "",
    permanentPincode: "",
    guardianAddress: "",
    guardianPincode: "",

    visitorName: "",
    visitorRelation: "",

    phone: "",
    whatsapp: "",
    email: "",

    hostelRequired: false,

    declarationLocation: "",
    declarationAccepted: false,
  });

  const [errors, setErrors] = useState({});

  /* =====================================================
     HANDLERS
  ===================================================== */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: selectedFiles[0],
    }));
  };

  /* =====================================================
     VALIDATION
  ===================================================== */
  const validate = () => {
    const err = {};

    if (!form.studentName.trim()) err.studentName = "Student name is required";

    if (!form.dob) err.dob = "Date of birth is required";

    if (!form.gender) err.gender = "Gender is required";

    if (!form.classApplied) err.classApplied = "Class is required";

    if (!form.fatherName) err.fatherName = "Father name is required";

    if (!form.motherName) err.motherName = "Mother name is required";

    if (!form.guardianName) err.guardianName = "Guardian name is required";

    if (!form.guardianRelation)
      err.guardianRelation = "Guardian relationship is required";

    if (!form.permanentAddress)
      err.permanentAddress = "Permanent address is required";

    if (!pincodeRegex.test(form.permanentPincode))
      err.permanentPincode = "Invalid pincode";

    if (!form.guardianAddress)
      err.guardianAddress = "Guardian address is required";

    if (!pincodeRegex.test(form.guardianPincode))
      err.guardianPincode = "Invalid pincode";

    if (!phoneRegex.test(form.phone)) err.phone = "Invalid phone number";

    if (form.whatsapp && !phoneRegex.test(form.whatsapp))
      err.whatsapp = "Invalid WhatsApp number";

    if (!emailRegex.test(form.email)) err.email = "Invalid email address";
    if (!isValidFile(files.studentPhoto))
      err.studentPhoto = "Student photo required";

    if (!isValidFile(files.signature)) err.signature = "Signature required";

    if (!isValidFile(files.idProof)) err.idProof = "ID proof required";

    if (!isValidFile(files.lastMarksheet))
      err.lastMarksheet = "Last marksheet required";

    if (!form.declarationLocation)
      err.declarationLocation = "Declaration location is required";

    if (!form.declarationAccepted)
      err.declarationAccepted = "Declaration must be accepted";

    if (!termsAccepted) err.terms = "Accept Terms & Conditions";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();

      // ================= TEXT FIELDS =================
      formData.append("studentName", form.studentName);
      formData.append("dob", form.dob);
      formData.append("gender", form.gender);
      formData.append("classApplied", form.classApplied);

      formData.append("fatherName", form.fatherName);
      formData.append("motherName", form.motherName);
      formData.append("guardianName", form.guardianName);
      formData.append("guardianRelation", form.guardianRelation);
      formData.append("guardianOccupation", form.guardianOccupation);

      formData.append("permanentAddress", form.permanentAddress);
      formData.append("permanentPincode", form.permanentPincode);
      formData.append("guardianAddress", form.guardianAddress);
      formData.append("guardianPincode", form.guardianPincode);

      formData.append("visitorName", form.visitorName);
      formData.append("visitorRelation", form.visitorRelation);

      formData.append("phone", form.phone);
      formData.append("whatsapp", form.whatsapp);
      formData.append("email", form.email);

      formData.append("hostelRequired", form.hostelRequired ? "true" : "false");

      // 🔴 YAHIN lagao (IMPORTANT)
      formData.append("declarationLocation", form.declarationLocation);
      formData.append("declarationAccepted", form.declarationAccepted);

      // ================= FILES =================
      formData.append("studentPhoto", files.studentPhoto);
      formData.append("studentSignature", files.signature);
      formData.append("idProof", files.idProof);
      formData.append("lastMarksheet", files.lastMarksheet);

      // ================= API CALL =================
      const res = await axios.post(
        "https://madarsa-backend-pro.onrender.com/api/student-form/submit",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      console.log(res.data);
      alert("Form submitted successfully 🎉");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Form submission failed");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await axios.get(
          "https://madarsa-backend-pro.onrender.com/api/student-form/my-form",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        if (res.data?.hasFor) {
          setIsSubmitted(true);
        } else {
          setIsSubmitted(false);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setChecking(false);
      }
    };

    checkStatus();
  }, []);

  /* =====================================================
     UI
  ===================================================== */
  if (checking) {
    return (
      <div className="flex justify-center items-center h-screen">
        Checking status...
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-14 h-14 text-green-600" />
          </div>

          <h2
            className="text-2xl font-bold text-gray-800 mb-2"
            style={{ fontFamily: "Poppins" }}
          >
            Form Already Submitted
          </h2>

          <p
            className="text-gray-600 leading-relaxed mb-6"
            style={{ fontFamily: "Poppins" }}
          >
            You have already successfully submitted your admission form. Our
            team is currently reviewing your application. Please wait for
            further updates.
          </p>

          <button
            onClick={() => (window.location.href = "/student/submitted-form")}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
            style={{ fontFamily: "Poppins" }}
          >
            View Submitted Form
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
  
  {/* LEFT SIDE (Title) */}
  <div className="text-center md:text-left">
    <h1
      className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
      style={{ fontFamily: "Poppins" }}
    >
      Student Admission Form
    </h1>

    <p className="text-gray-600 text-sm md:text-lg">
      Please fill out all required fields carefully
    </p>
  </div>

  {/* RIGHT SIDE (Hostel Toggle) */}
  <div className="mt-4 md:mt-0">
    <p className="text-sm font-semibold text-gray-700 mb-2">
      Hostel Required?
    </p>

    <div className="flex gap-2">
      {/* YES */}
      <button
        type="button"
        onClick={() => setForm({ ...form, hostelRequired: true })}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
          form.hostelRequired
            ? "bg-green-600 text-white"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        Yes
      </button>

      {/* NO */}
      <button
        type="button"
        onClick={() => setForm({ ...form, hostelRequired: false })}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
          !form.hostelRequired
            ? "bg-red-500 text-white"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        No
      </button>
    </div>
  </div>
</div>

        {/* Form Card */}
        <form
          onSubmit={submitForm}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

          <div className="p-8 sm:p-12">
            {/* Terms and Conditions */}
            <div className="mb-10 p-6 bg-blue-50  rounded-r-lg">
              <TermsAndConditions
                accepted={termsAccepted}
                setAccepted={setTermsAccepted}
              />
              {errors.terms && (
                <p className="text-red-600 text-sm mt-2 font-medium">
                  {errors.terms}
                </p>
              )}
            </div>

            {/* Student Information */}
            <Section
              title="Student Information"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              }
            >
              <Input
                label="Student Name"
                name="studentName"
                placeholder="Enter full name"
                value={form.studentName}
                onChange={handleChange}
                error={errors.studentName}
                required
              />
              <Input
                type="date"
                label="Date of Birth"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                error={errors.dob}
                required
              />
              <Select
                label="Gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                options={["Male", "Female", "Other"]}
                error={errors.gender}
                required
              />
              <Select
                label="Class/Course"
                name="classApplied"
                // placeholder="e.g., 10th, 11th"
                value={form.classApplied}
                onChange={handleChange}
                options={[
                  "PRIMARY 1",
                  "PRIMARY 2",
                  "PRIMARY 3",
                  "PRIMARY 4",
                  "PRIMARY 5",
                  "AALIMA",
                  "FAZILA",
                ]}
                error={errors.classApplied}
                required
              />
            </Section>

            {/* Parents / Guardian Details */}
            <Section
              title="Parents / Guardian Details"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
            >
              <Input
                label="Father's Name"
                name="fatherName"
                placeholder="Enter father's full name"
                value={form.fatherName}
                onChange={handleChange}
                error={errors.fatherName}
                required
              />
              <Input
                label="Mother's Name"
                name="motherName"
                placeholder="Enter mother's full name"
                value={form.motherName}
                onChange={handleChange}
                error={errors.motherName}
                required
              />
              <Input
                label="Guardian Name"
                name="guardianName"
                placeholder="Enter guardian's name"
                value={form.guardianName}
                onChange={handleChange}
                error={errors.guardianName}
                required
              />
              <Input
                label="Guardian Relationship"
                name="guardianRelation"
                placeholder="e.g., Father, Mother, Uncle"
                value={form.guardianRelation}
                onChange={handleChange}
                error={errors.guardianRelation}
                required
              />
              <Input
                label="Guardian Occupation"
                name="guardianOccupation"
                placeholder="Enter occupation"
                value={form.guardianOccupation}
                onChange={handleChange}
              />
            </Section>

            {/* Address Details */}
            <Section
              title="Address Details"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
            >
              <Textarea
                label="Student's Permanent Address"
                name="permanentAddress"
                placeholder="Enter complete address with city and state"
                value={form.permanentAddress}
                onChange={handleChange}
                error={errors.permanentAddress}
                required
              />
              <Input
                label="Pincode"
                name="permanentPincode"
                placeholder="6-digit pincode"
                value={form.permanentPincode}
                onChange={handleChange}
                error={errors.permanentPincode}
                maxLength={6}
                required
              />
              <Textarea
                label="Guardian's Permanent Address"
                name="guardianAddress"
                placeholder="Enter complete address with city and state"
                value={form.guardianAddress}
                onChange={handleChange}
                error={errors.guardianAddress}
                required
              />
              <Input
                label="Guardian's Pincode"
                name="guardianPincode"
                placeholder="6-digit pincode"
                value={form.guardianPincode}
                onChange={handleChange}
                error={errors.guardianPincode}
                maxLength={6}
                required
              />
            </Section>

            {/* Contact Details */}
            <Section
              title="Contact Details"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
            >
              <Input
                label="Phone Number"
                name="phone"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
                maxLength={10}
                required
              />
              <Input
                label="WhatsApp Number"
                name="whatsapp"
                placeholder="10-digit WhatsApp number"
                value={form.whatsapp}
                onChange={handleChange}
                error={errors.whatsapp}
                maxLength={10}
              />
              <Input
                type="email"
                label="Email Address"
                name="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
            </Section>

            {/* Upload Documents */}
            <Section
              title="Upload Documents"
              subtitle="Accepted formats: JPG, PNG, PDF (Max 2MB each)"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              }
            >
              <FileInput
                label="Student Photo"
                name="studentPhoto"
                onChange={handleFileChange}
                error={errors.studentPhoto}
                accept="image/jpeg,image/png,application/pdf"
                required
              />
              <FileInput
                label="Student Signature"
                name="signature"
                onChange={handleFileChange}
                error={errors.signature}
                accept="image/jpeg,image/png,application/pdf"
                required
              />
              <FileInput
                label="ID Proof (Aadhar/Birth Certificate)"
                name="idProof"
                onChange={handleFileChange}
                error={errors.idProof}
                accept="image/jpeg,image/png,application/pdf"
                required
              />
              <FileInput
                label="Last Marksheet"
                name="lastMarksheet"
                onChange={handleFileChange}
                error={errors.lastMarksheet}
                accept="image/jpeg,image/png,application/pdf"
                required
              />
            </Section>

            {/* Declaration */}
            <Section
              title="Declaration"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            >
              <Input
                label="Place/Location"
                name="declarationLocation"
                placeholder="Enter city name"
                value={form.declarationLocation}
                onChange={handleChange}
                error={errors.declarationLocation}
                required
              />
              <div className="md:col-span-2">
                <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    name="declarationAccepted"
                    checked={form.declarationAccepted}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    I hereby declare that all the information provided above is
                    true and correct to the best of my knowledge. I understand
                    that any false information may lead to the rejection of this
                    application.
                  </span>
                </label>
                {errors.declarationAccepted && (
                  <p className="text-red-600 text-sm mt-2 ml-1 font-medium">
                    {errors.declarationAccepted}
                  </p>
                )}
              </div>
            </Section>

            {/* Submit Button */}
            <div className="mt-12 pt-8 border-t-2 border-gray-100">
              {/* <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 px-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Submit Admission Form</span>
                  </>
                )}
              </button> */}
              <button
                type="button"
                onClick={() => {
                  if (validate()) setShowPreview(true);
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl text-lg font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                Preview Admission Form
              </button>
            </div>
          </div>
        </form>
        {showPreview && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
            <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
              {/* HEADER */}
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: "Poppins" }}
                >
                  Admission Form Preview
                </h2>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-500 hover:text-black text-xl"
                >
                  ✕
                </button>
              </div>

              {/* BODY */}
              <div className="p-6 space-y-6 text-sm text-gray-800">
                {/* STUDENT DETAILS */}
                <section>
                  <h3
                    className="font-semibold text-base mb-2 border-b pb-1"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Student Details
                  </h3>
                  <div
                    className="grid grid-cols-2 gap-3"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <p>
                      <b>Name:</b> {form.studentName}
                    </p>
                    <p>
                      <b>DOB:</b> {form.dob}
                    </p>
                    <p>
                      <b>Gender:</b> {form.gender}
                    </p>
                    <p>
                      <b>Class:</b> {form.classApplied}
                    </p>
                  </div>
                </section>

                {/* GUARDIAN */}
                <section>
                  <h3
                    className="font-semibold text-base mb-2 border-b pb-1"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Guardian Details
                  </h3>
                  <div
                    className="grid grid-cols-2 gap-3"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <p>
                      <b>Father:</b> {form.fatherName}
                    </p>
                    <p>
                      <b>Mother:</b> {form.motherName}
                    </p>
                    <p>
                      <b>Guardian:</b> {form.guardianName}
                    </p>
                    <p>
                      <b>Relation:</b> {form.guardianRelation}
                    </p>
                  </div>
                </section>

                {/* CONTACT */}
                <section>
                  <h3
                    className="font-semibold text-base mb-2 border-b pb-1"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <p>
                      <b>Phone:</b> {form.phone}
                    </p>
                    <p>
                      <b>Email:</b> {form.email}
                    </p>
                  </div>
                </section>

                {/* DOCUMENT PREVIEW */}
                <section>
                  <h3
                    className="font-semibold text-base mb-2 border-b pb-1"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Uploaded Documents
                  </h3>

                  <div className="flex gap-6">
                    {files.studentPhoto && (
                      <div>
                        <p className="mb-1 font-medium">Photo</p>
                        <img
                          src={URL.createObjectURL(files.studentPhoto)}
                          className="w-28 h-32 object-cover border rounded"
                        />
                      </div>
                    )}

                    {files.studentSignature && (
                      <div>
                        <p
                          className="mb-1 font-medium"
                          style={{ fontFamily: "Poppins" }}
                        >
                          Signature
                        </p>
                        <img
                          src={URL.createObjectURL(files.studentSignature)}
                          className="w-28 h-16 object-contain border rounded"
                        />
                      </div>
                    )}
                  </div>
                </section>
              </div>

              {/* FOOTER */}
              <div className="flex justify-end gap-4 px-6 py-4 border-t bg-gray-50">
                <button
                  onClick={() => setShowPreview(false)}
                  className="px-5 py-2 rounded bg-gray-500 text-white"
                  style={{ fontFamily: "Poppins" }}
                >
                  Edit
                </button>

                <button
                  onClick={submitForm}
                  className="px-5 py-2 rounded bg-green-600 text-white"
                  style={{ fontFamily: "Poppins" }}
                >
                  Final Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div
          className="text-center mt-8 text-gray-600 text-sm"
          style={{ fontFamily: "Poppins" }}
        >
          <p>Need help? Contact our admission office</p>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   UI COMPONENTS
===================================================== */
function Section({ title, subtitle, icon, children }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg text-white shadow-md">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-2">
        {children}
      </div>
    </div>
  );
}

function Input({ label, error, required, ...props }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          error
            ? "border-red-400 bg-red-50"
            : "border-gray-200 hover:border-gray-300 focus:border-blue-500"
        }`}
      />
      {error && (
        <p className="text-red-600 text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

function Textarea({ label, error, required, ...props }) {
  return (
    <div className="md:col-span-2 space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        {...props}
        rows={3}
        className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
          error
            ? "border-red-400 bg-red-50"
            : "border-gray-200 hover:border-gray-300"
        }`}
      />
      {error && (
        <p className="text-red-600 text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

function Select({ label, options, error, required, ...props }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        {...props}
        className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white ${
          error
            ? "border-red-400 bg-red-50"
            : "border-gray-200 hover:border-gray-300"
        }`}
      >
        <option value="">Select {label}</option>
        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-600 text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

function FileInput({ label, name, onChange, error, required, accept }) {
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
    onChange(e);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div
        className={`relative border-2 border-dashed rounded-lg p-4 transition-all duration-200 hover:border-blue-400 ${
          error ? "border-red-400 bg-red-50" : "border-gray-300"
        }`}
      >
        <input
          type="file"
          name={name}
          onChange={handleChange}
          accept={accept}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="text-center">
          <svg
            className="mx-auto h-10 w-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          {fileName ? (
            <p className="mt-2 text-sm text-gray-700 font-medium truncate">
              {fileName}
            </p>
          ) : (
            <>
              <p className="mt-2 text-sm text-gray-600">
                <span
                  className="font-semibold text-blue-600"
                  style={{ fontFamily: "Poppins" }}
                >
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p
                className="text-xs text-gray-500 mt-1"
                style={{ fontFamily: "Poppins" }}
              >
                JPG, PNG or PDF (max. 2MB)
              </p>
            </>
          )}
        </div>
      </div>
      {error && (
        <p className="text-red-600 text-sm font-medium flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
