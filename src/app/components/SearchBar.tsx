import { Search, MapPin } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-center mb-6">Fresh Vegetables Delivered to Your Door</h2>
        <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-lg p-2 shadow-lg">
          <div className="flex-1 flex items-center gap-2 px-3 py-2 sm:border-r border-border">
            <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <input
              type="text"
              placeholder="Search vegetables, fruits..."
              className="w-full bg-transparent outline-none"
            />
          </div>
          <div className="flex-1 flex items-center gap-2 px-3 py-2 sm:border-r border-border">
            <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <select className="w-full bg-transparent outline-none">
              <option>All Locations</option>
              <option>Phnom Penh</option>
              <option>Siem Reap</option>
              <option>Battambang</option>
              <option>Sihanoukville</option>
            </select>
          </div>
          <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors whitespace-nowrap">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
