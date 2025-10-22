// src/components/About.jsx
import { useEffect, useState } from "react";

function AnimatedCounter({ to = 0, duration = 1500, suffix = "" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf;
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.floor(progress * to));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return <span>{value}{suffix}</span>;
}

export default function About() {
  const stats = [
    { number: 50, suffix: "+", label: "Projects Completed", animate: true },
    { number: 5, suffix: "+", label: "Live Projects", animate: true },
    { number: "24/7", suffix: "", label: "Support Available", animate: false },
  ];

  const milestones = [
    {
      title: "Two friends & directors",
      desc: "Same college, B.Tech (CS).",
      tag: "Year 1",
    },
    {
      title: "Startup dream begins",
      desc: "Explored society and small businesses.",
      tag: "Year 1–2",
    },
    {
      title: "Skills expansion",
      desc: "MERN, Java full stack, MySQL/MS SQL, Flutter, React Native.",
      tag: "Year 2",
    },
    {
      title: "Dozens of projects",
      desc: "Built real solutions to become highly skillful.",
      tag: "Year 4",
    },
    {
      title: "Live projects & support",
      desc: "5+ live builds, hosting & deployment, 24/7 support, affordable pricing.",
      tag: "Today",
    },
  ];

  const bullets = [
    { color: "bg-green-400", text: "MERN & Java Full‑Stack" },
    { color: "bg-blue-400", text: "MySQL & MS SQL" },
    { color: "bg-purple-400", text: "Flutter & React Native" },
    { color: "bg-pink-400", text: "Hosting, Deployment & Docs" },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story + Stats */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Journey...!
              </span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are two friends turned co‑founders and directors from the same B.Tech (CS) batch, determined since first year to build a startup that serves  communities through real problem‑solving. 
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              From the beginning, we explored the needs of local communities and small businesses, listening to their challenges and mapping them to practical digital solutions. 
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              By second year, we doubled down on full‑stack skills: MERN, Java full stack, MySQL, MS SQL, and cross‑platform app development with Flutter and React Native. 
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              By fourth year, we had built dozens of projects that sharpened every layer—frontend, backend, databases, APIs, hosting, and deployment. 
            </p>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                "To build dependable, affordable technology that helps small and growing businesses go digital with confidence—backed by responsive 24/7 support."
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {typeof s.number === "number" && s.animate ? (
                      <AnimatedCounter to={s.number} suffix={s.suffix} />
                    ) : (
                      <>
                        {s.number}
                        {s.suffix}
                      </>
                    )}
                  </div>
                  <div className="text-gray-600 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive cards + bullets */}
          <div className="relative">
            {/* Soft animated blobs */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-8 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute bottom-0 -left-10 w-56 h-56 bg-pink-400/30 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8">
                {/* Milestones */}
                <div className="space-y-4 mb-6">
                  {milestones.map((m, i) => (
                    <div
                      key={i}
                      className="group relative p-4 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div
                        className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping"
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">
                            {m.title}
                          </div>
                          <div className="text-sm text-gray-600">{m.desc}</div>
                        </div>
                        <span className="text-xs text-purple-600 font-bold">
                          {m.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skill bullets with subtle pulse */}
                <div className="space-y-4">
                  {bullets.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-4 transition-transform duration-200 hover:translate-x-1"
                    >
                      <div
                        className={`w-4 h-4 ${b.color} rounded-full animate-pulse`}
                        style={{ animationDelay: `${i * 150}ms` }}
                      />
                      <span className="text-gray-700">{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* End Right */}
        </div>
      </div>
    </section>
  );
}
