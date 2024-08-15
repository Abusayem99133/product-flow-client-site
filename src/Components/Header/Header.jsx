import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

AOS.init();
const Header = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
      >
        <SwiperSlide>
          <div className="p-5">
            <div
              className="hero min-h-screen  rounded-[44px]"
              style={{
                backgroundImage:
                  "url(https://i.postimg.cc/gcMn5Fxh/pexels-karamuse-2346120.jpg)",
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
                        words={["Landscape", "Painting Now"]}
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
                    A far-reaching exploration of the very best landscape
                    painting now, brimming with some of the brightest stars in
                    the contemporary art world
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
                backgroundImage:
                  "url(https://i.postimg.cc/xdJwzj2t/pexels-tivasee-17374727-21792995.jpg)",
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
                        words={[
                          "Color Explosion with pop",
                          " artist Tristan Eaton",
                        ]}
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
                    Color Explosion with pop artist Tristan Eaton Born in L.A.
                    in 1978, Tristan Eaton started pursuing street art as a
                    teenager, <br /> painting everything from billboards to
                    dumpsters in the ur
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
                backgroundImage:
                  "url(https://i.postimg.cc/s2VMqV4p/pexels-steve-1988693.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 rounded-[44px]"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="mb-5 text-5xl font-bold font-display">
                    {""}
                    <span style={{ color: "orange" }}>
                      <Typewriter
                        words={["Water Color Painting"]}
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
                    Wow, what a title for this post! For a tongue twister,
                    quickly repeat ‘winter woodland watercolor tutorial’ 10
                    times in a row. <br /> But it is really the best way to
                    describe these beautiful and unique little watercolor scenes
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
                backgroundImage:
                  "url(https://i.postimg.cc/wj9J8c6y/pexels-steve-1045299.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 rounded-[44px]"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold font-display">
                    {""}
                    <span style={{ color: "yellow" }}>
                      {" "}
                      <Typewriter
                        words={["   Oil Painting is here"]}
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
                    A paintbrush and a knife for the palette, as well as a
                    combination of methods, give this picture a volume and a
                    depth of space.
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
                backgroundImage:
                  "url(https://i.postimg.cc/BbLWvK42/maxresdefault.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 rounded-[44px]"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold font-display">
                    {""}
                    <span style={{ color: "gray" }}>
                      <Typewriter
                        words={[" Charcoal Sketching"]}
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
                    Well technically speaking, charcoal is burnt organic
                    material. Usually the material is wood. There are a few
                    types of charcoal used by artists to create a drawing.
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
                backgroundImage: "url(https://i.postimg.cc/cLNqsCj8/hq720.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60 rounded-[44px]"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold font-display">
                    <span style={{ color: "brown" }}>
                      {" "}
                      <Typewriter
                        words={[" Cartoon Drawing"]}
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
                    Many kids often learn how to draw by copying their favorite
                    cartoon characters. Cartoons are all about keeping things
                    simple.
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
