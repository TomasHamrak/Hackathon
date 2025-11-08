import { Link, useLocation } from "react-router-dom";
import { CreditCard, TrendingUp, MessageSquare, User } from "lucide-react";

export default function BottomNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-app-black border-t border-grey-70 shadow-[0_-2px_8px_0_rgba(255,255,255,0.04)] z-50">
      <div className="max-w-[500px] mx-auto">
        <nav className="flex justify-between items-center px-6 py-6">
          <Link
            to="/savings"
            className="flex-1 flex justify-center"
            aria-label="Savings"
          >
            <CreditCard
              className={`w-6 h-6 ${
                isActive("/savings") || isActive("/")
                  ? "text-[#72A1F3]"
                  : "text-grey-20"
              }`}
              strokeWidth={2}
            />
          </Link>
          <Link
            to="/investment"
            className="flex-1 flex justify-center"
            aria-label="Investment"
          >
            <TrendingUp
              className={`w-6 h-6 ${
                isActive("/investment") ? "text-[#72A1F3]" : "text-grey-20"
              }`}
              strokeWidth={2}
            />
          </Link>
          <Link
            to="/chat"
            className="flex-1 flex justify-center"
            aria-label="AI Agent"
          >
            <MessageSquare
              className={`w-6 h-6 ${
                isActive("/chat") ? "text-[#72A1F3]" : "text-grey-20"
              }`}
              strokeWidth={2}
            />
          </Link>
          <Link
            to="/profile"
            className="flex-1 flex justify-center"
            aria-label="Profile"
          >
            <User
              className={`w-6 h-6 ${
                isActive("/profile") ? "text-[#72A1F3]" : "text-grey-20"
              }`}
              strokeWidth={2}
            />
          </Link>
        </nav>
      </div>
    </div>
  );
}
