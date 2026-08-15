import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { getPageMetadata } from "@/lib/metadata";
import { ArrowLeft, Calendar } from "lucide-react";

export const metadata = getPageMetadata(
  "/de/imposter-deutsch",
  "Imposter auf Deutsch: Bedeutung, Übersetzung & Gaming",
  "Was bedeutet Imposter auf Deutsch? Erfahre die Übersetzung (Betrüger, Hochstapler) und die Bedeutung des Begriffs in Spielen wie Among Us.",
  "de"
);

export default function ImposterDeutschPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://imposterland.com/" },
    { name: "Blog", url: "https://imposterland.com/blog/" },
    { name: "Imposter auf Deutsch", url: "https://imposterland.com/de/imposter-deutsch/" }
  ];

  return (
    <>
      <SEOHead breadcrumbs={breadcrumbs} includeHowTo={false} />

      <article lang="de" className="max-w-4xl mx-auto space-y-8">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 font-arcade text-sm text-[#0284c7] dark:text-[#38bdf8] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zum Party Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
            <span className="pixel-badge bg-[#e11d48] text-white">SPRACHE & GAMING</span>
            <span className="font-mono text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1 font-bold">
              <Calendar className="w-3.5 h-3.5" /> August 2026
            </span>
          </div>

          <h1 className="font-pixel text-2xl sm:text-4xl text-slate-900 dark:text-slate-100 font-extrabold leading-tight">
            Imposter auf Deutsch: Was das Wort wirklich bedeutet
          </h1>

          <p className="font-sans text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
            Die genaue deutsche Übersetzung, die Herkunft des Begriffs und warum er in modernen Spielen überall auftaucht.
          </p>
        </header>

        {/* Article Content Container */}
        <div className="pixel-box p-6 sm:p-10 space-y-8 text-slate-800 dark:text-slate-200 font-sans text-base leading-relaxed">
          
          <p>
            Man tippt "imposter deutsch" in die Suche und erwartet eine schnelle Antwort. Hier ist sie: Ein Imposter ist auf Deutsch ein <strong>Betrüger</strong>, <strong>Hochstapler</strong> oder <strong>Schwindler</strong> — jemand, der vorgibt, jemand anderes zu sein, um andere zu täuschen. Aber wie so oft steckt hinter einer einfachen Übersetzung eine viel interessantere Geschichte, besonders wenn man das Wort im Zusammenhang mit Spielen sieht.
          </p>

          <section className="space-y-4">
            <h2 className="font-pixel text-xl sm:text-2xl text-[#e11d48] dark:text-[#f43f5e] font-bold">
              Die direkte Übersetzung
            </h2>
            <p>
              Im klassischen Sprachgebrauch, etwa in Literatur oder im Alltag, übersetzt man "imposter" (auch geschrieben als "impostor") meistens als:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Betrüger</strong> – die häufigste und neutralste Übersetzung</li>
              <li><strong>Hochstapler</strong> – wenn jemand sich eine falsche Identität oder einen falschen Status aneignet, etwa ein "Hochstapler", der sich als Arzt ausgibt</li>
              <li><strong>Schwindler</strong> – wenn der Fokus mehr auf der Täuschung selbst liegt</li>
            </ul>
            <p>
              Ein Satz wie "He was revealed as an imposter" wird dementsprechend zu "Er wurde als Betrüger entlarvt." Alle drei Wörter beschreiben im Kern dasselbe: eine Person, die eine falsche Rolle spielt, um Vertrauen zu missbrauchen. (Hier findest du auch unsere englische Sprachanalyse: <Link href="/blog/what-does-imposter-mean/" className="text-[#0284c7] dark:text-[#38bdf8] font-bold hover:underline">What Does Imposter Mean?</Link>).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-pixel text-xl sm:text-2xl text-[#e11d48] dark:text-[#f43f5e] font-bold">
              Warum das Wort gerade jetzt so oft gesucht wird
            </h2>
            <p>
              Interessant ist, dass viele Menschen heute nicht wegen eines Wörterbuchs nach "imposter deutsch" suchen, sondern wegen eines Spiels. In Spielen wie Among Us oder klassischen Gesellschaftsspielen wie Mafia und Werwolf gibt es genau diese Rolle: den "Imposter" — den Spieler, der sich unter die ehrlichen Mitspieler mischt, seine wahre Identität verbirgt und versucht, unentdeckt zu bleiben, während er heimlich gegen die Gruppe arbeitet.
            </p>
            <p>
              In diesem Spielkontext wird "Imposter" im Deutschen oft gar nicht übersetzt, sondern einfach übernommen — ähnlich wie viele Gaming-Begriffe. Man sagt im deutschsprachigen Raum genauso oft "Wer ist der Imposter?" wie "Wer ist der Betrüger?". Beide Varianten sind absolut verständlich, aber der englische Begriff hat sich in der Gaming-Community fest etabliert.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-pixel text-xl sm:text-2xl text-[#e11d48] dark:text-[#f43f5e] font-bold">
              Der Unterschied zwischen "Imposter" im Alltag und im Spiel
            </h2>
            <p>
              Im echten Leben trägt das Wort eine ernste, oft negative Bedeutung — ein Hochstapler betrügt Menschen aus echtem Eigennutz. Im Spielkontext dagegen ist die Rolle des Imposters Teil der Unterhaltung. Es ist eine sogenannte <Link href="/blog/what-is-social-deduction/" className="text-[#0284c7] dark:text-[#38bdf8] font-bold hover:underline">"Social Deduction"-Rolle</Link> (auf Deutsch etwa: soziale Ermittlungsrolle), bei der die anderen Spieler versuchen müssen, den Betrüger anhand von Verhalten, Aussagen und Widersprüchen zu entlarven — genau wie bei echten Ermittlungen, nur ohne echten Schaden.
            </p>
            <p>
              Genau dieses Spannungsfeld zwischen Vertrauen und Täuschung ist auch der Grund, warum Spiele mit einer "Imposter"-Rolle seit Jahren so beliebt sind. Es befriedigt etwas sehr Menschliches: den Wunsch, Lügen zu erkennen, bevor sie einem selbst schaden.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-pixel text-xl sm:text-2xl text-[#e11d48] dark:text-[#f43f5e] font-bold">
              Verwandte Begriffe, die man kennen sollte
            </h2>
            <p>
              Wer sich für das Thema interessiert, stößt schnell auf verwandte Ausdrücke:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Hochstapler-Syndrom</strong> (Impostor-Syndrom) – ein psychologisches Phänomen, bei dem sich Menschen trotz echter Kompetenz wie Betrüger fühlen und Angst haben, "entlarvt" zu werden</li>
              <li><strong>Verräter</strong> (Traitor) – in manchen Spielen eine ähnliche, aber nicht identische Rolle</li>
              <li><strong>Mitspieler mit versteckter Rolle</strong> (Hidden Role Player) – der Oberbegriff für Spielfiguren wie den Imposter</li>
            </ul>
            <p>
              Diese Begriffe tauchen oft zusammen mit "Imposter" auf, weil sie alle um dasselbe Grundthema kreisen: eine Identität, die nicht das ist, was sie vorgibt zu sein.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-pixel text-xl sm:text-2xl text-[#e11d48] dark:text-[#f43f5e] font-bold">
              Fazit
            </h2>
            <p>
              "Imposter" heißt auf Deutsch schlicht Betrüger, Hochstapler oder Schwindler — aber je nachdem, ob man über den Alltag oder über ein Spiel spricht, verändert sich die Färbung des Wortes deutlich. Im Wörterbuch ist es eine ernste Bezeichnung für Täuschung. Am Spieltisch oder im Chat eines Multiplayer-Spiels ist es der Name für eine der spannendsten Rollen, die es gibt: die eines Spielers, der lügt, während alle anderen versuchen, genau das herauszufinden.
            </p>
          </section>

          {/* Call to Action Box */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl">
            <div>
              <h3 className="font-pixel text-base text-slate-900 dark:text-slate-100">Bereit für eine Runde Imposter?</h3>
              <p className="font-sans text-xs text-slate-600 dark:text-slate-400">Spiele jetzt kostenlos direkt im Browser ohne App-Download.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/de/play/" className="pixel-btn pixel-btn-pink text-xs">🎮 Jetzt Spielen</Link>
              <Link href="/blog/what-does-imposter-mean/" className="pixel-btn pixel-btn-yellow text-xs">Englische Version</Link>
            </div>
          </div>

        </div>
      </article>
    </>
  );
}
