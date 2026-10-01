
import Link from "next/link";
import { Dumbbell, Home } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0B0D10] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center">

        {/* Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#2B303D] bg-[#111317]">
          <Dumbbell className="h-10 w-10 text-[#F59E0B]" />
        </div>

        {/* 404 */}
        <h1 className="text-[100px] font-black leading-none text-white sm:text-[140px]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#A1A1AA] sm:text-base">
          Looks like this page took a rest day. The page you are looking for
          doesn&apos;t exist or may have been moved.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F59E0B] px-6 py-3 font-semibold text-black transition hover:bg-[#FBBF24]"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>

        {/* Brand */}
        <p className="mt-12 text-xs font-medium tracking-[0.3em] text-[#525866]">
          FITLOG
        </p>

      </div>
    </main>
  );
};

export default NotFound;
