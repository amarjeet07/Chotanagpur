import { motion } from 'motion/react';
import { Send, MapPin, Phone, MessageCircle, Clock, ChevronDown, Star } from 'lucide-react';
import { useState } from 'react';
import { FLEET, FAQS, ROUTES, DESTINATIONS, REVIEWS } from '../data';

export function BookingForm() {
  return (
    <section id="booking" className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-sky-100">
          <div className="lg:w-2/5 bg-green-900 p-12 lg:p-20 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full -mr-32 -mt-32"></div>
             <div className="relative z-10">
                <h2 className="text-4xl font-black mb-8 leading-tight">Instant Taxi <br />Booking</h2>
                <p className="text-green-100/70 mb-12 text-lg">Fill out the form and our team will get back to you within 5 minutes for confirmation.</p>
                
                <div className="space-y-8">
                   <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-sky-400">
                         <Phone size={24} />
                      </div>
                      <div>
                         <p className="text-green-100/50 text-sm">Call for Instant Booking</p>
                         <p className="text-xl font-bold">8709917730</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-green-400">
                         <MessageCircle size={24} />
                      </div>
                      <div>
                         <p className="text-green-100/50 text-sm">WhatsApp Booking</p>
                         <p className="text-xl font-bold">8709917730</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="lg:w-3/5 p-12 lg:p-20">
             <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-500 uppercase ml-2">Full Name</label>
                   <input type="text" placeholder="e.g. Rahul Sharma" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-500 uppercase ml-2">Phone Number</label>
                   <input type="tel" placeholder="e.g. 9876543210" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-500 uppercase ml-2">Pickup Location</label>
                   <input type="text" placeholder="Enter Pickup Address" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-500 uppercase ml-2">Drop Location</label>
                   <input type="text" placeholder="Enter Drop Address" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-500 uppercase ml-2">Date</label>
                   <input type="date" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-gray-500 uppercase ml-2">Time</label>
                   <input type="time" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 transition-all font-medium" />
                </div>
                <div className="md:col-span-2 space-y-2">
                   <label className="text-sm font-bold text-gray-500 uppercase ml-2">Vehicle Type</label>
                   <select className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 transition-all font-medium">
                      {FLEET.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                   </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                   <label className="text-sm font-bold text-gray-500 uppercase ml-2">Message (Optional)</label>
                   <textarea rows={3} placeholder="Any special instructions?" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 transition-all font-medium resize-none"></textarea>
                </div>
                <div className="md:col-span-2 mt-4">
                   <button type="submit" className="w-full py-5 bg-green-600 hover:bg-green-700 text-white font-black text-lg rounded-2xl shadow-xl shadow-green-500/30 transition-all flex items-center justify-center gap-3">
                      <Send size={22} />
                      Book Your Taxi Now
                   </button>
                </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OtherSections() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <>
      {/* Popular Routes */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-green-950 mb-4">Popular Outstation Routes</h2>
              <p className="text-gray-500">Connecting Ranchi to major cities with reliable cab services</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {ROUTES.map((route, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-2xl text-center border border-gray-100 hover:bg-sky-50 hover:border-sky-200 transition-colors cursor-pointer group">
                   <p className="text-xs font-bold text-sky-500 mb-1">FIXED RATE</p>
                   <p className="font-bold text-green-900">{route.from} to {route.to}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-4xl font-black text-green-950 mb-16">Popular Destinations</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {DESTINATIONS.map(dest => (
                <div key={dest.id} className="relative h-[400px] rounded-[2rem] overflow-hidden group shadow-lg">
                   <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                   <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                      <p className="text-sky-400 text-sm font-bold uppercase tracking-widest">Explore Now</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-sky-500 font-bold uppercase tracking-widest mb-4">Testimonials</h2>
           <p className="text-4xl font-black text-green-950 mb-16">What Our Happy Travelers Say</p>
           <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
              {REVIEWS.map((review, idx) => (
                <motion.div 
                   key={review.id}
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   className="p-10 bg-green-50 rounded-[3rem] relative"
                >
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1 bg-white px-4 py-2 rounded-full shadow-md">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                   </div>
                   <p className="text-2xl italic text-green-900 mb-8 leading-relaxed font-serif">"{review.comment}"</p>
                   <p className="text-xl font-bold text-sky-600">— {review.name}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-green-950 mb-4">Common Questions</h2>
              <p className="text-gray-500">Everything you need to know about our services</p>
           </div>
           <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                   <button 
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
                   >
                      <span className="text-lg font-bold text-green-900">{faq.question}</span>
                      <ChevronDown className={`transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                   </button>
                   {activeFaq === idx && (
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                         {faq.answer}
                      </div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-green-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
              <div className="lg:w-1/2 p-12 lg:p-20 text-white">
                 <h2 className="text-4xl font-black mb-10">Get in Touch</h2>
                 <div className="space-y-10">
                    <div className="flex gap-6">
                       <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                          <MapPin size={28} className="text-sky-400" />
                       </div>
                       <div>
                          <p className="text-green-200/50 text-sm font-bold uppercase mb-1">Our Location</p>
                          <p className="text-xl font-medium">Ranchi, Jharkhand, India</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                          <Phone size={28} className="text-sky-400" />
                       </div>
                       <div>
                          <p className="text-green-200/50 text-sm font-bold uppercase mb-1">Call Us 24/7</p>
                          <p className="text-xl font-medium">+91 8709917730</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                          <Clock size={28} className="text-sky-400" />
                       </div>
                       <div>
                          <p className="text-green-200/50 text-sm font-bold uppercase mb-1">Working Hours</p>
                          <p className="text-xl font-medium">Open 24 Hours, 7 Days a Week</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 bg-gray-200 h-[500px] lg:h-auto min-h-[400px]">
                 {/* Google Map Placeholder */}
                 <iframe 
                    title="Chhotanagpur Travels Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117223.7711467478!2d85.250435!3d23.344099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db777%3A0x7ad6858096182b39!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1714488000000!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
              </div>
           </div>
        </div>
      </section>
    </>
  );
}
