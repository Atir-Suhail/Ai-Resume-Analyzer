export default function StatsSection() {
  const stats = [
    {
      number: "10K+",
      label: "Resumes Analyzed",
    },
    {
      number: "92%",
      label: "ATS Improvement",
    },
    {
      number: "5K+",
      label: "Active Users",
    },
    {
      number: "98%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-8
              text-center
              hover:border-blue-500
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <h2 className="text-4xl font-bold text-blue-500">
                {stat.number}
              </h2>

              <p className="text-gray-400 mt-3">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}