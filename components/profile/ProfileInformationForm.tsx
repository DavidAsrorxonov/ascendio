import { ProfileSelectField } from "@/components/profile/ProfileSelectField";

const skillTags = ["React", "TypeScript", "Next.js", "Tailwind CSS"];

export function ProfileInformationForm() {
  return (
    <section className="rounded-xl border border-border bg-surface p-8 shadow-card">
      <div>
        <h2 className="text-[22px] font-bold leading-7 text-text-primary">
          Profile Information
        </h2>
        <p className="mt-2 text-sm font-semibold leading-5 text-text-muted">
          This context is used to accurately represent you in agent interactions.
        </p>
      </div>

      <form className="mt-6 border-t border-border pt-8">
        <section>
          <h3 className="text-base font-bold leading-6 text-text-primary">
            Personal Info
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
            <label className="block">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Full Name
              </span>
              <input
                defaultValue="Faizan Ali"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface-secondary px-4 text-sm font-medium text-text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>

            <label className="block">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Email
              </span>
              <input
                defaultValue="faizan@jsmastery.pro"
                readOnly
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface-secondary px-4 text-sm font-medium text-text-secondary outline-none"
              />
            </label>

            <label className="block">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Phone Number
              </span>
              <input
                placeholder="+1 (555) 000-0000"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary outline-none placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>

            <label className="block">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Location
              </span>
              <input
                placeholder="City, Country"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary outline-none placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>

            <label className="block">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                LinkedIn URL
              </span>
              <input
                defaultValue="https://linkedin.com/in/faizan"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface-secondary px-4 text-sm font-medium text-text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>

            <label className="block">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Portfolio / GitHub
              </span>
              <input
                defaultValue="https://github.com/jsmastery"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface-secondary px-4 text-sm font-medium text-text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>

            <ProfileSelectField
              label="Work Authorization"
              defaultValue="citizen"
              options={[
                { value: "citizen", label: "Citizen" },
                { value: "permanent_resident", label: "Permanent Resident" },
                { value: "visa_required", label: "Visa Required" },
              ]}
            />
          </div>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h3 className="text-base font-bold leading-6 text-text-primary">
            Professional Info
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
            <label className="block md:col-span-2">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Current/Recent Job Title
              </span>
              <input
                defaultValue="Frontend Engineer"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface-secondary px-4 text-sm font-medium text-text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>

            <ProfileSelectField
              label="Experience Level"
              defaultValue="junior"
              options={[
                { value: "junior", label: "Junior" },
                { value: "mid", label: "Mid" },
                { value: "senior", label: "Senior" },
                { value: "lead", label: "Lead" },
              ]}
            />

            <label className="block">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Years of Experience
              </span>
              <input
                defaultValue="4"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface-secondary px-4 text-sm font-medium text-text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>

            <div className="md:col-span-2">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Skills
              </span>
              <div className="mt-2 flex gap-2">
                <input
                  placeholder="Add a skill"
                  className="h-11 min-w-0 flex-1 rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary outline-none placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
                />
                <button
                  type="button"
                  className="rounded-md bg-surface-secondary px-5 text-sm font-bold text-text-secondary transition-colors hover:bg-surface-tertiary"
                >
                  Add
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {skillTags.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-surface-secondary px-3 py-2 text-sm font-bold leading-5 text-text-primary"
                  >
                    {skill} <span className="text-text-secondary">x</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Industries Worked In (Optional)
              </span>
              <div className="mt-2 flex gap-2">
                <input
                  placeholder="E.g. FinTech, Healthcare"
                  className="h-11 min-w-0 flex-1 rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary outline-none placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
                />
                <button
                  type="button"
                  className="rounded-md bg-surface-secondary px-5 text-sm font-bold text-text-secondary transition-colors hover:bg-surface-tertiary"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold leading-6 text-text-primary">
              Work Experience
            </h3>
            <button
              type="button"
              className="text-sm font-bold leading-5 text-accent hover:text-accent-dark"
            >
              + Add role
            </button>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-surface-secondary p-5">
            <div className="grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                  Company Name
                </span>
                <input
                  defaultValue="Vercel"
                  className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </label>

              <label className="block">
                <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                  Job Title
                </span>
                <input
                  defaultValue="Frontend Engineer"
                  className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </label>

              <label className="block">
                <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                  Start Date
                </span>
                <input
                  defaultValue="January 2022"
                  className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </label>

              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                    End Date
                  </span>
                  <label className="flex items-center gap-2 text-xs font-medium leading-4 text-text-dark">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="size-4 rounded-sm accent-accent"
                    />
                    Currently working here
                  </label>
                </div>
                <input
                  placeholder="--------- ----"
                  className="mt-2 h-11 w-full rounded-md border border-border bg-surface-secondary px-4 text-sm font-medium text-text-primary outline-none placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>

              <label className="block md:col-span-2">
                <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                  Key Responsibilities
                </span>
                <textarea
                  defaultValue="Built Next.js features and optimized web vitals. Led a team of 3 developers."
                  className="mt-2 min-h-20 w-full resize-y rounded-md border border-border bg-surface px-4 py-3 text-sm font-medium text-text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </label>
            </div>
          </div>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h3 className="text-base font-bold leading-6 text-text-primary">
            Education
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
            <ProfileSelectField
              label="Highest Degree"
              defaultValue="high_school"
              options={[
                { value: "high_school", label: "High School" },
                { value: "bachelors", label: "Bachelor's" },
                { value: "masters", label: "Master's" },
                { value: "phd", label: "PhD" },
              ]}
            />

            <label className="block">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Field of Study
              </span>
              <input
                defaultValue="Computer Science"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>

            <label className="block">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Institution Name
              </span>
              <input
                placeholder="E.g. State University"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary outline-none placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>

            <label className="block">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Graduation Year
              </span>
              <input
                placeholder="YYYY"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary outline-none placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>
          </div>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h3 className="text-base font-bold leading-6 text-text-primary">
            Job Preferences
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
            <label className="block md:col-span-2">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Job Titles Seeking
              </span>
              <input
                defaultValue="Frontend Engineer, React Developer"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface-secondary px-4 text-sm font-medium text-text-primary outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>

            <ProfileSelectField
              label="Remote Preference"
              defaultValue="any"
              options={[
                { value: "any", label: "Any" },
                { value: "remote", label: "Remote" },
                { value: "hybrid", label: "Hybrid" },
                { value: "onsite", label: "Onsite" },
              ]}
            />

            <label className="block">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Salary Expectation (Optional)
              </span>
              <input
                placeholder="E.g. $120k+"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary outline-none placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="text-xs font-bold uppercase leading-4 text-text-secondary">
                Preferred Locations (Optional)
              </span>
              <input
                placeholder="E.g. New York, London"
                className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary outline-none placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </label>
          </div>
        </section>

        <div className="mt-12 border-t border-border pt-8">
          <button
            type="button"
            className="h-12 w-full rounded-md bg-accent text-sm font-bold text-accent-foreground shadow-card transition-colors hover:bg-accent-dark"
          >
            Save Profile
          </button>
        </div>
      </form>
    </section>
  );
}
