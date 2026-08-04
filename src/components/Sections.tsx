import { motion } from 'motion/react';
import { Plane, MapPin, Navigation, Shield, Clock, Users, Star, CheckCircle2, Car, Luggage, UserCheck } from 'lucide-react';
import { SERVICES, TOUR_PACKAGES, FLEET, DESTINATIONS, REVIEWS, FAQS, ROUTES } from '../data';

const iconMap: Record<string, any> = {
  Plane: Plane,
  MapPin: MapPin,
  Navigation: Navigation,
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sky-500 font-bold tracking-widest uppercase mb-4">Our Expertise</h2>
          <p className="text-4xl md:text-5xl font-black text-green-950 mb-6">Premium Travel Services</p>
          <div className="w-24 h-1.5 bg-sky-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 rounded-[2rem] bg-gray-50 hover:bg-green-900 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-green-900/20"
              >
                <div className="w-20 h-20 bg-green-100 group-hover:bg-green-800 rounded-3xl flex items-center justify-center mb-8 transition-colors">
                  <Icon className="text-green-700 group-hover:text-sky-400" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-green-950 group-hover:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-green-100 leading-relaxed">{service.description}</p>
                <ul className="mt-8 space-y-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                   <li className="flex items-center gap-2 text-sky-400 font-semibold"><CheckCircle2 size={16} /> Fast Pickup</li>
                   <li className="flex items-center gap-2 text-sky-400 font-semibold"><CheckCircle2 size={16} /> Verified Drivers</li>
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TourPackages() {
  return (
    <section id="packages" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sky-500 font-bold tracking-widest uppercase mb-4">Explore Jharkhand</h2>
            <p className="text-4xl md:text-5xl font-black text-green-950">Popular Tour Packages</p>
          </div>
          <button className="px-8 py-4 border-2 border-green-900 text-green-900 font-bold rounded-full hover:bg-green-900 hover:text-white transition-all">
            View All Packages
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-lg h-[450px]"
            >
              <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 transform transition-transform duration-500 group-hover:-translate-y-4">
                <h3 className="text-3xl font-black text-white mb-4">{pkg.name}</h3>
                <div className="flex items-center gap-4 text-sky-400 font-bold mb-6">
                  <Star size={18} className="fill-sky-400" />
                  <span>4.9 (120+ Reviews)</span>
                </div>
                <button className="bg-white text-green-950 px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Plan Trip
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sky-500 font-bold tracking-widest uppercase mb-4">Our Fleet</h2>
          <p className="text-4xl md:text-5xl font-black text-green-950 mb-6">Travel in Comfort & Style</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {FLEET.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl"
            >
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-green-950 mb-6">{vehicle.name}</h3>
                  <div className="grid grid-cols-2 gap-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock size={18} className="text-sky-500" />
                      <span>{vehicle.specs.ac ? 'Full AC' : 'Non-AC'}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Users size={18} className="text-sky-500" />
                      <span>{vehicle.specs.seats} Seater</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Luggage size={18} className="text-sky-500" />
                      <span>{vehicle.specs.luggage}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <UserCheck size={18} className="text-sky-500" />
                      <span>Verified Driver</span>
                    </div>
                  </div>
                </div>
                <button className="mt-10 w-full py-4 bg-green-900 text-white font-bold rounded-2xl hover:bg-green-800 transition-colors">
                  Select Vehicle
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const reasons = [
    { title: 'Clean Vehicles', icon: Car },
    { title: 'Verified Drivers', icon: UserCheck },
    { title: '24×7 Support', icon: Clock },
    { title: 'Affordable Price', icon: Star },
    { title: 'On Time Pickup', icon: Navigation },
    { title: 'Family Friendly', icon: Users },
  ];

  return (
    <section className="py-24 bg-green-950 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-sky-400 font-bold tracking-widest uppercase mb-4">Why Chhotanagpur Travels?</h2>
        <p className="text-4xl font-black mb-20">We Redefine Your Travel Experience</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 hover:bg-sky-500 transition-all duration-300 transform hover:-translate-y-2">
                <item.icon className="text-sky-400 group-hover:text-white" size={32} />
              </div>
              <p className="font-bold text-gray-300">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
