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

// Dicionário de traduções completas PT e EN
const TRANSLATIONS = {
  PT: {
    heroTag: "Especialista em TI & Operações Estratégicas",
    heroHeading1: "Zack",
    heroHeading2: "Neural",
    heroHeading3: "Engine.",
    heroSubtext: "Articulando inteligência de dados, engenharia de software, sólidos fundamentos jurídicos e governança de processos para blindar e escalar operações corporativas.",
    heroBadge: "TI Orientada a Gestão Empresarial, BI e Análise de Risco",
    aboutTitle: "SOBRE MIM",
    aboutSub: "Operando na intersecção entre tecnologia, governança e compliance.",
    aboutText1: "Meu nome é Isaac Lamego, sou um profissional multidisciplinar que opera na intersecção entre a tecnologia avançada, a governança corporativa e o compliance regulatório. Com uma sólida base analítica moldada em sistemas, direcionei minha carreira para a gestão estratégica, auditoria de processos e inteligência de negócios.",
    aboutText2: "Minha trajetória é marcada por um instinto natural de liderança, alta capacidade de julgamento e tomada de decisão sob pressão, competências validadas por uma altíssima velocidade de retenção e aplicação prática de conteúdos complexos. Possuo amplo domínio de rotinas de administração geral, pública e contabilidade, além de uma base jurídica robusta (com aprovação em tempo recorde em concursos de nível superior, gabaritando frentes de Direito Administrativo, Constitucional, Civil, Penal e Processual Penal). Com comunicação assertiva, excelente oratória e inglês avançado/fluente, sou especialista em gerenciar metas agressivas, conduzir reuniões executivas e estruturar operações 100% remotas em nível internacional.",
    
    skillsTitle: "ÁREAS DE ESPECIALIDADE",
    skillsSub: "Competências e arquitetura tecnológica aplicada a negócios",
    skills: [
      {
        title: "Analista de TI e Automações",
        desc: "Engenharia e arquitetura de soluções, criação de infraestruturas digitais, sites, landing pages e automações inteligentes de fluxos de trabalho para eliminar gargalos operacionais."
      },
      {
        title: "Engenharia de IA e Ferramentas Modernas",
        desc: "Alta proficiência no uso eficiente e combinado das LLMs mais potentes do mercado para os mais determinados fins. Domínio avançado do Claude e seus modelos mais poderosos, além de plataformas de ponta como Bolt.new, Lovable e Midjourney, acelerando o ciclo de desenvolvimento e a criação de produtos digitais de alto impacto."
      },
      {
        title: "Gestão de Processos e Ferramentas",
        desc: "Organização de fluxos de trabalho, documentação avançada e modelagem de processos utilizando o Notion como central de inteligência operacional e agilidade de equipes (Business Agility)."
      },
      {
        title: "Conhecimento Técnico em ERPs",
        desc: "Compreensão técnica aprofundada da estrutura, parametrização, fluxos de dados e lógica interna das principais plataformas de mercado, como Protheus, Tasy, ERP Sênior e 4medic."
      },
      {
        title: "Auditoria, Riscos e Compliance",
        desc: "Interpretação legal, aplicação de controles internos, gerenciamento de contratos complexos e segurança da informação aplicados a ecossistemas corporativos."
      },
      {
        title: "Gestão Orçamentária e Negociação",
        desc: "Capacidade autônoma de precificação, estruturação técnica e defesa de propostas comerciais de grande porte perante tomadores de decisão nacionais e estrangeiros."
      }
    ],

    eduTitle: "FORMAÇÃO ACADÊMICA",
    eduSub: "Fundamentação científica e estratégica",
    edu1_title: "Análise e Desenvolvimento de Sistemas (ADS)",
    edu1_focus: "Foco: Lógica analítica, modelagem de processos, segurança da informação e engenharia de software aplicada a negócios.",
    edu2_title: "MBA em Gestão Empresarial e Estratégia Competitiva",
    edu2_institution: "IBMR / HSM University (HSMu)",
    edu2_focus: "Foco: Business Agility, inteligência competitiva, liderança corporativa, governança e tomada de decisão orientada a dados (Data-Driven).",

    expTitle: "EXPERIÊNCIA PROFISSIONAL",
    expSub: "Aplicações práticas em cargo de estrita confiança",
    expCompany: "SkyVision Creative Studio",
    expRole: "Analista de TI, Processos e Suporte Administrativo (Contractor)",
    expPeriod: "Junho de 2024 – Presente",
    expPoints: [
      "Responsável único por toda a infraestrutura de TI da agência de marketing internacional, atuando em cargo de estrita confiança da liderança executiva com autonomia total para tomada de decisões administrativas junto à CEO.",
      "Liderança técnica e operacional na entrega de services e projetos para mais de 30 empresas e clientes atendidos, gerenciando lançamentos de cursos de grande escala e implementando landing pages, sites institucionais e automações de processos.",
      "Utilização estratégica de Inteligências Artificiais avançadas para otimizar fluxos de desenvolvimento e engenharia de prompt para automação de tarefas administrativas complexas.",
      "Centralização da governança de projetos, mapeamento de fluxos organizacionais e documentação de processos utilizando o Notion para garantir a eficiência das equipes.",
      "Condução autônoma de rotinas administrativas, gestão de prazos e reuniões de negociação internacionais, prestando atendimento direto a clientes estrangeiros e imigrantes em regime 100% remoto para países como Suíça, França, EUA, Portugal e Brasil.",
      "Desenho e estruturação técnica completa de um projeto de ecossistema empresarial moderno (aplicativo integrado de alta complexidade), sendo o único responsável pela formatação e defesa do orçamento estratégico avaliado entre R$ 60k e R$ 75k."
    ],
    expConsultingTitle: "Consultoria e Inteligência de Processos Baseada em TI",
    expConsultingPoints: [
      "Aplicação de conhecimento técnico em informática avançada e banco de dados para analisar rotinas administrativas, traduzindo regras de compliance contábil e de negócios para possíveis otimizações em sistemas corporativos.",
      "Estudo detalhado e aptidão para desenhar a lógica de funcionamento e integração de dados necessários para alimentar ecossistemas de ERP (Protheus, Tasy, Sênior e 4medic), mitigando gargalos operacionais antes da implementação técnica."
    ],

    interestTitle: "ÁREAS DE INTERESSE",
    interestsList: [
      "Auditoria de Sistemas, Riscos e Compliance Corporativo",
      "Gestão de Operações de TI e Transformação Digital",
      "Análise de Performance Corporativa e Planejamento Estratégico",
      "Coordenação de Projetos Corporativos e Gestão de Equipes Híbridas"
    ],

    contactTitle: "INICIAR DIÁLOGO SEGURO",
    contactSub: "Entre em contato para posições estratégicas e consultoria sob medida",
    contactCardTitle: "Canais de Comunicação Direta",
    formSuccess: "Seu briefing foi enviado com sucesso!",
    buttonWhatsapp: "CONVERSAR NO WHATSAPP",
    buttonWork: "VER TRABALHOS",
    buttonInquire: "SOLICITAR ANÁLISE DE PROCESSO",
    navWork: "Projetos",
    navExperience: "Experiência",
    navSkills: "Especialidades",
    navContact: "Contato"
  },
  EN: {
    heroTag: "IT Specialist & Strategic Operations",
    heroHeading1: "Zack",
    heroHeading2: "Neural",
    heroHeading3: "Engine.",
    heroSubtext: "Articulating data intelligence, software engineering, solid legal foundations, and process governance to shield and scale corporate operations.",
    heroBadge: "IT Oriented towards Business Management, BI, and Risk Analysis",
    aboutTitle: "ABOUT ME",
    aboutSub: "Operating at the intersection of technology, governance, and compliance.",
    aboutText1: "My name is Isaac Lamego; I am a multidisciplinary professional who operates at the intersection of advanced technology, corporate governance, and regulatory compliance. With a solid analytical foundation built in systems development, I directed my career to strategic management, process auditing, and business intelligence.",
    aboutText2: "My career path is marked by a natural leadership instinct, high judgment capability, and decision-making under pressure. These skills are validated by an extremely fast speed of retention and practical application of complex subjects. I possess extensive knowledge of general administration, public routines, and accounting, alongside a robust legal background (with record-time approval in major civil service examinations, achieving top scores in Administrative, Constitutional, Civil, Criminal, and Criminal Procedural Law). Featuring assertive communication, public speaking, and fluent English, I specialize in managing aggressive targets, leading executive meetings, and structuring 100% remote operations globally.",
    
    skillsTitle: "AREAS OF EXPERTISE",
    skillsSub: "Competencies and technical architecture applied to business metrics",
    skills: [
      {
        title: "IT Analyst & Automations",
        desc: "Engineering and architecture of digital systems, creation of infrastructure, high-conversion landing pages, and smart workflow automations to completely eliminate operational bottlenecks."
      },
      {
        title: "AI Engineering & Modern Tooling",
        desc: "High proficiency in the efficient and combined use of the most powerful LLMs on the market. Advanced mastery of Claude, alongside cutting-edge development tools like Bolt.new, Lovable, and Midjourney, accelerating digital product delivery."
      },
      {
        title: "Process & Workspace Management",
        desc: "Organization of custom digital workflows, advanced documentation, and process modeling using Notion as a central operational intelligence and agility hub (Business Agility)."
      },
      {
        title: "Technical Knowledge in ERPs",
        desc: "Deep technical comprehension of the inner data architectures, parameters, workflows, and logical engines of major industry systems such as Protheus, Tasy, Senior ERP, and 4medic."
      },
      {
        title: "Audit, Risk & Compliance",
        desc: "Legal interpretation, application of internal controls, management of highly complex contracts, and information security applied to corporate ecosystems."
      },
      {
        title: "Budget Management & Negotiation",
        desc: "Autonomous capability of pricing, technical structuring, and defending high-ticket commercial proposals in front of national and international decision-makers."
      }
    ],

    eduTitle: "ACADEMIC BACKGROUND",
    eduSub: "Scientific and strategic foundation",
    edu1_title: "B.S. in Analysis and Systems Development (ADS)",
    edu1_focus: "Focus: Analytical logic, process modeling, information security, and software engineering applied to businesses.",
    edu2_title: "MBA in Business Management & Competitive Strategy",
    edu2_institution: "IBMR / HSM University (HSMu)",
    edu2_focus: "Focus: Business Agility, competitive intelligence, corporate leadership, governance, and data-driven decision-making.",

    expTitle: "PROFESSIONAL EXPERIENCE",
    expSub: "Practical applications in roles of absolute trust",
    expCompany: "SkyVision Creative Studio",
    expRole: "IT, Process & Administrative Support Analyst (Contractor)",
    expPeriod: "June 2024 – Present",
    expPoints: [
      "Solely responsible for the agency's entire global IT infrastructure, reporting directly to executive leadership with complete autonomy for administrative decision-making alongside the CEO.",
      "Technical and operational leadership in project delivery for over 30 clients, managing large-scale course launches and implementing high-traffic landing pages, institutional portals, and custom automated processes.",
      "Strategic utilization of advanced Artificial Intelligence models to optimize coding pipelines and prompt engineering to automate highly complex administrative tasks.",
      "Centralized project governance, workflow mapping, and process documentation using Notion to guarantee team efficiency and transparency.",
      "Autonomous handling of administrative routines, deadlines, and international negotiation meetings, serving foreign clients and expats 100% remotely across Switzerland, France, USA, Portugal, and Brazil.",
      "Complete design and technical structuring of a modern corporate ecosystem (highly complex integrated application), being solely responsible for formatting and defending the strategic budget valued between R$ 60k and R$ 75k."
    ],
    expConsultingTitle: "IT-Based Process Consulting & Intelligence",
    expConsultingPoints: [
      "Application of advanced computer science and database structures to analyze administrative routines, translating complex tax compliance and business rules into automated system optimizations.",
      "Detailed analysis and design of logic structures and data integrations required to feed ERP ecosystems (Protheus, Tasy, Senior, and 4medic), mitigating operational bottlenecks before software implementation."
    ],

    interestTitle: "FIELDS OF INTEREST",
    interestsList: [
      "Systems Auditing, Corporate Risk & Compliance",
      "IT Operations Management & Digital Transformation",
      "Corporate Performance Analysis & Strategic Planning",
      "Corporate Project Coordination & Hybrid Team Management"
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
      setFormValidationError(lang === "PT" ? "Por favor, preencha todos os campos obrigatórios." : "Please fill in all required fields.");
      return;
    }
    setFormValidationError("");
    setFormSubmitted(true);
  };

  const handleStepOneSubmit = () => {
    if (!clientData.name) {
      setFormValidationError(lang === "PT" ? "Por favor, preencha seu nome ou organização." : "Please fill in your name or organization.");
      return;
    }
    setFormValidationError("");
    setFormStep(2);
  };

  const whatsAppLink = "https://api.whatsapp.com/send?phone=5521990315582&text=Olá%20Zack,%20gostaria%20de%20conversar%20sobre%20seus%20serviços%20de%20TI,%20Gestão%20e%20Inteligência.";

  const erpData = {
    Protheus: {
      role: lang === "PT" ? "Arquitetura e Parametrização" : "Architecture & Configuration",
      desc: lang === "PT" 
        ? "Mapeamento lógico de fluxo de faturamento, estoque e contabilidade. Integração segura de APIs para redução de redundâncias operacionais."
        : "Logical mapping of billing, inventory, and bookkeeping flows. Secure API integrations to reduce manual operations."
    },
    Tasy: {
      role: lang === "PT" ? "Gestão de Dados e Compliance em Saúde" : "Data Management & Healthcare Compliance",
      desc: lang === "PT"
        ? "Foco em fluxos de prontuários, faturamento hospitalar, LGPD e segurança de dados clínicos integrados."
        : "Focus on electronic health records, clinical billing pipelines, LGPD/GDPR compliance and safety parameters."
    },
    Senior: {
      role: lang === "PT" ? "Modelagem Organizacional & Processos" : "Organizational Modeling & HR Workflows",
      desc: lang === "PT"
        ? "Integração das frentes de recursos humanos, folha de pagamento estruturada e controles internos fiscais."
        : "Integration of corporate human capital management, automated payroll databases, and tax workflows."
    },
    "4medic": {
      role: lang === "PT" ? "Inteligência Operacional em Clínicas" : "Operational Intelligence for Medical Clinics",
      desc: lang === "PT"
        ? "Simplificação e modelagem ágil de fluxos de caixa, agendamento digitalizado e prontuários rápidos."
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
            {lang === "PT" ? "ENGLISH" : "PORTUGUÊS"}
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
            ZACKFILMS
          </span>
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-neutral-900/80 border border-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-inter text-[9px] uppercase tracking-widest text-neutral-400 font-bold">IT COMPLIANCE & OPS</span>
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
            title={muted ? "Ativar Áudio de Fundo" : "Mutar Áudio"}
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
                  {lang === "PT" ? "Operação Remota Segura" : "Secure Remote Operations"}
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
                  {lang === "PT" ? "Orçamento Único de Projetos" : "Single Project Budgets"}
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
                  <span>Dual Language Operations (PT/EN)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sólida Base Jurídica</span>
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
                    {lang === "PT" ? "Deseja agendar uma reunião ou entrevista executiva?" : "Want to schedule an executive interview?"}
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
                {lang === "PT" ? "Lógica e Estrutura de ERPs" : "ERPs Functional Logic"}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {lang === "PT" 
                  ? "Selecione os módulos abaixo para visualizar a minha aptidão e conhecimento analítico de parametrização e modelagem operacional em sistemas de mercado:"
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
                  <span className="text-[9px] text-neutral-600 block uppercase">Compliance Mapping</span>
                  <span className="text-[11px] font-mono text-neutral-400">100% Tax Compliant</span>
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
                {lang === "PT" ? "EXTENSÃO DE PROJETOS" : "ADDITIONAL ROLES"}
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
                          {lang === "PT" ? "Seu Nome / Organização *" : "Your Name / Organization *"}
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
                          {lang === "PT" ? "Foco do Serviço" : "Primary Focus"}
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
                        {lang === "PT" ? "Avançar" : "Continue"}
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
                          {lang === "PT" ? "Notas do Projeto / Descrição" : "Project Brief / Objectives"}
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
                ? "Operando na interseção de tecnologia avançada, compliance corporativo e automações de alto valor."
                : "Operating at the nexus of advanced software, legal framework audit, and high-value custom automations."}
            </p>
            <p className="text-[10px] text-neutral-700 font-mono">
              © 2026 ZACKFILMS Inc. // Secure Remote Network.
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
                <li>LANG: PORTUGUÊS / ENGLISH</li>
                <li>TEL: +55 21 99031-5582</li>
              </ul>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

