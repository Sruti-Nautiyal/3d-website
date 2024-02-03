import MushroomCanvas from "./canvas/MushroomCanvas";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const About = () => {
  return (
    <>
      <div
        className="flex md:flex-row mt-4 py-6 px-8 items-center sm:flex-col gap-10 flex-col"
        id="about"
      >
        <Tilt
          options={{ max: 25, scale: 1, speed: 350 }}
          className="mt-6 py-6 "
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" px-4 m-6 justify-center flex flex-col backdrop-blur-md bg-violet-400 bg-opacity-40 backdrop-filter rounded-2xl"
          >
            <div className="p-6 text-6xl font-serif font-bold font-poppins text-white sm:text-4xl xs:text-xl">
              {" "}
              What do we do?{" "}
            </div>
            <div className="flex justify-center text-white p-2 ">
              <motion.div
                // variants={fadeIn("", "", 0.5, 1)}
                className=" mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] px-4"
              >
                This is my first 3d website made using react thee fibre or R3F.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur officia pariatur accusantium explicabo sint
                quibusdam velit quo voluptas aliquid optio. Fuga culpa rerum
                velit aperiam dignissimos voluptatem doloremque a consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                nihil beatae inventore quasi, sed possimus maxime et repellat
                magni cumque rem facere nesciunt ab tempore cum qui,
                voluptatibus natus ad.
              </motion.div>
            </div>
          </motion.div>
        </Tilt>

        <div className=" w-1/2 sm:w-[400px] h-[400px]">
          <MushroomCanvas />
        </div>
      </div>
    </>
  );
};
export default About;
