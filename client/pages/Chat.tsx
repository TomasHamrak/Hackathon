import Layout from "@/components/Layout";
import { Menu, Edit } from "lucide-react";
import SkeletonBar from "@/components/SkeletonBar";

export default function Chat() {
  return (
    <div className="min-h-screen bg-app-black text-app-white pb-20">
      <div className="max-w-[500px] mx-auto">
        <header className="px-5 pt-10 pb-6 flex justify-between items-center">
          <h1 className="text-[42px] font-bold leading-[120%]">AI Agent</h1>
          <div className="flex gap-3">
            <Edit
              className="w-6 h-6 text-app-white flex-shrink-0"
              strokeWidth={2}
            />
            <Menu
              className="w-6 h-6 text-app-white flex-shrink-0"
              strokeWidth={2}
            />
          </div>
        </header>

        <main className="px-5 space-y-6 pb-8">
          {/* Chat bubbles */}
          <div className="space-y-6">
            {/* Received message */}
            <div className="flex justify-start">
              <div className="bg-app-blue rounded-lg p-4 max-w-[240px]">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <SkeletonBar width={104} color="tertiary" />
                    <SkeletonBar width={50} color="tertiary" />
                  </div>
                  <SkeletonBar width={202} color="tertiary" />
                  <SkeletonBar width={134} color="tertiary" />
                </div>
              </div>
            </div>

            {/* Received message 2 */}
            <div className="flex justify-start">
              <div className="bg-app-blue rounded-lg p-4 max-w-[240px]">
                <div className="space-y-3">
                  <SkeletonBar width={202} color="tertiary" />
                  <SkeletonBar width={134} color="tertiary" />
                </div>
              </div>
            </div>

            {/* Sent message */}
            <div className="flex justify-end">
              <div className="bg-grey-light rounded-lg p-4 max-w-[240px]">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <SkeletonBar width={104} color="primary" />
                    <SkeletonBar width={50} color="primary" />
                  </div>
                  <SkeletonBar width={202} color="primary" />
                  <SkeletonBar width={134} color="primary" />
                </div>
              </div>
            </div>

            {/* Received message 3 */}
            <div className="flex justify-start">
              <div className="bg-app-blue rounded-lg p-4 max-w-[240px]">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <SkeletonBar width={104} color="tertiary" />
                    <SkeletonBar width={50} color="tertiary" />
                  </div>
                  <SkeletonBar width={202} color="tertiary" />
                  <SkeletonBar width={134} color="tertiary" />
                </div>
              </div>
            </div>

            {/* Sent message 2 */}
            <div className="flex justify-end">
              <div className="bg-grey-light rounded-lg p-4 max-w-[240px]">
                <div className="space-y-3 flex gap-3">
                  <SkeletonBar width={114} color="primary" />
                  <SkeletonBar width={60} color="primary" />
                </div>
              </div>
            </div>

            {/* Received message 4 */}
            <div className="flex justify-start">
              <div className="bg-app-blue rounded-lg p-4 max-w-[240px]">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <SkeletonBar width={104} color="tertiary" />
                    <SkeletonBar width={50} color="tertiary" />
                  </div>
                  <SkeletonBar width={202} color="tertiary" />
                  <SkeletonBar width={134} color="tertiary" />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Input field */}
        <div className="fixed bottom-20 left-0 right-0 px-5">
          <div className="max-w-[500px] mx-auto">
            <div className="flex items-center justify-between px-5 py-3 rounded-lg border border-grey-60 bg-app-black">
              <input
                type="text"
                placeholder="Chat"
                className="bg-transparent text-grey-30 text-xl font-normal leading-[140%] outline-none flex-1"
              />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 1.99994L11 12.9999"
                  stroke="#9DB3C8"
                  strokeWidth="1.99832"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 1.99994L15 21.9999L11 12.9999L2 8.99994L22 1.99994Z"
                  stroke="#BDCCDB"
                  strokeWidth="1.99832"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
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
                  stroke="#72A1F3"
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
                  stroke="#BDCCDB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11.0001C14.2091 11.0001 16 9.2092 16 7.00006C16 4.79092 14.2091 3.00006 12 3.00006C9.79086 3.00006 8 4.79092 8 7.00006C8 9.2092 9.79086 11.0001 12 11.0001Z"
                  stroke="#BDCCDB"
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
