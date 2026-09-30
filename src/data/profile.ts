export const profileData = {
  hero: {
    name: "Emmanuel Odion Jafaru",
    title: "Senior Full-Stack Engineer · Mobile · Systems Architect ",
    statement: "I build software that survives the real world.",
    description: [
      "I’m a Senior Full-Stack Software Engineer and Systems Architect with 7+ years of experience engineering production-grade systems across fintech, healthtech, and enterprise domains.",
      "My strongest work sits at the intersection of product engineering, software architecture, data integrity, system audit, and security.",
      "I focus on architecting resilient solutions—systems that have demonstrably saved operational leakage (₦20M+ within 4 months) and securely processed critical multi-tenant workflows."
    ],
    philosophyQuote: "I don't just ask, “Can we build it?” I ask: Can it scale? Can it be secured? Can the data be trusted? Can the next engineer maintain it? And will it still work when real users start depending on it?"
  },
  skills: {
    languages: ["TypeScript", "JavaScript", "SQL"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Redux", "Vue.js", "HTML5", "CSS3"],
    backend: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB"],
    mobile: ["React Native", "Expo", "Flutter"],
    testing: ["Jest", "Playwright", "Cypress", "Detox", "Postman", "Sentry"],
    infrastructure: ["AWS", "Docker", "CI/CD (GitHub Actions)", "Linux", "Redis/BullMQ"],
    core: [
      "Software Architecture", "System Audit", "REST API Integration",
      "Microservices & Modular Monoliths", "RBAC & JWT Security",
      "Double-entry Ledgers", "OAuth & Google 2FA",
      "Data Integrity & Escrow", "Audit Logging"
    ]
  },
  projects: [
    {
      title: "Multi-Tenant Business Management Platform",
      subtitle: "Scalable B2B SaaS architecture for African SMBs",
      bullets: [
        "Architected a modular multi-tenant backend in PostgreSQL, engineering asynchronous job queues (Redis/BullMQ) to process large-scale CSV data imports without blocking the event loop.",
        "Implemented strict RBAC staff permissions and integrated FIRS e-invoicing pipelines, maintaining data isolation and regulatory compliance across tenants.",
        "Engineered offline-sync resilience across web and React Native mobile clients, ensuring 99.9% uptime for business operations in low-connectivity areas."
      ],
      stack: ["TypeScript", "React", "React Native", "PostgreSQL", "NestJS"]
    },
    {
      title: "Hospital Management System",
      subtitle: "Digitizing critical clinical and operational workflows",
      bullets: [
        "Designed and deployed a high-availability clinical platform managing EMR and complex HMO/NHIA billing cycles, ensuring sub-50ms query latency for critical patient data.",
        "Built real-time queue management and scheduling modules, reducing patient wait times and streamlining admissions.",
        "Integrated a telemedicine service via a React Native (Expo) companion app, increasing secure provider-patient interactions."
      ],
      stack: ["React", "NestJS", "PostgreSQL", "React Native", "Expo"]
    },
    {
      title: "Secure Ecommerce CRM & Financial Backend",
      subtitle: "Authorization-first architecture with financial integrity",
      bullets: [
        "Engineered a modular NestJS backend enforcing a 'deny-by-default' permission model with department, role, and user-override capabilities.",
        "Implemented a robust double-entry general ledger architecture, securing financial state transitions and ensuring 100% transaction traceability.",
        "Built live permission propagation through JWT invalidation pipelines, immediately securing accounts upon employment status changes."
      ],
      stack: ["NestJS", "TypeScript", "MongoDB", "Redis"]
    },
    {
      title: "Corperone — Multi-Product Digital Ecosystem",
      subtitle: "Large-scale multi-role ecosystem architecture",
      bullets: [
        "Led full-stack architecture for a distributed multi-service ecosystem (Next.js, Flutter) securely handling thousands of concurrent requests across 7 distinct user roles.",
        "Developed a secure soft-loan disbursement and savings engine handling real-time financial workflows and ledger updates.",
        "Deployed a private multi-franchise CRM with strict franchise-scoped views, automating Inventory, HR, Finance, and generating immutable Audit Logs."
      ],
      stack: ["Next.js", "Flutter", "NestJS"]
    },
    {
      title: "Construction CRM & Inventory Platform",
      subtitle: "Operational visibility resulting in significant cost savings",
      bullets: [
        "Digitized material tracking and stock flow across multiple high-volume construction sites by introducing strict role-based inventory workflows.",
        "Generated over ₦20 million in verified material savings within 4 months of launch by eliminating operational leakage and tracking transfers accurately.",
        "Delivered a seamless React Native mobile application for on-site managers to instantly log and verify material usage."
      ],
      stack: ["Next.js", "NestJS", "MongoDB", "React Native"]
    },
    {
      title: "P2P Forex & Commodity Exchange",
      subtitle: "Trustless financial exchange via secure escrow",
      bullets: [
        "Engineered a secure P2P exchange workflow where high-value transactions were held in an immutable escrow state until buyer verification.",
        "Strengthened platform security by enforcing Google Authenticator (2FA) and biometric verification across all critical financial endpoints.",
        "Reduced transaction disputes to near-zero by implementing rigorous state-machine logic and server-side payment verification."
      ],
      stack: ["React Native", "NestJS", "Fintech API"]
    }
  ],

  // Dedicated Resume Data for the Web Document Viewer
  resumes: {
    master: {
      title: "Senior Full-Stack & Mobile Software Engineer",
      summary: "Full-stack and mobile engineer with 7+ years architecting multi-tenant, role-based platforms end-to-end across fintech, healthtech and edtech — from NestJS/PostgreSQL and NestJS/MongoDB backends and React/Next.js frontends to React Native/Expo and Flutter clients. Experience spans access control and security (RBAC, JWT, 2FA), payments and ledgers (Paystack, double-entry accounting), Linux server deployment (Ubuntu, DigitalOcean), and hands-on testing and quality practice (Jest, Playwright, Detox, Postman, Sentry). Comfortable owning a feature from requirements and product decisions (Jira, Figma, pitch decks) through to shipped, monitored software. One inventory system saved ₦20M+ within 4 months of launch; a portal redesign lifted usability 35%. Available to start immediately, fully remote.",
      skills: [
        { category: "Frontend", tools: "React.js, Next.js, TypeScript, JavaScript, Vue.js, Angular, TailwindCSS, HTML5, CSS3, WordPress" },
        { category: "Backend & Data", tools: "NestJS, Node.js, Express.js, PostgreSQL, MongoDB, REST API design & integration, RBAC, double-entry ledger design, multi-tenant systems" },
        { category: "Mobile", tools: "React Native, Expo, Flutter" },
        { category: "Infrastructure & Deployment", tools: "Linux (Ubuntu) servers, DigitalOcean, Git/GitHub" },
        { category: "Security", tools: "Google Authentication/2FA, escrow & transaction verification (Paystack), audit logging" },
        { category: "Testing & Quality", tools: "Jest, Playwright, Detox, Postman, Sentry, unit and end-to-end testing, code review" },
        { category: "Product & Delivery", tools: "Jira, Figma, Trello, Notion, Asana, Monday, Agile, roadmapping, KPI-driven decisions" }
      ],
      experience: [
        {
          role: "Senior Engineer (Full-Stack & Mobile)",
          company: "Splashtech Studios",
          date: "2025 – Aug 2026",
          bullets: [
            "Architected and built a multi-tenant business-management platform for Nigerian and African SMBs (PostgreSQL, web and React Native mobile clients), onboarding 20 separate business entities and steadily growing.",
            "Architected a hospital management platform for a 15-bed specialist hospital in Lagos, serving 5,000+ users (React + TypeScript, NestJS, PostgreSQL, React Native/Expo mobile app).",
            "Designed a modular-monolith ecommerce CRM backend (NestJS, MongoDB) with deny-by-default access control, an employment-status state machine, JWT invalidation, and a double-entry general-ledger architecture.",
            "Built a Publishing Hub CRM (NestJS, MongoDB) that has processed 1,000+ emails to a growing contact list, including a Paystack booking flow with a 30-minute verified hold.",
            "Wrote end-to-end tests with Playwright (web) and Detox (React Native) alongside Jest unit tests, with Sentry monitoring in production."
          ]
        },
        {
          role: "Lead Engineer",
          company: "Qreva (Fintech)",
          date: "Apr 2026 – Jul 2026",
          bullets: [
            "Led architecture and development of Corperone.com, a multi-service ecosystem spanning a Next.js web app and a Flutter mobile app, backed by a NestJS API — serving 7 distinct user roles.",
            "Built core platform modules: marketplace and storefront, accommodation booking, security and emergency reporting, welfare requests, savings, and soft-loan request and disbursement.",
            "Designed and built a private, internal multi-franchise CRM for a multinational group with strict role-based access control.",
            "Managed deployment of the platform to Ubuntu servers on DigitalOcean."
          ]
        },
        {
          role: "Senior Frontend Engineer (Contract)",
          company: "RapidMedcare",
          date: "Apr 2026 – Aug 2026",
          bullets: [
            "Built the insurance and doctor-facing UI for a healthcare platform, turning clinical and policy workflows into usable screens.",
            "Integrated the frontend with backend APIs for reliable data flow across insurance and provider features."
          ]
        },
        {
          role: "Software Engineer",
          company: "KiarosHof",
          date: "2024 – Jun 2026",
          bullets: [
            "Designed and built three full-stack internal systems end-to-end (Next.js, NestJS/Express, MongoDB), each with a companion mobile application and used daily by about 100 staff for multiple, simultaneous activities.",
            "Inventory & CRM System — digitized material tracking and stock flow across web and mobile, reducing material loss and saving ₦20M+ within 4 months of launch.",
            "Fleet Management CRM — built a web and mobile ride-booking and dispatch system with full vehicle lifecycle tracking via repair, replacement, and fuel logs.",
            "Engineering Progress CRM — enabled engineers to log before/after project videos each work day from web and mobile."
          ]
        },
        {
          role: "Front-End Engineer",
          company: "Eduvacity",
          date: "Jun 2024 – Sep 2024",
          bullets: [
            "Redesigned website portals and dashboards for a platform with 5,000+ onboarded users — increasing overall product usability by 35%.",
            "Deployed a scholarship feature that expanded the user base and helped attract investor deals.",
            "Managed the Next.js and TypeScript codebase and documentation using Git and GitHub."
          ]
        },
        {
          role: "Mobile Engineer & Product Manager",
          company: "Astrovasity Enterprise",
          date: "Apr 2024 – Jul 2024",
          bullets: [
            "Developed the Eduwallet mobile application using React Native, ensuring smooth cross-device functionality.",
            "Operated in a dual engineering/product capacity — leading brainstorming sessions, driving KPIs, and creating pitch decks that secured funding."
          ]
        },
        {
          role: "Mobile Engineer",
          company: "Cudium, NG (Fintech)",
          date: "Jan 2022 – Apr 2024",
          bullets: [
            "Built a P2P feature for forex exchange and commodity purchases in the mobile app, used by around 10,000 users, holding orders in escrow until buyers confirmed receipt.",
            "Strengthened application security by implementing Google Authentication (2FA) and other protective measures.",
            "Trained interns at Austond Innovation Hub."
          ]
        },
        {
          role: "Front-End Web & Mobile Developer",
          company: "Freelance",
          date: "Jan 2019 – Dec 2021",
          bullets: [
            "Developed and launched multiple web and mobile applications using React, Next.js, TypeScript, Express, Vue, Angular, WordPress, and React Native for a range of clients."
          ]
        }
      ],
      education: "BSc. Agriculture (Animal Sciences) — Obafemi Awolowo University, Ile-Ife, Osun State | Aug 2016 – Oct 2024",
      certifications: "JavaScript Essential Training, LinkedIn Learning (2019) · Google Developers Scholarship (React & Angular) · ALX Software Engineering Scholarship (2021) · HNG Frontend Track (2022)",
      community: "Member: GDG Abuja, Code Academy Abuja, Africa Tech Community · Guest Speaker, “Becoming a Mobile Engineer,” ATC Africa OAU Chapter (2023) · Web Development Mentor, Ascend Bootcamp (2025) | Languages: English (Fluent), Etsakwo (Native), Hausa, German, Spanish, French (Beginner)"
    }
  },

  writings: [
    {
      title: "Building Mobile Device Management (MDM) Integration for Fleet Management",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7494042443433222144/",
      type: "Architecture Case Study"
    },
    {
      title: "Technical Architecture Series: Part 1",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7495938665509060609/",
      type: "Series"
    },
    {
      title: "Technical Architecture Series: Part 2",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7495939042681774080/",
      type: "Series"
    },
    {
      title: "Technical Architecture Series: Part 3",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7495939413991018496/",
      type: "Series"
    },
    {
      title: "Technical Architecture Series: Part 4",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7495939790404624387/",
      type: "Series"
    },
    {
      title: "Technical Architecture Series: Part 5",
      platform: "LinkedIn",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7495940020290273280/",
      type: "Series"
    }
  ],
  socials: {
    devTo: "https://dev.to/emmyjaff",
    medium: "https://medium.com/@emmyjaff22"
  }
};
