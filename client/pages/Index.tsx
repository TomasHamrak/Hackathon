import Layout from "@/components/Layout";
import CircularProgress from "@/components/CircularProgress";
import SkeletonBar from "@/components/SkeletonBar";

export default function Index() {
  return (
    <Layout title="Savings">
      <div className="px-5 space-y-8">
        {/* Main Balance Card */}
        <div className="bg-app-black rounded-[32px] p-10 flex flex-col items-center justify-center gap-8 min-h-[282px]">
          <div className="flex items-center justify-center w-[66px] h-[66px] rounded-full bg-app-grey">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[34px] h-[34px]"
            >
              <path
                d="M3.99292 26.4946L8.86518 18.8817C9.26132 18.2628 10.1209 18.1528 10.6601 18.6521L13.839 21.5955C14.3235 22.0441 15.0817 22.0077 15.521 21.5149L21.0462 15.3167C21.5661 14.7335 22.4991 14.8077 22.9203 15.4657L29.9788 26.4946C30.4812 27.2798 29.9174 28.3101 28.9852 28.3101H4.98643C4.05428 28.3101 3.49044 27.2798 3.99292 26.4946Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12.7505"
                cy="9.91634"
                r="3.5"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center gap-4">
            <SkeletonBar width={80} color="primary" />
            <SkeletonBar width={200} color="secondary" />
          </div>
          <div className="text-[32px] font-bold leading-[120%]">€23,870</div>
        </div>

        {/* Saving Goal Card */}
        <div className="space-y-2">
          <h2 className="text-base font-semibold px-1">Saving goal</h2>
          <div className="bg-app-black rounded-[30px] p-6">
            <SkeletonBar width={129} color="tertiary" className="mb-6" />
            <div className="flex items-center gap-5">
              <CircularProgress percentage={59} />
              <div className="flex flex-col gap-3.5">
                <SkeletonBar width={129} color="secondary" />
                <SkeletonBar width={72} color="secondary" />
                <SkeletonBar width={160} color="secondary" />
              </div>
            </div>
          </div>
        </div>

        {/* Milestones History */}
        <div>
          <h2 className="text-[26px] font-semibold mb-4 px-1">
            Milestones history
          </h2>
          <div className="relative h-[354px] bg-app-black rounded-lg">
            {/* Chart Container */}
            <div className="absolute inset-0 p-6">
              {/* Y-axis labels */}
              <div className="absolute left-6 top-12 bottom-16 flex flex-col justify-between text-xs text-grey-30">
                {["JAN", "FEB", "MAR", "APR", "MAY", "JUN"].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>

              {/* Grid lines */}
              <div className="absolute left-0 right-0 top-12 bottom-16 space-y-[49px] px-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-px bg-grey-60" />
                ))}
              </div>

              {/* Chart visualization placeholder */}
              <svg
                className="absolute left-8 right-8 top-6 bottom-6"
                viewBox="0 0 375 277"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M-0.248383 64.4061C-13.7885 57.4044 -30.3912 81.7835 -37 94.8483V276.241H210.5H462L507 71.2413C498.296 90.6482 378 -38.2588 345.507 11.5127C335.552 26.7617 319.625 82.771 273.325 84.7206C232.646 86.4335 220.248 21.0937 178.019 23.399C135.79 25.7043 130.754 98.4238 72.2877 102.078C29.1335 104.776 16.6767 73.1582 -0.248383 64.4061Z"
                  fill="url(#paint0_linear)"
                  fillOpacity="0.2"
                />
                <path
                  d="M-36 94.8508C-29.3912 81.786 -12.7885 57.4069 0.751617 64.4086C17.6767 73.1607 30.1335 104.778 73.2877 102.081C131.754 98.4263 136.79 25.7069 179.019 23.4015C221.248 21.0962 233.646 86.436 274.325 84.7231C320.625 82.7736 333.363 24.1201 346.507 11.5153C388.5 -28.7567 454.296 93.5105 463 74.1036"
                  stroke="#7C99B6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="199.5"
                    y1="-405.259"
                    x2="192.5"
                    y2="192.241"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopColor="#434343" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Tooltip */}
              <div className="absolute left-[200px] top-8 px-3.5 py-3.5 rounded-2xl border border-grey-40 bg-grey-60 text-xs text-grey-85">
                €3,250
              </div>
              <SkeletonBar
                width={72}
                height={8}
                color="secondary"
                className="absolute left-[208px] top-[72px]"
              />
            </div>
          </div>
        </div>

        {/* Budgeting Section */}
        <div>
          <h2 className="text-[26px] font-semibold mb-6 px-1">Budgeting</h2>
          <div className="space-y-4">
            {/* Clothes */}
            <div className="flex items-center gap-5">
              <CircularProgress percentage={28} />
              <div className="flex-1 flex flex-col gap-3.5">
                <SkeletonBar width={130} color="tertiary" />
                <SkeletonBar width={72} color="tertiary" />
                <SkeletonBar width={160} color="tertiary" />
              </div>
              <span className="text-base font-semibold text-right min-w-[93px]">
                Clothes
              </span>
            </div>

            {/* Cigarettes */}
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-3.5 flex-1">
                <SkeletonBar width={130} color="tertiary" />
                <SkeletonBar width={72} color="tertiary" />
                <SkeletonBar width={160} color="tertiary" />
              </div>
              <CircularProgress percentage={91} />
              <span className="text-base font-semibold min-w-[93px]">
                Cigarettes
              </span>
            </div>

            {/* Fuel */}
            <div className="flex items-center gap-5">
              <CircularProgress percentage={72} />
              <div className="flex-1 flex flex-col gap-3.5">
                <SkeletonBar width={130} color="tertiary" />
                <SkeletonBar width={72} color="tertiary" />
                <SkeletonBar width={160} color="tertiary" />
              </div>
              <span className="text-base font-semibold text-right min-w-[90px]">
                Fuel
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
