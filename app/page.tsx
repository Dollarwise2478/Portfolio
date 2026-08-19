"use client";

import { useState } from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "hr-analytics-dashboard",
      number: "01",
      title: "HR Analytics Dashboard",
      category: "People Analytics",
      image: "/hr-analytics-dashboard.png",
      description:
        "An interactive HR recruitment analytics dashboard developed using Microsoft Excel to transform workforce and recruitment data into meaningful insights for HR decision-making.",
      technologies:
        "Microsoft Excel · PivotTables · Power Query · XLOOKUP · Charts · Slicers · HR Analytics",
    },
    {
      id: "performance-appraisal",
      number: "02",
      title: "Performance Appraisal Framework",
      category: "Performance Management",
      description:
        "A structured performance appraisal framework designed to improve consistency, accuracy and efficiency in employee performance evaluation and reporting.",
      technologies:
        "Performance Management · Excel · Appraisal Framework · AI Automation",
    },
    {
      id: "hr-digital-transformation",
      number: "03",
      title: "HR Digital Transformation",
      category: "HR Technology",
      image: "/brighthr.png",
      description:
        "An HR digital transformation initiative focused on improving attendance, leave management, employee records and workforce reporting through BrightHR.",
      technologies:
        "BrightHR · HRIS · Leave Management · Data Reconciliation · Process Improvement",
    },
    {
      id: "hr-policies",
      number: "04",
      title: "HR Policies & Governance",
      category: "HR Governance",
      image: "/hr-policies.png",
      description:
        "Development and enhancement of HR policies, procedures and governance frameworks designed to promote consistency, compliance, transparency and accountability.",
      technologies:
        "Policy Development · SOPs · Governance · Employee Handbook",
    },
    {
      id: "hr-corner",
      number: "05",
      title: "HR Corner & Employee Communication",
      category: "Employee Engagement",
      description:
        "An internal HR communication initiative designed to educate employees on workplace policies, procedures, professional conduct and important HR practices.",
      technologies:
        "HR Communication · Employee Engagement · Employee Awareness",
    },
    {
      id: "onboarding-training",
      number: "06",
      title: "Onboarding & Training Programme",
      category: "Learning & Development",
      description:
        "A structured onboarding and training programme designed to support new employees through induction, training, integration and early-stage development.",
      technologies:
        "Onboarding · Training · Employee Development · HR Operations",
    },
    {
      id: "internal-newsletter",
      number: "07",
      title: "Internal Newsletter",
      category: "Internal Communication",
      image: "/newsletter.png",
      description:
        "A professionally designed internal newsletter initiative developed to improve the quality, consistency and visual appeal of HR and organisational communications.",
      technologies:
        "CorelDRAW · Canva · Corporate Branding · Visual Communication",
    },
    {
      id: "organogram",
      number: "08",
      title: "Organisational Structure & Organogram Design",
      category: "Organisational Development",
      image: "/organogram-design.png",
      description:
        "A multi-page organisational chart project designed to provide employees and management with a clear, professional and accessible view of the company's reporting structure.",
      technologies:
        "CorelDRAW · Microsoft Excel · Organisational Design · Information Design",
    },
    {
      id: "hr-process-improvement",
      number: "09",
      title: "HR Process Improvement",
      category: "HR Operations",
      image: "/hr-process-improvement.png",
      description:
        "A collection of HR process improvement initiatives focused on leave management, attendance reporting, onboarding and operational efficiency.",
      technologies:
        "HR Operations · Process Improvement · BrightHR · Excel · Onboarding",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#" className="flex flex-col">
            <span className="text-xl font-bold text-white">
              David Uwaga
            </span>

            <span className="text-xs font-semibold tracking-wide text-blue-500">
              ACIPM · HRPL
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
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
            href="https://www.linkedin.com/in/chigaemezu-uwaga-acipm-hrpl-4091bb176"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm transition hover:border-blue-500 hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </nav>


      {/* HERO */}
      <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24">

        <div className="max-w-5xl">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Human Resources Professional
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            David Uwaga
            <span className="mt-2 block text-zinc-500">
              People. Processes. Performance.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            HR professional with experience across HR operations, people
            analytics, performance management, HR technology, policy
            development, employee engagement and organisational effectiveness.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View My Work
            </a>

            <a
              href="https://www.linkedin.com/in/chigaemezu-uwaga-acipm-hrpl-4091bb176"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-400"
            >
              My LinkedIn
            </a>

            <a
              href="/David-Uwaga-Chigaemezu-ACIPM-HRPL.pdf"
              download
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-400"
            >
              Download CV
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-500">
            <span>HR Operations</span>
            <span>People Analytics</span>
            <span>Performance Management</span>
            <span>HR Technology</span>
            <span>Policy Development</span>
            <span>Employee Engagement</span>
          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="border-t border-zinc-900">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
            Combining people, technology and data to improve HR.
          </h2>

          <div className="mt-8 grid gap-10 md:grid-cols-2">

            <p className="leading-8 text-zinc-400">
              I am an HR professional with practical experience supporting
              people management, employee relations, recruitment, performance
              management, HR operations, policy development and organisational
              initiatives.
            </p>

            <p className="leading-8 text-zinc-400">
              My approach combines traditional HR expertise with data
              analytics, digital HR systems and process improvement to create
              more efficient, transparent and employee-focused HR practices.
            </p>

          </div>

        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="bg-zinc-900/40">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Core Competencies
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Areas of HR expertise
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "HR Operations",
              "People Analytics",
              "Performance Management",
              "HR Technology",
              "Recruitment & Selection",
              "Employee Relations",
              "Policy Development",
              "HR Governance",
              "Learning & Development",
              "Onboarding",
              "Employee Engagement",
              "Process Improvement",
              "Workforce Reporting",
              "Data Analysis",
              "Organisational Development",
              "HR Administration",
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
      <section id="projects" className="border-t border-zinc-900">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Selected Work
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Projects & HR Initiatives
          </h2>

          <p className="mt-5 max-w-3xl text-zinc-400">
            A selection of HR projects demonstrating my experience in people
            analytics, HR technology, performance management, policy
            development, employee communication, organisational design and
            HR process improvement.
          </p>


          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {projects.map((project) => (

              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => setSelectedProject(project.id)}
              />

            ))}

          </div>

        </div>
      </section>


      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <ProjectDetails
          projectId={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}


      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-zinc-900"
      >

        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="mb-3 text-sm uppercase tracking-widest text-blue-500">
            Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl">
            Let's connect and create meaningful HR solutions.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I am open to conversations around HR opportunities, people
            analytics, HR technology, organisational development and
            people-focused projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="https://www.linkedin.com/in/chigaemezu-uwaga-acipm-hrpl-4091bb176"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              Connect on LinkedIn
            </a>

            <a
              href="mailto:your-email@example.com"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-400"
            >
              Send Me an Email
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

          <a
            href="https://www.linkedin.com/in/chigaemezu-uwaga-acipm-hrpl-4091bb176"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

        </div>

      </footer>

    </main>
  );
}


