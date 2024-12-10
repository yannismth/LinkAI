import { Check } from "lucide-react";
import { Button } from "./ui/button";

export const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    features: [
      "1 scheduled post per day",
      "Basic analytics",
      "Community support",
    ],
    mostPopular: false,
  },
  {
    title: "Pro",
    price: "$19",
    features: [
      "Unlimited scheduled posts",
      "Advanced analytics",
      "AI-powered content suggestions",
      "Priority support",
    ],
    mostPopular: true,
  },
  {
    title: "Enterprise",
    price: "$39",
    features: [
      "Team collaboration tools",
      "Custom posting workflows",
      "Dedicated account manager",
      "Advanced integrations",
    ],
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <>
      <section className="my-24">
        <div className="container mx-auto">
          <div className="text-center mb-8" data-aos="fade-down">
            <h1 className="text-4xl font-bold">Pricings</h1>
            <p className="text-muted-foreground">
              Choose the perfect plan to match your goals. Whether you’re just
              starting or scaling up, we’ve got you covered with flexible
              options.
            </p>
          </div>
          <div className="flex justify-center py-12 gap-4 max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            {pricingPlans.map((pricing, index) => (
              <div
                key={index}
                className={`relative p-8 h-96 w-full border rounded-md flex flex-col justify-between ${
                  pricing.mostPopular
                    ? "border-2 border-primary"
                    : "border-1"
                }`}
              >
                {/* Badge "Popular" */}
                {pricing.mostPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-bl-md">
                    Popular
                  </div>
                )}
                <h1 className="font-semibold text-2xl mb-4">{pricing.title}</h1>
                <h1 className="font-semibold text-2xl mb-4">
                  {pricing.price}{" "}
                  <span className="font-regular text-muted-foreground text-sm">
                    /month
                  </span>
                </h1>
                <div className="mb-4">
                  {pricing.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="flex items-center mb-2 text-sm"
                    >
                      <Check size={24} className="mx-4 text-primary" />
                      <p>{feature}</p>
                    </span>
                  ))}
                </div>
                <Button
                  className="w-full"
                  variant={pricing.mostPopular ? "default" : "outline"}
                >
                  Commencer
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
