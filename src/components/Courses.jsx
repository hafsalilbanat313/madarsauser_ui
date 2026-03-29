 

const courses = [
  {
    title: "POST GRADUTE PART-1 (FAZILA) ARABI-5",
    subjects: [
      "BUKHARI SHARIF",
      "TIRMIZI SHARIF",
      "ABUDADWOOD SHARIF",
      "MUSALIM SHARIF",
      "TAHAWI SHARIF",
      "NASAI SHARIF",
      "IBN-E-MAZA SHARIF",
      "MOATTA IMAM MALIK",
      "MOATTA IMAM MUHAMMAD",
      "MUTALA",
    ],
  },
  {
    title: "POST GRADUTE PART-2 (FAZILA) ARABI-4",
    subjects: [
      "JALALEN SHARIF",
      "MISHKAT SHARIF",
      "HIDAYA SHARIF",
      "MEHFOUZAT",
      "MUTALA",
      "COMPUTER",
      "TAILORING",
      "KITCHIN WORK",
    ],
  },
  {
    title: "GRADUTE PART-1 (AALIMA) ARABI-3",
    subjects: [
      "TARZUMAN QURAAN",
      "RIYAZUS SALIHAN",
      "AQEEDA-TUL-TAHAWI",
      "TOHFA-TUL-DURAR",
      "USULESASI",
      "QUDURI",
      "MUKHTARAT",
      "ENGLISH & GRAMMER",
      "MATHS",
      "TAILORING",
      "MATALA(FAZAIL-E-AAMAL)"
    ],
  },
 {
    title: "PRIMARY  ",
    subjects: [
      "QAIDA",
      "URDU READING AND WRITING",
      "DEENIYAT READING AND WRITING",
      "HINDI READING AND WRITING",
      "ENGLISH READING AND WRITING",
      "MATHS READING AND WRITING",
       
    ],
  },
 {
    title: "PRIMARY 1 ",
    subjects: [
      "PARA AMM ",
      "URDU",
      "DEENIYAT",
      "HINDI",
      "ENGLISH",
      "MATHS",
      "TABLE & PICTURES ",
      "ART",
       
    ],
  },
 {
    title: "PRIMARY 2 ",
    subjects: [
      "PARA ",
      "URDU",
      "DEENIYAT",
      "HINDI",
      "ENGLISH",
      "MATHS",
      "TABLE & PICTURES ",
      "ART",
      "TALEEMUL ISLAM",
      "SAMAJ & SCIENCE",
    ],
  },
 {
    title: "PRIMARY 3 ",
    subjects: [
      "QURAN-E-KAREEM & QAWAID ",
      "URDU",
      "DEENIYAT",
      "HINDI",
      "ENGLISH & GRAMMER",
      "MATHS",
      "SAMAJ & SCIENCE",
      "COMPUTER",
      "ART",
      "TALEEMUL ISLAM PART-2",
     
    ],
  },
 {
    title: "PRIMARY 4 ",
    subjects: [
      "QURAN-E-KAREEM & QAWAID ",
      "URDU",
      "DEENIYAT",
      "HINDI",
      "ENGLISH & GRAMMER",
      "MATHS",
      "SAMAJ & SCIENCE",
      "COMPUTER",
      "ART",
      "TALEEMUL ISLAM PART-3",
      "MINHAJUL ARABIYS PART-1",
      "DRUSUL ASHYA",
      "MATALA",
     
    ],
  },
  
 
  
];

const Courses = () => {
  return (
    <div className="min-h-screen pt-12 px-4 sm:px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-blue-900 text-center" style={{fontFamily:"Poppins"}}>Courses Offered</h2>
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-md border border-white/30"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">
              {course.title}
            </h3>
            <table className="w-full text-sm sm:text-base table-auto border-collapse">
              <thead>
                <tr className="bg-blue-100 text-blue-900">
                  <th className="border border-white px-4 py-2" style={{fontFamily:"Poppins"}}>SR.NO.</th>
                  <th className="border border-white px-4 py-2 " style={{fontFamily:"Poppins"}}>Subject</th>
                </tr>
              </thead>
              <tbody>
                {course.subjects.map((subject, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white/60" : "bg-white/40"}
                    style={{fontFamily:"Poppins"}}
                  >
                    <td className="border border-white px-4 py-2 text-center" style={{fontFamily:"Poppins"}}>{idx + 1}</td>
                    <td className="border border-white px-4 py-2 text-center" style={{fontFamily:"Poppins"}}>{subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
