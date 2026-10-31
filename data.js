/* ==========================================================================
   DT-U-Bordeaux — site content
   Everything shown on the site comes from this file. To add a project,
   member or publication, add an entry to the matching list below.
   ========================================================================== */

const SITE = {
  name: "DT-U-Bordeaux",
  fullName: "Digital Twin Research Group",
  university: "University of Bordeaux",
  tagline: "Engineering digital twins of cities, systems and people — from modeling & simulation foundations to deployed platforms.",
  lab: "IMS Laboratory (UMR 5218 CNRS)",
  team: { label: "Enterprise Modelling and Engineering (MEI) team — Production Engineering group, IMS Laboratory", url: "https://www.ims-bordeaux.fr/research-groups/production-engineering/mei/" },
  address: ["IMS Laboratory — UMR 5218 CNRS", "University of Bordeaux, Bordeaux INP", "351 Cours de la Libération", "33405 Talence Cedex, France"],
  email: "",            // group contact email — to be provided
  contacts: ["mktraore", "zali"],   // TEAM ids listed on the Contact page
  /* Logos shown under "Affiliations & partners" on the home page, one row per
     group. A partner whose logo file is missing is shown by name; leave `url`
     empty when there is no link. */
  partners: [
    { group: "Affiliations & funders", name: "Université de Bordeaux", url: "https://www.u-bordeaux.fr", logo: "images/logos/universite-de-bordeaux.png" },
    { group: "Affiliations & funders", name: "Bordeaux INP", url: "https://www.bordeaux-inp.fr", logo: "images/logos/bordeaux-inp.png" },
    { group: "Affiliations & funders", name: "CNRS", url: "https://www.cnrs.fr", logo: "images/logos/cnrs.png" },
    { group: "Affiliations & funders", name: "IMS Laboratory", url: "https://www.ims-bordeaux.fr", logo: "images/logos/ims-bordeaux.png" },
    { group: "Affiliations & funders", name: "SAGIP", url: "https://sagip.org/", logo: "images/logos/sagip.png" },
    { group: "Affiliations & funders", name: "ANR — Agence nationale de la recherche", url: "https://anr.fr", logo: "images/logos/anr.png" },
    { group: "Affiliations & funders", name: "Ministère de l'Enseignement supérieur et de la Recherche", url: "https://www.enseignementsup-recherche.gouv.fr", logo: "images/logos/mesr.png" },
    { group: "Affiliations & funders", name: "Bordeaux University Foundation", url: "", logo: "images/logos/fondation-bordeaux-universite.png" },
    { group: "Industrial partners", name: "Bordeaux Airport", url: "https://www.bordeaux.aeroport.fr", logo: "images/logos/bordeaux-airport.png" },
    { group: "Industrial partners", name: "TotalEnergies", url: "https://totalenergies.com", logo: "images/logos/totalenergies.png" },
    { group: "Industrial partners", name: "Decathlon", url: "https://www.decathlon.fr", logo: "images/logos/decathlon.png" },
    { group: "Academic partners", name: "ENLIGHT European University Alliance", url: "https://enlight-eu.org", logo: "images/logos/enlight.png" },
    { group: "Academic partners", name: "Ghent University", url: "https://www.ugent.be", logo: "images/logos/ghent-university.png" },
    { group: "Academic partners", name: "University of Göttingen", url: "https://www.uni-goettingen.de", logo: "images/logos/university-of-goettingen.png" },
    { group: "Academic partners", name: "University of Tartu", url: "https://ut.ee", logo: "images/logos/university-of-tartu.png" },
    { group: "Academic partners", name: "University of Groningen", url: "https://www.rug.nl", logo: "images/logos/university-of-groningen.png" },
    { group: "Academic partners", name: "University of the Basque Country", url: "https://www.ehu.eus", logo: "images/logos/university-of-the-basque-country.png" },
    { group: "Academic partners", name: "Université de Lorraine (CRAN)", url: "https://www.univ-lorraine.fr", logo: "images/logos/universite-de-lorraine.png" },
    { group: "Academic partners", name: "Grenoble INP – UGA (G-SCOP)", url: "https://www.grenoble-inp.fr", logo: "images/logos/grenoble-inp.png" },
    { group: "Academic partners", name: "INSA Lyon (DISP)", url: "https://www.insa-lyon.fr", logo: "images/logos/insa-lyon.png" },
    { group: "Academic partners", name: "Université Polytechnique Hauts-de-France (LAMIH)", url: "https://www.uphf.fr", logo: "images/logos/uphf.png" },
  ],
  github: "https://github.com/dt-u-bordeaux",
};

