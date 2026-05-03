export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center gap-6 mb-12 pb-8 border-b border-border-anime">
      <img
        src="https://avatars.githubusercontent.com/u/182172093?v=4"
        alt="Karolayne Lira"
        className="w-32 h-32 rounded-full border-4 border-border-anime"
      />
      <div>
        <h1 className="text-4xl font-bold text-white">Karolayne Lira</h1>
        <h2 className="text-xl mt-2 text-accent-orange">QA Automation | Backend Developer</h2>
        <p className="mt-2 text-gray-400">Python • Cypress • CI/CD | Juazeiro do Norte - CE</p>
      </div>
    </header>
  );
}
