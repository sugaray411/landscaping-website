import { Link } from 'react-router-dom'

export default function TreeServices() {
  const treeServices = [
    {
      title: "Tree Pruning",
      description: "Professional pruning to maintain tree health, improve structure, and enhance safety while preserving natural beauty.",
      icon: "✂️",
      benefits: ["Health improvement", "Safety enhancement", "Shape optimization", "Disease prevention"],
      details: ["Deadwood removal", "Crown thinning", "Crown raising", "Structural pruning"]
    },
    {
      title: "Tree Removal",
      description: "Safe and efficient tree removal services for hazardous, diseased, or unwanted trees using professional equipment.",
      icon: "🪓",
      benefits: ["Complete removal", "Stump grinding", "Debris cleanup", "Safety protocols"],
      details: ["Emergency removal", "Planned removal", "Large tree specialists", "Property protection"]
    },
    {
      title: "Shrub Pruning",
      description: "Expert shrub trimming and shaping to maintain healthy growth and attractive appearance throughout the seasons.",
      icon: "🌳",
      benefits: ["Seasonal timing", "Growth promotion", "Shape maintenance", "Flower enhancement"],
      details: ["Spring pruning", "Summer maintenance", "Fall preparation", "Overgrowth control"]
    },
    {
      title: "Tree Trimming",
      description: "Regular tree trimming services to maintain proper tree structure, clear pathways, and prevent property damage.",
      icon: "🌲",
      benefits: ["Regular maintenance", "Clearance trimming", "View enhancement", "Safety improvement"],
      details: ["Power line clearance", "Building clearance", "Canopy management", "Growth direction"]
    },
    {
      title: "Tree Health Assessment",
      description: "Comprehensive tree health evaluations to identify diseases, pest issues, and structural problems before they become serious.",
      icon: "🔍",
      benefits: ["Early detection", "Treatment plans", "Risk assessment", "Preventive care"],
      details: ["Disease diagnosis", "Pest identification", "Soil analysis", "Treatment recommendations"]
    },
    {
      title: "Emergency Tree Services",
      description: "24/7 emergency response for storm-damaged trees, fallen branches, and other urgent tree-related hazards.",
      icon: "🚨",
      benefits: ["24/7 availability", "Quick response", "Safety priority", "Insurance assistance"],
      details: ["Storm cleanup", "Hazard removal", "Property protection", "Emergency stabilization"]
    }
  ]

  const certifications = [
    {
      title: "Certified Arborists",
      description: "Our team includes ISA certified arborists with extensive knowledge of tree biology and care.",
      icon: "🎓"
    },
    {
      title: "Insured & Licensed",
      description: "Fully licensed and insured for your protection and peace of mind.",
      icon: "🛡️"
    },
    {
      title: "Professional Equipment",
      description: "State-of-the-art equipment for safe and efficient tree care services.",
      icon: "⚙️"
    },
    {
      title: "Maryland Specialists",
      description: "Deep understanding of local tree species and Maryland climate conditions.",
      icon: "🌍"
    }
  ]

  const treeTypes = [
    {
      category: "Deciduous Trees",
      trees: ["Oak", "Maple", "Cherry", "Dogwood", "Redbud"],
      image: "https://ext.same-assets.com/916247137/181839965.jpeg"
    },
    {
      category: "Evergreen Trees",
      trees: ["Pine", "Spruce", "Fir", "Cedar", "Juniper"],
      image: "https://ext.same-assets.com/916247137/181839965.jpeg"
    },
    {
      category: "Fruit Trees",
      trees: ["Apple", "Pear", "Peach", "Plum", "Cherry"],
      image: "https://ext.same-assets.com/916247137/181839965.jpeg"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-800 to-green-600">
        <div className="absolute inset-0">
          <img
            src="https://ext.same-assets.com/916247137/181839965.jpeg"
            alt="Tree Services"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Tree Services</h1>
            <p className="text-xl md:text-2xl mb-8">Professional tree care and removal services in Bowie, MD and surrounding areas</p>
            <Link
              to="/#contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              Get Tree Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Tree Care Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With our crew of trained arborists, we understand the unique needs of different tree species and employ industry-standard techniques to achieve optimal results.
              Our comprehensive tree services ensure the health, safety, and beauty of your trees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treeServices.map((service) => (
              <div key={service.title} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <span className="text-green-600 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Services Include:</h4>
                  <ul className="space-y-1">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <span className="text-green-600 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Qualifications */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Tree Experts?</h2>
            <p className="text-lg text-white max-w-3xl mx-auto opacity-90">
              Our certified arborists bring years of experience and professional training to every tree care project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div key={cert.title} className="text-center text-white">
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                <p className="opacity-90">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tree Species We Service */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Tree Species We Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our arborists have extensive experience caring for all types of trees common to the Maryland region.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {treeTypes.map((type) => (
              <div key={type.category} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={type.image}
                  alt={type.category}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{type.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {type.trees.map((tree, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {tree}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Safety First Approach</h2>
              <p className="text-lg text-gray-600 mb-6">
                Tree work can be dangerous, which is why we prioritize safety in every aspect of our operations.
                Our team follows strict safety protocols and uses professional-grade equipment to protect both our workers and your property.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Site Assessment</h3>
                    <p className="text-gray-600">Thorough evaluation of the tree and surrounding area for potential hazards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Safety Setup</h3>
                    <p className="text-gray-600">Establishment of safety zones and proper equipment placement.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Professional Execution</h3>
                    <p className="text-gray-600">Careful, methodical work using industry-standard techniques and equipment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Clean Completion</h3>
                    <p className="text-gray-600">Complete cleanup and site restoration when the work is finished.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-700">Insured & Licensed</div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">7+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700">Emergency Service</div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-gray-700">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Tree Care */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Seasonal Tree Care Calendar</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Different seasons require different approaches to tree care. Here's when to schedule various tree services in Maryland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🌸</div>
                <h3 className="text-xl font-bold text-gray-800">Spring</h3>
                <p className="text-sm text-gray-600">March - May</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Tree health assessment</li>
                <li>• Early pruning completion</li>
                <li>• Disease treatment</li>
                <li>• New tree planting</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">☀️</div>
                <h3 className="text-xl font-bold text-gray-800">Summer</h3>
                <p className="text-sm text-gray-600">June - August</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Emergency storm response</li>
                <li>• Hazard tree removal</li>
                <li>• Pest monitoring</li>
                <li>• Water stress evaluation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🍂</div>
                <h3 className="text-xl font-bold text-gray-800">Fall</h3>
                <p className="text-sm text-gray-600">September - November</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Major pruning begins</li>
                <li>• Tree planting season</li>
                <li>• Root care and fertilization</li>
                <li>• Winter preparation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">❄️</div>
                <h3 className="text-xl font-bold text-gray-800">Winter</h3>
                <p className="text-sm text-gray-600">December - February</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Dormant season pruning</li>
                <li>• Tree structure work</li>
                <li>• Storm damage cleanup</li>
                <li>• Planning next year's care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Emergency Tree Services</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto opacity-90">
            Storm damage? Fallen tree? We provide 24/7 emergency tree services to protect your property and ensure safety.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:2026778451"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              Emergency: 2026778451
            </a>
            <Link
              to="/#contact"
              className="bg-red-700 text-white hover:bg-red-800 px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              Schedule Regular Service
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Professional Tree Care You Can Trust</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            From routine maintenance to emergency services, our certified arborists are here to keep your trees healthy and your property safe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/#contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              Get Free Assessment
            </Link>
            <a
              href="tel:2026778451"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
            >
              Call 2026778451
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
