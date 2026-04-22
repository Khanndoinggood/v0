import { Home, Plus, User } from 'lucide-react';

export function MobileBottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="flex items-center justify-around h-16 px-4">
        <button className="flex flex-col items-center gap-1 text-green-600">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </button>

        <button className="flex flex-col items-center gap-1 -mt-8">
          <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
            <Plus className="w-7 h-7 text-white" />
          </div>
          <span className="text-xs text-foreground mt-1">Sell</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-foreground hover:text-green-600 transition-colors">
          <User className="w-6 h-6" />
          <span className="text-xs">Account</span>
        </button>
      </div>
    </nav>
  );
}
