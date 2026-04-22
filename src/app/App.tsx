import { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CategoryNav } from './components/CategoryNav';
import { ListingCard } from './components/ListingCard';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ProductDetail } from './components/ProductDetail';

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  category: string;
  featured?: boolean;
}

const featuredListings: Product[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1609869882537-6a860e45a0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Fresh Red Bell Peppers - Organic',
    price: '$2.50/kg',
    location: 'Phnom Penh',
    category: 'Vegetables',
    featured: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1634731201932-9bd92839bea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Organic Herbs Bundle - Fresh from Farm',
    price: '$3.00/bundle',
    location: 'Siem Reap',
    category: 'Leafy Greens',
    featured: true,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1643622226325-2ecb88acf189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Brussels Sprouts - Farm Fresh',
    price: '$4.00/kg',
    location: 'Battambang',
    category: 'Vegetables',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Mixed Cauliflower - Purple & White',
    price: '$3.50/kg',
    location: 'Phnom Penh',
    category: 'Vegetables',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1665315302321-46989ca7829a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Premium Leafy Greens Mix',
    price: '$5.00/kg',
    location: 'Siem Reap',
    category: 'Leafy Greens',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1657012784624-c6ecc5031918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Farm Fresh Vegetable Basket',
    price: '$12.00/basket',
    location: 'Battambang',
    category: 'Mixed',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1717959159782-98c42b1d4f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Organic Carrots - Sweet & Crunchy',
    price: '$2.00/kg',
    location: 'Phnom Penh',
    category: 'Root Vegetables',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1631021967261-c57ee4dfa9bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Fresh Tomatoes - Vine Ripened',
    price: '$3.00/kg',
    location: 'Sihanoukville',
    category: 'Vegetables',
  },
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      <Header />
      <SearchBar />
      <CategoryNav />
      <MobileBottomNav />

      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          relatedProducts={featuredListings
            .filter((p) => p.id !== selectedProduct.id)
            .slice(0, 4)}
          onBack={handleBack}
          onSelectProduct={handleSelectProduct}
        />
      ) : (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2>Featured Products</h2>
            <a href="#" className="text-green-600 hover:underline">View All</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {featuredListings.map((listing) => (
              <div key={listing.id} onClick={() => handleSelectProduct(listing)}>
                <ListingCard {...listing} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2>Fresh Arrivals</h2>
            <a href="#" className="text-green-600 hover:underline">View All</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredListings.slice(0, 4).map((listing) => (
              <div
                key={`recent-${listing.id}`}
                onClick={() => handleSelectProduct(listing)}
              >
                <ListingCard {...listing} featured={false} />
              </div>
            ))}
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
}
