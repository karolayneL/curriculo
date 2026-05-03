export default function Footer() {
  return (
    <footer className="text-center text-gray-500 py-8 border-t border-border-anime">
      <p>"A qualidade não é um ato, é um hábito." - Aristóteles</p>
      <p className="mt-2 text-sm">Tema inspirado em Naruto, Black Clover e Kimetsu no Yaiba</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://linkedin.com/in/karolayne-lira-1b5501230/" className="text-accent-orange hover:underline">
          LinkedIn
        </a>
        <a href="mailto:karolaynelira3@gmail.com" className="text-accent-orange hover:underline">
          Gmail
        </a>
        <a href="https://github.com/karolayneL" className="text-accent-orange hover:underline">
          GitHub
        </a>
      </div>
    </footer>
  );
}
