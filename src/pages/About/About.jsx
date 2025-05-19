import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Automator, Problem-Solver, Innovator
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Python developer portrait"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-bold text-blue-400">Rajababu Kushwaha</span>,
                a passionate <span className="text-blue-300">Python Developer</span> focused on building
                clean APIs, automating workflows, and solving complex backend challenges.
              </p>

              <p className="text-white">
                I specialize in modern Python frameworks like <strong>Flask</strong> and <strong>FastAPI</strong>,
                containerized environments with <strong>Docker</strong>, and cloud integration via <strong>AWS</strong>.
                My goal is to create scalable backend systems that are fast, secure, and reliable.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and builder who believes in the power of code to automate and simplify.
                    From scripting cron jobs to designing robust REST APIs, I strive to write Pythonic code
                    that’s efficient, readable, and impactful.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Rajababu Kushwaha, Python Enthusiast
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-mono text-sm">
                        {'>>>'} import rajababu
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
