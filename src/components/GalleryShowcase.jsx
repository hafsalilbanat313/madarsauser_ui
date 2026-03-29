import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const categorizedImages = {
  "Campus & Building": [
    { src: "/img1.jpg", title: "Main Building" },
    { src: "/img6.jpg", title: "Entrance View" },
    { src: "/img13.jpg", title: "Madarsa Gate" },
    { src: "/img23.jpg", title: "Back Side Building" },
    { src: "/img30.jpg", title: "Corner View" },
  ],

  "Classrooms & Labs": [
    { src: "/img3.jpg", title: "Classroom 1" },
    { src: "/img7.jpg", title: "Classroom 2" },
    { src: "/img14.jpg", title: "Students in Class" },
    { src: "/img24.jpg", title: "Classroom with Bench" },
    { src: "/img31.jpg", title: "Class Black Board" },
  ],

  "Prayer & Library": [
    { src: "/img2.jpg", title: "Prayer Hall Inside" },
    { src: "/img8.jpg", title: "Namaz Area" },
    { src: "/img15.jpg", title: "Prayer Carpet" },
    { src: "/img20.jpg", title: "Imam Spot" },
    { src: "/img32.jpg", title: "Hall Arch View" },
  ],
};

const GalleryShowcase = () => {
  return (
    <div className="py-4 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center  text-blue-900 mb-12" style={{fontFamily:"Poppins"}}>
           Madarsa Infrastructure Gallery
        </h2>

        {Object.entries(categorizedImages).map(([category, images], index) => (
          <div key={index} className="mb-16">

            <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-6 text-center">
              {category}
            </h3>

            <Swiper
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}

              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}

            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>

                  <div className="rounded-xl overflow-hidden shadow-lg bg-white">

                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-[220px] object-cover"
                    />

                    <div className="p-3 text-center font-medium text-gray-700">
                      {img.title}
                    </div>

                  </div>

                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        ))}

      </div>
    </div>
  );
};

export default GalleryShowcase;