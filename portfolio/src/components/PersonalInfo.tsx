import React from "react";
import profilePhoto from "../assets/profile-portfolio.png";

const PersonalInfo: React.FC = () => {
  return (
    <div className="w-full h-[550px] bg-gray-900 text-white shadow-lg shadow-purple-400 rounded-xl overflow-hidden font-sans flex">
      <div className="relative w-1/3 flex flex-col items-center justify-center p-8 bg-gray-800 rounded-xl">
        <div className="absolute inset-0 border-animation rounded-xl pointer-events-none"></div>

        <img
          className="h-44 w-44 rounded-full object-cover border-4 border-indigo-400 z-10"
          src={profilePhoto}
          alt="Gustavo Bugs"
        />
        <h2 className="mt-4 text-xl font-semibold text-indigo-400 z-10">
          Gustavo Bugs
        </h2>
        <p className="text-sm text-gray-300 z-10">Desenvolvedor Front-End</p>
      </div>

      <div className="w-2/3 p-8 flex flex-col justify-between text-left">
        <div>
          <p className="text-gray-300">
            Sou Gustavo Kardauke Bugs, desenvolvedor front-end na MK Solutions,
            onde transformo ideias em experiências interativas. Atualmente,
            estou expandindo minhas habilidades para o back-end, estudando C++,
            Python, GoLang e Java com o objetivo de me tornar um desenvolvedor
            full-stack e compreender o ciclo completo do desenvolvimento de
            software. Entre meus projetos de destaque, está o Taskify, uma
            plataforma de gerenciamento de tarefas criada especialmente para
            desenvolvedores, com foco em organização, colaboração em equipe e
            produtividade. Minha experiência abrange diversas ferramentas. No
            front-end, trabalho com HTML, CSS, TailwindCSS, TypeScript,
            JavaScript, React e Vite. No back-end, tenho conhecimentos em C++,
            Python, Java, Ruby, JavaScript, TypeScript e GoLang. Utilizo Git e
            GitHub para versionamento de código, sempre visando criar soluções
            inovadoras que ajudam desenvolvedores a serem mais eficientes e
            produtivos.
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-bold text-white">
              Resumo dos Trabalhos
            </h3>
            <ul className="list-disc list-inside text-gray-400 mt-2">
              <li>Desenvolvimento de aplicações web interativas</li>
              <li>Integração de APIs e automação de processos</li>
              <li>UI/UX design focado em experiência do usuário</li>
              <li>Otimização de performance para aplicações</li>
              <li>
                <strong>Experiência com:</strong>
              </li>
              <ul className="list-disc list-inside ml-4 text-gray-400">
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </ul>
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <a
            href="https://github.com/gustavokbugs"
            className="text-indigo-400 hover:text-purple-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-kardauke-bugs-b3258b26b/"
            className="text-indigo-400 hover:text-purple-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/bugsgustavo"
            className="text-indigo-400 hover:text-purple-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
