// src/components/Prices.jsx (or Prices.tsx)

import React from 'react';

const Prices = () => {
  const pricingTiers = [
    {
      title: "Basic Single-Page Website / \"Landing Page\"",
      description: "This is perfect for clients who need a simple online presence, like a digital business card, an event announcement, or a single-page portfolio. It includes essential information like contact details, a brief description of services, and possibly one image.",
      priceRange: "$8 - $15",
      whyPrice: "Those are significant prices, but still very affordable. It covers your time and effort more realistically while remaining highly competitive. Clients will see more value.",
      buttonText: "Get Started",
      emailSubject: "Inquiry about Basic Single-Page Website Plan"
    },
    {
      title: "Small Business / Multi-Page Website",
      description: "Ideal for small businesses or individuals who need a few pages to showcase their services, products, or information in more detail. This could include pages like \"Home,\" \"About Us,\" \"Services,\" and \"Contact.\" It typically involves simple navigation and a basic design.",
      priceRange: "$20 - $35",
      whyPrice: "This reflects the increased complexity and time involved in designing multiple pages and ensuring they connect smoothly. It's still a very good deal for a multi-page website.",
      buttonText: "Inquire Now",
      emailSubject: "Inquiry about Small Business Website Plan"
    },
    {
      title: "Custom / Advanced Website",
      description: "For clients with more specific needs, requiring unique features, more complex layouts, or a larger number of pages (e.g., more than 5-7 pages). This could include features like a simple gallery, a basic blog section, or integration with social media feeds. This level requires more custom design and development time.",
      priceRange: "$40 - $100+",
      whyPrice: "This tier acknowledges the significant increase in design work, content organization, and feature implementation. For a truly \"big\" website with many custom elements, the price would reflect that advanced work. It also depends on complexity, so prices vary.",
      buttonText: "Get a Custom Quote",
      emailSubject: "Inquiry about Custom / Advanced Website Plan"
    }
  ];

  return (
    <section id="prices-section" className="py-24 px-6 font-orbitron">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading - KEPT AS PROVIDED */}
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          <span className="text-neon-blue">OUR</span>{" "}
          <span className="text-foreground">FLEXIBLE</span>{" "}
          <span className="text-neon-green">PRICING</span>
        </h2>
        {/* Separator */}
        <div className="h-1 w-24 bg-neon-green mx-auto mb-8 neon-glow"></div>
        {/* Sub-description */}
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Choose the plan that best fits your needs, from individual projects to comprehensive enterprise solutions.
        </p>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl gradient-card border border-muted hover:border-neon-blue transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between"
            >
              <div> {/* Content above the button */}
                <h3 className="text-3xl font-black text-foreground mb-4">
                  {tier.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {tier.description}
                </p>
                <div className="text-5xl font-black text-neon-green mb-6">
                  {tier.priceRange}
                </div>
              </div>
              
              <div> {/* "Why this price?" and Button */}
                <p className="text-sm text-muted-foreground italic mb-6">
                  <span className="font-semibold">Why this price?</span> {tier.whyPrice}
                </p>
                {/* Mailto button for each tier */}
                <a 
                  href={`mailto:customer-devcore@proton.me?subject=${encodeURIComponent(tier.emailSubject)}`} 
                  className="inline-block w-full px-6 py-3 bg-gradient-to-r from-neon-green to-neon-blue text-background font-bold rounded-lg hover:scale-105 transition-transform duration-300 neon-glow"
                >
                  {tier.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* --- ONLY THIS NEW SECTION IS ADDED --- */}
        <p className="mt-12 text-lg text-muted-foreground font-semibold">
          Currencies Accepted: <span className="text-foreground">TZS, the USD prices shown on top is just the prices in USD, we only accept TZ, not USD</span>
        </p>
        {/* --- END NEW SECTION --- */}

      </div>
    </section>
  );
};

export default Prices;