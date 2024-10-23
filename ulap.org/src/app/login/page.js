import Image from "next/image";
import i7 from "../../app/assets/img/IntelliSeven_Logo 1.png"; // Ensure the path is correct

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center pt-12"> {/* Parent div added here */}
      <div className='mt-20'>
      <Image 
        src={i7} // Use the imported image
        alt="IntelliSeven Logo" 
        width={150} // Adjust the width as needed
        height={150} // Adjust the height as needed
      />
      </div>

      <div className="flex justify-between items-center">
      <div className='text-center'>
        <h1 className='text-gray-600 font-semibold text-5xl mt-'> LawChat</h1>
        <h2 className='text-red-500 text-1xl mt-5'> Login Error</h2>
        <h2 className='text-red-500 text-1xl'> An unexpected error occured. Please try logging in again.</h2>
      </div>
    </div>

    <div className="flex flex-col items-center mt-8 w-full max-w-sm px-4">
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded-full p-2 mb-4 w-full text-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-full p-2 mb-4 w-full text-gray-800"
        />
        
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full w-full hover:bg-red-600 transition duration-300">
          Continue
        </button>

        <div className="items-center mt-4">
          <input type="checkbox" id="keepSignedIn" className="mr-2" />
          <label htmlFor="keepSignedIn" className="text-gray-700">Keep me signed in</label>
        </div>
      </div>
    </div>

      
  );
}
