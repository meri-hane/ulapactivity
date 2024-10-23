import React, {UseState} from 'react'
import i7 from "../app/assets/img/IntelliSeven_Logo 1.png";

function Navbar(){
    return(
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
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
      </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;