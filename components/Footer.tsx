import Link from "next/link";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Platform",
      description: "Tools to automate and simplify your LinkedIn strategy.",
      items: [
        {
          title: "Features",
          href: "/features",
        },
        {
          title: "Pricing",
          href: "/pricing",
        },
        {
          title: "Analytics",
          href: "/analytics",
        },
        {
          title: "Integrations",
          href: "/integrations",
        },
      ],
    },
    {
      title: "Company",
      description: "Learn more about our mission and values.",
      items: [
        {
          title: "About Us",
          href: "/about",
        },
        {
          title: "Careers",
          href: "/careers",
        },
        {
          title: "Contact",
          href: "/contact",
        },
        {
          title: "Blog",
          href: "/blog",
        },
      ],
    },
    {
      title: "Resources",
      description: "Get help and explore our knowledge base.",
      items: [
        {
          title: "Help Center",
          href: "/help",
        },
        {
          title: "Documentation",
          href: "/docs",
        },
        {
          title: "Community",
          href: "/community",
        },
        {
          title: "FAQs",
          href: "/faqs",
        },
      ],
    },
  ];

  return (
    <div
      className="w-full py-20 lg:py-8 bg-primary text-background"
      data-aos="fade-up"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Footer Brand Section */}
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-black text-left">
                LinkAI
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Automate your LinkedIn strategy, save time, and grow your
                audience effortlessly.
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>123 Growth Drive</p>
                <p>Innovation City</p>
                <p>CA 90210</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link href="/terms">Terms of Service</Link>
                <Link href="/privacy">Privacy Policy</Link>
              </div>
            </div>
          </div>

          {/* Footer Navigation Section */}
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-semibold">{item.title}</p>
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        className="text-background/75"
                        href={subItem.href}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
