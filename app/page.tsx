import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="text-center space-y-8 max-w-3xl">
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400 leading-tight drop-shadow-lg">
          Elevate Your YouTube <br /> Content Game
        </h1>

        <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Unlock limitless creative ideas and captivate your audience like never before.
        </p>

        <div className="flex flex-row items-center justify-center gap-6 pt-4">
          <Link href="/videos">
            <Button
              size="lg"
              className="font-semibold text-lg px-8 py-6 bg-gradient-to-t from-red-600 to-red-400 hover:opacity-90 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.05] border-2 border-transparent hover:border-red-300"
            >
              Get Started Now →
            </Button>
          </Link>
        </div>

        <div className="pt-10 flex items-center justify-center gap-10">
          <div className="flex items-center gap-2 group">
            <CheckCircle className="text-red-500 h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-gray-700 text-lg font-medium">AI-Powered Insights</span>
          </div>
          <div className="flex items-center gap-2 group">
            <CheckCircle className="text-red-500 h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-gray-700 text-lg font-medium">Instant Content Ideas</span>
          </div>
        </div>
      </div>
    </div>
  );
}