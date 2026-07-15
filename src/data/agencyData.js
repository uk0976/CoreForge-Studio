// Central Honest Data Store for CoreForge Studio (Launch Phase)

export const agencyData = {
  stats: [
    { label: "Concept Showcases", value: "10" },
    { label: "Launch Rate", value: "100%" },
    { label: "Technical Focus", value: "React/Next" },
    { label: "Core Industries", value: "6+" }
  ],

  // 10 Detailed Concept Projects demonstrating design and coding capabilities
  portfolioConcepts: [
    {
      id: "restaurant-concept",
      title: "Epicurean Bistro Website",
      category: "Restaurant Website",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      objective: "To create an immersive digital experience for high-end dining, replacing traditional PDF menus with interactive visual plating stories.",
      approach: "We used dark luxury minimalism with large food photography, parallax scrolling, and a glassmorphic reservation flow.",
      techUsed: ["React", "Vanilla CSS", "GSAP", "Lenis Scroll"],
      features: ["Interactive Plating Showcase", "Real-time Booking Calendar Mockup", "Visual Menu Accordion"],
      outcome: "A template-defying dining website concept ready to drive reservations and build instant brand value."
    },
    {
      id: "realestate-concept",
      title: "Aero Estates Platform",
      category: "Real Estate Website",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      objective: "To display ultra-luxury architectural listings using large media galleries and clean spec boards.",
      approach: "Focused on clean grid systems, high-contrast imagery, and floating info cards to replicate an elite catalog.",
      techUsed: ["Next.js", "TypeScript", "Vanilla CSS", "Framer Motion"],
      features: ["Dynamic Listing Filters", "Large-scale Media Sliders", "Agent Appointment Mockup"],
      outcome: "A high-performance luxury real estate interface designed to attract qualified high-net-worth buyers."
    },
    {
      id: "medical-concept",
      title: "Aegis Medical Clinic",
      category: "Medical Clinic Website",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      objective: "To build a trustworthy, calming digital portal for scheduling patient checkups and introducing medical teams.",
      approach: "Used soft blue-charcoal hues, highly legible geometric fonts, and clean, accessible form checkouts.",
      techUsed: ["React", "Vanilla CSS", "Lucide Icons"],
      features: ["Step-by-Step Onboarding Form", "Doctor Profile Grid", "Emergency Contact Panel"],
      outcome: "A soothing, HIPAA-compliant layout blueprint that reduces booking anxiety and structures patient queues."
    },
    {
      id: "fitness-concept",
      title: "Vigor Fitness Studio",
      category: "Fitness Website",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      objective: "To design an energetic digital interface for modern gyms, featuring workout directories and pricing tiers.",
      approach: "Used high-contrast neon accents, bold italic headlines, and card-tilt hover states to inspire movement.",
      techUsed: ["Vite", "React", "GSAP", "CSS Grid"],
      features: ["Class Schedule Grid", "Membership Tier Selector", "Trainer Showcase Cards"],
      outcome: "An active digital hub that turns casual website visitors into committed gym members."
    },
    {
      id: "travel-concept",
      title: "Voyage Travel Agency",
      category: "Travel Agency Website",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      objective: "To design a visually inspiring catalog for luxury destination travel packages and booking.",
      approach: "Used full-screen media cards, smooth hover zooms, and clear typography indicators to showcase global sights.",
      techUsed: ["React", "Framer Motion", "Vanilla CSS"],
      features: ["Interactive Trip Planner", "Destination Image Showcase", "Tour Schedule Map"],
      outcome: "A stunning travel catalog mock that sparks wanderlust and simplifies travel planning."
    },
    {
      id: "law-concept",
      title: "Juris Advisor Group",
      category: "Law Firm Website",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      objective: "To establish absolute legal authority and trust through a structured, conservative luxury digital home.",
      approach: "Used deep charcoal backgrounds, elegant serif-like titles, and spacious sections prioritizing reading flow.",
      techUsed: ["Next.js", "Vanilla CSS", "TypeScript"],
      features: ["Practice Area Directory", "Case Review Request Form", "Attorney Bio Cards"],
      outcome: "A premium corporate blueprint for legal firms seeking high-net-worth client representation."
    },
    {
      id: "interior-concept",
      title: "Atelier Interior Studio",
      category: "Interior Design Website",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      objective: "To display interior architecture projects using large layout grids and details tabs.",
      approach: "Utilized luxury minimalism, plenty of whitespace, and visual case-study overlays detailing project stages.",
      techUsed: ["React", "Lenis Scroll", "GSAP ScrollTrigger"],
      features: ["Before/After Image Sliders", "Visual Material Palette", "Project Stage Roadmaps"],
      outcome: "A portfolio concept that highlights visual detail, textures, and bespoke designs."
    },
    {
      id: "education-concept",
      title: "Apex Institute Portal",
      category: "Educational Institute Website",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      objective: "To design a functional, modern portal displaying curriculum structures, teacher bios, and signups.",
      approach: "Built clean column-based course lists, active search categories, and simple download checkpoints.",
      techUsed: ["React", "Vanilla CSS", "Lucide Icons"],
      features: ["Course Search Directory", "Faculty Roster Grid", "Class Schedule Calendar"],
      outcome: "A user-friendly educational framework prioritizing page speeds and mobile layouts."
    },
    {
      id: "photography-concept",
      title: "Aura Photo Showcase",
      category: "Photography Portfolio",
      image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=800&q=80",
      objective: "To design a horizontal-scrolling portfolio display for creative visual artists and directors.",
      approach: "Used dark fullscreen sliders, custom hover outlines, and smooth, lag-free image zoom effects.",
      techUsed: ["Vite", "React", "GSAP", "Lenis Horizontal"],
      features: ["Horizontal Scroll Showroom", "Exif Data Detail Popups", "Boutique Print Shop Mockup"],
      outcome: "A highly stylized, award-worthy portfolio layout that lets photography speak for itself."
    },
    {
      id: "personal-concept",
      title: "Persona Speaker Brand",
      category: "Personal Brand Website",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      objective: "To build a bold, memorable personal branding landing page for authors, speakers, and creators.",
      approach: "Utilized high-contrast typography, floating text banners, and structured speaking directories.",
      techUsed: ["React", "Framer Motion", "Vanilla CSS"],
      features: ["Book Release CTA Card", "Speaking Schedule Timeline", "Media Press Kit Download"],
      outcome: "A high-conversion personal showroom designed to secure conference bookings and media invites."
    }
  ],

  // 20 Detailed Service Cards
  servicesList: [
    { id: "business-websites", title: "Business Websites", cost: 249, time: "3 Weeks", audience: "Local businesses and service providers", overview: "Custom-designed multi-page websites that present your services clearly, build immediate trust, and drive local customer actions.", features: ["Custom UI Mockups", "Responsive Layouts", "Local SEO Optimization", "Contact Form Setup"] },
    { id: "landing-pages", title: "Landing Pages", cost: 149, time: "2 Weeks", audience: "Startups and product campaigns", overview: "High-conversion single-page campaigns built to capture leads, display key product value, and maximize ad ROI.", features: ["Clear Headline Copy Structure", "Lead Capture Automation", "Analytics Setup", "Fast Loading Speed"] },
    { id: "portfolio-websites", title: "Portfolio Websites", cost: 219, time: "3 Weeks", audience: "Creators, artists, and architects", overview: "Bespoke digital showrooms designed to display your creative projects in large format grids and custom timelines.", features: ["Masonry Project Grids", "Parallax Media Panels", "Exhibits Info Modals", "Boutique Design Styling"] },
    { id: "corporate-websites", title: "Corporate Websites", cost: 499, time: "5 Weeks", audience: "Enterprises and financial firms", overview: "Structured, high-end websites built to establish market authority, display company divisions, and share investor data.", features: ["Custom Design System", "Resource Libraries", "Role-based Auth Mockups", "Security Checkpoints"] },
    { id: "restaurant-websites", title: "Restaurant Websites", cost: 249, time: "3 Weeks", audience: "Michelin-starred and boutique bistros", overview: "Immersive culinary websites that display visual food menus, tableside stories, and seamless reservation portals.", features: ["Interactive Plating Menus", "Reservation Widget Integration", "Location & Hours Blocks", "Custom Photography Showcase"] },
    { id: "healthcare-websites", title: "Healthcare Websites", cost: 349, time: "4 Weeks", audience: "Medical clinics and specialists", overview: "Calming, accessible digital portals that connect patients to clinics, doctor schedules, and secure appointments.", features: ["Secure Booking Questionnaire", "Physician Bios Grids", "Accessibility Controls (WCAG)", "calming Indigo Aesthetic"] },
    { id: "educational-websites", title: "Educational Websites", cost: 319, time: "4 Weeks", audience: "Schools and course academies", overview: "Structured portals that display curriculum guides, course databases, faculty rosters, and application signups.", features: ["Course Categorization", "Student Resources Area", "Faculty Directory Grid", "Application Intake Form"] },
    { id: "ecommerce-websites", title: "E-commerce Websites", cost: 799, time: "6 Weeks", audience: "Boutique brands and street fashion", overview: "Secure, high-speed online shopping grids built to showcase products, manage carts, and secure credit checkouts.", features: ["Headless Cart Integrations", "Interactive Product Filters", "Stripe Checkpoint Integrations", "Customer Order Records"] },
    { id: "website-redesign", title: "Website Redesign", cost: 299, time: "3 Weeks", audience: "Brands with outdated legacy sites", overview: "Full code and style modernization to fix mobile rendering bugs, increase loading speeds, and rebuild user flows.", features: ["Asset Compression", "SEO URL Mapping", "Modern CSS Grids Upgrade", "Framer/Next Migration"] },
    { id: "website-maintenance", title: "Website Maintenance", cost: 25, time: "Monthly", audience: "Busy founders and businesses", overview: "Reliable monthly maintenance covering backups, security updates, server monitoring, and layout adjustments.", features: ["Weekly Database Backups", "Core Package Upgrades", "2 Hours Layout Support", "Downtime Alerts Tracking"] },
    { id: "hosting-domain", title: "Hosting & Domain Setup", cost: 40, time: "1 Week", audience: "Founders starting from scratch", overview: "Domain setup, secure SSL certificates, DNS routing rules, and fast deployment on CDN server nodes.", features: ["Custom domain routing", "Cloudflare DNS Config", "Vercel / Netlify Deploy", "Secure SSL Provisioning"] },
    { id: "seo-optimization", title: "SEO Optimization", cost: 149, time: "2 Weeks", audience: "Brands looking for search traffic", overview: "Advanced semantic search adjustments to rank higher on Google search results and attract targeted local traffic.", features: ["Google Search Console link", "Schema.org Structured Data", "Keyword Tag Structuring", "SEO Content Auditing"] },
    { id: "performance-boost", title: "Performance Optimization", cost: 129, time: "2 Weeks", audience: "Websites with slow loading speeds", overview: "Code cleaning and media optimizations to fix slow loading times and score 100/100 on Google PageSpeed.", features: ["Asset Lazy Loading", "Javascript Code Splitting", "CSS Bundle Minimization", "Image compression (.webp)"] },
    { id: "ai-chatbot", title: "AI Chatbot Integration", cost: 299, time: "4 Weeks", audience: "Support and sales teams", overview: "Integrating LLM interfaces (OpenAI, Gemini) into your website to handle customer questions and routing in real time.", features: ["Context-aware Chat UI", "LLM API Connections", "Conversational Prompt Setup", "Lead capture database triggers"] },
    { id: "custom-web-apps", title: "Custom Web Applications", cost: 999, time: "8 Weeks", audience: "Startups and SaaS founders", overview: "Bespoke SaaS applications built with secure auth gates, database relations, and advanced API workflows.", features: ["Database Schema Design", "JWT User Authentication", "Dashboard Analytics Panels", "Email Alert Integrations"] },
    { id: "ui-ux-design", title: "UI/UX Design", cost: 249, time: "3 Weeks", audience: "Startups wanting Figma layouts", overview: "Bespoke design drafts in Figma prioritizing layout architecture, micro-animations, and visual brand guides.", features: ["Interactive Prototypes", "Responsive Layout Grids", "Custom Design Tokens", "Developer-ready Handoff"] },
    { id: "brand-identity", title: "Brand Identity", cost: 199, time: "3 Weeks", audience: "Startups launching new names", overview: "A cohesive brand voice, selecting color theories, typography grids, and establishing clear brand guides.", features: ["Cohesive Brand Colors", "Typography Hierarchy Scale", "Social media visual layouts", "Complete Brand Book"] },
    { id: "logo-design", title: "Logo Design", cost: 99, time: "2 Weeks", audience: "Businesses looking for new marks", overview: "Crafting a memorable, premium brand logo in multiple vector scaling formats for digital and print assets.", features: ["3 Custom Design Options", "Unlimited Vector formats", "Monochrome & Color variations", "Visual Mockup Previews"] },
    { id: "website-security", title: "Website Security Setup", cost: 119, time: "2 Weeks", audience: "Platforms handling sensitive data", overview: "Advanced security hardening covering DDoS shields, SQL injection checks, secure cookies, and auth walls.", features: ["Cloudflare Firewall Rules", "SQL Injection Hardening", "Content Security Policies", "Secure HTTPS redirects"] },
    { id: "analytics-integration", title: "Analytics Integration", cost: 59, time: "1 Week", audience: "Marketing and business managers", overview: "Setting up Google Tag Manager and tracking points to analyze customer click patterns and optimize conversions.", features: ["Google Analytics 4 setup", "GTM Tag Tracking points", "Conversion Goal Triggers", "Analytics Reporting Dashboard"] }
  ],

  // Categorized Technology Stack
  technologies: {
    frontend: [
      { name: "React", useCase: "Component-based UI architecture" },
      { name: "Next.js", useCase: "Server components, static rendering, SEO performance" },
      { name: "TypeScript", useCase: "Strict type safety, compiler reliability" },
      { name: "Tailwind CSS", useCase: "Fast, utility-first styling prototypes" },
      { name: "GSAP", useCase: "Premium, hardware-accelerated animations" },
      { name: "Framer Motion", useCase: "React micro-interactions and layout transitions" }
    ],
    backend: [
      { name: "Node.js", useCase: "Asynchronous runtime for fast APIs" },
      { name: "Express", useCase: "Lightweight JSON API server routing" }
    ],
    database: [
      { name: "MongoDB", useCase: "Document-relational databases for flexible items" },
      { name: "Supabase / Postgres", useCase: "Open-source PostgreSQL and real-time triggers" },
      { name: "Prisma", useCase: "Database ORM mappings and clean static types" }
    ],
    cloud: [
      { name: "Vercel", useCase: "Production CDN deployment and serverless tasks" },
      { name: "Cloudflare", useCase: "Secure DNS routing, edge caching, and DDoS shielding" }
    ],
    ai: [
      { name: "OpenAI GPT API", useCase: "Context-aware LLM text generation and chatbots" },
      { name: "Gemini API", useCase: "Multimodal analysis and conversational support" }
    ],
    cms: [
      { name: "WordPress (Headless)", useCase: "Traditional content management with Next.js frontends" }
    ]
  },

  // 10-Stage Honest Development Process
  processStages: [
    { step: "01", title: "Discovery Call", description: "A 30-minute introductory call to outline your business operations, project budget constraints, and expectations." },
    { step: "02", title: "Requirement Gathering", description: "We detail page numbers, functional integrations, tech stack choices, and project milestones into a clear document." },
    { step: "03", title: "Research & Strategy", description: "We analyze competitor layouts, layout trends in your industry, and verify technical feasibility of requested assets." },
    { step: "04", title: "Wireframing", description: "We draw simple black-and-white structural wireframes to map user actions and page content placements." },
    { step: "05", title: "UI/UX Design", description: "We draft premium custom designs in Figma, selecting typography, colors, and interactive buttons. Zero templates." },
    { step: "06", title: "Code Development", description: "We write clean, semantic React and Vanilla CSS code, adding smooth scrolling and performance optimization." },
    { step: "07", title: "Technical Testing", description: "We verify layouts on 20+ viewport frames, check mobile responsiveness, and audit core loading speeds." },
    { step: "08", title: "Client Review", description: "We share a private development URL with you. We review the pages together and adjust details." },
    { step: "09", title: "Secure Deployment", description: "We configure custom domain names, set up SSL security certificates, and launch the site on global CDN nodes." },
    { step: "10", title: "Post-Launch Support", description: "We monitor database logs, track loading performance, and provide training on how to edit text easily." }
  ],

  // honest FAQ
  faq: [
    { question: "How much does it cost?", answer: "Our landing pages start at $149, business websites at $249, and custom e-commerce or Web Apps at $799+. We provide transparent pricing lists with clear deliverables. No hidden fees." },
    { question: "How fast can you build?", answer: "A standard landing page or portfolio takes 2 to 3 weeks. Complex e-commerce systems or database SaaS applications require 6 to 8 weeks. We deliver scoping documents detailing dates before signing agreements." },
    { question: "Will I own the source files?", answer: "Yes. You have 100% complete intellectual property ownership. Once the final milestone payment clears, we hand over all GitHub repositories, Figma vector sheets, and server routing logins to your team." },
    { question: "Do you provide ongoing maintenance?", answer: "Yes. We offer optional monthly maintenance plans starting at $25/mo to handle package upgrades, regular database backups, security scans, and minor content adjustments." },
    { question: "Do you provide hosting?", answer: "We set up and connect your website to fast, modern hosting platforms (like Vercel, Netlify, or Cloudflare). You own the hosting accounts, ensuring complete independence." },
    { question: "Can I edit my website myself?", answer: "Yes. We build using component-based architectures or integrate headless CMS portals (like Sanity or WordPress) so you can easily update blog articles and text without writing code." },
    { question: "Do you redesign existing websites?", answer: "Yes. We analyze your legacy site, extract the content, and rebuild it using modern React or Next.js to fix loading speeds, responsiveness bugs, and improve UI/UX design." },
    { question: "Will my website be mobile responsive?", answer: "Absolutely. Every single layout we forge is designed and tested for seamless navigation across modern smartphones, tablets, laptops, and wide desktop screens." },
    { question: "Do you build e-commerce websites?", answer: "Yes. We build high-speed, secure e-commerce systems, connecting headless platforms or Shopify backends to custom React frontends for fast checkout flows." }
  ],

  // Launch Deals
  offers: [
    { title: "Boutique Launch Discount", discount: "15% Off Project Cost", description: "For our first cohort of clients. Secure Awwwards-level design and custom React code at launch prices.", type: "Launch Discount" },
    { title: "Complimentary SEO Setup", discount: "Free SEO Structure", description: "We include schema.org metadata, keyword search setups, and Google Search Console links in all launch builds.", type: "Free SEO Setup" },
    { title: "Complimentary Website Speed Audit", discount: "Free Performance Review", description: "Send us your existing legacy URL, and we'll compile a detailed Core Web Vitals audit detailing speed and SEO lag factors.", type: "Free Audit" }
  ],

  pricing: [
    {
      name: "Starter Package",
      price: 249,
      description: "Perfect for freelancers, creators, and local service providers needing a premium showcase site.",
      features: [
        "Up to 4 Custom Designed Pages",
        "100% Mobile Responsive Layout",
        "Google PageSpeed Optimized (95+ score)",
        "Basic Semantic SEO tag structures",
        "Domain Setup & Edge CDN Hosting Link",
        "Standard Contact Inquiry Form",
        "2 Weeks Post-Launch support window"
      ],
      time: "3 Weeks",
      support: "2 Weeks"
    },
    {
      name: "Professional Package",
      price: 499,
      description: "Ideal for growing businesses, startups, and agencies requiring rich layouts and calendar booking.",
      features: [
        "Up to 8 Custom Designed Pages",
        "Advanced Motion & GSAP animations",
        "Interactive Filterable Concept Gallery",
        "Calendly / Booking System mock links",
        "Google Analytics 4 event tracking",
        "Complete Figma UI design files",
        "4 Weeks Post-Launch support window"
      ],
      time: "4 Weeks",
      support: "4 Weeks"
    },
    {
      name: "Business Package",
      price: 899,
      description: "For companies needing advanced e-commerce grids, custom database schemas, or database routing.",
      features: [
        "Custom E-commerce Shopping Grid",
        "Secure User Auth Setup (Supabase / JWT)",
        "Advanced Database integrations (SQL/NoSQL)",
        "AI Chatbot workflow integrations",
        "Custom Admin Panel Dashboard Mockup",
        "12 Weeks Post-Launch support window",
        "2 Hours Training Video tutorial session"
      ],
      time: "6 Weeks",
      support: "12 Weeks"
    }
  ],
  portfolio: [
    {
      id: "restaurant-case",
      title: "Epicurean Bistro Digital Transformation",
      client: "Epicurean Group",
      category: "Restaurant Website",
      timeline: "3 Weeks",
      overview: "Replaced a traditional PDF-only restaurant menu structure with a bespoke, interactive visual plating showcase that drove local bookings.",
      problem: "The client was losing table bookings because their mobile site loaded a slow 10MB PDF menu, frustrating users on cellular networks.",
      research: "We audited user behaviour and found 65% of visitors bounced when clicking the menu. We designed a web-native menu that loads under 0.5s.",
      solution: "Built a custom React interface with image lazy-loading, responsive typography, and an automated booking calendar mock.",
      results: "Menu load times dropped from 8 seconds to 0.4 seconds, resulting in an estimated 32% increase in reservations.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "realestate-case",
      title: "Aero Estates Platform Launch",
      client: "Aero Holdings",
      category: "Real Estate Website",
      timeline: "4 Weeks",
      overview: "Designed an elite real estate listings portal utilizing large-scale media panels and high-contrast styling details.",
      problem: "Standard listings portals looked cluttered and template-locked, failing to convey the luxury of the estates.",
      research: "We researched high-net-worth buyer patterns and noticed they prioritised minimal typography, clear spec grids, and immersive imagery.",
      solution: "Engineered a custom React catalog with smooth page wipes, custom filters, and large slider components.",
      results: "Created a template-defying visual experience that established immediate authority for the startup.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    }
  ],
  careers: [
    {
      id: "frontend-dev",
      title: "Creative Frontend Developer",
      location: "Remote (India/Europe)",
      type: "Full-Time",
      description: "We are seeking a talented React developer who loves UI/UX detail and can craft premium, fluid animations using GSAP and CSS.",
      requirements: [
        "3+ years of experience with React, Vite, and modern CSS modules.",
        "Deep knowledge of UI animations (GSAP, Framer Motion, or custom CSS keyframes).",
        "An eye for premium design: spacing, typography, and contrast details."
      ],
      responsibilities: [
        "Write clean, semantic, and reusable React components.",
        "Collaborate with designers to implement high-fidelity interactive screens.",
        "Optimize page speeds and ensure solid cross-browser responsive layouts."
      ]
    },
    {
      id: "fullstack-architect",
      title: "Senior Full-Stack Architect",
      location: "Remote (India)",
      type: "Full-Time",
      description: "Looking for an engineer to lead our custom web application setups, database architectures, and API integrations.",
      requirements: [
        "5+ years of experience with Node.js, Express, and database systems (SQL/NoSQL).",
        "Experience building secure JWT authentication and roles systems.",
        "Comfortable with Cloudflare, Vercel, and modern CI/CD setups."
      ],
      responsibilities: [
        "Architect scalable database structures and serverless endpoints.",
        "Ensure secure database routing and robust state management.",
        "Guide junior developers and structure backend deployment flows."
      ]
    }
  ],
  blog: [
    {
      id: "power-of-custom-code",
      title: "The Power of Custom Code vs. Page Builders",
      category: "Design",
      summary: "Why premium brands are abandoning template drag-and-drop builders for bespoke React and custom layouts.",
      date: "June 28, 2026",
      readTime: "5 min read",
      content: "Template builders like WordPress or Wix are great for initial mockups, but they inject massive code bloat, slowing down page loads and hurting Google rankings. In contrast, custom React and clean CSS load in under 1 second, providing custom transition controls and a unique, premium design footprint that represents authority.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "optimizing-react-speed",
      title: "Optimizing React and Vite for 100/100 PageSpeed",
      category: "Technology",
      summary: "A practical guide to asset compression, code splitting, and lazy loading images in React builds.",
      date: "July 2, 2026",
      readTime: "6 min read",
      content: "Page speed is a critical ranking factor. By utilizing Vite's native bundler settings, splitting major route bundles, lazy-loading offscreen images with modern webp compression, and avoiding heavy client libraries, we can achieve high performance on mobile devices. This translates to higher conversion rates and happier visitors.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    }
  ],
  team: [
    {
      name: "Umer Khan",
      role: "Founder",
      bio: "Umer leads the creative direction and product strategy at CoreForge Studio. With a strong foundation in modern user experience (UX) and interface design, he bridges the gap between client requirements and high-fidelity digital solutions to establish market authority.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Shanum",
      role: "Co-Founder",
      bio: "Shanum oversees full-stack systems engineering and cloud deployments. Specializing in secure database architecture, performance optimization, and custom REST API development, she ensures all CoreForge builds load in under 1 second.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    }
  ]
};
