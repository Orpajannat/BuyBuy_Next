export const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"]
    },
    {
      title: "Need Help?",
      links: ["Delivery Information", "Return & Refund Policy", "Payment Methods", "Track your Order", "Contact Us"]
    },
    {
      title: "Follow Us",
      links: ["Instagram", "Twitter", "Facebook", "YouTube"]
    }
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-100">
      
      {/* Top section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        
        {/* Brand */}
        <div>
          <h1 className="font-bold text-3xl text-gray-900">BuyBuy</h1>
          <p className="max-w-[410px] mt-4 text-sm">Leading the way in cutting-edge technology and innovation. From smart devices to the coolest accessories, we have it all!</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between w-full md:w-[55%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 mb-2 md:mb-5">{section.title}</h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <p className="py-4 text-center text-sm text-gray-500/80">
        Copyright 2025 © BuyBuy. All Rights Reserved.
      </p>
    </div>
  );
};