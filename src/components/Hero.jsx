import ParticleRing from "./ParticleRing";

const Hero = () => {
  return (
    <>
      <p className="z-10 absolute top-[50%] left-[50%] text-[17px] -translate-x-[50%] -translate-y-[50%] text-[13px]  font-bold text-white">
        Welcome to this World of 3D!!
      </p>
      <ParticleRing />
      {/* <div className="xs:bottom-10 bottom-30 flex justify-center items-center text-white">
        <a href="/about">
          <div className="w-[25px] h-[45px] border-4 rounded-2xl flex justify-center p-2"></div>
        </a>
      </div> */}
    </>
  );
};
export default Hero;
