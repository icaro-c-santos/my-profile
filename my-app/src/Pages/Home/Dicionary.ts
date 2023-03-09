import project_01 from "../../imgs/project-01.png";
import project_02 from "../../imgs/project-02.png";

export const listImgs: string[] = [project_01, project_02];

const date = new Date().getFullYear() - 1997;
const semester = (new Date().getFullYear() - 2020) * 2 // mudar para calcular o semestre corretamente
export const DICTIONARY = {
  wellcomeTitle:`SEJA BEM VINDO AO MEU PERFIL!`,
  WellcomeSubTitle:`Siga adiante para saber um pouco mais sobre mim.`,
  wellcome: ` Olá, me chamo Ícaro, tenho ${date} anos, sou um apaixonado por
    programação, buscando a cada dia aprender um pouco mais sobre esse
    universo enorme da computação, atualmente estudo na UFBA ${semester}º
    semestre.`,
  summary: `Apaixonado por programação, ao lado é possível conferir alguns
    projetos pessoais que desenvolvi buscando sempre seguir os padrões de
    projetos e documentação, é claro que ainda sou um Padawan, porém, tentei
    seguir as principais boas práticas do mercado, se quiser saber um pouco 
    mais sobre os projetos é possível conferir na seção "Projetos" os detalhes, 
    documentação, levantamento de requisitos e tudo mais sobre os mesmo. Ou 
    se estiver com muita pressa pode conferir um resumo de minhas 
    qualificações e experiências no meu curriculo simplificado logo aqui abaixo.`,
    linkCurriculum:""
};
