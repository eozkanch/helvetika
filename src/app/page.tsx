import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import SearchBar from '@/components/SearchBar';
import PropertyGrid from '@/components/PropertyGrid';
import AlertSubscriptionForm from '@/components/AlertSubscriptionForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Slider />
      
      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar />
      </div>
      
      {/* Properties Section */}
      <PropertyGrid />
      
      {/* Alert Subscription Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AlertSubscriptionForm />
      </div>
      
  
      <Footer />
    </div>
  );
}
