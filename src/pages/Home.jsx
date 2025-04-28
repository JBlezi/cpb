import React, {useState } from "react";
import { Link } from 'react-router-dom';
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import BlogCard from "../components/BlogCard";

function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showWelcome, setShowWelcome] = useState(false);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name) {
        setShowWelcome(true);
      }
    };
    
    return (
      <main>
        {/* Hero Section */}
        <section className="hero min-h-screen bg-blue-900 flex items-center relative">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/src/assets/Charlotte Pfalz-Blezinger_banner_cropped.png" 
              alt="Psychology Office" 
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="container mx-auto px-16 z-10">
            <div className="max-w-lg">
              {!showWelcome ? (
                <div className="bg-black/15 backdrop-blur p-8 rounded-lg shadow-lg">
                  <h1 className="text-white text-4xl mb-4 font-light">Herzlich Willkommen</h1>
                  <p className="text-white mb-6">Auf meiner persönlichen Website</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Dein Vorname..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                      <p className="text-white/70 text-sm mt-1">*Dein Name wird nur temporär gespeichert.</p>
                    </div>
                    <button 
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition"
                    >
                      Enter
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-black/15 backdrop-blur p-8 rounded-lg shadow-lg">
                  <h2 className="text-white text-3xl mb-4 font-light">Hallo, {name}! Ich freue mich, dass du bei mir vorbeischaust.</h2>
                  <p className="text-white text-lg mb-6">Wollen wir in Kontakt bleiben?</p>
                  <div className="mb-6">
                      <input 
                        type="text" 
                        placeholder="Deine Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                      <div className="flex justify-between m-2 mb-6">
                        <label class="container text-lg w-8">
                          <input type="checkbox"/>
                          <span class="checkmark"></span>
                        </label>
                        <p className="text-white/70 text-sm mt-1">Ja, Ich will über die neuesten Entwicklungen über Email informiert werden.</p>
                      </div>
                    </div>
                  <a 
                    href="#about-section" 
                    className="inline-block bg-blue-900 hover:bg-blue-600 text-white hover:text-white py-2 px-6 rounded-md transition"
                  >
                    Lerne mehr über meine Arbeit
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about-section" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:space-x-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="/images/psychologist-portrait.jpg" 
                  alt="Dr. Sarah Johnson" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl text-blue-900 mb-6 font-light">My Approach</h2>
                <p className="text-gray-700 mb-4">
                  With over 15 years of experience as a licensed psychologist, I'm dedicated to providing 
                  personalized care for my clients. I believe in creating a supportive and confidential 
                  environment where you can freely express yourself.
                </p>
                <p className="text-gray-700 mb-4">
                  My therapeutic approach is evidence-based, drawing from cognitive-behavioral therapy, 
                  mindfulness practices, and solution-focused techniques. I tailor my methods to meet 
                  your unique needs and goals.
                </p>
                <p className="text-gray-700 mb-6">
                  I'm committed to helping you develop practical strategies to overcome challenges, 
                  build resilience, and improve your overall well-being.
                </p>
                <Link 
                  to="/about" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition"
                >
                  Read More About Me
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-blue-900 mb-12 text-center font-light">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="Individual Therapy" 
                description="One-on-one sessions focusing on your specific needs and goals."
                icon="👤"
              />
              <ServiceCard 
                title="Couples Counseling" 
                description="Working together to improve communication and strengthen relationships."
                icon="👥"
              />
              <ServiceCard 
                title="Anxiety Treatment" 
                description="Evidence-based approaches to manage and reduce anxiety symptoms."
                icon="😌"
              />
            </div>
            <div className="mt-12 text-center">
              <Link 
                to="/services" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-blue-900 mb-12 text-center font-light">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="Dr. Johnson has helped me develop effective strategies to manage my anxiety. Her compassionate approach made me feel comfortable from our first session."
                author="Maria S."
              />
              <TestimonialCard 
                quote="The tools I've learned in therapy with Dr. Johnson have transformed my relationships. I'm grateful for her guidance and support."
                author="James T."
              />
              <TestimonialCard 
                quote="After struggling with depression for years, working with Dr. Johnson has given me hope and practical ways to improve my daily life."
                author="Rebecca M."
              />
            </div>
          </div>
        </section>
        
        {/* Contact Preview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl text-blue-900 mb-6 font-light">Ready to Take the First Step?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              I'm here to support you on your journey to better mental health. 
              Contact me to schedule an initial consultation or to learn more about my services.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md transition text-lg"
            >
              Contact Me
            </Link>
          </div>
        </section>
        
        {/* Blog Preview Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-blue-900 mb-12 text-center font-light">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BlogCard 
                title="5 Ways to Manage Everyday Anxiety"
                date="April 15, 2023"
                description="Simple techniques you can incorporate into your daily routine to reduce anxiety and promote calm."
              />
              <BlogCard 
                title="Understanding the Mind-Body Connection"
                date="March 28, 2023"
                description="How your physical health affects your mental wellbeing, and practical ways to improve both."
              />
              <BlogCard 
                title="Building Resilience in Challenging Times"
                date="February 10, 2023"
                description="Strategies to strengthen your ability to cope with stress and adapt to change."
              />
            </div>
            <div className="mt-12 text-center">
              <Link 
                to="/blog" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  export default Home;