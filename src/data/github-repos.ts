import { GitHubRepo } from "@/types";

export const githubRepos: GitHubRepo[] = [
  // University
  {
    name: "missile-trajectory-tracker",
    description:
      "Physics-based ballistic missile trajectory simulation with real-time visualisation. Models gravity, drag, and atmospheric effects.",
    tech: ["Python", "NumPy", "Matplotlib"],
    category: "university",
    url: "https://github.com/Max11122006/missile-trajectory-tracker",
  },
  {
    name: "bending-beam-analysis",
    description:
      "Finite element bending beam simulation. Calculates deflection, shear force, and bending moment diagrams for various loading conditions and support types.",
    tech: ["C++", "Engineering Simulation"],
    category: "university",
    url: "https://github.com/Max11122006/bending-beam-analysis",
  },
  {
    name: "thermo-cycle-solver",
    description:
      "Thermodynamic cycle analysis tool for computing efficiency, work output, and heat transfer across Carnot, Rankine, and Brayton cycles.",
    tech: ["Python", "Thermodynamics"],
    category: "university",
    url: "https://github.com/Max11122006/thermo-cycle-solver",
  },
  // Hackathon
  {
    name: "stormwatch-ai",
    description:
      "Severe weather prediction system built at a hackathon. Uses historical meteorological data and ML classification to identify storm-forming conditions in real time.",
    tech: ["Python", "Scikit-learn", "Pandas", "Flask"],
    category: "hackathon",
    url: "https://github.com/Max11122006/stormwatch-ai",
  },
  {
    name: "flight-delay-predictor",
    description:
      "Team-built tool that predicts flight delays using airport traffic data, weather feeds, and historical delay patterns. Hackathon finalist project.",
    tech: ["Python", "XGBoost", "React", "REST API"],
    category: "hackathon",
    url: "https://github.com/Max11122006/flight-delay-predictor",
  },
  // Personal
  {
    name: "portfolio-website-v2",
    description:
      "Personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4. You're looking at it right now.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "personal",
    url: "https://github.com/Max11122006/portfolio-website-v2",
  },
  {
    name: "arduino-env-monitor",
    description:
      "Environmental monitoring station using Arduino, DHT22, and BMP280 sensors. Logs temperature, humidity, and pressure to SD card with real-time serial output.",
    tech: ["Arduino", "C++", "Electronics"],
    category: "personal",
    url: "https://github.com/Max11122006/arduino-env-monitor",
  },
];

export const reposByCategory = {
  university: githubRepos.filter((r) => r.category === "university"),
  hackathon: githubRepos.filter((r) => r.category === "hackathon"),
  personal: githubRepos.filter((r) => r.category === "personal"),
};
