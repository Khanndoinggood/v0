import { Search, User, Heart, Plus, Bell } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <h1 className="text-green-600">BaiTorng</h1>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-foreground hover:text-green-600 transition-colors">Home</a>
              <a href="#" className="text-foreground hover:text-green-600 transition-colors">All Products</a>
              <a href="#" className="text-foreground hover:text-green-600 transition-colors">Organic</a>
              <a href="#" className="text-foreground hover:text-green-600 transition-colors">Farmers</a>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-green-600 transition-colors">
              <Heart className="w-5 h-5" />
              <span>Favorites</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-green-600 transition-colors">
              <User className="w-5 h-5" />
              <span>Login</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Plus className="w-5 h-5" />
              <span>Sell Produce</span>
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button className="p-2 relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
          </div>
        </div>

        {searchOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search vegetables, fruits..."
                className="w-full bg-transparent outline-none"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
