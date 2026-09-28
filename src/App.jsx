import React, { useState } from "react";
import {
  ArrowUpRight,
  Award,
  Crown,
  X,
  Sliders,
  Cpu,
  Sparkles,
  Volume2,
  VolumeX,
  Layers,
  Send,
  CheckCircle2,
  ArrowRight,
  Info,
  ShieldCheck,
  MessageSquare,
  Terminal,
  FileText,
  BookOpen,
  Briefcase,
  Activity,
  Globe,
  Layers3,
  Coins,
  AlertCircle
} from "lucide-react";

// DicionÃ¡rio de traduÃ§Ãµes completas PT e EN
const TRANSLATIONS = {
  PT: {
    heroTag: "Analista de TI & OperaÃ§Ãµes EstratÃ©gicas",
    heroHeading1: "Zack",
    heroHeading2: "Enterprise",
    heroHeading3: "Studios.",
    heroSubtext: "Articulando inteligÃªncia de dados, engenharia de software, sÃ³lidos fundamentos jurÃ­dicos e gestÃ£o administrativa de processos para escalar operaÃ§Ãµes corporativas.",
    heroBadge: "TI Orientada a GestÃ£o Empresarial, BI e AnÃ¡lise de Risco",
    aboutTitle: "SOBRE MIM",
    aboutSub: "Operando na interseÃ§Ã£o entre tecnologia e gestÃ£o administrativa.",
    aboutText1: "Meu nome Ã© Isaac Lamego, sou um profissional multidisciplinar com atuaÃ§Ã£o na interseÃ§Ã£o entre tecnologia e gestÃ£o administrativa. Com sÃ³lida base analÃ­tica moldada em sistemas, direciono minha carreira para a gestÃ£o de processos, o suporte administrativo e a inteligÃªncia de negÃ³cios.",
    aboutText2: "Tenho instinto de lideranÃ§a, boa capacidade de julgamento e tomada de decisÃ£o sob pressÃ£o, aliados Ã  alta velocidade de retenÃ§Ã£o e aplicaÃ§Ã£o prÃ¡tica de conteÃºdos complexos. Possuo domÃ­nio de rotinas de administraÃ§Ã£o geral, pÃºblica e contabilidade, alÃ©m de base jurÃ­dica sÃ³lida, com conhecimento aplicado em Direito Administrativo, Constitucional, Civil, Penal e Processual Penal. Com comunicaÃ§Ã£o assertiva, boa oratÃ³ria e inglÃªs avanÃ§ado (escrito e falado), tenho experiÃªncia em gerenciar metas, conduzir reuniÃµes executivas e apoiar operaÃ§Ãµes remotas em nÃ­vel internacional.",

    skillsTitle: "ÃREAS DE ATUAÃ‡ÃƒO",
    skillsSub: "CompetÃªncias e tecnologia aplicadas a negÃ³cios",
    skills: [
      {
        title: "AnÃ¡lise de TI e AutomaÃ§Ãµes",
        desc: "Suporte Ã  engenharia e arquitetura de soluÃ§Ãµes, criaÃ§Ã£o de infraestruturas digitais, sites, landing pages e automaÃ§Ãµes de fluxos de trabalho para reduzir gargalos operacionais."
      },
      {
        title: "Ferramentas de IA e Tecnologias Modernas",
        desc: "Uso combinado de LLMs de mercado (com foco em Claude e seus modelos) e plataformas como Bolt.new, Lovable e Midjourney, para acelerar o ciclo de desenvolvimento e a criaÃ§Ã£o de produtos digitais."
      },
      {
        title: "GestÃ£o de Processos e Ferramentas",
        desc: "OrganizaÃ§Ã£o de fluxos de trabalho, documentaÃ§Ã£o e modelagem de processos utilizando o Notion como central de inteligÃªncia operacional e apoio Ã  agilidade de equipes (Business Agility)."
      },
      {
        title: "Conhecimento TÃ©cnico em ERPs",
        desc: "Entendimento da estrutura, parametrizaÃ§Ã£o, fluxos de dados e lÃ³gica interna de plataformas como Protheus, Tasy, ERP SÃªnior e 4medic."
      },
      {
        title: "GestÃ£o Administrativa, Auditoria e Riscos",
        desc: "InterpretaÃ§Ã£o de normas legais, aplicaÃ§Ã£o de controles internos, apoio Ã  gestÃ£o de contratos e atenÃ§Ã£o Ã  seguranÃ§a da informaÃ§Ã£o em ambientes corporativos."
      },
      {
        title: "GestÃ£o OrÃ§amentÃ¡ria e NegociaÃ§Ã£o",
        desc: "Apoio na precificaÃ§Ã£o, estruturaÃ§Ã£o tÃ©cnica e defesa de propostas comerciais junto a tomadores de decisÃ£o nacionais e estrangeiros."
      }
    ],

    eduTitle: "FORMAÃ‡ÃƒO ACADÃŠMICA",
    eduSub: "FundamentaÃ§Ã£o cientÃ­fica e estratÃ©gica",
    edu1_title: "AnÃ¡lise e Desenvolvimento de Sistemas (ADS)",
    edu1_focus: "IBMR Â· Em conclusÃ£o (Ãºltima avaliaÃ§Ã£o pendente). Complemento: Processos Gerenciais (IBMR, em conclusÃ£o). Foco: lÃ³gica analÃ­tica, modelagem de processos, integraÃ§Ã£o de operaÃ§Ãµes e qualidade.",
    edu2_title: "MBA em GestÃ£o Empresarial e EstratÃ©gia Competitiva",
    edu2_institution: "HSM University (HSMu) Â· InÃ­cio apÃ³s o ADS",
    edu2_focus: "Foco: gestÃ£o empresarial, Business Agility, inteligÃªncia competitiva, lideranÃ§a corporativa, gestÃ£o administrativa e tomada de decisÃ£o orientada a dados.",

    expTitle: "EXPERIÃŠNCIA PROFISSIONAL",
    expSub: "AplicaÃ§Ãµes prÃ¡ticas em cargo de confianÃ§a",
    expCompany: "SkyVision Creative Studio",
    expRole: "Analista de TI, Processos e Suporte Administrativo (Contractor)",
    expPeriod: "Junho de 2024 â€“ Presente",
    expPoints: [
      "ResponsÃ¡vel pela infraestrutura de TI de uma empresa internacional de serviÃ§os digitais, atuando com autonomia junto Ã  lideranÃ§a executiva em decisÃµes administrativas e operacionais.",
      "Apoio tÃ©cnico e operacional na entrega de serviÃ§os e projetos para mais de 30 empresas atendidas, incluindo lanÃ§amentos de cursos de grande escala, landing pages, sites institucionais e automaÃ§Ãµes de processos.",
      "Uso estratÃ©gico de inteligÃªncias artificiais para otimizar fluxos de desenvolvimento e engenharia de prompt aplicada a tarefas administrativas.",
      "CentralizaÃ§Ã£o da gestÃ£o administrativa de projetos, mapeamento de fluxos organizacionais e documentaÃ§Ã£o de processos no Notion para apoiar a eficiÃªncia das equipes.",
      "ConduÃ§Ã£o de rotinas administrativas, gestÃ£o de prazos e reuniÃµes de negociaÃ§Ã£o internacionais, com atendimento direto a clientes estrangeiros em regime 100% remoto (SuÃ­Ã§a, Alemanha, FranÃ§a, EUA, Portugal e Brasil).",
      "EstruturaÃ§Ã£o tÃ©cnica de um projeto de ecossistema empresarial (aplicativo integrado de alta complexidade), incluindo a formataÃ§Ã£o e defesa de orÃ§amento estratÃ©gico entre R$ 60k e R$ 75k."
    ],
    expConsultingTitle: "Consultoria de TI e Processos",
    expConsultingPoints: [
      "AplicaÃ§Ã£o de conhecimento em informÃ¡tica e banco de dados para analisar rotinas administrativas, traduzindo regras contÃ¡beis e de gestÃ£o administrativa em oportunidades de otimizaÃ§Ã£o de sistemas.",
      "Estudo da lÃ³gica de funcionamento e integraÃ§Ã£o de dados de ecossistemas de ERP (Protheus, Tasy, SÃªnior e 4medic), identificando gargalos operacionais antes da implementaÃ§Ã£o tÃ©cnica."
    ],

    interestTitle: "ÃREAS DE INTERESSE",
    interestsList: [
      "Auditoria de Sistemas, Riscos e GestÃ£o Administrativa",
      "GestÃ£o de OperaÃ§Ãµes de TI e TransformaÃ§Ã£o Digital",
      "AnÃ¡lise de Performance Corporativa e Planejamento EstratÃ©gico",
      "CoordenaÃ§Ã£o de Projetos e Apoio Ã  GestÃ£o de Equipes HÃ­bridas"
    ],

    contactTitle: "INICIAR DIÃLOGO SEGURO",
    contactSub: "Entre em contato para posiÃ§Ãµes estratÃ©gicas e consultoria sob medida",
    contactCardTitle: "Canais de ComunicaÃ§Ã£o Direta",
    formSuccess: "Seu briefing foi enviado com sucesso!",
    buttonWhatsapp: "CONVERSAR NO WHATSAPP",
    buttonWork: "VER TRABALHOS",
    buttonInquire: "SOLICITAR ANÃLISE DE PROCESSO",
    navWork: "Projetos",
    navExperience: "ExperiÃªncia",
    navSkills: "Especialidades",
    navContact: "Contato"
  },
  EN: {
    heroTag: "IT Analyst & Strategic Operations",
    heroHeading1: "Zack",
    heroHeading2: "Enterprise",
    heroHeading3: "Studios.",
    heroSubtext: "Articulating data intelligence, software engineering, solid legal foundations, and administrative process management to scale corporate operations.",
    heroBadge: "IT Oriented towards Business Management, BI, and Risk Analysis",
    aboutTitle: "ABOUT ME",
    aboutSub: "Operating at the intersection of technology and administrative management.",
    aboutText1: "My name is Isaac Lamego; I am a multidisciplinary professional working at the intersection of technology and administrative management. With a solid analytical foundation built in systems, I direct my career toward process management, administrative support, and business intelligence.",
    aboutText2: "I bring a leadership instinct, good judgment, and decision-making under pressure, combined with a fast speed of retention and practical application of complex subjects. I have command of general and public administration routines and accounting, alongside a solid legal background with applied knowledge in Administrative, Constitutional, Civil, Criminal, and Criminal Procedural Law. With assertive communication, good public speaking, and advanced English (written and spoken), I have experience managing targets, leading executive meetings, and supporting remote operations at an international level.",

    skillsTitle: "AREAS OF EXPERTISE",
    skillsSub: "Competencies and technology applied to business",
    skills: [
      {
        title: "IT Analysis & Automations",
        desc: "Support for engineering and solution architecture, creation of digital infrastructure, websites, landing pages, and workflow automations to reduce operational bottlenecks."
      },
      {
        title: "AI Tools & Modern Technologies",
        desc: "Combined use of market-leading LLMs (focused on Claude and its models) and platforms such as Bolt.new, Lovable, and Midjourney to accelerate development and digital product creation."
      },
      {
        title: "Process & Tool Management",
        desc: "Organization of workflows, documentation, and process modeling using Notion as an operational intelligence hub, supporting team agility (Business Agility)."
      },
      {
        title: "Technical Knowledge in ERPs",
        desc: "Understanding of the structure, configuration, data flows, and internal logic of platforms such as Protheus, Tasy, Senior ERP, and 4medic."
      },
      {
        title: "Administrative Management, Audit & Risk",
        desc: "Interpretation of legal norms, application of internal controls, support for contract management, and attention to information security in corporate environments."
      },
      {
        title: "Budget Management & Negotiation",
        desc: "Support in pricing, technical structuring, and defense of commercial proposals before national and international decision-makers."
      }
    ],

    eduTitle: "ACADEMIC BACKGROUND",
    eduSub: "Scientific and strategic foundation",
    edu1_title: "Analysis and Systems Development (ADS)",
    edu1_focus: "IBMR Â· In progress (final assessment pending). Complement: Managerial Processes (IBMR, in progress). Focus: analytical logic, process modeling, operations integration, and quality.",
    edu2_title: "MBA in Business Management & Competitive Strategy",
    edu2_institution: "HSM University (HSMu) Â· Starts after ADS",
    edu2_focus: "Focus: business management, Business Agility, competitive intelligence, corporate leadership, administrative management, and data-driven decision-making.",

    expTitle: "PROFESSIONAL EXPERIENCE",
    expSub: "Practical applications in a position of trust",
    expCompany: "SkyVision Creative Studio",
    expRole: "IT, Process & Administrative Support Analyst (Contractor)",
    expPeriod: "June 2024 â€“ Present",
    expPoints: [
      "Responsible for the IT infrastructure of an international digital services company, working autonomously with executive leadership on administrative and operational decisions.",
      "Technical and operational support in delivering services and projects for over 30 client companies, including large-scale course launches, landing pages, institutional websites, and process automations.",
      "Strategic use of artificial intelligence to optimize development workflows, with prompt engineering applied to administrative tasks.",
      "Centralized administrative project management, organizational workflow mapping, and process documentation in Notion to support team efficiency.",
      "Administrative routines, deadline management, and international negotiation meetings, with direct service to foreign clients 100% remotely (Switzerland, Germany, France, USA, Portugal, and Brazil).",
      "Technical structuring of a corporate ecosystem project (highly complex integrated application), including the formatting and defense of a strategic budget between R$ 60k and R$ 75k."
    ],
    expConsultingTitle: "IT & Process Consulting",
    expConsultingPoints: [
      "Application of computing and database knowledge to analyze administrative routines, translating accounting and administrative management rules into system optimization opportunities.",
      "Study of the operating logic and data integration of ERP ecosystems (Protheus, Tasy, Senior, and 4medic), identifying operational bottlenecks before technical implementation."
    ],

    interestTitle: "FIELDS OF INTEREST",
    interestsList: [
      "Systems Auditing, Risk & Administrative Management",
      "IT Operations Management & Digital Transformation",
      "Corporate Performance Analysis & Strategic Planning",
      "Project Coordination & Hybrid Team Management Support"
    ],

    contactTitle: "INITIATE SECURE DIALOGUE",
    contactSub: "Get in touch for strategic positions, consulting, or partnerships",
    contactCardTitle: "Direct Communication Channels",
    formSuccess: "Your brief was successfully transmitted!",
    buttonWhatsapp: "CHATTING ON WHATSAPP",
    buttonWork: "VIEW PROJECTS",
    buttonInquire: "REQUEST PROCESS ANALYSIS",
    navWork: "Projects",
    navExperience: "Experience",
    navSkills: "Specialties",
    navContact: "Contact"
  }
};

