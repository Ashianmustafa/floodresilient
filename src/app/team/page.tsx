import type { Metadata } from "next";
import { Mail, ExternalLink, Layers, GraduationCap, Microscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Research Team | GeoFYP Research",
  description: "Meet the research team behind the EICP + Hydrophobic FYP project.",
};

const teamMembers = [
  {
    initials: "YN",
    name: "Your Name",
    role: "Undergraduate Researcher",
    department: "Department of Civil Engineering",
    university: "Your University",
    email: "student@university.edu.pk",
    color: "blue",
    icon: GraduationCap,
    description:
      "Final Year Project student conducting experimental geotechnical research on combined EICP and hydrophobic treatment for flood-resilient foundation soils.",
    interests: ["Geotechnical Engineering", "Soil Stabilization", "Flood Resilience", "EICP Research"],
  },
  {
    initials: "PS",
    name: "Prof. Supervisor Name",
    role: "Project Supervisor",
    department: "Department of Civil Engineering",
    university: "Your University",
    email: "supervisor@university.edu.pk",
    color: "teal",
    icon: Layers,
    description:
      "Associate Professor specializing in geotechnical engineering, soil mechanics and ground improvement. Over 15 years of research experience in foundation engineering.",
    interests: ["Ground Improvement", "Soil Mechanics", "Foundation Engineering", "Environmental Geotechnics"],
  },
  {
    initials: "CS",
    name: "Co-Supervisor Name",
    role: "Co-Supervisor / Lab Advisor",
    department: "Soil Mechanics Laboratory",
    university: "Your University",
    email: "cosupervisor@university.edu.pk",
    color: "purple",
    icon: Microscope,
    description:
      "PhD Research Fellow providing technical guidance on laboratory testing protocols, EICP methodology and data analysis for the FYP project.",
    interests: ["Hydrology", "Laboratory Testing", "Biogeotechnics", "EICP Research"],
  },
];

export default function TeamPage() {
  return (
    <div className="pt-16 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/80 mb-6">
            Research Team
          </span>
          <h1 className="font-jakarta font-bold text-4xl text-white mb-4">Meet the Team</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Undergraduate student and faculty supervisors conducting the EICP + Hydrophobic FYP research project.
          </p>
        </div>
      </div>

      {/* Team Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => {
            const Icon = member.icon;
            return (
              <div key={member.name} className="card-base p-8 text-center group">
                {/* Avatar */}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br from-${member.color}-500 to-${member.color}-700 flex items-center justify-center text-white text-2xl font-bold font-jakarta mx-auto mb-5 shadow-lg group-hover:scale-105 transition-transform`}>
                  {member.initials}
                </div>

                {/* Name & Role */}
                <h3 className="font-jakarta font-bold text-lg text-slate-900 mb-1">{member.name}</h3>
                <p className={`text-${member.color}-600 font-semibold text-sm mb-1`}>{member.role}</p>
                <p className="text-gray-400 text-xs mb-4">{member.department}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{member.description}</p>

                {/* Interests */}
                <div className="flex flex-wrap gap-1.5 justify-center mb-5">
                  {member.interests.map((interest) => (
                    <span key={interest} className={`px-2 py-0.5 bg-${member.color}-50 text-${member.color}-700 text-[10px] font-medium rounded-full border border-${member.color}-100`}>
                      {interest}
                    </span>
                  ))}
                </div>

                {/* Email */}
                <a
                  href={`mailto:${member.email}`}
                  className={`inline-flex items-center gap-1.5 text-xs text-${member.color}-600 hover:text-${member.color}-800 transition-colors font-medium`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  {member.email}
                </a>
              </div>
            );
          })}
        </div>

        {/* University Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-10 text-white text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-jakarta font-bold text-2xl mb-2">Your University Name</h2>
          <p className="text-blue-200 text-sm mb-1">Department of Civil Engineering</p>
          <p className="text-blue-200 text-sm mb-1">Faculty of Engineering & Technology</p>
          <p className="text-gray-400 text-xs mt-3">FYP-CE-2026 · Session 2022–2026</p>
        </div>
      </div>
    </div>
  );
}
