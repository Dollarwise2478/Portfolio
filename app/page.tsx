export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-xl font-bold tracking-tight">
          <span className="text-blue-500">D</span>avid Uwaga
        </div>

        <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#impact" className="transition hover:text-white">
            Impact
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#expertise" className="transition hover:text-white">
            Expertise
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-zinc-700 px-5 py-2 text-sm transition hover:border-blue-500 hover:text-blue-400"
        >
          Let's Connect
        </a>
      </nav>

      {/* HERO */}
      <section className="mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-20">
        <div className="grid w-full gap-16 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          
          {/* HERO TEXT */}
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
              Human Resources • People • Operations
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Building better
              <span className="block text-zinc-500">
                workplaces through people,
              </span>
              processes & innovation.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              I am David Uwaga, an HR professional focused on improving
              employee experiences, strengthening HR operations, developing
              effective people processes, and using technology and analytics
              to solve workplace challenges.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-600 px-7 py-3 font-medium transition hover:bg-blue-500"
              >
                Explore My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-zinc-700 px-7 py-3 font-medium transition hover:border-zinc-500"
              >
                Let's Connect
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-zinc-500">
              <span>HR Operations</span>
              <span>People Management</span>
              <span>HR Analytics</span>
              <span>HR Technology</span>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="hidden justify-center md:flex">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border border-blue-500/20 bg-blue-500/5" />

              <div className="relative h-[480px] w-[370px] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
                <img
                  src="/profile.jpg"
                  alt="David Uwaga - Human Resources Professional"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL STATEMENT */}
      <section className="border-y border-zinc-900 bg-zinc-900/40">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-2xl font-medium leading-relaxed text-zinc-200 sm:text-3xl">
            "I believe that great HR is not measured by the policies we write,
            but by the positive impact we create through people, processes,
            and purposeful innovation."
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                HR with a practical and business-focused mindset.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-zinc-400">
              <p>
                I am a Human Resources professional with experience across HR
                operations, employee relations, recruitment, performance
                management, policy development, employee engagement and
                workplace administration.
              </p>

              <p>
                My approach combines people-focused HR practice with
                technology, data and process improvement. I look for
                opportunities to simplify processes, improve accountability,
                strengthen employee experiences and provide management with
                better information for decision-making.
              </p>

              <p>
                This portfolio showcases selected projects and initiatives
                that demonstrate how I approach HR challenges and translate
                them into practical, measurable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            My Impact
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            What I bring to HR.
          </h2>

          <p className="mt-5 max-w-2xl text-zinc-400">
            Selected areas where I have contributed to improving people,
            processes, systems and organisational effectiveness.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "HR Digital Transformation",
                text: "Led initiatives to improve HR operations through digital workflows, HR systems and process automation.",
              },
              {
                number: "02",
                title: "HR Policies & Governance",
                text: "Developed and reviewed HR policies, SOPs and governance frameworks to promote consistency and accountability.",
              },
              {
                number: "03",
                title: "Performance Management",
                text: "Improved appraisal processes through structured scoring frameworks, performance tracking and automation initiatives.",
              },
              {
                number: "04",
                title: "Internal Communication",
                text: "Redesigned HR communication through professional newsletters and employee-focused HR Corner initiatives.",
              },
              {
                number: "05",
                title: "HR Technology",
                text: "Improved HR administration through tools such as BrightHR, digital workflows and attendance management systems.",
              },
              {
                number: "06",
                title: "HR Analytics",
                text: "Developed HR dashboards and reports to support workforce analysis and management decision-making.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-blue-500/40"
              >
                <span className="text-sm font-semibold text-blue-500">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
<section id="projects">
  <div className="mx-auto max-w-7xl px-6 py-24">
    <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
      Selected Work
    </p>

    <h2 className="text-3xl font-bold sm:text-4xl">
      Projects & HR Initiatives
    </h2>

    <p className="mt-5 max-w-2xl text-zinc-400">
      A selection of HR projects demonstrating my approach to people
      analytics, process improvement, HR technology and organisational
      effectiveness.
    </p>

    <div className="mt-12 grid gap-8 md:grid-cols-2">

      <ProjectCard
        image="/projects/hr-analytics-dashboard.png"
        number="01"
        title="HR Analytics Dashboard"
        category="People Analytics"
        description="An Excel-based HR analytics dashboard developed to transform workforce and recruitment data into meaningful insights for better HR decision-making."
        technologies="Microsoft Excel · PivotTables · Charts · Slicers · HR Analytics"
        link="/projects/hr-analytics-dashboard"
      />

      <ProjectCard
        image="/projects/appraisal-framework.png"
        number="02"
        title="Performance Appraisal Framework"
        category="Performance Management"
        description="A structured appraisal and scoring framework designed to improve consistency, transparency and accuracy in employee performance evaluation."
        technologies="Excel · Performance Management · Scoring Framework"
        link="/projects/performance-appraisal"
      />

      <ProjectCard
        image="/projects/hr-digital-transformation.png"
        number="03"
        title="HR Digital Transformation"
        category="HR Technology"
        description="A process improvement initiative focused on reducing manual HR administration and improving attendance, leave and employee record management."
        technologies="BrightHR · HR Systems · Process Improvement"
        link="/projects/hr-digital-transformation"
      />

      <ProjectCard
        image="/projects/hr-policies.png"
        number="04"
        title="HR Policies & Governance"
        category="HR Governance"
        description="Development and review of HR policies, procedures and SOPs designed to strengthen consistency, accountability and employee understanding."
        technologies="Policy Development · SOPs · Governance"
        link="/projects/hr-policies"
      />

      <ProjectCard
        image="/projects/hr-corner.png"
        number="05"
        title="HR Corner & Employee Communication"
        category="Employee Engagement"
        description="A structured internal HR communication initiative designed to educate employees on workplace policies, procedures and important HR practices."
        technologies="HR Communication · Employee Engagement"
        link="/projects/hr-corner"
      />

      <ProjectCard
        image="/projects/onboarding-training.png"
        number="06"
        title="Onboarding & Training Programme"
        category="Learning & Development"
        description="A structured onboarding and training approach designed to support new employees through their transition, development and integration into the organisation."
        technologies="Onboarding · Training · Employee Development"
        link="/projects/onboarding-training"
      />

    </div>
  </div>
</section>
      {/* EXPERTISE */}
      <section id="expertise" className="bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Areas of Expertise
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Where people and business meet.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "HR Operations",
              "Employee Relations",
              "Performance Management",
              "HR Analytics",
              "Policy Development",
              "Recruitment & Selection",
              "People Management",
              "Process Improvement",
              "HR Technology",
              "Employee Engagement",
              "Workforce Administration",
              "Training & Development",
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

      {/* EXPERIENCE */}
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Professional Focus
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Turning HR challenges into practical solutions.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="border-l border-blue-500 pl-6">
              <h3 className="text-xl font-semibold">People</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Building employee experiences, supporting managers and
                strengthening workplace relationships.
              </p>
            </div>

            <div className="border-l border-blue-500 pl-6">
              <h3 className="text-xl font-semibold">Processes</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Creating structured systems, policies and workflows that make
                HR operations more consistent and efficient.
              </p>
            </div>

            <div className="border-l border-blue-500 pl-6">
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Using technology, analytics and automation to improve how HR
                teams work and make decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Let's Connect
          </p>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Let's build better workplaces together.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I am open to conversations around HR leadership, people
            operations, HR transformation, analytics and opportunities where
            I can create meaningful organisational impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:your@email.com"
              className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-7 py-3 font-medium transition hover:border-zinc-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 David Uwaga. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProjectCard({
  image,
  number,
  title,
  category,
  description,
  technologies,
  link,
}: {
  image: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string;
  link: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition hover:-translate-y-1 hover:border-blue-500/40">

      {/* PROJECT IMAGE */}
      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt={`${title} project`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {number}
        </span>
      </div>

      {/* PROJECT CONTENT */}
      <div className="p-7">

        <p className="text-xs font-medium uppercase tracking-wider text-blue-500">
          {category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>

        <p className="mt-5 text-sm leading-6 text-blue-400">
          {technologies}
        </p>

        <a
          href={link}
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:text-blue-400"
        >
          View Case Study
          <span>→</span>
        </a>

      </div>
    </article>
  );
}
