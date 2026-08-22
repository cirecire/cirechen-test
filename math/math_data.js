// Math Data for Grade 8 (PEP 2024)
// Coverage: g=🟢Khan video+exercise, b=🔵Khan video only—practice added, p=🟣custom only

var MATH_DATA = [
  {
    id: "ch01",
    g: "8",
    gx: 1,
    loc: "八上 Ch1",
    title: "勾股定理 Pythagorean Theorem",
    coverage: "b",
    think: "A right triangle has legs 3 and 4. What do you think the hypotenuse length is? Can you guess the pattern?",
    videos: [
      { title: "Pythagorean theorem intro", url: "https://www.khanacademy.org/math/geometry/xff63fac4:pythagorean-theorem/xff63fac4:pythagorean-theorem-topic/v/pythagorean-theorem", duration: "11:21" },
      { title: "Pythagorean theorem example", url: "https://www.khanacademy.org/math/geometry/xff63fac4:pythagorean-theorem/xff63fac4:pythagorean-theorem-topic/v/pythagorean-theorem-1", duration: "4:01" }
    ],
    notes: [
      "For a right triangle, a² + b² = c² where c is the hypotenuse.",
      "The hypotenuse is always the longest side, opposite the right angle.",
      "You can find any missing side if you know the other two.",
      "Common Pythagorean triples: (3,4,5), (5,12,13), (8,15,17)."
    ],
    practice: [
      { q: "In a right triangle, legs are 6 and 8. Find the hypotenuse.", type: "fill", ans: "10", sol: "6² + 8² = 36 + 64 = 100 → √100 = 10" },
      { q: "A right triangle has hypotenuse 13 and one leg 5. Find the other leg.", type: "fill", ans: "12", sol: "13² - 5² = 169 - 25 = 144 → √144 = 12" },
      { q: "Is a triangle with sides 7, 24, 25 a right triangle?", type: "choice", opts: ["Yes", "No"], ans: "Yes", sol: "7² + 24² = 49 + 576 = 625 = 25² ✓" }
    ],
    quiz: [
      { q: "What is the Pythagorean theorem formula?", type: "choice", opts: ["a + b = c", "a² + b² = c²", "a × b = c", "a² - b² = c²"], ans: "a² + b² = c²" },
      { q: "If legs are 9 and 12, the hypotenuse is ___.", type: "fill", ans: "15", sol: "9² + 12² = 81 + 144 = 225 → √225 = 15" },
      { q: "The hypotenuse is always opposite the ___ angle.", type: "choice", opts: ["acute", "right", "obtuse"], ans: "right" },
      { q: "A ladder 5m long leans against a wall. The foot is 3m from the wall. How high does it reach?", type: "fill", ans: "4", sol: "5² - 3² = 25 - 9 = 16 → √16 = 4m" }
    ]
  },
  {
    id: "ch02",
    g: "8",
    gx: 2,
    loc: "八上 Ch2",
    title: "实数 Real Numbers",
    coverage: "b",
    think: "Can all numbers be written as fractions? What about √2 or π?",
    videos: [
      { title: "Intro to rational & irrational numbers", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:irrational-numbers/x2f8bb11595b61c86:intro-rational-irrational-numbers/v/introduction-to-rational-and-irrational-numbers", duration: "9:36" },
      { title: "Classifying numbers", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:irrational-numbers/x2f8bb11595b61c86:intro-rational-irrational-numbers/v/classifying-numbers-example-1", duration: "4:40" }
    ],
    notes: [
      "Rational numbers (有理数) can be written as fractions p/q.",
      "Irrational numbers (无理数) cannot be written as fractions: √2, π, e.",
      "Real numbers (实数) = rational + irrational numbers.",
      "Every real number corresponds to a point on the number line."
    ],
    practice: [
      { q: "Is √9 rational or irrational?", type: "choice", opts: ["Rational", "Irrational"], ans: "Rational", sol: "√9 = 3 = 3/1 ✓" },
      { q: "Is π rational or irrational?", type: "choice", opts: ["Rational", "Irrational"], ans: "Irrational" },
      { q: "Classify √16:", type: "choice", opts: ["Rational", "Irrational"], ans: "Rational", sol: "√16 = 4 = 4/1 ✓" }
    ],
    quiz: [
      { q: "Which is irrational?", type: "choice", opts: ["√4", "√9", "√2", "0.5"], ans: "√2" },
      { q: "√2 ≈ ___ (round to 2 decimals)", type: "fill", ans: "1.41", sol: "√2 ≈ 1.41421..." },
      { q: "All rational numbers are real numbers. True or false?", type: "choice", opts: ["True", "False"], ans: "True" },
      { q: "Which set is smallest?", type: "choice", opts: ["Natural numbers", "Integers", "Rational numbers", "Real numbers"], ans: "Natural numbers" }
    ]
  },
  {
    id: "ch03",
    g: "8",
    gx: 3,
    loc: "八上 Ch3",
    title: "位置与坐标 Position & Coordinates",
    coverage: "b",
    think: "How do you describe a location on a map? Can you give someone directions using just numbers?",
    videos: [
      { title: "Introduction to the coordinate plane", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-variables/x2f8bb11595b61c86:intro-variables-expressions/v/the-coordinate-plane", duration: "6:50" },
      { title: "Plotting points", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-variables/x2f8bb11595b61c86:intro-variables-expressions/v/plotting-pts-exercise-example", duration: "3:11" }
    ],
    notes: [
      "Coordinate plane has x-axis (horizontal) and y-axis (vertical).",
      "A point is written as (x, y) — x first, then y.",
      "Four quadrants (象限): I (+,+), II (-,+), III (-,-), IV (+,-).",
      "Origin (原点) is (0, 0) where axes intersect."
    ],
    practice: [
      { q: "Point (3, -2) is in which quadrant?", type: "choice", opts: ["I", "II", "III", "IV"], ans: "IV" },
      { q: "The origin has coordinates (___, ___).", type: "fill", ans: "0,0", sol: "Origin is (0, 0)" },
      { q: "Point (-4, 5) has x = ___ and y = ___.", type: "fill", ans: "-4,5", sol: "x = -4, y = 5" }
    ],
    quiz: [
      { q: "In quadrant II, x is ___ and y is ___.", type: "choice", opts: ["+, +", "-, +", "-, -", "+, -"], ans: "-, +" },
      { q: "Point (0, 5) lies on the ___ axis.", type: "choice", opts: ["x-axis", "y-axis", "origin"], ans: "y-axis" },
      { q: "The distance from (2, 3) to (5, 3) is ___.", type: "fill", ans: "3", sol: "Same y → horizontal distance = |5-2| = 3" },
      { q: "What quadrant is (-3, -7) in?", type: "choice", opts: ["I", "II", "III", "IV"], ans: "III" }
    ]
  },
  {
    id: "ch04",
    g: "8",
    gx: 4,
    loc: "八上 Ch4",
    title: "一次函数 Linear Functions",
    coverage: "g",
    think: "If you earn 50 yuan per hour, how can you express your total pay as a function of hours worked?",
    videos: [
      { title: "Linear equations intro", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-variables/x2f8bb11595b61c86:intro-variables-expressions/v/what-is-a-variable", duration: "4:53" },
      { title: "Slope-intercept form", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-variables/x2f8bb11595b61c86:intro-variables-expressions/v/graphing-a-line-in-slope-intercept-form", duration: "6:48" }
    ],
    notes: [
      "Linear function (一次函数): y = kx + b, where k is slope (斜率) and b is y-intercept (截距).",
      "Slope = (y₂ - y₁) / (x₂ - x₁) = rise / run.",
      "If b = 0, it's a direct proportion (正比例函数): y = kx.",
      "Graph of a linear function is a straight line."
    ],
    practice: [
      { q: "In y = 2x + 3, the slope is ___.", type: "fill", ans: "2" },
      { q: "In y = -x + 5, the y-intercept is ___.", type: "fill", ans: "5" },
      { q: "The line y = 3x passes through the origin. True or false?", type: "choice", opts: ["True", "False"], ans: "True" },
      { q: "Find the slope of the line through points (1, 2) and (3, 8).", type: "fill", ans: "3", sol: "(8-2)/(3-1) = 6/2 = 3" }
    ],
    quiz: [
      { q: "Which is NOT a linear function?", type: "choice", opts: ["y = 2x", "y = x + 1", "y = x²", "y = -3x + 4"], ans: "y = x²" },
      { q: "If slope k > 0, the line goes ___ as x increases.", type: "choice", opts: ["up", "down", "stays flat"], ans: "up" },
      { q: "The graph of y = -2x + 1 crosses the y-axis at ___.", type: "fill", ans: "1" },
      { q: "For y = 0.5x - 2, when x = 4, y = ___.", type: "fill", ans: "0", sol: "y = 0.5(4) - 2 = 2 - 2 = 0" }
    ]
  },
  {
    id: "ch05",
    g: "8",
    gx: 5,
    loc: "八上 Ch5",
    title: "数据的分析 Data Analysis",
    coverage: "b",
    think: "If you have test scores 85, 90, 78, 92, 88 — how would you summarize the 'typical' performance?",
    videos: [
      { title: "Mean, median, & mode", url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/mean-and-median/v/mean-median-and-mode", duration: "6:18" },
      { title: "Box and whisker plots", url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics/cc-6th-box-plots/v/reading-box-and-whisker-plots", duration: "6:07" }
    ],
    notes: [
      "Mean (平均数) = sum of all values ÷ number of values.",
      "Median (中位数) = middle value when data is ordered.",
      "Mode (众数) = most frequent value.",
      "Range (极差) = max - min; variance (方差) measures spread from mean."
    ],
    practice: [
      { q: "Data: 2, 5, 7, 9, 12. The mean is ___.", type: "fill", ans: "7", sol: "(2+5+7+9+12)/5 = 35/5 = 7" },
      { q: "Data: 3, 3, 5, 7, 9. The mode is ___.", type: "fill", ans: "3" },
      { q: "Data: 4, 8, 12, 16, 20. The median is ___.", type: "fill", ans: "12" }
    ],
    quiz: [
      { q: "Which is most affected by extreme values (outliers)?", type: "choice", opts: ["Mean", "Median", "Mode"], ans: "Mean" },
      { q: "Data: 1, 2, 3, 4, 100. The median is ___.", type: "fill", ans: "3" },
      { q: "If all values are the same, mean = median = mode. True or false?", type: "choice", opts: ["True", "False"], ans: "True" },
      { q: "Range of data 5, 8, 12, 20 is ___.", type: "fill", ans: "15", sol: "20 - 5 = 15" }
    ]
  },
  {
    id: "ch06",
    g: "8",
    gx: 6,
    loc: "八下 Ch1",
    title: "平行线的证明 Proofs of Parallel Lines",
    coverage: "p",
    think: "How can you prove two lines are parallel without measuring them directly?",
    videos: [],
    notes: [
      "If corresponding angles are equal, lines are parallel.",
      "If alternate interior angles are equal, lines are parallel.",
      "If same-side interior angles are supplementary (互补), lines are parallel.",
      "Proofs require logical steps with reasons (理由)."
    ],
    practice: [
      { q: "If corresponding angles are both 70°, are the lines parallel?", type: "choice", opts: ["Yes", "No"], ans: "Yes" },
      { q: "If alternate interior angles are 65° and 65°, lines are ___.", type: "fill", ans: "parallel" },
      { q: "Same-side interior angles sum to 180° → lines are ___.", type: "fill", ans: "parallel" }
    ],
    quiz: [
      { q: "Given ∠1 = ∠2 (corresponding), we can conclude lines are ___.", type: "fill", ans: "parallel" },
      { q: "Two parallel lines are cut by a transversal. Corresponding angles are ___.", type: "choice", opts: ["equal", "supplementary", "complementary"], ans: "equal" },
      { q: "In a proof, each statement needs a ___.", type: "fill", ans: "reason" },
      { q: "If same-side interior angles are 110° and 70°, are lines parallel?", type: "choice", opts: ["Yes", "No"], ans: "Yes", sol: "110 + 70 = 180 ✓" }
    ]
  },
  {
    id: "ch07",
    g: "8",
    gx: 7,
    loc: "八下 Ch2",
    title: "概率初步 Introduction to Probability",
    coverage: "b",
    think: "If you flip a coin, what's the chance of heads? How do you express that as a number?",
    videos: [
      { title: "Basic probability", url: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics/cc-7th-basic-prob/v/basic-probability", duration: "7:52" },
      { title: "Simple probability examples", url: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics/cc-7th-basic-prob/v/probability-1-module-examples", duration: "5:27" }
    ],
    notes: [
      "Probability (概率) = favorable outcomes ÷ total possible outcomes.",
      "P ranges from 0 (impossible) to 1 (certain).",
      "P(A) + P(not A) = 1.",
      "For equally likely events, P = 1/n for each outcome."
    ],
    practice: [
      { q: "A die is rolled. P(rolling 3) = ___ (as fraction).", type: "fill", ans: "1/6" },
      { q: "A coin is flipped. P(heads) = ___.", type: "fill", ans: "0.5", sol: "Also accept 1/2" },
      { q: "A bag has 3 red, 2 blue marbles. P(red) = ___.", type: "fill", ans: "3/5", sol: "3 red out of 5 total" }
    ],
    quiz: [
      { q: "Probability of an impossible event is ___.", type: "fill", ans: "0" },
      { q: "Probability of a certain event is ___.", type: "fill", ans: "1" },
      { q: "From a deck of 52 cards, P(drawing an Ace) = ___.", type: "fill", ans: "1/13", sol: "4 aces / 52 cards = 1/13" },
      { q: "If P(A) = 0.3, then P(not A) = ___.", type: "fill", ans: "0.7", sol: "1 - 0.3 = 0.7" }
    ]
  },
  {
    id: "ch08",
    g: "8",
    gx: 8,
    loc: "八下 Ch3",
    title: "三角形的证明 Triangle Proofs",
    coverage: "p",
    think: "How can you prove two triangles are exactly the same size and shape without measuring all sides?",
    videos: [],
    notes: [
      "Congruent triangles (全等三角形) have same shape and size: ≅.",
      "Congruence conditions: SSS, SAS, ASA, AAS, HL (right triangles).",
      "CPCTC: Corresponding Parts of Congruent Triangles are Congruent.",
      "Isosceles triangle theorem: equal sides ↔ equal base angles."
    ],
    practice: [
      { q: "If two triangles have all three sides equal, they are congruent by ___.", type: "fill", ans: "SSS" },
      { q: "In △ABC, if AB = AC, then ∠B = ∠___.", type: "fill", ans: "C", sol: "Isosceles triangle theorem" },
      { q: "For right triangles, if leg and hypotenuse match, use ___.", type: "fill", ans: "HL" }
    ],
    quiz: [
      { q: "Which is NOT a congruence condition?", type: "choice", opts: ["SSS", "SAS", "AAA", "ASA"], ans: "AAA" },
      { q: "Two sides and included angle equal → ___ congruence.", type: "fill", ans: "SAS" },
      { q: "If △ABC ≅ △DEF, then AB = ___.", type: "fill", ans: "DE" },
      { q: "In an isosceles triangle, the angles opposite equal sides are ___.", type: "choice", opts: ["equal", "complementary", "supplementary"], ans: "equal" }
    ]
  },
  {
    id: "ch09",
    g: "8",
    gx: 9,
    loc: "八下 Ch4",
    title: "四边形 Quadrilaterals",
    coverage: "b",
    think: "A rectangle is a special parallelogram. What properties must it have?",
    videos: [
      { title: "Quadrilateral types", url: "https://www.khanacademy.org/math/geometry/xff63fac4:quadrilaterals/xff63fac4:quadrilateral-properties/v/quadrilateral-types-exercise", duration: "3:35" },
      { title: "Parallelogram properties", url: "https://www.khanacademy.org/math/geometry/xff63fac4:quadrilaterals/xff63fac4:quadrilateral-properties/v/proof-opposite-sides-of-a-parallelogram-are-congruent", duration: "7:24" }
    ],
    notes: [
      "Parallelogram (平行四边形): both pairs of opposite sides parallel.",
      "Properties: opposite sides equal, opposite angles equal, diagonals bisect.",
      "Rectangle: parallelogram + right angles; diagonals are equal.",
      "Rhombus (菱形): parallelogram + all sides equal; diagonals are perpendicular."
    ],
    practice: [
      { q: "In a parallelogram, opposite sides are ___.", type: "choice", opts: ["equal", "perpendicular", "complementary"], ans: "equal" },
      { q: "A rectangle has ___ right angles.", type: "fill", ans: "4" },
      { q: "A rhombus with 4 right angles is a ___.", type: "fill", ans: "square" }
    ],
    quiz: [
      { q: "Which is always true for a parallelogram?", type: "choice", opts: ["Diagonals are equal", "Diagonals bisect each other", "All angles are 90°"], ans: "Diagonals bisect each other" },
      { q: "A square is a special ___.", type: "choice", opts: ["rectangle only", "rhombus only", "both rectangle and rhombus"], ans: "both rectangle and rhombus" },
      { q: "In rhombus ABCD, if one diagonal is 6, the other diagonal is perpendicular and bisects it. True or false?", type: "choice", opts: ["True", "False"], ans: "True" },
      { q: "Trapezoid (梯形) has exactly ___ pair(s) of parallel sides.", type: "fill", ans: "1" }
    ]
  },
  {
    id: "ch10",
    g: "8",
    gx: 10,
    loc: "八下 Ch5",
    title: "图形与变换 Transformations",
    coverage: "b",
    think: "When you slide a shape without rotating or flipping it, what happens to its coordinates?",
    videos: [
      { title: "Translations", url: "https://www.khanacademy.org/math/geometry/xff63fac4:transformations/xff63fac4:translations/v/determining-the-translation", duration: "4:03" },
      { title: "Rotations", url: "https://www.khanacademy.org/math/geometry/xff63fac4:transformations/xff63fac4:rotations/v/determining-angle-rotations", duration: "6:36" }
    ],
    notes: [
      "Translation (平移): slide; add to x and y coordinates.",
      "Rotation (旋转): turn around a point; 90°, 180°, 270° common.",
      "Reflection (对称/翻转): flip over a line (axis of symmetry).",
      "Congruent transformations preserve size and shape."
    ],
    practice: [
      { q: "Point (2, 3) translated right 4 units becomes (___, ___).", type: "fill", ans: "6,3", sol: "(2+4, 3)" },
      { q: "Point (4, 2) reflected over y-axis becomes (___, ___).", type: "fill", ans: "-4,2", sol: "x changes sign" },
      { q: "Point (1, 5) rotated 90° clockwise about origin becomes (___, ___).", type: "fill", ans: "5,-1", sol: "(y, -x)" }
    ],
    quiz: [
      { q: "Translation preserves shape and size. True or false?", type: "choice", opts: ["True", "False"], ans: "True" },
      { q: "Reflection over x-axis changes sign of ___ coordinate.", type: "fill", ans: "y" },
      { q: "Rotation 180° is same as reflecting over ___.", type: "choice", opts: ["x-axis", "y-axis", "origin"], ans: "origin" },
      { q: "Which transformation changes orientation (left-right)?", type: "choice", opts: ["Translation", "Rotation", "Reflection"], ans: "Reflection" }
    ]
  },
  {
    id: "ch11",
    g: "8",
    gx: 11,
    loc: "八下 Ch6",
    title: "因式分解 Factoring",
    coverage: "b",
    think: "Can you rewrite x² - 5x + 6 as a product of two expressions?",
    videos: [
      { title: "Factoring quadratics intro", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratics-multiplying-factoring/x2f8bb11595b61c86:quadratics-factoring/v/factoring-quadratic-expressions", duration: "16:29" },
      { title: "Factoring difference of squares", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratics-multiplying-factoring/x2f8bb11595b61c86:quadratics-factoring/v/factoring-difference-of-squares", duration: "11:03" }
    ],
    notes: [
      "Factoring (因式分解): write a polynomial as product of factors.",
      "Common factor (公因式): factor out GCF first.",
      "Quadratic ax² + bx + c: find factors of ac that sum to b.",
      "Special forms: a² - b² = (a+b)(a-b); a² + 2ab + b² = (a+b)²."
    ],
    practice: [
      { q: "Factor: x² - 9 = (___)(___).", type: "fill", ans: "x+3,x-3", sol: "Accept (x-3)(x+3) too" },
      { q: "Factor: x² - 5x + 6 = (___)(___).", type: "fill", ans: "x-2,x-3", sol: "Find factors of 6 that sum to -5: -2 and -3" },
      { q: "Factor out GCF: 3x + 6 = ___(___.", type: "fill", ans: "3,x+2", sol: "3(x+2)" }
    ],
    quiz: [
      { q: "x² - 16 factors to (x-4)(x+4). True or false?", type: "choice", opts: ["True", "False"], ans: "True" },
      { q: "Factor: x² + 6x + 9 = ___.", type: "fill", ans: "x+3)^2", sol: "(x+3)² — perfect square" },
      { q: "The GCF of 4x² and 8x is ___.", type: "fill", ans: "4x" },
      { q: "Factor: 2x² - 8 = ___(___.", type: "fill", ans: "2,x²-4", sol: "2(x²-4) = 2(x-2)(x+2)" }
    ]
  },
  {
    id: "ch12",
    g: "8",
    gx: 12,
    loc: "八下 Ch7",
    title: "分式与分式方程 Rational Expressions & Equations",
    coverage: "b",
    think: "What restrictions apply to the denominator of a fraction? What about (x-1)/(x-2)?",
    videos: [
      { title: "Intro to rational expressions", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830489fb:rational-expressions/x2ec2f6f830489fb:intro-rational-expressions/v/intro-to-rational-expressions", duration: "11:07" },
      { title: "Simplifying rational expressions", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830489fb:rational-expressions/x2ec2f6f830489fb:intro-rational-expressions/v/simplifying-rational-expressions-introduction", duration: "8:22" }
    ],
    notes: [
      "Rational expression (分式): fraction with polynomials.",
      "Denominator cannot be zero (分母≠0).",
      "Simplify by factoring numerator and denominator, cancel common factors.",
      "When solving rational equations, check for extraneous solutions (增根)."
    ],
    practice: [
      { q: "For (x+1)/(x-3), x cannot be ___.", type: "fill", ans: "3" },
      { q: "Simplify: (x² - 4)/(x + 2) = ___.", type: "fill", ans: "x-2", sol: "(x+2)(x-2)/(x+2) = x-2, x≠-2" },
      { q: "Multiply: (1/x) × (x/3) = ___.", type: "fill", ans: "1/3" }
    ],
    quiz: [
      { q: "Which value makes (x-5)/(x+1) undefined?", type: "fill", ans: "-1" },
      { q: "Solve: 1/x = 2. x = ___.", type: "fill", ans: "0.5", sol: "1/x = 2 → x = 1/2" },
      { q: "Simplify: (2x + 4)/(x + 2) = ___.", type: "fill", ans: "2", sol: "2(x+2)/(x+2) = 2, x≠-2" },
      { q: "To add rational expressions, find a common ___.", type: "fill", ans: "denominator" }
    ]
  },
  {
    id: "ch13",
    g: "8",
    gx: 13,
    loc: "八下 Ch8",
    title: "反比例函数 Inverse Proportion Functions",
    coverage: "b",
    think: "If y is inversely proportional to x, and y=4 when x=2, what is y when x=4?",
    videos: [
      { title: "Inverse variation", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830489fb:rational-expressions/x2ec2f6f830489fb:inverse-variation/v/inverse-variation-application", duration: "5:42" },
      { title: "Proportionality constants", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830489fb:rational-expressions/x2ec2f6f830489fb:inverse-variation/v/inverse-variation-example", duration: "2:02" }
    ],
    notes: [
      "Inverse proportion (反比例): y = k/x, where k is constant.",
      "As x increases, y decreases; product xy = k (constant).",
      "Graph is a hyperbola (双曲线) in two quadrants.",
      "Direct proportion (正比例): y = kx (straight line through origin)."
    ],
    practice: [
      { q: "If y = 12/x, when x = 3, y = ___.", type: "fill", ans: "4", sol: "12/3 = 4" },
      { q: "If y is inversely proportional to x and y=6 when x=2, find k: y = k/x, k = ___.", type: "fill", ans: "12", sol: "k = xy = 6×2 = 12" },
      { q: "When x doubles in y = k/x, y becomes ___.", type: "choice", opts: ["double", "half", "same"], ans: "half" }
    ],
    quiz: [
      { q: "The graph of y = 8/x passes through point (2, ___).", type: "fill", ans: "4", sol: "y = 8/2 = 4" },
      { q: "For y = k/x, if x > 0, then y > 0. True or false?", type: "choice", opts: ["True (if k>0)", "False"], ans: "True (if k>0)" },
      { q: "Inverse proportion means xy = constant. True or false?", type: "choice", opts: ["True", "False"], ans: "True" },
      { q: "If y = 20/x, when x = 0.5, y = ___.", type: "fill", ans: "40", sol: "20/0.5 = 40" }
    ]
  }
];
