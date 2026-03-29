 

const guestImages = [
  { src: "/img27.jpg", alt: "Chief Guest Arrival" },
  { src: "/img23.jpg", alt: "Welcome Ceremony" },
  { src: "/img25.jpg", alt: "Guest Speech" },
  { src: "/img26.jpg", alt: "Students with Guests" },
  { src: "/img31.jpg", alt: "Group Photo" },
  { src: "/img35.jpg", alt: "Cultural Program" },
];

const GuestsIjlasGallery = () => {
  return (
    <div className="min-h-screen   px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 font-sans mb-4 tracking-wide" style={{fontFamily:"Poppins"}}>
          Guests in Jamia Hafsa Lil Banat – Yearly Ijlas (Jalsa)
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6" style={{fontFamily:"Poppins"}}>
          Every year, Jamia Hafsa Lil Banat hosts its grand <strong>Ijlas (Jalsa)</strong> to
          celebrate academic and cultural achievements. Distinguished guests,
          scholars, and families gather to witness the brilliance of our
          students and the blessings of Islamic education.
        </p>

        {/* Thought */}
        <blockquote className="italic text-base sm:text-lg text-gray-500 font-medium mb-12" style={{fontFamily:"Poppins"}}>
          “Knowledge is light, and those who seek it are guided by divine wisdom.”
        </blockquote>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {guestImages.map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-lg bg-white/30 backdrop-blur-lg border border-white/40 hover:scale-105 transition duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 sm:h-60 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm p-2 text-center">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestsIjlasGallery;
