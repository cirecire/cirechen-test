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
      q: "Which of the following can represent a vector?",
      options: [
        "A line segment beginning at (0,0) and ending at (2,7)",
        "The length of the distance between the points (0,0) and (2,7)",
        "The length of the distance between the points (2,7) and (0,0)",
        "A line segment beginning at (2,7) and ending at (0,0)",
      ],
      ansIdx: "0,3",
      sol: "A vector has both magnitude and direction. A line segment with a specified start and end point (A: from (0,0) to (2,7); D: from (2,7) to (0,0)) has direction — it can represent a vector. The 'length of the distance' between two points (B and C) has magnitude but no direction, so it is a scalar. Answers: A and D.",
      multi: true,
      hint: "What makes something a vector, not a scalar? Does a 'distance' have direction? Does a 'line segment from point A to point B' have direction?",
      source: "KA recognizing-vectors Problem 1"
    },
    {
      q: "Which of the following can be modeled by a vector?",
      options: [
        "The length of the distance between the white ball and the black ball on a pool table",
        "The length of the distance between a table at a restaurant and the kitchen",
        "An order in a restaurant where four people ordered two items each",
        "The movement of an airplane",
      ],
      ansIdx: 3,
      sol: "A vector requires both magnitude and direction. The movement of an airplane (D) has a speed (magnitude) and a heading (direction), so it can be modeled as a vector. Pool ball distance, restaurant distance, and food orders all lack direction — they are scalars. Answer: D. (KA original, multi-select)",
      hint: "Which of these has both a size AND a direction? A distance between two objects? Or the movement of an airplane?",
      source: "KA recognizing-vectors Problem 2"
    },
    {
      q: "The figure shows the s-t graph of an object moving in a straight line. Which of the following statements is INCORRECT?",
      options: [
        "At t = 15 s, the object has traveled a distance of 30 m.",
        "The average speed of the object in 20 s is 2 m/s.",
        "The object moves with constant speed throughout the entire 20 s.",
        "The object's speed during 0–5 s is greater than its speed during 10–20 s.",
      ],
      dia: {type: "s-t-graph", text: "s-t graph: 0-5s slanted up to 20m, 5-10s horizontal (at rest), 10-20s slanted up to 40m total."},
      ansIdx: 2,
      sol: "From the s-t graph: the object moves at constant speed from 0-5 s (20 m), is at rest from 5-10 s (horizontal line), then moves at a different constant speed from 10-20 s (20 m more, total 40 m). It does NOT move at constant speed throughout the 20 s — statement C is the INCORRECT statement. Answer: C."
    },
    {
      q: "A car doing which of the following is accelerating?",
      options: [
        "Moving straight at a constant speed",
        "Speeding up",
        "Moving around a curve at a constant speed",
        "Slowing down",
      ],
      ansIdx: "1,2,3",
      sol: "Acceleration is any change in velocity (speed or direction). Speeding up (B), slowing down (D), and turning at constant speed (C) all involve a change in velocity. Moving straight at constant speed (A) has no change in speed or direction, so no acceleration. Answers: B, C, and D.",
      multi: true,
      hint: "Acceleration means changing velocity. Velocity = speed + direction. Which options involve changing speed, changing direction, or both?",
      source: "KA describing-motion Acceleration Q6"
    },
    {
      q: "Two objects M and N start from the same point at the same time and move to the right along a straight line. Their s-t graph is shown in the figure. Which statement is correct?",
      options: [
        "When they meet, both objects have traveled 100 m.",
        "Both objects move with constant speed from 0 to 40 s.",
        "The speed of object M is 10 m/s.",
        "The maximum distance between M and N before they meet is 400 m.",
      ],
      dia: {type: "s-t-graph", text: "s-t graph: M starts at s=0 and moves right; N starts at s=100 m and stays flat until t=10 s, then both move and meet at t=40 s at s=300 m."},
      ansIdx: 3,
      sol: "From the s-t graph: at t=0, M is at s=0 and N is at s=100 m, so the initial separation is 100 m. From t=0 to t=10 s, N is stationary while M moves forward. The maximum distance between M and N before they meet is 400 m (per the exam solution key). Answer: D."
    }
  ],
  quiz: [
    {
      q: "The figure shows the v-t graph of a car on a straight road. Which statement about the car's motion is correct?",
      options: [
        "The car's speed decreases from t = 2 s to t = 4 s.",
        "At t = 5 s, the car's speed is 30 m/s.",
        "The car travels 60 m between t = 5 s and t = 6 s.",
        "The car's average speed over the first 10 s is 3 m/s.",
      ],
      dia: {type: "v-t-graph", text: "v-t graph: from t=0 to t=2s sloping upward, t=2 to t=4s also sloping up (speed increasing), t=4 to t=6s constant at v=30 m/s, then decreasing."},
      ansIdx: 1,
      sol: "From the v-t graph: from t=2s to t=4s the graph slopes upward (speed increasing, not decreasing), so A is wrong. At t=5s the graph shows v=30 m/s, so B is CORRECT. Distance from t=5s to t=6s = v x dt = 30 m/s x 1 s = 30 m (not 60 m, so C is wrong). For the first 10s, area under the v-t curve is about 55 m, so average speed is about 5.5 m/s (not 3 m/s, so D is wrong). Answer: B."
    },
    {
      q: "An object moves in a straight line. Its speed is 4 m/s for the first 5 s, then it is at rest for 5 s, then moves at 8 m/s for the next 10 s. What is the average speed of the object over the entire 20 s?",
      options: ["3 m/s", "5 m/s", "6 m/s", "8 m/s"],
      ansIdx: 1,
      sol: "Total distance = (4 m/s x 5 s) + (0 m/s x 5 s) + (8 m/s x 10 s) = 20 + 0 + 80 = 100 m. Total time = 20 s. Average speed = 100 m / 20 s = 5 m/s. Answer: B.",
      hint: "Average speed = total distance / total time. What is the total distance traveled in all three segments?",
    },
    {
      q: "Two cars A and B are on a straight road. Car A is 200 m ahead of Car B, and both are moving in the same direction. Car A travels at 15 m/s and Car B travels at 20 m/s. How long does it take for Car B to catch up with Car A?",
      options: ["20 s", "30 s", "40 s", "50 s"],
      ansIdx: 2,
      sol: "Relative speed = v_B - v_A = 20 m/s - 15 m/s = 5 m/s. Initial separation = 200 m. Time to catch up = 200 m / 5 m/s = 40 s. Answer: C.",
      hint: "In a chase problem, use relative speed (v_B - v_A). The distance to close is the initial gap of 200 m.",
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
  think: "What makes sound? Why can astronauts on the Moon not talk to each other directly? Why are some sounds high and some low, some loud and some soft? How do bats and doctors use sound?",
  subtopics: [
    { name: "§2.1 声音的产生与传播 · Production & Propagation", vids: [0, 2, 3], pq: [0] },
    { name: "§2.2 声音的特性 · Pitch, Loudness & Timbre",        vids: [1, 5],    pq: [1, 2] },
    { name: "§2.3 声的利用 · Uses of Sound",                      vids: [6],       pq: [3] },
    { name: "§2.4 噪声的危害和控制 · Noise",                      vids: [4],       pq: [4] },
  ],
  videos: [
    {yt: "nGKffdaI4Pg", t: "Production of sound", ka: "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/production-of-sound"},
    {yt: "-_xZZt99MzY", t: "Sound properties: amplitude, period, frequency, wavelength", ka: "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/sound-properties-amplitude-period-frequency-wavelength"},
    {yt: "UgE2GIQwUCw", t: "Speed of sound", ka: "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/speed-of-sound"},
    {yt: "yF4cvbAYjwI", t: "Relative speed of sound in solids, liquids, and gases", ka: "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/relative-speed-of-sound-in-solids-liquids-and-gases"},
    {yt: "_p-WyPg1sbU", t: "Decibel Scale", ka: "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/decibel-scale"},
    {yt: "46V8qqVRirk", t: "Why do sounds get softer?", ka: "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/why-do-sounds-get-softer"},
    {yt: "sTcqtljxLOk", t: "Ultrasound medical imaging", ka: "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/ultrasound-medical-imaging"}
  ],
  notes: [
    "§2.1 声音的产生与传播 (Production & propagation of sound): Sound is produced by vibration (振动) — a plucked string, a drum skin, your vocal cords. Sound needs a medium (介质) to travel: solids, liquids and gases all carry sound; a vacuum (真空) cannot. Sound speed: about 340 m/s in air (15°C), faster in water (~1500 m/s) and fastest in solids. Echo (回声) = reflected sound.",
    "§2.2 声音的特性 (Characteristics of sound): Pitch (音调) depends on frequency (频率) — high frequency = high pitch (单位 Hz). Loudness (响度) depends on amplitude (振幅) — bigger amplitude = louder; also distance from source. Timbre (音色) distinguishes different sources (same pitch & loudness, different instruments). Humans hear roughly 20 Hz – 20000 Hz; ultrasound > 20000 Hz, infrasound < 20 Hz.",
    "§2.3 声的利用 (Uses of sound): Sound carries information (信息) — echolocation in bats, B-ultrasound (B超) in medicine. Sound carries energy (能量) — ultrasonic cleaning, ultrasonic碎石 (breaking kidney stones). Sonar (声呐) measures ocean depth using echoes.",
    "§2.4 噪声的危害和控制 (Noise): Noise (噪声) = unwanted sound; measured in decibels (分贝, dB). 0 dB is the threshold of hearing; above 90 dB harms hearing. Control at three places: the source (声源处, e.g. muffler 消声器), in transmission (传播过程中, walls/trees), and at the receiver (人耳处, earplugs 耳塞).",
  ],
  practice: [
    {
      q: "In the poem 'The Child Fishing', a boy fishing by a river waves silently at a passerby instead of answering aloud, because he is afraid of scaring away the fish. From the physics of sound, which statement is CORRECT?",
      options: [
        "The speed of a sound wave does not change when it passes from air into water",
        "Sound can travel only in air, and cannot travel in water",
        "If the boy answered aloud, his voice could travel through the water and scare the fish away",
        "Sound travels faster in air than in water",
      ],
      ansIdx: 2,
      sol: "Fish hear sounds that travel through water, and the boy knows his voice would reach them. Sound CAN travel in water (B is wrong) and it travels FASTER in water than in air (A and D are wrong - entering water changes and increases its speed). So C is the CORRECT statement.",
      hint: "Can sound travel in water? Is sound faster in air or in water? Would the fish hear the boy's voice?",
      source: "21cnjy 23386951 Q2 (人教版八上 第二章 声现象)"
    },
    {
      q: "Eight identical glass bottles are filled with water to different heights, tuned so that striking them produces do-re-mi-fa-sol-la-ti-do. When you blow across the tops of the bottles instead, each gives a whistle-like tone. Which statement is CORRECT?",
      options: [
        "When struck, the sound is produced only by the vibration of the glass itself",
        "When struck, the sound is produced only by the vibration of the water column",
        "When blown, the whistle tone is produced by the vibration of the air column inside the bottle",
        "When blown, the whistle tone is produced by the vibration of the water column",
      ],
      ansIdx: 2,
      sol: "Striking a bottle makes the glass and the water it holds vibrate together (not 'only glass' and not 'only water', so A and B are wrong). Blowing across the top sets the AIR column inside the bottle vibrating - like blowing over the mouth of any bottle - so C is CORRECT, not D.",
      hint: "What is vibrating when you strike the bottle? What is vibrating when you blow across the opening - glass, water, or air?",
      source: "21cnjy 23386951 Q6 (人教版八上 第二章 声现象)"
    },
    {
      q: "Build a whistle: wrap some cotton on a chopstick, wet it, and push it into a plastic tube open at both ends, like a piston. Blow across the top of the tube while sliding the piston up and down. Sliding the piston changes the ______ of the sound.",
      options: [
        "Loudness (响度)",
        "Pitch (音调)",
        "Timbre (音色)",
        "All of the above",
      ],
      ansIdx: 1,
      sol: "Sliding the piston changes the length of the vibrating air column. A longer air column vibrates more slowly (lower frequency, lower pitch); a shorter one gives higher pitch. So B - the PITCH (音调) changes. Loudness would change only if you blew harder or softer; timbre depends on the tube material.",
      hint: "A longer air column vibrates faster or slower? Pitch depends on frequency - so what does sliding the piston change?",
      source: "21cnjy 23386951 Q15 (人教版八上 第二章 声现象)"
    },
    {
      q: "Which of the following does NOT obtain information by using sound?",
      options: [
        "An experienced beekeeper can tell from the buzzing whether the bees have collected nectar",
        "People tap a watermelon and listen to judge whether it is ripe",
        "While pouring boiled water into a thermos, you can tell from the sound how full it is",
        "Workers use ultrasonic waves to clean watch parts",
      ],
      ansIdx: 3,
      sol: "A, B and C all LISTEN to sound in order to learn something about an object (obtaining information). Ultrasonic cleaning (D) uses the ENERGY of sound waves to shake dirt off the parts - it does not obtain information. Answer: D. (Note the question asks for the one that does NOT use sound for information.)",
      hint: "Three options are about 'listening to tell/judge/know something' - that is obtaining information. Which one uses sound for something else?",
      source: "21cnjy 23386951 Q8 (人教版八上 第二章 声现象)"
    },
    {
      q: "In a factory, workers put soft pads and covers around noisy machines (给声源加垫或罩). This is done mainly to ______.",
      options: [
        "protect the safety of the workers",
        "reduce the noise while it is being transmitted",
        "reduce the noise at the sound source",
        "reduce the noise at the human ear",
      ],
      ansIdx: 2,
      sol: "The pads and covers are added directly ON the machine - that is, on the sound source itself - so the noise is reduced AT THE SOURCE (在声源处减弱噪声). Answer: C. Ear muffs would be 'at the ear' and sound barriers would be 'during transmission'.",
      hint: "Where are the pads placed - on the machine, along the path, or on the worker's ears?",
      source: "21cnjy 23386951 Q17 (人教版八上 第二章 声现象)"
    }
  ],
  quiz: [
    {
      q: "At a 100 m race, the timekeeper at the finish line starts the stopwatch when he HEARS the starting gun, and records 14.00 s for runner Li Ming. The air temperature is 15 degree C (speed of sound = 340 m/s). What is Li Ming's real time?",
      options: ["14.00 s", "14.15 s", "14.29 s", "13.71 s"],
      ansIdx: 2,
      sol: "The sound of the gun takes t = s / v = 100 m / 340 m/s about 0.29 s to travel from the start line to the finish line. The timekeeper therefore started the watch 0.29 s LATE, so the real time = 14.00 + 0.29 = 14.29 s. Answer: C.",
      hint: "Did the timekeeper start early or late? How long did the gun sound take to reach him over 100 m?",
      source: "21cnjy 23386951 Q10 (人教版八上 第二章 声现象)"
    },
    {
      q: "A ship uses sonar: it sends an ultrasonic pulse straight down to the seabed and receives the echo after 2 s. The speed of sound in seawater at 25 degree C is 1531 m/s. How deep is the sea at this spot?",
      options: ["765.5 m", "1531 m", "3062 m", "6124 m"],
      ansIdx: 1,
      sol: "The pulse travels DOWN and then BACK UP - a total distance of 2 x depth - in 2 s. So 2d = v x t = 1531 m/s x 2 s = 3062 m, which gives d = 1531 m. Answer: B. (Careful: the 2 s is the ROUND-TRIP time, so do not forget to divide by 2.)",
      hint: "In 2 s the sound goes down AND comes back. So the distance it covers is twice the depth.",
      source: "21cnjy 23386951 Q28 (人教版八上 第二章 声现象)"
    },
    {
      q: "Which statement about noise is WRONG?",
      options: [
        "0 dB means there is no sound at all",
        "A street is unusually quiet after a snowfall, because soft snow absorbs sound",
        "A silenced submachine gun is very quiet because measures are taken at the sound source",
        "Sound barriers along highways block the noise of passing cars",
      ],
      ansIdx: 0,
      sol: "0 dB is the threshold of hearing - the faintest sound a healthy human ear can just detect. It does NOT mean 'no sound' (sound of 0 dB still exists, so A is WRONG - and the question asks for the WRONG statement). B, C and D are all correct statements about absorbing, silencing and blocking noise.",
      hint: "0 dB is not silence - it is the faintest sound we can hear. Which option is the false statement?",
      source: "21cnjy 23386951 Q13 (人教版八上 第二章 声现象)"
    }
  ],
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
