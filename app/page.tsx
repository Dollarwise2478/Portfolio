import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            David Uwaga
          </h1>

          <p className="mt-1 text-sm font-medium text-blue-500">
            ACIP · HRPL
          </p>
        </div>

        <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a
            href="#about"
            className="transition hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition hover:text-white"
          >
            Skills
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

        <a
          href="#contact"
          className="rounded-full border border-zinc-700 px-5 py-2 text-sm transition hover:border-blue-500 hover:text-blue-400"
        >
          Let's Talk
        </a>
      </nav>


      {/* ================= HERO ================= */}
      <section className="mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-20">
        <div className="max-w-4xl">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Human Resources Professional
          </p>

          <h2 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Building better
            <span className="block text-zinc-500">
              people and HR systems.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            I am David Uwaga, an HR professional focused on people management,
            HR analytics, performance management, HR technology, employee
            engagement and process improvement. I combine HR expertise with
            data-driven thinking to create practical solutions that improve
            both employee experience and organisational effectiveness.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View My Work
            </a>

            <a
              href="/David-Uwaga-ACIPM-HRPL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500"
            >
              View CV
            </a>

            <a
              href="/David-Uwaga-ACIPM-HRPL.pdf"
              download
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-400"
            >
              Download CV
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-zinc-500">
            <span>HR Management</span>
            <span>People Analytics</span>
            <span>Performance Management</span>
            <span>HR Technology</span>
            <span>Employee Engagement</span>
          </div>

        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="border-t border-zinc-900"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            HR professional focused on people, data and impact.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
            My approach to Human Resources goes beyond administrative
            processes. I focus on building structured HR systems, improving
            employee experience, supporting management decision-making and
            using data to identify opportunities for improvement.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-400">
            My experience covers employee and salary management, recruitment,
            onboarding, performance appraisal, HR policies, attendance and
            leave management, employee communication, training and HR
            analytics.
          </p>

        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="bg-zinc-900/40"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Core Competencies
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Areas I specialise in
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "HR Management",
              "People Analytics",
              "Performance Management",
              "Employee Relations",
              "Recruitment & Selection",
              "HR Policies & Governance",
              "Learning & Development",
              "HR Technology",
              "Payroll & Salary Administration",
              "Employee Engagement",
              "Workforce Administration",
              "Process Improvement",
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


      {/* ================= PROJECTS ================= */}
      <section id="projects">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Selected Work
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Projects & HR Initiatives
          </h2>

          <p className="mt-5 max-w-3xl text-zinc-400">
            A selection of HR projects demonstrating my approach to people
            analytics, performance management, HR technology, employee
            communication, organisational design and process improvement.
          </p>


          <div className="mt-12 grid gap-8 md:grid-cols-2">


            {/* ================= PROJECT 01 ================= */}
            <ProjectCard
              image="/HR Analytics Dashboard.png"
              number="01"
              title="HR Analytics Dashboard"
              category="People Analytics"
              description="An HR analytics dashboard developed to transform workforce and recruitment data into meaningful insights covering employee demographics, departments, positions, salaries and recruitment trends."
              technologies="Excel · PivotTables · Charts · Slicers · HR Analytics"
              link="#"
            />


            {/* ================= PROJECT 02 ================= */}
            <ProjectCard
              number="02"
              title="Performance Appraisal Framework"
              category="Performance Management"
              description="A structured appraisal and scoring framework designed to improve consistency, transparency and accuracy in employee performance evaluation. The framework supports objective assessment of core duties, targets and performance requirements."
              technologies="Excel · Performance Management · Scoring Framework"
              link="#"
            />


            {/* ================= PROJECT 03 ================= */}
            <ProjectCard
              image="/BrightHR.png"
              number="03"
              title="HR Digital Transformation"
              category="HR Technology"
              description="A digital HR process improvement initiative focused on reducing manual administration and improving attendance, leave management and employee record management through the effective use of HR technology."
              technologies="BrightHR · HR Systems · Process Improvement"
              link="#"
            />


            {/* ================= PROJECT 04 ================= */}
            <ProjectCard
              number="04"
              title="HR Policies & Governance"
              category="HR Governance"
              description="Development and review of HR policies, procedures and SOPs designed to strengthen consistency, accountability, compliance and employee understanding across key areas of the employee lifecycle."
              technologies="Policy Development · SOPs · Governance · Compliance"
              link="#"
            />


            {/* ================= PROJECT 05 ================= */}
            <ProjectCard
              number="05"
              title="HR Corner & Employee Communication"
              category="Employee Engagement"
              description="A structured internal HR communication initiative designed to educate employees on workplace policies, procedures, professional behaviour and important HR practices in a simple and engaging format."
              technologies="HR Communication · Employee Engagement · HR Education"
              link="#"
            />


            {/* ================= PROJECT 06 ================= */}
            <ProjectCard
              number="06"
              title="Onboarding & Training Programme"
              category="Learning & Development"
              description="A structured onboarding and training approach designed to support new employees through their transition, development and integration into the organisation."
              technologies="Onboarding · Training · Employee Development"
              link="#"
            />


            {/* ================= PROJECT 07 ================= */}
            <ProjectCard
              image="/Newsletter.png"
              number="07"
              title="Internal Newsletter"
              category="Employee Communication"
              description="An internal company newsletter initiative designed to improve employee communication, strengthen engagement and present organisational updates in a professional and visually engaging format."
              technologies="Internal Communication · Employee Engagement · Content Design"
              link="#"
            />


            {/* ================= PROJECT 08 ================= */}
            <ProjectCard
              image="/Organogram Design.png"
              number="08"
              title="Organisational Structure & Organogram Design"
              category="Organisation Design"
              description="A professional organisational structure visualisation designed to communicate reporting relationships, management hierarchy and organisational roles clearly and effectively."
              technologies="Organisation Design · Organisational Structure · Visual Communication"
              link="#"
            />

          </div>
        </div>
      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="border-t border-zinc-900 bg-zinc-900/30">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Professional Focus
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Creating HR solutions that support business objectives.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <InfoCard
              title="People Management"
              description="Supporting employees throughout the employee lifecycle while maintaining effective HR processes, communication and employee relations."
            />

            <InfoCard
              title="Data-Driven HR"
              description="Using HR data, dashboards and reporting to provide meaningful insights that support better workforce and management decisions."
            />

            <InfoCard
              title="HR Process Improvement"
              description="Identifying gaps in existing HR processes and developing practical systems, policies and technology-driven solutions."
            />

          </div>

        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="border-t border-zinc-900"
      >

        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Let's build better HR solutions together.
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            I am open to HR opportunities, collaborations, consulting
            engagements and conversations around people management,
            HR analytics and organisational effectiveness.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="mailto:your@email.com"
              className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              Get In Touch
            </a>

            <a
              href="/David-Uwaga-ACIPM-HRPL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-400"
            >
              View CV
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-zinc-900">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-white">
              David Uwaga
            </p>

            <p className="mt-1 text-blue-500">
              ACIP · HRPL
            </p>
          </div>

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
              href="/David-Uwaga-ACIPM-HRPL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              CV
            </a>

          </div>

          <p>
            © 2026 David Uwaga. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}


