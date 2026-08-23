// Math Data — Grade 8 (PEP / Shenzhen) · Khan Academy aligned
// Source: Khan Academy khan-exercises (MIT licensed)
//   pythagorean_theorem_1.html → basic Pythagorean theorem (find hypotenuse / find leg)
//   pythagorean_theorem_2.html → special right triangles (45-45-90 / 30-60-90)
// Video: Khan Academy "The Pythagorean Theorem" (AA6RfgP-AHU, YouTube embed)
// Practice & Quiz: Real KA exercise types, exact wording from khan-exercises repo

var MATH_DATA = [
  {
    id: "ch01", g: "8", gx: 1, loc: "Unit: Geometry",
    title: "Pythagorean Theorem",
    coverage: "g",
    think: "Look at a right triangle whose two short sides are 3 and 4. Before any formula — can you guess the longest side? How would you check your guess?",
    videos: [
      { yt: "AA6RfgP-AHU", t: "The Pythagorean Theorem", m: "English · Khan Academy", duration: "10:45" }
    ],
    notes: [
      "In a right triangle, a² + b² = c², where c is the hypotenuse (the longest side, opposite the right angle).",
      "The hypotenuse is always opposite the 90° angle — identify it first.",
      "Find ANY missing side from the other two: c = √(a² + b²), or a = √(c² − b²).",
      "Common Pythagorean triples: (3,4,5), (5,12,13), (8,15,17).",
      "Converse: if a² + b² = c², the triangle is a right triangle."
    ],
    // KA exercise types from pythagorean_theorem_1.html (basic) + pythagorean_theorem_2.html (special)
    practice: [
      // KA type: find-hypotenuse (pythagorean_theorem_1.html id="find-hypotenuse")
      // In the right triangle shown, AC=6 and BC=8. What is AB?
      { q: "In the right triangle shown, AC = 6 and BC = 8. What is AB?", type: "choice",
        opts: ["7", "10", "14", "48"],
        ans: "10",
        sol: "AB² = AC² + BC² = 6² + 8² = 36 + 64 = 100 → AB = √100 = 10" },
      // KA type: find-a-leg (pythagorean_theorem_1.html id="find-a-leg")
      // Hypotenuse=13, one leg=5, find other leg
      { q: "A right triangle has AB = 13 and BC = 5. What is AC?", type: "choice",
        opts: ["8", "12", "144", "√144"],
        ans: "12",
        sol: "AC² = AB² − BC² = 13² − 5² = 169 − 25 = 144 → AC = √144 = 12" },
      // KA type: find-hypotenuse with a Pythagorean triple check
      { q: "A triangle has sides 7, 24, and 25. Is it a right triangle?", type: "choice",
        opts: ["Yes", "No"],
        ans: "Yes",
        sol: "7² + 24² = 49 + 576 = 625 = 25² ✓ → right triangle by the converse of the Pythagorean theorem." },
      // KA type: 45-45-90 find hypotenuse (pythagorean_theorem_2.html id="45-45-90-find-hypotenuse")
      // Isosceles right triangle, each leg = 5, find hypotenuse = 5√2
      { q: "In a right triangle where AC = BC = 5 and angle C = 90°, what is AB?", type: "choice",
        opts: ["5", "10", "5√2", "25"],
        ans: "5√2",
        sol: "In a 45-45-90 triangle, hypotenuse = leg × √2. AB = 5 × √2 = 5√2" },
      // KA type: 30-60-90 find hypotenuse given short leg (pythagorean_theorem_2.html)
      // Short leg BC = 3, hypotenuse AB = 2 × BC = 6
      { q: "In a right triangle, angle A = 30°, BC = 3, and angle C = 90°. How long is AB?", type: "choice",
        opts: ["3", "6", "3√3", "9"],
        ans: "6",
        sol: "In a 30-60-90 triangle, the hypotenuse is twice the short leg. AB = 2 × 3 = 6" }
    ],
    quiz: [
      // Concept check
      { q: "The Pythagorean theorem formula is:", type: "choice",
        opts: ["a + b = c", "a² + b² = c²", "a × b = c", "a² − b² = c²"],
        ans: "a² + b² = c²",
        sol: "The sum of the squares of the two legs equals the square of the hypotenuse." },
      // Find hypotenuse (fill-in, KA find-hypotenuse)
      { q: "In a right triangle, legs are 5 and 12. The hypotenuse is ___.", type: "fill",
        ans: "13",
        sol: "c² = 5² + 12² = 25 + 144 = 169 → c = √169 = 13" },
      // Pythagorean triple (fill-in)
      { q: "A triangle has sides 8, 15, and 17. Is it a right triangle? (Type Yes or No)", type: "fill",
        ans: "Yes",
        sol: "8² + 15² = 64 + 225 = 289 = 17² ✓ → yes, by the converse." },
      // Find a leg (fill-in, KA find-a-leg)
      { q: "A right triangle has hypotenuse 10 and one leg 6. The other leg is ___.", type: "fill",
        ans: "8",
        sol: "a² = c² − b² = 10² − 6² = 100 − 36 = 64 → a = √64 = 8" },
      // 30-60-90 concept
      { q: "In a 30-60-90 triangle, the long leg is ___ times the short leg.", type: "choice",
        opts: ["√2", "√3", "2", "1/2"],
        ans: "√3",
        sol: "The ratio of long leg : short leg in a 30-60-90 triangle is √3 : 1." }
    ]
  }
];
