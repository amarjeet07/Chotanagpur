import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Calendar, Menu, X, Plane, MapPin, Navigation, Shield, Clock, Users, Star, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SERVICES, ROUTES, TOUR_PACKAGES, FLEET, DESTINATIONS, REVIEWS, FAQS } from '../data';

// --- Components ---

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Tour Packages', href: '#packages' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-green-900' : 'text-white'}`}>
              Chhotanagpur<span className="text-sky-500"> Travels</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white/90 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a href="#booking" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-green-500/30">
                Book Now
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={isScrolled ? 'text-gray-900' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-green-50"
                >
                  {link.name}
                </a>
              ))}
              <a href="#booking" onClick={() => setIsOpen(false)} className="block w-full text-center bg-green-600 text-white py-4 rounded-lg font-bold">
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="./images/regenerated_image_1785784885381.png"
          alt="Jharkhand Road"
          className="w-full h-full object-cover bg-black"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-sky-400 uppercase bg-sky-400/10 backdrop-blur-sm rounded-full border border-sky-400/20">
            Jharkhand's Premium Travel Partner
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Your Trusted Taxi & Tour <br />
            <span className="text-sky-400">Partner in Jharkhand</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Safe • Comfortable • Affordable Taxi Services for Airport Transfers, Local Trips, Outstation Tours & Holiday Packages.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#booking" className="w-full sm:w-auto px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-green-900/20">
              Book Now
            </a>
            <a href="https://wa.me/8709917730" className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              WhatsApp Now
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <span className="font-semibold">1000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-sky-400" size={20} />
              <span className="font-semibold">24×7 Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-green-400" size={20} />
              <span className="font-semibold">Professional Drivers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-green-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 italic">Chhotanagpur Travels</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Jharkhand's most reliable taxi and tour operator. Providing premium services since 2018 with a fleet of modern vehicles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Phone size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-sky-400 underline underline-offset-8 decoration-sky-500/30">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Tour Packages</a></li>
              <li><a href="#fleet" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-sky-400 underline underline-offset-8 decoration-sky-500/30">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Airport Pickup & Drop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Outstation Taxi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Booking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Holiday Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-sky-400 underline underline-offset-8 decoration-sky-500/30">Policies</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          <p>© 2026 Chhotanagpur Travels. All rights reserved. Crafted for Excellence.</p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/8709917730"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600"
      >
        <MessageCircle size={28} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:8709917730"
        className="bg-sky-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-sky-600"
      >
        <Phone size={28} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#booking"
        className="bg-white text-green-900 px-6 py-4 rounded-full shadow-2xl font-bold flex items-center gap-2 border border-green-100"
      >
        <Calendar size={20} />
        Book Taxi
      </motion.a>
    </div>
  );
}