/* ========================================================= */
/* PROJECT CARD                                               */
/* ========================================================= */

function ProjectCard({
  image,
  number,
  title,
  category,
  description,
  technologies,
  link,
}: {
  image?: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string;
  link: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40">

      {/* IMAGE */}
      {image ? (
        <div className="relative h-64 w-full overflow-hidden border-b border-zinc-800 bg-zinc-950">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

        </div>
      ) : (
        <div className="flex h-40 items-center justify-center border-b border-zinc-800 bg-zinc-950">

          <div className="text-center">

            <p className="text-4xl font-bold text-zinc-800">
              {number}
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-600">
              HR Project
            </p>

          </div>

        </div>
      )}


      {/* CONTENT */}
      <div className="p-7">

        <div className="flex items-start justify-between gap-4">

          <div>

            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-blue-500">
              {category}
            </p>

            <h3 className="text-2xl font-semibold text-white">
              {title}
            </h3>

          </div>

          <span className="text-sm font-medium text-zinc-600">
            {number}
          </span>

        </div>


        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>


        <p className="mt-6 text-sm leading-6 text-blue-400">
          {technologies}
        </p>


        {link !== "#" && (
          <a
            href={link}
            className="mt-6 inline-block text-sm font-medium text-white transition hover:text-blue-400"
          >
            View Project →
          </a>
        )}

      </div>

    </div>
  );
}


/* ========================================================= */
/* INFORMATION CARD                                           */
/* ========================================================= */

function InfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition hover:border-blue-500/40">

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>

    </div>
  );
}
