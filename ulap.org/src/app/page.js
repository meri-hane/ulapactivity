import Image from "next/image";
import i7 from "../app/assets/img/IntelliSeven_Logo 1.png";
import mapImage from "../app/assets/img/map.png";
import chatImage from "../app/assets/img/chat.png";
import googleStore from "../app/assets/img/google_store.png";
import appStore from "../app/assets/img/apple_store.png";

export default function Home() {
  return (
    <div className="relative p-5 font-sans"> 
      <div className="p-2 border-b">
        <div className="justify-between flex main grid-cols-2 items-center gap-9 px-4">
          <div className="logo">
            <Image
              src={i7}
              alt="IntelliSeven Logo"
              width={90}
              height={90}
            />
          </div>
          <div className="features flex gap-5 text-left font-bold text-gray-700">
            <p>Features</p>
            <p>Desktop app</p>
            <p>Privacy & Safety</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="p-20 w-[50%]">
          <div className="text-[5em] font-semibold leading-snug text-gray-600">
            <p>LawChat</p>
            <p>on your</p>
            <p>pocket.</p>
          </div>
          <p className="text-gray-400 font-medium">It makes it easy to communicate and ask for help.</p>
            <button className="mt-4 px-6 py-2 bg-red-500 text-white font-bold rounded-full hover:bg-red-600">
              Continue as Admin
            </button>
              <a href="#" className="block mt-4 text-blue-500 underline hover:text-blue-700 mx-12">
                Switch Account
              </a>

          <div className="h-10" /> {/* Add a spacer div with a height of 10 */}
          <div className="flex gap-4 mt-6">
          <Image
              src={appStore} // Replace with your App Store image variable
              alt="App Store"
              className="h-[80px] w-[200px] object-contain"
            />
            <Image
              src={googleStore} 
              alt="Google Store"
              className="h-[80px] w-[200px] object-contain"
            />
            
          </div>
        </div>
        



        <div className="relative w-[30%] right-[20%]">
          <div className=" w-[80%] h-[auto] absolute  top-[20%]">
            <Image
              src={mapImage} 
              alt="Map"
            />
          </div>
          <div className="w-[80%] h-[auto] relative z-10 right-[-300px] top-[40px]"> 
            <Image
              src={chatImage} 
              alt="Chat"
            
            />
        </div>
        </div>

      </div>
    </div>
  );
}


