import { Link } from 'react-router-dom'

export default function LawnCare() {
  const lawnCareServices = [
    {
      title: "Lawn Aeration",
      description: "Core aeration improves soil compaction and allows water, air, and nutrients to penetrate the root zone more effectively.",
      icon: "💨",
      benefits: ["Reduces soil compaction", "Improves root growth", "Enhances water absorption", "Increases fertilizer effectiveness"]
    },
    {
      title: "Fertilization Programs",
      description: "Custom fertilization schedules tailored to your lawn's specific needs and the Maryland growing season.",
      icon: "🌾",
      benefits: ["Season-specific treatments", "Organic and synthetic options", "Soil testing included", "Weed prevention included"]
    },
    {
      title: "Yard Cleanup",
      description: "Comprehensive seasonal cleanup services to keep your property looking pristine year-round.",
      icon: "🧹",
      benefits: ["Leaf removal", "Debris clearing", "Pruning cleanup", "Property maintenance"]
    },
    {
      title: "Snow Plowing",
      description: "Reliable snow removal services to keep your driveways and walkways safe during winter months.",
      icon: "❄️",
      benefits: ["24/7 availability", "Commercial & residential", "Salt application", "Emergency services"]
    },
    {
      title: "Gutter Cleaning",
      description: "Professional gutter cleaning and maintenance to protect your property from water damage.",
      icon: "🏠",
      benefits: ["Debris removal", "Downspout cleaning", "Minor repairs", "Seasonal maintenance"]
    },
    {
      title: "Lawn Maintenance",
      description: "Regular lawn mowing, edging, and trimming services to keep your grass healthy and beautiful.",
      icon: "🌱",
      benefits: ["Weekly or bi-weekly service", "Professional equipment", "Edge trimming", "Grass height optimization"]
    }
  ]

  const packages = [
    {
      name: "Basic Lawn Care",
      price: "Starting at $35/visit",
      features: ["Mowing", "Edging", "Basic cleanup"],
      popular: false
    },
    {
      name: "Complete Lawn Care",
      price: "Starting at $55/visit",
      features: ["Mowing", "Edging", "Trimming", "Leaf removal", "Basic fertilization"],
      popular: true
    },
    {
      name: "Premium Lawn Care",
      price: "Starting at $75/visit",
      features: ["Everything in Complete", "Aeration", "Overseeding", "Pest control", "Seasonal treatments"],
      popular: false
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-800 to-green-600">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/916247137/2361054013.mp4"
            alt="Lawn Care Services"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Lawn Care Services</h1>
            <p className="text-xl md:text-2xl mb-8">Professional lawn maintenance and fertilization services in Bowie, MD</p>
            <Link
              to="/#contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Lawn Care Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With our comprehensive fertilization services, we tailor our approach to meet the specific needs of your lawn.
              Our experienced team uses professional-grade equipment and proven techniques to ensure your lawn stays healthy and beautiful year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawnCareServices.map((service, index) => (
              <div key={service.title} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-gray-700">
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

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Lawn Care Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the lawn care package that best fits your needs and budget. All packages include professional service and guaranteed results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={pkg.name} className={`bg-white p-8 rounded-lg shadow-lg relative ${
                pkg.popular ? 'border-4 border-green-500 transform scale-105' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-4">{pkg.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/#contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  Choose This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Lawn Care Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your lawn receives the best care possible throughout the year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Assessment</h3>
              <p className="text-gray-600">We evaluate your lawn's current condition, soil type, and specific needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Plan</h3>
              <p className="text-gray-600">We create a tailored lawn care program specific to your property and goals.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Service</h3>
              <p className="text-gray-600">Our experienced team implements the plan using professional equipment and techniques.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ongoing Care</h3>
              <p className="text-gray-600">We provide regular maintenance and adjust treatments based on seasonal needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Why Choose Rivera's Lawn Care?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-white">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">7+ Years Experience</h3>
              <p>Proven track record of delivering exceptional results for homeowners in Bowie and surrounding areas.</p>
            </div>
            <div className="text-white">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly Options</h3>
              <p>We offer organic and environmentally-safe lawn care solutions that are safe for your family and pets.</p>
            </div>
            <div className="text-white">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p>Fair, transparent pricing with no hidden fees. Get the best value for professional lawn care services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for a Beautiful Lawn?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. Let us help you achieve the lawn of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/#contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:(301) 828-0207"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              Call (301) 828-0207
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
