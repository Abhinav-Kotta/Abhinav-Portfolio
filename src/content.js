// Content adapted from the user's portfolio projects; experience updated from
// the supplied Abhinav_Kotta_Resume.pdf (September 2026).
// Dayan details: https://github.com/Abhinav-Kotta/Tabla-Tuner
export const profile = {
  name: 'Abhinav Kotta', firstName: 'Abhinav',
  role: 'AI/ML engineer & curious builder',
  email: 'abhinavkotta.io@gmail.com',
  github: 'https://github.com/Abhinav-Kotta',
  linkedin: 'https://linkedin.com/in/akotta03',
  introduction: 'I build intelligent systems and thoughtful digital experiences. A little research, a lot of code, and a curiosity that connects the dots.',
};
export const projects = [
  {
    id: 'tabla', category: 'product', categoryLabel: 'Music meets engineering', title: 'Dayan Tabla Tuner',
    description: 'A better ear for the details. An in-browser tuner that maps pitch across eight regions of a tabla head.',
    tags: ['TypeScript', 'Web Audio', 'Computer vision'], note: 'Built for the rhythm.',
    source: 'https://github.com/Abhinav-Kotta/Tabla-Tuner/tree/main',
    intro: 'A browser-based tool for tabla players who want to understand how evenly pitch carries around the dayan head. It connects my interest in music with signal processing and computer vision.',
    details: [
      ['The idea', 'Upload a top-down photo, choose a target note, and measure three strikes in each of eight tuning regions. A visual tuning map shows where the head is sharp or flat.'],
      ['Under the hood', 'Local image processing aligns the drum head. The Web Audio pipeline estimates fundamental pitch with normalized autocorrelation and repeated-period checks, then combines readings with medians to reduce outlier influence.'],
      ['Built for the player', 'Photo and audio analysis stay in the browser. Manual alignment, explicit target notes, and text-based sharp/flat guidance keep the player in control.'],
    ],
  },
  {
    id: 'drift', category: 'product', categoryLabel: 'Full-stack · virtual reality', title: 'DRIFT',
    description: 'Drone racing, a different perspective. A full-stack platform built around an immersive VR experience.',
    tags: ['React', 'Next.js', 'Stripe'], note: 'A new point of view.',
    source: 'https://github.com/Abhinav-Kotta/DRIFT',
    intro: 'A full-stack VR drone racing application that brings together immersive interaction and product infrastructure.',
    details: [['The idea', 'Build a drone racing experience with virtual reality at its center.'], ['The stack', 'React and Next.js power the application, with Stripe integrated into the product.'], ['The focus', 'Connecting an immersive experience to the practical foundations of a full-stack web platform.']],
  },
  {
    id: 'hurricane', category: 'research', categoryLabel: 'Machine learning · published research', title: 'Hurricane Outage Predictor',
    description: 'Turning satellite imagery and weather data into a clearer picture of hurricane-related power outages.',
    tags: ['Python', 'Graph neural networks', 'U-Net'], note: 'Research with real impact.',
    source: 'https://ieeexplore.ieee.org/document/10749545', sourceLabel: 'Read the paper',
    intro: 'Hurricane Power Outage Prediction Using Spatio-Temporal Graph Neural Networks. Research at the Florida Solar Energy Center, linked to IEEE PVSC 2024.',
    details: [['The challenge', 'Model hurricane-related power outages at a 500-meter resolution using satellite imagery and weather data.'], ['The approach', 'Combine U-Net and graph neural network layers in a spatio-temporal model, drawing on analysis of more than 3,000 NASA satellite images.'], ['The publication', 'The work resulted in a paper accepted at the 2024 IEEE Photovoltaic Specialists Conference.']],
  },
  {
    id: 'behavior', category: 'research', categoryLabel: 'Applied AI · simulation', title: 'Behavior Tree Generator',
    description: 'Helping turn intent into structured behavior trees for military simulations, with a dual-LLM system.',
    tags: ['Python', 'C++', 'CodeLlama'], note: 'From words to behavior.',
    source: 'https://github.com/Abhinav-Kotta/Behavior-Tree-Generation',
    intro: 'Research at UCF’s Intelligent Agents Lab on automated behavior tree creation for military simulations, in a project with Lockheed Martin.',
    details: [['The approach', 'A dual-LLM system uses LoRA-tuned CodeLlama for generation and LlamaChat for interpretation.'], ['Grounding the output', 'A Pinecone vector database provides military doctrine for retrieval-augmented tactical tree generation.'], ['Making it visible', 'A React-based interface visualizes behavior tree outputs so the generated structure can be explored.']],
  },
  {
    id: 'clarity', category: 'research', categoryLabel: 'AI research · robustness', title: 'CLARITY',
    description: 'A lightweight VIMA add-on that aligns prompt representations to defend against rephrasing attacks.',
    tags: ['Python', 'VIMA', 'LLMs'], note: 'Same meaning. More resilience.',
    source: 'https://github.com/SandysPappy/LASER',
    intro: 'CLARITY explores robustness in VIMA through a lightweight add-on that aligns prompt representations.',
    details: [['The challenge', 'Changes in phrasing can disrupt a model’s performance even when the underlying intent stays the same.'], ['The approach', 'Align prompt representations to defend against rephrasing attacks while keeping the add-on lightweight.']],
  },
  {
    id: 'sketchbook', category: 'product', categoryLabel: 'Design · development', title: 'This Digital Sketchbook',
    description: 'The page you’re on. A personal portfolio reimagined in paper, pencil, and a little intentional imperfection.',
    tags: ['JavaScript', 'CSS', 'Vite'], note: 'You are here :)',
    source: 'https://github.com/Abhinav-Kotta/Abhinav-Portfolio',
    intro: 'A fresh page for my portfolio. This redesign takes the warmth of a working notebook and brings it to the web.',
    details: [['The idea', 'Give technical work a human home with handwritten type, paper textures, ink illustrations, and small interactions.'], ['Built with care', 'Shared design tokens and reusable components keep the irregular aesthetic consistent. Self-hosted fonts, responsive layouts, keyboard navigation, and reduced-motion support are part of the foundation.']],
  },
].map((project, index) => ({ ...project, number: String(index + 1).padStart(2, '0') }));

