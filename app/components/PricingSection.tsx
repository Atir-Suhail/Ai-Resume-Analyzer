export default function PricingSection() {
  const plans = [
    {
      title: "Guest",
      price: "Free",
      analyses: "2 Free Analyses",
      features: [
        "ATS Score",
        "Resume Analysis",
        "No Registration Required",
      ],
      button: "Try Free",
      featured: false,
    },

    {
      title: "Registered",
      price: "Free",
      analyses: "10 Free Analyses",
      features: [
        "ATS Score",
        "AI Resume Review",
        "Job Match Analysis",
        "Dashboard Access",
        "Resume History",
      ],
      button: "Create Account",
      featured: true,
    },

    {
      title: "Premium",
      price: "₹299/month",
      analyses: "Unlimited Analyses",
      features: [
        "Unlimited Resume Analysis",
        "Unlimited Job Match",
        "Resume Builder",
        "Priority AI Processing",
        "Premium Support",
      ],
      button: "Upgrade",
      featured: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Simple Pricing
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Start free and upgrade when you need more.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
              rounded-3xl
              p-8
              border
              transition-all
              duration-300
              hover:-translate-y-2

              ${
                plan.featured
                  ? "bg-gradient-to-b from-blue-600/20 to-slate-900 border-blue-500"
                  : "bg-slate-900 border-slate-800"
              }
              `}
            >

              {plan.featured && (
                <div
                  className="
                  inline-block
                  bg-blue-600
                  text-white
                  px-4
                  py-1
                  rounded-full
                  text-sm
                  font-semibold
                  mb-4
                  "
                >
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold text-white">
                {plan.title}
              </h3>

              <p className="text-5xl font-bold text-white mt-6">
                {plan.price}
              </p>

              <p className="text-blue-400 mt-4">
                {plan.analyses}
              </p>

              <ul className="mt-8 space-y-4">

                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-gray-300"
                  >
                    ✓ {feature}
                  </li>
                ))}

              </ul>

              <button
                className={`
                w-full
                mt-10
                py-3
                rounded-xl
                font-semibold

                ${
                  plan.featured
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-white"
                }
                `}
              >
                {plan.button}
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}