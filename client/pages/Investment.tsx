import Layout from "@/components/Layout";
import SkeletonBar from "@/components/SkeletonBar";

export default function Investment() {
  return (
    <Layout title="Investment">
      <div className="px-0 space-y-6">
        {/* Line Chart with Nodes */}
        <div className="h-[577px] bg-app-black relative px-6">
          {/* Y-axis labels */}
          <div className="absolute left-6 top-10 bottom-24 flex flex-col justify-between text-xs text-grey-30">
            {[100, 90, 80, 70, 60, 50, 40, 30, 20, 10].map((val) => (
              <span key={val}>{val}</span>
            ))}
          </div>

          {/* Grid lines */}
          <div className="absolute left-0 right-0 top-[74px] space-y-[49px]">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-px bg-grey-60 rounded-full" />
            ))}
          </div>

          {/* Chart */}
          <svg
            className="absolute left-12 right-0 top-28 bottom-16"
            viewBox="0 0 325 407"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M1 405.5L50.5 375.5L93 290.5L152 274L218 71.0002L267.5 108L329 1.00017"
              stroke="#9DB3C8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="absolute left-10 right-0 top-32 bottom-16"
            viewBox="0 0 337 396"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M1 395L129.5 165L162.5 196.5L237 112.5L282.5 1.00001L337 42"
              stroke="#BDCCDB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs text-grey-30">
            {["JAN", "FEB", "MAR", "APR", "MAY", "JUN"].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>

          {/* Gain indicator */}
          <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 text-[38px] font-normal leading-[110%] tracking-[-0.76px] text-app-green">
            +56.6$
          </div>
        </div>

        {/* Pie Chart */}
        <div className="flex items-center justify-center bg-app-black py-8 px-8">
          <div className="relative w-[359px] h-[345px]">
            <svg
              width="359"
              height="345"
              viewBox="0 0 359 345"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M298.908 179.5C303.327 179.5 306.935 175.915 306.657 171.505C305.762 157.267 302.48 143.26 296.932 130.075C290.347 114.43 280.702 100.258 268.563 88.3913C256.425 76.5251 242.037 67.2041 226.246 60.9758C212.939 55.7274 198.862 52.7642 184.607 52.1923C180.192 52.0151 176.689 55.7034 176.79 60.1206L176.878 64.0251C176.978 68.4423 180.645 71.9107 185.057 72.1392C196.658 72.7398 208.104 75.2179 218.943 79.4931C232.267 84.7483 244.406 92.6131 254.648 102.625C264.891 112.638 273.029 124.596 278.585 137.797C283.105 148.537 285.842 159.923 286.705 171.507C287.034 175.913 290.585 179.5 295.003 179.5H298.908Z"
                fill="#E4EAF0"
              />
              <path
                d="M158.763 61.9023C157.996 57.5512 153.839 54.6207 149.544 55.6594C131.56 60.0095 114.736 68.2259 100.248 79.7352C96.7887 82.4835 96.5437 87.5641 99.5036 90.8444L102.12 93.744C105.08 97.0242 110.122 97.2576 113.613 94.5497C125.284 85.4977 138.697 78.947 153.011 75.3079C157.293 74.2194 160.209 70.0997 159.442 65.7485L158.763 61.9023Z"
                fill="#374D62"
              />
              <path
                d="M88.026 102.744C84.6415 99.9042 79.5729 100.332 76.9508 103.888C63.6382 121.943 55.2991 143.236 52.8467 165.629C50.1033 190.679 54.8496 215.979 66.4854 238.331C78.1211 260.683 96.1237 279.083 118.217 291.204C137.966 302.039 160.192 307.421 182.617 306.872C187.034 306.764 190.292 302.857 189.907 298.456L189.566 294.565C189.181 290.163 185.299 286.939 180.881 286.996C162.384 287.233 144.088 282.693 127.791 273.752C109.15 263.525 93.9597 248 84.1418 229.14C74.3239 210.28 70.3191 188.932 72.6339 167.796C74.6576 149.318 81.4321 131.727 92.2364 116.711C94.817 113.125 94.4025 108.095 91.0178 105.255L88.026 102.744Z"
                fill="#496683"
              />
              <path
                d="M204.255 296.315C205.171 300.637 209.427 303.424 213.683 302.238C236.85 295.787 257.776 282.891 273.983 264.977C290.19 247.063 300.932 224.954 305.039 201.259C305.794 196.906 302.597 192.95 298.205 192.47L294.322 192.045C289.93 191.565 286.011 194.745 285.206 199.09C281.587 218.618 272.616 236.818 259.222 251.623C245.828 266.427 228.614 277.17 209.545 282.72C205.303 283.955 202.53 288.172 203.446 292.494L204.255 296.315Z"
                fill="#496683"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="text-[32px] font-bold leading-[120%]">
                  €10,250
                </div>
                <SkeletonBar width={64} color="primary" />
                <SkeletonBar width={132} color="tertiary" />
              </div>
            </div>
          </div>
        </div>

        {/* Investment Items */}
        <div className="space-y-0">
          {["Investment1", "Investment2", "Investment3"].map((name, i) => (
            <div
              key={i}
              className="bg-app-grey px-6 py-6 flex flex-col items-end gap-4"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex-1" />
                <span className="text-base font-medium">{name}</span>
              </div>
              <SkeletonBar width={150} height={14} color="primary" />
              <SkeletonBar width={295} color="secondary" />
              <SkeletonBar width={200} color="secondary" />
              <SkeletonBar width={112} color="tertiary" />
              <SkeletonBar width={262} color="tertiary" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
