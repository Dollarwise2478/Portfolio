export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

        {/* NAME + PROFESSIONAL CREDENTIALS */}
        <div>
          <div className="text-xl font-bold tracking-tight text-white">
            David Uwaga
          </div>

          <div className="mt-1 text-xs font-medium tracking-wider text-blue-500">
            ACIPM · HRPL
          </div>
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
<section id="projects" className="bg-zinc-950">
  <div className="mx-auto max-w-7xl px-6 py-24">

    <div className="mb-12">
      <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
        Selected Work
      </p>

      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        Projects & HR Initiatives
      </h2>

      <p className="mt-5 max-w-3xl text-zinc-400 leading-relaxed">
        A selection of HR projects demonstrating my experience in people
        analytics, performance management, HR technology, process improvement,
        employee communication and organisational effectiveness.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">

      {/* PROJECT 01 */}
      <ProjectCard
        image="/hr-analytics-dashboard.png"
        number="01"
        title="HR Analytics Dashboard"
        category="People Analytics"
        description="Developed an HR analytics dashboard to transform workforce and recruitment data into meaningful insights covering employee demographics, departments, positions, salaries and recruitment trends."
        technologies="Power BI · Excel · Data Analytics · HR Metrics"
        link="/projects/hr-analytics-dashboard"
      />

      {/* PROJECT 02 */}
      <ProjectCard
        image="/performance-appraisal.png"
        number="02"
        title="Performance Appraisal Framework"
        category="Performance Management"
        description="Developed a structured performance appraisal and scoring framework designed to improve consistency, transparency and accuracy in employee performance evaluation and support evidence-based performance decisions."
        technologies="Excel · Performance Management · Scoring Framework · HR Analytics"
        link="/projects/performance-appraisal"
      />

      {/* PROJECT 03 */}
      <ProjectCard
        image="/hr-automation.png"
        number="03"
        title="HR Process Improvement & Digital Transformation"
        category="HR Technology"
        description="Designed and implemented process improvement initiatives aimed at reducing manual HR administration and improving the management of attendance, leave, employee records and other core HR processes."
        technologies="BrightHR · HR Systems · Process Improvement · Automation"
        link="/projects/hr-digital-transformation"
      />

      {/* PROJECT 04 */}
      <ProjectCard
        image="/hr-policy-workspace.png"
        number="04"
        title="HR Policies & Governance"
        category="HR Governance"
        description="Developed and reviewed HR policies, procedures and standard operating processes to strengthen consistency, accountability, compliance and employee understanding across the organisation."
        technologies="Policy Development · SOPs · HR Governance · Compliance"
        link="/projects/hr-policies"
      />

      {/* PROJECT 05 */}
      <ProjectCard
        image="/hr-corner-newsletter.png"
        number="05"
        title="HR Corner & Employee Communication"
        category="Employee Engagement"
        description="Created and developed the HR Corner initiative as a structured internal communication platform for educating employees on workplace policies, HR practices, professional conduct and organisational updates."
        technologies="HR Communication · Employee Engagement · Internal Communication"
        link="/projects/hr-corner"
      />

      {/* PROJECT 06 */}
      <ProjectCard
        image="/organisational-structure.png"
        number="06"
        title="Organisational Structure & HR Documentation"
        category="Organisational Effectiveness"
        description="Supported the development and presentation of organisational structures and HR documentation to improve clarity around reporting relationships, responsibilities and organisational effectiveness."
        technologies="Organisation Design · HR Documentation · Visual Communication"
        link="/projects/organisational-structure"
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


      {/* PROFESSIONAL FOCUS */}
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

              <h3 className="text-xl font-semibold">
                People
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Building employee experiences, supporting managers and
                strengthening workplace relationships.
              </p>

            </div>


            <div className="border-l border-blue-500 pl-6">

              <h3 className="text-xl font-semibold">
                Processes
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Creating structured systems, policies and workflows that make
                HR operations more consistent and efficient.
              </p>

            </div>


            <div className="border-l border-blue-500 pl-6">

              <h3 className="text-xl font-semibold">
                Innovation
              </h3>

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

          <p>
            © 2026 David Uwaga. All rights reserved.
          </p>


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


/* =========================================================
   PROJECT CARD
   ========================================================= */

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
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

        {/* PROJECT NUMBER */}
        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {number}
        </div>

      </div>


      {/* PROJECT CONTENT */}
      <div className="p-8">

        <div className="flex items-start justify-between gap-4">

          <div>

            <p className="text-xs font-medium uppercase tracking-wider text-blue-500">
              {category}
            </p>

          </div>

          <a
            href={link}
            className="text-xl text-zinc-600 transition group-hover:text-blue-400"
            aria-label={`View ${title}`}
          >
            ↗
          </a>

        </div>


        <h3 className="mt-5 text-2xl font-semibold">
          {title}
        </h3>


        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>


        <p className="mt-6 text-sm leading-6 text-blue-400">
          {technologies}
        </p>

      </div>

    </article>
  );
}
