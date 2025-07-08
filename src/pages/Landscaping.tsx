import { Link } from 'react-router-dom'

export default function Landscaping() {
  const landscapingServices = [
    {
      title: "Garden Design & Planting",
      description: "Create beautiful, sustainable gardens with plants that thrive in Maryland's climate and soil conditions.",
      icon: "🌱",
      benefits: ["Native plant selection", "Seasonal color planning", "Soil preparation", "Custom garden layouts"]
    },
    {
      title: "Mulching Services",
      description: "Professional mulch installation to retain moisture, suppress weeds, and enhance your landscape's appearance.",
      icon: "🍂",
      benefits: ["Premium mulch materials", "Proper depth application", "Weed barrier installation", "Seasonal refresh"]
    },
    {
      title: "Flower Bed Creation",
      description: "Design and install stunning flower beds that provide year-round beauty and complement your property.",
      icon: "🌸",
      benefits: ["Perennial and annual options", "Seasonal planning", "Irrigation setup", "Maintenance plans"]
    },
    {
      title: "Landscape Installation",
      description: "Complete landscape transformations including hardscaping, softscaping, and outdoor living spaces.",
      icon: "🏞️",
      benefits: ["Walkways and patios", "Retaining walls", "Water features", "Outdoor lighting"]
    },
    {
      title: "Hardscaping",
      description: "Professional installation of patios, walkways, retaining walls, and other structural landscape elements.",
      icon: "🧱",
      benefits: ["Natural stone installation", "Brick and concrete work", "Drainage solutions", "Custom designs"]
    },
    {
      title: "Sustainable Landscaping",
      description: "Eco-friendly landscaping solutions that conserve water, support local wildlife, and reduce maintenance.",
      icon: "🌿",
      benefits: ["Rain gardens", "Native plant gardens", "Pollinator-friendly plants", "Water conservation"]
    }
  ]

  const portfolioImages = [
    { src: "https://ext.same-assets.com/916247137/4114018889.jpeg", alt: "Garden transformation" },
    { src: "https://ext.same-assets.com/916247137/3085339788.jpeg", alt: "Flower bed installation" },
    { src: "https://ext.same-assets.com/916247137/145053632.jpeg", alt: "Landscape design" },
    { src: "https://ext.same-assets.com/916247137/1491091879.jpeg", alt: "Hardscaping project" },
    { src: "https://ext.same-assets.com/916247137/3831227500.jpeg", alt: "Complete landscape" },
    { src: "https://ext.same-assets.com/916247137/4238567440.jpeg", alt: "Garden maintenance" },
  ]

  const landscapeStyles = [
    {
      name: "Traditional Gardens",
      description: "Classic designs with formal layouts, traditional plant selections, and timeless appeal.",
      image: "https://ext.same-assets.com/916247137/1563622730.png"
    },
    {
      name: "Modern Landscapes",
      description: "Clean lines, minimalist designs, and contemporary plant selections for a sleek look.",
      image: "https://ext.same-assets.com/916247137/656273392.png"
    },
    {
      name: "Native Gardens",
      description: "Sustainable landscapes using Maryland native plants that support local ecosystems.",
      image: "https://ext.same-assets.com/916247137/1098172652.jpeg"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-800 to-green-600">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/916247137/2842986262.jpeg"
            alt="Landscaping Services"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Landscaping Services</h1>
            <p className="text-xl md:text-2xl mb-8">Transform your outdoor space with professional landscape design and installation</p>
            <Link
              to="/#contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Landscaping Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of skilled professionals takes a personalized approach, understanding your unique preferences and requirements.
              We transform ordinary outdoor spaces into extraordinary landscapes that enhance your property's beauty and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landscapingServices.map((service) => (
              <div key={service.title} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-green-600 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape Styles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Landscape Design Styles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in various landscape design styles to match your personal taste and complement your property's architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {landscapeStyles.map((style) => (
              <div key={style.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{style.name}</h3>
                  <p className="text-gray-600">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Recent Landscaping Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent landscaping transformations in the Bowie area and surrounding communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold transition-opacity">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Landscaping Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial consultation to project completion, we follow a proven process to ensure your landscaping project exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Consultation</h3>
              <p className="text-gray-600">We meet with you to understand your vision, preferences, and budget requirements.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Design</h3>
              <p className="text-gray-600">Our team creates a detailed landscape design plan tailored to your property and needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Installation</h3>
              <p className="text-gray-600">Professional installation using quality materials and proven techniques for lasting results.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Maintenance</h3>
              <p className="text-gray-600">Ongoing care and maintenance to keep your new landscape looking beautiful year-round.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Year-Round Landscaping</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our landscaping services adapt to Maryland's changing seasons, ensuring your outdoor space looks beautiful throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Winter</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Planning & Design</li>
                <li>Tree Pruning</li>
                <li>Winter Protection</li>
                <li>Hardscape Installation</li>
              </ul>
            </div>
            <div className="text-center bg-green-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Spring</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Spring Cleanup</li>
                <li>Planting Season</li>
                <li>Mulch Installation</li>
                <li>Garden Preparation</li>
              </ul>
            </div>
            <div className="text-center bg-yellow-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Summer</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Irrigation Setup</li>
                <li>Summer Color</li>
                <li>Maintenance</li>
                <li>Water Features</li>
              </ul>
            </div>
            <div className="text-center bg-orange-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🍂</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fall</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Fall Cleanup</li>
                <li>Tree Planting</li>
                <li>Winter Prep</li>
                <li>Seasonal Color</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Landscape?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto opacity-90">
            Let our experienced team create the outdoor space of your dreams. Contact us today for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/#contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:(301) 828-0207"
              className="bg-green-700 text-white hover:bg-green-800 px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              Call (301) 828-0207
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
