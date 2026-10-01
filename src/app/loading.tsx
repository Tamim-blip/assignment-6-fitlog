
import { Dumbbell } from "lucide-react";

const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0B0D10] flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center">

        {/* Logo */}
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#2B303D] bg-[#111317]">
          <Dumbbell
            size={38}
            className="animate-pulse text-[#F59E0B]"
          />
        </div>

        {/* Brand */}
        <h1 className="mt-6 text-2xl font-bold tracking-[0.2em] text-white">
          FITLOG
        </h1>

        {/* Loading spinner */}
        <div className="mt-6 h-8 w-8 animate-spin rounded-full border-2 border-[#2B303D] border-t-[#F59E0B]" />

        {/* Loading text */}
        <p className="mt-4 text-sm text-[#A1A1AA]">
          Getting your workout ready...
        </p>

      </div>
    </main>
  );
};

export default Loading;
