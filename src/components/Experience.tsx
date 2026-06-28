import { useState } from "react";
import { ChevronDown, ChevronUp, Briefcase, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const [expandedRole, setExpandedRole] = useState<number | null>(0);

  const experiences = [
    {
      company: "Tata Consultancy Services (TCS)",
      role: "Software Tester",
      period: "2019 – Present",
      location: "India",
      type: "Full-time",
      achievements: [
        "Executed comprehensive testing for financial systems processing $11M+ in daily transactions while ensuring 100% PCI DSS compliance and data security standards",
        "Designed and documented 300+ test scenarios and 500+ detailed test cases covering major banking modules, improving test coverage by 35%",
        "Identified and logged 30+ critical and high-priority defects per sprint using JIRA, achieving 95% defect resolution rate before production releases",
        "Performed regression testing across 15+ interconnected modules each sprint, reducing production incidents by 28%",
        "Optimized defect triage process and collaboration with development teams, reducing average resolution turnaround time by 40%",
        "Conducted mobile application testing across iOS and Android platforms, identifying 25+ UI/UX issues that increased customer satisfaction scores by 15%",
        "Developed and implemented smoke test automation suite using Selenium WebDriver with Java and TestNG, reducing smoke test execution time by 60%",
        "Integrated automated tests with Maven build system and GitHub version control, enabling continuous testing in CI/CD pipeline",
        "Performed comprehensive API validation using Postman and introduced basic API automation, improving API test coverage by 45%",
        "Mentored 3 junior testers on testing best practices, automation frameworks, and defect management processes"
      ]
    },
    {
      company: "Sanskruti TV",
      role: "Production Control Room Head",
      period: "2015 – 2019",
      location: "India",
      type: "Full-time",
      achievements: [
        "Managed broadcast operations and technical production workflows for live television programming",
        "Implemented quality control processes that reduced on-air errors by 15%",
        "Coordinated with production teams to ensure seamless content delivery and technical execution"
      ]
    },
    {
      company: "Set Blue",
      role: "Content Writer & Marketing Associate",
      period: "2014 – 2015",
      location: "India",
      type: "Full-time",
      achievements: [
        "Created engaging content for marketing campaigns and digital platforms",
        "Collaborated with marketing team to develop content strategies and promotional materials",
        "Contributed to brand messaging and customer engagement initiatives"
      ]
    }
  ];

  return (
    <section className="section-container bg-background">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent-cyan mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track record of delivering quality assurance excellence in enterprise environments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative card-elevated p-6 md:ml-20 space-y-4"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[52px] top-8 w-4 h-4 bg-accent-cyan rounded-full border-4 border-background hidden md:block"></div>

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-accent-cyan" />
                    {exp.role}
                  </h3>
                  <div className="text-lg font-semibold text-muted-foreground">
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.type}</span>
                  </div>
                </div>
              </div>

              {/* Key achievements preview */}
              <div className="space-y-3">
                {exp.achievements.slice(0, expandedRole === index ? undefined : 2).map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              {/* Expand/collapse button */}
              {exp.achievements.length > 2 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-accent-cyan hover:text-accent-cyan/80 hover:bg-accent-cyan/10"
                  onClick={() => setExpandedRole(expandedRole === index ? null : index)}
                >
                  {expandedRole === index ? (
                    <>
                      <ChevronUp className="mr-2 h-4 w-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="mr-2 h-4 w-4" />
                      Show {exp.achievements.length - 2} More Achievement{exp.achievements.length - 2 > 1 ? 's' : ''}
                    </>
                  )}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Note about metrics */}
        <div className="card-elevated p-4 border-l-4 border-accent-cyan/50">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">Note:</span> Achievements marked with [VERIFY] indicate estimated impact metrics based on project scope and team feedback. Precise measurements are being validated with project documentation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
