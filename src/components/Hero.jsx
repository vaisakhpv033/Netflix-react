import backgroundImage from "../assets/bg_netflix.jpg";

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex flex-col justify-center max-w-2xl items-center text-white">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-serif font-extrabold text-center">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="text-lg md:text-xl lg:text-xl mt-4">
            Starts at ₹149. Cancel any time.
          </h2>
          <button className="bg-red-600 text-white px-6 py-2.5 rounded-full font-semibold mt-8 hover:bg-red-700">
            Get Started
          </button>
        </div>
      </div>

     

        {/* Curved Border */}
        <div className="absolute bottom-0 w-full h-20 red-border"></div>
        <div className="absolute bottom-0 w-full h-20 curved-border"></div>
        

         {/* Bottom fade */}
         <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0d0d22] to-transparent"></div>
    </div>
  );
}
