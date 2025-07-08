import { useState } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const heroSlides = [
    {
      title: "For Your Outdoors Needs Choose Our Skilled Hands",
      cta: "Schedule An Onsite Estimate"
    },
    {
      title: "From Design to Maintenance We've Got You Covered",
      cta: "Explore Our Portfolio"
    }
  ]

  const features = [
    { icon: "🏆", title: "Expertise & Skills" },
    { icon: "🔍", title: "Attention To Detail" },
    { icon: "💰", title: "Competitive Pricing" },
    { icon: "😊", title: "Customer Satisfaction" },
    { icon: "🛠️", title: "Comprehensive Services" },
    { icon: "⭐", title: "Finest Materials & Techniques" }
  ]

  const testimonials = [
    {
      name: "Jane P.",
      location: "Crofton, MD",
      service: "Lawn & Yard Waste Clean Up",
      review: "I am very satisfied with the work which was done"
    },
    {
      name: "Nicole J.",
      location: "Washington, DC",
      service: "Deliver Soil, Sand, Mulch and Rock",
      review: "Overall they did a great job cleaning my yard, mowing my lawn and applying mulch around my trees and bushes. I 10/10 recommend and will definitely hire them again."
    },
    {
      name: "Teri L.",
      location: "Bowie, MD",
      service: "Lawn & Yard Waste Clean Up",
      review: "Edwin did an exceptional job. He accomplished a very tough project for us in a short amount of time. We still plan on using him for ongoing services. He was great and I would highly recommend Riveras and Edwin"
    }
  ]

  const portfolioImages = [
    { src: "https://ext.same-assets.com/916247137/4114018889.jpeg", alt: "Recent landscaping project" },
    { src: "https://ext.same-assets.com/916247137/3085339788.jpeg", alt: "Garden design and installation" },
    { src: "https://ext.same-assets.com/916247137/145053632.jpeg", alt: "Lawn maintenance service" },
    { src: "https://ext.same-assets.com/916247137/1491091879.jpeg", alt: "Tree services project" },
    { src: "https://ext.same-assets.com/916247137/3831227500.jpeg", alt: "Landscape transformation" },
    { src: "https://ext.same-assets.com/916247137/4238567440.jpeg", alt: "Flower bed installation" },
  ]

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => prev < portfolioImages.length - 1 ? prev + 1 : 0)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => prev > 0 ? prev - 1 : portfolioImages.length - 1)
  }

  const smoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="/images/landscaping.jpg"
            alt="Landscaping Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <button
              onClick={() => smoothScroll('contact')}
              className="bg-green-600 hover:bg-green-700 px-8 py-4 text-xl font-semibold rounded-lg transition-all hover:scale-105"
            >
              {heroSlides[currentSlide].cta}
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Us For Your Landscaping Needs?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              <strong>Riveras Landscaping LLC</strong> has established itself as a trusted name in the landscaping industry due to its more than 7 years of industry expertise.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              We take great pride in our work and are committed to providing exceptional customer service. Here's why you should choose us for your landscaping needs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Customized Solutions For Your Unique Needs</h3>
              <p className="text-gray-600 mb-6">
                We comprehend that every client has unique preferences and requirements when it comes to their landscaping projects. At <strong>Riveras Landscaping LLC</strong>, we take the time to listen to your ideas and work closely with you to create customized solutions that meet your specific needs. From design to installation, we strive to exceed your expectations.
              </p>
              <p className="text-gray-600">
                We believe in delivering nothing less than the highest standard workmanship. Our team pays meticulous attention to detail, ensuring that every aspect of your landscaping project is executed with precision and care. From selecting the right plants to installing hardscapes, we take pride in our craftsmanship and aim for excellence in every project we undertake.
              </p>
            </div>
            <div>
              <img src="https://ext.same-assets.com/916247137/1563622730.png" alt="About Us" className="rounded-lg shadow-lg hover:shadow-xl transition-shadow" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-8">
                At Riveras Landscaping LLC, our mission is to transform ordinary outdoor spaces into extraordinary landscapes that leave a lasting impression. We are dedicated to providing exceptional landscaping services that enhance the beauty, functionality, and value of your property.
              </p>

              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                Our objective is for every home or business to have a landscape that reflects its individuality and style, and is visually stunning and well-maintained. Our team of highly skilled professionals is committed to turning your landscape dreams into reality, ensuring your outdoor space becomes a sanctuary you can enjoy for years to come.
              </p>
            </div>
            <div>
              <img src="https://ext.same-assets.com/916247137/656273392.png" alt="Our Vision" className="rounded-lg shadow-lg hover:shadow-xl transition-shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-green-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center text-white text-center">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">🍃</span>
              <span className="text-xl font-bold">CONTACT US TODAY AND GET A FREE ESTIMATE</span>
              <a href="tel:(301) 828-0207" className="text-2xl font-bold hover:text-green-200 transition-colors">
                (301) 828-0207
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Your Satisfaction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Your Satisfaction Is Our Priority</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            At <strong>Riveras Landscaping LLC</strong>, we are dedicated to delivering high-end workmanship and providing exceptional customer service. We utilize top-of-the-line equipment and materials to ensure that every project is completed to the highest standards.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            You can trust us to transform your outdoor space into a beautiful oasis. Customer satisfaction is our top priority, and we strive to exceed your expectations with our professionalism, attention to detail, and timely completion of projects.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">A One-Stop Solution For Your Landscaping Needs</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Landscaping Service */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Landscaping</h3>
              <p className="text-gray-600 mb-6">
                Our team of skilled professionals takes a personalized approach, understanding your unique preferences and requirements.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🌱</span>
                  <span>Planting</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🍂</span>
                  <span>Mulching</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🌸</span>
                  <span>Flower Bed</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🌿</span>
                  <span>Gardening</span>
                </div>
              </div>
              <Link
                to="/landscaping"
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
              >
                Read More
              </Link>
            </div>

            {/* Lawn Care Service */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lawn Care</h3>
              <p className="text-gray-600 mb-6">
                With our comprehensive fertilization services, we tailor our approach to meet the specific needs of your lawn.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">💨</span>
                  <span>Aeration</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🌾</span>
                  <span>Fertilization</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🧹</span>
                  <span>Yard Cleanup</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">❄️</span>
                  <span>Snow Plowing</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🏠</span>
                  <span>Gutter Cleaning</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🌱</span>
                  <span>Lawn Maintenance</span>
                </div>
              </div>
              <Link
                to="/lawn-care"
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
              >
                Read More
              </Link>
            </div>

            {/* Tree Services */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tree Services</h3>
              <p className="text-gray-600 mb-6">
                With our crew of trained arborists, we understand the unique needs of different tree species and employ industry-standard techniques to achieve optimal results.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">✂️</span>
                  <span>Tree Pruning</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🪓</span>
                  <span>Tree Removal</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🌳</span>
                  <span>Shrub Pruning</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-2">🌲</span>
                  <span>Tree Trimming</span>
                </div>
              </div>
              <Link
                to="/tree-services"
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
              >
                Read More
              </Link>
              <div className="mt-6">
                <img src="https://ext.same-assets.com/916247137/181839965.jpeg" alt="Tree Services" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Explore Our Most Recent Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Take a look at some of our recent landscaping projects in the Bowie area and surrounding communities. Click on any image to view in full size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {portfolioImages.map((image, index) => (
              <div key={`portfolio-${index}-${image.alt}`} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  onClick={() => openLightbox(index)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openLightbox(index)}
                    className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold transition-opacity"
                  >
                    View Full Size
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => smoothScroll('contact')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Request Your Quote
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Testimonials</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <p className="text-lg text-gray-600 mb-6 italic">
                "{testimonials[testimonialIndex].review}"
              </p>
              <div className="flex justify-center mb-4">
                <span className="text-yellow-400 text-xl">⭐</span>
                <span className="text-yellow-400 text-xl">⭐</span>
                <span className="text-yellow-400 text-xl">⭐</span>
                <span className="text-yellow-400 text-xl">⭐</span>
                <span className="text-yellow-400 text-xl">⭐</span>
              </div>
              <h4 className="font-bold text-gray-800">{testimonials[testimonialIndex].name}</h4>
              <p className="text-gray-600">{testimonials[testimonialIndex].location}</p>
              <p className="text-green-600 font-medium">{testimonials[testimonialIndex].service}</p>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={() => setTestimonialIndex(testimonialIndex > 0 ? testimonialIndex - 1 : testimonials.length - 1)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={() => setTestimonialIndex(testimonialIndex < testimonials.length - 1 ? testimonialIndex + 1 : 0)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded transition-colors"
              >
                Next →
              </button>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://www.homeadvisor.com/rated.RiverasLandscapingLLC.21460170.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
              >
                Write A Review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Schedule An Onsite Estimate</h2>
            <p className="text-xl">
              You can also contact an expert at the number{' '}
              <a href="tel:(301) 828-0207" className="text-green-400 font-bold hover:text-green-300 transition-colors">
                (301) 828-0207
              </a>
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
                />
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white focus:border-green-500 focus:outline-none transition-colors">
                  <option>Select Service</option>
                  <option>Landscaping</option>
                  <option>Lawn Care</option>
                  <option>Tree Services</option>
                </select>
              </div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">We cover the Bowie area and surroundings</h2>
          </div>
          <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map Placeholder - Bowie, Maryland Area</p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={portfolioImages}
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  )
}
