"use client";

import Image from "next/image";
import { useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  image: string;
  overview: string;
  challenge?: string;
  role?: string[];
  solution?: string;
  contribution?: string[];
  insights?: string[];
  impact?: string[];
  tools?: string[];
  competencies?: string[];
  privacy?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "HR Analytics Dashboard",
    category: "People Analytics",
    image: "/hr-analytics-dashboard.png",

    overview:
      "An interactive HR Recruitment Analytics Dashboard developed after my Data Analytics training to demonstrate how HR data can be transformed into meaningful insights for workforce and recruitment decision-making.",

    challenge:
      "Recruitment and workforce information was often scattered across spreadsheets, making it difficult to analyse hiring trends, workforce demographics, recruitment sources, salary distribution and departmental performance efficiently.",

    role: [
      "Designed and developed the HR analytics dashboard using Microsoft Excel.",
      "Structured and transformed raw recruitment data for reporting.",
      "Created interactive PivotTables, PivotCharts, slicers and dynamic visualisations.",
      "Applied advanced Excel formulas to improve data analysis and reporting.",
    ],

    solution:
      "I consolidated recruitment and workforce data into a single interactive reporting interface, allowing users to analyse key HR metrics through dynamic charts, filters and visualisations.",

    insights: [
      "311 employees represented across 31 job positions.",
      "Employees distributed across 6 departments.",
      "Average employee salary of approximately $68.81K.",
      "2011 recorded the highest number of employee hires.",
      "Workforce demographics can be analysed by gender, marital status and age at recruitment.",
    ],

    impact: [
      "Improved visibility into recruitment and workforce metrics.",
      "Reduced the time required to prepare HR reports.",
      "Enabled faster, data-driven workforce and recruitment analysis.",
      "Demonstrated the practical application of Excel for HR analytics.",
    ],

    tools: [
      "Microsoft Excel",
      "PivotTables & PivotCharts",
      "Power Query",
      "XLOOKUP / INDEX-MATCH",
      "Dynamic Charts",
      "Slicers",
    ],

    competencies: [
      "HR Data Analytics",
      "Dashboard Design",
      "Data Visualisation",
      "Workforce Analysis",
      "Recruitment Analytics",
    ],
  },

  {
    number: "02",
    title: "Performance Appraisal Framework",
    category: "Performance Management",
    image: "/appraisal-framework.png",

    overview:
      "A structured performance management initiative focused on improving the consistency, efficiency and accuracy of the organisation's annual employee appraisal process.",

    challenge:
      "The appraisal process involved multiple forms, performance metrics and manual administrative activities, creating opportunities for inconsistencies and increasing the time required to complete appraisal cycles.",

    role: [
      "Coordinated annual employee appraisal cycles.",
      "Developed and refined appraisal forms and scoring frameworks.",
      "Reviewed performance metrics and appraisal criteria.",
      "Supported managers and UK Representatives during the appraisal process.",
    ],

    solution:
      "I strengthened the appraisal framework by improving the structure of performance forms, scoring criteria and administrative processes. I also introduced an AI-assisted approach to reduce repetitive manual work.",

    contribution: [
      "Implemented an AI-powered appraisal automation solution using Claude AI.",
      "Used AI to populate appraisal forms in a structured and standardised format.",
      "Improved consistency across completed appraisal forms.",
      "Reduced manual processing time and improved administrative productivity.",
      "Worked with IT on the implementation of digital HR forms.",
      "Designed a digital Employee ID Card Request Form for electronic submission of employee details and photographs.",
    ],

    impact: [
      "Reduced repetitive manual appraisal administration.",
      "Improved consistency and accuracy of appraisal documentation.",
      "Streamlined the end-to-end appraisal workflow.",
      "Improved the employee experience through digital HR forms.",
      "Enabled managers to focus more on meaningful performance discussions.",
    ],

    tools: [
      "Microsoft Excel",
      "Claude AI",
      "Digital HR Forms",
      "Performance Metrics",
      "HR Process Automation",
    ],

    competencies: [
      "Performance Management",
      "HR Analytics",
      "Process Automation",
      "HR Technology",
      "Digital Transformation",
    ],
  },

  {
    number: "03",
    title: "HR Digital Transformation",
    category: "HR Technology",
    image: "/brighthr.png",

    overview:
      "An HR technology implementation and optimisation initiative focused on improving attendance, leave administration, employee records and workforce reporting through BrightHR.",

    challenge:
      "HR operations relied on manual lateness reporting and multiple systems for leave and attendance management. This created administrative inefficiencies, limited workforce visibility and made HR reporting more time-consuming.",

    role: [
      "Identified the need for a more integrated HR management platform.",
      "Prepared the business case and supported leadership during implementation.",
      "Reviewed existing HR processes and system requirements.",
      "Validated employee records and leave configurations.",
      "Developed onboarding resources and trained employees on system usage.",
    ],

    solution:
      "I supported the implementation and optimisation of BrightHR as a central platform for attendance and leave management. During the implementation, I reviewed system configurations and reconciled employee records to ensure that the platform reflected the organisation's HR policies.",

    contribution: [
      "Identified inconsistencies between legacy leave records and BrightHR.",
      "Discovered that Annual Leave had been configured while Sickness Leave entitlements were missing.",
      "Analysed the resulting impact on sickness and emergency leave deductions.",
      "Created and tested the appropriate leave configurations.",
      "Reconciled affected employee records.",
      "Established a process for replicating the correct configuration across employees.",
      "Supported the transition from manual attendance monitoring to a structured digital process.",
    ],

    impact: [
      "Improved accuracy and integrity of employee leave records.",
      "Reduced manual reconciliation efforts.",
      "Improved confidence in HR reporting.",
      "Strengthened leave and attendance administration.",
      "Provided management with more reliable workforce information.",
    ],

    tools: [
      "BrightHR",
      "HRIS Administration",
      "Microsoft Excel",
      "Leave Management",
      "Attendance Management",
    ],

    competencies: [
      "HR Technology",
      "System Migration",
      "Data Reconciliation",
      "Root Cause Analysis",
      "Process Improvement",
      "HR Compliance",
    ],
  },

  {
    number: "04",
    title: "HR Policies & Governance",
    category: "HR Governance",
    image: "/hr-policies.png",

    overview:
      "A collection of HR policy development and governance initiatives designed to strengthen workplace standards, consistency, employee awareness and organisational compliance.",

    challenge:
      "As organisational requirements evolved, existing HR policies and procedures required continuous review and refinement to ensure that they remained practical, clear and aligned with business objectives.",

    role: [
      "Drafted, reviewed and refined HR policies and procedures.",
      "Worked with management to translate business requirements into practical HR guidelines.",
      "Reviewed and updated the Employee Handbook.",
      "Developed employee-facing guidance and HR communication materials.",
    ],

    contribution: [
      "Conflict of Interest Policy.",
      "Maternity Leave Policy.",
      "Examination Leave Policy.",
      "Employee Handbook refinements.",
      "Recruitment and hiring process updates.",
      "Attendance and leave-related guidelines.",
      "Other HR policies and operational procedures.",
    ],

    solution:
      "Developed and refined clear, practical HR policies that provide employees and management with consistent guidance while supporting organisational governance and compliance.",

    impact: [
      "Strengthened HR governance and compliance.",
      "Standardised workplace procedures and decision-making.",
      "Improved employee understanding of organisational expectations.",
      "Promoted fairness, consistency and transparency.",
      "Reduced ambiguity through clearly documented procedures.",
    ],

    tools: [
      "Microsoft Word",
      "HR Policy Frameworks",
      "Employee Handbook",
      "HR Documentation",
    ],

    competencies: [
      "Policy Development",
      "HR Governance",
      "Compliance",
      "Employee Relations",
      "HR Documentation",
    ],
  },

  {
    number: "05",
    title: "HR Corner & Employee Communication",
    category: "Employee Engagement",
    image: "/hr-corner.png",

    overview:
      "An internal HR communication initiative created to improve employee awareness and understanding of workplace policies, procedures and important HR practices.",

    challenge:
      "Employees require regular, clear and accessible communication to understand organisational policies, expectations and HR processes.",

    role: [
      "Developed HR Corner topics around relevant workplace issues.",
      "Translated HR policies into simple employee-friendly communication.",
      "Created educational content around HR procedures and compliance.",
      "Supported management communication through structured HR updates.",
    ],

    solution:
      "Introduced regular HR Corner communications covering policies, attendance, leave management, background verification, professional conduct, employee responsibilities and other workplace topics.",

    impact: [
      "Improved employee awareness of HR policies and procedures.",
      "Promoted accountability and compliance.",
      "Provided a consistent channel for HR education.",
      "Supported a more transparent employee experience.",
    ],

    tools: [
      "Microsoft PowerPoint",
      "Canva",
      "HR Communication",
      "Policy Documentation",
    ],

    competencies: [
      "Employee Communication",
      "Employee Engagement",
      "HR Sensitisation",
      "Internal Communication",
    ],
  },

  {
    number: "06",
    title: "Onboarding & Training Programme",
    category: "Learning & Development",
    image: "/onboarding-training.png",

    overview:
      "A structured onboarding and training initiative designed to improve the transition, integration and development of new employees.",

    challenge:
      "New employees require a coordinated introduction to the organisation, their roles, policies, systems and training requirements to become productive effectively.",

    role: [
      "Supported induction and orientation sessions.",
      "Coordinated onboarding activities and documentation.",
      "Worked with management and the training team to structure induction activities.",
      "Developed an onboarding and training timetable.",
      "Monitored training activities and completion.",
    ],

    solution:
      "Developed a structured onboarding and training framework that provides new employees with the information, documentation, training and guidance required during their transition into the organisation.",

    impact: [
      "Improved coordination between HR, management and the training team.",
      "Created a more consistent onboarding experience.",
      "Improved visibility of training activities and completion.",
      "Supported faster employee integration.",
    ],

    tools: [
      "Microsoft Excel",
      "Training Timetables",
      "HR Documentation",
      "Onboarding Frameworks",
    ],

    competencies: [
      "Onboarding",
      "Learning & Development",
      "Training Coordination",
      "Employee Integration",
    ],
  },

  {
    number: "07",
    title: "Internal Newsletter",
    category: "Internal Communication",
    image: "/newsletter.png",

    overview:
      "A visual communication transformation project that improved the design, consistency and professionalism of the organisation's internal newsletter.",

    challenge:
      "The previous newsletter was primarily produced using PowerPoint, which limited design flexibility and reduced opportunities for stronger visual engagement and branding.",

    role: [
      "Evaluated limitations in the existing newsletter design process.",
      "Introduced modern digital design approaches.",
      "Transitioned newsletter production from PowerPoint to CorelDRAW.",
      "Designed professional layouts, typography, cover pages and visual elements.",
      "Structured content to improve readability and navigation.",
    ],

    solution:
      "Developed a professionally branded newsletter template using CorelDRAW, creating a consistent visual platform for HR updates, management messages, employee recognition, onboarding updates, birthdays, events and company announcements.",

    impact: [
      "Improved the visual quality of internal communications.",
      "Strengthened consistency and corporate branding.",
      "Improved readability and accessibility.",
      "Created reusable templates that reduced future production time.",
      "Improved the presentation of HR and organisational communications.",
    ],

    tools: [
      "CorelDRAW",
      "Canva",
      "Freepik",
      "Corporate Branding Principles",
    ],

    competencies: [
      "Internal Communication",
      "Corporate Branding",
      "Graphic Design",
      "Visual Storytelling",
      "Employee Engagement",
      "Creative Problem Solving",
    ],
  },

  {
    number: "08",
    title: "Organisational Structure & Organogram Design",
    category: "Organisational Development",
    image: "/organogram-design.png",

    overview:
      "A multi-page organisational structure redesign project developed to provide employees and management with a clear, professional and accessible representation of reporting relationships.",

    challenge:
      "The existing organisational structure lacked an engaging and easily accessible visual format. The growing workforce also required a scalable solution capable of representing more than 100 employees while maintaining clarity.",

    role: [
      "Led the project team responsible for planning and designing the organogram.",
      "Collaborated with the HR Director and management.",
      "Coordinated the collection and verification of employee information.",
      "Directed the visual design process.",
      "Managed quality assurance before publication.",
    ],

    solution:
      "Developed a professionally designed, multi-page digital organisational chart incorporating employee names, photographs, job titles, departments and reporting relationships.",

    impact: [
      "Improved understanding of organisational reporting relationships.",
      "Enhanced the onboarding experience for new employees.",
      "Strengthened internal communication.",
      "Delivered a scalable structure representing more than 100 employees.",
      "Created an accessible organisational reference tool for employees and management.",
    ],

    tools: [
      "CorelDRAW",
      "Microsoft Excel",
      "Visual Communication Principles",
      "Information Design",
    ],

    competencies: [
      "Organisational Design",
      "Project Coordination",
      "HR Data Management",
      "Visual Communication",
      "Quality Assurance",
    ],

    privacy:
      "Employee names, photographs and company identifiers have been anonymised to protect organisational confidentiality while demonstrating the project's structure and design approach.",
  },

  {
    number: "09",
    title: "HR Process Improvement",
    category: "Operational Excellence",
    image: "/hr-process-improvement.png",

    overview:
      "A collection of HR process improvement initiatives focused on modernising administrative workflows, improving compliance and creating a more structured employee experience.",

    challenge:
      "Several HR activities involved manual processes that increased administrative workload, slowed reporting and created opportunities for inconsistencies.",

    role: [
      "Reviewed existing HR workflows and identified operational gaps.",
      "Implemented practical digital solutions.",
      "Improved leave and attendance processes.",
      "Strengthened onboarding and employee integration processes.",
    ],

    contribution: [
      "Optimised staff leave management and supported leave reconciliation.",
      "Improved attendance and lateness reporting through structured digital processes.",
      "Developed and refined HR protocols and operational guidelines.",
      "Strengthened the employee onboarding process.",
      "Developed a comprehensive onboarding and training timetable.",
    ],

    solution:
      "Applied process improvement and digital HR practices to reduce manual administration, improve reporting accuracy and create more consistent HR workflows.",

    impact: [
      "Improved HR operational efficiency.",
      "Reduced manual administrative effort.",
      "Improved compliance and reporting accuracy.",
      "Created more structured employee experiences.",
      "Improved coordination between HR, management and other departments.",
    ],

    tools: [
      "BrightHR",
      "Microsoft Excel",
      "HRIS",
      "Process Mapping",
      "Digital HR Forms",
    ],

    competencies: [
      "Process Improvement",
      "HR Operations",
      "Workflow Optimisation",
      "HR Technology",
      "Operational Excellence",
    ],
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="leading-tight">
            <div className="text-xl font-bold text-white">
              David Uwaga
            </div>

            <div className="mt-1 text-xs font-semibold tracking-wider text-blue-500">
              ACIPM · HRPL
            </div>
          </a>

          <div className="hidden gap-7 text-sm text-zinc-400 md:flex">
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
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-20">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            HR Professional · People Analytics · HR Technology
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            David Uwaga
            <span className="mt-3 block text-zinc-500">
              Transforming HR through people, data & technology.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            HR professional focused on people management, HR operations,
            people analytics, performance management, HR technology,
            organisational effectiveness and process improvement.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View My Work
            </a>

            <a
              href="/David-Uwaga-ACIPM-HRPL.pdf"
              download
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-400"
            >
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/chigaemezu-uwaga-acipm-hrpl-4091bb176"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-400"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-500">
            <span>HR Operations</span>
            <span>People Analytics</span>
            <span>Performance Management</span>
            <span>HR Technology</span>
            <span>Process Improvement</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            HR beyond administration.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
            I am an HR professional with experience across HR operations,
            employee relations, performance management, recruitment, HR
            technology, people analytics, policy development and organisational
            effectiveness. I enjoy identifying operational challenges and
            developing practical solutions that improve both employee
            experience and business performance.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-400">
            My approach combines HR knowledge with data, technology and process
            improvement to create more efficient, transparent and
            evidence-based HR practices.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Core Capabilities
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Areas of expertise
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "HR Operations",
              "People Analytics",
              "Performance Management",
              "Recruitment",
              "HR Technology",
              "Employee Relations",
              "Policy Development",
              "Process Improvement",
              "Learning & Development",
              "Workforce Planning",
              "HR Reporting",
              "Organisational Effectiveness",
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

      {/* PROJECTS */}
      <section id="projects">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Selected Work
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Projects & HR Initiatives
          </h2>

          <p className="mt-5 max-w-3xl text-zinc-400">
            A selection of HR projects demonstrating my experience in people
            analytics, HR technology, performance management, governance,
            communication and process improvement.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* CONTACT */}
      <section id="contact" className="border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Let's discuss people, data and better HR solutions.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            I am open to conversations around HR opportunities, people
            analytics, HR technology, organisational effectiveness and
            meaningful HR projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:your@email.com"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              Get In Touch
            </a>

            <a
              href="https://www.linkedin.com/in/chigaemezu-uwaga-acipm-hrpl-4091bb176"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-400"
            >
              Connect on LinkedIn ↗
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
              href="https://www.linkedin.com/in/chigaemezu-uwaga-acipm-hrpl-4091bb176"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* PROJECT CARD */

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 text-left transition hover:-translate-y-1 hover:border-blue-500/50"
    >
      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />

        <div className="absolute left-5 top-5 rounded-full bg-black/70 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
          {project.number}
        </div>

        <div className="absolute bottom-5 right-5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black opacity-0 transition group-hover:opacity-100">
          View Project ↗
        </div>
      </div>

      <div className="p-7">
        <p className="text-xs uppercase tracking-widest text-blue-500">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-zinc-400">
          {project.overview}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-400">
            Explore project
          </span>

          <span className="text-xl text-zinc-500 transition group-hover:text-blue-400">
            →
          </span>
        </div>
      </div>
    </button>
  );
}

