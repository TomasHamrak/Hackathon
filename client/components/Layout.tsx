import { ReactNode } from "react";
import BottomNav from "./BottomNav";
import { Send } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
  title: string;
  showSendIcon?: boolean;
}

export default function Layout({ children, title, showSendIcon = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-app-black text-app-white pb-20">
      <div className="max-w-[500px] mx-auto">
        <header className="px-5 pt-10 pb-6 flex justify-between items-center">
          <h1 className="text-[42px] font-bold leading-[120%]">{title}</h1>
          {showSendIcon && (
            <Send className="w-6 h-6 text-grey-30 flex-shrink-0" strokeWidth={2} />
          )}
        </header>
        <main>{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}
