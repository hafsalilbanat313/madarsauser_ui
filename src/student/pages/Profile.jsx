import { useEffect, useState } from "react";

export default function StudentProfile() {
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState({}); // 🔥 simple

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://madarsa-backend-pro.onrender.com/auth/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("BACKEND DATA 👉", data.user); // 🔥 debug

        if (!data.success) return;

        setStudent(data.user); // ✅ direct set
      })
      .catch((err) => {
        console.error("ERROR 👉", err);
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
    <div className="w-full min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow">

        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold">My Profile</h2>
          <p className="text-gray-500 text-sm">
            Basic account information
          </p>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 text-sm">

          <Field label="First Name" value={student?.firstName} />
          <Field label="Last Name" value={student?.lastName} />
          <Field label="Email" value={student?.email} />
          <Field label="Phone" value={student?.mobile} />
          <Field label="Date of Birth" value={formatDate(student?.dob)} />
          <Field label="Address" value={student?.address} textarea />

        </div>
      </div>
    </div>
  );
}

/* ================= FIELD COMPONENT ================= */
function Field({ label, value, textarea }) {
  return (
    <div className={textarea ? "md:col-span-2" : ""}>
      <label className="block text-gray-500 text-xs mb-1">
        {label}
      </label>

      <div className="text-gray-900 pb-1 break-words">
        {value || "-"}
      </div>
    </div>
  );
}

/* ================= DATE FORMAT ================= */
function formatDate(date) {
  if (!date) return "-";
  try {
    return new Date(date).toLocaleDateString();
  } catch {
    return date;
  }
}