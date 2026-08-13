export default function HRAnalyticsDashboard() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* HEADER */}
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="text-sm uppercase tracking-[0.25em] text-blue-500">
            People Analytics
          </p>

          <h1 className="mt-5 text-4xl font-bold sm:text-6xl">
            HR Analytics Dashboard
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            An Excel-based HR analytics dashboard developed to transform
            workforce and recruitment data into meaningful insights that
            support better HR reporting and decision-making.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
              Microsoft Excel
            </span>

            <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
              PivotTables
            </span>

            <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
              HR Analytics
            </span>

            <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
              Data Visualisation
            </span>
          </div>

        </div>
      </section>


      {/* DASHBOARD IMAGE */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">

            <img
              src="/projects/hr-analytics-dashboard.png"
              alt="HR Analytics Dashboard"
              className="w-full"
            />

          </div>

          <p className="mt-4 text-center text-sm text-zinc-500">
            HR Analytics Dashboard developed using Microsoft Excel
          </p>

        </div>
      </section>


      {/* PROJECT OVERVIEW */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid gap-12 md:grid-cols-3">

            <div className="md:col-span-1">
              <p className="text-sm uppercase tracking-widest text-blue-500">
                Project Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Turning HR data into insights.
              </h2>
            </div>

            <div className="md:col-span-2">

              <p className="text-lg leading-8 text-zinc-400">
                The project involved consolidating workforce and recruitment
                data into an interactive Excel dashboard that allows HR
                professionals and management to quickly understand key
                workforce trends and patterns.
              </p>

              <p className="mt-5 text-lg leading-8 text-zinc-400">
                The dashboard brings different HR metrics together in one
                interface, making it easier to analyse workforce composition,
                recruitment trends, salary information and departmental data.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* BUSINESS CHALLENGE */}
      <section className="bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="text-sm uppercase tracking-widest text-blue-500">
            The Challenge
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Moving from raw data to actionable information.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
            HR data can become difficult to interpret when information is
            spread across different records and reports. This makes it
            challenging to quickly identify workforce trends, compare
            departments and generate meaningful management insights.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-400">
            The objective of this project was therefore to create a simple,
            interactive and visually engaging dashboard that could turn raw
            HR data into information that supports faster reporting and
            evidence-based decision-making.
          </p>

        </div>
      </section>


      {/* MY APPROACH */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="text-sm uppercase tracking-widest text-blue-500">
            My Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            How I developed the solution.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {[
              "Cleaned and organised the HR dataset.",
              "Structured the data for analysis.",
              "Used PivotTables to summarise workforce information.",
              "Created interactive charts and visualisations.",
              "Used slicers to enable dynamic filtering.",
              "Developed key HR metrics for management reporting.",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
              >
                <span className="text-sm font-semibold text-blue-500">
                  0{index + 1}
                </span>

                <p className="mt-3 text-zinc-300">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* KEY INSIGHTS */}
      <section className="bg-zinc-900/40">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="text-sm uppercase tracking-widest text-blue-500">
            Key Insights
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What the dashboard helps reveal.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <Insight
              title="Workforce Demographics"
              text="Provides visibility into employee demographics and workforce composition."
            />

            <Insight
              title="Departmental Analysis"
              text="Allows workforce information to be reviewed across different departments and functions."
            />

            <Insight
              title="Salary Analysis"
              text="Provides visibility into salary distribution and workforce compensation patterns."
            />

            <Insight
              title="Recruitment Trends"
              text="Helps analyse recruitment activity, sources and workforce hiring patterns."
            />

          </div>

        </div>
      </section>


      {/* OUTCOME */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="text-sm uppercase tracking-widest text-blue-500">
            Outcome
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            A clearer view of workforce data.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
            The dashboard provides a centralised and visual way of reviewing
            workforce information, improving visibility and reducing the time
            required to interpret HR data manually.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-400">
            More importantly, the project demonstrates how HR professionals
            can use data and technology to move beyond administrative
            reporting and support evidence-based decision-making.
          </p>

        </div>
      </section>


      {/* SKILLS */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <p className="text-sm uppercase tracking-widest text-blue-500">
            Skills Demonstrated
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            {[
              "HR Analytics",
              "Data Analysis",
              "Microsoft Excel",
              "PivotTables",
              "Data Visualisation",
              "HR Reporting",
              "Problem Solving",
              "Process Improvement",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}


function Insight({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-zinc-400">
        {text}
      </p>

    </div>
  );
}
