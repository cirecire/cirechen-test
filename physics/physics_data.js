// physics_data.js — 北师大版八年级物理 · Khan Academy 对照题库
// 课本：北师大版 2024（八年级上册 + 下册）
// 结构：每章含 think / videos / notes / practice / quiz
// hint/dia 待 KA 实采后补入
var PHYSICS_DATA = [

// ══════════════════════════════════════════════════════
// 上册 Term 1 — Ch01~Ch05
// ══════════════════════════════════════════════════════

{ // ─────────────────────────────────────────────────
  // Ch01 物态及其变化 Phase Changes
  // KA: 6th grade science / Heat & temperature / States of matter
  id: "ch01",
  g: "8",
  gx: 1,
  title: "物态及其变化",
  subtitle: "Phase Changes",
  term: 1,
  coverage: "g",
  think: "What determines whether a substance is a solid, liquid, or gas? What happens to the particles inside a substance when you heat it or cool it? Why does ice melt at 0°C and water boil at 100°C at standard pressure?",
  videos: [],
  subtopics: [
    { name: "Temperature & Thermometers", vids: [], pq: [] },
    { name: "Phase Change Concepts", vids: [], pq: [] },
  ],
  notes: [
    "Solid: fixed shape and volume; particles vibrate in place.",
    "Liquid: fixed volume, takes container shape; particles slide past each other.",
    "Gas: no fixed shape or volume; particles move freely.",
    "Melting: solid → liquid (absorbs heat).",
    "Freezing: liquid → solid (releases heat).",
    "Evaporation: liquid → gas at surface (below boiling point).",
    "Boiling: liquid → gas throughout at boiling point.",
    "Sublimation: solid → gas directly (e.g., dry ice).",
  ],
  practice: [],
  quiz: [],
},

{ // ─────────────────────────────────────────────────
  // Ch02 机械运动 Mechanical Motion
  // KA: Physics library → One-dimensional motion
  id: "ch02",
  g: "8",
  gx: 1,
  title: "机械运动",
  subtitle: "Mechanical Motion",
  term: 1,
  coverage: "g",
  think: "How do you describe motion precisely? What is the difference between distance and displacement? Between speed and velocity? When a car accelerates from 0 to 60 km/h in 8 seconds — how do you calculate that acceleration?",
  videos: [],
  subtopics: [
    { name: "Reference Frames & Displacement", vids: [], pq: [] },
    { name: "Speed and Velocity", vids: [], pq: [] },
    { name: "Acceleration", vids: [], pq: [] },
  ],
  notes: [
    "Distance: total path length, scalar quantity.",
    "Displacement: change in position, vector (direction matters).",
    "Speed = distance / time (scalar).",
    "Velocity = displacement / time (vector).",
    "Acceleration a = (v_f − v_i) / t.",
    "At constant acceleration: v_f = v_i + at; s = v_i t + ½at².",
  ],
  practice: [],
  quiz: [],
},

{ // ─────────────────────────────────────────────────
  // Ch03 声现象 Sound and Waves
  // KA: Waves and sound / Sound
  id: "ch03",
  g: "8",
  gx: 1,
  title: "声现象",
  subtitle: "Sound and Waves",
  term: 1,
  coverage: "g",
  think: "How is sound produced? Does sound travel faster in air or in water? What makes a guitar string produce a higher-pitched note than a bass guitar? How do echolocation and sonar work?",
  videos: [],
  subtopics: [
    { name: "Sound Production & Propagation", vids: [], pq: [] },
    { name: "Wave Properties: Frequency & Amplitude", vids: [], pq: [] },
  ],
  notes: [
    "Sound is a longitudinal wave produced by vibrating objects.",
    "Sound requires a medium to travel (cannot travel in vacuum).",
    "Speed of sound: ~340 m/s in air at 20°C.",
    "Pitch is determined by frequency: higher frequency = higher pitch.",
    "Amplitude determines loudness: larger amplitude = louder sound.",
    "Frequency f = 1/T (Hz). Wavelength λ = v/f.",
  ],
  practice: [],
  quiz: [],
},

{ // ─────────────────────────────────────────────────
  // Ch04 光现象 Light
  // KA: Waves / Light / Reflection and refraction
  id: "ch04",
  g: "8",
  gx: 1,
  title: "光现象",
  subtitle: "Light",
  term: 1,
  coverage: "g",
  think: "Why can you see yourself in a mirror but not in a white wall? What causes a rainbow? Why does a pencil look 'broken' when you put it in water? What is the law of reflection?",
  videos: [],
  subtopics: [
    { name: "Light Propagation & Reflection", vids: [], pq: [] },
    { name: "Refraction & Lenses", vids: [], pq: [] },
  ],
  notes: [
    "Light travels in straight lines (ray model).",
    "Law of reflection: angle of incidence = angle of reflection.",
    "Plane mirror: image is virtual, upright, same size, laterally reversed.",
    "Refraction: light bends when passing into a different medium.",
    "Snell's law: n₁ sin θ₁ = n₂ sin θ₂.",
    "Critical angle causes total internal reflection.",
  ],
  practice: [],
  quiz: [],
},

{ // ─────────────────────────────────────────────────
  // Ch05 透镜及其应用 Lenses and Vision
  // KA: Geometric optics / Lenses
  id: "ch05",
  g: "8",
  gx: 1,
  title: "透镜及其应用",
  subtitle: "Lenses and Vision",
  term: 1,
  coverage: "g",
  think: "How does a convex lens form a real image on a screen? Why does a concave lens always produce a virtual, upright image? How do microscopes and telescopes work? What determines whether a person is nearsighted or farsighted?",
  videos: [],
  subtopics: [
    { name: "Convex and Concave Lenses", vids: [], pq: [] },
    { name: "Lens Equation and Applications", vids: [], pq: [] },
  ],
  notes: [
    "Convex (converging) lens: thicker in the middle.",
    "Concave (diverging) lens: thinner in the middle.",
    "Lens formula: 1/f = 1/v + 1/u.",
    "Magnification M = v/u = image height / object height.",
    "Real image: inverted, can be projected on a screen.",
    "Virtual image: upright, cannot be projected.",
  ],
  practice: [],
  quiz: [],
},

// ══════════════════════════════════════════════════════
// 下册 Term 2 — Ch06~Ch11
// ══════════════════════════════════════════════════════

{ // ─────────────────────────────────────────────────
  // Ch06 质量和密度 Mass, Volume and Density
  // KA: Density, specific gravity / 6th grade science
  id: "ch06",
  g: "8",
  gx: 1,
  title: "质量和密度",
  subtitle: "Mass, Volume and Density",
  term: 2,
  coverage: "g",
  think: "A 1 kg block of iron and a 1 kg block of wood have the same mass — but do they have the same volume? Why does oil float on water? How do you identify an unknown metal using its density?",
  videos: [],
  subtopics: [
    { name: "Mass and Volume", vids: [], pq: [] },
    { name: "Density and Applications", vids: [], pq: [] },
  ],
  notes: [
    "Mass: amount of matter in an object (kg).",
    "Volume: amount of space an object occupies (m³ or cm³).",
    "Density ρ = m/V (kg/m³ or g/cm³).",
    "Water density = 1 g/cm³ = 1000 kg/m³.",
    "Relative density = density of substance / density of water.",
    "Floating: object density < fluid density.",
  ],
  practice: [],
  quiz: [],
},

{ // ─────────────────────────────────────────────────
  // Ch07 运动和力 Motion and Forces
  // KA: Forces and Newton's laws of motion
  id: "ch07",
  g: "8",
  gx: 1,
  title: "运动和力",
  subtitle: "Motion and Forces",
  term: 2,
  coverage: "g",
  think: "What makes an object start moving? What keeps it moving at constant velocity? Newton's First Law says an object at rest stays at rest unless acted upon — so why does a sliding book eventually stop on a table? What is the relationship between force, mass and acceleration?",
  videos: [],
  subtopics: [
    { name: "Force and Interactions", vids: [], pq: [] },
    { name: "Newton's Laws of Motion", vids: [], pq: [] },
    { name: "Friction", vids: [], pq: [] },
  ],
  notes: [
    "Force: push or pull, measured in Newtons (N).",
    "Newton's 1st Law (Inertia): object stays at rest or uniform motion unless acted upon by a net force.",
    "Newton's 2nd Law: F = ma.",
    "Newton's 3rd Law: for every action, there is an equal and opposite reaction.",
    "Friction f = μN (μ = coefficient of friction).",
    "Weight W = mg (g ≈ 9.8 N/kg on Earth).",
  ],
  practice: [],
  quiz: [],
},

{ // ─────────────────────────────────────────────────
  // Ch08 压强和浮力 Pressure and Buoyancy
  // KA: Fluids / Pressure / Buoyancy
  id: "ch08",
  g: "8",
  gx: 1,
  title: "压强和浮力",
  subtitle: "Pressure and Buoyancy",
  term: 2,
  coverage: "g",
  think: "Why does a sharp knife cut better than a blunt one? Why do deep-sea divers need special suits? Why does a steel ship float even though steel is denser than water? What is Archimedes' principle?",
  videos: [],
  subtopics: [
    { name: "Pressure in Solids and Fluids", vids: [], pq: [] },
    { name: "Buoyancy and Archimedes' Principle", vids: [], pq: [] },
  ],
  notes: [
    "Pressure p = F/A (force per unit area, N/m² = Pa).",
    "Fluid pressure increases with depth: p = ρgh.",
    "Atmospheric pressure ≈ 1.01 × 10⁵ Pa at sea level.",
    "Buoyant force F_b = ρ_fluid × g × V_displaced.",
    "Floating: F_b = mg (weight balanced by buoyant force).",
    "Sinking: ρ_object > ρ_fluid (weight > buoyant force).",
  ],
  practice: [],
  quiz: [],
},

{ // ─────────────────────────────────────────────────
  // Ch09 机械和功 Machines and Work
  // KA: Simple machines / Work and energy
  id: "ch09",
  g: "8",
  gx: 1,
  title: "机械和功",
  subtitle: "Machines and Work",
  term: 2,
  coverage: "g",
  think: "What does it mean to 'do work' in physics? Lifting a 50 kg object 2 m high — how much work do you do? A lever lets you lift a heavy rock with less force — but do you also do less work?",
  videos: [],
  subtopics: [
    { name: "Work and Energy", vids: [], pq: [] },
    { name: "Simple Machines", vids: [], pq: [] },
  ],
  notes: [
    "Work W = F × s × cos θ (J = N·m).",
    "1 J = energy used when a 1 N force moves an object 1 m.",
    "Power P = W/t (watts, W = J/s).",
    "Mechanical advantage MA = F_out / F_in.",
    "Lever: MA = effort arm / load arm.",
    "Pulley: MA = number of supporting rope segments.",
  ],
  practice: [],
  quiz: [],
},

{ // ─────────────────────────────────────────────────
  // Ch10 力和机械能 Force and Mechanical Energy
  // KA: Work and energy / Conservation of energy
  id: "ch10",
  g: "8",
  gx: 1,
  title: "力和机械能",
  subtitle: "Force and Mechanical Energy",
  term: 2,
  coverage: "g",
  think: "A roller coaster at the top of a hill has maximum potential energy. At the bottom, that energy has converted into kinetic energy. What happens at the middle of the track? Where does the energy go when the coaster eventually stops?",
  videos: [],
  subtopics: [
    { name: "Kinetic and Potential Energy", vids: [], pq: [] },
    { name: "Conservation of Energy", vids: [], pq: [] },
  ],
  notes: [
    "Kinetic energy KE = ½mv² (J).",
    "Gravitational potential energy PE = mgh (J).",
    "Elastic potential energy PE = ½kx² (k = spring constant).",
    "Law of conservation of energy: energy cannot be created or destroyed, only transformed.",
    "Total mechanical energy = KE + PE = constant (without friction).",
    "With friction: some mechanical energy → thermal energy.",
  ],
  practice: [],
  quiz: [],
},

{ // ─────────────────────────────────────────────────
  // Ch11 简单机械 Simple Machines
  // KA: Simple machines
  id: "ch11",
  g: "8",
  gx: 1,
  title: "简单机械",
  subtitle: "Simple Machines",
  term: 2,
  coverage: "g",
  think: "A construction worker uses a wheelbarrow to move heavy bricks. A chef uses a bottle opener to pry off a cap. A flag is raised using a pulley system. What do all these devices have in common — and how do they make work easier?",
  videos: [],
  subtopics: [
    { name: "Levers and Inclined Planes", vids: [], pq: [] },
    { name: "Mechanical Advantage and Efficiency", vids: [], pq: [] },
  ],
  notes: [
    "Six simple machines: lever, inclined plane, wedge, screw, wheel and axle, pulley.",
    "Mechanical advantage MA = output force / input force.",
    "Velocity ratio VR = distance moved by effort / distance moved by load.",
    "Efficiency η = (MA / VR) × 100%.",
    "Ideal machine: η = 100%, MA = VR.",
    "Real machines: friction reduces efficiency (η < 100%).",
  ],
  practice: [],
  quiz: [],
},

]; // end PHYSICS_DATA
