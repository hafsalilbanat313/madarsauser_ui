import { useNavigate } from "react-router-dom";

export default function StudentHeader() {
  const navigate = useNavigate();

  // const logout = () => {
  //   localStorage.removeItem("studentToken");
  //   navigate("/login");
  // };

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* <h1 className="text-lg font-semibold">Student Dashboard</h1> */}

      {/* <button
        onClick={logout}
        className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm font-medium"
      >
        Logout
      </button> */}
    </header>
  );
}
