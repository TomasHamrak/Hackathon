import Layout from "@/components/Layout";

export default function Profile() {
  return (
    <div className="min-h-screen bg-app-black text-app-white pb-20">
      <div className="max-w-[500px] mx-auto">
        <header className="px-5 pt-10 pb-6">
          <h1 className="text-[42px] font-bold leading-[120%]">Avatar</h1>
        </header>

        <main className="px-0">
          {/* Avatar Display */}
          <div className="relative h-[400px] flex items-center justify-center">
            <div className="w-[375px] h-[375px] rounded-full bg-grey-75 flex items-center justify-center overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7dbdf9cff03d961977e4f9e548e8fa6ddf9effea?width=530"
                alt="Avatar"
                className="w-[265px] h-[400px] object-contain"
              />
            </div>
          </div>

          {/* Customize Button */}
          <div className="px-6 py-6">
            <button className="w-full bg-grey-60 text-app-white text-xl font-bold leading-[140%] py-4 px-2.5 rounded-lg">
              Customize
            </button>
          </div>

          {/* Latest Unlocks */}
          <div className="px-6 py-6">
            <h2 className="text-[26px] font-semibold mb-4">Latest unlocks</h2>
            <div className="bg-app-grey rounded-2xl p-6 flex items-center justify-center min-h-[304px]">
              <svg
                width="96"
                height="96"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2727 74.8093L25.0297 53.3141C26.1482 51.5664 28.5752 51.2558 30.0977 52.6656L39.0736 60.9765C40.4413 62.243 42.5821 62.1404 43.8225 60.7489L59.4233 43.248C60.8912 41.6013 63.5255 41.8109 64.7147 43.6689L84.6445 74.8093C86.0633 77.0261 84.4713 79.9352 81.8393 79.9352H14.078C11.446 79.9352 9.85397 77.0262 11.2727 74.8093Z"
                  stroke="white"
                  strokeWidth="3.20571"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="36" cy="28" r="10.3971" stroke="white" strokeWidth="3.20571" />
              </svg>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-app-black border-t border-grey-70 shadow-[0_-2px_8px_0_rgba(255,255,255,0.04)] z-50">
        <div className="max-w-[500px] mx-auto">
          <nav className="flex justify-between items-center px-6 py-6">
            <a href="/savings" className="flex-1 flex justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
                  stroke="#BDCCDB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 10H23"
                  stroke="#BDCCDB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="/investment" className="flex-1 flex justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M23 6L13.5 15.5L8.5 10.5L1 18"
                  stroke="#BDCCDB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 6.00012H23V12.0001"
                  stroke="#BDCCDB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="/chat" className="flex-1 flex justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 15.0001C21 15.5306 20.7893 16.0393 20.4142 16.4143C20.0391 16.7894 19.5304 17.0001 19 17.0001H7L3 21.0001V5.00012C3 4.46969 3.21071 3.96098 3.58579 3.58591C3.96086 3.21084 4.46957 3.00012 5 3.00012H19C19.5304 3.00012 20.0391 3.21084 20.4142 3.58591C20.7893 3.96098 21 4.46969 21 5.00012V15.0001Z"
                  stroke="#BDCCDB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="/profile" className="flex-1 flex justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 21.0001V19.0001C20 17.9392 19.5786 16.9218 18.8284 16.1716C18.0783 15.4215 17.0609 15.0001 16 15.0001H8C6.93913 15.0001 5.92172 15.4215 5.17157 16.1716C4.42143 16.9218 4 17.9392 4 19.0001V21.0001"
                  stroke="#72A1F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11.0001C14.2091 11.0001 16 9.2092 16 7.00006C16 4.79092 14.2091 3.00006 12 3.00006C9.79086 3.00006 8 4.79092 8 7.00006C8 9.2092 9.79086 11.0001 12 11.0001Z"
                  stroke="#72A1F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