/* ============================================================
   PROJECT CARD
============================================================ */

function ProjectCard({
  number,
  title,
  category,
  image,
  description,
  technologies,
  onClick,
}: {
  number: string;
  title: string;
  category: string;
  image?: string;
  description: string;
  technologies: string;
  onClick: () => void;
}) {
  return (

    <button
      onClick={onClick}
      className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
    >

      {/* IMAGE ONLY WHEN AVAILABLE */}
      {image && (
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">

          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

        </div>
      )}


      {/* PROJECT INFORMATION */}
      <div className="p-7">

        <div className="flex items-start justify-between gap-4">

          <div>

            <p className="text-sm font-medium text-blue-500">
              Project {number}
            </p>

            <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
              {category}
            </p>

          </div>

          <span className="text-xl text-zinc-500 transition group-hover:text-blue-400">
            ↗
          </span>

        </div>


        <h3 className="mt-4 text-2xl font-semibold text-white">
          {title}
        </h3>


        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>


        <p className="mt-6 text-sm leading-6 text-blue-400">
          {technologies}
        </p>


        <div className="mt-6 text-sm font-medium text-zinc-300 transition group-hover:text-blue-400">
          View Project Details →
        </div>

      </div>

    </button>
  );
}


/* ============================================================
   PROJECT DETAILS
============================================================ */

