const skills = {
  "Linguagens": ["Python", "JavaScript", "TypeScript", "PHP", "Kotlin"],
  "QA & Testes": ["Cypress", "Postman", "Test Plans"],
  "Backend": ["FastAPI", "Django", "Flask", "Laravel"],
  "Bancos de Dados": ["PostgreSQL", "MySQL", "SQLite"],
  "DevOps & Tools": ["Docker", "GitHub Actions", "Git", "Linux"],
  "Frontend & Mobile": ["React", "React Native", "HTML5", "CSS3", "TailwindCSS"],
};

export default function Skills() {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-4 text-accent-green border-b border-border-anime pb-2">
        Jutsus Dominados
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-bg-card p-4 rounded-lg">
            <h4 className="font-bold text-accent-green">{category}</h4>
            <p className="text-gray-300">{items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
