import Image from "next/image";
import i7 from "../../app/assets/img/IntelliSeven_Logo 1.png";
import mj from "../../app/assets/img/profile.jpg";

export default function HomeChat() {
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-30 h-screen pt-5 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="lg:px-5 lg:pl-3">
          <div className="logo">
            <Image src={i7} alt="IntelliSeven Logo" width={61} height={42} />
          </div>
        </div>
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <div className="flex flex-col items-center w-16 h-full overflow-hidden text-gray-700 rounded">
            <a
              className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
            </a>

            <a
              className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0 0a4 4 0 100-8 4 4 0 000 8zm9 0a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            </a>

            <a
              className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
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
          <h1 className="text-gray-800 font-semibold text-2xl lg:px-3">
            Chats
          </h1>
          <div className="flex-shrink-0">
            <a
              className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300 text-gray-800"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </a>
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
              <p className="text-gray-500 text-sm">
                Madel: Already changed your schedule...
              </p>
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
              <p className="text-gray-500 text-sm">
                Madel: Already changed your schedule...
              </p>
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
              <p className="text-gray-500 text-sm">
                Madel: Already changed your schedule...
              </p>
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
                <a
                  className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-300 text-gray-800"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto mt-5">
              <div className="text-gray-600 text-sm text-center">
                <p className="mb-2">Sun, Aug 20 at 5:45 PM</p>
                <div className="flex items-start gap-2.5">
                  <Image
                    src={mj}
                    alt="User"
                    width={50}
                    height={40}
                    className="w-8 h-8 rounded-full"
                  />
                  <div class="flex flex-col w-full max-w-[320px] leading-1.5">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                      <span class="text-sm font-semibold text-gray-900 dark:text-gray">
                        Madel
                      </span>
                      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        11:46
                      </span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p>
                        I updated the calendar and rescheduled your new hearing,
                        Atty. Mansalas.
                      </p>
                    </div>
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
