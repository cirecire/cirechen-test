// physics_data.js — 人教版八年级物理（上册）· Khan Academy 对照学习站
// 教材：人民教育出版社 八年级物理上册（教育部审定 2013 版）
// 结构：6 章 28 节（每节知识点并入 notes；跨学科实践节无 KA 对应题）
// 数据契约（与 math_data.js 一致）：
//   { id, g, gx, title, subtitle, term, coverage, think, videos:[{yt|local, t, m, duration, ka}],
//     notes:[...], practice:[{q, dia?, options?, ansIdx|ans, sol}], quiz:[...] }
// ⚠️ 题目必须来自 KA 真题或公立校真题（21cnjy 等），禁止 AI 编题。当前 practice/quiz 为空 = 采集中。

var PHYSICS_DATA = [

// ══════════════════════════════════════════════════════════
// 第一章 机械运动（4节）
// ══════════════════════════════════════════════════════════
{
  id: "ch01",
  g: "8",
  gx: 1,
  title: "机械运动",
  subtitle: "Mechanical Motion",
  term: 1,
  coverage: "p",
  think: "How do we measure length and time precisely? What does it mean to say an object is moving — moving relative to what? How do we compare how fast different objects move?",
  // KA subtopic structure: each subtopic = video(s) + practice question(s), then next subtopic.
  // practice[] is the flat array; subtopics.pq references indices into it.
  subtopics: [
    { name: "§1.1 长度和时间的测量 · Length & Time", vids: [0, 5], pq: [0] },
    { name: "§1.2 运动的描述 · Describing Motion", vids: [3],          pq: [1] },
    { name: "§1.3 运动的快慢 · Speed & Velocity", vids: [1, 2],      pq: [2, 3] },
    { name: "§1.4 速度的测量 · Measuring Speed",     vids: [4],          pq: [4] },
  ],
  videos: [
        {yt: "GtoamALPOP0", t: "Position vs. time graphs", ka: "https://www.khanacademy.org/science/physics/one-dimensional-motion/displacement-velocity-and-time/v/position-vs-time-graphs"},
        {yt: "oRKxmXwLvUU", t: "Calculating average velocity or speed", ka: "https://www.khanacademy.org/science/physics/one-dimensional-motion/displacement-velocity-and-time/v/calculating-average-velocity-or-speed"},
        {yt: "FOkQszg1-j8", t: "Acceleration", ka: "https://www.khanacademy.org/science/physics/one-dimensional-motion/acceleration/v/acceleration"},
        {yt: "3yaZ7lkQPUQ", t: "Introduction to reference frames", ka: "https://www.khanacademy.org/science/physics/one-dimensional-motion/displacement-velocity-and-time/v/introduction-to-reference-frames"},
        {yt: "fQt69_Q2CTw", t: "Airbus A380 take-off distance", ka: "https://www.khanacademy.org/science/physics/one-dimensional-motion/kinematic-formulas/v/airbus-a380-take-off-distance"},
        {yt: "6Zwj7wjp7hQ", t: "Intro to vectors and scalars", ka: "https://www.khanacademy.org/science/physics/one-dimensional-motion/displacement-velocity-and-time/v/intro-to-vectors-and-scalars"}
      ],
  notes: [
    "§1.1 长度和时间的测量 (Measuring length and time): The SI unit of length is the metre (m); 1 m = 100 cm = 1000 mm; 1 km = 1000 m. The ruler (刻度尺) is the basic tool — read to one decimal place beyond the smallest division (估读到分度值的下一位). Time: SI unit is the second (s); stopwatch (停表/秒表) reads minutes and seconds. Error (误差) is unavoidable — reduce it by averaging multiple measurements; it is different from a mistake (错误), which can be avoided.",
    "§1.2 运动的描述 (Describing motion): Motion and rest are relative (运动和静止是相对的) — you must choose a reference object (参照物). An object is moving if its position changes relative to the reference object. Example: passengers sitting in a moving train are at rest relative to the train but moving relative to the platform.",
    "§1.3 运动的快慢 (Speed): Speed (速度) measures how fast an object moves: v = s / t, SI unit metre per second (m/s); 1 m/s = 3.6 km/h. Uniform linear motion (匀速直线运动): speed stays constant along a straight line. Average speed (平均速度) = total distance ÷ total time. A car at 72 km/h travels 20 m every second.",
    "§1.4 速度的测量 (Measuring speed): Use a ruler + stopwatch to measure the average speed of a小车 on a斜面 (sloping track): v = s/t. The小车 speeds up as it goes down — the average speed over the whole track is between the speeds at the top and bottom.",
  ],
  practice: [
    {
      q: "In daily life, people sometimes use body parts to estimate length. When an adult spreads both arms horizontally, the distance between the fingertips of the two hands is called \"1 tuǒ\". Which of the following best describes the length of \"1 tuǒ\"?",
      options: ["A. 17 mm", "B. 17 cm", "C. 17 dm", "D. 17 m"],
      dia: {type: "description", text: "A person with arms spread horizontally, labeled '1 tuǒ' between fingertips."},
      ansIdx: 2,
      sol: "1 tuǒ (成年人两臂左右平伸时，两手中指尖之间的距离) ≈ arm span of an adult ≈ 1.5–1.8 m. Among the options: 17 dm = 1.7 m ✓; 17 mm = 0.017 m (too small); 17 cm = 0.17 m (too small); 17 m (too large). Answer: C."
    },
    {
      q: "During the process of riding a bicycle to school, Xiao Ming says he is at rest. Which of the following objects did Xiao Ming most likely choose as his reference frame?",
      options: ["A. The ground", "B. Trees by the road", "C. An oncoming vehicle", "D. The bicycle frame"],
      ansIdx: 3,
      sol: "If Xiao Ming says he is at rest, he must be choosing a reference frame that is moving together with him. The bicycle frame moves with Xiao Ming, so relative to the frame he is stationary. Ground, trees, and oncoming vehicles all move relative to him. Answer: D."
    },
    {
      q: "The figure shows the s-t graph of an object moving in a straight line. Which of the following statements is INCORRECT?",
      options: ["A. At t = 15 s, the object has traveled a distance of 30 m.", "B. The average speed of the object in 20 s is 2 m/s.", "C. The object moves with constant speed throughout the entire 20 s.", "D. The object's speed during 0–5 s is greater than its speed during 10–20 s."],
      dia: {type: "s-t-graph", text: "s-t graph: 0–5s slanted up to 20m, 5–10s horizontal (at rest), 10–20s slanted up to 40m total."},
      ansIdx: 2,
      sol: "From the s-t graph: the object moves at constant speed from 0–5 s (20 m), is at rest from 5–10 s (horizontal line), then moves at a different constant speed from 10–20 s (20 m more, total 40 m). It does NOT move at constant speed throughout the 20 s — statement C is the INCORRECT statement (the question asks which is wrong). Answer: C."
    },
    {
      q: "A robot dog does one-way straight-line motion. It travels 10 m at constant speed in 0–5 s, stays still for 5–10 s, then travels another 20 m at constant speed in 10–15 s. Which statement about the robot dog's motion is correct?",
      options: ["A. The speed in 0–5 s is 5 m/s.", "B. The average speed in the first 10 s is 2 m/s.", "C. The speed in 0–5 s is less than the speed in 10–15 s.", "D. The average speed in 15 s is 3 m/s."],
      ansIdx: 2,
      sol: "Speed in 0–5 s = 10 m / 5 s = 2 m/s (A is wrong: says 5 m/s). Average speed in first 10 s = 10 m / 10 s = 1 m/s (B is wrong: says 2 m/s). Speed in 10–15 s = 20 m / 5 s = 4 m/s. Since 2 m/s < 4 m/s, C is CORRECT. Average speed in 15 s = 30 m / 15 s = 2 m/s (D is wrong: says 3 m/s). Answer: C."
    },
    {
      q: "Two objects M and N start from the same point at the same time and move to the right along a straight line. Their s–t graph is shown in the figure. Which statement is correct?",
      options: ["A. When they meet, both objects have traveled 100 m.", "B. Both objects move with constant speed from 0 to 40 s.", "C. The speed of object M is 10 m/s.", "D. The maximum distance between M and N before they meet is 400 m."],
      dia: {type: "s-t-graph", text: "s-t graph: M starts at s=0 and moves right; N starts at s=0 at t=0 but from t=0 is already at s=100 m and stays flat until t=10 s, then both move and meet at t=40 s at s=300 m."},
      ansIdx: 3,
      sol: "From the s-t graph: at t=0, M is at s=0 and N is at s=100 m, so the initial separation is 100 m. From t=0 to t=10 s, N is stationary while M moves forward. The maximum distance between M and N before they meet is 400 m (per the exam solution key). Answer: D."
    }
  ],
  quiz: [
    {
      q: "The figure shows the v–t graph of a car on a straight road. Which statement about the car's motion is correct?",
      options: ["A. The car's speed decreases from t = 2 s to t = 4 s.", "B. At t = 5 s, the car's speed is 30 m/s.", "C. The car travels 60 m between t = 5 s and t = 6 s.", "D. The car's average speed over the first 10 s is 3 m/s."],
      dia: {type: "v-t-graph", text: "v-t graph: from t=0 to t=2s sloping upward, t=2 to t=4s also sloping up (speed increasing), t=4 to t=6s constant at v=30 m/s, then decreasing."},
      ansIdx: 1,
      sol: "From the v-t graph: from t=2s to t=4s the graph slopes upward (speed increasing, not decreasing), so A is wrong. At t=5s the graph shows v=30 m/s, so B is CORRECT. Distance from t=5s to t=6s = v × Δt = 30 m/s × 1 s = 30 m (not 60 m, so C is wrong). For the first 10s, area under the v-t curve ≈ 55 m, so average speed ≈ 5.5 m/s (not 3 m/s, so D is wrong). Answer: B."
    },
    {
      q: "An object moves in a straight line. Its speed is 4 m/s for the first 5 s, then it is at rest for 5 s, then moves at 8 m/s for the next 10 s. What is the average speed of the object over the entire 20 s?",
      options: ["A. 4 m/s", "B. 5 m/s", "C. 6 m/s", "D. 8 m/s"],
      ansIdx: 1,
      sol: "Total distance = (4 m/s × 5 s) + (0 m/s × 5 s) + (8 m/s × 10 s) = 20 m + 0 m + 80 m = 100 m. Total time = 20 s. Average speed = 100 m / 20 s = 5 m/s. Answer: B."
    },
    {
      q: "Two cars A and B are on a straight road. Car A is 200 m ahead of Car B, and both are moving in the same direction. Car A travels at 15 m/s and Car B travels at 20 m/s. How long does it take for Car B to catch up with Car A?",
      options: ["A. 20 s", "B. 30 s", "C. 40 s", "D. 50 s"],
      ansIdx: 2,
      sol: "Relative speed = v_B − v_A = 20 m/s − 15 m/s = 5 m/s. Initial separation = 200 m. Time to catch up = distance / relative speed = 200 m / 5 m/s = 40 s. Answer: C."
    }
  ],
},

// ══════════════════════════════════════════════════════════
// 第二章 声现象（5节，第5节跨学科实践）
// ══════════════════════════════════════════════════════════
{
  id: "ch02",
  g: "8",
  gx: 2,
  title: "声现象",
  subtitle: "Sound Phenomena",
  term: 1,
  coverage: "p",
  think: "What makes sound? Why can astronauts on the Moon not talk to each other directly? Why do some sounds are high and some low, some loud and some soft? How do bats 'see' with sound?",
  videos: [],
  notes: [
    "§2.1 声音的产生与传播 (Production & propagation of sound): Sound is produced by vibration (振动) — a plucked string, a drum skin, your vocal cords. Sound needs a medium (介质) to travel: solids, liquids and gases all carry sound; a vacuum (真空) cannot. Sound speed: about 340 m/s in air (15°C), faster in water (~1500 m/s) and fastest in solids. Echo (回声) = reflected sound.",
    "§2.2 声音的特性 (Characteristics of sound): Pitch (音调) depends on frequency (频率) — high frequency = high pitch (单位 Hz). Loudness (响度) depends on amplitude (振幅) — bigger amplitude = louder; also distance from source. Timbre (音色) distinguishes different sources (same pitch & loudness, different instruments). Humans hear roughly 20 Hz – 20000 Hz; ultrasound > 20000 Hz, infrasound < 20 Hz.",
    "§2.3 声的利用 (Uses of sound): Sound carries information (信息) — echolocation in bats, B-ultrasound (B超) in medicine. Sound carries energy (能量) — ultrasonic cleaning, ultrasonic碎石 (breaking kidney stones). Sonar (声呐) measures ocean depth using echoes.",
    "§2.4 噪声的危害和控制 (Noise): Noise (噪声) = unwanted sound; measured in decibels (分贝, dB). 0 dB is the threshold of hearing; above 90 dB harms hearing. Control at three places: the source (声源处, e.g. muffler 消声器), in transmission (传播过程中, walls/trees), and at the receiver (人耳处, earplugs 耳塞).",
  ],
  practice: [],
  quiz: [],
},

// ══════════════════════════════════════════════════════════
// 第三章 物态变化（5节，第5节跨学科实践）
// ══════════════════════════════════════════════════════════
{
  id: "ch03",
  g: "8",
  gx: 3,
  title: "物态变化",
  subtitle: "Changes of State",
  term: 1,
  coverage: "p",
  think: "Why does ice melt when heated and water freeze when cooled? Where does the 'white steam' above boiling water come from — is it really steam? Why do wet clothes dry faster on a windy sunny day?",
  videos: [],
  notes: [
    "§3.1 温度 (Temperature): Temperature (温度) tells how hot or cold an object is. Celsius scale (摄氏温度): 0°C = freezing point of water, 100°C = boiling point of water (1 atm), divided into 100 equal parts. Thermometer (温度计): works by expansion of liquid (usually mercury or alcohol); read with eyes level to the liquid column. Clinical thermometer (体温计): range 35–42°C, has a narrow bend (缩口) so it can be read after removal; must be shaken before reuse.",
    "§3.2 熔化和凝固 (Melting & freezing): Melting (熔化) = solid → liquid, absorbs heat (吸热); freezing/solidifying (凝固) = liquid → solid, releases heat (放热). Crystals (晶体) have a fixed melting point (熔点) — e.g. ice 0°C, naphthalene 80.5°C; non-crystals (非晶体, e.g. wax, glass) soften gradually with no fixed melting point. During melting of a crystal, temperature stays at the melting point until fully melted.",
    "§3.3 汽化和液化 (Vaporization & liquefaction): Vaporization (汽化) = liquid → gas, absorbs heat. Two forms: evaporation (蒸发) happens at any temperature at the surface; boiling (沸腾) happens at the boiling point (沸点) throughout the liquid, needing continuous heat. Boiling point depends on pressure — lower pressure = lower boiling point (high mountain cooking). Liquefaction (液化) = gas → liquid, releases heat; ways: cooling (降温) and compressing (压缩体积, e.g. LPG 液化石油气).",
    "§3.4 升华和凝华 (Sublimation & deposition): Sublimation (升华) = solid → gas directly, absorbs heat — dry ice (干冰) 'smoke', iodine crystals, camphor balls shrinking. Deposition (凝华) = gas → solid directly, releases heat — frost (霜) and snowflakes in winter, 'hoar frost' on freezer walls. The 'white steam' over boiling water is tiny water droplets (液化), not gas.",
  ],
  practice: [],
  quiz: [],
},

// ══════════════════════════════════════════════════════════
// 第四章 光现象（5节）
// ══════════════════════════════════════════════════════════
{
  id: "ch04",
  g: "8",
  gx: 4,
  title: "光现象",
  subtitle: "Light Phenomena",
  term: 1,
  coverage: "p",
  think: "How does light travel — and how do we know? Why can you see your face in a mirror but not on a wall? Why does a straw look bent in a glass of water? Why is the sky blue and a rainbow colourful?",
  videos: [],
  notes: [
    "§4.1 光的直线传播 (Rectilinear propagation): Light travels in straight lines in the same medium (光在同种均匀介质中沿直线传播). Evidence: shadows (影子), solar eclipse, 小孔成像 (pinhole image — inverted). Light source (光源): sun, lamp, firefly — objects that emit light. Speed of light: c ≈ 3×10^8 m/s in vacuum, the fastest in the universe.",
    "§4.2 光的反射 (Reflection): Reflection law (光的反射定律): the reflected ray, incident ray and normal are in the same plane; angle of reflection = angle of incidence (反射角等于入射角). Types: specular reflection (镜面反射, smooth surface) and diffuse reflection (漫反射, rough surface) — both obey the law; we see most objects by diffuse reflection. Light path is reversible (光路可逆).",
    "§4.3 平面镜成像 (Plane-mirror images): A plane mirror forms a virtual image (虚像) that is the same size as the object, at the same distance behind the mirror, left-right reversed (左右相反). The image cannot be projected on a screen. Applications: mirrors, periscope (潜望镜, two mirrors at 45°).",
    "§4.4 光的折射 (Refraction): Refraction (折射): light bends when it passes obliquely from one transparent medium into another, because its speed changes. Air → water: ray bends toward the normal (折射角 < 入射角). Appearances: a straw looks bent, a pool looks shallower (池水变浅), the rising sun we see is already above the horizon. Total internal reflection (全反射) explains光纤 (optical fibre).",
    "§4.5 光的色散 (Dispersion): Newton's prism experiment: white light splits into red, orange, yellow, green, blue, indigo, violet (红橙黄绿蓝靛紫) — dispersion (色散). Rainbow is caused by dispersion in raindrops. The three primary colours of light (色光的三原色): red, green, blue — mixing them makes white. Invisible light: infrared (红外线, heat, remote controls) and ultraviolet (紫外线, sterilisation, makes fluorescent materials glow; too much harms skin).",
  ],
  practice: [],
  quiz: [],
},

// ══════════════════════════════════════════════════════════
// 第五章 透镜及其应用（5节，第5节跨学科实践）
// ══════════════════════════════════════════════════════════
{
  id: "ch05",
  g: "8",
  gx: 5,
  title: "透镜及其应用",
  subtitle: "Lenses and Their Applications",
  term: 1,
  coverage: "p",
  think: "Why does a magnifying glass magnify while glasses for short-sighted people make things smaller? How does a camera capture a sharp image on its sensor? Why do old people hold newspapers far away to read?",
  videos: [],
  notes: [
    "§5.1 透镜 (Lenses): Convex lens (凸透镜): thicker in the middle — converges light (会聚); it has two foci (焦点 F) and focal length (焦距 f). Concave lens (凹透镜): thinner in the middle — diverges light (发散); can only form virtual images. Lens maker: parallel rays through a convex lens meet at the focus.",
    "§5.2 生活中的透镜 (Lenses in life): Camera (照相机): object beyond 2f → real, inverted, reduced image on the sensor/film. Projector (投影仪): object between f and 2f → real, inverted, enlarged image. Magnifying glass (放大镜): object within f → virtual, upright, enlarged image. The camera and projector images are real (实像, can be projected); magnifying-glass image is virtual.",
    "§5.3 凸透镜成像的规律 (Convex-lens imaging rule): u > 2f: real, inverted, reduced, between f and 2f (camera). u = 2f: real, inverted, same size, at 2f. f < u < 2f: real, inverted, enlarged, beyond 2f (projector). u = f: no image (parallel rays). u < f: virtual, upright, enlarged, same side (magnifier). Summary: one focus divides real from virtual; two-focus point divides enlarged from reduced.",
    "§5.4 眼睛和眼镜 (The eye and glasses): The eye's lens (晶状体) focuses light onto the retina (视网膜) — like a camera; the ciliary muscle changes its curvature (调节). Short sight (近视): image forms in front of the retina — corrected with concave (diverging) lenses. Long sight (远视/presbyopia 老花眼): image forms behind the retina — corrected with convex (converging) lenses.",
  ],
  practice: [],
  quiz: [],
},

// ══════════════════════════════════════════════════════════
// 第六章 质量与密度（4节）
// ══════════════════════════════════════════════════════════
{
  id: "ch06",
  g: "8",
  gx: 6,
  title: "质量与密度",
  subtitle: "Mass and Density",
  term: 1,
  coverage: "p",
  think: "Why does a huge iron anchor feel so heavy while a big piece of wood floats? Is 1 kg of iron really 'heavier' than 1 kg of cotton? How can we tell whether a 'gold' ring is really gold without destroying it?",
  videos: [],
  notes: [
    "§6.1 质量 (Mass): Mass (质量) = the amount of matter in an object; it does NOT change with shape, state, or location (质量是物体的一种属性). SI unit: kilogram (kg); 1 t = 1000 kg, 1 kg = 1000 g, 1 g = 1000 mg. Measured with a balance (天平): put object on the left pan, weights on the right; read weights + rider (游码). Steps: 放平 (level), 归零 (zero the rider), 调平衡螺母 (balance the beam), 左物右码, 读数. A balance measures mass — it works on Earth or on the Moon (still balances), while a spring scale measures weight.",
    "§6.2 密度 (Density): Density (密度) = mass per unit volume: ρ = m/V. SI unit kg/m³; 1 g/cm³ = 1000 kg/m³. Density is a property of the material (同种物质密度相同) — it does not change with mass or volume, but changes with state & temperature (water → ice: density decreases because volume expands). Water: ρ = 1.0×10^3 kg/m³ = 1 g/cm³. ρ铁 = 7.9×10^3 kg/m³ means 1 m³ of iron has mass 7.9×10^3 kg.",
    "§6.3 测量液体和固体的密度 (Measuring density): Solid (regular shape): ruler → volume by formula, balance → mass, ρ = m/V. Solid (irregular, e.g. a stone): use a measuring cylinder (量筒) — water displacement (排水法): V = V₂ − V₁. Liquid (e.g. salt water): measure mass of beaker+liquid, pour part into the cylinder, re-weigh — the difference is the liquid's mass (avoid measuring the whole beaker's contents, which leaves liquid stuck to the wall 误差). Read the cylinder with eyes level to the bottom of the meniscus (凹液面).",
    "§6.4 密度的应用 (Uses of density): 1. Identify materials (鉴别物质): measure ρ and compare with the table. 2. Calculate mass: m = ρV (e.g. a huge monument whose volume is hard to measure directly — no, mass from volume). 3. Calculate volume: V = m/ρ (e.g. find the volume of a thin wire). 4. Practical: hollow or solid (空心/实心判断), alloy problems. Density explains why ice floats on water (ρ冰 < ρ水) and why oil floats on water.",
  ],
  practice: [],
  quiz: [],
},
];
