import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Music, Play, Shield, Globe } from "lucide-react";
import HeroSlider from "./HeroSlider";
import ServiceCards from "./ServiceCards";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Home = () => {
  // Platform logos for distribution section
  const platforms = [
    {
      name: "Spotify",
      logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=100&q=80",
    },
    {
      name: "Apple Music",
      logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&q=80",
    },
    {
      name: "YouTube Music",
      logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=100&q=80",
    },
    {
      name: "TikTok",
      logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=100&q=80",
    },
    {
      name: "Instagram",
      logo: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=100&q=80",
    },
    {
      name: "Facebook",
      logo: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=100&q=80",
    },
    {
      name: "WhatsApp",
      logo: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=100&q=80",
    },
    {
      name: "TV Networks",
      logo: "https://images.unsplash.com/photo-1611930022073-84f43e5b794a?w=100&q=80",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
  <img
    src="/logo.png"
    alt="MusicPro Logo"
    className="h-32 w-32 object-contain" // Changed size from h-10 w-10 to h-24 w-24
  />
</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Music Distribution (Coming soon)
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Sponsor Us (owell-0812320168)
              </a>
            </nav>
            <div>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
              >
                Login (Coming soon)
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section with Slider */}
        <section className="relative">
          <HeroSlider />
          <div className="absolute inset-0 flex items-center justify-center flex-col z-10 bg-black/40">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
            
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 bg-gradient-to-b from-gray-900 to-black"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services - coming soon in 2026
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive music solutions to help artists reach their full
                potential in the digital landscape in Namibia
              </p>
            </div>
            <ServiceCards />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Us
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We provide the tools and expertise to help you succeed in
                today's competitive music industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Global Reach
                  </h3>
                  <p className="text-gray-400">
                    Distribute your music to over 150+ streaming platforms
                    worldwide and reach millions of potential fans.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Copyright Protection
                  </h3>
                  <p className="text-gray-400">
                    We ensure your music is protected across all platforms with
                    robust copyright monitoring.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <Play className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Promotional Support
                  </h3>
                  <p className="text-gray-400">
                    Get featured in playlists and promotional campaigns to
                    increase your visibility and streams.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Distribution Platforms Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Where We Distribute
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Your music will be available on all major streaming platforms
                and social media channels
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <div className="h-16 w-16 rounded-full bg-white p-2 mb-4 flex items-center justify-center">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="h-12 w-12 object-contain rounded-full"
                    />
                  </div>
                  <h3 className="text-white font-medium text-center">
                    {platform.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Take Your Music to the Next Level?
              </h2>
              <p className="text-xl text-purple-200 mb-8">
                We aim to help artists in Namibia, if want to contribute to this project to help Namibian artists please contact us at 0812320168
                Donate or Sponsor this project.
              </p>
              <Button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-6 text-lg">
                we are lunching 2026
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
            <div className="flex items-center space-x-3">
  <img
    src="/logo.png"
    alt="MusicPro Logo"
    className="h-24 w-24 object-contain" // Changed size from h-10 w-10 to h-24 w-24
  />
</div>
              <p className="text-gray-400">
                Professional music distribution, licensing, and publishing
                services for artists worldwide based in Namibia. We are currently looking for Sponsers/ Investor to help us reach this goal and help Namibian Artist. Please Call 0812320168
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Services (Coming soon)</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Music Distribution
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Music Licensing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Music Publishing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Performance Rights
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} ytnafrica. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
