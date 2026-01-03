'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [reviewCount, setReviewCount] = useState(0)
  const [propertyCount, setPropertyCount] = useState(0)

  useEffect(() => {
    // Animate counters
    const reviewTarget = 15432
    const propertyTarget = 50000000

    const duration = 2000
    const steps = 60
    const reviewIncrement = reviewTarget / steps
    const propertyIncrement = propertyTarget / steps

    let currentStep = 0
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setReviewCount(Math.floor(reviewIncrement * currentStep))
        setPropertyCount(Math.floor(propertyIncrement * currentStep))
        currentStep++
      } else {
        setReviewCount(reviewTarget)
        setPropertyCount(propertyTarget)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section - Inspired by Uber's immediate value + Zillow's clean design */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full">
                <span className="text-red-600 font-semibold">🔥 Trusted by 50,000+ renters</span>
              </div>

              {/* Main Headline - Yelp-inspired trust messaging */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Real Reviews from
                <span className="gradient-text"> Real Renters</span>
              </h1>

              {/* Value Proposition - Redfin-inspired clarity */}
              <p className="text-xl text-gray-600 leading-relaxed">
                Know before you sign. Read authentic tenant reviews about properties and landlords.
                Make informed rental decisions with confidence.
              </p>

              {/* CTA Buttons - Uber-inspired immediate action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09l-.05-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Download on App Store
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-lg border-2 border-gray-200 hover:bg-gray-50 transition"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5zM8 20.5v-17c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5zM13 20.5v-17c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5zM18 20.5v-17c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5z"/>
                  </svg>
                  Get on Google Play
                </motion.a>
              </div>

              {/* Social Proof Numbers */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-gray-900">
                    {reviewCount.toLocaleString()}+
                  </div>
                  <div className="text-gray-600 mt-1">Verified Reviews</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">
                    50M+
                  </div>
                  <div className="text-gray-600 mt-1">Properties Listed</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - App Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                {/* Main Phone with Real App Screenshot */}
                <div className="relative bg-gradient-to-br from-red-500 to-red-600 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-black rounded-[2.5rem] p-4">
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      <img
                        src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/00/f2/26/00f226bc-4264-04a8-a3d5-b7d03b2d3acd/rebo1.jpg/400x800bb.png"
                        alt="Rebo App Map View"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <div className="text-sm font-semibold">4.8 Rating</div>
                      <div className="text-xs text-gray-500">2,341 reviews</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    <div>
                      <div className="text-sm font-semibold">New Review</div>
                      <div className="text-xs text-gray-500">Just posted!</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* App Screenshots Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Rebo in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse real reviews, explore interactive maps, and make informed rental decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/00/f2/26/00f226bc-4264-04a8-a3d5-b7d03b2d3acd/rebo1.jpg/400x800bb.png",
                title: "Interactive Map",
                description: "See all properties with ratings at a glance"
              },
              {
                src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a9/9e/25/a99e2533-17ad-a971-ef7e-6d677910539c/rebo2.jpg/400x800bb.png",
                title: "Property Details",
                description: "Read verified reviews from real tenants"
              },
              {
                src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/79/35/36/79353648-5613-a5a1-fb13-0aa3b9b05949/rebo3.jpg/400x800bb.png",
                title: "Smart Search",
                description: "Filter by ratings, price, and amenities"
              },
              {
                src: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/38/8a/6a/388a6a72-b773-0f09-dcd3-8fc948ba8b3e/rebo4.jpg/400x800bb.png",
                title: "User Reviews",
                description: "Share your experiences to help others"
              }
            ].map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-4">
                    <div className="mx-auto max-w-[200px]">
                      <div className="relative bg-black rounded-[2rem] p-2">
                        <img
                          src={screenshot.src}
                          alt={screenshot.title}
                          className="w-full rounded-[1.5rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{screenshot.title}</h3>
                    <p className="text-sm text-gray-600">{screenshot.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Zillow-inspired clean grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Renters Choose Rebo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the most transparent rental marketplace, powered by real tenant experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Verified Reviews
              </h3>
              <p className="text-gray-600">
                Every review comes from real tenants who've actually lived in the properties.
                No fake reviews, no paid promotions.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Interactive Map
              </h3>
              <p className="text-gray-600">
                See all properties with reviews in your area. Color-coded bubbles show
                ratings at a glance. Zoom in for details.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Landlord Ratings
              </h3>
              <p className="text-gray-600">
                Not just property reviews - see how landlords and management companies
                are rated by their tenants.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Smart Filters
              </h3>
              <p className="text-gray-600">
                Filter by rating, price range, and amenities. Find exactly what you're
                looking for without the noise.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Real Photos
              </h3>
              <p className="text-gray-600">
                See actual photos from tenants, not just staged marketing shots.
                Know what you're really getting.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Community Driven
              </h3>
              <p className="text-gray-600">
                Built by renters, for renters. Help others make informed decisions
                by sharing your experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Uber-inspired simplicity */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Rebo Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to make your next rental decision with confidence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Search Properties
                </h3>
                <p className="text-gray-600">
                  Open the app and browse properties in your desired area. See ratings at a glance on the map.
                </p>
              </div>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gray-300"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Read Reviews
                </h3>
                <p className="text-gray-600">
                  Tap any property to read detailed reviews from real tenants. See photos and ratings for everything.
                </p>
              </div>
              {/* Connector Line */}
              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gray-300"></div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Make Informed Decisions
                </h3>
                <p className="text-gray-600">
                  Contact properties with confidence, knowing exactly what to expect before you sign.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Yelp-inspired trust building */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Renters Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of renters who've found their perfect home with Rebo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Rebo saved me from signing a lease at a nightmare property. The reviews warned me about
                the management issues that weren't obvious during the tour."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-600">Arlington, VA</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Finally, an app that tells the truth about rental properties! No more surprises after
                moving in. Every renter needs this."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">Mike T.</div>
                  <div className="text-sm text-gray-600">Washington, DC</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "I love that I can see reviews about the actual landlord, not just the property.
                It makes such a difference knowing how responsive they are."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">Jessica L.</div>
                  <div className="text-sm text-gray-600">Baltimore, MD</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Currently Available In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're expanding rapidly. More cities coming soon!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Virginia', 'Maryland', 'Washington DC', 'North Carolina'].map((state, index) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-semibold text-gray-900">{state}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">Don't see your city?</p>
            <button className="text-red-600 font-semibold hover:text-red-700 transition">
              Request your area →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Redfin-inspired conversion focus */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Your Perfect Rental?
            </h2>
            <p className="text-xl text-red-100 mb-10">
              Join thousands of renters making informed decisions with Rebo.
              Download now and never sign a bad lease again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg shadow-lg hover:bg-gray-50 transition"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09l-.05-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download on App Store
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-red-600 transition"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5zM8 20.5v-17c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5zM13 20.5v-17c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5zM18 20.5v-17c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5z"/>
                </svg>
                Get on Google Play
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Rebo</h3>
              <p className="text-sm">
                Real reviews from real renters. Know before you sign.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition">Coverage Areas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Rebo. All rights reserved. Built by renters, for renters.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}