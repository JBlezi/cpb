import React, {useState } from "react";
import { Link } from 'react-router-dom';
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import BlogCard from "../components/BlogCard"
import Header from "../components/Header";


function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showWelcome, setShowWelcome] = useState(false);
    const [activeTab, setActiveTab] = useState("antrieb");

    const [hoveredItem, setHoveredItem] = useState(null);
  
    const newsItems = [
      {
        id: 1,
        image: "/src/assets/premium_photo-1664300792059-863ccfe55932.avif",
        title: "Workshop für Familien",
        description: "Ein besonderer Workshop für Familien mit praktischen Übungen zur Stärkung der Beziehungen.",
        date: "Vor 2 Tagen"
      },
      {
        id: 2,
        image: "/src/assets/premium_photo-1669613233557-1676c121fe73.avif",
        title: "Neue Therapieansätze",
        description: "Innovative Ansätze in der Psychotherapie, die nachweislich positive Ergebnisse zeigen.",
        date: "Vor 5 Tagen"
      },
      {
        id: 3,
        image: "/src/assets/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg",
        title: "Vortrag über Resilienz",
        description: "Ein inspirierender Vortrag über den Aufbau von Resilienz in schwierigen Zeiten.",
        date: "Vor 1 Woche"
      }
    ];

    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name) {
        setShowWelcome(true);
      }
    };

    const tabContent = {
      antrieb: {
        bg: "/src/assets/premium_photo-1664300792059-863ccfe55932.avif",
        title: "Leben - mit allem, was dazugehört" ,
        text: `In meinem eigenen Leben habe ich erlebt, dass auch schwierige Umstände wie Behinderung und psychische Erkrankung plötzlich auftauchen können. Und ich habe erfahren, wie wichtig es ist, damit aktiv einen persönlichen Weg zu finden.`,
        text2: "Es ist meine volle Überzeugung, dass es immer Möglichkeiten gibt, das richtig gute Leben für sich zu finden.  Auch für Sie. Mit allem! "
      },
      ueberzeugung: {
        bg: "/src/assets/premium_photo-1669613233557-1676c121fe73.avif",
        title: "Entwicklung passiert jeden Tag",
        text: `Wenn Babys sich normal entwickeln, staunen wir täglich, was alles neu entsteht. Wir können es direkt beobachten, wie der kleine Mensch lernt und erforscht. Je älter wir werden, desto unklarer wird es oft, ob oder wie wir uns entwickeln. Gewinnen wir etwas hinzu? Können wir etwas lernen?  `,
        text2: `Mich begeistert es, dazu Beobachtungen anzustellen und das Positive zu finden. Finden wir es für Ihre Fragen gemeinsam heraus!  `,
      },
      vision: {
        bg: "/src/assets/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg",
        title: "Das Gemeinsame finden, das WIR feiern!",
        text: `Auf den ersten Blick ist es oft leichter, die Unterschiede zu erkennen. Es ist auch interessant, faszinierend und oft bereichernd, wie anders andere Menschen mit Lebensumständen und Aufgabenstellungen umgehen. In der freundlichen Anerkennung sehr verschiedener Herangehensweisen können wir vieles lernen.`,
        text2: `Begeben wir uns auf den Weg, um herauszufinden was uns verbindet. Was können WIR miteinander tun? Wie erleben Sie sich mit anderen zusammen stark und froh? `,
      },
    };    
    
    return (
      <main>
        {/* Hero Section */}
        <section>
          <div className="min-h-screen w-screen h-screen bg-cover bg-no-repeat bg-[url('src/assets/Charlotte_block_cropped_3.png')]">
            <div className="container mx-auto px-16">
              <Header></Header>
              <div className="flex items-center justify-left min-h-screen container mx-auto px-8 z-10">
                <div className="max-w-lg" >
                  {!showWelcome ? (
                    <div className="backdrop-blur p-8 rounded-lg">
                      <h1 className="text-blue-950 text-4xl mb-4 font-light">Herzlich Willkommen und danke für Ihr Interesse!</h1>
                      <p className="text-blue-950 text-lg mb-6">Wie darf ich Sie persönlich ansprechen?</p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <input 
                            type="text" 
                            placeholder="Mein Vorname ist..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 rounded bg-white/60 text-blue-950 placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
                          />
                          <p className="text-blue-950/70 text-sm mt-1">*Ihr Name wird nur temporär gespeichert.</p>
                        </div>
                        <button 
                          type="submit"
                          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition"
                        >
                          Senden
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="p-8">
                      <h2 className="text-blue-950 text-3xl mb-4 font-light">Mir fallen viele spannende Themen für einen Austausch ein, {name}.</h2>
                      <p className="text-blue-950 text-lg mb-6">Ich freue mich über einen ersten Kontakt. Möchten Sie meinen Newsletter lesen und herausfinden, worüber wir ins Gespräch kommen können, {name}.</p>
                      <div className="mb-6">
                        <input 
                          type="text" 
                          placeholder="Ihre Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full p-3 rounded bg-white/60 text-blue-950 placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <div className="flex justify-between m-2 mb-6">
                          <label class="container text-lg w-8">
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                          </label>
                          <p className="text-blue-950/70 text-sm mt-1">Ja, Ich will über die neuesten Entwicklungen über Email informiert werden.</p>
                        </div>
                      </div>
                      <a 
                        href="#about-section" 
                        className="inline-block bg-blue-900 hover:bg-blue-600 text-white hover:text-white py-2 px-6 rounded-md transition"
                      >
                        Newsletter abonnieren
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section
          className="w-full h-screen bg-cover bg-center text-white relative overflow-x-hidden" style={{ backgroundImage: `url('${tabContent[activeTab].bg}')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
          
          <div className="relative z-10 flex h-full">
            {/* Left text content */}
            <div className="w-2/3 p-12 ml-40 flex flex-col justify-center">
              <h2 className="text-4xl mb-4">{tabContent[activeTab].title}</h2>
              <p className="text-xl max-w-2xl">{tabContent[activeTab].text}</p>
              <br />
              <p className="text-xl max-w-2xl">{tabContent[activeTab].text2}</p>
            </div>

            {/* Right side tabs */}
            <div className="w-1/4 flex flex-col justify-center space-y-3 -mt-64">
              {Object.keys(tabContent).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 text-left text-lg font-semibold transition ${
                    activeTab === key
                      ? "bg-blue-700 text-white translate-x-0 focus:outline-none focus:ring-0"
                      : "bg-blue-900 text-white/50 translate-x-16 hover:text-white focus:outline-none focus:ring-0"
                  }`}
                >
                  {key === "antrieb" && "MEIN ANTRIEB"}
                  {key === "ueberzeugung" && "MEINE ÜBERZEUGUNG"}
                  {key === "vision" && "MEINE VISION"}
                </button>
              ))}
            </div>
          </div>
        </section>

        
        {/* Services Section Preview */}
        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center tracking-wide">
              AKTUELLES. VON MIR.
            </h2>
            
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Image - Top Left */}
              <div 
                className="relative overflow-hidden bg-white shadow-lg h-96"
                onMouseEnter={() => setHoveredItem(1)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black bg-opacity-60 text-white p-6 transition-opacity duration-300 ${
                  hoveredItem === 1 ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{newsItems[0].title}</h3>
                      <p className="text-sm">{newsItems[0].description}</p>
                    </div>
                    <div className="text-xs text-gray-300">{newsItems[0].date}</div>
                  </div>
                </div>
              </div>

              {/* Medium Image - Top Right */}
              <div 
                className="relative overflow-hidden bg-white shadow-lg h-96 md:col-span-2"
                onMouseEnter={() => setHoveredItem(2)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img 
                  src={newsItems[1].image} 
                  alt={newsItems[1].title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black bg-opacity-60 text-white p-6 transition-opacity duration-300 ${
                  hoveredItem === 2 ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{newsItems[1].title}</h3>
                      <p className="text-sm">{newsItems[1].description}</p>
                    </div>
                    <div className="text-xs text-gray-300">{newsItems[1].date}</div>
                  </div>
                </div>
              </div>

              {/* Large Bottom Image */}
              <div 
                className="relative overflow-hidden bg-white shadow-lg h-64 md:col-span-3"
                onMouseEnter={() => setHoveredItem(3)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img 
                  src={newsItems[2].image} 
                  alt={newsItems[2].title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black bg-opacity-60 text-white p-6 transition-opacity duration-300 ${
                  hoveredItem === 3 ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{newsItems[2].title}</h3>
                      <p className="text-sm">{newsItems[2].description}</p>
                    </div>
                    <div className="text-xs text-gray-300">{newsItems[2].date}</div>
                  </div>
                </div>
              </div>
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