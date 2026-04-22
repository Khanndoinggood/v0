import { Leaf, Apple, Carrot, Salad, Grape, Milk, Egg, Award } from 'lucide-react';

const categories = [
  { name: 'Leafy Greens', icon: Leaf, color: 'bg-green-100 text-green-600' },
  { name: 'Fruits', icon: Apple, color: 'bg-red-100 text-red-600' },
  { name: 'Root Vegetables', icon: Carrot, color: 'bg-orange-100 text-orange-600' },
  { name: 'Salads', icon: Salad, color: 'bg-lime-100 text-lime-600' },
  { name: 'Berries', icon: Grape, color: 'bg-purple-100 text-purple-600' },
  { name: 'Dairy', icon: Milk, color: 'bg-blue-100 text-blue-600' },
  { name: 'Eggs', icon: Egg, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Organic', icon: Award, color: 'bg-emerald-100 text-emerald-600' },
];

export function CategoryNav() {
  return (
    <div className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg hover:bg-accent transition-colors group"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <span className="text-xs sm:text-sm text-center">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
