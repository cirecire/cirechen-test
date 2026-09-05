var PHYSICS_DATA = [
  {
    "id": "ch01",
    "g": "8",
    "gx": 1,
    "title": "机械运动",
    "subtitle": "Mechanical Motion",
    "term": 1,
    "coverage": "p+ka",
    "think": "How do we measure length and time precisely? What does it mean to say an object is moving — moving relative to what? How do we compare how fast different objects move?",
    "subtopics": [
      {
        "name": "§1.1 长度和时间的测量 · Length & Time",
        "vids": [
          0,
          5
        ],
        "pq": [
          0
        ]
      },
      {
        "name": "§1.2 运动的描述 · Describing Motion",
        "vids": [
          3
        ],
        "pq": [
          1
        ]
      },
      {
        "name": "§1.3 运动的快慢 · Speed & Velocity",
        "vids": [
          1,
          2
        ],
        "pq": [
          2,
          3
        ]
      },
      {
        "name": "§1.4 速度的测量 · Measuring Speed",
        "vids": [
          4
        ],
        "pq": [
          4
        ]
      }
    ],
    "videos": [
      {
        "yt": "GtoamALPOP0",
        "t": "Position vs. time graphs",
        "ka": "https://www.khanacademy.org/science/physics/one-dimensional-motion/displacement-velocity-and-time/v/position-vs-time-graphs"
      },
      {
        "yt": "oRKxmXwLvUU",
        "t": "Calculating average velocity or speed",
        "ka": "https://www.khanacademy.org/science/physics/one-dimensional-motion/displacement-velocity-and-time/v/calculating-average-velocity-or-speed"
      },
      {
        "yt": "FOkQszg1-j8",
        "t": "Acceleration",
        "ka": "https://www.khanacademy.org/science/physics/one-dimensional-motion/acceleration/v/acceleration"
      },
      {
        "yt": "3yaZ7lkQPUQ",
        "t": "Introduction to reference frames",
        "ka": "https://www.khanacademy.org/science/physics/one-dimensional-motion/displacement-velocity-and-time/v/introduction-to-reference-frames"
      },
      {
        "yt": "fQt69_Q2CTw",
        "t": "Airbus A380 take-off distance",
        "ka": "https://www.khanacademy.org/science/physics/one-dimensional-motion/kinematic-formulas/v/airbus-a380-take-off-distance"
      },
      {
        "yt": "6Zwj7wjp7hQ",
        "t": "Intro to vectors and scalars",
        "ka": "https://www.khanacademy.org/science/physics/one-dimensional-motion/displacement-velocity-and-time/v/intro-to-vectors-and-scalars"
      }
    ],
    "notes": [
      "§1.1 长度和时间的测量 (Measuring length and time): The SI unit of length is the metre (m); 1 m = 100 cm = 1000 mm; 1 km = 1000 m. The ruler (刻度尺) is the basic tool — read to one decimal place beyond the smallest division (估读到分度值的下一位). Time: SI unit is the second (s); stopwatch (停表/秒表) reads minutes and seconds. Error (误差) is unavoidable — reduce it by averaging multiple measurements; it is different from a mistake (错误), which can be avoided.",
      "§1.2 运动的描述 (Describing motion): Motion and rest are relative (运动和静止是相对的) — you must choose a reference object (参照物). An object is moving if its position changes relative to the reference object. Example: passengers sitting in a moving train are at rest relative to the train but moving relative to the platform.",
      "§1.3 运动的快慢 (Speed): Speed (速度) measures how fast an object moves: v = s / t, SI unit metre per second (m/s); 1 m/s = 3.6 km/h. Uniform linear motion (匀速直线运动): speed stays constant along a straight line. Average speed (平均速度) = total distance ÷ total time. A car at 72 km/h travels 20 m every second.",
      "§1.4 速度的测量 (Measuring speed): Use a ruler + stopwatch to measure the average speed of a小车 on a斜面 (sloping track): v = s/t. The小车 speeds up as it goes down — the average speed over the whole track is between the speeds at the top and bottom."
    ],
    "practice": [
      {
        "q": "Which of the following can represent a vector?",
        "options": [
          "A line segment beginning at (0,0) and ending at (2,7)",
          "The length of the distance between the points (0,0) and (2,7)",
          "The length of the distance between the points (2,7) and (0,0)",
          "A line segment beginning at (2,7) and ending at (0,0)"
        ],
        "ansIdx": "0,3",
        "sol": "A vector has both magnitude and direction. A line segment with a specified start and end point (A: from (0,0) to (2,7); D: from (2,7) to (0,0)) has direction — it can represent a vector. The 'length of the distance' between two points (B and C) has magnitude but no direction, so it is a scalar. Answers: A and D.",
        "multi": true,
        "hint": "What makes something a vector, not a scalar? Does a 'distance' have direction? Does a 'line segment from point A to point B' have direction?",
        "source": "KA recognizing-vectors Problem 1"
      },
      {
        "q": "Which of the following can be modeled by a vector?",
        "options": [
          "The length of the distance between the white ball and the black ball on a pool table",
          "The length of the distance between a table at a restaurant and the kitchen",
          "An order in a restaurant where four people ordered two items each",
          "The movement of an airplane"
        ],
        "ansIdx": 3,
        "sol": "A vector requires both magnitude and direction. The movement of an airplane (D) has a speed (magnitude) and a heading (direction), so it can be modeled as a vector. Pool ball distance, restaurant distance, and food orders all lack direction — they are scalars. Answer: D. (KA original, multi-select)",
        "hint": "Which of these has both a size AND a direction? A distance between two objects? Or the movement of an airplane?",
        "source": "KA recognizing-vectors Problem 2"
      },
      {
        "q": "The figure shows the s-t graph of an object moving in a straight line. Which of the following statements is INCORRECT?",
        "options": [
          "At t = 15 s, the object has traveled a distance of 30 m.",
          "The average speed of the object in 20 s is 2 m/s.",
          "The object moves with constant speed throughout the entire 20 s.",
          "The object's speed during 0–5 s is greater than its speed during 10–20 s."
        ],
        "dia": {
          "type": "s-t-graph",
          "text": "s-t graph: 0-5s slanted up to 20m, 5-10s horizontal (at rest), 10-20s slanted up to 40m total."
        },
        "ansIdx": 2,
        "sol": "From the s-t graph: the object moves at constant speed from 0-5 s (20 m), is at rest from 5-10 s (horizontal line), then moves at a different constant speed from 10-20 s (20 m more, total 40 m). It does NOT move at constant speed throughout the 20 s — statement C is the INCORRECT statement. Answer: C."
      },
      {
        "q": "A car doing which of the following is accelerating?",
        "options": [
          "Moving straight at a constant speed",
          "Speeding up",
          "Moving around a curve at a constant speed",
          "Slowing down"
        ],
        "ansIdx": "1,2,3",
        "sol": "Acceleration is any change in velocity (speed or direction). Speeding up (B), slowing down (D), and turning at constant speed (C) all involve a change in velocity. Moving straight at constant speed (A) has no change in speed or direction, so no acceleration. Answers: B, C, and D.",
        "multi": true,
        "hint": "Acceleration means changing velocity. Velocity = speed + direction. Which options involve changing speed, changing direction, or both?",
        "source": "KA describing-motion Acceleration Q6"
      },
      {
        "q": "Two objects M and N start from the same point at the same time and move to the right along a straight line. Their s-t graph is shown in the figure. Which statement is correct?",
        "options": [
          "When they meet, both objects have traveled 100 m.",
          "Both objects move with constant speed from 0 to 40 s.",
          "The speed of object M is 10 m/s.",
          "The maximum distance between M and N before they meet is 400 m."
        ],
        "dia": {
          "type": "s-t-graph",
          "text": "s-t graph: M starts at s=0 and moves right; N starts at s=100 m and stays flat until t=10 s, then both move and meet at t=40 s at s=300 m."
        },
        "ansIdx": 3,
        "sol": "From the s-t graph: at t=0, M is at s=0 and N is at s=100 m, so the initial separation is 100 m. From t=0 to t=10 s, N is stationary while M moves forward. The maximum distance between M and N before they meet is 400 m (per the exam solution key). Answer: D."
      }
    ],
    "quiz": [
      {
        "q": "The figure shows the v-t graph of a car on a straight road. Which statement about the car's motion is correct?",
        "options": [
          "The car's speed decreases from t = 2 s to t = 4 s.",
          "At t = 5 s, the car's speed is 30 m/s.",
          "The car travels 60 m between t = 5 s and t = 6 s.",
          "The car's average speed over the first 10 s is 3 m/s."
        ],
        "dia": {
          "type": "v-t-graph",
          "text": "v-t graph: from t=0 to t=2s sloping upward, t=2 to t=4s also sloping up (speed increasing), t=4 to t=6s constant at v=30 m/s, then decreasing."
        },
        "ansIdx": 1,
        "sol": "From the v-t graph: from t=2s to t=4s the graph slopes upward (speed increasing, not decreasing), so A is wrong. At t=5s the graph shows v=30 m/s, so B is CORRECT. Distance from t=5s to t=6s = v x dt = 30 m/s x 1 s = 30 m (not 60 m, so C is wrong). For the first 10s, area under the v-t curve is about 55 m, so average speed is about 5.5 m/s (not 3 m/s, so D is wrong). Answer: B."
      },
      {
        "q": "An object moves in a straight line. Its speed is 4 m/s for the first 5 s, then it is at rest for 5 s, then moves at 8 m/s for the next 10 s. What is the average speed of the object over the entire 20 s?",
        "options": [
          "3 m/s",
          "5 m/s",
          "6 m/s",
          "8 m/s"
        ],
        "ansIdx": 1,
        "sol": "Total distance = (4 m/s x 5 s) + (0 m/s x 5 s) + (8 m/s x 10 s) = 20 + 0 + 80 = 100 m. Total time = 20 s. Average speed = 100 m / 20 s = 5 m/s. Answer: B.",
        "hint": "Average speed = total distance / total time. What is the total distance traveled in all three segments?"
      },
      {
        "q": "Two cars A and B are on a straight road. Car A is 200 m ahead of Car B, and both are moving in the same direction. Car A travels at 15 m/s and Car B travels at 20 m/s. How long does it take for Car B to catch up with Car A?",
        "options": [
          "20 s",
          "30 s",
          "40 s",
          "50 s"
        ],
        "ansIdx": 2,
        "sol": "Relative speed = v_B - v_A = 20 m/s - 15 m/s = 5 m/s. Initial separation = 200 m. Time to catch up = 200 m / 5 m/s = 40 s. Answer: C.",
        "hint": "In a chase problem, use relative speed (v_B - v_A). The distance to close is the initial gap of 200 m."
      }
    ],
    "practice2": [
      {
        "q": "Which of the following can represent a vector?",
        "options": [
          "A line segment beginning at (0,0) and ending at (2,7)",
          "The length of the distance between the points (0,0) and (2,7)",
          "The length of the distance between the points (2,7) and (0,0)",
          "A line segment beginning at (2,7) and ending at (0,0)"
        ],
        "ansIdx": "0,3",
        "sol": "A vector has both magnitude and direction. A line segment with a specified start and end point (A: from (0,0) to (2,7); D: from (2,7) to (0,0)) has direction — it can represent a vector. The 'length of the distance' between two points (B and C) has magnitude but no direction, so it is a scalar. Answers: A and D.",
        "multi": true,
        "hint": "What makes something a vector, not a scalar? Does a 'distance' have direction? Does a 'line segment from point A to point B' have direction?",
        "source": "KA recognizing-vectors Problem 1"
      },
      {
        "q": "Which of the following can be modeled by a vector?",
        "options": [
          "The length of the distance between the white ball and the black ball on a pool table",
          "The length of the distance between a table at a restaurant and the kitchen",
          "An order in a restaurant where four people ordered two items each",
          "The movement of an airplane"
        ],
        "ansIdx": 3,
        "sol": "A vector requires both magnitude and direction. The movement of an airplane (D) has a speed (magnitude) and a heading (direction), so it can be modeled as a vector. Pool ball distance, restaurant distance, and food orders all lack direction — they are scalars. Answer: D. (KA original, multi-select)",
        "hint": "Which of these has both a size AND a direction? A distance between two objects? Or the movement of an airplane?",
        "source": "KA recognizing-vectors Problem 2"
      },
      {
        "q": "The figure shows the s-t graph of an object moving in a straight line. Which of the following statements is INCORRECT?",
        "options": [
          "At t = 15 s, the object has traveled a distance of 30 m.",
          "The average speed of the object in 20 s is 2 m/s.",
          "The object moves with constant speed throughout the entire 20 s.",
          "The object's speed during 0–5 s is greater than its speed during 10–20 s."
        ],
        "dia": {
          "type": "s-t-graph",
          "text": "s-t graph: 0-5s slanted up to 20m, 5-10s horizontal (at rest), 10-20s slanted up to 40m total."
        },
        "ansIdx": 2,
        "sol": "From the s-t graph: the object moves at constant speed from 0-5 s (20 m), is at rest from 5-10 s (horizontal line), then moves at a different constant speed from 10-20 s (20 m more, total 40 m). It does NOT move at constant speed throughout the 20 s — statement C is the INCORRECT statement. Answer: C."
      },
      {
        "q": "A car doing which of the following is accelerating?",
        "options": [
          "Moving straight at a constant speed",
          "Speeding up",
          "Moving around a curve at a constant speed",
          "Slowing down"
        ],
        "ansIdx": "1,2,3",
        "sol": "Acceleration is any change in velocity (speed or direction). Speeding up (B), slowing down (D), and turning at constant speed (C) all involve a change in velocity. Moving straight at constant speed (A) has no change in speed or direction, so no acceleration. Answers: B, C, and D.",
        "multi": true,
        "hint": "Acceleration means changing velocity. Velocity = speed + direction. Which options involve changing speed, changing direction, or both?",
        "source": "KA describing-motion Acceleration Q6"
      },
      {
        "q": "Two objects M and N start from the same point at the same time and move to the right along a straight line. Their s-t graph is shown in the figure. Which statement is correct?",
        "options": [
          "When they meet, both objects have traveled 100 m.",
          "Both objects move with constant speed from 0 to 40 s.",
          "The speed of object M is 10 m/s.",
          "The maximum distance between M and N before they meet is 400 m."
        ],
        "dia": {
          "type": "s-t-graph",
          "text": "s-t graph: M starts at s=0 and moves right; N starts at s=100 m and stays flat until t=10 s, then both move and meet at t=40 s at s=300 m."
        },
        "ansIdx": 3,
        "sol": "From the s-t graph: at t=0, M is at s=0 and N is at s=100 m, so the initial separation is 100 m. From t=0 to t=10 s, N is stationary while M moves forward. The maximum distance between M and N before they meet is 400 m (per the exam solution key). Answer: D."
      }
    ],
    "quiz2": [
      {
        "q": "The figure shows the v-t graph of a car on a straight road. Which statement about the car's motion is correct?",
        "options": [
          "The car's speed decreases from t = 2 s to t = 4 s.",
          "At t = 5 s, the car's speed is 30 m/s.",
          "The car travels 60 m between t = 5 s and t = 6 s.",
          "The car's average speed over the first 10 s is 3 m/s."
        ],
        "dia": {
          "type": "v-t-graph",
          "text": "v-t graph: from t=0 to t=2s sloping upward, t=2 to t=4s also sloping up (speed increasing), t=4 to t=6s constant at v=30 m/s, then decreasing."
        },
        "ansIdx": 1,
        "sol": "From the v-t graph: from t=2s to t=4s the graph slopes upward (speed increasing, not decreasing), so A is wrong. At t=5s the graph shows v=30 m/s, so B is CORRECT. Distance from t=5s to t=6s = v x dt = 30 m/s x 1 s = 30 m (not 60 m, so C is wrong). For the first 10s, area under the v-t curve is about 55 m, so average speed is about 5.5 m/s (not 3 m/s, so D is wrong). Answer: B."
      },
      {
        "q": "An object moves in a straight line. Its speed is 4 m/s for the first 5 s, then it is at rest for 5 s, then moves at 8 m/s for the next 10 s. What is the average speed of the object over the entire 20 s?",
        "options": [
          "3 m/s",
          "5 m/s",
          "6 m/s",
          "8 m/s"
        ],
        "ansIdx": 1,
        "sol": "Total distance = (4 m/s x 5 s) + (0 m/s x 5 s) + (8 m/s x 10 s) = 20 + 0 + 80 = 100 m. Total time = 20 s. Average speed = 100 m / 20 s = 5 m/s. Answer: B.",
        "hint": "Average speed = total distance / total time. What is the total distance traveled in all three segments?"
      },
      {
        "q": "Two cars A and B are on a straight road. Car A is 200 m ahead of Car B, and both are moving in the same direction. Car A travels at 15 m/s and Car B travels at 20 m/s. How long does it take for Car B to catch up with Car A?",
        "options": [
          "20 s",
          "30 s",
          "40 s",
          "50 s"
        ],
        "ansIdx": 2,
        "sol": "Relative speed = v_B - v_A = 20 m/s - 15 m/s = 5 m/s. Initial separation = 200 m. Time to catch up = 200 m / 5 m/s = 40 s. Answer: C.",
        "hint": "In a chase problem, use relative speed (v_B - v_A). The distance to close is the initial gap of 200 m."
      }
    ]
  },
  {
    "id": "ch02",
    "g": "8",
    "gx": 2,
    "title": "声现象",
    "subtitle": "Sound Phenomena",
    "term": 1,
    "coverage": "p",
    "think": "What makes sound? Why can astronauts on the Moon not talk to each other directly? Why are some sounds high and some low, some loud and some soft? How do bats and doctors use sound?",
    "subtopics": [
      {
        "name": "§2.1 声音的产生与传播 · Production & Propagation",
        "vids": [
          0,
          2,
          3
        ],
        "pq": [
          0
        ]
      },
      {
        "name": "§2.2 声音的特性 · Pitch, Loudness & Timbre",
        "vids": [
          1,
          5
        ],
        "pq": [
          1,
          2
        ]
      },
      {
        "name": "§2.3 声的利用 · Uses of Sound",
        "vids": [
          6
        ],
        "pq": [
          3
        ]
      },
      {
        "name": "§2.4 噪声的危害和控制 · Noise",
        "vids": [
          4
        ],
        "pq": [
          4
        ]
      }
    ],
    "videos": [
      {
        "yt": "nGKffdaI4Pg",
        "t": "Production of sound",
        "ka": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/production-of-sound"
      },
      {
        "yt": "-_xZZt99MzY",
        "t": "Sound properties: amplitude, period, frequency, wavelength",
        "ka": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/sound-properties-amplitude-period-frequency-wavelength"
      },
      {
        "yt": "UgE2GIQwUCw",
        "t": "Speed of sound",
        "ka": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/speed-of-sound"
      },
      {
        "yt": "yF4cvbAYjwI",
        "t": "Relative speed of sound in solids, liquids, and gases",
        "ka": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/relative-speed-of-sound-in-solids-liquids-and-gases"
      },
      {
        "yt": "_p-WyPg1sbU",
        "t": "Decibel Scale",
        "ka": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/decibel-scale"
      },
      {
        "yt": "46V8qqVRirk",
        "t": "Why do sounds get softer?",
        "ka": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/why-do-sounds-get-softer"
      },
      {
        "yt": "sTcqtljxLOk",
        "t": "Ultrasound medical imaging",
        "ka": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/ultrasound-medical-imaging"
      }
    ],
    "notes": [
      "§2.1 声音的产生与传播 (Production & propagation of sound): Sound is produced by vibration (振动) — a plucked string, a drum skin, your vocal cords. Sound needs a medium (介质) to travel: solids, liquids and gases all carry sound; a vacuum (真空) cannot. Sound speed: about 340 m/s in air (15°C), faster in water (~1500 m/s) and fastest in solids. Echo (回声) = reflected sound.",
      "§2.2 声音的特性 (Characteristics of sound): Pitch (音调) depends on frequency (频率) — high frequency = high pitch (单位 Hz). Loudness (响度) depends on amplitude (振幅) — bigger amplitude = louder; also distance from source. Timbre (音色) distinguishes different sources (same pitch & loudness, different instruments). Humans hear roughly 20 Hz – 20000 Hz; ultrasound > 20000 Hz, infrasound < 20 Hz.",
      "§2.3 声的利用 (Uses of sound): Sound carries information (信息) — echolocation in bats, B-ultrasound (B超) in medicine. Sound carries energy (能量) — ultrasonic cleaning, ultrasonic碎石 (breaking kidney stones). Sonar (声呐) measures ocean depth using echoes.",
      "§2.4 噪声的危害和控制 (Noise): Noise (噪声) = unwanted sound; measured in decibels (分贝, dB). 0 dB is the threshold of hearing; above 90 dB harms hearing. Control at three places: the source (声源处, e.g. muffler 消声器), in transmission (传播过程中, walls/trees), and at the receiver (人耳处, earplugs 耳塞)."
    ],
    "practice": [
      {
        "q": "In the poem 'The Child Fishing', a boy fishing by a river waves silently at a passerby instead of answering aloud, because he is afraid of scaring away the fish. From the physics of sound, which statement is CORRECT?",
        "options": [
          "The speed of a sound wave does not change when it passes from air into water",
          "Sound can travel only in air, and cannot travel in water",
          "If the boy answered aloud, his voice could travel through the water and scare the fish away",
          "Sound travels faster in air than in water"
        ],
        "ansIdx": 2,
        "sol": "Fish hear sounds that travel through water, and the boy knows his voice would reach them. Sound CAN travel in water (B is wrong) and it travels FASTER in water than in air (A and D are wrong - entering water changes and increases its speed). So C is the CORRECT statement.",
        "hint": "Can sound travel in water? Is sound faster in air or in water? Would the fish hear the boy's voice?",
        "source": "21cnjy 23386951 Q2 (人教版八上 第二章 声现象)"
      },
      {
        "q": "Eight identical glass bottles are filled with water to different heights, tuned so that striking them produces do-re-mi-fa-sol-la-ti-do. When you blow across the tops of the bottles instead, each gives a whistle-like tone. Which statement is CORRECT?",
        "options": [
          "When struck, the sound is produced only by the vibration of the glass itself",
          "When struck, the sound is produced only by the vibration of the water column",
          "When blown, the whistle tone is produced by the vibration of the air column inside the bottle",
          "When blown, the whistle tone is produced by the vibration of the water column"
        ],
        "ansIdx": 2,
        "sol": "Striking a bottle makes the glass and the water it holds vibrate together (not 'only glass' and not 'only water', so A and B are wrong). Blowing across the top sets the AIR column inside the bottle vibrating - like blowing over the mouth of any bottle - so C is CORRECT, not D.",
        "hint": "What is vibrating when you strike the bottle? What is vibrating when you blow across the opening - glass, water, or air?",
        "source": "21cnjy 23386951 Q6 (人教版八上 第二章 声现象)"
      },
      {
        "q": "Build a whistle: wrap some cotton on a chopstick, wet it, and push it into a plastic tube open at both ends, like a piston. Blow across the top of the tube while sliding the piston up and down. Sliding the piston changes the ______ of the sound.",
        "options": [
          "Loudness (响度)",
          "Pitch (音调)",
          "Timbre (音色)",
          "All of the above"
        ],
        "ansIdx": 1,
        "sol": "Sliding the piston changes the length of the vibrating air column. A longer air column vibrates more slowly (lower frequency, lower pitch); a shorter one gives higher pitch. So B - the PITCH (音调) changes. Loudness would change only if you blew harder or softer; timbre depends on the tube material.",
        "hint": "A longer air column vibrates faster or slower? Pitch depends on frequency - so what does sliding the piston change?",
        "source": "21cnjy 23386951 Q15 (人教版八上 第二章 声现象)"
      },
      {
        "q": "Which of the following does NOT obtain information by using sound?",
        "options": [
          "An experienced beekeeper can tell from the buzzing whether the bees have collected nectar",
          "People tap a watermelon and listen to judge whether it is ripe",
          "While pouring boiled water into a thermos, you can tell from the sound how full it is",
          "Workers use ultrasonic waves to clean watch parts"
        ],
        "ansIdx": 3,
        "sol": "A, B and C all LISTEN to sound in order to learn something about an object (obtaining information). Ultrasonic cleaning (D) uses the ENERGY of sound waves to shake dirt off the parts - it does not obtain information. Answer: D. (Note the question asks for the one that does NOT use sound for information.)",
        "hint": "Three options are about 'listening to tell/judge/know something' - that is obtaining information. Which one uses sound for something else?",
        "source": "21cnjy 23386951 Q8 (人教版八上 第二章 声现象)"
      },
      {
        "q": "In a factory, workers put soft pads and covers around noisy machines (给声源加垫或罩). This is done mainly to ______.",
        "options": [
          "protect the safety of the workers",
          "reduce the noise while it is being transmitted",
          "reduce the noise at the sound source",
          "reduce the noise at the human ear"
        ],
        "ansIdx": 2,
        "sol": "The pads and covers are added directly ON the machine - that is, on the sound source itself - so the noise is reduced AT THE SOURCE (在声源处减弱噪声). Answer: C. Ear muffs would be 'at the ear' and sound barriers would be 'during transmission'.",
        "hint": "Where are the pads placed - on the machine, along the path, or on the worker's ears?",
        "source": "21cnjy 23386951 Q17 (人教版八上 第二章 声现象)"
      }
    ],
    "quiz": [
      {
        "q": "At a 100 m race, the timekeeper at the finish line starts the stopwatch when he HEARS the starting gun, and records 14.00 s for runner Li Ming. The air temperature is 15 degree C (speed of sound = 340 m/s). What is Li Ming's real time?",
        "options": [
          "14.00 s",
          "14.15 s",
          "14.29 s",
          "13.71 s"
        ],
        "ansIdx": 2,
        "sol": "The sound of the gun takes t = s / v = 100 m / 340 m/s about 0.29 s to travel from the start line to the finish line. The timekeeper therefore started the watch 0.29 s LATE, so the real time = 14.00 + 0.29 = 14.29 s. Answer: C.",
        "hint": "Did the timekeeper start early or late? How long did the gun sound take to reach him over 100 m?",
        "source": "21cnjy 23386951 Q10 (人教版八上 第二章 声现象)"
      },
      {
        "q": "A ship uses sonar: it sends an ultrasonic pulse straight down to the seabed and receives the echo after 2 s. The speed of sound in seawater at 25 degree C is 1531 m/s. How deep is the sea at this spot?",
        "options": [
          "765.5 m",
          "1531 m",
          "3062 m",
          "6124 m"
        ],
        "ansIdx": 1,
        "sol": "The pulse travels DOWN and then BACK UP - a total distance of 2 x depth - in 2 s. So 2d = v x t = 1531 m/s x 2 s = 3062 m, which gives d = 1531 m. Answer: B. (Careful: the 2 s is the ROUND-TRIP time, so do not forget to divide by 2.)",
        "hint": "In 2 s the sound goes down AND comes back. So the distance it covers is twice the depth.",
        "source": "21cnjy 23386951 Q28 (人教版八上 第二章 声现象)"
      },
      {
        "q": "Which statement about noise is WRONG?",
        "options": [
          "0 dB means there is no sound at all",
          "A street is unusually quiet after a snowfall, because soft snow absorbs sound",
          "A silenced submachine gun is very quiet because measures are taken at the sound source",
          "Sound barriers along highways block the noise of passing cars"
        ],
        "ansIdx": 0,
        "sol": "0 dB is the threshold of hearing - the faintest sound a healthy human ear can just detect. It does NOT mean 'no sound' (sound of 0 dB still exists, so A is WRONG - and the question asks for the WRONG statement). B, C and D are all correct statements about absorbing, silencing and blocking noise.",
        "hint": "0 dB is not silence - it is the faintest sound we can hear. Which option is the false statement?",
        "source": "21cnjy 23386951 Q13 (人教版八上 第二章 声现象)"
      }
    ],
    "practice2": [
      {
        "q": "In the poem 'The Child Fishing', a boy fishing by a river waves silently at a passerby instead of answering aloud, because he is afraid of scaring away the fish. From the physics of sound, which statement is CORRECT?",
        "options": [
          "The speed of a sound wave does not change when it passes from air into water",
          "Sound can travel only in air, and cannot travel in water",
          "If the boy answered aloud, his voice could travel through the water and scare the fish away",
          "Sound travels faster in air than in water"
        ],
        "ansIdx": 2,
        "sol": "Fish hear sounds that travel through water, and the boy knows his voice would reach them. Sound CAN travel in water (B is wrong) and it travels FASTER in water than in air (A and D are wrong - entering water changes and increases its speed). So C is the CORRECT statement.",
        "hint": "Can sound travel in water? Is sound faster in air or in water? Would the fish hear the boy's voice?",
        "source": "21cnjy 23386951 Q2 (人教版八上 第二章 声现象)"
      },
      {
        "q": "Eight identical glass bottles are filled with water to different heights, tuned so that striking them produces do-re-mi-fa-sol-la-ti-do. When you blow across the tops of the bottles instead, each gives a whistle-like tone. Which statement is CORRECT?",
        "options": [
          "When struck, the sound is produced only by the vibration of the glass itself",
          "When struck, the sound is produced only by the vibration of the water column",
          "When blown, the whistle tone is produced by the vibration of the air column inside the bottle",
          "When blown, the whistle tone is produced by the vibration of the water column"
        ],
        "ansIdx": 2,
        "sol": "Striking a bottle makes the glass and the water it holds vibrate together (not 'only glass' and not 'only water', so A and B are wrong). Blowing across the top sets the AIR column inside the bottle vibrating - like blowing over the mouth of any bottle - so C is CORRECT, not D.",
        "hint": "What is vibrating when you strike the bottle? What is vibrating when you blow across the opening - glass, water, or air?",
        "source": "21cnjy 23386951 Q6 (人教版八上 第二章 声现象)"
      },
      {
        "q": "Build a whistle: wrap some cotton on a chopstick, wet it, and push it into a plastic tube open at both ends, like a piston. Blow across the top of the tube while sliding the piston up and down. Sliding the piston changes the ______ of the sound.",
        "options": [
          "Loudness (响度)",
          "Pitch (音调)",
          "Timbre (音色)",
          "All of the above"
        ],
        "ansIdx": 1,
        "sol": "Sliding the piston changes the length of the vibrating air column. A longer air column vibrates more slowly (lower frequency, lower pitch); a shorter one gives higher pitch. So B - the PITCH (音调) changes. Loudness would change only if you blew harder or softer; timbre depends on the tube material.",
        "hint": "A longer air column vibrates faster or slower? Pitch depends on frequency - so what does sliding the piston change?",
        "source": "21cnjy 23386951 Q15 (人教版八上 第二章 声现象)"
      },
      {
        "q": "Which of the following does NOT obtain information by using sound?",
        "options": [
          "An experienced beekeeper can tell from the buzzing whether the bees have collected nectar",
          "People tap a watermelon and listen to judge whether it is ripe",
          "While pouring boiled water into a thermos, you can tell from the sound how full it is",
          "Workers use ultrasonic waves to clean watch parts"
        ],
        "ansIdx": 3,
        "sol": "A, B and C all LISTEN to sound in order to learn something about an object (obtaining information). Ultrasonic cleaning (D) uses the ENERGY of sound waves to shake dirt off the parts - it does not obtain information. Answer: D. (Note the question asks for the one that does NOT use sound for information.)",
        "hint": "Three options are about 'listening to tell/judge/know something' - that is obtaining information. Which one uses sound for something else?",
        "source": "21cnjy 23386951 Q8 (人教版八上 第二章 声现象)"
      },
      {
        "q": "In a factory, workers put soft pads and covers around noisy machines (给声源加垫或罩). This is done mainly to ______.",
        "options": [
          "protect the safety of the workers",
          "reduce the noise while it is being transmitted",
          "reduce the noise at the sound source",
          "reduce the noise at the human ear"
        ],
        "ansIdx": 2,
        "sol": "The pads and covers are added directly ON the machine - that is, on the sound source itself - so the noise is reduced AT THE SOURCE (在声源处减弱噪声). Answer: C. Ear muffs would be 'at the ear' and sound barriers would be 'during transmission'.",
        "hint": "Where are the pads placed - on the machine, along the path, or on the worker's ears?",
        "source": "21cnjy 23386951 Q17 (人教版八上 第二章 声现象)"
      }
    ],
    "quiz2": [
      {
        "q": "At a 100 m race, the timekeeper at the finish line starts the stopwatch when he HEARS the starting gun, and records 14.00 s for runner Li Ming. The air temperature is 15 degree C (speed of sound = 340 m/s). What is Li Ming's real time?",
        "options": [
          "14.00 s",
          "14.15 s",
          "14.29 s",
          "13.71 s"
        ],
        "ansIdx": 2,
        "sol": "The sound of the gun takes t = s / v = 100 m / 340 m/s about 0.29 s to travel from the start line to the finish line. The timekeeper therefore started the watch 0.29 s LATE, so the real time = 14.00 + 0.29 = 14.29 s. Answer: C.",
        "hint": "Did the timekeeper start early or late? How long did the gun sound take to reach him over 100 m?",
        "source": "21cnjy 23386951 Q10 (人教版八上 第二章 声现象)"
      },
      {
        "q": "A ship uses sonar: it sends an ultrasonic pulse straight down to the seabed and receives the echo after 2 s. The speed of sound in seawater at 25 degree C is 1531 m/s. How deep is the sea at this spot?",
        "options": [
          "765.5 m",
          "1531 m",
          "3062 m",
          "6124 m"
        ],
        "ansIdx": 1,
        "sol": "The pulse travels DOWN and then BACK UP - a total distance of 2 x depth - in 2 s. So 2d = v x t = 1531 m/s x 2 s = 3062 m, which gives d = 1531 m. Answer: B. (Careful: the 2 s is the ROUND-TRIP time, so do not forget to divide by 2.)",
        "hint": "In 2 s the sound goes down AND comes back. So the distance it covers is twice the depth.",
        "source": "21cnjy 23386951 Q28 (人教版八上 第二章 声现象)"
      },
      {
        "q": "Which statement about noise is WRONG?",
        "options": [
          "0 dB means there is no sound at all",
          "A street is unusually quiet after a snowfall, because soft snow absorbs sound",
          "A silenced submachine gun is very quiet because measures are taken at the sound source",
          "Sound barriers along highways block the noise of passing cars"
        ],
        "ansIdx": 0,
        "sol": "0 dB is the threshold of hearing - the faintest sound a healthy human ear can just detect. It does NOT mean 'no sound' (sound of 0 dB still exists, so A is WRONG - and the question asks for the WRONG statement). B, C and D are all correct statements about absorbing, silencing and blocking noise.",
        "hint": "0 dB is not silence - it is the faintest sound we can hear. Which option is the false statement?",
        "source": "21cnjy 23386951 Q13 (人教版八上 第二章 声现象)"
      }
    ]
  },
  {
    "id": "ch03",
    "g": "8",
    "gx": 3,
    "title": "物态变化",
    "subtitle": "Changes of State",
    "term": 1,
    "coverage": "p",
    "think": "Why does ice cream melt on a hot day, and why does a puddle disappear after the rain? What is 'temperature' really measuring? Why do we feel cold when alcohol on our skin evaporates, and why does dry ice 'smoke' without melting?",
    "subtopics": [
      {
        "name": "§3.1 温度 · Temperature & Thermometers",
        "vids": [
          0
        ],
        "pq": [
          0
        ]
      },
      {
        "name": "§3.2 熔化和凝固 · Melting & Freezing",
        "vids": [
          1,
          3
        ],
        "pq": [
          1,
          2
        ]
      },
      {
        "name": "§3.3 汽化和液化 · Vaporization & Liquefaction",
        "vids": [
          4
        ],
        "pq": [
          3
        ]
      },
      {
        "name": "§3.4 升华和凝华 · Sublimation & Deposition",
        "vids": [
          2,
          5
        ],
        "pq": [
          4
        ]
      }
    ],
    "videos": [
      {
        "yt": "pKvo0XWZtjo",
        "t": "States of matter",
        "ka": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/states-of-matter/v/states-of-matter"
      },
      {
        "yt": "zz4KbvF_X-0",
        "t": "Specific heat, heat of fusion and vaporization example",
        "ka": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/states-of-matter/v/specific-heat-heat-of-fusion-and-vaporization"
      },
      {
        "yt": "tvO0358YUYM",
        "t": "Change of state example",
        "ka": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/states-of-matter/v/change-of-state-example"
      },
      {
        "yt": "lsXcKgjg8Hs",
        "t": "Chilling water problem",
        "ka": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/states-of-matter/v/chilling-water-problem"
      },
      {
        "yt": "hA5jddDYcyg",
        "t": "Vapor pressure",
        "ka": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/states-of-matter/v/vapor-pressure"
      },
      {
        "yt": "Qp87Z4m8R-w",
        "t": "Phase diagrams",
        "ka": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/states-of-matter/v/phase-diagrams"
      }
    ],
    "notes": [
      "§3.1 温度 (Temperature): Temperature (温度) tells how hot or cold an object is. Celsius scale (摄氏温度): 0°C = freezing point of water, 100°C = boiling point of water (1 atm), divided into 100 equal parts. Thermometer (温度计): works by expansion of liquid (usually mercury or alcohol); read with eyes level to the liquid column. Clinical thermometer (体温计): range 35–42°C, has a narrow bend (缩口) so it can be read after removal; must be shaken before reuse.",
      "§3.2 熔化和凝固 (Melting & freezing): Melting (熔化) = solid → liquid, absorbs heat (吸热); freezing/solidifying (凝固) = liquid → solid, releases heat (放热). Crystals (晶体) have a fixed melting point (熔点) — e.g. ice 0°C, naphthalene 80.5°C; non-crystals (非晶体, e.g. wax, glass) soften gradually with no fixed melting point. During melting of a crystal, temperature stays at the melting point until fully melted.",
      "§3.3 汽化和液化 (Vaporization & liquefaction): Vaporization (汽化) = liquid → gas, absorbs heat. Two forms: evaporation (蒸发) happens at any temperature at the surface; boiling (沸腾) happens at the boiling point (沸点) throughout the liquid, needing continuous heat. Boiling point depends on pressure — lower pressure = lower boiling point (high mountain cooking). Liquefaction (液化) = gas → liquid, releases heat; ways: cooling (降温) and compressing (压缩体积, e.g. LPG 液化石油气).",
      "§3.4 升华和凝华 (Sublimation & deposition): Sublimation (升华) = solid → gas directly, absorbs heat — dry ice (干冰) 'smoke', iodine crystals, camphor balls shrinking. Deposition (凝华) = gas → solid directly, releases heat — frost (霜) and snowflakes in winter, 'hoar frost' on freezer walls. The 'white steam' over boiling water is tiny water droplets (液化), not gas."
    ],
    "practice": [
      {
        "q": "Which estimate of temperature is the most reasonable?",
        "options": [
          "The average summer temperature in a hot city is 50 degree C",
          "The normal body temperature of a healthy person is 26 degree C",
          "The temperature inside a refrigerator's fridge compartment is about 5 degree C",
          "Water in a pressure cooker boils at 80 degree C"
        ],
        "ansIdx": 2,
        "sol": "A fridge compartment is kept at about 5 degree C (C is correct). 50 degree C average summer temperature is too high, normal body temperature is about 37 degree C (not 26), and water in a pressure cooker boils ABOVE 100 degree C because of the higher pressure (not 80).",
        "hint": "Normal body temperature is about 37 degree C. Water normally boils at 100 degree C, and a pressure cooker makes it boil even hotter.",
        "source": "21cnjy 20952910 Q1 (人教版八上 第三章 物态变化)"
      },
      {
        "q": "Which of the following is an example of FREEZING (solidification, 凝固)?",
        "options": [
          "Water drops turn into ice as they drip (滴水成冰)",
          "Water vapor in the air turns into frost on cold nights (气凝结霜)",
          "Snow and ice melt in the warm spring sun (冰雪消融)",
          "Thick fog slowly disappears in the morning (浓雾消散)"
        ],
        "ansIdx": 0,
        "sol": "Freezing is the change from LIQUID to SOLID. Water drops (liquid) turning into ice (solid) is freezing, so A. Frost is gas-to-solid (deposition/凝华, B); melting snow is solid-to-liquid (C); fog disappearing is liquid-to-gas (evaporation, D).",
        "hint": "Freezing = liquid to solid. Which one starts as a liquid and ends as a solid?",
        "source": "21cnjy 23584969 Q3 (人教版八上 第三章 物态变化 考点练习)"
      },
      {
        "q": "The melting point of the crystal naphthalene (海波) is 48 degree C. At exactly 48 degree C, the naphthalene could be ______.",
        "options": [
          "solid only",
          "liquid only",
          "a mix of solid and liquid",
          "solid, liquid, or a mix of solid and liquid - all are possible"
        ],
        "ansIdx": 3,
        "sol": "During melting, a crystal stays at its melting point while heat is absorbed, so at 48 degree C it may be just about to melt (solid), just finished melting (liquid), or partway through (solid-liquid mix). All three are possible - D is correct.",
        "hint": "While a crystal is melting, its temperature stays fixed at the melting point the whole time. So what states can it be in at that temperature?",
        "source": "21cnjy 23570349 Q2 (人教版八上 第三章 物态变化 章末练习)"
      },
      {
        "q": "Which statement about everyday phenomena is WRONG?",
        "options": [
          "A pressure cooker cooks food faster because the high pressure inside makes water boil at a LOWER temperature",
          "After sweating, a fan makes you feel cooler because it speeds up evaporation",
          "In summer, a cold drink bottle taken from the fridge 'sweats' on the outside - this is liquefaction (液化)",
          "In winter in the south, little water drops on the window usually appear on the INNER side of the glass"
        ],
        "ansIdx": 0,
        "sol": "A pressure cooker raises the pressure, which RAISES the boiling point (e.g. to about 120 degree C), so food cooks faster. Saying the boiling point becomes LOWER is wrong - A is the WRONG statement. B, C and D are all correct.",
        "hint": "Higher pressure makes water boil at a higher or lower temperature?",
        "source": "21cnjy 23584969 Q8 (人教版八上 第三章 物态变化 考点练习)"
      },
      {
        "q": "In summer, dry ice (solid carbon dioxide) is put with fresh food during transport to keep it cold. This works because dry ice ______.",
        "options": [
          "melts and absorbs heat",
          "liquefies and absorbs heat",
          "sublimes and absorbs heat",
          "deposits and absorbs heat"
        ],
        "ansIdx": 2,
        "sol": "Dry ice goes directly from SOLID to GAS at ordinary pressure - that is sublimation (升华), and sublimation ABSORBS heat from the surroundings, cooling the food. So C is correct. (Melting/liquefying would need liquid CO2, and 'deposits' is gas-to-solid.)",
        "hint": "Does dry ice melt into a liquid, or go straight from solid to gas? Does that process absorb or release heat?",
        "source": "21cnjy 23584969 Q12 (人教版八上 第三章 物态变化 考点练习)"
      }
    ],
    "quiz": [
      {
        "q": "A test tube of alcohol is placed in a beaker of water, and the water is heated until it boils and keeps boiling. (Boiling point: alcohol 78 degree C, water 100 degree C at standard pressure.) The alcohol in the test tube will ______.",
        "options": [
          "boil, because it reaches its boiling point and keeps absorbing heat",
          "not boil, because it can never reach its boiling point",
          "reach its boiling point but cannot boil",
          "freeze first because it absorbs too much heat"
        ],
        "ansIdx": 0,
        "sol": "The water bath stays at about 100 degree C, which is ABOVE alcohol's boiling point of 78 degree C. The alcohol heats up to 78 degree C and, since the bath is hotter, it keeps absorbing heat - so it boils. Answer: A.",
        "hint": "Can the alcohol reach 78 degree C in a 100 degree C water bath? Once at its boiling point, does it keep getting heat?",
        "source": "21cnjy 23584969 Q7 (人教版八上 第三章 物态变化 考点练习)"
      },
      {
        "q": "A sea of clouds (云海) is a famous view on mountain tops. The 'cloud' you see is actually ______.",
        "options": [
          "smoke coming out of the mountain",
          "water vapor that has frozen into small ice crystals",
          "water vapor evaporating from the mountain",
          "tiny water drops formed when water vapor meets cold air and liquefies"
        ],
        "ansIdx": 3,
        "sol": "Clouds and fog are made of TINY LIQUID WATER DROPS formed when invisible water vapor in the air cools down and liquefies (液化) around dust particles. So D is correct. Water vapor itself is invisible - the white cloud is the liquefied droplets.",
        "hint": "Is water vapor visible? When warm wet air rises and cools, what does the vapor turn into?",
        "source": "21cnjy 20935858 Q6 (人教版八上 第三章 物态变化)"
      },
      {
        "q": "In the movie The Battle at Lake Changjin, soldiers fighting at -30 degree C got frost (霜) on their eyebrows and beards. Which of the following forms in the SAME way as this frost?",
        "options": [
          "snow and ice melting in the sun (冰雪消融)",
          "rime ice (雾凇) on trees",
          "thick fog everywhere (大雾弥漫)",
          "a lake freezing over (湖水结冰)"
        ],
        "ansIdx": 1,
        "sol": "Frost on the soldiers' eyebrows forms when water vapor in the breath hits the freezing-cold surface and goes straight from GAS to SOLID - deposition/凝华. Tree rime (雾凇) forms the same way, so B. Melting is solid-to-liquid (A), fog is liquefaction (C), freezing lake water is liquid-to-solid (D).",
        "hint": "Frost = water vapor turns directly into ice. Which other phenomenon is also gas-to-solid?",
        "source": "21cnjy 23570349 Q3 (人教版八上 第三章 物态变化 章末练习)"
      }
    ],
    "practice2": [
      {
        "q": "Which estimate of temperature is the most reasonable?",
        "options": [
          "The average summer temperature in a hot city is 50 degree C",
          "The normal body temperature of a healthy person is 26 degree C",
          "The temperature inside a refrigerator's fridge compartment is about 5 degree C",
          "Water in a pressure cooker boils at 80 degree C"
        ],
        "ansIdx": 2,
        "sol": "A fridge compartment is kept at about 5 degree C (C is correct). 50 degree C average summer temperature is too high, normal body temperature is about 37 degree C (not 26), and water in a pressure cooker boils ABOVE 100 degree C because of the higher pressure (not 80).",
        "hint": "Normal body temperature is about 37 degree C. Water normally boils at 100 degree C, and a pressure cooker makes it boil even hotter.",
        "source": "21cnjy 20952910 Q1 (人教版八上 第三章 物态变化)"
      },
      {
        "q": "Which of the following is an example of FREEZING (solidification, 凝固)?",
        "options": [
          "Water drops turn into ice as they drip (滴水成冰)",
          "Water vapor in the air turns into frost on cold nights (气凝结霜)",
          "Snow and ice melt in the warm spring sun (冰雪消融)",
          "Thick fog slowly disappears in the morning (浓雾消散)"
        ],
        "ansIdx": 0,
        "sol": "Freezing is the change from LIQUID to SOLID. Water drops (liquid) turning into ice (solid) is freezing, so A. Frost is gas-to-solid (deposition/凝华, B); melting snow is solid-to-liquid (C); fog disappearing is liquid-to-gas (evaporation, D).",
        "hint": "Freezing = liquid to solid. Which one starts as a liquid and ends as a solid?",
        "source": "21cnjy 23584969 Q3 (人教版八上 第三章 物态变化 考点练习)"
      },
      {
        "q": "The melting point of the crystal naphthalene (海波) is 48 degree C. At exactly 48 degree C, the naphthalene could be ______.",
        "options": [
          "solid only",
          "liquid only",
          "a mix of solid and liquid",
          "solid, liquid, or a mix of solid and liquid - all are possible"
        ],
        "ansIdx": 3,
        "sol": "During melting, a crystal stays at its melting point while heat is absorbed, so at 48 degree C it may be just about to melt (solid), just finished melting (liquid), or partway through (solid-liquid mix). All three are possible - D is correct.",
        "hint": "While a crystal is melting, its temperature stays fixed at the melting point the whole time. So what states can it be in at that temperature?",
        "source": "21cnjy 23570349 Q2 (人教版八上 第三章 物态变化 章末练习)"
      },
      {
        "q": "Which statement about everyday phenomena is WRONG?",
        "options": [
          "A pressure cooker cooks food faster because the high pressure inside makes water boil at a LOWER temperature",
          "After sweating, a fan makes you feel cooler because it speeds up evaporation",
          "In summer, a cold drink bottle taken from the fridge 'sweats' on the outside - this is liquefaction (液化)",
          "In winter in the south, little water drops on the window usually appear on the INNER side of the glass"
        ],
        "ansIdx": 0,
        "sol": "A pressure cooker raises the pressure, which RAISES the boiling point (e.g. to about 120 degree C), so food cooks faster. Saying the boiling point becomes LOWER is wrong - A is the WRONG statement. B, C and D are all correct.",
        "hint": "Higher pressure makes water boil at a higher or lower temperature?",
        "source": "21cnjy 23584969 Q8 (人教版八上 第三章 物态变化 考点练习)"
      },
      {
        "q": "In summer, dry ice (solid carbon dioxide) is put with fresh food during transport to keep it cold. This works because dry ice ______.",
        "options": [
          "melts and absorbs heat",
          "liquefies and absorbs heat",
          "sublimes and absorbs heat",
          "deposits and absorbs heat"
        ],
        "ansIdx": 2,
        "sol": "Dry ice goes directly from SOLID to GAS at ordinary pressure - that is sublimation (升华), and sublimation ABSORBS heat from the surroundings, cooling the food. So C is correct. (Melting/liquefying would need liquid CO2, and 'deposits' is gas-to-solid.)",
        "hint": "Does dry ice melt into a liquid, or go straight from solid to gas? Does that process absorb or release heat?",
        "source": "21cnjy 23584969 Q12 (人教版八上 第三章 物态变化 考点练习)"
      }
    ],
    "quiz2": [
      {
        "q": "A test tube of alcohol is placed in a beaker of water, and the water is heated until it boils and keeps boiling. (Boiling point: alcohol 78 degree C, water 100 degree C at standard pressure.) The alcohol in the test tube will ______.",
        "options": [
          "boil, because it reaches its boiling point and keeps absorbing heat",
          "not boil, because it can never reach its boiling point",
          "reach its boiling point but cannot boil",
          "freeze first because it absorbs too much heat"
        ],
        "ansIdx": 0,
        "sol": "The water bath stays at about 100 degree C, which is ABOVE alcohol's boiling point of 78 degree C. The alcohol heats up to 78 degree C and, since the bath is hotter, it keeps absorbing heat - so it boils. Answer: A.",
        "hint": "Can the alcohol reach 78 degree C in a 100 degree C water bath? Once at its boiling point, does it keep getting heat?",
        "source": "21cnjy 23584969 Q7 (人教版八上 第三章 物态变化 考点练习)"
      },
      {
        "q": "A sea of clouds (云海) is a famous view on mountain tops. The 'cloud' you see is actually ______.",
        "options": [
          "smoke coming out of the mountain",
          "water vapor that has frozen into small ice crystals",
          "water vapor evaporating from the mountain",
          "tiny water drops formed when water vapor meets cold air and liquefies"
        ],
        "ansIdx": 3,
        "sol": "Clouds and fog are made of TINY LIQUID WATER DROPS formed when invisible water vapor in the air cools down and liquefies (液化) around dust particles. So D is correct. Water vapor itself is invisible - the white cloud is the liquefied droplets.",
        "hint": "Is water vapor visible? When warm wet air rises and cools, what does the vapor turn into?",
        "source": "21cnjy 20935858 Q6 (人教版八上 第三章 物态变化)"
      },
      {
        "q": "In the movie The Battle at Lake Changjin, soldiers fighting at -30 degree C got frost (霜) on their eyebrows and beards. Which of the following forms in the SAME way as this frost?",
        "options": [
          "snow and ice melting in the sun (冰雪消融)",
          "rime ice (雾凇) on trees",
          "thick fog everywhere (大雾弥漫)",
          "a lake freezing over (湖水结冰)"
        ],
        "ansIdx": 1,
        "sol": "Frost on the soldiers' eyebrows forms when water vapor in the breath hits the freezing-cold surface and goes straight from GAS to SOLID - deposition/凝华. Tree rime (雾凇) forms the same way, so B. Melting is solid-to-liquid (A), fog is liquefaction (C), freezing lake water is liquid-to-solid (D).",
        "hint": "Frost = water vapor turns directly into ice. Which other phenomenon is also gas-to-solid?",
        "source": "21cnjy 23570349 Q3 (人教版八上 第三章 物态变化 章末练习)"
      }
    ]
  },
  {
    "id": "ch04",
    "g": "8",
    "gx": 4,
    "title": "光现象",
    "subtitle": "Light Phenomena",
    "term": 1,
    "coverage": "p+ka",
    "think": "How does light travel — and how do we know? Why can you see your face in a mirror but not on a wall? Why does a straw look bent in a glass of water? Why is the sky blue and a rainbow colourful?",
    "subtopics": [
      {
        "name": "§4.1 光的直线传播 · Rectilinear Propagation",
        "vids": [],
        "pq": [
          0
        ]
      },
      {
        "name": "§4.2 光的反射 · Reflection",
        "vids": [
          0
        ],
        "pq": [
          1
        ]
      },
      {
        "name": "§4.3 平面镜成像 · Plane Mirror Images",
        "vids": [
          1,
          2
        ],
        "pq": [
          2
        ]
      },
      {
        "name": "§4.4 光的折射 · Refraction",
        "vids": [
          3
        ],
        "pq": [
          3
        ]
      },
      {
        "name": "§4.5 光的色散 · Dispersion",
        "vids": [
          4
        ],
        "pq": [
          4,
          5
        ]
      }
    ],
    "videos": [
      {
        "yt": "XR52dXLyz-M",
        "t": "Specular and diffuse reflection",
        "ka": "https://www.khanacademy.org/science/physics/geometric-optics/reflection-refraction/v/specular-and-diffuse-reflection-2"
      },
      {
        "yt": "nrOg85VPQgw",
        "t": "Virtual image",
        "ka": "https://www.khanacademy.org/science/physics/geometric-optics/reflection-refraction/v/virtual-image"
      },
      {
        "yt": "8X1AS9qD5AQ",
        "t": "Parabolic mirrors and real images",
        "ka": "https://www.khanacademy.org/science/physics/geometric-optics/reflection-refraction/v/parabolic-mirrors-and-real-images"
      },
      {
        "yt": "y55tzg_jW9I",
        "t": "Refraction and Snell's law",
        "ka": "https://www.khanacademy.org/science/physics/geometric-optics/reflection-refraction/v/refraction-and-snell-s-law"
      },
      {
        "yt": "LksVHUrn8CI",
        "t": "Dispersion",
        "ka": "https://www.khanacademy.org/science/physics/geometric-optics/reflection-refraction/v/dispersion"
      }
    ],
    "notes": [
      "§4.1 光的直线传播 (Rectilinear propagation): Light travels in straight lines in the same medium (光在同种均匀介质中沿直线传播). Evidence: shadows (影子), solar eclipse, 小孔成像 (pinhole image — inverted). Light source (光源): sun, lamp, firefly — objects that emit light. Speed of light: c ≈ 3×10^8 m/s in vacuum, the fastest in the universe.",
      "§4.2 光的反射 (Reflection): Reflection law (光的反射定律): the reflected ray, incident ray and normal are in the same plane; angle of reflection = angle of incidence (反射角等于入射角). Types: specular reflection (镜面反射, smooth surface) and diffuse reflection (漫反射, rough surface) — both obey the law; we see most objects by diffuse reflection. Light path is reversible (光路可逆).",
      "§4.3 平面镜成像 (Plane-mirror images): A plane mirror forms a virtual image (虚像) that is the same size as the object, at the same distance behind the mirror, left-right reversed (左右相反). The image cannot be projected on a screen. Applications: mirrors, periscope (潜望镜, two mirrors at 45°).",
      "§4.4 光的折射 (Refraction): Refraction (折射): light bends when it passes obliquely from one transparent medium into another, because its speed changes. Air → water: ray bends toward the normal (折射角 < 入射角). Appearances: a straw looks bent, a pool looks shallower (池水变浅), the rising sun we see is already above the horizon. Total internal reflection (全反射) explains光纤 (optical fibre).",
      "§4.5 光的色散 (Dispersion): Newton's prism experiment: white light splits into red, orange, yellow, green, blue, indigo, violet (红橙黄绿蓝靛紫) — dispersion (色散). Rainbow is caused by dispersion in raindrops. The three primary colours of light (色光的三原色): red, green, blue — mixing them makes white. Invisible light: infrared (红外线, heat, remote controls) and ultraviolet (紫外线, sterilisation, makes fluorescent materials glow; too much harms skin)."
    ],
    "practice": [
      {
        "q": "Which of the following phenomena is formed by light traveling in a straight line (光的直线传播)?",
        "options": [
          "An annular solar eclipse (日环食)",
          "Dispersion of white light by a prism",
          "Seeing a cat in a mirror",
          "Leaf veins magnified through a dewdrop"
        ],
        "ansIdx": 0,
        "sol": "A solar eclipse is a shadow: the Moon blocks the sunlight, which only happens because light travels in straight lines. Dispersion (B) is refraction, the cat in the mirror (C) is reflection, and the dewdrop (D) acts as a tiny lens — refraction.",
        "hint": "按步骤想：(1) 日环食的成因是什么——影子的形成需要光沿什么路径？(2) 棱镜分光、镜中猫、露珠放大分别属于反射还是折射？",
        "source": "公立校真题·2020山东潍坊中考(Q8)"
      },
      {
        "q": "About the reflection of light, which statement is correct?",
        "options": [
          "When the incident ray makes an angle of 20° with the mirror surface, the reflection angle is also 20°",
          "If the incident ray moves toward the normal, the reflected ray moves away from the mirror surface",
          "When the incident angle increases by 5°, the angle between the incident ray and the reflected ray increases by 5°",
          "Specular (mirror) reflection obeys the law of reflection, but diffuse reflection does not"
        ],
        "ansIdx": 1,
        "sol": "A: the angle with the MIRROR is 20°, so the incident angle with the normal is 90°−20°=70° — the reflection angle is 70°. C: both angles grow by 5°, so the angle BETWEEN the two rays grows by 10°. D: both specular and diffuse reflection obey the law. B: moving toward the normal makes both angles smaller, so the reflected ray hugs the normal — away from the mirror surface. Correct.",
        "hint": "反射角=入射角，都对着法线量；两线夹角=入射角+反射角。",
        "source": "公立校真题·2025浙江绍兴五校联考(Q7)"
      },
      {
        "q": "Images form by rectilinear propagation (直线传播), reflection or refraction. Which statement about the three cases is correct?  ① the image in a pinhole camera  ② the scene seen through a periscope (潜望镜)  ③ your face in a mirror",
        "options": [
          "② and ③ are virtual images",
          "② is formed by light traveling in a straight line",
          "① is formed by refraction",
          "①②③ are all formed by reflection"
        ],
        "ansIdx": 0,
        "sol": "① pinhole image: real image formed by rectilinear propagation. ② periscope and ③ mirror both use plane mirrors — reflection, and both images are virtual (cannot be caught on a screen). So A is correct.",
        "hint": "小孔成像成实像还是虚像？潜望镜、镜子里的像靠什么形成？",
        "source": "公立校真题·2025浙江绍兴月考(Q8)"
      },
      {
        "q": "Which of the following phenomena is NOT caused by the refraction of light (光的折射)?",
        "options": [
          "The bottom of a shallow pool looks even shallower (池水变浅)",
          "White clouds seem to drift inside the lake water",
          "A pencil standing in water looks broken (水中铅笔弯折)",
          "A dewdrop magnifies the words beneath it"
        ],
        "ansIdx": 1,
        "sol": "B is the reflection of clouds on the water surface (平面镜式倒影). A: light from the pool bottom bends leaving the water, so the bottom looks raised. C: the pencil's rays bend at the surface, so it looks bent. D: the dewdrop is a water lens — refraction.",
        "hint": "哪个现象是「水面当镜子」？那是反射；其余都是光从一种介质斜射入另一种介质时弯折。",
        "source": "公立校真题·人教版课时练(折射辨析)"
      },
      {
        "q": "Which of the following is caused by the dispersion (色散) of light?",
        "options": [
          "A mirage over the sea (海市蜃楼)",
          "A rainbow after rain (雨后彩虹)",
          "The reflection of a tower in a lake",
          "A solar eclipse"
        ],
        "ansIdx": 1,
        "sol": "A rainbow is sunlight entering raindrops, refracted and split into red→violet — dispersion of white light. A mirage is refraction by layers of air (no colour splitting); C is reflection; D is rectilinear propagation.",
        "hint": "彩虹的七种颜色从哪来？白光被小水珠「拆开」成七色光——这就是色散。",
        "source": "公立校真题·2011山东日照中考"
      },
      {
        "q": "The man below sees green palm leaves in front of him. Why does he see green leaves? Choose 1 answer:",
        "options": [
          "Only green light from the Sun shines on the leaves.",
          "The leaves emit their own green light.",
          "The leaves reflect a greater portion of green sunlight compared to other colors.",
          "The leaves absorb a greater portion of green sunlight compared to other colors."
        ],
        "ansIdx": 2,
        "sol": "Objects appear colored because they reflect that color and absorb the rest. Green leaves reflect green light (and absorb red/blue), so our eyes receive mostly green. They do not emit their own light (they are not sources). Answer: C.",
        "hint": "Are leaves a light source, or do they reflect sunlight? Which color do they send to your eyes?",
        "source": "KA electromagnetic-waves Behaviors of light Q2"
      }
    ],
    "quiz": [
      {
        "q": "Which phenomenon CANNOT be explained by the rectilinear propagation of light (光的直线传播)?",
        "options": [
          "Hand shadows (手影)",
          "Pinhole imaging (小孔成像)",
          "A solar eclipse (日食)",
          "The reflection of a tree in water (树的倒影)"
        ],
        "ansIdx": 3,
        "sol": "Shadows, pinhole images and eclipses are all shadow effects — they need light to travel in straight lines. The tree's reflection uses the water surface like a mirror — that is reflection, not straight-line travel.",
        "hint": "影子、小孔、日食都靠「光走直线」解释；水里的树影靠什么？",
        "source": "公立校真题·人教版第四章练习(现象归类)"
      },
      {
        "q": "A light ray strikes a plane mirror perpendicularly (垂直入射). Which statements are correct? Choose all that apply.",
        "options": [
          "The incident angle is 0°",
          "The reflection angle is 0°",
          "The incident angle is 90°",
          "If the mirror is turned through 10°, the reflected ray turns through 20°"
        ],
        "ansIdx": "0,1,3",
        "multi": true,
        "sol": "Perpendicular incidence means the ray is along the normal: both incident and reflection angles are 0° (A, B ✓; C ✗). Turning the mirror 10° turns the normal 10°, so the incident angle becomes 10° and the reflected ray shifts by 2 × 10° = 20° (D ✓).",
        "hint": "垂直入射时光线与法线重合，入射角是 0° 不是 90°；镜面转 θ，法线转 θ，反射光线转 2θ。",
        "source": "公立校真题·沪粤版同步练习(Q9)"
      },
      {
        "q": "Which statement about light phenomena is correct?",
        "options": [
          "Walking toward a plane mirror makes your image larger",
          "Hand shadows and pinhole images come from rectilinear propagation; a lakeside reflection also comes from rectilinear propagation",
          "Splitting white light with a prism shows that white light is made of many colours",
          "Light pollution from glass curtain walls is caused by diffuse reflection"
        ],
        "ansIdx": 2,
        "sol": "C: Newton's prism experiment — white light disperses into seven colours, proving it is compound light. A: a plane-mirror image is always the same size. B: the lakeside reflection is reflection, not straight-line travel. D: curtain walls are smooth — specular reflection (镜面反射) causes the glare.",
        "hint": "白光是不是单色光？三棱镜实验告诉你答案。",
        "source": "公立校真题·人教版第四章练习(色散综合)"
      }
    ],
    "practice2": [
      {
        "q": "Which of the following phenomena is formed by light traveling in a straight line (光的直线传播)?",
        "options": [
          "An annular solar eclipse (日环食)",
          "Dispersion of white light by a prism",
          "Seeing a cat in a mirror",
          "Leaf veins magnified through a dewdrop"
        ],
        "ansIdx": 0,
        "sol": "A solar eclipse is a shadow: the Moon blocks the sunlight, which only happens because light travels in straight lines. Dispersion (B) is refraction, the cat in the mirror (C) is reflection, and the dewdrop (D) acts as a tiny lens — refraction.",
        "hint": "按步骤想：(1) 日环食的成因是什么——影子的形成需要光沿什么路径？(2) 棱镜分光、镜中猫、露珠放大分别属于反射还是折射？",
        "source": "公立校真题·2020山东潍坊中考(Q8)"
      },
      {
        "q": "About the reflection of light, which statement is correct?",
        "options": [
          "When the incident ray makes an angle of 20° with the mirror surface, the reflection angle is also 20°",
          "If the incident ray moves toward the normal, the reflected ray moves away from the mirror surface",
          "When the incident angle increases by 5°, the angle between the incident ray and the reflected ray increases by 5°",
          "Specular (mirror) reflection obeys the law of reflection, but diffuse reflection does not"
        ],
        "ansIdx": 1,
        "sol": "A: the angle with the MIRROR is 20°, so the incident angle with the normal is 90°−20°=70° — the reflection angle is 70°. C: both angles grow by 5°, so the angle BETWEEN the two rays grows by 10°. D: both specular and diffuse reflection obey the law. B: moving toward the normal makes both angles smaller, so the reflected ray hugs the normal — away from the mirror surface. Correct.",
        "hint": "反射角=入射角，都对着法线量；两线夹角=入射角+反射角。",
        "source": "公立校真题·2025浙江绍兴五校联考(Q7)"
      },
      {
        "q": "Images form by rectilinear propagation (直线传播), reflection or refraction. Which statement about the three cases is correct?  ① the image in a pinhole camera  ② the scene seen through a periscope (潜望镜)  ③ your face in a mirror",
        "options": [
          "② and ③ are virtual images",
          "② is formed by light traveling in a straight line",
          "① is formed by refraction",
          "①②③ are all formed by reflection"
        ],
        "ansIdx": 0,
        "sol": "① pinhole image: real image formed by rectilinear propagation. ② periscope and ③ mirror both use plane mirrors — reflection, and both images are virtual (cannot be caught on a screen). So A is correct.",
        "hint": "小孔成像成实像还是虚像？潜望镜、镜子里的像靠什么形成？",
        "source": "公立校真题·2025浙江绍兴月考(Q8)"
      },
      {
        "q": "Which of the following phenomena is NOT caused by the refraction of light (光的折射)?",
        "options": [
          "The bottom of a shallow pool looks even shallower (池水变浅)",
          "White clouds seem to drift inside the lake water",
          "A pencil standing in water looks broken (水中铅笔弯折)",
          "A dewdrop magnifies the words beneath it"
        ],
        "ansIdx": 1,
        "sol": "B is the reflection of clouds on the water surface (平面镜式倒影). A: light from the pool bottom bends leaving the water, so the bottom looks raised. C: the pencil's rays bend at the surface, so it looks bent. D: the dewdrop is a water lens — refraction.",
        "hint": "哪个现象是「水面当镜子」？那是反射；其余都是光从一种介质斜射入另一种介质时弯折。",
        "source": "公立校真题·人教版课时练(折射辨析)"
      },
      {
        "q": "Which of the following is caused by the dispersion (色散) of light?",
        "options": [
          "A mirage over the sea (海市蜃楼)",
          "A rainbow after rain (雨后彩虹)",
          "The reflection of a tower in a lake",
          "A solar eclipse"
        ],
        "ansIdx": 1,
        "sol": "A rainbow is sunlight entering raindrops, refracted and split into red→violet — dispersion of white light. A mirage is refraction by layers of air (no colour splitting); C is reflection; D is rectilinear propagation.",
        "hint": "彩虹的七种颜色从哪来？白光被小水珠「拆开」成七色光——这就是色散。",
        "source": "公立校真题·2011山东日照中考"
      }
    ],
    "quiz2": [
      {
        "q": "Which phenomenon CANNOT be explained by the rectilinear propagation of light (光的直线传播)?",
        "options": [
          "Hand shadows (手影)",
          "Pinhole imaging (小孔成像)",
          "A solar eclipse (日食)",
          "The reflection of a tree in water (树的倒影)"
        ],
        "ansIdx": 3,
        "sol": "Shadows, pinhole images and eclipses are all shadow effects — they need light to travel in straight lines. The tree's reflection uses the water surface like a mirror — that is reflection, not straight-line travel.",
        "hint": "影子、小孔、日食都靠「光走直线」解释；水里的树影靠什么？",
        "source": "公立校真题·人教版第四章练习(现象归类)"
      },
      {
        "q": "A light ray strikes a plane mirror perpendicularly (垂直入射). Which statements are correct? Choose all that apply.",
        "options": [
          "The incident angle is 0°",
          "The reflection angle is 0°",
          "The incident angle is 90°",
          "If the mirror is turned through 10°, the reflected ray turns through 20°"
        ],
        "ansIdx": "0,1,3",
        "multi": true,
        "sol": "Perpendicular incidence means the ray is along the normal: both incident and reflection angles are 0° (A, B ✓; C ✗). Turning the mirror 10° turns the normal 10°, so the incident angle becomes 10° and the reflected ray shifts by 2 × 10° = 20° (D ✓).",
        "hint": "垂直入射时光线与法线重合，入射角是 0° 不是 90°；镜面转 θ，法线转 θ，反射光线转 2θ。",
        "source": "公立校真题·沪粤版同步练习(Q9)"
      },
      {
        "q": "Which statement about light phenomena is correct?",
        "options": [
          "Walking toward a plane mirror makes your image larger",
          "Hand shadows and pinhole images come from rectilinear propagation; a lakeside reflection also comes from rectilinear propagation",
          "Splitting white light with a prism shows that white light is made of many colours",
          "Light pollution from glass curtain walls is caused by diffuse reflection"
        ],
        "ansIdx": 2,
        "sol": "C: Newton's prism experiment — white light disperses into seven colours, proving it is compound light. A: a plane-mirror image is always the same size. B: the lakeside reflection is reflection, not straight-line travel. D: curtain walls are smooth — specular reflection (镜面反射) causes the glare.",
        "hint": "白光是不是单色光？三棱镜实验告诉你答案。",
        "source": "公立校真题·人教版第四章练习(色散综合)"
      }
    ]
  },
  {
    "id": "ch05",
    "g": "8",
    "gx": 5,
    "title": "透镜及其应用",
    "subtitle": "Lenses and Their Uses",
    "term": 1,
    "coverage": "p+ka",
    "think": "Why does a magnifying glass magnify while glasses for short-sighted people make things smaller? How does a camera capture a sharp image on its sensor? Why do old people hold newspapers far away to read?",
    "subtopics": [
      {
        "name": "§5.1 透镜 · Lenses",
        "vids": [
          0,
          1
        ],
        "pq": [
          0
        ]
      },
      {
        "name": "§5.2 生活中的透镜 · Lenses in Daily Life",
        "vids": [],
        "pq": [
          1
        ]
      },
      {
        "name": "§5.3 凸透镜成像的规律 · Imaging by a Convex Lens",
        "vids": [
          2
        ],
        "pq": [
          2,
          3
        ]
      },
      {
        "name": "§5.4 眼睛和眼镜 · The Eye & Glasses",
        "vids": [
          3
        ],
        "pq": [
          4,
          5
        ]
      }
    ],
    "videos": [
      {
        "yt": "K0sjZ5nqQ7g",
        "t": "Convex lenses",
        "ka": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/convex-lenses"
      },
      {
        "yt": "Vh70PyitQzo",
        "t": "Concave lenses",
        "ka": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/concave-lenses"
      },
      {
        "yt": "acQYX4nwhCk",
        "t": "Object image height and distance relationship",
        "ka": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/object-image-height-and-distance-relationship"
      },
      {
        "yt": "eji8zKa7H7s",
        "t": "Diopters, aberration, and the human eye",
        "ka": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/diopters-aberration-and-the-human-eye"
      }
    ],
    "notes": [
      "§5.1 透镜 (Lenses): Convex lens (凸透镜): thicker in the middle — converges light (会聚); it has two foci (焦点 F) and focal length (焦距 f). Concave lens (凹透镜): thinner in the middle — diverges light (发散); can only form virtual images. Lens maker: parallel rays through a convex lens meet at the focus.",
      "§5.2 生活中的透镜 (Lenses in life): Camera (照相机): object beyond 2f → real, inverted, reduced image on the sensor/film. Projector (投影仪): object between f and 2f → real, inverted, enlarged image. Magnifying glass (放大镜): object within f → virtual, upright, enlarged image. The camera and projector images are real (实像, can be projected); magnifying-glass image is virtual.",
      "§5.3 凸透镜成像的规律 (Convex-lens imaging rule): u > 2f: real, inverted, reduced, between f and 2f (camera). u = 2f: real, inverted, same size, at 2f. f < u < 2f: real, inverted, enlarged, beyond 2f (projector). u = f: no image (parallel rays). u < f: virtual, upright, enlarged, same side (magnifier). Summary: one focus divides real from virtual; two-focus point divides enlarged from reduced.",
      "§5.4 眼睛和眼镜 (The eye and glasses): The eye's lens (晶状体) focuses light onto the retina (视网膜) — like a camera; the ciliary muscle changes its curvature (调节). Short sight (近视): image forms in front of the retina — corrected with concave (diverging) lenses. Long sight (远视/presbyopia 老花眼): image forms behind the retina — corrected with convex (converging) lenses."
    ],
    "practice": [
      {
        "q": "About convex lenses (凸透镜), which statement is correct?",
        "options": [
          "A convex lens converges only parallel rays of light",
          "The distance between the two focal points is the focal length",
          "The shorter the focal length, the stronger the converging effect",
          "Any ray passing through a convex lens converges to a single point"
        ],
        "ansIdx": 2,
        "sol": "C: a smaller focal length means rays bend more sharply — stronger convergence. A: a convex lens has a converging effect on all rays, not just parallel ones. B: focal length is the distance from the focal point to the optical centre (焦点到光心), not between the two foci. D: only rays parallel to the principal axis pass through the focal point.",
        "hint": "焦距是焦点到哪儿的距离？会聚能力强弱看焦距大小还是厚薄？",
        "source": "公立校真题·2026中考考点突破(透镜概念)"
      },
      {
        "q": "A photographer takes a full-body photo of a student with a camera (照相机). To switch to a waist-up (half-body) photo while keeping it sharp, he should",
        "options": [
          "Move away from the student and pull the lens back",
          "Move away from the student and push the lens forward",
          "Move closer to the student and pull the lens back",
          "Move closer to the student and push the lens forward"
        ],
        "ansIdx": 3,
        "sol": "A bigger image needs a smaller object distance u (get closer) and a larger image distance v, so the lens moves forward (镜头前伸). Rule of thumb: 物近像远像变大 — object closer → image farther and bigger.",
        "hint": "想让人在照片里变大——物体离镜头该近还是远？像距随之变大还是变小？",
        "source": "公立校真题·凸透镜应用(照相机调焦)"
      },
      {
        "q": "A convex lens of focal length 10 cm (焦距10cm) is fixed at the 50-cm mark of an optical bench (光具座). A candle is placed at the 10-cm mark. What image forms on the screen?",
        "options": [
          "An upright, magnified, virtual image",
          "An inverted, reduced, real image",
          "An inverted, magnified, real image",
          "An upright, reduced, virtual image"
        ],
        "ansIdx": 1,
        "sol": "Object distance u = 50 − 10 = 40 cm = 4f, which is larger than 2f. Rule: u > 2f gives an inverted, reduced, real image (照相机原理) — the image falls between f and 2f on the other side.",
        "hint": "先算物距：蜡烛离透镜多远？40 cm 与 2f=20 cm 比，谁大？",
        "source": "公立校真题·2026中考考点突破(透镜成像)"
      },
      {
        "q": "A candle 20 cm from a convex lens gives an image exactly the same size as the candle on the screen. The candle is then moved to 15 cm from the lens. What does the screen now show?",
        "options": [
          "An inverted, reduced, real image",
          "An inverted, magnified, real image",
          "An upright, magnified, virtual image",
          "No image can be formed"
        ],
        "ansIdx": 1,
        "sol": "Same-size image means u = 2f, so f = 10 cm. Now u = 15 cm: f < u < 2f → an inverted, magnified, real image (投影仪原理). It is real, so a screen can still catch it (D wrong).",
        "hint": "等大像时物距等于 2f——先求出焦距；新物距 15 cm 落在哪个区间？",
        "source": "公立校真题·2026中考考点突破(Q11 改编)"
      },
      {
        "q": "About nearsightedness (近视眼) and farsightedness (远视眼), which statement is correct?",
        "options": [
          "In a nearsighted eye the image forms behind the retina, corrected with a convex lens",
          "In a farsighted eye the image forms behind the retina, corrected with a convex lens",
          "Nearsightedness should be corrected with a convex lens",
          "A farsighted eye has a lens that is too thick and bends light too strongly"
        ],
        "ansIdx": 1,
        "sol": "Farsighted eye: the crystalline lens is too thin/relaxed, so the image forms BEHIND the retina; a convex lens (凸透镜) adds convergence to pull the image forward onto the retina. Nearsighted: lens too thick, image in FRONT of retina, corrected by a concave lens (凹透镜).",
        "hint": "近视=晶状体太厚像靠前→凹透镜；远视=晶状体太薄像靠后→凸透镜。",
        "source": "公立校真题·眼睛与眼镜(近视远视)"
      },
      {
        "q": "What is the line joining the center of curvature of both surfaces of the lens called? Choose 1 answer:",
        "options": [
          "Optical center",
          "Radius of curvature",
          "Focal length",
          "Principal axis"
        ],
        "ansIdx": 3,
        "sol": "The principal axis is the straight line passing through the optical center and the centers of curvature of both lens surfaces. It is the reference line for ray diagrams. Answer: D.",
        "hint": "Which line goes through BOTH centers of curvature and the optical center?",
        "source": "KA kn-class-7 convex-and-concave-lenses"
      }
    ],
    "quiz": [
      {
        "q": "A clear plastic bottle filled with water stands on a sunny windowsill and focuses sunlight enough to start a fire. The water-filled bottle acts like",
        "options": [
          "A plane mirror that reflects light",
          "A concave lens that spreads light out",
          "A convex lens that converges light (凸透镜会聚)",
          "A pinhole that lets light pass in straight lines"
        ],
        "ansIdx": 2,
        "sol": "A cylindrical bottle of water is round like a convex lens: it refracts (折射) parallel sunlight toward a small point, where the energy concentrates and heats things up.",
        "hint": "瓶子的形状像哪种透镜？阳光被它怎样了——会聚还是发散？",
        "source": "公立校真题·人教版第五章练习(会聚引燃)"
      },
      {
        "q": "To use a convex lens of focal length 10 cm as a magnifying glass (放大镜), the object should be placed at a distance",
        "options": [
          "Greater than 20 cm",
          "Between 10 cm and 20 cm",
          "Less than 10 cm",
          "Exactly 20 cm"
        ],
        "ansIdx": 2,
        "sol": "A magnifying glass needs an upright, magnified, VIRTUAL image, which requires u < f. So the object must be within one focal length: less than 10 cm.",
        "hint": "放大镜成的是正立放大虚像——物距要小于还是大于焦距？",
        "source": "公立校真题·凸透镜应用规律(放大镜)"
      },
      {
        "q": "Grandpa sees distant things clearly but must hold his phone far away to read — nearby objects look blurry. His eye problem and its correction are",
        "options": [
          "Nearsightedness (近视眼); concave lens",
          "Nearsightedness; convex lens",
          "Farsightedness (远视眼/老花眼); convex lens",
          "Farsightedness; concave lens"
        ],
        "ansIdx": 2,
        "sol": "Seeing far but not near = farsightedness (presbyopia 老花眼): the image of a near object forms behind the retina, so a convex lens is used to add convergence (同 Q: 远视配凸透镜).",
        "hint": "看不清近处是哪种眼？远视眼用凸透镜还是凹透镜？",
        "source": "公立校真题·2026中考考点突破(远视矫正)"
      }
    ],
    "practice2": [
      {
        "q": "About convex lenses (凸透镜), which statement is correct?",
        "options": [
          "A convex lens converges only parallel rays of light",
          "The distance between the two focal points is the focal length",
          "The shorter the focal length, the stronger the converging effect",
          "Any ray passing through a convex lens converges to a single point"
        ],
        "ansIdx": 2,
        "sol": "C: a smaller focal length means rays bend more sharply — stronger convergence. A: a convex lens has a converging effect on all rays, not just parallel ones. B: focal length is the distance from the focal point to the optical centre (焦点到光心), not between the two foci. D: only rays parallel to the principal axis pass through the focal point.",
        "hint": "焦距是焦点到哪儿的距离？会聚能力强弱看焦距大小还是厚薄？",
        "source": "公立校真题·2026中考考点突破(透镜概念)"
      },
      {
        "q": "A photographer takes a full-body photo of a student with a camera (照相机). To switch to a waist-up (half-body) photo while keeping it sharp, he should",
        "options": [
          "Move away from the student and pull the lens back",
          "Move away from the student and push the lens forward",
          "Move closer to the student and pull the lens back",
          "Move closer to the student and push the lens forward"
        ],
        "ansIdx": 3,
        "sol": "A bigger image needs a smaller object distance u (get closer) and a larger image distance v, so the lens moves forward (镜头前伸). Rule of thumb: 物近像远像变大 — object closer → image farther and bigger.",
        "hint": "想让人在照片里变大——物体离镜头该近还是远？像距随之变大还是变小？",
        "source": "公立校真题·凸透镜应用(照相机调焦)"
      },
      {
        "q": "A convex lens of focal length 10 cm (焦距10cm) is fixed at the 50-cm mark of an optical bench (光具座). A candle is placed at the 10-cm mark. What image forms on the screen?",
        "options": [
          "An upright, magnified, virtual image",
          "An inverted, reduced, real image",
          "An inverted, magnified, real image",
          "An upright, reduced, virtual image"
        ],
        "ansIdx": 1,
        "sol": "Object distance u = 50 − 10 = 40 cm = 4f, which is larger than 2f. Rule: u > 2f gives an inverted, reduced, real image (照相机原理) — the image falls between f and 2f on the other side.",
        "hint": "先算物距：蜡烛离透镜多远？40 cm 与 2f=20 cm 比，谁大？",
        "source": "公立校真题·2026中考考点突破(透镜成像)"
      },
      {
        "q": "A candle 20 cm from a convex lens gives an image exactly the same size as the candle on the screen. The candle is then moved to 15 cm from the lens. What does the screen now show?",
        "options": [
          "An inverted, reduced, real image",
          "An inverted, magnified, real image",
          "An upright, magnified, virtual image",
          "No image can be formed"
        ],
        "ansIdx": 1,
        "sol": "Same-size image means u = 2f, so f = 10 cm. Now u = 15 cm: f < u < 2f → an inverted, magnified, real image (投影仪原理). It is real, so a screen can still catch it (D wrong).",
        "hint": "等大像时物距等于 2f——先求出焦距；新物距 15 cm 落在哪个区间？",
        "source": "公立校真题·2026中考考点突破(Q11 改编)"
      },
      {
        "q": "About nearsightedness (近视眼) and farsightedness (远视眼), which statement is correct?",
        "options": [
          "In a nearsighted eye the image forms behind the retina, corrected with a convex lens",
          "In a farsighted eye the image forms behind the retina, corrected with a convex lens",
          "Nearsightedness should be corrected with a convex lens",
          "A farsighted eye has a lens that is too thick and bends light too strongly"
        ],
        "ansIdx": 1,
        "sol": "Farsighted eye: the crystalline lens is too thin/relaxed, so the image forms BEHIND the retina; a convex lens (凸透镜) adds convergence to pull the image forward onto the retina. Nearsighted: lens too thick, image in FRONT of retina, corrected by a concave lens (凹透镜).",
        "hint": "近视=晶状体太厚像靠前→凹透镜；远视=晶状体太薄像靠后→凸透镜。",
        "source": "公立校真题·眼睛与眼镜(近视远视)"
      }
    ],
    "quiz2": [
      {
        "q": "A clear plastic bottle filled with water stands on a sunny windowsill and focuses sunlight enough to start a fire. The water-filled bottle acts like",
        "options": [
          "A plane mirror that reflects light",
          "A concave lens that spreads light out",
          "A convex lens that converges light (凸透镜会聚)",
          "A pinhole that lets light pass in straight lines"
        ],
        "ansIdx": 2,
        "sol": "A cylindrical bottle of water is round like a convex lens: it refracts (折射) parallel sunlight toward a small point, where the energy concentrates and heats things up.",
        "hint": "瓶子的形状像哪种透镜？阳光被它怎样了——会聚还是发散？",
        "source": "公立校真题·人教版第五章练习(会聚引燃)"
      },
      {
        "q": "To use a convex lens of focal length 10 cm as a magnifying glass (放大镜), the object should be placed at a distance",
        "options": [
          "Greater than 20 cm",
          "Between 10 cm and 20 cm",
          "Less than 10 cm",
          "Exactly 20 cm"
        ],
        "ansIdx": 2,
        "sol": "A magnifying glass needs an upright, magnified, VIRTUAL image, which requires u < f. So the object must be within one focal length: less than 10 cm.",
        "hint": "放大镜成的是正立放大虚像——物距要小于还是大于焦距？",
        "source": "公立校真题·凸透镜应用规律(放大镜)"
      },
      {
        "q": "Grandpa sees distant things clearly but must hold his phone far away to read — nearby objects look blurry. His eye problem and its correction are",
        "options": [
          "Nearsightedness (近视眼); concave lens",
          "Nearsightedness; convex lens",
          "Farsightedness (远视眼/老花眼); convex lens",
          "Farsightedness; concave lens"
        ],
        "ansIdx": 2,
        "sol": "Seeing far but not near = farsightedness (presbyopia 老花眼): the image of a near object forms behind the retina, so a convex lens is used to add convergence (同 Q: 远视配凸透镜).",
        "hint": "看不清近处是哪种眼？远视眼用凸透镜还是凹透镜？",
        "source": "公立校真题·2026中考考点突破(远视矫正)"
      }
    ]
  },
  {
    "id": "ch06",
    "g": "8",
    "gx": 6,
    "title": "质量与密度",
    "subtitle": "Mass and Density",
    "term": 1,
    "coverage": "p",
    "think": "Why does a huge iron anchor feel so heavy while a big piece of wood floats? Is 1 kg of iron really 'heavier' than 1 kg of cotton? How can we tell whether a 'gold' ring is really gold without destroying it?",
    "subtopics": [
      {
        "name": "§6.1 质量 · Mass",
        "vids": [
          0
        ],
        "pq": [
          0
        ]
      },
      {
        "name": "§6.2 密度 · Density",
        "vids": [
          1
        ],
        "pq": [
          1,
          2
        ]
      },
      {
        "name": "§6.3 测量物质的密度 · Measuring Density",
        "vids": [],
        "pq": [
          3
        ]
      },
      {
        "name": "§6.4 密度的应用 · Applications of Density",
        "vids": [
          2
        ],
        "pq": [
          4
        ]
      }
    ],
    "videos": [
      {
        "yt": "IuBoeDihLUc",
        "t": "Mass and weight clarification",
        "ka": "https://www.khanacademy.org/science/physics"
      },
      {
        "yt": "QoKiCWCsSCo",
        "t": "Volume density",
        "ka": "https://www.khanacademy.org/science/physics"
      },
      {
        "yt": "nVPrWz8Jfgo",
        "t": "Specific gravity",
        "ka": "https://www.khanacademy.org/science/physics"
      }
    ],
    "notes": [
      "§6.1 质量 (Mass): Mass (质量) = the amount of matter in an object; it does NOT change with shape, state, or location (质量是物体的一种属性). SI unit: kilogram (kg); 1 t = 1000 kg, 1 kg = 1000 g, 1 g = 1000 mg. Measured with a balance (天平): put object on the left pan, weights on the right; read weights + rider (游码). Steps: 放平 (level), 归零 (zero the rider), 调平衡螺母 (balance the beam), 左物右码, 读数. A balance measures mass — it works on Earth or on the Moon (still balances), while a spring scale measures weight.",
      "§6.2 密度 (Density): Density (密度) = mass per unit volume: ρ = m/V. SI unit kg/m³; 1 g/cm³ = 1000 kg/m³. Density is a property of the material (同种物质密度相同) — it does not change with mass or volume, but changes with state & temperature (water → ice: density decreases because volume expands). Water: ρ = 1.0×10^3 kg/m³ = 1 g/cm³. ρ铁 = 7.9×10^3 kg/m³ means 1 m³ of iron has mass 7.9×10^3 kg.",
      "§6.3 测量液体和固体的密度 (Measuring density): Solid (regular shape): ruler → volume by formula, balance → mass, ρ = m/V. Solid (irregular, e.g. a stone): use a measuring cylinder (量筒) — water displacement (排水法): V = V₂ − V₁. Liquid (e.g. salt water): measure mass of beaker+liquid, pour part into the cylinder, re-weigh — the difference is the liquid's mass (avoid measuring the whole beaker's contents, which leaves liquid stuck to the wall 误差). Read the cylinder with eyes level to the bottom of the meniscus (凹液面).",
      "§6.4 密度的应用 (Uses of density): 1. Identify materials (鉴别物质): measure ρ and compare with the table. 2. Calculate mass: m = ρV (e.g. a huge monument whose volume is hard to measure directly — no, mass from volume). 3. Calculate volume: V = m/ρ (e.g. find the volume of a thin wire). 4. Practical: hollow or solid (空心/实心判断), alloy problems. Density explains why ice floats on water (ρ冰 < ρ水) and why oil floats on water."
    ],
    "practice": [
      {
        "q": "About mass (质量), which statement is correct?",
        "options": [
          "An aluminium block carried from the equator to the South Pole has the same mass",
          "A plastic bottle keeps its mass after being cut into small pieces",
          "When ice melts into water, its mass increases",
          "When an aluminium block is filed down into a part, its mass does not change"
        ],
        "ansIdx": 0,
        "sol": "Mass measures how much matter an object contains. It does NOT depend on place, shape or state, but it DOES decrease when material is removed. A ✓ (position doesn't matter). B: cutting removes bits of plastic → less matter. C: melting is only a state change → mass stays the same. D: filing removes aluminium → mass decreases.",
        "hint": "质量是物体所含物质的多少——位置、形状、状态会改变它吗？削掉一部分呢？",
        "source": "公立校真题·人教版质量概念(Q1)"
      },
      {
        "q": "A lump of ice melts into water in a cup. Ignoring evaporation, which is correct? (ρice = 0.9 g/cm³, ρwater = 1 g/cm³)",
        "options": [
          "Mass becomes smaller and density stays the same",
          "Mass stays the same, volume stays the same, density becomes smaller",
          "Mass becomes smaller and density becomes smaller",
          "Mass stays the same, volume becomes smaller, density becomes larger"
        ],
        "ansIdx": 3,
        "sol": "Melting is a state change: no matter is lost, so mass stays the same. Water is denser than ice (1 > 0.9), and V = m/ρ, so the same mass occupies a smaller volume — density increases. D ✓.",
        "hint": "冰变水少了东西吗？ρ水 比 ρ冰 大还是小？V=m/ρ 会怎样变？",
        "source": "公立校真题·密度概念(冰熔水)"
      },
      {
        "q": "A plastic bottle holds at most 2 kg of water. How much cooking oil (密度 0.8 g/cm³) can it hold at most?",
        "options": [
          "2.0 kg",
          "2.5 kg",
          "1.6 kg",
          "Cannot be determined"
        ],
        "ansIdx": 2,
        "sol": "The bottle's volume is fixed: V = m水/ρ水 = 2000 g ÷ 1 g/cm³ = 2000 cm³. The same volume of oil: m = ρV = 0.8 × 2000 = 1600 g = 1.6 kg. C ✓.",
        "hint": "先求瓶子的容积（用水算），再用 m=ρV 装油。",
        "source": "公立校真题·密度计算(容器限容)"
      },
      {
        "q": "Using a balance, a graduated cylinder (量筒) and water, which tasks CAN be completed?  ① measure the density of milk  ② judge whether a gold ring is real gold  ③ measure the length of a copper wire  ④ test whether a copper ball is hollow  ⑤ count the number of identical pins",
        "options": [
          "① ② only",
          "① ② ④ only",
          "① ② ③ ④ ⑤",
          "① ② ④ ⑤"
        ],
        "ansIdx": 3,
        "sol": "Density ρ = m/V identifies materials: ① milk (ρ), ② gold ring (compare ρ with gold), ④ hollow ball (ρ smaller than solid copper), ⑤ pins: measure the volume of many pins together, divide, then get one pin's mass/volume. ③ needs the wire straightened and measured with a ruler — density can't give its length. So ①②④⑤ → D.",
        "hint": "密度能测出长度吗？数大头针——先测一把的总量再平均。",
        "source": "公立校真题·密度测量综合(Q6)"
      },
      {
        "q": "Which statement about the applications of density (密度的应用) is WRONG?",
        "options": [
          "In a fire people crawl low because hot gas has a smaller density and rises",
          "Farmers use brine to select seeds — plump seeds sink (盐水选种)",
          "Spacecraft shells use materials that are strong AND have a large density",
          "Foam movie props are light because foam has a small density"
        ],
        "ansIdx": 2,
        "sol": "C is wrong: a spacecraft must be light, so it uses strong materials with a SMALL density (低密度高强度). A: hot air rises (ρ smaller), so cool air stays near the floor. B: plump seeds are denser and sink in brine. D: small density → light for the same size.",
        "hint": "航天器要轻——材料该选密度大还是密度小？其余三项都正确吗？",
        "source": "公立校真题·密度应用(说理辨析)"
      }
    ],
    "quiz": [
      {
        "q": "While weighing an object on a balance (天平) that was already zeroed, the pointer leans to the LEFT of the centre. To finish the measurement you should",
        "options": [
          "Turn the nut on the right end of the beam outward",
          "Move the rider (游码) to the right",
          "Remove some weights from the right pan",
          "Turn the nut on the right end of the beam inward"
        ],
        "ansIdx": 1,
        "sol": "During weighing you must never touch the balance nuts (A, D — those are only for zeroing before measuring). Pointer left means the left (object) pan is heavier, so you add mass on the right: moving the rider right adds mass gradually. B ✓. Removing weights (C) makes it worse.",
        "hint": "称量过程中能拧平衡螺母吗？指针偏左说明哪边重？该怎么加质量？",
        "source": "公立校真题·托盘天平使用(Q13)"
      },
      {
        "q": "Which statement about mass and density is correct?",
        "options": [
          "1 kg of iron is heavier than 1 kg of cotton",
          "Racing bicycles use materials with high strength and high density",
          "When a substance changes state, both its mass and density stay the same",
          "When half of the oxygen in a sealed tank is used up, the density of the oxygen left is halved"
        ],
        "ansIdx": 3,
        "sol": "D: the tank volume stays the same but half the mass is gone, so ρ = m/V is halved. A: both are exactly 1 kg — same mass (same weight). B: bikes need light materials — high strength, LOW density. C: ice → water keeps mass but changes density.",
        "hint": "ρ=m/V：容器体积不变，质量减半，密度如何？1kg 铁和 1kg 棉花谁更重？",
        "source": "公立校真题·质量密度综合(概念辨析)"
      },
      {
        "q": "An oxygen tank of volume 10 dm³ is filled with oxygen at density 2.5 kg/m³. After 5 g of oxygen is used, the density of the oxygen remaining in the tank is",
        "options": [
          "2.5 kg/m³",
          "2.0 kg/m³",
          "1.5 kg/m³",
          "0.5 kg/m³"
        ],
        "ansIdx": 1,
        "sol": "Initial mass m₀ = ρV = 2.5 × 0.01 m³ = 0.025 kg = 25 g. After using 5 g, m = 20 g = 0.02 kg. The tank volume is still 0.01 m³ (gas fills the whole tank), so ρ = 0.02 ÷ 0.01 = 2.0 kg/m³. B ✓.",
        "hint": "注意气体永远充满容器——体积不变；先算原有质量，再算剩余质量。",
        "source": "公立校真题·气体密度计算(Q7)"
      }
    ],
    "practice2": [
      {
        "q": "About mass (质量), which statement is correct?",
        "options": [
          "An aluminium block carried from the equator to the South Pole has the same mass",
          "A plastic bottle keeps its mass after being cut into small pieces",
          "When ice melts into water, its mass increases",
          "When an aluminium block is filed down into a part, its mass does not change"
        ],
        "ansIdx": 0,
        "sol": "Mass measures how much matter an object contains. It does NOT depend on place, shape or state, but it DOES decrease when material is removed. A ✓ (position doesn't matter). B: cutting removes bits of plastic → less matter. C: melting is only a state change → mass stays the same. D: filing removes aluminium → mass decreases.",
        "hint": "质量是物体所含物质的多少——位置、形状、状态会改变它吗？削掉一部分呢？",
        "source": "公立校真题·人教版质量概念(Q1)"
      },
      {
        "q": "A lump of ice melts into water in a cup. Ignoring evaporation, which is correct? (ρice = 0.9 g/cm³, ρwater = 1 g/cm³)",
        "options": [
          "Mass becomes smaller and density stays the same",
          "Mass stays the same, volume stays the same, density becomes smaller",
          "Mass becomes smaller and density becomes smaller",
          "Mass stays the same, volume becomes smaller, density becomes larger"
        ],
        "ansIdx": 3,
        "sol": "Melting is a state change: no matter is lost, so mass stays the same. Water is denser than ice (1 > 0.9), and V = m/ρ, so the same mass occupies a smaller volume — density increases. D ✓.",
        "hint": "冰变水少了东西吗？ρ水 比 ρ冰 大还是小？V=m/ρ 会怎样变？",
        "source": "公立校真题·密度概念(冰熔水)"
      },
      {
        "q": "A plastic bottle holds at most 2 kg of water. How much cooking oil (密度 0.8 g/cm³) can it hold at most?",
        "options": [
          "2.0 kg",
          "2.5 kg",
          "1.6 kg",
          "Cannot be determined"
        ],
        "ansIdx": 2,
        "sol": "The bottle's volume is fixed: V = m水/ρ水 = 2000 g ÷ 1 g/cm³ = 2000 cm³. The same volume of oil: m = ρV = 0.8 × 2000 = 1600 g = 1.6 kg. C ✓.",
        "hint": "先求瓶子的容积（用水算），再用 m=ρV 装油。",
        "source": "公立校真题·密度计算(容器限容)"
      },
      {
        "q": "Using a balance, a graduated cylinder (量筒) and water, which tasks CAN be completed?  ① measure the density of milk  ② judge whether a gold ring is real gold  ③ measure the length of a copper wire  ④ test whether a copper ball is hollow  ⑤ count the number of identical pins",
        "options": [
          "① ② only",
          "① ② ④ only",
          "① ② ③ ④ ⑤",
          "① ② ④ ⑤"
        ],
        "ansIdx": 3,
        "sol": "Density ρ = m/V identifies materials: ① milk (ρ), ② gold ring (compare ρ with gold), ④ hollow ball (ρ smaller than solid copper), ⑤ pins: measure the volume of many pins together, divide, then get one pin's mass/volume. ③ needs the wire straightened and measured with a ruler — density can't give its length. So ①②④⑤ → D.",
        "hint": "密度能测出长度吗？数大头针——先测一把的总量再平均。",
        "source": "公立校真题·密度测量综合(Q6)"
      },
      {
        "q": "Which statement about the applications of density (密度的应用) is WRONG?",
        "options": [
          "In a fire people crawl low because hot gas has a smaller density and rises",
          "Farmers use brine to select seeds — plump seeds sink (盐水选种)",
          "Spacecraft shells use materials that are strong AND have a large density",
          "Foam movie props are light because foam has a small density"
        ],
        "ansIdx": 2,
        "sol": "C is wrong: a spacecraft must be light, so it uses strong materials with a SMALL density (低密度高强度). A: hot air rises (ρ smaller), so cool air stays near the floor. B: plump seeds are denser and sink in brine. D: small density → light for the same size.",
        "hint": "航天器要轻——材料该选密度大还是密度小？其余三项都正确吗？",
        "source": "公立校真题·密度应用(说理辨析)"
      }
    ],
    "quiz2": [
      {
        "q": "While weighing an object on a balance (天平) that was already zeroed, the pointer leans to the LEFT of the centre. To finish the measurement you should",
        "options": [
          "Turn the nut on the right end of the beam outward",
          "Move the rider (游码) to the right",
          "Remove some weights from the right pan",
          "Turn the nut on the right end of the beam inward"
        ],
        "ansIdx": 1,
        "sol": "During weighing you must never touch the balance nuts (A, D — those are only for zeroing before measuring). Pointer left means the left (object) pan is heavier, so you add mass on the right: moving the rider right adds mass gradually. B ✓. Removing weights (C) makes it worse.",
        "hint": "称量过程中能拧平衡螺母吗？指针偏左说明哪边重？该怎么加质量？",
        "source": "公立校真题·托盘天平使用(Q13)"
      },
      {
        "q": "Which statement about mass and density is correct?",
        "options": [
          "1 kg of iron is heavier than 1 kg of cotton",
          "Racing bicycles use materials with high strength and high density",
          "When a substance changes state, both its mass and density stay the same",
          "When half of the oxygen in a sealed tank is used up, the density of the oxygen left is halved"
        ],
        "ansIdx": 3,
        "sol": "D: the tank volume stays the same but half the mass is gone, so ρ = m/V is halved. A: both are exactly 1 kg — same mass (same weight). B: bikes need light materials — high strength, LOW density. C: ice → water keeps mass but changes density.",
        "hint": "ρ=m/V：容器体积不变，质量减半，密度如何？1kg 铁和 1kg 棉花谁更重？",
        "source": "公立校真题·质量密度综合(概念辨析)"
      },
      {
        "q": "An oxygen tank of volume 10 dm³ is filled with oxygen at density 2.5 kg/m³. After 5 g of oxygen is used, the density of the oxygen remaining in the tank is",
        "options": [
          "2.5 kg/m³",
          "2.0 kg/m³",
          "1.5 kg/m³",
          "0.5 kg/m³"
        ],
        "ansIdx": 1,
        "sol": "Initial mass m₀ = ρV = 2.5 × 0.01 m³ = 0.025 kg = 25 g. After using 5 g, m = 20 g = 0.02 kg. The tank volume is still 0.01 m³ (gas fills the whole tank), so ρ = 0.02 ÷ 0.01 = 2.0 kg/m³. B ✓.",
        "hint": "注意气体永远充满容器——体积不变；先算原有质量，再算剩余质量。",
        "source": "公立校真题·气体密度计算(Q7)"
      }
    ]
  }
];
