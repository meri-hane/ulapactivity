import Image from "next/image";
import i7 from "../../app/assets/img/IntelliSeven_Logo 1.png"; 
import mj from "../../app/assets/img/profile.jpg"; 

export default function HomeChat() {
    return (
        <>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-30 h-screen pt-5 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
                <div className="lg:px-5 lg:pl-3">
                    <div className="logo">
                        <Image
                            src={i7}
                            alt="IntelliSeven Logo"
                            width={61}
                            height={42}
                        />
                    </div>
                </div>
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <div className="flex flex-col items-center w-16 h-full overflow-hidden text-gray-700 rounded">
                        
                   
                            <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
                                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </a>
                            <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
                                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </a>
                    
                            <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300" href="#">
                                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                </svg>
                            </a>
                        
                        <div className="profile mt-auto mb-10">
                        <Image
                            src={mj}
                            alt="Profile"
                            width={51}
                            height={32}
                            className="rounded-full"
                        />
                        </div>

                        
                    </div>
                    
                </div>
                
            </aside>
            <div className="fixed top-0 left-20 w-96 h-screen pt-5 border-r border-gray-200">
    <div className="flex justify-between items-center px-5">
        <h1 className="text-gray-800 font-semibold text-2xl lg:px-3">Chats</h1>
        <div className="flex-shrink-0">
            <Image
                src={i7}
                alt="IntelliSeven Logo"
                width={61}
                height={42}
            />
        </div>
    </div>

    <div className="lg:px-10 lg:pl-6 mt-5">
        <div className="create">
        <input
          type="search"
          placeholder="Search message"
          className="border border-gray-300 rounded-full p-2 mb-4 w-full text-gray-800"
        />
        </div>
    </div>

    <div className="lg:px-30  lg:pl-6 mt-5">
        <div className="chat-item flex items-center py-2 border-b border-gray-300">
            <Image
                src={mj}
                alt="Chat"
                width={40}
                height={40}
                className="rounded-full mr-4"
            />
            <div>
                <p className="text-gray-800 font-semibold">Fishball Law Firm</p>
                <p className="text-gray-500 text-sm">Madel: Already changed your schedule...</p>
            </div>
        </div>
    </div>

    <div className="lg:px-30  lg:pl-6 mt-5">
        <div className="chat-item flex items-center py-2 border-b border-gray-300">
            <Image
                src={mj}
                alt="Chat"
                width={40}
                height={40}
                className="rounded-full mr-4"
            />
            <div>
                <p className="text-gray-800 font-semibold">Kikiam Law Firm</p>
                <p className="text-gray-500 text-sm">Madel: Already changed your schedule...</p>
            </div>
        </div>
    </div>

    <div className="lg:px-30  lg:pl-6 mt-5">
        <div className="chat-item flex items-center py-2 border-b border-gray-300">
            <Image
                src={mj}
                alt="Chat"
                width={40}
                height={40}
                className="rounded-full mr-4"
            />
            <div>
                <p className="text-gray-800 font-semibold">Hotdog Law Firm</p>
                <p className="text-gray-500 text-sm">Madel: Already changed your schedule...</p>
            </div>
        </div>
    </div>

    

</div>

<aside>
<div className="fixed top-0 right-0 w-[calc(90%-20rem)] h-screen pt-5 bg-white">

<div className="flex flex-col h-full">
    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <div className="flex items-center">
            <Image
                src={mj}
                alt="Mansala Law Firm"
                width={40}
                height={40}
                className="rounded-full mr-4"
            />
            <p className="font-semibold text-gray-800">Fishball Law Firm</p>
        </div>
        <div className="flex-shrink-0">
            <Image src={i7} alt="IntelliSeven Logo" width={61} height={42} />
        </div>
    </div>

            <div className="flex-1 overflow-y-auto mt-5">
                <div className="text-gray-600 text-sm text-center">
                    <p className="mb-2">Sun, Aug 20 at 5:45 PM</p>
                    <div className="flex items-start mb-4">
                        <Image
                            src={mj}
                            alt="User"
                            width={40}
                            height={40}
                            className="rounded-full mr-4"
                        />
                        <div className="bg-gray-100 p-3 rounded-lg">
                            <p>Madel: I updated the calendar and rescheduled your new hearing, Atty. Mansalas.</p>
                        </div>
                    </div>
                    </div>
                    </div>

                    </div>
                    </div>
</aside>


        </>
    );
}