/* PROJECT DETAILS */

function ProjectDetails({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">
        {/* HEADER */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/95 px-6 py-5 backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-500">
              Project {project.number}
            </p>

            <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-red-500 hover:text-white"
          >
            Close ✕
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative aspect-video w-full bg-zinc-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-12 px-6 py-10 sm:px-10">
          <DetailSection
            title="Project Overview"
            text={project.overview}
          />

          {project.challenge && (
            <DetailSection
              title="Business Challenge"
              text={project.challenge}
            />
          )}

          {project.role && (
            <BulletSection
              title="My Role"
              items={project.role}
            />
          )}

          {project.contribution && (
            <BulletSection
              title="My Contribution"
              items={project.contribution}
            />
          )}

          {project.solution && (
            <DetailSection
              title="Solution"
              text={project.solution}
            />
          )}

          {project.insights && (
            <BulletSection
              title="Key Insights"
              items={project.insights}
            />
          )}

          {project.impact && (
            <BulletSection
              title="Business Impact"
              items={project.impact}
            />
          )}

          {project.tools && (
            <TagSection
              title="Tools & Technologies"
              items={project.tools}
            />
          )}

          {project.competencies && (
            <TagSection
              title="Key Competencies Demonstrated"
              items={project.competencies}
            />
          )}

          {project.privacy && (
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Privacy & Confidentiality
              </p>

              <p className="mt-3 leading-7 text-zinc-400">
                {project.privacy}
              </p>
            </div>
          )}
        </div>

        {/* CLOSE BUTTON */}
        <div className="border-t border-zinc-800 px-6 py-6 text-center">
          <button
            onClick={onClose}
            className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
}

/* TEXT SECTION */

function DetailSection({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section>
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <div className="mt-4 h-px w-12 bg-blue-500" />

      <p className="mt-5 max-w-4xl text-base leading-8 text-zinc-400">
        {text}
      </p>
    </section>
  );
}

/* BULLET SECTION */

function BulletSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section>
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <div className="mt-4 h-px w-12 bg-blue-500" />

      <ul className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex gap-3 text-base leading-7 text-zinc-400"
          >
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* TAG SECTION */

function TagSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section>
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <div className="mt-4 h-px w-12 bg-blue-500" />

      <div className="mt-5 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
