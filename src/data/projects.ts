import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "car-project",
    title: "Car Build",
    subtitle: "Full vehicle restoration and modification",
    description:
      "A ground-up vehicle build covering mechanical restoration, electrical system rewiring, and performance modifications. Every system was disassembled, inspected, and rebuilt with an emphasis on understanding how each subsystem integrates into the whole.",
    highlights: [
      "Mechanical diagnostics: compression testing, leak-down analysis, suspension geometry measurement",
      "Complete engine teardown, inspection, and rebuild with new gaskets, seals, and timing components",
      "Custom wiring harness fabrication and full electrical system rewiring",
      "Suspension geometry optimisation and brake system overhaul with upgraded components",
      "Lessons learned: systematic fault-finding is faster than guessing — every diagnosis starts with data",
      "Future upgrades: standalone ECU for fuel mapping, coilover suspension, roll cage fabrication",
    ],
    tech: ["Mechanical Design", "Electrical Systems", "Welding", "Fabrication", "Diagnostics"],
    images: ["/images/projects/car-1.jpg"],
    featured: true,
  },
  {
    id: "3d-printer",
    title: "3D Printer Build",
    subtitle: "Custom CoreXY 3D printer from scratch",
    description:
      "Designed and assembled a CoreXY motion system 3D printer from individually sourced components. Configured Klipper firmware from scratch, systematically calibrated every axis, and iteratively tuned print quality across multiple filament types. Now used to produce functional parts, jigs, and enclosures for other projects.",
    highlights: [
      "CoreXY kinematics chosen for speed, rigidity, and print quality",
      "Klipper firmware: configured steppers, thermistors, bed mesh, pressure advance, and input shaping",
      "Calibration: flow rate, retraction, resonance compensation, first-layer adhesion across PLA/PETG/ABS",
      "Custom heated enclosure for temperature-stable ABS and nylon printing",
      "Currently printing: brackets, sensor mounts, cable routing clips, and prototype housings",
      "Future upgrades: direct-drive extruder, filament runout sensor, CAN bus toolhead board",
    ],
    tech: ["CAD", "3D Printing", "Klipper", "Electronics", "Python"],
    images: ["/images/projects/printer-1.jpg"],
    featured: true,
  },
  {
    id: "missile-trajectory-tracker",
    title: "Missile Trajectory Tracker",
    subtitle: "Real-time ballistic trajectory simulation",
    description:
      "A Python application that models ballistic missile trajectories using physics-based simulation. Accounts for gravity, drag, Earth's curvature, and atmospheric density to produce realistic flight paths with real-time visualisation.",
    tech: ["Python", "NumPy", "Matplotlib", "Physics Simulation"],
    images: ["/images/projects/missile-tracker-1.jpg"],
    featured: true,
    github: "https://github.com/Max11122006/missile-trajectory-tracker",
  },
  {
    id: "storm-prediction",
    title: "Storm Prediction Model",
    subtitle: "Weather pattern analysis and prediction",
    description:
      "A data-driven approach to predicting severe weather events using historical meteorological data. Built feature engineering pipelines and trained classification models to identify conditions likely to produce storms.",
    tech: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    images: ["/images/projects/storm-1.jpg"],
    featured: false,
  },
  {
    id: "arduino-builds",
    title: "Arduino Projects",
    subtitle: "Embedded systems and sensor integration",
    description:
      "A collection of Arduino-based projects exploring embedded systems, sensor integration, and real-time control. Projects include environmental monitoring stations, motor controllers, and automated systems.",
    tech: ["Arduino", "C++", "Electronics", "Sensors", "PCB Design"],
    images: ["/images/projects/arduino-1.jpg"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
