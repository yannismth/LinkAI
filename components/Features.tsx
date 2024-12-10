import { Calendar, Pencil, ChartBar } from "lucide-react";

const featurescard = [
  {
    icon: <Calendar className="w-6 h-6 text-primary" />,
    title: "Smart Scheduling",
    subtitle: "Take control of your posting schedule with ease. Plan weeks of content in minutes and let our automation handle the rest.",
  },
  {
    icon: <Pencil className="w-6 h-6 text-primary" />,
    title: "Content Optimization",
    subtitle: "Craft impactful posts with AI-driven recommendations. Optimize your tone, structure, and timing to captivate your audience.",
  },
  {
    icon: <ChartBar className="w-6 h-6 text-primary" />,
    title: "Analytics That Matter",
    subtitle: "Get actionable insights on your content performance. Understand what works, refine your strategy, and watch your engagement grow.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#FCF9F9]">
      <div className="container mx-auto mt-28 py-20">
        <div className="text-center pb-12" data-aos="fade-left">
          <h1 className="text-4xl font-semibold mb-2">
            Powerful features to simplify your LinkedIn workflow
          </h1>
          <p className="text-muted-foreground">
            Plan, schedule, and publish your content effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-right" data-aos-delay="300">
          {featurescard.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div className="bg-primary/10 p-4 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h1 className="mt-4 mb-2 font-semibold text-lg">{feature.title}</h1>
              <p className="text-muted-foreground">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
