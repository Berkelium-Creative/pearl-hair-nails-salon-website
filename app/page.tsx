"use client";
import { Tangerine, Cardo, DM_Mono } from "next/font/google";
import content from "../data/content.json";

const script = Tangerine({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-script" });
const display = Cardo({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-display" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const LAVENDER = "#C4B5FD";
const LAVENDER_DARK = "#4C1D95";
const BLUSH = "#FBCFE8";
const ROSE_ACCENT = "#BE185D";
const PEARL = "#FAFAFA";
const INK = "#1C1917";
const MUTED = "#78716C";

const HERO_PHOTO = "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1800&q=80&auto=format&fit=crop";
const DETAIL_PHOTO = "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=1200&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${script.variable} ${display.variable} ${mono.variable} min-h-screen`} style={{ backgroundColor: PEARL, color: INK, fontFamily: "var(--font-display)" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pearl-shine { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .fade-up { animation: fadeUp 0.9s ease-out both; }
        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.36s; }
        .display-text { font-family: var(--font-display); }
        .display-italic { font-family: var(--font-display); font-style: italic; }
        .script-text { font-family: var(--font-script); }
        .mono-text { font-family: var(--font-mono); }
        .pearl-shine { animation: pearl-shine 3s ease-in-out infinite; }
        .pearl-grad { background: linear-gradient(135deg, ${PEARL} 0%, ${BLUSH}55 30%, ${LAVENDER}55 70%, ${PEARL} 100%); }
      `}</style>

      <header className="border-b" style={{ borderColor: LAVENDER_DARK, backgroundColor: PEARL }}>
        <div className="text-center py-2.5 mono-text text-[10px] uppercase tracking-[0.4em]" style={{ background: `linear-gradient(90deg, ${LAVENDER}, ${BLUSH})`, color: LAVENDER_DARK }}>
          ◌ Lake Forest · Raymond Way · Open Seven Days ◌
        </div>
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <div className="script-text text-5xl leading-none" style={{ color: LAVENDER_DARK }}>Pearl</div>
            <div className="mono-text text-[10px] uppercase tracking-[0.4em] mt-1" style={{ color: ROSE_ACCENT }}>hair & nails salon · lake forest</div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-light">
            <a href="#about" style={{ color: INK }}>The Salon</a>
            <a href="#menu" style={{ color: INK }}>Menu</a>
            <a href="#reviews" style={{ color: INK }}>Reviews</a>
            <a href="#visit" style={{ color: INK }}>Visit</a>
          </div>
          <a href={c.hero.ctaLink} className="px-5 py-2.5 text-xs uppercase tracking-[0.3em]" style={{ backgroundColor: LAVENDER_DARK, color: PEARL }}>Reserve</a>
        </nav>
      </header>

      <section className="relative py-24 pearl-grad border-b" style={{ borderColor: LAVENDER_DARK }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 fade-up">
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-8" style={{ color: ROSE_ACCENT }}>· {c.hero.eyebrow} ·</div>
            <div className="script-text text-7xl md:text-9xl leading-[0.85] mb-2" style={{ color: LAVENDER_DARK }}>Pearl.</div>
            <h1 className="display-text text-3xl md:text-5xl leading-[1.05] mb-8" style={{ color: INK }}>
              {c.hero.heading}
            </h1>
            <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: INK }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href={c.hero.ctaLink} className="px-10 py-4 text-sm uppercase tracking-[0.3em] inline-flex items-center gap-3" style={{ backgroundColor: LAVENDER_DARK, color: PEARL }}>
                {c.hero.ctaText} →
              </a>
              <div className="text-sm">
                <div className="font-light" style={{ color: INK }}>★ 4.0 · 23 reviews</div>
                <div className="script-text text-2xl" style={{ color: ROSE_ACCENT }}>lake forest classic.</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 fade-up delay-2 relative">
            <div className="overflow-hidden" style={{ aspectRatio: "4/5", borderRadius: "999px", border: `2px solid ${LAVENDER_DARK}` }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
            <div className="absolute top-4 -right-4 w-24 h-24 rounded-full pearl-shine flex items-center justify-center text-center" style={{ backgroundColor: BLUSH, color: LAVENDER_DARK }}>
              <div>
                <div className="script-text text-2xl leading-none">since</div>
                <div className="display-italic text-lg leading-none">2014</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-b" style={{ borderColor: LAVENDER_DARK, backgroundColor: PEARL }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="overflow-hidden" style={{ aspectRatio: "3/4", borderRadius: "32px", border: `2px solid ${ROSE_ACCENT}` }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${DETAIL_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-3" style={{ color: ROSE_ACCENT }}>· {c.about.label} ·</div>
            <h2 className="display-text text-4xl md:text-6xl leading-[1.05] mb-3" style={{ color: LAVENDER_DARK }}>{c.about.heading.split(".")[0]}.</h2>
            <div className="script-text text-5xl mb-10" style={{ color: ROSE_ACCENT }}>{c.about.heading.split(".").slice(1).join(".").trim() || "Lake Forest."}</div>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: INK }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 border-b" style={{ borderColor: LAVENDER_DARK, backgroundColor: LAVENDER }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-3" style={{ color: LAVENDER_DARK }}>· THE MENU ·</div>
            <div className="script-text text-8xl leading-none mb-3" style={{ color: LAVENDER_DARK }}>services.</div>
            <div className="display-italic text-3xl" style={{ color: ROSE_ACCENT }}>For your hair, your nails, your week.</div>
          </div>
          <div>
            {c.services.map((s: any, i: number) => (
              <article key={i} className="py-8 grid md:grid-cols-12 gap-6 items-baseline" style={{ borderTop: `1px solid ${LAVENDER_DARK}` }}>
                <div className="md:col-span-1 mono-text text-xs uppercase tracking-[0.3em]" style={{ color: ROSE_ACCENT }}>{String(i + 1).padStart(2, "0")}</div>
                <div className="md:col-span-4 display-text text-3xl leading-tight" style={{ color: INK }}>{s.title}</div>
                <div className="md:col-span-5 text-base leading-relaxed" style={{ color: INK }}>{s.description}</div>
                <div className="md:col-span-2 script-text text-4xl text-right" style={{ color: LAVENDER_DARK }}>{s.price}</div>
              </article>
            ))}
            <div style={{ borderTop: `1px solid ${LAVENDER_DARK}` }} />
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 border-b" style={{ borderColor: LAVENDER_DARK, backgroundColor: BLUSH }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-3" style={{ color: ROSE_ACCENT }}>· THE REGULARS ·</div>
            <div className="script-text text-7xl leading-none" style={{ color: ROSE_ACCENT }}>thank you.</div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="px-6 py-10 text-center flex flex-col items-center" style={{ backgroundColor: PEARL, border: `1px solid ${LAVENDER_DARK}`, borderRadius: "32px" }}>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: ROSE_ACCENT, fontSize: 22 }}>★</span>)}
                </div>
                <blockquote className="display-italic text-lg leading-snug mb-8 flex-grow" style={{ color: INK }}>"{r.text}"</blockquote>
                <figcaption>
                  <div className="script-text text-4xl" style={{ color: LAVENDER_DARK }}>{r.name}</div>
                  <div className="mono-text text-[10px] uppercase tracking-[0.35em] mt-2" style={{ color: ROSE_ACCENT }}>· {r.context} ·</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: PEARL }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-4" style={{ color: ROSE_ACCENT }}>· COME BY ·</div>
            <div className="script-text text-8xl mb-3" style={{ color: LAVENDER_DARK }}>visit us.</div>
            <h2 className="display-italic text-3xl mb-8" style={{ color: ROSE_ACCENT }}>On Raymond Way, Lake Forest.</h2>
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: INK }}>Inside the Lake Forest Towne Center on Raymond Way. Plenty of parking. Walk-ins welcome but appointments preferred — book ahead for color, balayage, and full sets.</p>

            <dl className="space-y-5 mb-10">
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1" style={{ color: ROSE_ACCENT }}>· address</dt>
                <dd className="text-xl" style={{ color: INK }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1" style={{ color: ROSE_ACCENT }}>· call</dt>
                <dd className="script-text text-5xl"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: LAVENDER_DARK }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-2" style={{ color: ROSE_ACCENT }}>· hours</dt>
                <dd>
                  <table className="text-sm" style={{ color: INK }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day}>
                          <td className="pr-8 py-1 font-semibold">{day}</td>
                          <td>{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden" style={{ minHeight: 420, border: `2px solid ${LAVENDER_DARK}`, borderRadius: "32px" }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="500" style={{ border: 0, filter: "grayscale(70%)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t" style={{ borderColor: LAVENDER_DARK, backgroundColor: PEARL, color: MUTED }}>
        <div className="script-text text-6xl mb-2" style={{ color: LAVENDER_DARK }}>Pearl.</div>
        <div className="mono-text text-xs uppercase tracking-[0.4em]" style={{ color: ROSE_ACCENT }}>hair &amp; nails salon · lake forest · since 2014</div>
        <div className="mono-text text-xs uppercase tracking-[0.35em] mt-4 opacity-60">© {new Date().getFullYear()} PEARL HAIR & NAILS SALON · LAKE FOREST, CA</div>
      </footer>
    </main>
  );
}
