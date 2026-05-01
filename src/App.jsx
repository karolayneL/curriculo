import React from 'react';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { Section } from "./components/Section.jsx";
import styles from './App.module.css';

function App() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Cabeçalho Profissional */}
        <header className={styles.header}>
          <img 
            src="https://via.placeholder.com/150" 
            alt="Karolayne Lira" 
            className={styles.photoPlaceholder} 
          />
          <div className={styles.headerContent}>
            <h1>Karolayne Lira</h1>
            <p className={styles.role}>Sistemas de Informação | QA Engineer & Data Analysis</p>
            <div className={styles.contactGrid}>
              <span><Mail size={16}/> karolayne@email.com</span>
              <span><Phone size={16}/> (88) 9XXXX-XXXX</span>
              <a href="https://linkedin.com/in/karolaynelira" target="_blank" rel="noreferrer">
                <Linkedin size={16}/> LinkedIn
              </a>
              <a href="https://github.com/karolaynelira" target="_blank" rel="noreferrer">
                <Github size={16}/> GitHub
              </a>
            </div>
          </div>
          <button onClick={handleDownload} className={styles.downloadBtn}>
            <Download size={18}/> Salvar PDF
          </button>
        </header>

        <main className={styles.mainContent}>
          {/* Resumo Profissional */}
          <Section title="Resumo">
            <p>
              Estudante de Sistemas de Informação na UNINASSAU e Líder de Turma. 
              Tenho foco em Qualidade de Software (QA), automação de testes e análise de dados com Python. 
              Atualmente desenvolvendo projetos com foco em infraestrutura e automação.
            </p>
          </Section>

          {/* Habilidades Técnicas */}
          <Section title="Habilidades">
            <div className={styles.skillsContainer}>
              {['QA & Testes', 'Python (Dados)', 'React', 'Docker', 'Git', 'AWS', 'Redes'].map(skill => (
                <span key={skill} className={styles.skillBadge}>{skill}</span>
              ))}
            </div>
          </Section>

          {/* Experiência Profissional */}
          <Section title="Experiência">
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ margin: 0 }}>Líder de Turma - Sistemas de Informação</h3>
              <p style={{ color: '#3b82f6', margin: '4px 0' }}>UNINASSAU | 2025 - Presente</p>
              <p>Atuação na gestão acadêmica, representação discente e mediação junto à coordenação do curso.</p>
            </div>
            <div>
              <h3 style={{ margin: 0 }}>Analista de QA (Projetos Acadêmicos)</h3>
              <p style={{ color: '#3b82f6', margin: '4px 0' }}>Alura / Projetos Pessoais</p>
              <p>Criação de planos de teste, gestão de bugs e execução de testes automatizados em ambientes containerizados.</p>
            </div>
          </Section>

          {/* Formação */}
          <Section title="Formação Acadêmica">
            <div>
              <h3 style={{ margin: 0 }}>Bacharelado em Sistemas de Informação</h3>
              <p>UNINASSAU - Juazeiro do Norte, CE</p>
            </div>
          </Section>

          {/* Projetos Recentes */}
          <Section title="Projetos">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <h4 style={{ margin: 0 }}>Automação de Infraestrutura</h4>
                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Provisionamento de serviços AWS e configuração de redes locais.</p>
              </div>
              <div style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                <h4 style={{ margin: 0 }}>Dashboard de Dados</h4>
                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Análise exploratória utilizando bibliotecas Python para visualização de métricas.</p>
              </div>
            </div>
          </Section>
        </main>

      </div>
    </div>
  );
}

export default App;