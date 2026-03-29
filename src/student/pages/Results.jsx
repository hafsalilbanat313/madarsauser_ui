export default function Results() {
  const results = [
    { exam: "Admission Test", score: "Result not declared" },
    { exam: "Your Rank", score: "-" },
    { exam: "Selecteion status", score: "-" },
  ];

  return (
    <div className="w-full h-full">
      <div className="bg-white p-6 rounded-xl shadow w-full h-full">
        <h2 className="text-2xl font-bold mb-6">Exam Results</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left py-3 px-4">Exam</th>
                <th className="text-left py-3 px-4">Result</th>
              </tr>
            </thead>

            <tbody>
              {results.map((r, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 font-medium">{r.exam}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        r.score === "Passed"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {r.score}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Optional Note */}
        <p className="text-sm text-gray-500 mt-4">
          Results are published by the administration.
        </p>
      </div>
    </div>
  );
}