function ProjectDetails({
  projectId,
  onClose,
}: {
  projectId: string;
  onClose: () => void;
}) {

  const details: Record<string, React.ReactNode> = {

    /* ========================================================
       PROJECT 01
    ======================================================== */

    "hr-analytics-dashboard": (

      <>

        <DetailHeading
          number="01"
          category="People Analytics"
          title="HR Analytics Dashboard"
        />

        <DetailSection title="Project Overview">

          <p>
            After completing my Data Analytics training, I wanted to
            demonstrate how analytics could solve real HR reporting
            challenges. HR teams often rely on multiple spreadsheets to
            track recruitment activities, making it difficult to obtain
            meaningful insights or produce timely management reports.
          </p>

          <p>
            To address this, I designed and developed an interactive HR
            Recruitment Analytics Dashboard using Microsoft Excel. The
            dashboard transforms raw recruitment data into meaningful
            insights through PivotTables, dynamic charts, slicers and
            data visualisation.
          </p>

        </DetailSection>


        <DetailSection title="Business Challenge">

          <p>
            Recruitment and workforce data are often scattered across
            multiple spreadsheets, making it difficult for HR teams to
            monitor hiring performance, analyse workforce trends and
            make informed decisions.
          </p>

        </DetailSection>


        <DetailSection title="My Solution">

          <p>
            I developed a single reporting interface that consolidates
            recruitment and workforce information, providing insights
            into hiring trends, workforce demographics, recruitment
            sources, salary distribution and departmental recruitment
            performance.
          </p>

        </DetailSection>


        <DetailSection title="Key Insights">

          <ul>
            <li>
              311 employees across 31 job positions and 6 departments.
            </li>

            <li>
              Average employee salary of approximately $68.81K.
            </li>

            <li>
              2011 recorded the highest number of employee hires.
            </li>

            <li>
              Workforce demographics can be analysed by gender,
              marital status and age at recruitment.
            </li>
          </ul>

        </DetailSection>


        <DetailSection title="Business Impact">

          <ul>
            <li>Improved visibility into recruitment metrics.</li>
            <li>Reduced manual HR reporting effort.</li>
            <li>Enabled faster data-driven decision-making.</li>
            <li>
              Demonstrated the practical application of Excel for HR
              analytics and reporting.
            </li>
          </ul>

        </DetailSection>


        <DetailSection title="Skills & Tools">

          <SkillList
            items={[
              "Microsoft Excel",
              "PivotTables & PivotCharts",
              "Power Query",
              "XLOOKUP / INDEX-MATCH",
              "Dynamic Charts",
              "Slicers",
              "HR Data Analytics",
              "Dashboard Design",
              "Data Visualisation",
            ]}
          />

        </DetailSection>

      </>

    ),


    /* ========================================================
       PROJECT 02
    ======================================================== */

    "performance-appraisal": (

      <>

        <DetailHeading
          number="02"
          category="Performance Management"
          title="Performance Appraisal Framework"
        />


        <DetailSection title="Project Overview">

          <p>
            I played a key role in strengthening the organisation's
            performance management process by coordinating annual
            appraisal cycles, developing appraisal tools, monitoring
            performance metrics and improving the consistency of
            employee evaluations.
          </p>

        </DetailSection>


        <DetailSection title="Metrics Development">

          <p>
            I supported the development and refinement of appraisal
            metrics to provide a clearer and more structured approach
            to measuring employee performance across different roles.
          </p>

        </DetailSection>


        <DetailSection title="AI-Powered Appraisal Automation">

          <p>
            To further optimise the process, I implemented an
            AI-powered appraisal automation solution using Claude AI
            to populate appraisal forms in a structured and
            standardised format.
          </p>

          <p>
            This reduced manual processing time, improved consistency
            and accuracy, enhanced productivity and streamlined the
            end-to-end appraisal workflow.
          </p>

        </DetailSection>


        <DetailSection title="Digital HR Forms">

          <p>
            I also contributed to the organisation's HR digitalisation
            initiatives by working closely with the IT Department to
            oversee the implementation of digital HR forms and ensure
            they met operational and user requirements.
          </p>

          <p>
            I designed and implemented a digital Employee ID Card
            Request Form, enabling employees to submit their details
            and photographs electronically for ID card production.
          </p>

        </DetailSection>


        <DetailSection title="Business Impact">

          <ul>
            <li>Improved consistency in employee evaluations.</li>
            <li>Reduced manual appraisal processing.</li>
            <li>Improved accuracy of appraisal records.</li>
            <li>Streamlined the appraisal workflow.</li>
            <li>Improved digital HR administration.</li>
          </ul>

        </DetailSection>

      </>

    ),


    /* ========================================================
       PROJECT 03
    ======================================================== */

    "hr-digital-transformation": (

      <>

        <DetailHeading
          number="03"
          category="HR Technology"
          title="HR Digital Transformation"
        />


        <DetailSection title="Project Overview">

          <p>
            The organisation's HR operations were constrained by
            manual lateness reporting and the use of multiple systems
            for leave management and attendance tracking.
          </p>

          <p>
            This fragmented approach created operational inefficiencies,
            increased administrative workload and made HR reporting more
            time-consuming.
          </p>

        </DetailSection>


        <DetailSection title="My Solution">

          <p>
            I supported the implementation and optimisation of
            BrightHR as a central HR platform for attendance and leave
            management.
          </p>

          <p>
            My role included reviewing HR processes, validating
            employee records and ensuring the platform accurately
            reflected organisational leave policies.
          </p>

        </DetailSection>


        <DetailSection title="Root Cause Analysis">

          <p>
            During implementation, I identified inconsistencies between
            leave balances in the legacy system and BrightHR.
          </p>

          <p>
            A detailed review revealed that Annual Leave entitlements
            had been configured while Sickness Leave entitlements were
            missing. Consequently, certain sickness and emergency leave
            records were not being deducted correctly.
          </p>

        </DetailSection>


        <DetailSection title="My Role">

          <ul>
            <li>Identified the need for an integrated HR system.</li>
            <li>Prepared the business case.</li>
            <li>Partnered with leadership during implementation.</li>
            <li>Developed onboarding resources.</li>
            <li>Supported employee training.</li>
            <li>Reconciled affected employee records.</li>
          </ul>

        </DetailSection>


        <DetailSection title="Outcome & Impact">

          <ul>
            <li>Improved leave balance accuracy.</li>
            <li>Eliminated configuration-related inconsistencies.</li>
            <li>Improved confidence in HR reporting.</li>
            <li>Reduced manual reconciliation.</li>
            <li>Improved workforce reporting and visibility.</li>
          </ul>

        </DetailSection>


        <DetailSection title="Tools & Competencies">

          <SkillList
            items={[
              "BrightHR",
              "HRIS Administration",
              "Leave Management",
              "HR Operations",
              "Process Improvement",
              "Data Reconciliation",
              "System Migration",
              "HR Compliance",
              "Root Cause Analysis",
              "Microsoft Excel",
            ]}
          />

        </DetailSection>

      </>

    ),


    /* ========================================================
       PROJECT 04
    ======================================================== */

    "hr-policies": (

      <>

        <DetailHeading
          number="04"
          category="HR Governance"
          title="HR Policies & Governance"
        />


        <DetailSection title="Project Overview">

          <p>
            Recognising the need for consistent HR governance and
            clear workplace standards, I contributed to the development,
            review and enhancement of several HR policies supporting
            compliance, employee wellbeing, operational efficiency and
            organisational performance.
          </p>

        </DetailSection>


        <DetailSection title="Key Policy Initiatives">

          <div className="space-y-6">

            <PolicyItem
              title="Ethical Conduct Guidelines"
              text="Developed guidelines to help employees identify, disclose and appropriately manage situations where personal interests may conflict with the interests of the organisation."
            />

            <PolicyItem
              title="Maternity Leave Policy"
              text="Contributed to a structured maternity leave policy outlining eligibility, leave entitlement, compensation arrangements, return-to-work expectations and employer responsibilities."
            />

            <PolicyItem
              title="Exam Leave Policy"
              text="Designed an examination leave policy supporting employees pursuing professional qualifications while maintaining business continuity."
            />

            <PolicyItem
              title="Employee Handbook Refinements"
              text="Reviewed and enhanced the Employee Handbook to improve policy clarity, relevance and consistency in the application of workplace procedures."
            />

            <PolicyItem
              title="Hiring Strategy Updates"
              text="Developed and refined recruitment procedures covering workforce planning, sourcing, interviewing, selection, onboarding and documentation."
            />

          </div>

        </DetailSection>


        <DetailSection title="Business Impact">

          <ul>
            <li>Strengthened HR governance and compliance.</li>
            <li>Standardised workplace procedures.</li>
            <li>Improved employee understanding of policies.</li>
            <li>Promoted fairness and transparency.</li>
            <li>Reduced ambiguity in HR processes.</li>
            <li>Supported more consistent decision-making.</li>
          </ul>

        </DetailSection>

      </>

    ),


    /* ========================================================
       PROJECT 05
    ======================================================== */

    "hr-corner": (

      <>

        <DetailHeading
          number="05"
          category="Employee Engagement"
          title="HR Corner & Employee Communication"
        />


        <DetailSection title="Project Overview">

          <p>
            HR Corner is an internal employee communication initiative
            designed to improve employee awareness and understanding of
            workplace policies, procedures, professional conduct and
            important HR practices.
          </p>

        </DetailSection>


        <DetailSection title="My Contribution">

          <ul>
            <li>
              Developed employee-focused HR communication materials.
            </li>

            <li>
              Simplified HR policies and workplace procedures into
              easy-to-understand communication pieces.
            </li>

            <li>
              Created awareness around important HR and compliance
              topics.
            </li>

            <li>
              Supported continuous employee sensitisation.
            </li>
          </ul>

        </DetailSection>


        <DetailSection title="Business Impact">

          <ul>
            <li>Improved employee awareness of HR policies.</li>
            <li>Promoted a stronger culture of compliance.</li>
            <li>Improved communication between HR and employees.</li>
            <li>
              Supported a more transparent and informed workplace.
            </li>
          </ul>

        </DetailSection>

      </>

    ),


    /* ========================================================
       PROJECT 06
    ======================================================== */

    "onboarding-training": (

      <>

        <DetailHeading
          number="06"
          category="Learning & Development"
          title="Onboarding & Training Programme"
        />


        <DetailSection title="Project Overview">

          <p>
            I collaborated with management to redesign and strengthen
            the employee onboarding process, introducing a more
            structured and professional approach to integrating new
            employees into the organisation.
          </p>

        </DetailSection>


        <DetailSection title="My Contribution">

          <ul>
            <li>Participated in induction and orientation sessions.</li>
            <li>Coordinated onboarding activities.</li>
            <li>Ensured new hires received required documentation.</li>
            <li>Provided guidance during employee integration.</li>
            <li>
              Developed a comprehensive onboarding and training timetable.
            </li>
          </ul>

        </DetailSection>


        <DetailSection title="Training Timetable">

          <p>
            The onboarding and training timetable was developed to help
            the training team track induction activities, monitor
            completion and ensure onboarding activities were delivered
            consistently and within expected timelines.
          </p>

        </DetailSection>


        <DetailSection title="Business Impact">

          <ul>
            <li>Improved onboarding coordination.</li>
            <li>Improved visibility of training completion.</li>
            <li>Strengthened new employee experience.</li>
            <li>
              Improved collaboration between HR, management and the
              training team.
            </li>
          </ul>

        </DetailSection>

      </>

    ),


    /* ========================================================
       PROJECT 07
    ======================================================== */

    "internal-newsletter": (

      <>

        <DetailHeading
          number="07"
          category="Internal Communication"
          title="Internal Newsletter"
        />


        <DetailSection title="Project Overview">

          <p>
            The organisation's internal HR communications were
            previously designed using Microsoft PowerPoint. Recognising
            the opportunity to improve visual quality and employee
            engagement, I introduced a modern design approach and
            transitioned the newsletter production to CorelDRAW.
          </p>

        </DetailSection>


        <DetailSection title="Business Challenge">

          <p>
            The previous newsletter design lacked visual consistency
            and professional branding, limiting the effectiveness and
            engagement of internal communications.
          </p>

        </DetailSection>


        <DetailSection title="My Contribution">

          <ul>
            <li>
              Evaluated the limitations of the previous design process.
            </li>

            <li>
              Introduced digital design platforms to improve visual
              quality.
            </li>

            <li>
              Transitioned newsletter production from PowerPoint to
              CorelDRAW.
            </li>

            <li>
              Designed professional covers, layouts, typography and
              visual elements.
            </li>

            <li>
              Structured newsletters with clearer sections and
              navigation.
            </li>

            <li>
              Produced publications covering HR Corner, management
              messages, employee recognition, onboarding, birthdays,
              events and company announcements.
            </li>
          </ul>

        </DetailSection>


        <DetailSection title="Business Impact">

          <ul>
            <li>Improved the professionalism of internal communications.</li>
            <li>Established consistent newsletter branding.</li>
            <li>Improved readability and accessibility.</li>
            <li>Increased employee engagement with company updates.</li>
            <li>Created reusable templates for future publications.</li>
          </ul>

        </DetailSection>


        <DetailSection title="Tools Used">

          <SkillList
            items={[
              "CorelDRAW",
              "Canva",
              "Freepik",
              "Corporate Branding",
              "Visual Communication",
              "Employee Engagement",
              "Visual Storytelling",
              "Design Thinking",
            ]}
          />

        </DetailSection>

      </>

    ),


    /* ========================================================
       PROJECT 08
    ======================================================== */

    "organogram": (

      <>

        <DetailHeading
          number="08"
          category="Organisational Development"
          title="Organisational Structure & Organogram Design"
        />


        <DetailSection title="Project Overview">

          <p>
            To improve organisational visibility and help employees
            understand the company's reporting structure, I led a team
            responsible for redesigning the corporate organogram into a
            modern and visually engaging digital format.
          </p>

          <p>
            The project was initiated at the request of the HR Director
            and involved representing more than 100 employees across
            multiple pages while maintaining consistency, readability
            and organisational branding.
          </p>

        </DetailSection>


        <DetailSection title="Business Challenge">

          <p>
            The existing organisational structure lacked an engaging
            and accessible visual format, making it difficult,
            particularly for new employees, to understand reporting
            lines and departmental relationships.
          </p>

        </DetailSection>


        <DetailSection title="My Role">

          <ul>
            <li>
              Collaborated with the HR Director and management.
            </li>

            <li>
              Coordinated the collection and verification of employee
              information.
            </li>

            <li>
              Directed the visual design process.
            </li>

            <li>
              Managed quality assurance of reporting relationships.
            </li>

            <li>
              Oversaw delivery within the required timeline.
            </li>
          </ul>

        </DetailSection>


        <DetailSection title="Solution">

          <p>
            Developed a professional multi-page organisational chart
            combining organisational data with modern visual design
            principles to improve accessibility, navigation and
            understanding of the company's hierarchy.
          </p>

        </DetailSection>


        <DetailSection title="Business Impact">

          <ul>
            <li>Improved understanding of reporting relationships.</li>
            <li>Enhanced the onboarding experience.</li>
            <li>Strengthened internal communication.</li>
            <li>
              Delivered a scalable organogram representing over 100
              employees.
            </li>
            <li>
              Supported the HR Director's organisational development
              initiative.
            </li>
          </ul>

        </DetailSection>


        <DetailSection title="Tools Used">

          <SkillList
            items={[
              "CorelDRAW",
              "Microsoft Excel",
              "Organisational Design",
              "Information Design",
              "Visual Communication",
            ]}
          />

        </DetailSection>


        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-sm text-zinc-400">

          <strong className="text-white">
            Privacy Disclosure:
          </strong>{" "}
          Employee names, photographs and company identifiers have been
          intentionally anonymised to protect organisational
          confidentiality while showcasing the project structure and
          design approach.

        </div>

      </>

    ),


    /* ========================================================
       PROJECT 09
    ======================================================== */

    "hr-process-improvement": (

      <>

        <DetailHeading
          number="09"
          category="HR Operations"
          title="HR Process Improvement"
        />


        <DetailSection title="Project Overview">

          <p>
            As part of my commitment to operational excellence, I led
            and supported several HR process improvement initiatives
            designed to modernise administrative workflows and improve
            organisational efficiency.
          </p>

        </DetailSection>


        <DetailSection title="Staff Leave Optimisation">

          <p>
            Implemented and optimised leave management processes by
            configuring leave entitlements, reconciling employee leave
            balances and supporting the migration to BrightHR.
          </p>

        </DetailSection>


        <DetailSection title="Attendance & Reporting Framework">

          <p>
            Redesigned attendance tracking and lateness reporting by
            introducing structured digital processes that improved
            workforce visibility, reporting accuracy and management
            oversight.
          </p>

        </DetailSection>


        <DetailSection title="HR Policy Innovation">

          <p>
            Authored and refined HR protocols to establish clearer
            workplace standards, support compliance and provide
            employees with comprehensive documentation.
          </p>

        </DetailSection>


        <DetailSection title="Staff Integration">

          <p>
            Collaborated with management to redesign and strengthen the
            employee onboarding process, introducing a more structured
            approach to integrating new employees.
          </p>

          <p>
            I also developed a comprehensive onboarding and training
            timetable to support the training team in tracking
            induction activities and monitoring training completion.
          </p>

        </DetailSection>


        <DetailSection title="Business Impact">

          <ul>
            <li>Improved HR process efficiency.</li>
            <li>Reduced manual administrative effort.</li>
            <li>Improved workforce reporting.</li>
            <li>Strengthened HR compliance.</li>
            <li>Improved onboarding coordination.</li>
            <li>Created a more structured employee experience.</li>
          </ul>

        </DetailSection>

      </>

    ),
  };


  return (

    <div className="fixed inset-0 z-[100] overflow-y-auto bg-zinc-950">

      {/* DETAIL NAVIGATION */}

      <div className="sticky top-0 z-20 border-b border-zinc-900 bg-zinc-950/95 backdrop-blur">

        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">

          <span className="text-sm font-medium text-zinc-400">
            Project Details
          </span>

          <button
            onClick={onClose}
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-300 transition hover:border-blue-500 hover:text-white"
          >
            ← Back to Portfolio
          </button>

        </div>

      </div>


      {/* DETAILS */}

      <div className="mx-auto max-w-5xl px-6 py-16">

        {details[projectId]}

      </div>

    </div>

  );
}


/* ============================================================
   DETAIL HEADING
============================================================ */

function DetailHeading({
  number,
  category,
  title,
}: {
  number: string;
  category: string;
  title: string;
}) {
  return (

    <header className="mb-16">

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
        Project {number} · {category}
      </p>

      <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
        {title}
      </h1>

      <div className="mt-6 h-px w-24 bg-blue-500" />

    </header>

  );
}


/* ============================================================
   DETAIL SECTION
============================================================ */

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (

    <section className="mb-12">

      <h2 className="mb-5 text-2xl font-semibold text-white">
        {title}
      </h2>

      <div className="space-y-5 text-base leading-8 text-zinc-400">

        {children}

      </div>

    </section>

  );
}


/* ============================================================
   SKILL LIST
============================================================ */

function SkillList({
  items,
}: {
  items: string[];
}) {
  return (

    <div className="flex flex-wrap gap-3">

      {items.map((item) => (

        <span
          key={item}
          className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
        >
          {item}
        </span>

      ))}

    </div>

  );
}


/* ============================================================
   POLICY ITEM
============================================================ */

function PolicyItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (

    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">

      <h3 className="font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-zinc-400">
        {text}
      </p>

    </div>

  );
}