export default function App() {
  const [lang, setLang] = useState("PT");
  const [menuOpen, setMenuOpen] = useState(false);
  const [muted, setMuted] = useState(true);
  const [activeERP, setActiveERP] = useState("Protheus");

  // Lead inquiry form state
  const [formStep, setFormStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValidationError, setFormValidationError] = useState("");
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    serviceType: "BI, Data & Business Analytics",
    notes: ""
  });

  const text = TRANSLATIONS[lang];

  const handleLangToggle = () => {
    setLang(prev => (prev === "PT" ? "EN" : "PT"));
  };

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!clientData.name || !clientData.email) {
      setFormValidationError(lang === "PT" ? "Por favor, preencha todos os campos obrigatÃ³rios." : "Please fill in all required fields.");
      return;
    }
    setFormValidationError("");
    setFormSubmitted(true);
  };

  const handleStepOneSubmit = () => {
    if (!clientData.name) {
      setFormValidationError(lang === "PT" ? "Por favor, preencha seu nome ou organizaÃ§Ã£o." : "Please fill in your name or organization.");
      return;
    }
    setFormValidationError("");
    setFormStep(2);
  };

  const whatsAppLink = "https://api.whatsapp.com/send?phone=5521990315582&text=OlÃ¡%20Zack,%20gostaria%20de%20conversar%20sobre%20seus%20serviÃ§os%20de%20TI,%20GestÃ£o%20e%20InteligÃªncia.";

  const erpData = {
    Protheus: {
      role: lang === "PT" ? "Arquitetura e ParametrizaÃ§Ã£o" : "Architecture & Configuration",
      desc: lang === "PT"
        ? "Mapeamento lÃ³gico de fluxo de faturamento, estoque e contabilidade. IntegraÃ§Ã£o segura de APIs para reduÃ§Ã£o de redundÃ¢ncias operacionais."
        : "Logical mapping of billing, inventory, and bookkeeping flows. Secure API integrations to reduce manual operations."
    },
    Tasy: {
      role: lang === "PT" ? "GestÃ£o de Dados em SaÃºde" : "Healthcare Data Management",
      desc: lang === "PT"
        ? "Foco em fluxos de prontuÃ¡rios, faturamento hospitalar, LGPD e seguranÃ§a de dados clÃ­nicos integrados."
        : "Focus on electronic health records, clinical billing pipelines, LGPD/GDPR compliance and safety parameters."
    },
    Senior: {
      role: lang === "PT" ? "Modelagem Organizacional & Processos" : "Organizational Modeling & HR Workflows",
      desc: lang === "PT"
        ? "IntegraÃ§Ã£o das frentes de recursos humanos, folha de pagamento estruturada e controles internos fiscais."
        : "Integration of corporate human capital management, automated payroll databases, and tax workflows."
    },
    "4medic": {
      role: lang === "PT" ? "InteligÃªncia Operacional em ClÃ­nicas" : "Operational Intelligence for Medical Clinics",
      desc: lang === "PT"
        ? "SimplificaÃ§Ã£o e modelagem Ã¡gil de fluxos de caixa, agendamento digitalizado e prontuÃ¡rios rÃ¡pidos."
        : "Agile modeling of physical and digital cash flows, appointment automation, and quick EHR layouts."
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-inter overflow-x-hidden selection:bg-neutral-800 selection:text-white">

      <style dangerouslySetInnerHTML={{ __html: `
        @import url("https://db.onlinewebfonts.com/c/8b75d9dcff6a48c35a46656192adf019?family=FSP+DEMO+-+PODIUM+Sharp+4.11");
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        .font-podium {
          font-family: "FSP DEMO - PODIUM Sharp 4.11", "Impact", "Arial Black", sans-serif;
          letter-spacing: 0.05em;
        }
        .font-inter {
          font-family: "Inter", sans-serif;
        }

        .glass-card {
          background: rgba(15, 15, 15, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .glass-card:hover {
          border-color: rgba(16, 185, 129, 0.3);
          background: rgba(15, 15, 15, 0.8);
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #111;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #222;
        }
      `}} />

      <div className="absolute top-1/10 left-1/10 w-96 h-96 bg-emerald-950/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-neutral-900/30 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: "4s" }} />

      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } bg-black/98 backdrop-blur-md`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <span className="font-podium text-white font-bold uppercase text-2xl tracking-wider">
            ZACK ENGINE
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100vh-140px)] gap-8">
          <button onClick={() => scrollToId("about-section")} className="font-podium text-white uppercase text-2xl tracking-wide hover:text-emerald-400 transition-all">
            {lang === "PT" ? "SOBRE MIM" : "ABOUT ME"}
          </button>
          <button onClick={() => scrollToId("skills-section")} className="font-podium text-white uppercase text-2xl tracking-wide hover:text-emerald-400 transition-all">
            {text.navSkills}
          </button>
          <button onClick={() => scrollToId("experience-section")} className="font-podium text-white uppercase text-2xl tracking-wide hover:text-emerald-400 transition-all">
            {text.navExperience}
          </button>
          <button onClick={() => scrollToId("contact-section")} className="font-podium text-white uppercase text-2xl tracking-wide hover:text-emerald-400 transition-all">
            {text.navContact}
          </button>

          <button
            onClick={handleLangToggle}
            className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 border border-neutral-800"
          >
            <Globe className="w-4 h-4" />
            {lang === "PT" ? "ENGLISH" : "PORTUGUÃŠS"}
          </button>

          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500 text-black px-6 py-4 text-xs tracking-widest uppercase font-bold text-center"
          >
            <MessageSquare className="w-4 h-4" />
            {text.buttonWhatsapp}
          </a>
        </div>
      </div>

      <nav className="sticky top-0 z-40 bg-black/85 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 lg:py-5">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="font-podium text-white font-bold uppercase text-lg sm:text-2xl tracking-widest">
            ZACK STUDIOS
          </span>
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-neutral-900/80 border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-inter text-[9px] uppercase tracking-widest text-neutral-400 font-bold">IT & ADMIN OPS</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <button onClick={() => scrollToId("about-section")} className="font-inter text-[11px] text-neutral-400 tracking-widest uppercase hover:text-white transition-colors">
            {lang === "PT" ? "SOBRE" : "ABOUT"}
          </button>
          <button onClick={() => scrollToId("skills-section")} className="font-inter text-[11px] text-neutral-400 tracking-widest uppercase hover:text-white transition-colors">
            {text.navSkills}
          </button>
          <button onClick={() => scrollToId("experience-section")} className="font-inter text-[11px] text-neutral-400 tracking-widest uppercase hover:text-white transition-colors">
            {text.navExperience}
          </button>
          <button onClick={() => scrollToId("contact-section")} className="font-inter text-[11px] text-neutral-400 tracking-widest uppercase hover:text-white transition-colors">
            {text.navContact}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={handleLangToggle}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-850 rounded-sm text-[10px] tracking-widest uppercase font-bold text-emerald-400 border border-neutral-800 transition-colors"
            title="Mudar Idioma / Toggle Language"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "PT" ? "EN" : "PT"}
          </button>

          <button
            onClick={() => setMuted(!muted)}
            className="p-2.5 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
            title={muted ? "Ativar Ãudio de Fundo" : "Mutar Ãudio"}
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-emerald-500/30 hover:border-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/15 px-5 py-2.5 text-emerald-400 text-[11px] tracking-widest uppercase font-bold transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4" />
            {text.buttonWhatsapp}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={handleLangToggle}
            className="px-2.5 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-[10px] text-emerald-400 font-bold"
          >
            {lang === "PT" ? "EN" : "PT"}
          </button>
          <button
            className="flex flex-col space-y-1.5 p-1"
            onClick={() => setMenuOpen(true)}
          >
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-4 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-neutral-950">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
            autoPlay
            muted={muted}
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_100%)]" />
        </div>

        <div className="absolute inset-0 bg-white/5 mix-blend-overlay z-1" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/35 z-2" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/45 z-2" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-5 lg:mb-7">
              <Crown className="w-4 h-4 text-emerald-400" />
              <span className="font-inter text-neutral-300 text-xs sm:text-sm tracking-[0.25em] uppercase font-bold">
                {text.heroTag}
              </span>
            </div>

            <h1 className="font-podium text-white uppercase leading-[0.9] tracking-tighter mb-6">
              <span className="block" style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}>
                {text.heroHeading1}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-400" style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}>
                {text.heroHeading2}
              </span>
              <span className="block" style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}>
                {text.heroHeading3}
              </span>
            </h1>

            <p className="font-inter text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mt-6">
              {text.heroSubtext}
            </p>

            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-950/30 border border-emerald-500/20 rounded-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-mono text-emerald-300 font-semibold">{text.heroBadge}</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 lg:mt-10">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-emerald-500 text-black hover:bg-emerald-400 px-6 py-3.5 text-xs tracking-widest uppercase font-bold transition-all duration-300"
              >
                {lang === "PT" ? "ENTRAR EM CONTATO AGORA" : "GET IN TOUCH NOW"}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => scrollToId("about-section")}
                className="group flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-850 text-white px-6 py-3.5 text-xs tracking-widest uppercase font-bold transition-all"
              >
                {lang === "PT" ? "CONHECER PERFIL" : "VIEW PROFILE"}
                <Terminal className="w-4 h-4 text-emerald-400" />
              </button>
            </div>

            <div className="flex flex-wrap gap-8 sm:gap-12 mt-12 sm:mt-16 border-t border-neutral-900 pt-8">
              <div>
                <p className="font-podium text-white text-lg sm:text-2xl font-bold">100%</p>
                <p className="font-inter text-neutral-500 text-[10px] tracking-widest uppercase mt-0.5">
                  {lang === "PT" ? "OperaÃ§Ã£o Remota Segura" : "Secure Remote Operations"}
                </p>
              </div>
              <div>
                <p className="font-podium text-white text-lg sm:text-2xl font-bold">30+</p>
                <p className="font-inter text-neutral-500 text-[10px] tracking-widest uppercase mt-0.5">
                  {lang === "PT" ? "Empresas Atendidas" : "Companies Served"}
                </p>
              </div>
              <div>
                <p className="font-podium text-white text-lg sm:text-2xl font-bold">R$ 75k</p>
                <p className="font-inter text-neutral-500 text-[10px] tracking-widest uppercase mt-0.5">
                  {lang === "PT" ? "OrÃ§amento Ãšnico de Projetos" : "Single Project Budgets"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-section" className="w-full py-20 sm:py-28 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-4 space-y-4">
              <span className="text-emerald-400 text-xs font-mono uppercase tracking-[0.25em] font-semibold block">
                01 // PROFILE
              </span>
              <h2 className="font-podium text-3xl sm:text-5xl uppercase tracking-wider leading-none">
                {text.aboutTitle}
              </h2>
              <p className="text-xs text-neutral-500 font-mono tracking-widest uppercase">
                {text.aboutSub}
              </p>
              <div className="pt-4 border-t border-neutral-900 space-y-3">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{lang === "PT" ? "InglÃªs avanÃ§ado (escrito e falado)" : "Advanced English (written and spoken)"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SÃ³lida Base JurÃ­dica</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              <div className="p-6 sm:p-8 bg-black/40 border border-neutral-900 rounded-sm relative">
                <div className="absolute top-0 left-0 w-1 h-12 bg-emerald-500" />
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                  {text.aboutText1}
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-black/40 border border-neutral-900 rounded-sm relative">
                <div className="absolute top-0 left-0 w-1 h-12 bg-emerald-500" />
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {text.aboutText2}
                </p>
              </div>

              <div className="flex items-center justify-between p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-sm">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs tracking-wider text-neutral-300 font-semibold">
                    {lang === "PT" ? "Deseja agendar uma reuniÃ£o ou entrevista executiva?" : "Want to schedule an executive interview?"}
                  </span>
                </div>
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold hover:text-emerald-300 transition-colors uppercase shrink-0"
                >
                  {lang === "PT" ? "Agendar" : "Schedule"}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="skills-section" className="w-full py-20 sm:py-28 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <p className="text-emerald-400 text-xs font-mono uppercase tracking-[0.25em] font-semibold mb-2">02 // CAPABILITIES</p>
              <h2 className="font-podium text-3xl sm:text-5xl uppercase tracking-wider">{text.skillsTitle}</h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mt-3 md:mt-0 font-mono">
              {text.skillsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {text.skills.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                <span className="absolute right-4 top-4 text-neutral-900 font-podium text-3xl select-none group-hover:text-emerald-950/40 transition-colors">
                  0{index + 1}
                </span>

                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-sm bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    {index === 0 && <Terminal className="w-5 h-5 text-emerald-400" />}
                    {index === 1 && <Cpu className="w-5 h-5 text-emerald-400" />}
                    {index === 2 && <Layers3 className="w-5 h-5 text-emerald-400" />}
                    {index === 3 && <Layers className="w-5 h-5 text-emerald-400" />}
                    {index === 4 && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                    {index === 5 && <Coins className="w-5 h-5 text-emerald-400" />}
                  </div>

                  <h3 className="font-podium text-lg text-white group-hover:text-emerald-400 transition-colors uppercase">
                    {skill.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="w-full py-16 sm:py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black p-6 sm:p-10 border border-neutral-900">

            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                ERP COMPREHENSION MODEL
              </span>
              <h3 className="font-podium text-xl sm:text-2xl uppercase text-white">
                {lang === "PT" ? "LÃ³gica e Estrutura de ERPs" : "ERPs Functional Logic"}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === "PT"
                  ? "Selecione os mÃ³dulos abaixo para visualizar a minha aptidÃ£o e conhecimento analÃ­tico de parametrizaÃ§Ã£o e modelagem operacional em sistemas de mercado:"
                  : "Select any system below to inspect my analytical competence and parametric structural understanding:"}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {Object.keys(erpData).map((erp) => (
                  <button
                    key={erp}
                    onClick={() => setActiveERP(erp)}
                    className={`px-3 py-1.5 text-xs uppercase font-mono font-bold transition-all ${
                      activeERP === erp
                        ? "bg-white text-black"
                        : "bg-neutral-900 text-neutral-400 hover:text-white"
                    }`}
                  >
                    {erp}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-neutral-950 p-6 border border-neutral-900 rounded-sm">
              <div className="flex items-center justify-between border-b border-neutral-900 pb-3 mb-4">
                <span className="text-[10px] font-mono text-neutral-500 uppercase">SYS_LOGIC : {activeERP}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                {erpData[activeERP].role}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed font-normal">
                {erpData[activeERP].desc}
              </p>

              <div className="mt-4 pt-4 border-t border-neutral-900 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] text-neutral-600 block uppercase">Integration API Status</span>
                  <span className="text-[11px] font-mono text-neutral-400">REST / SOAP Verified</span>
                </div>
                <div>
                  <span className="text-[9px] text-neutral-600 block uppercase">Process Mapping</span>
                  <span className="text-[11px] font-mono text-neutral-400">Fiscal Flows Mapped</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="experience-section" className="w-full py-20 sm:py-28 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="max-w-xl mb-12 sm:mb-16">
            <span className="text-emerald-400 text-xs font-mono uppercase tracking-[0.25em] font-semibold block mb-2">
              03 // TIMELINE
            </span>
            <h2 className="font-podium text-3xl sm:text-5xl uppercase tracking-wider">
              {text.expTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-mono">
              {text.expSub}
            </p>
          </div>

          <div className="space-y-12">

            <div className="p-6 sm:p-10 bg-neutral-950 border border-neutral-900 rounded-sm relative">
              <div className="absolute -top-3.5 left-6 bg-emerald-500 text-black text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1">
                {text.expPeriod}
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-900 pb-6 mb-6">
                <div>
                  <h3 className="font-podium text-xl sm:text-2xl text-white uppercase">
                    {text.expCompany}
                  </h3>
                  <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mt-1">
                    {text.expRole}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono uppercase">
                    Switzerland, France, USA, PT, BR (100% Remote)
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {text.expPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-10 bg-neutral-950 border border-neutral-900 rounded-sm relative">
              <div className="absolute -top-3.5 left-6 bg-neutral-900 text-white text-[9px] font-mono font-bold tracking-widest uppercase px-3 py-1 border border-neutral-850">
                {lang === "PT" ? "EXTENSÃƒO DE PROJETOS" : "ADDITIONAL ROLES"}
              </div>

              <div className="border-b border-neutral-900 pb-4 mb-6">
                <h3 className="font-podium text-lg sm:text-xl text-white uppercase">
                  {text.expConsultingTitle}
                </h3>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">TI, Contabilidade & Processos</span>
              </div>

              <ul className="space-y-4">
                {text.expConsultingPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4 space-y-4">
              <span className="text-emerald-400 text-xs font-mono uppercase tracking-[0.25em] font-semibold block">
                04 // EDUCATION
              </span>
              <h2 className="font-podium text-3xl sm:text-5xl uppercase tracking-wider">
                {text.eduTitle}
              </h2>
              <p className="text-xs text-neutral-500 font-mono">
                {text.eduSub}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-black border border-neutral-900 rounded-sm space-y-4">
                <BookOpen className="w-8 h-8 text-emerald-400" />
                <h3 className="font-podium text-lg text-white uppercase">
                  {text.edu1_title}
                </h3>
                <div className="h-px bg-neutral-900" />
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {text.edu1_focus}
                </p>
              </div>

              <div className="p-6 bg-black border border-neutral-900 rounded-sm space-y-4">
                <Award className="w-8 h-8 text-emerald-400" />
                <h3 className="font-podium text-lg text-white uppercase">
                  {text.edu2_title}
                </h3>
                <p className="text-xs text-emerald-300 font-bold uppercase font-mono tracking-wider">
                  {text.edu2_institution}
                </p>
                <div className="h-px bg-neutral-900" />
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {text.edu2_focus}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h3 className="font-podium text-lg text-white uppercase text-center mb-10 tracking-widest">
            {text.interestTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {text.interestsList.map((interest, index) => (
              <div
                key={index}
                className="p-4 bg-neutral-950 border border-neutral-900 text-center text-xs text-neutral-300 font-semibold tracking-wide uppercase flex items-center justify-center min-h-[80px]"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-section" className="w-full py-20 sm:py-28 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="text-emerald-400 text-xs font-mono uppercase tracking-[0.2em] block mb-2">
              05 // TRANSMIT INFORMATION
            </span>
            <h2 className="font-podium text-3xl sm:text-5xl uppercase tracking-wider">
              {text.contactTitle}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-3 max-w-lg mx-auto leading-relaxed">
              {text.contactSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

            <div className="md:col-span-5 bg-black border border-neutral-900 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-podium text-sm text-white uppercase tracking-widest border-b border-neutral-900 pb-3 mb-4">
                  {text.contactCardTitle}
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] uppercase text-neutral-500 block">General / AI Systems</span>
                    <a href="mailto:neuroforgezack@gmail.com" className="text-xs text-emerald-400 hover:underline font-mono">
                      neuroforgezack@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase text-neutral-500 block">Creative Studio / Operations</span>
                    <a href="mailto:contato.zackfilms@gmail.com" className="text-xs text-emerald-400 hover:underline font-mono">
                      contato.zackfilms@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase text-neutral-500 block">WhatsApp Coordinate</span>
                    <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-200 hover:text-emerald-400 font-bold font-mono">
                      +55 21 99031-5582
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold uppercase tracking-widest text-center block transition-colors"
                >
                  {text.buttonWhatsapp}
                </a>
              </div>
            </div>

            <div className="md:col-span-7 bg-black border border-neutral-900 p-6 sm:p-8">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="font-podium text-lg text-white uppercase tracking-wider">
                    {text.formSuccess}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-normal font-mono">
                    SECURE_QUEUE_INITIATED // SYS OK
                  </p>
                </div>
              ) : (
                <div className="space-y-4">

                  {formValidationError && (
                    <div className="p-3 bg-red-950/45 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{formValidationError}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pb-2 border-b border-neutral-900 mb-2">
                    <span className="text-[9px] font-mono uppercase text-neutral-500">Form Step {formStep} / 2</span>
                  </div>

                  {formStep === 1 ? (
                    <div className="space-y-4">
                      <div>
                        <label className="text-[10px] uppercase text-neutral-500 tracking-wider block font-bold mb-1">
                          {lang === "PT" ? "Seu Nome / OrganizaÃ§Ã£o *" : "Your Name / Organization *"}
                        </label>
                        <input
                          type="text"
                          required
                          value={clientData.name}
                          onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
                          placeholder="Acme Corp."
                          className="w-full bg-neutral-950 border border-neutral-850 focus:border-neutral-700 text-xs px-3 py-2.5 text-white placeholder-neutral-700 outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase text-neutral-500 tracking-wider block font-bold mb-1">
                          {lang === "PT" ? "Foco do ServiÃ§o" : "Primary Focus"}
                        </label>
                        <select
                          value={clientData.serviceType}
                          onChange={(e) => setClientData({ ...clientData, serviceType: e.target.value })}
                          className="w-full bg-neutral-950 border border-neutral-850 text-xs px-3 py-2.5 text-white outline-none"
                        >
                          <option>BI, Data & Business Analytics</option>
                          <option>AI Prompts & Workflow Automation</option>
                          <option>IT Infrastructure & Remote Ops</option>
                          <option>Risk Mitigation & Auditing</option>
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={handleStepOneSubmit}
                        className="w-full py-3 bg-white hover:bg-neutral-200 text-black text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-1"
                      >
                        {lang === "PT" ? "AvanÃ§ar" : "Continue"}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="text-[10px] uppercase text-neutral-500 tracking-wider block font-bold mb-1">
                          {lang === "PT" ? "E-mail de Contato *" : "Contact Email *"}
                        </label>
                        <input
                          type="email"
                          required
                          value={clientData.email}
                          onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
                          placeholder="corporate@acme.com"
                          className="w-full bg-neutral-950 border border-neutral-850 focus:border-neutral-700 text-xs px-3 py-2.5 text-white placeholder-neutral-700 outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase text-neutral-500 tracking-wider block font-bold mb-1">
                          {lang === "PT" ? "Notas do Projeto / DescriÃ§Ã£o" : "Project Brief / Objectives"}
                        </label>
                        <textarea
                          rows="3"
                          value={clientData.notes}
                          onChange={(e) => setClientData({ ...clientData, notes: e.target.value })}
                          placeholder="..."
                          className="w-full bg-neutral-950 border border-neutral-850 focus:border-neutral-700 text-xs p-3 text-white placeholder-neutral-700 outline-none resize-none"
                        />
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setFormStep(1)}
                          className="w-1/3 py-3 bg-neutral-900 text-xs text-neutral-400 hover:text-white uppercase tracking-widest font-bold"
                        >
                          {lang === "PT" ? "Voltar" : "Back"}
                        </button>
                        <button
                          type="button"
                          onClick={handleInquirySubmit}
                          className="w-2/3 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1"
                        >
                          {text.buttonInquire}
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <footer className="w-full bg-black border-t border-neutral-900 py-12 text-neutral-500 text-xs font-inter">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row justify-between gap-8">

          <div className="space-y-3 max-w-xs">
            <span className="font-podium text-white text-md tracking-widest">
              ZACK ENGINE
            </span>
            <p className="leading-relaxed text-[11px]">
              {lang === "PT"
                ? "Operando na interseÃ§Ã£o entre tecnologia, gestÃ£o administrativa e automaÃ§Ãµes de alto valor."
                : "Operating at the intersection of technology, administrative management, and high-value automations."}
            </p>
            <p className="text-[10px] text-neutral-700 font-mono">
              Â© 2026 ZACKFILMS Inc. // Secure Remote Network.
            </p>
            <p className="text-[10px] text-neutral-700 font-mono">
              {lang === "PT" ? "Todos os direitos reservados." : "All rights reserved."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white text-[11px] uppercase font-bold tracking-wider mb-3">COORDINATES</h4>
              <ul className="space-y-1.5 text-[11px]">
                <li><button onClick={() => scrollToId("about-section")} className="hover:text-white transition-colors">{text.aboutTitle}</button></li>
                <li><button onClick={() => scrollToId("skills-section")} className="hover:text-white transition-colors">{text.navSkills}</button></li>
                <li><button onClick={() => scrollToId("experience-section")} className="hover:text-white transition-colors">{text.navExperience}</button></li>
                <li><button onClick={() => scrollToId("contact-section")} className="hover:text-white transition-colors text-emerald-400">{text.navContact}</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-[11px] uppercase font-bold tracking-wider mb-3">SYSTEM</h4>
              <ul className="space-y-1 text-neutral-600 font-mono text-[9px] uppercase">
                <li>STATUS: SECURE</li>
                <li>IP: LOCALHOST</li>
                <li>LANG: PORTUGUÃŠS / ENGLISH</li>
                <li>TEL: +55 21 99031-5582</li>
              </ul>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
        }
