const projects = [
  {
    title: "MarketFlow-Intelligence",
    tech: "Python • SQLite • Pandas • Faker • Matplotlib",
    color: "accent-red",
    bullets: [
      "Gerador de dados sintéticos de varejo com +1 milhão de registros",
      "Modelagem de banco relacional com integridade referencial",
      "Pipeline de análise LTV e ticket médio por demografia",
    ],
    link: "https://github.com/karolayneL/ecommerce-customer-insights",
  },
  {
    title: "Movies API",
    tech: "FastAPI • Supabase • PostgreSQL • JWT • Render",
    color: "accent-red",
    bullets: [
      "API REST completa com autenticação JWT via Supabase Auth",
      "CRUD com filtros e paginação",
      "Coleções Postman prontas para teste",
    ],
    link: "https://github.com/karolayneL/movies-api-fastapi-supabase",
  },
  {
    title: "E2E Testing Automation",
    tech: "Cypress • GitHub Actions • CI/CD",
    color: "accent-red",
    bullets: [
      "Testes automatizados com Cypress",
      "Pipeline CI/CD integrada com GitHub Actions",
    ],
    link: "https://github.com/karolayneL/go-gin-cicd-pipeline",
  },
];

export default function Projects() {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-bold mb-4 text-accent-red border-b border-border-anime pb-2">
        Missões Concluídas
      </h3>
      <div className="space-y-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-bg-card p-6 rounded-lg">
            <h4 className="text-xl font-bold text-white">{p.title}</h4>
            <p className={p.color}>{p.tech}</p>
            <ul className="mt-2 text-gray-300 list-disc list-inside">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a href={p.link} className="mt-2 inline-block text-accent-orange hover:underline">
              Ver no GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
