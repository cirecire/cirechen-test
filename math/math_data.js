var MATH_DATA = [
  { // ch01
      id: "ch01",
      g: "8",
      gx: 1,
      title: "Pythagorean Theorem",
      coverage: "g",
      think: "A right triangle has legs $a$ and $b$, and hypotenuse $c$. What relationship connects them? Try a 3-4-5 triangle: does $3^2 + 4^2 = 5^2$?",
      videos: [
        { yt: "LrS5_l-gk94", t: "Pythagorean Theorem Proof Using Similarity", m: "English \u00b7 Khan Academy", duration: "~10 min", local: "../videos/Ch01_勾股定理/09_Pythagorean theorem proof using similarity.mp4", ka: "https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-pythagorean-proofs/v/pythagorean-theorem-proof-using-similarity" }
      ],
      notes: [
    "In a right triangle (\u76f4\u89d2\u4e09\u89d2\u5f62): $a^2 + b^2 = c^2$, where $c$ is the hypotenuse (\u659c\u8fb9, opposite the right angle).",
    "Find hypotenuse: $c = \sqrt{a^2+b^2}$. Find a leg: $a = \sqrt{c^2-b^2}$.",
    "Pythagorean triples (\u52a0\u80a1\u6570): $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$.",
    "Distance formula (\u8ddd\u79bb\u516c\u5f0f): $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.",
      ],
      practice: [
        {
          q: "Find $x$ in the right triangle shown.",
          options: ["$x = \\sqrt{11}$","$x = \\sqrt{61}$","$x = 11$","$x = 30$"],
          ansIdx: 0,
          sol: "The hypotenuse is $6$, one leg is $5$. By the Pythagorean theorem: $x^2 = 6^2 - 5^2 = 36 - 25 = 11$, so $x = \\sqrt{11}$.",
        },
        {
          q: "Find $x$ (the hypotenuse) in the right triangle shown.",
          options: ["$x = \\sqrt{80}$","$x = \\sqrt{48}$","$x = \\sqrt{32}$","$x = \\sqrt{12}$"],
          ansIdx: 0,
          sol: "Both legs are known: $8$ and $4$. $x^2 = 8^2 + 4^2 = 64 + 16 = 80$, so $x = \\sqrt{80}$.",
        },
        {
          q: "Find $x$ in the right triangle shown.",
          options: ["$x = 2$","$x = 3$","$x = \\sqrt{20}$","$x = \\sqrt{36}$"],
          ansIdx: 1,
          sol: "The hypotenuse is $5$, one leg is $4$. $x^2 = 5^2 - 4^2 = 25 - 16 = 9$, so $x = \\sqrt{9} = 3$.",
        },
        {
          q: "Find $x$ (the hypotenuse) in the right triangle shown.",
          options: ["$x = 5$","$x = \\sqrt{7}$","$x = 7$","$x = 25$"],
          ansIdx: 0,
          sol: "Classic 3-4-5 right triangle: $x^2 = 3^2 + 4^2 = 9 + 16 = 25$, so $x = \\sqrt{25} = 5$.",
        },
        {
          q: "Find $x$ in the right triangle shown.",
          options: ["$x = 8$","$x = \\sqrt{8}$","$x = \\sqrt{6}$","$x = \\sqrt{12}$"],
          ansIdx: 3,
          sol: "The hypotenuse is $4$, one leg is $2$. $x^2 = 4^2 - 2^2 = 16 - 4 = 12$, so $x = \\sqrt{12}$.",
        },
        {
          q: "Find $x$ (the hypotenuse) in the right triangle shown.",
          options: ["$x = \\sqrt{20}$","$x = \\sqrt{41}$","$x = 3$","$x = 9$"],
          ansIdx: 1,
          sol: "Both legs are known: $5$ and $4$. $x^2 = 5^2 + 4^2 = 25 + 16 = 41$, so $x = \\sqrt{41}$.",
        },
        {
          q: "Find $x$ in the right triangle shown.",
          options: ["$x = \\sqrt{135}$","$x = 12$","$x = 24$","$x = \\sqrt{24}$"],
          ansIdx: 1,
          sol: "The hypotenuse is $15$, one leg is $9$. $x^2 = 15^2 - 9^2 = 225 - 81 = 144$, so $x = \\sqrt{144} = 12$. (9-12-15 is a multiple of 3-4-5.)",
        }
      ],
      quiz: [
        {
          q: "A 15-foot ladder leans against a wall. Its base is 9 feet from the wall. How high up the wall does the ladder reach?",
          options: ["$12$ ft","$6$ ft","$10$ ft","$24$ ft"],
          ansIdx: 0,
          sol: "The ladder is the hypotenuse ($15$), the ground distance is one leg ($9$). $x^2 = 15^2 - 9^2 = 225 - 81 = 144$, so $x = 12$ ft. (9-12-15 is a 3-4-5 multiple.)",
        },
        {
          q: "Two points are 3 units apart horizontally and 4 units apart vertically. What is the distance between them?",
          options: ["$5$","$\\sqrt{7}$","$7$","$25$"],
          ansIdx: 0,
          sol: "Form a right triangle: $d^2 = 3^2 + 4^2 = 9 + 16 = 25$, so $d = \\sqrt{25} = 5$.",
        },
        {
          q: "Which set of side lengths can form a right triangle?",
          options: ["$3, 4, 5$","$2, 3, 4$","$5, 6, 7$","$1, 2, 3$"],
          ansIdx: 0,
          sol: "Check $3^2 + 4^2 = 9 + 16 = 25 = 5^2$. The others fail the Pythagorean theorem, so only $(3,4,5)$ works.",
        }
      ]
  },

  { // ch02
      id: "ch02",
      g: "8",
      gx: 2,
      title: "Real Numbers",
      coverage: "g",
      think: "$\\sqrt{2} \\approx 1.41421356...$ — can you write it as a fraction of two integers? What does this tell us about $\\sqrt{2}$?",
      videos: [
        { yt: "SH_6A-K5bjY", t: "Introduction to Square Roots", m: "English · Khan Academy", duration: "~5 min", local: "../videos/Ch02_实数/07_Introduction to square roots.mp4", ka: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:rational-exponents-radicals/x2f8bb11595b61c86:radicals/v/introduction-to-square-roots" }
      ],
      notes: [
    "Square root（平方根）: $\sqrt{a}$ is the number whose square is $a$. Default = principal (non-negative) root.",
    "$\sqrt{a^2} = |a|$; $(-3)^2 = 9$, so $\sqrt{9} = 3$ (not $-3$).",
    "Cube root（立方根）: $\sqrt[3]{a}$ — can be negative, since $(-2)^3 = -8$, so $\sqrt[3]{-8} = -2$.",
    "Rational number（有理数）: can be written as $\rac{p}{q}$ where $p, q$ are integers, $q \
eq 0$. Decimals are terminating or repeating.",
    "Irrational number（无理数）: non-terminating, non-repeating decimals. Examples: $\sqrt{2}$, $\pi$, $e$.",
    "Real numbers（实数） = rational + irrational. Every point on the number line is a real number.",
    "Laws: $\sqrt{ab} = \sqrt{a}\sqrt{b}$, $\sqrt{\rac{a}{b}} = \rac{\sqrt{a}}{\sqrt{b}}$.",
      ],
      practice: [
        {
          q: "Simplify: $\\sqrt{72}$.",
          options: ["$6\\sqrt{2}$","$12\\sqrt{6}$","$2\\sqrt{18}$","$36\\sqrt{2}$"],
          ansIdx: 0,
          sol: "$\\sqrt{72}=\\sqrt{36\\cdot2}=\\sqrt{36}\\cdot\\sqrt{2}=6\\sqrt{2}$.",
        },
        {
          q: "Evaluate: $\\sqrt[3]{-27}$.",
          options: ["$3$","$-3$","$9$","$-9$"],
          ansIdx: 1,
          sol: "Since $(-3)^3=-27$, $\\sqrt[3]{-27}=-3$.",
        },
        {
          q: "Classify $\\sqrt{16}$ as rational or irrational.",
          options: ["Rational","Irrational","Both","Neither"],
          ansIdx: 0,
          sol: "$\\sqrt{16}=4=\\frac{4}{1}$, a ratio of two integers — rational.",
        },
        {
          q: "Between which two consecutive integers does $\\sqrt{50}$ lie?",
          options: ["$5$ and $6$","$6$ and $7$","$7$ and $8$","$8$ and $9$"],
          ansIdx: 2,
          sol: "$7^2=49$, $8^2=64$. Since $49<50<64$, $7<\\sqrt{50}<8$.",
        },
        {
          q: "Simplify: $\\sqrt{72} \\times \\sqrt{3}$.",
          options: ["$6\\sqrt{6}$","$12\\sqrt{6}$","$6\\sqrt{2}$","$18\\sqrt{6}$"],
          ansIdx: 1,
          sol: "$\\sqrt{72}\\times\\sqrt{3}=\\sqrt{72\\cdot3}=\\sqrt{216}=6\\sqrt{6}$.",
        }
      ],
      quiz: [
        {
          q: "Which of the following is irrational?",
          options: ["$\\sqrt{4}$","$\\sqrt{9}$","$\\sqrt{2}$","$\\frac{3}{4}$"],
          ansIdx: 2,
          sol: "$\\sqrt{2}\\approx 1.414...$ is non-repeating, non-terminating — irrational.",
        },
        {
          q: "Simplify $\\sqrt{50}$ completely.",
          options: ["$2\\sqrt{25}$","$5\\sqrt{2}$","$25\\sqrt{2}$","$10\\sqrt{5}$"],
          ansIdx: 1,
          sol: "$\\sqrt{50}=\\sqrt{25\\cdot2}=5\\sqrt{2}$.",
        },
        {
          q: "Classify the number $0.333...$ (repeating).",
          options: ["Integer","Rational","Irrational","Natural"],
          ansIdx: 1,
          sol: "Repeating decimals are rational. $0.\\overline{3}=\\frac{1}{3}$.",
        }
      ]
  },

  { // ch03
      id: "ch03",
      g: "8",
      gx: 3,
      title: "Position & Coordinate Plane",
      coverage: "g",
      think: "If you walk 3 blocks east and 4 blocks north, how far are you from your starting point? Can you draw this on a grid?",
      videos: [
        { yt: "Q7NEzE6R5yg", t: "Introduction to the Coordinate Plane", m: "English · Khan Academy", duration: "~7 min", local: "../videos/Ch03_位置与坐标/01_Introduction to the coordinate plane.mp4", ka: "https://www.khanacademy.org/math/in-in-grade-9-ncert/xfd53e0255cd302f8:coordinate-geometry/xfd53e0255cd302f8:cartesian-system/v/introduction-to-the-coordinate-plane" }
      ],
      notes: [
    "Coordinate plane（平面直角坐标系）: x-axis (horizontal) and y-axis (vertical), intersecting at origin $O(0,0)$.",
    "Quadrants（象限）: Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-).",
    "Distance formula（距离公式）: $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ — derived from Pythagorean theorem.",
    "Midpoint formula（中点公式）: $M = \left(\rac{x_1+x_2}{2}, \rac{y_1+y_2}{2}\
ight)$.",
    "Reflection over x-axis: $(x,y) \
ightarrow (x,-y)$; over y-axis: $(x,y) \
ightarrow (-x,y)$.",
      ],
      practice: [
        {
          q: "Plot the points $A(3, 2)$ and $B(-1, 5)$. Find the distance between them.",
          ansIdx: undefined,
          sol: "$d = \\sqrt{(3-(-1))^2 + (2-5)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.",
        },
        {
          q: "Find the midpoint of the segment joining $P(2, 6)$ and $Q(8, -2)$.",
          ansIdx: undefined,
          sol: "$M = \\left(\\\frac{2+8}{2}, \\\frac{6+(-2)}{2}\\\right) = (5, 2)$.",
        },
        {
          q: "What is the reflection of point $(4, -3)$ across the x-axis?",
          ansIdx: undefined,
          sol: "Reflection over x-axis changes the sign of the y-coordinate: $(4, -3) \\\rightarrow (4, 3)$.",
        },
        {
          q: "In which quadrant is the point $(-5, 2)$ located?",
          ansIdx: undefined,
          sol: "Negative x, positive y → Quadrant II (upper left).",
        },
        {
          q: "Find the perimeter of the triangle with vertices $A(0,0)$, $B(3,0)$, and $C(0,4)$.",
          ansIdx: undefined,
          sol: "$AB = 3$, $AC = 4$, $BC = \\sqrt{3^2+4^2} = 5$. Perimeter = $3+4+5 = 12$.",
        }
      ],
      quiz: [
        {
          q: "The distance from $(0,0)$ to $(6,8)$ is:",
          options: ["$6$","$8$","$10$","$14$"],
          ansIdx: undefined,
          sol: "$d = \\sqrt{6^2 + 8^2} = \\sqrt{36+64} = \\sqrt{100} = 10$.",
        },
        {
          q: "Find the midpoint of $(-4, 6)$ and $(2, -2)$.",
          ansIdx: undefined,
          sol: "$\\left(\\\frac{-4+2}{2}, \\\frac{6+(-2)}{2}\\\right) = (-1, 2)$.",
        },
        {
          q: "Which point is in Quadrant III?",
          options: ["$(2, 3)$","$(-2, 3)$","$(-2, -3)$","$(2, -3)$"],
          ansIdx: undefined,
          sol: "Q3 has both coordinates negative.",
        }
      ]
  },

  { // ch04
      id: "ch04",
      g: "8",
      gx: 4,
      title: "Linear Functions",
      coverage: "g",
      think: "A taxi charges $\\$3$ base fare plus $\\$2$ per km. Write an equation for the total cost $y$ in terms of distance $x$. Is this a function?",
      videos: [
        { yt: "M0E1Pb3bHjw", t: "What is a Function?", m: "English · Khan Academy", duration: "~8 min", local: "../videos/Ch04_一次函数/01_What is a function-.mp4", ka: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions/introduction-to-functions/v/what-is-a-function" }
      ],
      notes: [
    "Function（函数）: each input $x$ has exactly one output $y$. Notation: $f(x)$.",
    "Linear function（一次函数）: $y = mx + b$ or $f(x) = mx + b$.",
    "Slope（斜率）$m = \rac{\Delta y}{\Delta x} = \rac{y_2-y_1}{x_2-x_1}$ — rate of change.",
    "y-intercept（y轴截距）$b$: where line crosses y-axis; x-intercept: where $y=0$.",
    "Slope-intercept form（斜截式）: $y = mx + b$ — easiest for graphing.",
    "Parallel lines have equal slopes; perpendicular lines have slopes that are negative reciprocals ($m_1 \cdot m_2 = -1$).",
      ],
      practice: [
        {
          q: "Find the slope of the line through $(2, 5)$ and $(6, 13)$.",
          ansIdx: undefined,
          sol: "$m = \\\frac{13-5}{6-2} = \\\frac{8}{4} = 2$.",
        },
        {
          q: "Write the equation of the line with slope $-3$ passing through $(0, 4)$.",
          ansIdx: undefined,
          sol: "Using $y = mx + b$: $m = -3$, $b = 4$ (y-intercept).",
        },
        {
          q: "Find the x-intercept of $y = 2x - 6$.",
          ansIdx: undefined,
          sol: "Set $y=0$: $0 = 2x - 6$, so $x = 3$.",
        },
        {
          q: "Are the lines $y = 2x + 1$ and $y = 2x - 5$ parallel, perpendicular, or neither?",
          ansIdx: undefined,
          sol: "Both have slope $m = 2$, so they are parallel.",
        },
        {
          q: "Find the slope of a line perpendicular to $y = \\\frac{1}{3}x + 2$.",
          ansIdx: undefined,
          sol: "Negative reciprocal of $\\\frac{1}{3}$ is $-3$.",
        }
      ],
      quiz: [
        {
          q: "If $f(x) = 3x - 7$, what is $f(4)$?",
          options: ["$5$","$12$","$19$","$-5$"],
          ansIdx: undefined,
          sol: "$f(4) = 3(4) - 7 = 12 - 7 = 5$.",
        },
        {
          q: "The line $y = -2x + 5$ has slope and y-intercept:",
          options: ["$m=2, b=5$","$m=-2, b=5$","$m=5, b=-2$","$m=-5, b=2$"],
          ansIdx: undefined,
          sol: "In $y = mx + b$, $m = -2$ and $b = 5$.",
        },
        {
          q: "Which line is perpendicular to $y = 4x + 1$?",
          options: ["$y = 4x - 3$","$y = -4x + 2$","$y = -\\\frac{1}{4}x + 5$","$y = \\\frac{1}{4}x$"],
          ansIdx: undefined,
          sol: "Perpendicular slopes are negative reciprocals: $-\\\frac{1}{4}$.",
        }
      ]
  },

  { // ch05
      id: "ch05",
      g: "8",
      gx: 5,
      title: "Systems of Linear Equations",
      coverage: "g",
      think: "You buy 3 apples and 2 bananas for $\\$11$. Your friend buys 2 apples and 3 bananas for $\\$9$. Can you find the price of each fruit?",
      videos: [
        { yt: "OcNt-ikp4xA", t: "Solving Linear Systems by Graphing (Intro)", m: "English · Khan Academy", duration: "~8 min", local: "../videos/Ch05_二元一次方程组/01_Solving linear systems by graphing (intro).mp4", ka: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations/x2f8bb11595b61c86:systems-of-equations-intro/v/solving-linear-systems-by-graphing" }
      ],
      notes: [
    "System of equations（方程组）: two or more equations with the same variables.",
    "Solution: values that satisfy ALL equations simultaneously.",
    "Substitution method（代入法）: solve one equation for one variable, substitute into the other.",
    "Elimination method（加减/消元法）: add/subtract equations to eliminate one variable.",
    "Graphing method（图像法）: find intersection point of two lines.",
    "Types of solutions: one unique solution (intersecting lines), no solution (parallel lines), infinitely many (same line).",
      ],
      practice: [
        {
          q: "Solve: $x + y = 7$ and $x - y = 3$.",
          ansIdx: undefined,
          sol: "Add equations: $2x = 10$, so $x = 5$. Substitute: $5 + y = 7$, so $y = 2$.",
        },
        {
          q: "Solve by substitution: $y = 2x + 1$ and $3x + 2y = 12$.",
          ansIdx: undefined,
          sol: "Substitute: $3x + 2(2x+1) = 12$, so $7x + 2 = 12$, $x = 2$, then $y = 5$.",
        },
        {
          q: "How many solutions? $2x + y = 4$ and $4x + 2y = 8$.",
          ansIdx: undefined,
          sol: "Second equation is $2 \\\times$ first. Same line → infinitely many solutions.",
        },
        {
          q: "A rectangle has perimeter 30. The length is 3 more than the width. Find dimensions.",
          ansIdx: undefined,
          sol: "$2L + 2W = 30$ and $L = W + 3$. Solve: $W = 6, L = 9$.",
        },
        {
          q: "Solve: $3x + 2y = 12$ and $5x - 2y = 4$.",
          ansIdx: undefined,
          sol: "Add to eliminate $y$: $8x = 16$, so $x = 2$. Then $3(2) + 2y = 12$, so $y = 3$.",
        }
      ],
      quiz: [
        {
          q: "The system $y = 2x + 1$ and $y = 2x - 3$ has:",
          options: ["One solution","No solution","Infinitely many","Two solutions"],
          ansIdx: undefined,
          sol: "Same slope ($2$), different intercepts → parallel lines, never intersect.",
        },
        {
          q: "Solve: $2x + 3y = 12$ and $x = 4$. Find $y$.",
          ansIdx: undefined,
          sol: "Substitute $x = 4$: $2(4) + 3y = 12$, so $3y = 4$, $y = \\\frac{4}{3}$.",
        },
        {
          q: "A system has solution $(3, -1)$. Which equations could it be?",
          options: ["$x+y=2$ and $x-y=4$","$x+y=2$ and $2x+y=5$","$x-y=4$ and $2x+y=5$","Both first and third"],
          ansIdx: undefined,
          sol: "Check: $3 + (-1) = 2$ ✓, $3 - (-1) = 4$ ✓, $2(3) + (-1) = 5$ ✓.",
        }
      ]
  },

  { // ch06
      id: "ch06",
      g: "8",
      gx: 6,
      title: "Data Analysis",
      coverage: "g",
      think: "Five students scored: 72, 85, 85, 90, 98. Which number best represents 'typical' performance? Why might you choose a different one?",
      videos: [
        { yt: "k3aKKasOmIw", t: "Statistics Intro: Mean, Median, & Mode", m: "English · Khan Academy", duration: "~9 min", local: "../videos/Ch06_数据的分析/01_Finding mean, median, and mode.mp4", ka: "https://www.khanacademy.org/math/statistics-probability/xa9c5124c69e541e2:introduction-to-statistics/xa9c5124c69e541e2:statistics-intro/v/statistics-intro-mean-median-and-mode" }
      ],
      notes: [
    "Mean（平均数）: $\ar{x} = \rac{\sum x_i}{n}$ — affected by outliers.",
    "Median（中位数）: middle value when ordered — robust to outliers.",
    "Mode（众数）: most frequent value — useful for categorical data.",
    "Range（极差）: max − min — simple spread measure.",
    "MAD (Mean Absolute Deviation): average distance from mean.",
    "Standard deviation（标准差）: $s = \sqrt{\rac{\sum(x_i - \ar{x})^2}{n-1}}$ — spread measure.",
    "Box plot（箱线图）: shows Q1, median, Q3, IQR, outliers.",
      ],
      practice: [
        {
          q: "Find the mean, median, and mode of: $5, 7, 8, 8, 10, 12$.",
          ansIdx: undefined,
          sol: "Mean = $\\\frac{50}{6} \\approx 8.33$. Ordered: middle is $8$. Mode is $8$ (appears twice).",
        },
        {
          q: "Data: $2, 5, 7, 10, 15$. Find the range and IQR.",
          ansIdx: undefined,
          sol: "Range = $15 - 2 = 13$. Q1 = $5$, Q3 = $10$, IQR = $10 - 5 = 5$.",
        },
        {
          q: "Which is more affected by an outlier: mean or median?",
          ansIdx: undefined,
          sol: "Mean uses all values; median only depends on middle position.",
        },
        {
          q: "Find the standard deviation of: $3, 5, 7$.",
          ansIdx: undefined,
          sol: "Mean = $5$. Deviations: $-2, 0, 2$. Squared: $4, 0, 4$. Variance = $\\\frac{8}{2} = 4$. SD = $\\sqrt{4} = 2$.",
        },
        {
          q: "In a box plot, what does the box represent?",
          ansIdx: undefined,
          sol: "Box spans Q1 to Q3, containing the middle 50% of observations.",
        }
      ],
      quiz: [
        {
          q: "Data: $12, 15, 18, 20, 100$. Which measure of center is least affected by the outlier 100?",
          options: ["Mean","Median","Mode","Range"],
          ansIdx: undefined,
          sol: "Median = $18$ (middle value). Mean would be pulled up by 100.",
        },
        {
          q: "If all values in a dataset increase by 5, what happens to the standard deviation?",
          options: ["Increases by 5","Stays the same","Decreases by 5","Becomes 0"],
          ansIdx: undefined,
          sol: "Adding a constant shifts all data but doesn't change spread.",
        },
        {
          q: "In a symmetric distribution, mean and median are:",
          options: ["Always equal","Always different","Sometimes equal","Cannot determine"],
          ansIdx: undefined,
          sol: "Symmetry ensures mean = median = mode.",
        }
      ]
  },

  { // ch07
      id: "ch07",
      g: "8",
      gx: 7,
      title: "Foundations of Geometric Proof",
      coverage: "g",
      think: "How can you be absolutely sure that the angles in every triangle add to 180°? Is measuring one triangle enough?",
      videos: [
        { yt: "gRKZaojKeP0", t: "Angles Formed by Parallel Lines and Transversals", m: "English · Khan Academy", duration: "~7 min", local: "../videos/Ch07_平行线的证明/01_Angles formed by parallel lines and transversals.mp4", ka: "https://www.khanacademy.org/math/geometry-home/geometry-angles/old-angles/v/angles-formed-by-parallel-lines-and-transversals" }
      ],
      notes: [
    "Proposition（命题）: a statement that is either true or false.",
    "Theorem（定理）: a proposition that has been proven true.",
    "Proof（证明）: logical argument from axioms/definitions to conclusion.",
    "Parallel lines & transversal（平行线与截线）: corresponding angles equal, alternate interior angles equal, consecutive interior angles supplementary.",
    "Triangle Angle Sum Theorem（三角形内角和定理）: $\angle A + \angle B + \angle C = 180°$ — proven using parallel lines.",
    "Congruent triangles（全等三角形）: SSS, SAS, ASA, AAS, HL (Hypotenuse-Leg for right triangles).",
    "CPCTC: Corresponding Parts of Congruent Triangles are Congruent.",
    "Isosceles triangle（等腰三角形）: base angles equal; converse also true.",
      ],
      practice: [
        {
          q: "Two parallel lines are cut by a transversal. If one angle is $70°$, find its corresponding angle.",
          ansIdx: undefined,
          sol: "Corresponding angles are equal when lines are parallel.",
        },
        {
          q: "In $\\\triangle ABC$, $\\angle A = 50°$ and $\\angle B = 60°$. Find $\\angle C$.",
          ansIdx: undefined,
          sol: "$\\angle C = 180° - 50° - 60° = 70°$.",
        },
        {
          q: "Which congruence criterion applies? Two sides and the included angle are equal.",
          ansIdx: undefined,
          sol: "Side-Angle-Side: two sides and the included angle determine a unique triangle.",
        },
        {
          q: "In isosceles $\\\triangle XYZ$ with $XY = XZ$, if $\\angle Y = 40°$, find $\\angle Z$ and $\\angle X$.",
          ansIdx: undefined,
          sol: "Base angles equal: $\\angle Z = 40°$. Then $\\angle X = 180° - 40° - 40° = 100°$.",
        },
        {
          q: "Prove: If two angles of a triangle are equal, then the sides opposite them are equal.",
          ansIdx: undefined,
          sol: "This is the converse of the base angles theorem. Can be proven by drawing an angle bisector and using AAS congruence.",
        }
      ],
      quiz: [
        {
          q: "Which of the following is NOT a valid triangle congruence criterion?",
          options: ["SSS","SAS","AAA","HL"],
          ansIdx: undefined,
          sol: "AAA proves similarity, not congruence (triangles can have same angles but different sizes).",
        },
        {
          q: "In the diagram, $l \\parallel m$ and $\\angle 1 = 110°$. Find $\\angle 2$ (alternate interior angle).",
          ansIdx: undefined,
          sol: "Alternate interior angles are equal when lines are parallel.",
        },
        {
          q: "$\\\triangle ABC \\cong \\\triangle DEF$ by SAS. If $AB = 5$ and $BC = 7$, which side in $\\\triangle DEF$ equals $7$?",
          options: ["$DE$","$EF$","$DF$","Cannot determine"],
          ansIdx: undefined,
          sol: "Corresponding to $BC$ is $EF$. CPCTC: corresponding parts of congruent triangles are congruent.",
        }
      ]
  }
];
