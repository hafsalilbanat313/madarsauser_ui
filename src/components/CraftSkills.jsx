 

const CraftSkills = () => {
  return (
    <div className="min-h-screen pt-12 px-4 sm:px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center text-blue-900">
          Crafts & Skills
        </h2>

        <div className="bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-md border border-white/30">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            In order to ensure that all students of  Jamia Hafsa-Lil-Banat have skills and abilities beyond their indepth understanding of Islam and so that graduates may support their families and homes,  Jamia Hafsa-Lil-Banat also provides lessons in Life Skills such as IT, Embroidery and Food Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-md border border-white/30 flex flex-col items-center text-center">
            <img
              src="https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBsYWJ8ZW58MHx8MHx8fDA%3D"
              alt="Computer Class"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">COMPUTER CLASS ROOM</h3>
            <p className="text-gray-600 text-sm">
              Equipping students with essential IT knowledge to support their future academic and professional journey.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-md border border-white/30 flex flex-col items-center text-center">
            <img
              src="https://images.unsplash.com/photo-1619909490011-5e4b5b6b8547?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhaWxvcnxlbnwwfDB8MHx8fDA%3D"
              alt="Tailoring Class"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">TAILORING CLASS ROOM</h3>
            <p className="text-gray-600 text-sm">
              Tailoring classes help students become self-reliant and support their families with a valuable skill.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-md border border-white/30 flex flex-col items-center text-center sm:col-span-2">
            <img
              src="https://media.istockphoto.com/id/2197425444/photo/variety-of-vibrant-spices-displayed-at-an-indian-market-countertop.webp?a=1&b=1&s=612x612&w=0&k=20&c=NYpzxvlB9jVr-G6ZS-WIntvgUuVcVEGVK08COSLubn8="
              alt="Cooking Class"
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">COOKING CLASSES</h3>
            <p className="text-gray-600 text-sm">
              We are also running cooking classes for students to promote self-sufficiency and nutritional awareness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftSkills;
