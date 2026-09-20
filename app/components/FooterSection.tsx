export default function FooterSection() {
  return (
    <footer className="bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              AI Resume Analyzer
            </h2>

            <p className="text-gray-400 mt-4">
              Analyze your resume, improve ATS score,
              and increase interview opportunities
              with AI-powered insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Legal
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="
                w-10
                h-10
                rounded-full
                bg-slate-900
                flex
                items-center
                justify-center
                hover:bg-blue-600
                transition-all
                text-white
                "
              >
                in
              </a>

              <a
                href="#"
                className="
                w-10
                h-10
                rounded-full
                bg-slate-900
                flex
                items-center
                justify-center
                hover:bg-blue-600
                transition-all
                text-white
                "
              >
                GH
              </a>

              <a
                href="#"
                className="
                w-10
                h-10
                rounded-full
                bg-slate-900
                flex
                items-center
                justify-center
                hover:bg-blue-600
                transition-all
                text-white
                "
              >
                X
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © 2026 AI Resume Analyzer.
            All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}