import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Rohit Sharma",
      role: "Java Developer",
      review:
        "This platform helped me improve my ATS score from 42 to 81. I started receiving more interview calls within weeks.",
    },
    {
      name: "Ayesha Khan",
      role: "Frontend Developer",
      review:
        "The AI suggestions were incredibly accurate. It highlighted missing skills and improved my resume significantly.",
    },
    {
      name: "Vivek Gupta",
      role: "Software Engineering Fresher",
      review:
        "The skill gap analysis gave me a clear roadmap. I updated my resume and felt much more confident while applying.",
    },
  ];

  return (
    <section
      id="reviews"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            What Our Users Say
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Thousands of students and professionals trust
            AI Resume Analyzer to improve their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-8
              hover:border-blue-500
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="
                    text-yellow-400
                    fill-yellow-400
                    "
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">
                "{review.review}"
              </p>

              <div className="mt-8">
                <h4 className="text-white font-semibold text-lg">
                  {review.name}
                </h4>

                <p className="text-blue-400 text-sm">
                  {review.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}