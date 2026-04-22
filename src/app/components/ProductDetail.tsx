import { useState } from 'react';
import {
  ArrowLeft,
  Heart,
  MapPin,
  Star,
  Minus,
  Plus,
  ShoppingCart,
  MessageCircle,
  Share2,
  Truck,
  Shield,
  Leaf,
} from 'lucide-react';
import { ListingCard } from './ListingCard';

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  category: string;
  featured?: boolean;
}

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
}

export function ProductDetail({
  product,
  relatedProducts,
  onBack,
  onSelectProduct,
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Simulate multiple images by reusing the same one with different crops
  const images = [
    product.image,
    product.image + '&sat=-50',
    product.image + '&blur=5',
    product.image + '&flip=h',
  ];

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-green-600 transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Products</span>
      </button>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src={images[selectedImage]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            {product.featured && (
              <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-white rounded">
                Featured
              </div>
            )}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite
                    ? 'text-red-600 fill-red-600'
                    : 'text-muted-foreground'
                }`}
              />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === idx
                    ? 'border-green-600'
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img
                  src={img}
                  alt={`${product.title} ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-5">
          <div>
            <div className="text-sm text-muted-foreground mb-2">
              {product.category}
            </div>
            <h1 className="mb-3">{product.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm text-muted-foreground ml-1">
                  4.8 (124 reviews)
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{product.location}</span>
              </div>
            </div>

            <div className="flex items-end gap-3 mb-4">
              <div className="text-3xl text-green-600">{product.price}</div>
              <div className="text-sm text-muted-foreground line-through pb-1">
                $5.00/kg
              </div>
              <div className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs pb-1">
                50% OFF
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Fresh, locally grown {product.title.toLowerCase()} harvested
              directly from our partner farms. Perfect for your daily meals,
              packed with nutrients and free from harmful pesticides. Delivered
              fresh to your doorstep.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-3 py-4 border-y border-border">
            <div className="flex flex-col items-center text-center gap-1">
              <Leaf className="w-6 h-6 text-green-600" />
              <span className="text-xs text-muted-foreground">100% Organic</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <Truck className="w-6 h-6 text-green-600" />
              <span className="text-xs text-muted-foreground">Fast Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="text-xs text-muted-foreground">Quality Assured</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Quantity:</span>
            <div className="flex items-center border border-border rounded-lg">
              <button
                onClick={decreaseQty}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={increaseQty}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <span className="text-sm text-muted-foreground">
              {25 - quantity} available
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>Contact Seller</span>
            </button>
            <button className="w-full sm:w-12 h-12 flex items-center justify-center border border-border rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Seller Info */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white">
              GF
            </div>
            <div className="flex-1">
              <div className="mb-1">Green Farm Co.</div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span>4.9</span>
                </div>
                <span>·</span>
                <span>Verified Seller</span>
              </div>
            </div>
            <button className="px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
              View Shop
            </button>
          </div>
        </div>
      </div>

      {/* Description Tabs */}
      <div className="mb-12">
        <div className="border-b border-border mb-6">
          <div className="flex gap-6 overflow-x-auto">
            <button className="pb-3 border-b-2 border-green-600 text-green-600 whitespace-nowrap">
              Description
            </button>
            <button className="pb-3 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Specifications
            </button>
            <button className="pb-3 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Reviews (124)
            </button>
            <button className="pb-3 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Shipping
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-foreground mb-3">Product Details</h3>
            <ul className="flex flex-col gap-2">
              <li>· Freshly harvested from local organic farms</li>
              <li>· No chemical pesticides or fertilizers used</li>
              <li>· Rich in vitamins and essential nutrients</li>
              <li>· Packed in eco-friendly packaging</li>
              <li>· Farm to table in under 24 hours</li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground mb-3">Storage Instructions</h3>
            <ul className="flex flex-col gap-2">
              <li>· Store in a cool, dry place</li>
              <li>· Refrigerate for extended freshness</li>
              <li>· Wash thoroughly before use</li>
              <li>· Best consumed within 5-7 days</li>
              <li>· Keep away from direct sunlight</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2>You May Also Like</h2>
          <a href="#" className="text-green-600 hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {relatedProducts.map((item) => (
            <div key={item.id} onClick={() => onSelectProduct(item)}>
              <ListingCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