/* Research axes, shown under "What we work on" on the home page. */
const AXES = [
  {
    id: "foundations",
    title: "Digital Twin Foundations & Engineering",
    icon: "layers",
    summary: "Concepts, generic architectures, data management and the systems-engineering methodology that turns modeling & simulation into operational digital twins.",
  },
  {
    id: "ecosystem",
    title: "Digital Twin Ecosystem",
    icon: "network",
    summary: "Systems of systems: interconnected digital twins that work together as an ecosystem.",
  },
  {
    id: "urban",
    title: "Urban Digital Twin",
    icon: "city",
    summary: "Multi-scale, multi-perspective digital twins of cities and territories — mobility, campus infrastructure and resilience.",
  },
  {
    id: "human",
    title: "Human-Centered Digital Twins",
    icon: "people",
    summary: "Immersive, cognitive and citizen-facing digital twins that put people in the loop of design and decision making.",
  },
  {
    id: "product",
    title: "Product & Production Digital Twins",
    icon: "box",
    summary: "Digital twins of products and of the production systems that make them — from design and manufacturing to how products are used.",
  },
  {
    id: "supply-chain",
    title: "Supply Chain Digital Twins",
    icon: "truck",
    summary: "Digital twins of supply chains for planning, traceability and efficient, low-carbon logistics — from smart warehouses to sustainable aviation fuel.",
  },
  {
    id: "circular",
    title: "Digital Twins in Circular Economy",
    icon: "cycle",
    summary: "Digital twins that support the reuse, remanufacturing and regeneration of products.",
  },,
  {
    id: "ai",
    title: "AI, LLMs & Agentic AI for Digital Twins",
    icon: "spark",
    summary: "Artificial intelligence, large language models and AI agents that give digital twins reasoning and decision-making capabilities in complex systems.",
  }
];

/* Projects, in the order shown on the site. Each one has its own page,
   <id>.html, which only needs data-project="<id>" on its <body>. `group` marks projects that belong to the Urban
   Digital Twin research focus. `members` and publication `projects` use the
   ids below. Leave a field empty ("" or []) until the information is
   available. */
