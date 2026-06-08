import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { StoreInfo } from './components/StoreInfo';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      {/* Absolute top navbar */}
      <Navbar onScrollToContact={handleScrollToContact} />
      
      {/* Content Sections */}
      <main className="flex-1">
        <Hero onScrollToContact={handleScrollToContact} />
        <ServicesGrid />
        <StoreInfo />
        <ReviewsSection />
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}
