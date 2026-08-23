// Math Data — Grade 8 (PEP / Shenzhen) · Khan Academy aligned
// Source: Khan Academy khan-exercises (MIT licensed)
//   pythagorean_theorem_1.html  → basic Pythagorean theorem
//   pythagorean_theorem_2.html  → special right triangles
//   triangle_angles_1.html      → triangle angle sum
//   angle_types.html             → acute/right/obtuse angles
//   graphing_linear_equations.html → coordinate plane + linear graphs
// Video: Khan Academy "The Pythagorean Theorem" (AA6RfgP-AHU)
// Practice: KA exercise types with exact wording + SVG diagrams
// All LaTeX math uses $...$ (rendered by KaTeX CDN)

var MATH_DATA = [
  {
    id: "ch01", g: "8", gx: 1, loc: "Unit: Geometry",
    title: "Pythagorean Theorem",
    coverage: "g",
    think: "A right triangle has two short sides of 3 cm and 4 cm. Can you guess the longest side without using any formula? How would you check your guess?",
    videos: [
      { yt: "AA6RfgP-AHU", t: "The Pythagorean Theorem", m: "English · Khan Academy", duration: "10:45" }
    ],
    notes: [
      "In a right triangle, $a^2 + b^2 = c^2$, where $c$ is the hypotenuse (opposite the right angle).",
      "The hypotenuse is always the longest side.",
      "Find any missing side: $c = \\sqrt{a^2 + b^2}$ or $a = \\sqrt{c^2 - b^2}$.",
      "Common Pythagorean triples: $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$.",
      "Converse: if $a^2 + b^2 = c^2$, the triangle is a right triangle."
    ],
    practice: [
      // KA: find-hypotenuse (pythagorean_theorem_1.html)
      { q: "In the right triangle shown, $AC = 6$ and $BC = 8$. What is $AB$?",
        dia: { type:"triangle", w:8, h:6, A:"A", B:"B", C:"C", a:"8", b:"6", c:"?" },
        ans: "10",
        sol: "Apply the Pythagorean theorem: $AB^2 = AC^2 + BC^2 = 6^2 + 8^2 = 36 + 64 = 100$, so $AB = \\sqrt{100} = 10$." },
      // KA: find-a-leg
      { q: "In the right triangle shown, $AC = 12$ and $AB = 13$. What is $BC$?",
        dia: { type:"triangle", w:5, h:12, A:"A", B:"B", C:"C", a:"?", b:"12", c:"13" },
        ans: "12",
        sol: "$BC^2 = AB^2 - AC^2 = 13^2 - 12^2 = 169 - 144 = 25$, so $BC = \\sqrt{25} = 12$." },
      // KA: Pythagorean triple check (no diagram needed)
      { q: "A triangle has sides 7, 24, and 25. Is it a right triangle?",
        ans: "Yes",
        sol: "$7^2 + 24^2 = 49 + 576 = 625 = 25^2$. Since $a^2 + b^2 = c^2$, it is a right triangle (converse of the Pythagorean theorem)." },
      // KA: 45-45-90 find hypotenuse (pythagorean_theorem_2.html)
      { q: "In the right triangle shown, $AC = BC = 5$ and $\\angle C = 90°$. What is $AB$?",
        dia: { type:"triangle", w:5, h:5, A:"A", B:"B", C:"C", a:"5", b:"5", c:"?" },
        ans: "$5\\sqrt{2}$",
        sol: "In a 45-45-90 triangle, the hypotenuse equals leg × $\\sqrt{2}$. Here $AB = 5 \\times \\sqrt{2} = 5\\sqrt{2}$." },
      // KA: 30-60-90 find hypotenuse given short leg
      { q: "In the right triangle shown, $\\angle A = 30°$ and $BC = 3$. What is $AB$?",
        dia: { type:"triangle30_60_90", short:3, long:3, hyp:6, angleAt:"A" },
        ans: "6",
        sol: "In a 30-60-90 triangle, the hypotenuse is twice the short leg: $AB = 2 \\times 3 = 6$." }
    ],
    quiz: [
      // Concept — no diagram
      { q: "The Pythagorean theorem formula is:",
        ans: "$a^2 + b^2 = c^2$",
        sol: "The sum of the squares of the two legs equals the square of the hypotenuse." },
      // Find hypotenuse
      { q: "In the right triangle shown, $AC = 5$ and $BC = 12$. What is $AB$?",
        dia: { type:"triangle", w:12, h:5, A:"A", B:"B", C:"C", a:"12", b:"5", c:"?" },
        ans: "13",
        sol: "$AB^2 = 5^2 + 12^2 = 25 + 144 = 169$, so $AB = \\sqrt{169} = 13$." },
      // Pythagorean triple
      { q: "A triangle has sides 8, 15, and 17. Is it a right triangle? (Type Yes or No)",
        ans: "Yes",
        sol: "$8^2 + 15^2 = 64 + 225 = 289 = 17^2$. Yes, by the converse of the Pythagorean theorem." },
      // Find a leg
      { q: "In the right triangle shown, $AB = 10$ and $BC = 6$. What is $AC$?",
        dia: { type:"triangle", w:6, h:8, A:"A", B:"B", C:"C", a:"6", b:"?", c:"10" },
        ans: "8",
        sol: "$AC^2 = AB^2 - BC^2 = 10^2 - 6^2 = 100 - 36 = 64$, so $AC = \\sqrt{64} = 8$." },
      // 30-60-90 ratio
      { q: "In a 30-60-90 triangle, the long leg is ___ times the short leg.",
        ans: "$\\sqrt{3}$",
        sol: "The ratio long leg : short leg in a 30-60-90 triangle is $\\sqrt{3} : 1$, so the long leg is $\\sqrt{3}$ times the short leg." }
    ]
  }
];
