import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
// import { gmail, github, linkedIn } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_kiuicy2",
        "template_p7gmjdu",
        {
          from_name: form.name,
          to_name: "Sruti",
          from_email: form.email,
          to_email: "shrutinautiyal6@gmail.com",
          message: form.message,
        },
        "erfBBTlP8MCtjZvBn"
      )
      .then(
        (res) => {
          setLoading(false);
          alert("Thank You, I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("something went Wrong!!");
        }
      );
  };
  return (
    <>
      <div
        className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden p-14"
        id="contact"
      >
        <motion.div
          // variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[500px] h-[300px] p-0 flex justify-center items-start flex-col z-10"
        >
          <img
            src="./contact.png"
            alt="Contact"
            className="p-0 mt-6 w-4/5 h-4/5 object-contain mt-4 animate-bounce-slow"
          />
          {/* <div className="flex flex-row items-center sm:flex-col md:flex-row w-full justify-between"> */}
          {/* <div className="text-white font-bold uppercase w-1/3">
              Other contact sites
            </div> */}
          <div className="flex h-full w-full items-center justify-evenly cursor-pointer flex-row">
            <a href="mailto:shrutinautiyal6@gmail.com">
              <img
                src="./gmail.jfif"
                alt=""
                className=" object-contain h-[60px] w-[60px] rounded-full p-2 bg-white hover:animate-bounce-slow"
              />
            </a>
            <Link to="https://github.com/Sruti-Nautiyal">
              <img
                src="./github.png"
                alt=""
                className=" object-contain h-[60px] w-[60px] rounded-full p-2 bg-white hover:animate-bounce-slow"
              />
            </Link>
            <Link to="https://www.linkedin.com/in/sruti-nautiyal-1586611b1/">
              <img
                src="./linkedIn.png"
                alt=""
                className=" object-contain h-[60px] w-[60px] rounded-full p-2 bg-white hover:animate-bounce-slow"
              />
            </Link>
          </div>
          {/* </div> */}
          <div className=" w-full mt-4 uppercase flex items-center justify-center opacity-30 text-white sm:text-[16px] text-[15px]">
            Other Contacting sites
          </div>
        </motion.div>
        <motion.div
          // variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-purple-200 flex-[0.75] p-8 rounded-2xl backdrop-blur-sm backdrop-filter bg-opacity-90 item-end"
        >
          <p className="sm:text-[16px] text-[12px] text-black uppercase tracking-wider">
            Get IN Touch
          </p>
          <h3 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px]">
            Contact
          </h3>
          <form ref={formRef} className="mt-8 flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                required
              />
            </label>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-teriary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "send"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};
export default Contact;