const PROJECTS = [
  {
    id: "ubudt",
    group: "UDT",
    programme: "ACT",
    icon: "city",
    title: "ACT — UBUDT",
    fullName: "University of Bordeaux Urban Digital Twin, within the Augmented Campus for World Class Transition (ACT) project",
    short: "ACT — UBUDT",
    status: "Ongoing",
    summary: "University of Bordeaux Urban Digital Twin: a digital twin of the university's urban ecosystem that supports evidence-based decision making within the ACT project.",
    description: [
      "The \"Augmented Campus for World Class Transition (ACT)\" project is a nationally funded initiative of the University of Bordeaux (UB). ACT is a \"university-wide initiative\" fully embedded in UB's forthcoming strategic plan \"U30\".",
      "The UB is struggling to achieve the objectives in line with the European Union (EU) agenda and Initiatives of Excellence (IDEX) commitments. The UB's vision and purpose for 2030 is to shape and enable research-based, concrete, and tangible solutions, to achieve a new common social good by continuously experimenting and positively impact the collective future of our planet and society for the better. The ACT project intends to transform UB into a sustainable and globally engaged university. ACT is structured around the following four key themes:",
      { ordered: true, items: [
        "Health, well-being, and inclusion",
        "Sustainable campus in the city",
        "Sustainable food and resilient ecosystems",
        "Preparation of the university for its own transitions",
      ] },
      "The ACT project aims to transform the UB into a living laboratory and incubator for experimental projects. Its objective is to develop a sustainable and globally engaged responsible public institution, capable of producing and transmitting complex usable knowledge, so that socio-environmental transition needs can be achieved by engaging the community, multidisciplinary expertise, and external stakeholders.",
      "The ACT project is built around four Key Mission Objectives (KMOs) that describe activities in the scope of UB's core missions (i.e., research, education and innovation). These activities are developed as part of ACT to reinforce the mindset of experimentation for sustainability on a larger scale. The four KMOs of the ACT project are:",
      { ordered: true, items: [
        "Engaging communities in projects to solve effective transition issues on campus.",
        "Developing provision of research for evidence-based decision making.",
        "Providing training for leaders to act in complex situations.",
        "Providing expertise to solve large-scale transition issues with international communities.",
      ] },
      "To address KMO-2, i.e. to develop research provision for evidence-based decision making, the UB decided to put in place a Digital Twin (DT) based tool in the urban ecosystem settings of the university to understand future transitions. For this purpose, a PhD started as a small part of ACT and named the DT project the University of Bordeaux Urban Digital Twin (UBUDT). UBUDT addresses the urban dimensions in the UB ecosystem.",
    ],
    members: ["zali", "mktraore"],
    funding: ["ANR — Investments for the Future programme (PIA), ANR-20-IDES-0001", "PIA grant: €17,000,000", "October 2020 – October 2028", "ACT coordinator: Philippe Moretto (University of Bordeaux)"],
    partners: [
      "University of Bordeaux (coordinating institution)",
      "CNRS Aquitaine",
      "INSERM Nouvelle-Aquitaine",
      "Inria Bordeaux Sud-Ouest",
      "INRAE Nouvelle-Aquitaine-Bordeaux",
      "CHU de Bordeaux",
      "Bordeaux University Foundation",
    ],
    links: [
      { label: "ACT project — University of Bordeaux", url: "https://www.u-bordeaux.fr/en/about-us/our-strategy/institutional-projects/act" },
      { label: "ACT project page — ANR (ANR-20-IDES-0001)", url: "https://anr.fr/ProjetIA-20-IDES-0001" },
    ],
  },
  {
    id: "enlight-disrupt",
    group: "UDT",
    programme: "ENLIGHT",
    icon: "globe",
    title: "ENLIGHT-DISRUPT — UDT",
    short: "ENLIGHT-DISRUPT",
    status: "Ongoing",
    summary: "ENLIGHT thematic network on urban digital twins for evidence-based urban management, resilient territories and sustainable development, coordinated by the University of Bordeaux.",
    description: [
      "DISRUPT is an ENLIGHT Thematic Network (2024–2027) on urban digital twins and their use in evidence-based urban management, resilient territories and sustainable development. It is coordinated by the University of Bordeaux with five partner universities of the ENLIGHT European University Alliance, each contributing its own expertise, from digital twin technologies, AI and the Internet of Things to urban management and resilience.",
      "The network aims to train the next generation of digital twin scientists and engineers, with the digital and interdisciplinary skills needed to address societal transitions at a large scale.",
      "Its activities include training schools and citizen-science events, such as data management for urban digital twins and exploring how residents can help shape the \"digital brain\" of a resilient city.",
    ],
    members: [],
    funding: ["ENLIGHT European University Alliance — Thematic Network, 2024–2027"],
    partners: [
      "University of Bordeaux, France (coordinator)",
      "Ghent University, Belgium",
      "University of Göttingen, Germany",
      "University of Tartu, Estonia",
      "University of Groningen, Netherlands",
      "University of the Basque Country, Spain",
    ],
    links: [{ label: "DISRUPT — ENLIGHT", url: "https://enlight-eu.org/university-about-us/funded-initiatives/1370-disrupt" }],
  },
  {
    id: "regecos",
    title: "RegEcoS — DT in Circular Economy",
    fullName: "Ecosystem for the regeneration of products based on their uses",
    short: "RegEcoS",
    icon: "cycle",
    status: "Ongoing",
    summary: "Digital twins for the circular economy: an ecosystem for regenerating products based on how they are used, with Decathlon as industrial partner.",
    description: [
      "RegEcoS (Ecosystem for the regeneration of products based on their uses) is funded by the French National Research Agency (ANR, project ANR-22-CE10-0015) for 48 months from January 2023. It brings together three research laboratories, CRAN, IMS and G-SCOP, with Decathlon France as industrial partner.",
      "The project uses \"regeneration\" as an umbrella term for reuse, remanufacturing, recycling and the other options that upgrade a product after use and postpone its end of life. Its demonstrator builds on an industrial case proposed by Decathlon, which must set up schemes for regenerating sports equipment at the end of its use under the French AGEC law (2020).",
      "The group's work in the project concerns digital twins in the circular economy: digital twin services and multi-level digital twin ecosystems that support decision making on product regeneration.",
    ],
    members: ["saouani", "mktraore"],
    funding: ["ANR — ANR-22-CE10-0015 (€453,249, January 2023, 48 months)"],
    partners: [
      "CRAN — Université de Lorraine, CNRS",
      "IMS Laboratory — University of Bordeaux, Bordeaux INP, CNRS",
      "G-SCOP — Grenoble INP, Université Grenoble Alpes, CNRS",
      "Decathlon France (industrial partner)",
    ],
    links: [{ label: "Project page — ANR", url: "https://anr.fr/Project-ANR-22-CE10-0015" }],
  },
  {
    id: "regenexus",
    title: "RegeNexus — System-of-Systems DT / DT Ecosystem",
    short: "RegeNexus",
    icon: "network",
    status: "Ongoing",
    summary: "System-of-systems digital twins and digital twin ecosystems for recycling value chains, within the Digital axis of PEPR Recyclage (France 2030).",
    description: [
      "RegeNexus is a project of the Digital axis of PEPR Recyclage, the French national research programme on recycling, recyclability and the reuse of materials (France 2030). It aims to design an agile, interconnected digital ecosystem that serves the sustainability, sovereignty and efficiency of recycling value chains, coordinated by Pascale Marangé (CRAN).",
      "Within it, the group addresses digital twins as systems of systems: ecosystems of interconnected digital twins that support multi-level decision making and simulation for assessing environmental and economic performance.",
      "The work is carried out through a PhD jointly supervised at the IMS Laboratory (Université de Bordeaux) and the DISP Laboratory (INSA Lyon).",
    ],
    members: ["mktraore", "rdeval", "pmesfarjani"],
    funding: ["France 2030 — PEPR Recyclage, Digital axis, 2025–2029 (operated by ANR; programme led by CNRS with ADEME and CEA)"],
    partners: [
      "CRAN — Université de Lorraine (coordinator: Pascale Marangé)",
      "IMS Laboratory — University of Bordeaux",
      "DISP Laboratory — INSA Lyon",
      "LAMIH — Université Polytechnique Hauts-de-France",
    ],
    links: [
      { label: "RégéNexus — LAMIH, UPHF", url: "https://www.uphf.fr/en/lamih/regenexus" },
      { label: "PEPR Recyclage — Digital axis", url: "https://www.pepr-recyclage.fr/en/projet/digital/" },
      { label: "PEPR Recyclage — First communications of RegeNexus", url: "https://www.pepr-recyclage.fr/premieres-communications-projet-regenexus/" },
      { label: "Project page — DISP Lab", url: "https://www.disp-lab.fr/node/337" },
    ],
  },
  {
    id: "dt-vv",
    title: "Digital Twin Verification and Validation",
    short: "DT V&V",
    icon: "check",
    status: "Ongoing",
    summary: "Methods for the verification and validation of digital twins.",
    description: [
      "This line of work studies how to verify and validate digital twins, building on the group's background in modeling & simulation.",
    ],
    members: ["mzahediyami", "mktraore"],
    funding: [],
    links: [],
  },
  {
    id: "ai4dt",
    title: "AI4DT — AI, LLMs & Agentic AI in Digital Twins",
    short: "AI4DT",
    icon: "spark",
    status: "Ongoing",
    summary: "Integrating artificial intelligence, large language models and AI agents into digital twins to support reasoning and decision making in complex systems.",
    description: [
      "AI4DT explores how artificial intelligence can support intelligent digital twin systems: integrating machine learning, large language models (LLMs) and agentic AI into digital twins so that they can reason about the systems they mirror and support decision making in complex systems.",
    ],
    members: ["eelkhoury", "mktraore"],
    funding: [],
    links: [],
  },
  {
    id: "saf",
    title: "SAF — Digital Twin of the Sustainable Aviation Fuel Supply Chain",
    fullName: "SAF: Towards Certified, Traceable, Sustainable Aviation Fuels",
    short: "SAF",
    icon: "plane",
    status: "Ongoing",
    summary: "A digital twin of the sustainable aviation fuel (SAF) supply chain, with Bordeaux Airport and TotalEnergies.",
    description: [
      "\"SAF: Towards Certified, Traceable, Sustainable Aviation Fuels\" is a University of Bordeaux project, in association with Bordeaux INP and INRAE, launched with Bordeaux Airport and the University of Bordeaux Foundation.",
      "Within it, the group develops a digital twin of the SAF supply chain: a model for defining and managing supply chains that are efficient and low in CO2, and a key tool for integrating the whole SAF value chain.",
    ],
    members: ["mdiakite", "mktraore"],
    funding: ["Launched in February 2024 by the University of Bordeaux with Bordeaux Airport and the Bordeaux University Foundation, with contributions from industrial partners"],
    partners: [
      "University of Bordeaux (lead), with Bordeaux INP and INRAE",
      "Bordeaux Airport",
      "Bordeaux University Foundation",
      "TotalEnergies",
    ],
    links: [
      { label: "Press release — Bordeaux Airport", url: "https://www.bordeaux.aeroport.fr/en/laeroport/press/press-releases/university-bordeaux-collaboration-bordeaux-airport-bordeaux" },
    ],
  },
];

