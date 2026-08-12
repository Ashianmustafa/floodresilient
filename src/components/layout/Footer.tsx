import Link from "next/link";
import { Layers, Github, ExternalLink, Mail } from "lucide-react";

const footerLinks = {
  research: [
    { label: "Overview", href: "/research" },
    { label: "Background", href: "/research#background" },
    { label: "Methodology", href: "/experimental-programme" },
    { label: "Feasibility", href: "/feasibility" },
  ],
  project: [
    { label: "KPIs", href: "/research#kpis" },
    { label: "Test Groups", href: "/experimental-programme#groups" },
    { label: "Timeline", href: "/research#timeline" },
    { label: "References", href: "/references" },
  ],
  info: [
    { label: "About", href: "/about" },
    { label: "Research Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-jakarta font-bold text-2xl text-white mb-1">
              Explore the Full Research
            </h2>
            <p className="text-blue-100 text-sm">
              Feasibility assessment, experimental programme & KPI analysis
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/research"
              className="px-5 py-2.5 bg-white text-blue-700 font-semibold rounded-xl text-sm hover:bg-blue-50 transition-colors shadow"
            >
              View Research →
            </Link>
            <Link
              href="/experimental-programme"
              className="px-5 py-2.5 border border-white/40 text-white font-semibold rounded-xl text-sm hover:bg-white/10 transition-colors"
            >
              Methodology →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="font-jakarta font-bold text-lg">
                Geo<span className="text-teal-400">FYP</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Final Year Project — Geotechnical Engineering. Investigating
              combined EICP + Hydrophobic treatment for flood-resilient
              foundation soils.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-teal-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                Research in Progress
              </span>
            </div>
          </div>

          {/* Research Links */}
          <div>
            <h3 className="font-jakarta font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Research
            </h3>
            <ul className="space-y-2">
              {footerLinks.research.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h3 className="font-jakarta font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Project
            </h3>
            <ul className="space-y-2">
              {footerLinks.project.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-jakarta font-semibold text-sm text-white mb-4 uppercase tracking-wider">
              Information
            </h3>
            <ul className="space-y-2 mb-5">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a
                href="mailto:student@university.edu.pk"
                className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="https://doi.org/10.1007/s11440-022-01482-z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                aria-label="DOI Reference"
              >
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2025 GeoFYP Research · Department of Civil Engineering · FYP-CE-2025
          </p>
          <p className="text-gray-600 text-xs">
            Reference: Zhou & Leung (2022) · Acta Geotechnica ·{" "}
            <a
              href="https://doi.org/10.1007/s11440-022-01482-z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-400 transition-colors"
            >
              DOI: 10.1007/s11440-022-01482-z
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
