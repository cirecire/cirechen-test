// Math Grade 8 (PEP 2024) — KA-native test build
// coverage: g = KA video + practice + quiz | b = KA video only | p = custom only

var MATH_DATA = [
  {
    id: "ch01",
    g: "8",
    gx: 1,
    loc: "八上 Ch1 · 勾股定理",
    title: "勾股定理 (Pythagorean Theorem)",
    coverage: "g",
    think: "A right triangle has legs 3 cm and 4 cm. How long is the longest side? Try to guess before watching.",
    videos: [
      { t: "Intro to the Pythagorean theorem", url: "https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-pythagorean-theorem/v/pythagorean-theorem", m: "4:01" }
    ],
    notes: [
      "For a right triangle: a² + b² = c² (c = hypotenuse 斜边, the longest side).",
      "You can find any missing side if you know the other two.",
      "Common triples 勾股数: (3,4,5), (5,12,13), (8,15,17).",
      "The theorem also gives the distance between two points on a coordinate plane."
    ],
    practice: {
      ka: "https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-pythagorean-theorem/e/use-pythagorean-theorem-to-find-right-triangle-side-lengths",
      title: "Use Pythagorean theorem to find right triangle side lengths"
    },
    quiz: {
      ka: "https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-pythagorean-theorem/quiz-hs-geo-pythagorean-theorem",
      title: "Pythagorean theorem — Unit Quiz"
    }
  }
];