/* Team members, shown on the Team page grouped by `category`
   (director | postdoc | phd). */
const TEAM = [
  {
    id: "mktraore",
    category: "director",
    name: "Mamadou Kaba Traoré",
    role: "Director of the Digital Twin Research Group — Full Professor",
    photo: "images/team/mamadou-kaba-traore.jpg",
    bio: "Director of the Digital Twin Research Group, Full Professor at the University of Bordeaux and Deputy Director of the IMS Laboratory (UMR 5218 CNRS) since 2022. After a PhD in Computer Science (1992), was a Lecturer at Blaise Pascal University, then Professor at the African University of Science and Technology (AUST) from 2012, serving as its interim President from 2012 to 2014. Coordinates the International Master in Enterprise Engineering at the University of Bordeaux since 2020. Research covers modeling & simulation and digital twins, from foundations and verification & validation to urban, human-centred and circular-economy applications.",
    emails: ["mamadou-kaba.traore@u-bordeaux.fr", "mamadou-kaba.traore@ims-bordeaux.fr"],
    links: {
      ims: "https://www.ims-bordeaux.fr/researchers-and-publications/traore-mamadou/",
      scholar: "https://scholar.google.com/citations?user=VLiZDY4AAAAJ",
    },
  },
  {
    id: "mdiakite",
    category: "postdoc",
    name: "Mama Diakité",
    role: "Postdoctoral researcher — SAF",
    photo: "images/team/mama-diakite.jpg",
    bio: "Postdoctoral researcher at the IMS Laboratory, University of Bordeaux, working on the SAF project: a digital twin of the sustainable aviation fuel supply chain, in collaboration with Bordeaux Airport and TotalEnergies. Earlier work with the group covers urban digital twins for mobility and immersive, cognitive urban digital twins for sustainable and resilient territories.",
    links: {
      scholar: "https://scholar.google.com/citations?user=f521VgkAAAAJ",
    },
  },
  {
    id: "zali",
    category: "postdoc",
    name: "Zeeshan Ali",
    role: "Postdoctoral researcher — Urban Digital Twin",
    photo: "images/team/zeeshan-ali.jpg",
    bio: "Postdoctoral researcher on urban digital twins, PhD (Université de Bordeaux, 2025) on a systems-engineering approach to urban digital twin development, PMP. Develops UBUDT, the University of Bordeaux Urban Digital Twin, within the ACT project. Work spans holistic, multi-scale and multi-perspective urban digital twin engineering, generic digital twin architectures, data management for digital twins (DMFDT) and mobility digital twins.",
    activities: ["ENLIGHT ECR"],
    emails: ["zeeshan.ali@u-bordeaux.fr", "zeeshan.ali@ims-bordeaux.fr"],
    links: {
      website: "https://zeeshanali0001.github.io",
      scholar: "https://scholar.google.com/citations?user=7LGEp1sAAAAJ",
      linkedin: "https://www.linkedin.com/in/zeeshanali0001",
      github: "https://github.com/zeeshanali0001",
    },
  },
  {
    id: "rdeval",
    category: "postdoc",
    name: "Rishav Deval",
    role: "Postdoctoral researcher — RegeNexus",
    photo: "images/team/rishav-deval.jpg",
    bio: "Postdoctoral researcher at the IMS Laboratory, University of Bordeaux, working on the RegeNexus project on system-of-systems digital twins and digital twin ecosystems for recycling value chains.",
    links: {
      scholar: "https://scholar.google.com/citations?user=UmbczfkAAAAJ",
    },
  },
  {
    id: "mzahediyami",
    category: "phd",
    name: "Milad Zahediyami",
    role: "PhD candidate — DT Verification & Validation",
    photo: "images/team/milad-zahediyami.jpg",
    bio: "PhD candidate at the IMS Laboratory, University of Bordeaux, working on the verification and validation of digital twins. The work applies software-testing approaches to digital twin V&V and studies architectures, such as microservices and design patterns, that make digital twins more testable, modular and decoupled.",
    links: {
      scholar: "https://scholar.google.com/citations?user=QgT1_twAAAAJ",
    },
  },
  {
    id: "saouani",
    category: "phd",
    name: "Sirajeddine Aouani",
    role: "PhD candidate",
    photo: "images/team/sirajeddine-aouani.jpg",
    bio: "PhD candidate in industrial systems engineering and modelling at the University of Bordeaux, working in the RegEcoS project on integrating digital twins to support decision making in the circular economy. Background spans supply chain management, industrial process engineering and digital technologies — ERP (SAP, Odoo), IoT and simulation (AnyLogic, MATLAB, Arena) — applied to smart warehouse management and sustainable product regeneration.",
    links: {
      scholar: "https://scholar.google.com/citations?user=M34TUocAAAAJ",
    },
  },
  {
    id: "pmesfarjani",
    category: "phd",
    name: "Pedram Mohammadi Esfarjani",
    role: "PhD candidate",
    photo: "images/team/pedram-mohammadi-esfarjani.jpg",
    bio: "PhD candidate at the IMS Laboratory, Université de Bordeaux, and the DISP Laboratory, INSA Lyon, supervised by Professors Mamadou Kaba Traoré and Vincent Cheutet. He holds MSc degrees in mechanical engineering and in enterprise engineering, which allow him to bring together physical industrial systems and the information systems that control them. His research interests include digital twins, systems of systems, modelling and simulation, and language-based decision support.",
    links: {
      researchgate: "https://www.researchgate.net/profile/Pedram-Mohammadi-Esfarjani",
    },
  },
  {
    id: "eelkhoury",
    category: "phd",
    name: "Elissa Lichaa El Khoury",
    role: "PhD candidate — AI in Digital Twins",
    photo: "images/team/elissa-lichaa-el-khoury.jpg",
    bio: "PhD student in Computer Science at the Université de Bordeaux, affiliated with the IMS Laboratory (UMR 5218). She holds a Bachelor of Science in Bioinformatics and a Master of Science in Computer Science from the Lebanese American University, Lebanon. Her doctoral research focuses on integrating Large Language Models with Digital Twin systems to enhance intelligent decision-making in complex systems. Her broader research interests include artificial intelligence, machine learning, modeling and simulation, software engineering and data-driven decision support.",
    links: {
      scholar: "https://scholar.google.com/citations?user=x9Mm-C8AAAAJ",
    },
  },
];

