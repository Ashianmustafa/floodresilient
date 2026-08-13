import type { Metadata } from "next";
import { GraduationCap, Award, ShieldCheck, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Research Team | GeoFYP NUST",
  description:
    "EICP + Hydrophobic Treatment FYP Research Team — National University of Sciences and Technology (NUST), NUST Institute of Civil Engineering.",
};

const supervisor = {
  initials: "DB",
  name: "Dr. Badee Alshameeri",
  title: "Project Supervisor",
  designation: "HOD of Geotechnical Department",
  department: "NUST Institute of Civil Engineering (NICE)",
  university: "National University of Sciences and Technology (NUST)",
  color: "blue",
  description:
    "Head of Department and Project Supervisor guiding the experimental research on EICP biocementation and hydrophobic soil modification for flood-resilient shallow foundations.",
  specializations: ["Geotechnical Engineering", "Soil Mechanics", "Ground Improvement", "Foundation Engineering"],
};

const students = [
  {
    initials: "LK",
    name: "Laveeza Azam Khan",
    role: "Undergraduate Researcher",
    department: "NUST Institute of Civil Engineering",
    color: "teal",
    description: "Final Year Project student conducting experimental geotechnical testing, soil characterization, and laboratory testing protocols.",
    interests: ["Geotechnical Testing", "Soil Stabilization", "EICP Biocementation"],
  },
  {
    initials: "AM",
    name: "Ashian Mustafa",
    role: "Undergraduate Researcher",
    department: "NUST Institute of Civil Engineering",
    color: "blue",
    description: "Final Year Project student specializing in hydro-mechanical soil modeling, data analytics, and flood durability analysis.",
    interests: ["Hydro-Geotechnics", "Flood Resilience", "Soil Mechanics"],
  },
  {
    initials: "AR",
    name: "Armeen",
    role: "Undergraduate Researcher",
    department: "NUST Institute of Civil Engineering",
    color: "purple",
    description: "Final Year Project student analyzing apparent contact angle, surface water repellency, and microscopic carbonate distribution.",
    interests: ["Hydrophobic Modification", "Surface Wettability", "Lab Analytics"],
  },
  {
    initials: "BA",
    name: "Behroz Ali",
    role: "Undergraduate Researcher",
    department: "NUST Institute of Civil Engineering",
    color: "indigo",
    description: "Final Year Project student focusing on load-bearing capacity retention, shear strength envelopes, and model footing testing.",
    interests: ["Foundation Engineering", "Bearing Capacity", "Experimental Methods"],
  },
];

export default function TeamPage() {
  return (
    <div className="pt-16 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/90 mb-6">
            <GraduationCap className="w-4 h-4 text-teal-300" />
            NUST Institute of Civil Engineering
          </span>
          <h1 className="font-jakarta font-bold text-4xl sm:text-5xl text-white mb-4">Research Team</h1>
          <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            Faculty supervisor and undergraduate student researchers conducting the Final Year Project on flood-resilient foundation soil stabilization.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        
        {/* Project Supervisor Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-blue-700" />
            <h2 className="font-jakarta font-bold text-2xl text-slate-900">Project Supervisor</h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50/50 via-white to-slate-50 border-2 border-blue-200/80 rounded-3xl p-8 sm:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Supervisor Avatar */}
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 text-white flex items-center justify-center text-3xl font-bold font-jakarta shadow-xl shrink-0">
                {supervisor.initials}
              </div>

              {/* Supervisor Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                  <h3 className="font-jakarta font-bold text-2xl text-slate-900">{supervisor.name}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full border border-blue-200">
                    {supervisor.designation}
                  </span>
                </div>

                <p className="text-blue-700 font-semibold text-sm mb-1">{supervisor.title}</p>
                <p className="text-slate-500 text-xs mb-4 font-medium">{supervisor.department}</p>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-3xl">
                  {supervisor.description}
                </p>

                {/* Specializations */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {supervisor.specializations.map((spec) => (
                    <span key={spec} className="px-3 py-1 bg-white text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 shadow-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Researchers Grid */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-teal-600" />
            <h2 className="font-jakarta font-bold text-2xl text-slate-900">Student Researchers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {students.map((student) => (
              <div key={student.name} className="card-base p-6 bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Student Avatar */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${student.color}-600 to-${student.color}-800 text-white flex items-center justify-center text-xl font-bold font-jakarta mb-5 shadow-md group-hover:scale-105 transition-transform`}>
                    {student.initials}
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-jakarta font-bold text-base text-slate-900 mb-1">{student.name}</h3>
                  <p className={`text-${student.color}-700 font-semibold text-xs mb-2`}>{student.role}</p>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">{student.description}</p>
                </div>

                {/* Interests */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {student.interests.map((interest) => (
                    <span key={interest} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-medium rounded-md">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NUST Academic Affiliation Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-10 text-white text-center shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5 shadow-inner">
            <GraduationCap className="w-8 h-8 text-teal-300" />
          </div>

          <h2 className="font-jakarta font-bold text-2xl sm:text-3xl text-white mb-2">
            National University of Sciences and Technology (NUST)
          </h2>
          <p className="text-blue-200 text-base font-medium mb-1">
            NUST Institute of Civil Engineering (NICE)
          </p>
          <p className="text-slate-400 text-xs font-mono mt-3">
            Session: 2023–2027 · Final Year Project Code: FYP-CE-2026-2027
          </p>
        </div>

      </div>
    </div>
  );
}
