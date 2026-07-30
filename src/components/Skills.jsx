const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Git & GitHub", level: 70 },
  { name: "Supabase (SQL)", level: 60 },
  { name: "Clerk (Auth)", level: 60 },
  { name: "Vercel", level: 70 },
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 md:px-20 py-24">
      <div className="max-w-4xl mx-auto">
        <p
          data-aos="fade-down"
          className="text-blue-500 dark:text-blue-400 font-mono mb-2"
        >
          Ko'nikmalarim
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          Skills
        </h2>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} data-aos="fade-right" data-aos-delay={index * 60}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
