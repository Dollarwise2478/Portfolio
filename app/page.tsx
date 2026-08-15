import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xl font-bold">
            <span className="text-blue-500">David</span> Uwaga.
          </div>

          <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#expertise" className="transition hover:text-white">
              Expertise
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
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto flex min-h-[85vh] max-w-6xl items-center px-6 py-24">
        <div className="max-w-4xl">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Human Resources | People Analytics | HR Operations
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Building better
            <span className="block text-zinc-500">
              people & HR systems.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            I'm David Uwaga, an HR professional focused on building practical
            people solutions through HR operations, workforce analytics,
            process improvement, employee experience, and technology.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
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

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-zinc-500">
            <span>HR Operations</span>
            <span>People Analytics</span>
            <span>HR Technology</span>
            <span>Performance Management</span>
            <span>Policy Development</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            HR with a practical, data-driven approach.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
            I work at the intersection of people, processes, data and
            technology. My approach to HR is focused on creating systems that
            improve employee experience, strengthen accountability, simplify
            HR administration and provide management with better information
            for decision-making.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-400">
            My experience covers HR operations, employee management,
            recruitment, performance management, policy development,
            attendance and leave administration, HR analytics and process
            improvement.
          </p>

        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Core Expertise
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Areas I create value
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "HR Operations",
                text: "Employee records, attendance, leave management, payroll support, onboarding and HR administration.",
              },
              {
                title: "People Analytics",
                text: "Using workforce data to identify trends and support evidence-based HR decisions.",
              },
              {
                title: "Performance Management",
                text: "Performance appraisal systems, KPI tracking, scoring frameworks and performance reporting.",
              },
              {
                title: "HR Process Improvement",
                text: "Identifying administrative inefficiencies and designing simpler, more effective HR processes.",
              },
              {
                title: "Policy Development",
                text: "Developing practical HR policies, procedures, guidelines and employee communication materials.",
              },
              {
                title: "HR Technology",
                text: "Leveraging HR platforms, digital tools and automation to improve HR service delivery.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:-translate-y-1 hover:border-blue-500/50"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Selected Projects
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            HR projects & solutions
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
            A selection of HR projects demonstrating my approach to analytics,
            process improvement, technology adoption, policy development and
            employee communication.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* PROJECT 1 */}
            <ProjectCard
              number="01"
              category="People Analytics"
              title="HR Recruitment Analytics Dashboard"
              description="Developed an HR analytics dashboard to transform workforce data into meaningful insights covering employee demographics, departments, positions, salaries, recruitment trends and workforce composition."
              impact="The dashboard provides a visual and structured way to analyse workforce information and support data-driven HR decision-making."
              technologies="Power BI · Excel · Data Analytics · HR Metrics"
              image="/HR-Recruitment-Darshboard.png"
            />

            {/* PROJECT 2 */}
            <ProjectCard
              number="02"
              category="HR Process Improvement"
              title="HR Process Improvement & Automation"
              description="Designed a visual framework showing how HR technology can improve key processes including job application screening, employee onboarding and offboarding, payroll processes, leave management, reporting and performance management."
              impact="The project focuses on reducing manual administrative work, improving process consistency and creating a more efficient HR service delivery model."
              technologies="HR Technology · Process Improvement · Automation · HR Operations"
              image="/HR-Process-Improvement.png"
            />

            {/* PROJECT 3 */}
            <ProjectCard
              number="03"
              category="HR Technology"
              title="HR Technology & Attendance Management"
              description="Worked with digital HR systems to support employee attendance, leave management and workforce administration. This included the use of BrightHR and Blip for clock-in management and attendance monitoring."
              impact="Improved visibility of employee attendance records and supported more structured HR administration and attendance reporting."
              technologies="BrightHR · Blip · Attendance Management · HR Operations"
              image="/BrightHr .png"
            />

            {/* PROJECT 4 */}
            <ProjectCard
              number="04"
              category="Policy Development"
              title="HR Policy Development"
              description="Developed and reviewed HR policies and employee guidelines covering areas such as attendance management, leave administration, maternity leave, dress code, disciplinary procedures and other workplace practices."
              impact="The objective was to establish clear expectations, improve consistency in HR administration and provide employees and managers with practical workplace guidelines."
              technologies="HR Policy · Employee Relations · Compliance · HR Operations"
              image="/HR-Policy-Development.jpg"
            />

            {/* PROJECT 5 */}
            <ProjectCard
              number="05"
              category="Organisation Design"
              title="Organisational Structure & Organogram"
              description="Developed organisational structure documentation to clearly represent reporting relationships, management levels and functional responsibilities within the organisation."
              impact="Created a clearer visual representation of organisational reporting lines and supported better understanding of the company's structure."
              technologies="Organisation Design · Workforce Structure · HR Documentation"
              image="/Organogram-Design.png"
            />

            {/* PROJECT 6 */}
            <ProjectCard
              number="06"
              category="Internal Communication"
              title="Internal Newsletter Redesign"
              description="Redesigned the company's internal newsletter to improve its visual presentation, structure and employee engagement. The project involved transforming a basic communication format into a more professional internal publication."
              impact="Created a more engaging and structured communication tool for sharing company updates, HR information, employee recognition and organisational activities."
              technologies="Internal Communication · Employee Engagement · Content Design · HR Communication"
              image="/Old&New Newsletter-Design-Comparison.png"
            />

          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-t border-zinc-900 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            My Approach
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            From HR problems to practical solutions.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">

            {[
              ["01", "Identify", "Understand the people, process or business challenge."],
              ["02", "Analyse", "Use data, employee feedback and process information to understand the issue."],
              ["03", "Design", "Develop practical HR solutions, systems or processes."],
              ["04", "Improve", "Measure outcomes and continuously improve the solution."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-zinc-800 p-6"
              >
                <span className="text-sm text-blue-500">{number}</span>

                <h3 className="mt-4 text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Let's connect and create better people solutions.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I am open to HR opportunities, people strategy conversations,
            collaboration and projects focused on improving the employee
            experience and HR operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="mailto:your@email.com"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-400"
            >
              LinkedIn
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900">

        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 David Uwaga. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"
              className="transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>

        </div>

      </footer>

    </main>
  );
}


/* PROJECT CARD COMPONENT */

function ProjectCard({
  number,
  category,
  title,
  description,
  impact,
  technologies,
  image,
}: {
  number: string;
  category: string;
  title: string;
  description: string;
  impact: string;
  technologies: string;
  image: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">

      {/* IMAGE */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      </div>

      {/* CONTENT */}
      <div className="p-7">

        <div className="flex items-center justify-between">

          <span className="text-sm font-medium text-blue-500">
            {number}
          </span>

          <span className="text-xs uppercase tracking-widest text-zinc-500">
            {category}
          </span>

        </div>

        <h3 className="mt-5 text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>

        <div className="mt-5 border-l-2 border-blue-500 pl-4">
          <p className="text-sm leading-6 text-zinc-300">
            <span className="font-semibold text-white">
              Value:
            </span>{" "}
            {impact}
          </p>
        </div>

        <p className="mt-6 text-sm text-blue-400">
          {technologies}
        </p>

      </div>

    </article>
  );
}
