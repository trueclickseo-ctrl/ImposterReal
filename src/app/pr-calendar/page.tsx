import SEOHead from "@/components/SEOHead";

export const metadata = {
  title: "90-Day Digital PR & Off-Page SEO Strategy | Imposter",
  description: "Phase 6 Off-Page SEO Strategy: Outreach targets, link building categories, and 90-day digital PR campaign content calendar.",
};

export default function PRCalendarPage() {
  const outreachTargets = [
    "Tabletop & Board Game Blogs (BoardGameGeek, Dice Tower)",
    "Party Planning & Event Sites (The Spruce, Party Delights)",
    "Educator & Teacher Communities (Edutopia, TeachersPayTeachers)",
    "Gaming Press & Tech Outlets (IGN, Polygon, Lifehacker)",
    "Student & University Clubs (Reddit r/boardgames, Discord servers)",
    "Remote Productivity & Culture Outlets (FlexJobs, Work Life)"
  ];

  const calendar = [
    { month: "Month 1 (Days 1–30)", focus: "Product Launch & Community Outreach", campaign: "Reddit r/partygames launch AMA, YouTube 'How to Play' creator partnerships." },
    { month: "Month 2 (Days 31–60)", focus: "Annual Party Game Trends Report", campaign: "Publish aggregated anonymized gameplay statistics on bluffing behavior and word difficulty." },
    { month: "Month 3 (Days 61–90)", focus: "Interactive Quiz & Educator Kits", campaign: "Launch 'Which Social Deduction Game Matches Your Group?' interactive quiz and teacher outreach." }
  ];

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ff2a85] text-white">PHASE 6 DELIVERABLE</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ff2a85]">Off-Page SEO & 90-Day Digital PR Calendar</h1>
          <p className="font-sans text-sm text-slate-300">Outreach targets, backlink strategy, and quarterly campaign milestones.</p>
        </div>

        {/* Outreach Targets List */}
        <div className="pixel-box pixel-box-pink p-6 sm:p-8 bg-[#141c2e] space-y-4">
          <h2 className="font-pixel text-lg text-[#ff2a85]">Link Building & Outreach Target Verticals</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-arcade text-lg text-slate-200">
            {outreachTargets.map((target, idx) => (
              <li key={idx} className="bg-[#1e293b] p-3 border border-slate-700 flex items-center gap-2">
                <span className="text-[#ffe600]">🎯</span> {target}
              </li>
            ))}
          </ul>
        </div>

        {/* 90-Day Campaign Calendar */}
        <div className="space-y-4">
          <h2 className="font-pixel text-lg text-[#ffe600]">90-Day Digital PR Campaign Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {calendar.map((item, idx) => (
              <div key={idx} className="pixel-box p-6 bg-[#141c2e] space-y-2 border-4 border-[#00f0ff]">
                <span className="pixel-badge bg-[#00f0ff] text-slate-900">{item.month}</span>
                <h3 className="font-pixel text-base text-[#ffe600]">{item.focus}</h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">{item.campaign}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
