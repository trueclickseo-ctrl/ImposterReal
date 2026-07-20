import SEOHead from "@/components/SEOHead";

export const metadata = {
  title: "Semantic SEO Map & Keyword Targeting | Imposter Strategy",
  description: "Phase 2 Semantic SEO Mapping Table for Imposter App. Pillar URL mapping, cluster pages, keyword targets, search intent, and internal links.",
};

export default function KeywordMapPage() {
  const keywordMap = [
    {
      pillar: "Pillar 1: Party Games",
      url: "/",
      targetKeyword: "party game online",
      searchIntent: "Informational / Transactional",
      clusters: ["social deduction games", "hidden role games", "icebreaker games", "family games"],
      internalLinks: "/play, /learn/rules, /word-library"
    },
    {
      pillar: "Pillar 2: Imposter Game",
      url: "/play",
      targetKeyword: "imposter game online",
      searchIntent: "Transactional / Game Play",
      clusters: ["imposter game rules", "how to play imposter", "imposter clues", "imposter categories"],
      internalLinks: "/learn, /game-modes, /word-library"
    },
    {
      pillar: "Pillar 3: Word & Category Generator",
      url: "/word-library",
      targetKeyword: "random word generator party game",
      searchIntent: "Informational / Tool Use",
      clusters: ["imposter words", "funny words", "classroom words", "custom category generator"],
      internalLinks: "/play, /resources, /learn/beginner-guide"
    },
    {
      pillar: "Pillar 4: Team & Group Activities",
      url: "/game-modes",
      targetKeyword: "office icebreaker party game",
      searchIntent: "Informational / Commercial",
      clusters: ["classroom activities", "office games", "youth group games", "team building"],
      internalLinks: "/resources, /community, /company/about"
    }
  ];

  return (
    <>
      <SEOHead includeHowTo={false} />

      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="pixel-badge bg-[#ffe600] text-slate-900">PHASE 2 DELIVERABLE</span>
          <h1 className="font-pixel text-2xl sm:text-4xl text-[#ffe600]">Semantic SEO Mapping Matrix</h1>
          <p className="font-sans text-sm text-slate-300">Pillar pages, keyword intent, cluster URLs, and internal linking targets.</p>
        </div>

        <div className="overflow-x-auto border-4 border-[#ffe600] shadow-[6px_6px_0px_#000]">
          <table className="w-full text-left font-arcade text-lg bg-[#141c2e] text-slate-200">
            <thead className="bg-[#1e293b] border-b-4 border-[#ffe600] font-pixel text-xs text-[#ffe600]">
              <tr>
                <th className="p-4">Pillar Category</th>
                <th className="p-4">URL</th>
                <th className="p-4">Primary Target Keyword</th>
                <th className="p-4">Search Intent</th>
                <th className="p-4">Cluster Targets</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {keywordMap.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-4 font-bold text-[#00f0ff]">{row.pillar}</td>
                  <td className="p-4 font-mono text-xs text-[#39ff14]">{row.url}</td>
                  <td className="p-4 font-bold text-[#ffe600]">{row.targetKeyword}</td>
                  <td className="p-4 text-slate-300">{row.searchIntent}</td>
                  <td className="p-4 text-xs font-sans text-slate-400">{row.clusters.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}
