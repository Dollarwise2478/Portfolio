export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-xl font-bold">
          <span className="text-blue-500">R</span>ichard.
        </div>

        <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-zinc-700 px-5 py-2 text-sm transition hover:border-blue-500 hover:text-blue-400"
        >
          Let's Talk
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Building digital
            <span className="block text-zinc-500">experiences that work.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I'm Richard, a Full-Stack TypeScript Developer focused on building
            modern, scalable web applications with Next.js, Node.js, PostgreSQL,
            and cloud technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex gap-6 text-sm text-zinc-500">
            <span>Next.js</span>
            <span>Node.js</span>
            <span>TypeScript</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Turning ideas into useful products.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            I enjoy solving real-world problems with software. From designing
            APIs and databases to building responsive interfaces and deploying
            applications to the cloud, I work across the full development stack.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Skills
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Technologies I work with
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "TypeScript",
              "JavaScript",
              "Next.js",
              "React",
              "Node.js",
              "Express.js",
              "PostgreSQL",
              "MongoDB",
              "Supabase",
              "Redis",
              "Docker",
              "Git & GitHub",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-zinc-300 transition hover:border-blue-500/50 hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Selected Work
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Projects I've built
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="TryBet"
              description="A football prediction platform with prediction requests, leaderboards, rewards, automated match resolution, and a virtual wallet system."
              technologies="Next.js · TypeScript · Express · PostgreSQL · Supabase"
              link="https://trybet.com.ng"
            />

            <ProjectCard
              title="SafeBoard"
              description="A transport safety platform designed to help improve accountability and safety within the transportation ecosystem."
              technologies="Next.js · Node.js · Express · Supabase"
              link="https://safeboard.com.ng"
            />

            <ProjectCard
              title="CrudApp"
              description="A full-stack management dashboard for creating, updating, viewing, and managing records through a clean web interface."
              technologies="Next.js · TypeScript · MongoDB"
              link="#"
            />

            <ProjectCard
              title="More Projects"
              description="Explore more of my work, experiments, and open-source projects on GitHub."
              technologies="GitHub · TypeScript · JavaScript"
              link="https://github.com/Chekwasy"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Contact
          </p>

          <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">
            Have a project in mind?
          </h2>

          <p className="mt-5 max-w-xl text-lg text-zinc-400">
            I'm always open to discussing new projects, opportunities, and
            interesting ideas.
          </p>

          <a
            href="mailto:your@email.com"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Richard. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="https://github.com/Chekwasy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a href="#" className="transition hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  technologies,
  link,
}: {
  title: string;
  description: string;
  technologies: string;
  link: string;
}) {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition hover:-translate-y-1 hover:border-blue-500/40">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold">{title}</h3>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 transition group-hover:text-blue-400"
        >
          ↗
        </a>
      </div>

      <p className="mt-4 leading-7 text-zinc-400">{description}</p>

      <p className="mt-6 text-sm text-blue-400">{technologies}</p>
    </div>
  );
}
