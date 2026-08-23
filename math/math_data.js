// Math Data — Grade 8 (PEP / Shenzhen) · Khan Academy aligned
// Video: Khan Academy — YouTube embed (English original sound)
// Practice & Quiz: English questions matching KA exercise topics

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
    practice: [
      { q: "In a right triangle, the legs are 6 and 8. Find the hypotenuse.", type: "fill", ans: "10", sol: "6² + 8² = 36 + 64 = 100 → √100 = 10" },
      { q: "A right triangle has hypotenuse 13 and one leg 5. Find the other leg.", type: "fill", ans: "12", sol: "13² − 5² = 169 − 25 = 144 → √144 = 12" },
      { q: "Is a triangle with sides 7, 24, 25 a right triangle?", type: "choice", opts: ["Yes", "No"], ans: "Yes", sol: "7² + 24² = 49 + 576 = 625 = 25² ✓" },
      { q: "Find the hypotenuse of a right triangle with legs 9 and 12.", type: "fill", ans: "15", sol: "9² + 12² = 81 + 144 = 225 → √225 = 15" },
      { q: "Two sides of a right triangle are 8 and 15, and 15 is a leg. Find the hypotenuse.", type: "fill", ans: "17", sol: "8² + 15² = 64 + 225 = 289 → √289 = 17" }
    ],
    quiz: [
      { q: "The Pythagorean theorem formula is:", type: "choice", opts: ["a + b = c", "a² + b² = c²", "a × b = c", "a² − b² = c²"], ans: "a² + b² = c²", sol: "The sum of squares of the legs equals the square of the hypotenuse." },
      { q: "In a right triangle, the hypotenuse is always the ___ side.", type: "choice", opts: ["shortest", "longest", "leftmost"], ans: "longest", sol: "The hypotenuse is opposite the right angle and is the longest side." },
      { q: "If the legs are 5 and 12, the hypotenuse is ___.", type: "fill", ans: "13", sol: "5² + 12² = 25 + 144 = 169 → √169 = 13" },
      { q: "A triangle has sides 8, 15, 17. Is it a right triangle?", type: "choice", opts: ["Yes", "No"], ans: "Yes", sol: "8² + 15² = 64 + 225 = 289 = 17² ✓" },
      { q: "A right triangle has hypotenuse 10 and one leg 6. The other leg is ___.", type: "fill", ans: "8", sol: "10² − 6² = 100 − 36 = 64 → √64 = 8" }
    ]
  }
];
