import { useEffect, useState } from "react";

export default function StudentProfile() {
  const [loading, setLoading] = useState(true);

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    address: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://madarsa-backend-pro.onrender.com/auth/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) return;

        const u = data.user;

        setStudent({
          firstName: u.firstName || "",
          lastName: u.lastName || "",
          email: u.email || "",
          mobile: u.mobile || "",
          dob: u.dob || "",
          address: u.address || "",
        });
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">My Profile</h2>
          <p className="text-gray-500">Basic account information</p>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          
          <Field label="First Name" value={student.firstName} />
          <Field label="Last Name" value={student.lastName} />
          <Field label="Email" value={student.email} />
          <Field label="Phone" value={student.mobile} />
          <Field label="Date of Birth" value={student.dob} />
          <Field label="Address" value={student.address} textarea />
        
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, textarea }) {
  return (
    <div className={textarea ? "md:col-span-2" : ""}>
      
      <label className="block text-gray-500 text-xs mb-1">
        {label}
      </label>

      {/* Simple text (no box, no input) */}
      <div className="text-gray-900 pb-1">
        {value || "-"}
      </div>
    </div>
  );
}