export const experience = [
  { date: 'Jul 2026 – Present', company: 'L3Harris Technologies', role: 'Software Engineer', description: 'Architected an SD-WAN situational-awareness system to predict tunnel degradation. Built an ELK stack recommendation engine with weighted health scoring and deterministic remediation, and evaluated Isolation Forest and HMMs for ML-driven anomaly detection.' },
  { date: 'Jan – May 2026', company: 'TheMindOverMarket', role: 'CTO', description: 'Architected a deterministic trading-rule engine and SaaS strategy supervisor for intraday traders and prop firms. Integrated broker APIs for real-time behavioral enforcement; selected as a Top 11 finalist at the Cornell Tech Startup Awards.' },
  { date: 'May – Aug 2025', company: 'Los Alamos National Laboratory', role: 'Software Engineer Intern', description: 'Built a Slurm-based HPC access platform that cut job submission time by 50%, and configured a 10-node InfiniBand cluster with distributed GPUs. Enabled secure container execution with Charliecloud and Docker, with Grafana monitoring to improve resource utilization.' },
  { date: 'May – Aug 2024', company: 'L3Harris Technologies', role: 'Software Engineer Intern', description: 'Developed an AI-powered subject matter expert and a microservices backend for production RAG. Containerized AWQ-quantized LLMs with Docker, improving inference accuracy by 40%, and deployed Kubernetes-based inference systems that improved throughput by 50%.' },
];
export const toolbox = [
  { icon: 'braces', name: 'The languages', tools: 'Python · TypeScript · JavaScript · SQL · C · C++ · C# · Java · Bash' },
  { icon: 'brain-circuit', name: 'The intelligence', tools: 'PyTorch · LLMs · RAG · vLLM · TGI' },
  { icon: 'panels-top-left', name: 'The experiences', tools: 'React · Next.js · Flask · HTML & CSS · Web Audio' },
  { icon: 'server', name: 'The infrastructure', tools: 'Docker · AWS · Slurm · InfiniBand · ELK stack · HPC' },
];
