export default function TermsAndConditions({ accepted, setAccepted }) {
  return (
    <div className="bg-gray-50 border rounded-lg p-4 mt-6">
      <h3 className="text-lg font-semibold mb-3">
        Terms & Conditions
      </h3>

      <div className="h-56 overflow-y-auto text-sm text-gray-700 space-y-2 pr-2">
        <p>1. Please read all the instructions carefully before filling the admission form.</p>
        <p>2. Fill every column of the form neatly and clearly.</p>
        <p>3. The form should be filled in Urdu, but wherever English is required, use English only.</p>
        <p>4. Student must come with parents or close relative at the time of admission.</p>
        <p>5. Student must be capable of doing basic work independently.</p>
        <p>6. 15 days continuous absence without information will result in cancellation.</p>
        <p>7. Wearing prescribed uniform is compulsory.</p>
        <p>8. Late fee submission will attract ₹20 per day fine.</p>
        <p>9. Aadhaar Card / Birth Certificate / School or Hospital certificate is mandatory.</p>
        <p>10. Poor attendance or bad conduct may lead to name removal.</p>
        <p>11. Misbehavior with staff or teachers can cancel admission.</p>
      </div>

      <label className="flex items-center gap-2 mt-4 text-sm font-medium">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="w-4 h-4"
        />
        I have read and agree to the Terms & Conditions
      </label>
    </div>
  );
}
