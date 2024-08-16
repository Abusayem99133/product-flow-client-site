import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

AOS.init();
const Header = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        loop={true}
        // navigation={true}
        autoplay={{
          delay: 2000,
        }}
      >
        <SwiperSlide>
          <div className="p-5">
            <div
              className="hero min-h-screen  rounded-[44px]"
              style={{
                backgroundImage: "url(https://imgbb.host/images/tClQK.jpeg)",
              }}
            >
              <div className=" md:hero-overlay md:bg-opacity-60 rounded-[44px]"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1
                    className="mb-5 text-5xl font-bold font-display"
                    data-aos="zoom-in-down"
                    data-aos-delay="1000"
                  >
                    {""}
                    <span style={{ color: "purple", fontWeight: "semiBold" }}>
                      <Typewriter
                        words={["The Quran__"]}
                        loop={100}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                      />
                    </span>
                  </h1>
                  <p className="mb-5 font-display">
                    The most conventional answer is that the Quran is a book –
                    but it is not like most books. It is made up of words which
                    contain truth and guidance for every human being, and
                    Muslims believe that these are words revealed directly by
                    God, in the Arabic language, to the last of His prophets and
                    messengers, Muhammad ﷺ (peace be upon him).
                  </p>
                  <button className=" font-display font-bold text-2xl border-2 p-3 rounded-xl border-purple-300  hover:bg-purple-400">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5">
            <div
              className="hero min-h-screen  rounded-[44px]"
              style={{
                backgroundImage: "url(https://imgbb.host/images/tC84M.webp)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 rounded-[44px]"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="mb-5 text-5xl font-bold font-display">
                    {""}
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {" "}
                      <Typewriter
                        words={["The Hadith__"]}
                        loop={100}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                      />
                    </span>
                  </h1>
                  <p className="mb-5 font-display">
                    Hadith is an action, saying made by the final prophet of
                    mankind, Prophet Muhammad SAW… These Islamic audio lectures
                    pertain to hadith, it could be stories or rulings extracted.
                    Implicit and Explicit approvals he made. The science of
                    hadith and so on. A ḥadīth is a statement of the Prophet
                    peace be upon him which was narrated by his companions and
                    subsequently narrated to the next generation until these
                    sayings were compiled in ḥadīth collections.
                  </p>
                  <button className=" font-display font-bold text-2xl border-2 p-3 rounded-xl border-purple-300  hover:bg-purple-400">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5">
            <div
              className="hero min-h-screen  rounded-[44px]"
              style={{
                backgroundImage: "url(https://imgbb.host/images/tCaif.webp)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 rounded-[44px]"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="mb-5 text-5xl font-bold font-display">
                    {""}
                    <span style={{ color: "orange" }}>
                      <Typewriter
                        words={["The Biography__"]}
                        loop={100}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span>
                  </h1>
                  <p className="mb-5 font-display">
                    A biography, or simply bio, is a detailed description of a
                    person's life. It involves more than just basic facts like
                    education, work, relationships, and death; it portrays a
                    person's experience of these life events.
                  </p>

                  <button className=" font-display font-bold text-2xl border-2 p-3 rounded-xl border-purple-300  hover:bg-purple-400">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
