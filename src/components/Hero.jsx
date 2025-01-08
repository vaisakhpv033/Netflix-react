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
          <h4 className="text-sm md:text-sm mt-6">Ready to watch? Enter your email to create or restart your membership.</h4>
          <div className="flex flex-col max-md:px-4 md:flex-row gap-4 w-full max-w-[600px] mt-3">
            <div className="flex-grow">
              <input
                type="email"
                placeholder="Email address"
                className=" text-white px-6 py-2.5 rounded w-full bg-transparent border border-white focus:outline-2 focus:outline-green-700"   
              />          
            </div>
            <button className="bg-red-600 text-white px-6 py-2.5 rounded font-bold hover:bg-red-700">
              Get Started 
            </button>
          </div>
        </div>
      </div>

     

        {/* Curved Border */}
        <div className="absolute bottom-0 w-full h-20 red-border"></div>
        <div className="absolute bottom-0 w-full h-20 curved-border"></div>
        

         {/* Bottom fade */}
         <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#000000] to-transparent z-[1000]"></div>
    </div>
  );
}
