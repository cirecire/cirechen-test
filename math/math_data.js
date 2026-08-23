var MATH_DATA = [
  {
    "id": "ch01",
    "g": "8",
    "gx": 1,
    "title": "Pythagorean Theorem",
    "coverage": "g",
    "think": "A right triangle has legs 9 and 12. Guess the hypotenuse without using a calculator. How did you estimate?",
    "videos": [
      {
        "yt": "LrS5_l-gk94",
        "t": "Pythagorean Theorem Proof Using Similarity",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "In a right triangle: $a^2 + b^2 = c^2$, where $c$ is the hypotenuse (opposite the $90°$ angle).",
      "Find any side: $c = \\sqrt{a^2+b^2}$ or $a = \\sqrt{c^2-b^2}$.",
      "Pythagorean triples: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$.",
      "Converse: if $a^2 + b^2 = c^2$, the triangle is a right triangle.",
      "45-45-90: legs equal, hypotenuse $= \\text{leg} \\times \\sqrt{2}$.",
      "30-60-90: short leg $= x$, long leg $= x\\sqrt{3}$, hypotenuse $= 2x$."
    ],
    "practice": [
      {
        "q": "In $\\triangle ABC$, $\\angle C = 90°$, $AC = 8$ and $BC = 15$. Find $AB$.",
        "ans": "$17$",
        "sol": "$AB^2 = 8^2 + 15^2 = 64 + 225 = 289$, so $AB = \\sqrt{289} = 17$.",
        "dia": {
          "type": "triangle",
          "w": 15,
          "h": 8,
          "A": "A",
          "B": "B",
          "C": "C",
          "a": "15",
          "b": "8",
          "c": "?"
        }
      },
      {
        "q": "$\\triangle PQR$ has $PQ = 24$, $PR = 7$, and $QR = 25$. Is it a right triangle?",
        "ans": "Yes",
        "sol": "$7^2 + 24^2 = 49 + 576 = 625 = 25^2$. By the converse of the Pythagorean theorem, yes."
      },
      {
        "q": "In a 45-45-90 triangle, each leg is 6 cm. What is the hypotenuse?",
        "ans": "$6\\sqrt{2}$ cm",
        "sol": "In a 45-45-90 triangle, hypotenuse $= \\text{leg} \\times \\sqrt{2}$. Here: $6 \\times \\sqrt{2} = 6\\sqrt{2}$ cm.",
        "dia": {
          "type": "triangle",
          "w": 6,
          "h": 6,
          "A": "A",
          "B": "B",
          "C": "C",
          "a": "6",
          "b": "6",
          "c": "?"
        }
      },
      {
        "q": "In a 30-60-90 triangle, the short leg is 4 cm. What are the long leg and the hypotenuse?",
        "ans": "Long leg $= 4\\sqrt{3}$ cm, hypotenuse $= 8$ cm",
        "sol": "Short leg $= x = 4$. Long leg $= x\\sqrt{3} = 4\\sqrt{3}$ cm. Hypotenuse $= 2x = 8$ cm."
      },
      {
        "q": "A ladder 10 m long leans against a wall, reaching 8 m up the wall. How far is the base from the wall?",
        "ans": "$6$ m",
        "sol": "$8^2 + b^2 = 10^2 \\Rightarrow 64 + b^2 = 100 \\Rightarrow b^2 = 36 \\Rightarrow b = 6$ m."
      }
    ],
    "quiz": [
      {
        "q": "The Pythagorean theorem applies to:",
        "ans": "Only right triangles",
        "sol": "Only right triangles have a hypotenuse — the side opposite the $90°$ angle."
      },
      {
        "q": "In $\\triangle ABC$, $\\angle C = 90°$, $AB = 25$, $BC = 20$. Find $AC$.",
        "ans": "15",
        "sol": "$AC^2 = 25^2 - 20^2 = 625 - 400 = 225$, so $AC = \\sqrt{225} = 15$.",
        "dia": {
          "type": "triangle",
          "w": 20,
          "h": 15,
          "A": "A",
          "B": "B",
          "C": "C",
          "a": "20",
          "b": "?",
          "c": "25"
        }
      },
      {
        "q": "A triangle has sides 6, 8, and 11. Is it a right triangle? (Yes or No)",
        "ans": "No",
        "sol": "$6^2 + 8^2 = 36 + 64 = 100 \\neq 121 = 11^2$. Not a right triangle."
      },
      {
        "q": "The diagonal of a square is $10\\sqrt{2}$ cm. What is the side length?",
        "ans": "10 cm",
        "sol": "In a square, diagonal $= s\\sqrt{2}$. So $s\\sqrt{2} = 10\\sqrt{2} \\Rightarrow s = 10$ cm."
      },
      {
        "q": "In a 30-60-90 triangle, the long leg is $\\sqrt{12}$ cm. What is the short leg?",
        "ans": "2 cm",
        "sol": "Long leg $= x\\sqrt{3} = \\sqrt{12} = 2\\sqrt{3}$, so $x = 2$ cm."
      }
    ]
  },
  {
    "id": "ch02",
    "g": "8",
    "gx": 2,
    "title": "Angles",
    "coverage": "g",
    "think": "Two lines intersect. If one angle is $35°$, what are the other three angles? Explain.",
    "videos": [
      {
        "yt": "H-de6Tkxej8",
        "t": "Angle Basics",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "Acute: $0° < x < 90°$. Right: exactly $90°$. Obtuse: $90° < x < 180°$. Straight: $180°$.",
      "Complementary: sum $= 90°$. Supplementary: sum $= 180°$.",
      "Vertical (opposite) angles are equal when two lines intersect.",
      "Linear pair: two adjacent angles that form a straight line — they are supplementary.",
      "Adjacent angles share a common side and vertex."
    ],
    "practice": [
      {
        "q": "Classify $\\angle = 87°$ as acute, right, or obtuse.",
        "ans": "Acute",
        "sol": "$0° < 87° < 90°$ — it is acute."
      },
      {
        "q": "Two complementary angles are in the ratio $2:7$. Find the smaller angle.",
        "ans": "$20°$",
        "sol": "Let angles be $2x$ and $7x$. Then $2x + 7x = 90° \\Rightarrow 9x = 90° \\Rightarrow x = 10°$. Smaller angle $= 2x = 20°$."
      },
      {
        "q": "$\\angle A$ and $\\angle B$ are supplementary. $\\angle A = 115°$. Find $\\angle B$.",
        "ans": "$65°$",
        "sol": "Supplementary angles sum to $180°$. $\\angle B = 180° - 115° = 65°$."
      },
      {
        "q": "Two intersecting lines form four angles. One angle is $140°$. What are the other three angles?",
        "ans": "$40°$, $140°$, $40°$",
        "sol": "Vertical angles are equal, so the opposite angle is also $140°$. Adjacent angles are supplementary: $180° - 140° = 40°$. Four angles: $140°$, $40°$, $140°$, $40°$."
      },
      {
        "q": "$\\angle X = 3x + 10°$ and $\\angle Y = 5x - 20°$ are complementary. Find $x$.",
        "ans": "$12.5°$",
        "sol": "$(3x + 10) + (5x - 20) = 90° \\Rightarrow 8x - 10 = 90° \\Rightarrow 8x = 100° \\Rightarrow x = 12.5°$."
      }
    ],
    "quiz": [
      {
        "q": "$\\angle P = 2x + 15°$ and $\\angle Q = 3x - 5°$ are supplementary. Find $x$.",
        "ans": "$34°$",
        "sol": "$(2x+15) + (3x-5) = 180° \\Rightarrow 5x + 10 = 180° \\Rightarrow 5x = 170° \\Rightarrow x = 34°$."
      },
      {
        "q": "If $\\angle A = 72°$, what is its complement?",
        "ans": "$18°$",
        "sol": "$90° - 72° = 18°$."
      },
      {
        "q": "Two lines intersect. One angle measures $48°$. What is the angle opposite it?",
        "ans": "$48°$",
        "sol": "Vertical opposite angles are equal."
      },
      {
        "q": "A straight line forms two angles: one is $3x°$ and the other is $x°$. What is $x$?",
        "ans": "$45°$",
        "sol": "$3x + x = 180° \\Rightarrow 4x = 180° \\Rightarrow x = 45°$."
      },
      {
        "q": "$\\angle M = 135°$. Classify it.",
        "ans": "Obtuse",
        "sol": "$90° < 135° < 180°$ — it is obtuse."
      }
    ]
  },
  {
    "id": "ch03",
    "g": "8",
    "gx": 3,
    "title": "Triangle Angle Sum",
    "coverage": "g",
    "think": "A triangle has angles $x°$, $(x+20)°$, and $(2x-10)°$. Can you find all three? What equation do you write?",
    "videos": [
      {
        "yt": "OPG-9IFnJnI",
        "t": "Proof - Sum of Measures of Angles in a Triangle are 180",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "Sum of interior angles in any triangle $= 180°$.",
      "Equilateral triangle: all three angles $= 60°$.",
      "Isosceles triangle: two equal sides → two equal base angles.",
      "Exterior angle = sum of the two remote interior angles.",
      "Triangle inequality: the sum of any two sides must be greater than the third side."
    ],
    "practice": [
      {
        "q": "In $\\triangle ABC$, $\\angle A = 55°$, $\\angle B = 65°$. Find $\\angle C$.",
        "ans": "$60°$",
        "sol": "$\\angle C = 180° - 55° - 65° = 60°$."
      },
      {
        "q": "A triangle has angles in ratio $1:2:3$. What are the three angles?",
        "ans": "$30°$, $60°$, $90°$",
        "sol": "Let angles be $x$, $2x$, $3x$. Then $x + 2x + 3x = 180° \\Rightarrow 6x = 180° \\Rightarrow x = 30°$. Angles: $30°$, $60°$, $90°$."
      },
      {
        "q": "In an isosceles triangle, the vertex angle is $40°$. What is each base angle?",
        "ans": "$70°$",
        "sol": "Let each base angle $= x$. Then $40° + x + x = 180° \\Rightarrow 2x = 140° \\Rightarrow x = 70°$."
      },
      {
        "q": "An exterior angle of a triangle measures $120°$. One remote interior angle is $45°$. What is the other?",
        "ans": "$75°$",
        "sol": "Exterior angle = sum of remote interior angles. $120° = 45° + x \\Rightarrow x = 75°$."
      },
      {
        "q": "Can a triangle have sides 3, 4, and 8? Explain.",
        "ans": "No",
        "sol": "$3 + 4 = 7 < 8$. By the triangle inequality theorem, this cannot form a triangle."
      }
    ],
    "quiz": [
      {
        "q": "Find $\\angle X$: $\\angle A = 30°$, $\\angle B = 80°$, $\\angle C = X°$",
        "ans": "$70°$",
        "sol": "$X = 180° - 30° - 80° = 70°$."
      },
      {
        "q": "An exterior angle measures $150°$ and one interior angle is $60°$. What is the other interior angle?",
        "ans": "$90°$",
        "sol": "$150° = 60° + x \\Rightarrow x = 90°$."
      },
      {
        "q": "In $\\triangle ABC$, $\\angle A = \\angle B$ and $\\angle C = 50°$. Find $\\angle A$.",
        "ans": "$65°$",
        "sol": "Let $\\angle A = \\angle B = x$. Then $x + x + 50° = 180° \\Rightarrow 2x = 130° \\Rightarrow x = 65°$."
      },
      {
        "q": "Can a triangle have angles $90°$, $45°$, and $45°$?",
        "ans": "Yes",
        "sol": "$90° + 45° + 45° = 180°$. Yes — it is a right isosceles triangle."
      },
      {
        "q": "The sides of a triangle are 5, 12, and 13. What type of triangle is it?",
        "ans": "Right triangle",
        "sol": "$5^2 + 12^2 = 25 + 144 = 169 = 13^2$. Since $a^2 + b^2 = c^2$, it is a right triangle."
      }
    ]
  },
  {
    "id": "ch04",
    "g": "8",
    "gx": 4,
    "title": "Congruent Triangles",
    "coverage": "g",
    "think": "Triangle 1 has sides 5, 7, 9. Triangle 2 has sides 9, 5, 7. Are they necessarily congruent? What test do you use?",
    "videos": [
      {
        "yt": "CJrVOf_3dN0",
        "t": "Congruent Triangles and SSS",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "Congruent triangles ($\\cong$): all three sides and all three angles are equal.",
      "SSS: three pairs of corresponding sides equal → congruent.",
      "SAS: two sides and the included angle equal → congruent.",
      "ASA / AAS: two angles and a corresponding side equal → congruent.",
      "SSA does NOT guarantee congruence (ambiguous case).",
      "CPCTC: Corresponding Parts of Congruent Triangles are Congruent."
    ],
    "practice": [
      {
        "q": "$\\triangle ABC \\cong \\triangle DEF$. $AB = 7$, $BC = 9$, $CA = 5$ and $\\angle D = 60°$. What is $\\angle A$?",
        "ans": "$60°$",
        "sol": "By CPCTC, $\\angle A$ corresponds to $\\angle D$, so $\\angle A = 60°$."
      },
      {
        "q": "Which postulate proves these triangles congruent?\n\nSSS · SAS · ASA · AAS · SSA (cannot prove)",
        "ans": "ASA",
        "sol": "Two angles and the included side are equal → ASA proves congruence."
      },
      {
        "q": "$\\triangle ABC \\cong \\triangle DEF$. Perimeter of $\\triangle ABC = 24$ cm. What is the perimeter of $\\triangle DEF$?",
        "ans": "24 cm",
        "sol": "Congruent triangles have equal corresponding sides, so their perimeters are equal: 24 cm."
      },
      {
        "q": "In $\\triangle ABC$, $AB = 6$, $BC = 8$, $\\angle B = 90°$. In $\\triangle DEF$, $DE = 6$, $EF = 8$, $\\angle E = 90°$. Are the triangles congruent?",
        "ans": "Yes — SAS",
        "sol": "Two sides and the included $90°$ angle are equal in both triangles. By SAS, they are congruent."
      },
      {
        "q": "Explain why SSA cannot be used to prove triangle congruence.",
        "ans": "SSA can give two different triangles (ambiguous case)",
        "sol": "With SSA, if the given side is shorter than the other given side, two different triangles can satisfy the conditions (one acute, one obtuse). SSA does not uniquely determine a triangle."
      }
    ],
    "quiz": [
      {
        "q": "What does CPCTC stand for?",
        "ans": "Corresponding Parts of Congruent Triangles are Congruent",
        "sol": "CPCTC is used after proving two triangles congruent to state that all corresponding angles and sides are equal."
      },
      {
        "q": "Which of these can prove triangle congruence?\n\nSSS · SAS · ASA · AAS · SSA",
        "ans": "SSS, SAS, ASA, AAS (but not SSA)",
        "sol": "SSS, SAS, ASA, and AAS are valid postulates. SSA does NOT guarantee congruence."
      },
      {
        "q": "$\\triangle ABC \\cong \\triangle DEF$. $\\angle C = 70°$. What is $\\angle F$?",
        "ans": "$70°$",
        "sol": "By CPCTC, corresponding angles are equal."
      },
      {
        "q": "$\\triangle MNO$ has sides $MN = 4$, $NO = 5$, $MO = 7$. $\\triangle PQR$ has $PQ = 4$, $QR = 5$, $PR = 7$. Are the triangles congruent?",
        "ans": "Yes — SSS",
        "sol": "All three corresponding sides are equal. By SSS, the triangles are congruent."
      },
      {
        "q": "$\\triangle ABC$ has $\\angle A = 30°$, $AB = 8$, $\\angle B = 50°$. $\\triangle DEF$ has $\\angle D = 30°$, $DE = 8$, $\\angle E = 50°$. Are they congruent?",
        "ans": "Yes — ASA",
        "sol": "Two angles and the included side are equal in both triangles. By ASA, they are congruent."
      }
    ]
  },
  {
    "id": "ch05",
    "g": "8",
    "gx": 5,
    "title": "Similar Triangles",
    "coverage": "g",
    "think": "A 2-metre tall person casts a 1.5-metre shadow. At the same time, a tree casts a 9-metre shadow. How tall is the tree?",
    "videos": [
      {
        "yt": "9ThXDY9Y3oU",
        "t": "Similar Triangle Basics",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "Similar triangles ($\\sim$): same shape, proportional sides, equal angles.",
      "AA: two angles equal → triangles are similar.",
      "Scale factor $k$: all sides of one triangle are $k$ times the other.",
      "If scale factor $= k$, area scales by $k^2$.",
      "Similarity: $\\frac{\\text{side}_1}{\\text{side}_2} = \\frac{\\text{other side}_1}{\\text{other side}_2}$."
    ],
    "practice": [
      {
        "q": "In $\\triangle ABC \\sim \\triangle DEF$, $AB = 6$, $BC = 8$, $AC = 10$, and $DE = 3$. Find $DF$.",
        "ans": "4",
        "sol": "Scale factor $k = DE/AB = 3/6 = 1/2$. So $DF = (1/2) \\times BC = (1/2) \\times 8 = 4$."
      },
      {
        "q": "A flagpole 4 m tall casts a shadow 3 m long. At the same time, a building casts a shadow 12 m long. How tall is the building?",
        "ans": "16 m",
        "sol": "$\\frac{4}{3} = \\frac{h}{12} \\Rightarrow h = 12 \\times \\frac{4}{3} = 16$ m."
      },
      {
        "q": "Two similar triangles have scale factor $3:5$. Area of smaller is $27\\text{ cm}^2$. Area of larger?",
        "ans": "$75\\text{ cm}^2$",
        "sol": "Area scales by $k^2 = (5/3)^2 = 25/9$. Area $= 27 \\times 25/9 = 75$ cm²."
      },
      {
        "q": "In similar triangles, the ratio of two corresponding sides is $2:7$. What is the ratio of their perimeters?",
        "ans": "$2:7$",
        "sol": "Perimeter ratio equals the scale factor ratio. Both are $2:7$."
      },
      {
        "q": "Two similar triangles have scale factor $k = 4$. One side of the smaller is 3 cm. What is the corresponding side of the larger?",
        "ans": "12 cm",
        "sol": "Corresponding side $= 4 \\times 3 = 12$ cm."
      }
    ],
    "quiz": [
      {
        "q": "$\\triangle ABC \\sim \\triangle PQR$, $AB = 10$, $AC = 14$, $PQ = 5$, $PR = 7$. What is the scale factor?",
        "ans": "$2:1$",
        "sol": "$\\frac{AB}{PQ} = 10/5 = 2$, $\\frac{AC}{PR} = 14/7 = 2$. Scale factor $= 2:1$."
      },
      {
        "q": "A triangle has sides 3, 4, 5. A similar triangle has shortest side = 9. What is its perimeter?",
        "ans": "36",
        "sol": "Scale factor $= 9/3 = 3$. Original perimeter $= 3+4+5 = 12$. New perimeter $= 12 \\times 3 = 36$."
      },
      {
        "q": "Which similarity test proves these triangles are similar?\n\nAA · SSS · SAS",
        "ans": "AA (Angle-Angle)",
        "sol": "If two angles of one triangle equal two angles of another, AA proves similarity."
      },
      {
        "q": "Two similar triangles have corresponding sides in ratio $5:3$. Area of smaller is 18. Area of larger?",
        "ans": "50",
        "sol": "Area ratio $= (5/3)^2 = 25/9$. Area $= 18 \\times 25/9 = 50$."
      },
      {
        "q": "$\\triangle MNO \\sim \\triangle XYZ$, $\\angle M = 50°$. What is $\\angle X$?",
        "ans": "$50°$",
        "sol": "Corresponding angles are equal."
      }
    ]
  },
  {
    "id": "ch06",
    "g": "8",
    "gx": 6,
    "title": "Linear Equations in Two Variables",
    "coverage": "g",
    "think": "The taxi cost is $C = 2d + 3$ (distance $d$ in km, cost $C$ in dollars). If you travel 8 km, what do you pay? How does the 2 affect the graph?",
    "videos": [
      {
        "yt": "2UrcUfBizyw",
        "t": "Algebra: graphing lines 1",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "Linear equation in two variables: $y = mx + b$, where $m$ = slope, $b$ = $y$-intercept.",
      "Slope $m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$.",
      "Positive $m$: line rises left to right. Negative $m$: line falls left to right.",
      "$m = 0$: horizontal line. $m$ undefined: vertical line.",
      "$y$-intercept: where the line crosses the $y$-axis (at $x = 0$)."
    ],
    "practice": [
      {
        "q": "Find the slope and $y$-intercept of $y = -3x + 7$.",
        "ans": "$m = -3$, $b = 7$",
        "sol": "In $y = mx + b$: slope $m = -3$, $y$-intercept $b = 7$ (point $(0, 7)$)."
      },
      {
        "q": "Find the slope of the line through $(2, 5)$ and $(6, 13)$.",
        "ans": "2",
        "sol": "$m = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$."
      },
      {
        "q": "Write the equation of a line with slope $4$ and $y$-intercept $-3$.",
        "ans": "$y = 4x - 3$",
        "sol": "Using $y = mx + b$ with $m = 4$, $b = -3$: $y = 4x - 3$."
      },
      {
        "q": "Is the point $(3, 7)$ on the line $y = 2x + 1$?",
        "ans": "Yes",
        "sol": "$y = 2(3) + 1 = 7$. The point satisfies the equation, so $(3, 7)$ is on the line."
      },
      {
        "q": "A line has slope $-2$ and passes through $(1, 3)$. Find its equation.",
        "ans": "$y = -2x + 5$",
        "sol": "$y - 3 = -2(x - 1) \\Rightarrow y - 3 = -2x + 2 \\Rightarrow y = -2x + 5$."
      }
    ],
    "quiz": [
      {
        "q": "Find the slope of $y = \\frac{2}{3}x - 5$.",
        "ans": "$\\frac{2}{3}$",
        "sol": "In $y = mx + b$, slope $m = 2/3$."
      },
      {
        "q": "Find the equation of the line through $(1, 2)$ and $(3, 8)$.",
        "ans": "$y = 3x - 1$",
        "sol": "$m = (8-2)/(3-1) = 6/2 = 3$. $y - 2 = 3(x-1) \\Rightarrow y = 3x - 1$."
      },
      {
        "q": "Which line is steeper: $y = 5x - 2$ or $y = \\frac{1}{2}x + 3$?",
        "ans": "$y = 5x - 2$",
        "sol": "$|5| > |1/2|$, so $y = 5x - 2$ has a steeper slope."
      },
      {
        "q": "Find the $y$-intercept of $2x + 3y = 12$.",
        "ans": "$(0, 4)$",
        "sol": "Set $x = 0$: $3y = 12 \\Rightarrow y = 4$. $y$-intercept $= (0, 4)$."
      },
      {
        "q": "The slope of a line is $0$. What type of line is it?",
        "ans": "Horizontal line",
        "sol": "$m = 0$ means the line is horizontal (e.g., $y = 3$)."
      }
    ]
  },
  {
    "id": "ch07",
    "g": "8",
    "gx": 7,
    "title": "Solving Linear Equations",
    "coverage": "g",
    "think": "Solve: $3(x - 2) + 4 = 2x + 10$. Work through it step by step. What do you undo first?",
    "videos": [
      {
        "yt": "9Ek61w1LxSc",
        "t": "Simple Equations",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "Golden rule: whatever you do to one side, do to the other.",
      "Undo in reverse order: parentheses → like terms → isolate the variable.",
      "Multi-step: $3x - 6 + 4 = 2x + 10 \\Rightarrow 3x - 2 = 2x + 10 \\Rightarrow x = 12$.",
      "Variables on both sides: bring all variable terms to one side first.",
      "Word problems: define $x$, write the equation, solve, and check."
    ],
    "practice": [
      {
        "q": "Solve: $2x + 7 = 19$",
        "ans": "6",
        "sol": "$2x = 19 - 7 = 12 \\Rightarrow x = 6$."
      },
      {
        "q": "Solve: $5x - 3 = 2x + 12$",
        "ans": "5",
        "sol": "$5x - 2x = 12 + 3 \\Rightarrow 3x = 15 \\Rightarrow x = 5$."
      },
      {
        "q": "Solve: $4(x + 2) = 3x + 14$",
        "ans": "6",
        "sol": "$4x + 8 = 3x + 14 \\Rightarrow 4x - 3x = 14 - 8 \\Rightarrow x = 6$."
      },
      {
        "q": "A number doubled plus 5 equals 21. What is the number?",
        "ans": "8",
        "sol": "Let $x$ be the number. $2x + 5 = 21 \\Rightarrow 2x = 16 \\Rightarrow x = 8$."
      },
      {
        "q": "Solve: $\\dfrac{x}{3} - 4 = 5$",
        "ans": "27",
        "sol": "$\\frac{x}{3} = 9 \\Rightarrow x = 27$."
      }
    ],
    "quiz": [
      {
        "q": "Solve: $7x + 3 = 5x + 19$",
        "ans": "8",
        "sol": "$7x - 5x = 19 - 3 \\Rightarrow 2x = 16 \\Rightarrow x = 8$."
      },
      {
        "q": "Solve: $3(x - 4) = 2x + 1$",
        "ans": "13",
        "sol": "$3x - 12 = 2x + 1 \\Rightarrow 3x - 2x = 1 + 12 \\Rightarrow x = 13$."
      },
      {
        "q": "Three times a number minus 7 equals 20. Find the number.",
        "ans": "9",
        "sol": "$3x - 7 = 20 \\Rightarrow 3x = 27 \\Rightarrow x = 9$."
      },
      {
        "q": "Solve: $8 - 2x = 4$",
        "ans": "2",
        "sol": "$-2x = 4 - 8 = -4 \\Rightarrow x = 2$."
      },
      {
        "q": "Solve: $\\dfrac{2x + 3}{5} = 3$",
        "ans": "6",
        "sol": "$2x + 3 = 15 \\Rightarrow 2x = 12 \\Rightarrow x = 6$."
      }
    ]
  },
  {
    "id": "ch08",
    "g": "8",
    "gx": 8,
    "title": "Volume of 3D Shapes",
    "coverage": "g",
    "think": "A rectangular box is 6 cm long, 4 cm wide, and 5 cm tall. A cylinder has the same height and the same circular base area. How do their volumes compare?",
    "videos": [
      {
        "yt": "ZqzAOZ9pP9Q",
        "t": "Solid Geometry Volume",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "Rectangular prism: $V = l \\times w \\times h$.",
      "Cube: $V = s^3$ (all edges equal $s$).",
      "Cylinder: $V = \\pi r^2 h$.",
      "Cone: $V = \\frac{1}{3}\\pi r^2 h$.",
      "Sphere: $V = \\frac{4}{3}\\pi r^3$.",
      "When all dimensions are multiplied by $k$, volume is multiplied by $k^3$."
    ],
    "practice": [
      {
        "q": "Find the volume of a rectangular prism: length 8 cm, width 5 cm, height 3 cm.",
        "ans": "$120\\text{ cm}^3$",
        "sol": "$V = 8 \\times 5 \\times 3 = 120$ cm³."
      },
      {
        "q": "A cube has edge length 4 cm. Find its volume.",
        "ans": "$64\\text{ cm}^3$",
        "sol": "$V = 4^3 = 64$ cm³."
      },
      {
        "q": "A cylinder has radius 3 cm and height 10 cm. Find its volume (take $\\pi = 3.14$).",
        "ans": "$282.6\\text{ cm}^3$",
        "sol": "$V = \\pi r^2 h = 3.14 \\times 3^2 \\times 10 = 3.14 \\times 9 \\times 10 = 282.6$ cm³."
      },
      {
        "q": "A cone has radius 6 cm and height 5 cm. Find its volume (take $\\pi = 3.14$).",
        "ans": "$188.4\\text{ cm}^3$",
        "sol": "$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} \\times 3.14 \\times 36 \\times 5 = 188.4$ cm³."
      },
      {
        "q": "If all edges of a cube are doubled, by what factor does the volume increase?",
        "ans": "8",
        "sol": "$k = 2$. Volume scales by $k^3 = 2^3 = 8$."
      }
    ],
    "quiz": [
      {
        "q": "A sphere has radius 3 cm. Find its volume (take $\\pi = 3.14$).",
        "ans": "$113.04\\text{ cm}^3$",
        "sol": "$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times 3.14 \\times 27 = 113.04$ cm³."
      },
      {
        "q": "A swimming pool is 25 m long, 10 m wide, and 2 m deep. How many litres of water can it hold? (1 m³ = 1000 L)",
        "ans": "500,000 litres",
        "sol": "$V = 25 \\times 10 \\times 2 = 500$ m³ $= 500 \\times 1000 = 500{,}000$ litres."
      },
      {
        "q": "The volume of a cylinder is $150\\pi$ cm³ and its height is 6 cm. What is its radius?",
        "ans": "5 cm",
        "sol": "$150\\pi = \\pi r^2 \\times 6 \\Rightarrow r^2 = 25 \\Rightarrow r = 5$ cm."
      },
      {
        "q": "A cylinder and a cone have the same base radius and same height. What is the ratio of their volumes?",
        "ans": "$3:1$",
        "sol": "$V_{\\text{cyl}} = \\pi r^2 h$, $V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h$. Ratio $= 3:1$."
      },
      {
        "q": "A rectangular box has volume $180\\text{ cm}^3$. Its length is 6 cm and width is 5 cm. What is its height?",
        "ans": "6 cm",
        "sol": "$h = V/(l \\times w) = 180/(6 \\times 5) = 180/30 = 6$ cm."
      }
    ]
  },
  {
    "id": "ch09",
    "g": "8",
    "gx": 9,
    "title": "Scientific Notation",
    "coverage": "g",
    "think": "Write $0.0000072$ in scientific notation. How many places did you move the decimal, and in which direction?",
    "videos": [
      {
        "yt": "trdbaV4TaAo",
        "t": "Scientific Notation (old)",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "Scientific notation: $a \\times 10^n$, where $1 \\le a < 10$ and $n$ is an integer.",
      "Move decimal right → positive $n$ (original $> 1$). Move left → negative $n$ (original $< 1$).",
      "Multiply: $(a \\times 10^m)(b \\times 10^n) = (ab) \\times 10^{m+n}$.",
      "Divide: $\\frac{a \\times 10^m}{b \\times 10^n} = (\\frac{a}{b}) \\times 10^{m-n}$.",
      "Add/subtract: make exponents the same first, then add/subtract coefficients."
    ],
    "practice": [
      {
        "q": "Write $4{,}500{,}000$ in scientific notation.",
        "ans": "$4.5 \\times 10^6$",
        "sol": "Move decimal 6 places left: $4{,}500{,}000 = 4.5 \\times 10^6$."
      },
      {
        "q": "Write $0.00032$ in scientific notation.",
        "ans": "$3.2 \\times 10^{-4}$",
        "sol": "Move decimal 4 places right: $0.00032 = 3.2 \\times 10^{-4}$."
      },
      {
        "q": "Simplify: $(3 \\times 10^4) \\times (2 \\times 10^3)$",
        "ans": "$6 \\times 10^7$",
        "sol": "$(3 \\times 2) \\times 10^{4+3} = 6 \\times 10^7$."
      },
      {
        "q": "Simplify: $\\dfrac{8 \\times 10^6}{2 \\times 10^2}$",
        "ans": "$4 \\times 10^4$",
        "sol": "$\\frac{8}{2} \\times 10^{6-2} = 4 \\times 10^4$."
      },
      {
        "q": "Arrange from smallest to largest: $3.2 \\times 10^{-3}$, $5.1 \\times 10^{-2}$, $4.0 \\times 10^{-4}$.",
        "ans": "$4.0 \\times 10^{-4} < 3.2 \\times 10^{-3} < 5.1 \\times 10^{-2}$",
        "sol": "$4.0 \\times 10^{-4} = 0.0004$, $3.2 \\times 10^{-3} = 0.0032$, $5.1 \\times 10^{-2} = 0.051$."
      }
    ],
    "quiz": [
      {
        "q": "Write $0.0000072$ in scientific notation.",
        "ans": "$7.2 \\times 10^{-6}$",
        "sol": "Move decimal 6 places right: $7.2 \\times 10^{-6}$."
      },
      {
        "q": "Simplify: $(5 \\times 10^3) + (3 \\times 10^3)$",
        "ans": "$8 \\times 10^3$",
        "sol": "Same exponent: $(5 + 3) \\times 10^3 = 8 \\times 10^3$."
      },
      {
        "q": "Simplify: $\\dfrac{9 \\times 10^{-3}}{3 \\times 10^{-5}}$",
        "ans": "$3 \\times 10^2$",
        "sol": "$\\frac{9}{3} \\times 10^{-3-(-5)} = 3 \\times 10^2 = 300$."
      },
      {
        "q": "The number $6.02 \\times 10^{23}$ is called ___",
        "ans": "Avogadro's number",
        "sol": "$6.02 \\times 10^{23}$ is Avogadro's number, used in chemistry to count particles."
      },
      {
        "q": "Which is larger: $2.5 \\times 10^6$ or $3.0 \\times 10^5$?",
        "ans": "$2.5 \\times 10^6$",
        "sol": "$2.5 \\times 10^6 = 2{,}500{,}000$ and $3.0 \\times 10^5 = 300{,}000$. $2{,}500{,}000 > 300{,}000$."
      }
    ]
  },
  {
    "id": "ch10",
    "g": "8",
    "gx": 10,
    "title": "Ratios, Proportions & Percent",
    "coverage": "g",
    "think": "A recipe needs 4 cups of flour and 3 cups of sugar. If you double the recipe, how much flour and sugar? If you halve it?",
    "videos": [
      {
        "yt": "SFL4stapeUs",
        "t": "30-60-90 Triangle Side Ratios Proof",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "Ratio $a:b = \\frac{a}{b}$. Simplify by dividing by their GCF.",
      "Proportion: $\\frac{a}{b} = \\frac{c}{d} \\Rightarrow ad = bc$ (cross-multiply).",
      "Percent: $p\\% = \\frac{p}{100}$. To find $p\\%$ of $x$: $x \\times \\frac{p}{100}$.",
      "Percent increase: $\\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$.",
      "Percent decrease: $\\frac{\\text{original} - \\text{new}}{\\text{original}} \\times 100\\%$."
    ],
    "practice": [
      {
        "q": "Express the ratio $18:24$ in simplest form.",
        "ans": "$3:4$",
        "sol": "$\\frac{18}{24} = \\frac{3}{4}$, so ratio $= 3:4$."
      },
      {
        "q": "$\\frac{x}{7} = \\frac{12}{21}$. Find $x$.",
        "ans": "4",
        "sol": "Cross-multiply: $21x = 84 \\Rightarrow x = 4$."
      },
      {
        "q": "What is $35\\%$ of $80$?",
        "ans": "28",
        "sol": "$80 \\times 0.35 = 28$."
      },
      {
        "q": "A jacket priced at $120 is discounted by $25\\%$. What is the sale price?",
        "ans": "$90",
        "sol": "Discount $= 120 \\times 0.25 = 30$. Sale price $= 120 - 30 = 90$ dollars."
      },
      {
        "q": "A school has 450 students. Ratio of boys to girls is $4:5$. How many boys?",
        "ans": "200 boys",
        "sol": "Total parts $= 4 + 5 = 9$. Boys $= \\frac{4}{9} \\times 450 = 200$."
      }
    ],
    "quiz": [
      {
        "q": "A map scale is $1:50{,}000$. The distance on the map is 3 cm. What is the actual distance?",
        "ans": "1.5 km",
        "sol": "Actual distance $= 3 \\times 50{,}000 = 150{,}000$ cm $= 1.5$ km."
      },
      {
        "q": "What percent of $60$ is $15$?",
        "ans": "$25\\%$",
        "sol": "$\\frac{15}{60} \\times 100\\% = 25\\%$."
      },
      {
        "q": "A product price increases from $40 to $50. What is the percent increase?",
        "ans": "$25\\%$",
        "sol": "$\\frac{50-40}{40} \\times 100\\% = \\frac{10}{40} \\times 100\\% = 25\\%$."
      },
      {
        "q": "Simplify the ratio $8:12:16$.",
        "ans": "$2:3:4$",
        "sol": "Divide all by 4: $8\\div4=2$, $12\\div4=3$, $16\\div4=4$. Ratio $= 2:3:4$."
      },
      {
        "q": "If $15\\%$ of a number is $45$, what is the number?",
        "ans": "300",
        "sol": "$0.15 \\times x = 45 \\Rightarrow x = 45/0.15 = 300$."
      }
    ]
  },
  {
    "id": "ch11",
    "g": "8",
    "gx": 11,
    "title": "Probability",
    "coverage": "g",
    "think": "You roll a standard six-sided die. What is the probability of rolling a number greater than 4? Express it as a fraction, a decimal, and a percent.",
    "videos": [
      {
        "yt": "uzkc-qNVoOk",
        "t": "Basic Probability",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "Probability $P = \\frac{\\text{favourable outcomes}}{\\text{total outcomes}}$, $0 \\le P \\le 1$.",
      "$P = 0$: impossible event. $P = 1$: certain event.",
      "Experimental probability approaches theoretical probability with many trials.",
      "Independent events: $P(A \\text{ and } B) = P(A) \\times P(B)$.",
      "Complement: $P(\\text{not } A) = 1 - P(A)$."
    ],
    "practice": [
      {
        "q": "A bag contains 5 red, 3 green, and 2 blue balls. One ball is drawn at random. What is the probability of drawing a red ball?",
        "ans": "$\\frac{1}{2}$",
        "sol": "Total balls $= 5+3+2 = 10$. $P(\\text{red}) = 5/10 = 1/2$."
      },
      {
        "q": "A fair coin is flipped three times. What is $P(\\text{all heads})$?",
        "ans": "$\\frac{1}{8}$",
        "sol": "$P(\\text{heads}) = 1/2$ each flip. $P(\\text{all 3 heads}) = (1/2)^3 = 1/8$."
      },
      {
        "q": "Roll a die. What is $P(\\text{odd number})$?",
        "ans": "$\\frac{1}{2}$",
        "sol": "Odd numbers: 1, 3, 5 (3 out of 6). $P = 3/6 = 1/2$."
      },
      {
        "q": "If $P(A) = 0.35$, what is $P(\\text{not } A)$?",
        "ans": "0.65",
        "sol": "$P(\\text{not } A) = 1 - 0.35 = 0.65$."
      },
      {
        "q": "Two dice are rolled. What is $P(\\text{sum } = 7)$?",
        "ans": "$\\frac{1}{6}$",
        "sol": "Total outcomes $= 36$. Favourable: $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ — 6 ways. $P = 6/36 = 1/6$."
      }
    ],
    "quiz": [
      {
        "q": "A spinner has 8 equal sections numbered 1–8. What is $P(\\text{even})$?",
        "ans": "$\\frac{1}{2}$",
        "sol": "Even numbers: 2, 4, 6, 8 (4 out of 8). $P = 4/8 = 1/2$."
      },
      {
        "q": "A bag has 6 white and 4 black balls. Two balls are drawn without replacement. What is $P(\\text{both white})$?",
        "ans": "$\\frac{1}{3}$",
        "sol": "$P(\\text{first white}) = 6/10$. $P(\\text{second white}\\mid\\text{first}) = 5/9$. $P = 6/10 \\times 5/9 = 30/90 = 1/3$."
      },
      {
        "q": "$P(A) = 0.8$, $P(B) = 0.5$, $A$ and $B$ are independent. Find $P(A \\text{ and } B)$.",
        "ans": "0.4",
        "sol": "$P(A \\text{ and } B) = P(A) \\times P(B) = 0.8 \\times 0.5 = 0.4$."
      },
      {
        "q": "In a class of 30 students, 18 are girls. What is $P(\\text{boy})$?",
        "ans": "$\\frac{2}{5}$",
        "sol": "Boys $= 12$. $P(\\text{boy}) = 12/30 = 2/5$."
      },
      {
        "q": "What is the probability of rolling a number greater than 2 on a fair six-sided die?",
        "ans": "$\\frac{2}{3}$",
        "sol": "Numbers greater than 2: 3, 4, 5, 6 (4 out of 6). $P = 4/6 = 2/3$."
      }
    ]
  },
  {
    "id": "ch12",
    "g": "8",
    "gx": 12,
    "title": "Integer Exponents & Order of Operations",
    "coverage": "g",
    "think": "Evaluate: $2^3$, $2^{-3}$, and $\\frac{1}{2^3}$. Are these all the same? If not, which are equal?",
    "videos": [
      {
        "yt": "QiwfF83NWNA",
        "t": "Calculating i Raised to Arbitrary Exponents",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "$a^m \\times a^n = a^{m+n}$. $\\frac{a^m}{a^n} = a^{m-n}$.",
      "$a^0 = 1$ (for $a \\neq 0$). $a^{-n} = \\frac{1}{a^n}$.",
      "$(a^m)^n = a^{mn}$. $(ab)^n = a^n b^n$.",
      "PEMDAS: Parentheses → Exponents → Multiply/Divide (left to right) → Add/Subtract (left to right)."
    ],
    "practice": [
      {
        "q": "Evaluate: $3^4$",
        "ans": "81",
        "sol": "$3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$."
      },
      {
        "q": "Simplify: $5^3 \\times 5^2$",
        "ans": "$5^5 = 3125$",
        "sol": "$5^3 \\times 5^2 = 5^{3+2} = 5^5 = 3125$."
      },
      {
        "q": "Simplify: $\\frac{3^7}{3^4}$",
        "ans": "$3^3 = 27$",
        "sol": "$\\frac{3^7}{3^4} = 3^{7-4} = 3^3 = 27$."
      },
      {
        "q": "Evaluate: $2^{-3}$",
        "ans": "$\\frac{1}{8}$",
        "sol": "$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$."
      },
      {
        "q": "Evaluate: $3 + 2 \\times 4^2 \\div 8$",
        "ans": "7",
        "sol": "PEMDAS: $4^2 = 16$. Then $2 \\times 16 = 32$. $32 \\div 8 = 4$. $3 + 4 = 7$."
      }
    ],
    "quiz": [
      {
        "q": "Simplify: $(2^3)^2$",
        "ans": "$2^6 = 64$",
        "sol": "$(2^3)^2 = 2^{3 \\times 2} = 2^6 = 64$."
      },
      {
        "q": "Evaluate: $10^{-2}$",
        "ans": "0.01",
        "sol": "$10^{-2} = \\frac{1}{10^2} = \\frac{1}{100} = 0.01$."
      },
      {
        "q": "Evaluate: $5^0$",
        "ans": "1",
        "sol": "$a^0 = 1$ for any non-zero $a$."
      },
      {
        "q": "Evaluate: $8 \\div 2(2 + 2)$",
        "ans": "16",
        "sol": "$8 \\div 2(4) = 8 \\div 2 \\times 4 = 4 \\times 4 = 16$. Parentheses first, then left-to-right divide/multiply."
      },
      {
        "q": "Simplify: $4^{-2}$",
        "ans": "$\\frac{1}{16}$",
        "sol": "$4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$."
      }
    ]
  },
  {
    "id": "ch13",
    "g": "8",
    "gx": 13,
    "title": "Polygons & Quadrilaterals",
    "coverage": "g",
    "think": "A regular hexagon has all sides and angles equal. What is the measure of each interior angle? How do you calculate it?",
    "videos": [
      {
        "yt": "qG3HnRccrQU",
        "t": "Sum of Interior Angles of a Polygon",
        "m": "English · Khan Academy",
        "duration": "~10 min"
      }
    ],
    "notes": [
      "Sum of interior angles of an $n$-gon: $(n - 2) \\times 180°$.",
      "Regular $n$-gon: each interior angle $= \\frac{(n-2) \\times 180°}{n}$.",
      "Sum of exterior angles of any convex polygon: always $360°$.",
      "Quadrilateral ($n = 4$): sum of interior angles $= 360°$.",
      "Parallelogram: opposite sides parallel, opposite angles equal, consecutive angles supplementary.",
      "Trapezoid: one pair of parallel sides. Isosceles trapezoid: base angles equal."
    ],
    "practice": [
      {
        "q": "Find the sum of the interior angles of a heptagon (7 sides).",
        "ans": "$900°$",
        "sol": "$(7 - 2) \\times 180° = 5 \\times 180° = 900°$."
      },
      {
        "q": "What is each interior angle of a regular octagon?",
        "ans": "$135°$",
        "sol": "$\\frac{(8-2) \\times 180°}{8} = \\frac{1080°}{8} = 135°$."
      },
      {
        "q": "A quadrilateral has angles $80°$, $110°$, and $75°$. What is the fourth angle?",
        "ans": "$95°$",
        "sol": "Fourth angle $= 360° - 80° - 110° - 75° = 95°$."
      },
      {
        "q": "In a parallelogram, one angle is $70°$. What are the other three angles?",
        "ans": "$110°$, $70°$, $110°$",
        "sol": "Opposite angles equal ($70°$ and $70°$). Consecutive angles supplementary: $180° - 70° = 110°$."
      },
      {
        "q": "How many sides does a polygon have if the sum of its interior angles is $1260°$?",
        "ans": "9 sides (nonagon)",
        "sol": "$(n-2) \\times 180° = 1260° \\Rightarrow n-2 = 7 \\Rightarrow n = 9$."
      }
    ],
    "quiz": [
      {
        "q": "Find the sum of the interior angles of a dodecagon (12 sides).",
        "ans": "$1800°$",
        "sol": "$(12 - 2) \\times 180° = 10 \\times 180° = 1800°$."
      },
      {
        "q": "What is each exterior angle of a regular nonagon?",
        "ans": "$40°$",
        "sol": "Sum of exterior angles always $360°$. Each exterior angle $= 360°/9 = 40°$."
      },
      {
        "q": "In an isosceles trapezoid, one base angle is $65°$. What is the other base angle?",
        "ans": "$65°$",
        "sol": "In an isosceles trapezoid, the base angles are equal. Both are $65°$."
      },
      {
        "q": "Which has the greater interior angle sum: a hexagon or a heptagon?",
        "ans": "Heptagon",
        "sol": "Hexagon: $(6-2) \\times 180° = 720°$. Heptagon: $(7-2) \\times 180° = 900°$. Heptagon is greater."
      },
      {
        "q": "A regular pentagon has $n = 5$. Find each interior angle.",
        "ans": "$108°$",
        "sol": "$\\frac{(5-2) \\times 180°}{5} = \\frac{540°}{5} = 108°$."
      }
    ]
  }
];