/* Publications. type: journal | conference | chapter | national | thesis.
   Optional `url` replaces the default https://doi.org/<doi> link; for a paper
   with an `isbn` and no DOI, `url` is the link on the ISBN (e.g. the
   proceedings' table of contents). */
const PUBLICATIONS = [
  { year: 2026, type: "conference", status: "Published", title: "Toward an AI-enabled digital twin for laboratory occupancy monitoring: A simulation-based proof of concept", authors: "Lichaa El Khoury, E., Azar, D., Possik, J., Solis, A.O. & Traoré, M.K.", venue: "25th International Conference on Modelling and Applied Simulation (MAS 2026)", doi: "", projects: ["ai4dt"] },
  { year: 2026, type: "conference", status: "Published", title: "A stacked regressor for the prediction of the number of defects in software modules", authors: "El Jammal, R., El Khoury, E., Daou, L., Daoud, C., Possik, J. & Azar, D.", venue: "21st International Conference on Software Technologies (ICSOFT 2026), pp. 141–148 — SCITEPRESS", doi: "10.5220/0015041800004088", projects: [] },
  { year: 2026, type: "journal", status: "Published", title: "PSO meets LSTM: Adaptive forecasting of NYSE stock prices with volatility-aware performance", authors: "Nader, B.J., Lichaa El Khoury, E. & Azar, D.", venue: "Soft Computing, 30(5), pp. 3301–3324 — Springer", doi: "10.1007/s00500-026-11311-0", projects: [] },
  { year: 2026, type: "journal", status: "Published", title: "Genetic carrier frequency in genes involved in inborn errors of immunity in the Lebanese population", authors: "Mehawej, C., Chouery, E., Al Kaddoum, R., Habib, H., Bahous, R., Corbani, S., Lichaa El Khoury, E., Hoblos, Y., Hanna, E.M. & Megarbane, A.", venue: "Scientific Reports — Nature", doi: "", projects: [] },
  { year: 2026, type: "journal", status: "Published", title: "A novel centrality-based approach for link prediction", authors: "Lichaa El Khoury, E., Azar, D. & Hanna, E.M.", venue: "Social Network Analysis and Mining, 16(1) — Springer", doi: "10.1007/s13278-026-01624-1", projects: [] },
  { year: 2026, type: "journal", status: "Published", title: "Agile framework for Digital Twin verification and validation: Addressing complexity challenges in cross-disciplinary hybrid systems", authors: "Zahediyami, M., Delos, V., Gorecki, S. & Traoré, M.K.", venue: "SIMULATION: Transactions of The Society for Modeling and Simulation International — SAGE", doi: "10.1177/00375497261464072", projects: ["dt-vv"] },
  { year: 2026, type: "journal", status: "Published", title: "Modeling and simulation of a multi-level digital twin ecosystem for the circular economy", authors: "Aouani, S. et al.", venue: "SIMULATION: Transactions of The Society for Modeling and Simulation International — SAGE", doi: "10.1177/00375497261467054", projects: ["regecos"] },
  { year: 2026, type: "conference", status: "Published", title: "A Pattern-Driven Software Architecture for Multi-Digital Twin Integration in Circular Systems", authors: "Aouani, S., Mohammadi Esfarjani, P., Zahediyami, M., Marangé, P., Robin, V. & Traoré, M.K.", venue: "International Conference on Software and System Engineering (ICoSSE 2026), Lyon — IOS Press", doi: "10.3233/ATDE260463", projects: ["regecos"] },
  { year: 2026, type: "conference", status: "Published", title: "Microservice-Based Architecture for Digital Twin Implementation: Leveraging Testing Strategies and Design Patterns for Enhanced Testability", authors: "Zahediyami, M., Aouani, S., Gorecki, S., Delos, V. & Traoré, M.K.", venue: "International Conference on Software and System Engineering (ICoSSE 2026), Lyon — IOS Press", doi: "10.3233/ATDE260472", projects: ["dt-vv"] },
  { year: 2026, type: "journal", status: "Published", title: "A holistic approach to multi-scale and multi-perspective urban digital twin development", authors: "Ali, Z. & Traoré, M.K.", venue: "Computers, Environment and Urban Systems, 127, 102432 — Elsevier", doi: "10.1016/j.compenvurbsys.2026.102432", projects: ["ubudt"] },
  { year: 2026, type: "chapter", status: "Published", title: "Human-Centred Digital Twin: Concepts, Methods, and Technologies", authors: "Traoré, M.K., Poursoltan, M., Zahediyami, M. & Ali, Z.", venue: "Advanced Architectures and Techniques for Smart Industry, pp. 41–61 — Springer Nature Singapore", doi: "10.1007/978-981-95-5271-9_3", projects: [] },
  { year: 2026, type: "chapter", status: "Published", title: "Immersive and cognitive urban digital twins for sustainable and resilient smart territories", authors: "Traoré, M.K., Diakité, M. & Ali, Z.", venue: "Resilient Complex Adaptive Systems, pp. 425–440 — Wiley", doi: "10.1002/9781394326303.ch15", projects: [] },
  { year: 2026, type: "national", status: "Presented", title: "Engineering Towards Scalable Urban Digital Twins: A Platform-Centric Methodology and Insights", authors: "Ali, Z. & Traoré, M.K.", venue: "SAGIP — Bordeaux, France", doi: "", projects: ["ubudt"] },
  { year: 2026, type: "journal", status: "Major revision", title: "A Generic Architecture and its Object-Oriented Implementation for Digital Twins", authors: "Ali, Z., Zahediyami, M., Delos, V. & Traoré, M.K.", venue: "Software and Systems Modeling — Springer", doi: "", projects: [] },
  { year: 2026, type: "journal", status: "Under review", title: "A Hybrid Data and Model-Driven Approach to Mobility Urban Digital Twin", authors: "Ali, Z. & Traoré, M.K.", venue: "Elsevier (submitted)", doi: "", projects: ["ubudt"] },
  { year: 2025, type: "conference", status: "Published", title: "Developing Urban Digital Twin for Mobility", authors: "Ali, Z., Diakité, M. & Traoré, M.K.", venue: "Annual Modeling and Simulation Conference (ANNSIM 2025), pp. 1–13 — IEEE", doi: "10.22360/ANNSIM.2025.CPS+DT.63", url: "https://dl.acm.org/doi/10.22360/ANNSIM.2025.CPS%2BDT.63", projects: ["ubudt"] },
  { year: 2025, type: "conference", status: "Published", title: "Urban Digital Twin Engineering: A Multi-Perspective and Holistic Approach", authors: "Ali, Z. & Traoré, M.K.", venue: "52nd International Conference on Computers & Industrial Engineering (CIE52): Bridging Data-Driven Innovation and Sustainable Practices, Lyon, France, 29–31 October 2025, pp. 102–111 — Curran Associates", doi: "", isbn: "9798331332204", url: "https://www.proceedings.com/content/084/084193webtoc.pdf", projects: ["ubudt"] },
  { year: 2025, type: "national", status: "Presented", title: "University of Bordeaux Urban Digital Twin: UBUDT", authors: "Ali, Z. & Traoré, M.K.", venue: "SAGIP — Mulhouse, France", doi: "", projects: ["ubudt"] },
  { year: 2025, type: "thesis", status: "PhD thesis", title: "Systems Engineering Approach to the Development of Urban Digital Twin", authors: "Ali, Z.", venue: "Doctoral dissertation, Université de Bordeaux", doi: "10.70675/4f2b1d56zf662z4b41za04bz698dbd255c8f", projects: ["ubudt"] },
  { year: 2024, type: "journal", status: "Published", title: "From modeling and simulation to digital twin: evolution or revolution?", authors: "Ali, Z., Biglari, R., Denil, J., Mertens, J., Poursoltan, M. & Traoré, M.K.", venue: "Simulation, 100(7), pp. 751–769 — SAGE", doi: "10.1177/00375497241234680", projects: [] },
  { year: 2024, type: "journal", status: "Published", title: "Formalizing a framework of inference capabilities for Digital Twin engineering", authors: "Diakité, M. & Traoré, M.K.", venue: "SIMULATION, 100(9), pp. 887–902 — SAGE", doi: "10.1177/00375497241228281", projects: [] },
  { year: 2024, type: "thesis", status: "PhD thesis", title: "Ingénierie système dirigée par jumeau numérique : cadre formel et opérationnel", authors: "Diakité, M.", venue: "Doctoral dissertation, Université de Bordeaux (2024BORD0389)", doi: "", projects: [] },
  { year: 2024, type: "conference", status: "Published", title: "Contributions of Digital Twins Services to the Implementation of the Circular Economy", authors: "Aouani, S., Marangé, P., Robin, V. & Traoré, M.K.", venue: "Working Conference on Virtual Enterprises (PRO-VE 2024), pp. 147–162 — Springer", doi: "10.1007/978-3-031-71743-7_10", projects: ["regecos"] },
  { year: 2024, type: "conference", status: "Published", title: "Software Testing Approach for Digital Twin Verification and Validation", authors: "Zahediyami, M., Gorecki, S. & Traoré, M.K.", venue: "Working Conference on Virtual Enterprises (PRO-VE 2024), pp. 115–129 — Springer", doi: "10.1007/978-3-031-71743-7_8", projects: ["dt-vv"] },
  { year: 2024, type: "national", status: "Presented", title: "Toward Digital Twin Verification and Validation: Software Testing Approach", authors: "Zahediyami, M., Gorecki, S. & Traoré, M.K.", venue: "SAGIP — Lyon, France", doi: "", projects: ["dt-vv"] },
  { year: 2024, type: "conference", status: "Published", title: "DMFDT: Data Management Framework for Digital Twin", authors: "Ali, Z., Poursoltan, M. & Traoré, M.K.", venue: "Working Conference on Virtual Enterprises (PRO-VE), pp. 130–144 — Springer", doi: "10.1007/978-3-031-71743-7_9", projects: [] },
  { year: 2024, type: "national", status: "Presented", title: "Building Urban Digital Twin: An Overview", authors: "Ali, Z. & Traoré, M.K.", venue: "SAGIP — Lyon, France", doi: "", projects: ["ubudt"] },
  { year: 2023, type: "conference", status: "Published", title: "Formal approach to digital twin specification", authors: "Diakité, M. & Traoré, M.K.", venue: "Annual Modeling and Simulation Conference (ANNSIM 2023), pp. 233–244", doi: "", projects: [] },
  { year: 2023, type: "conference", status: "Published", title: "Design and implementation of a digital twin testbed for smart warehouse operations", authors: "Aouani, S., Daldoul, D., Sboui, L. & Chaabane, A.", venue: "Third International Conference on Signal, Control and Communication (SCC 2023), Hammamet, Tunisia — IEEE", doi: "10.1109/SCC59637.2023.10527573", projects: [] },
];

/* News & talks (newest first). */
const NEWS = [
  { date: "2026-09-25", title: "\"Mission Resilience: Become the Digital Brain of Your City\"", text: "LEGO Serious Play citizen-science activity, ENLIGHT-DISRUPT — Eureka Science Event, Groningen, Netherlands.", project: "enlight-disrupt" },
  { date: "2026-01-27", title: "\"Data Management for Urban Digital Twins\"", text: "1st Annual School of the ENLIGHT-DISRUPT project — University of the Basque Country, Bilbao, Spain.", project: "enlight-disrupt" },
  { date: "2026-01-12", title: "\"Urban Digital Twin Engineering\"", text: "DITRISC workshop, PEPR Risques & MITI-CNRS — Paris, France.", project: "" },
  { date: "2025-11-20", title: "\"Digital Twin and Systems Engineering\"", text: "SAGIP Technical Committee meeting — Paris, France.", project: "" },
];
