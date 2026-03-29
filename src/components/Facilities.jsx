 

const facilitiesData = [
  {
    title: "Kitchen",
    description: "Hygienic meals are prepared daily to ensure the students are well-nourished.",
    image: "https://images.unsplash.com/photo-1717371133600-7a22a51d3787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbiUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Garden",
    description: "A serene and green environment encourages relaxation and connection with nature.",
    image: "https://images.unsplash.com/photo-1544727219-d2ff78f0f148?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Library",
    description: "A wide collection of Islamic and academic resources to enrich students' knowledge.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Canteen",
    description: "Affordable and healthy snacks are available during breaks for all students.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Medical",
    description: "On-campus medical facilities ensure timely healthcare and emergency support.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Water & Air",
    description: "Clean drinking water and proper ventilation for a healthy environment.",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRyaW5raW5nJTIwd2F0ZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Well Furnished Classrooms",
    description: "Spacious and well-equipped classrooms designed to enhance learning.",
    image: "https://images.unsplash.com/photo-1599827083902-7ebdbad1744c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3Nyb29tJTIwJTIwb2YlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D"
  }
];

const Facilities = () => {
  return (
    <div className="min-h-screen pt-12 pb-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-white">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {facilitiesData.map((facility, idx) => (
          <div
            key={idx}
            className="bg-white/40 backdrop-blur-md border border-white/30 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-all duration-300"
          >
            <img
              src={facility.image}
              alt={facility.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-800 mb-2">{facility.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
