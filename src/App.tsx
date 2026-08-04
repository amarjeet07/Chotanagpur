import { Navbar, Hero, Footer, FloatingActions } from './components/Layout';
import { Services, TourPackages, Fleet, WhyChooseUs } from './components/Sections';
import { BookingForm, OtherSections } from './components/FormsAndOthers';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-sky-200 selection:text-sky-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <TourPackages />
        <Fleet />
        <BookingForm />
        <OtherSections />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
