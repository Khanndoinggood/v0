import { Heart, MapPin } from 'lucide-react';

interface ListingCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  category: string;
  featured?: boolean;
}

export function ListingCard({ image, title, price, location, category, featured }: ListingCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors">
          <Heart className="w-4 h-4 text-muted-foreground hover:text-red-600" />
        </button>
        {featured && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-yellow-500 text-white rounded text-xs">
            Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs text-muted-foreground mb-1">{category}</div>
        <h3 className="mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">{title}</h3>
        <div className="mb-2 text-green-600">{price}</div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
