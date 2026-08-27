var MATH_DATA = [
  /* ══════════════════════════════════════════════════════════════
     Ch01  勾股定理  Pythagorean Theorem
     教材：北师大版·八年级数学（上册） 第1章
  ══════════════════════════════════════════════════════════════ */  {
    id: "ch01",
    g: "8",
    gx: 1,
    title: "Pythagorean Theorem",
    coverage: "g",
    think: "A right triangle has legs $a$ and $b$, and hypotenuse $c$. What relationship connects them? Try a 3-4-5 triangle: does $3^2 + 4^2 = 5^2$?",
    videos: [{yt: "ni7pL02x7q0", title: "The Pythagorean theorem"}],
    notes: [
      "In a right triangle (\\u76f4\\u89d2\\u4e09\\u89d2\\u5f62): $a^2 + b^2 = c^2$, where $c$ is the hypotenuse (\\u659c\\u8fb9, opposite the right angle).",
      "Find hypotenuse: $c = \\sqrt{a^2+b^2}$. Find a leg: $a = \\sqrt{c^2-b^2}$.",
      "Pythagorean triples (\\u52a0\\u80a1\\u6570): $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$.",
      "Distance formula (\\u8ddd\\u79bb\\u516c\\u5f0f): $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$."
    ],
    practice: [
      {
        q: "Find $x$ in the right triangle shown.",
        dia: { type: "triangle", w: 5, h: 3, A: "A", B: "B", C: "C", a: "5", b: "x", c: "6" },
        options: ["$x = \\sqrt{11}$", "$x = \\sqrt{61}$", "$x = 11$", "$x = 30$"],
        ansIdx: 0,
        sol: "The hypotenuse is $6$, one leg is $5$. By the Pythagorean theorem: $x^2 = 6^2 - 5^2 = 36 - 25 = 11$, so $x = \\sqrt{11}$."
      },
      {
        q: "Find $x$ (the hypotenuse) in the right triangle shown.",
        dia: { type: "triangle", w: 8, h: 4, A: "A", B: "B", C: "C", a: "8", b: "4", c: "x" },
        options: ["$x = \\sqrt{80}$", "$x = \\sqrt{48}$", "$x = \\sqrt{32}$", "$x = \\sqrt{12}$"],
        ansIdx: 0,
        sol: "Both legs are known: $8$ and $4$. $x^2 = 8^2 + 4^2 = 64 + 16 = 80$, so $x = \\sqrt{80}$."
      },
      {
        q: "Find $x$ in the right triangle shown.",
        dia: { type: "triangle", w: 4, h: 3, A: "A", B: "B", C: "C", a: "4", b: "x", c: "5" },
        options: ["$x = 2$", "$x = 3$", "$x = \\sqrt{20}$", "$x = \\sqrt{36}$"],
        ansIdx: 1,
        sol: "The hypotenuse is $5$, one leg is $4$. $x^2 = 5^2 - 4^2 = 25 - 16 = 9$, so $x = \\sqrt{9} = 3$."
      },
      {
        q: "Find $x$ (the hypotenuse) in the right triangle shown.",
        dia: { type: "triangle", w: 3, h: 4, A: "A", B: "B", C: "C", a: "3", b: "4", c: "x" },
        options: ["$x = 5$", "$x = \\sqrt{7}$", "$x = 7$", "$x = 25$"],
        ansIdx: 0,
        sol: "Classic 3-4-5 right triangle: $x^2 = 3^2 + 4^2 = 9 + 16 = 25$, so $x = \\sqrt{25} = 5$."
      },
      {
        q: "Find $x$ in the right triangle shown.",
        dia: { type: "triangle", w: 2, h: 3, A: "A", B: "B", C: "C", a: "2", b: "x", c: "4" },
        options: ["$x = 8$", "$x = \\sqrt{8}$", "$x = \\sqrt{6}$", "$x = \\sqrt{12}$"],
        ansIdx: 3,
        sol: "The hypotenuse is $4$, one leg is $2$. $x^2 = 4^2 - 2^2 = 16 - 4 = 12$, so $x = \\sqrt{12}$."
      },
      {
        q: "Find $x$ (the hypotenuse) in the right triangle shown.",
        dia: { type: "triangle", w: 5, h: 4, A: "A", B: "B", C: "C", a: "5", b: "4", c: "x" },
        options: ["$x = \\sqrt{20}$", "$x = \\sqrt{41}$", "$x = 3$", "$x = 9$"],
        ansIdx: 1,
        sol: "Both legs are known: $5$ and $4$. $x^2 = 5^2 + 4^2 = 25 + 16 = 41$, so $x = \\sqrt{41}$."
      },
      {
        q: "Find $x$ in the right triangle shown.",
        dia: { type: "triangle", w: 9, h: 12, A: "A", B: "B", C: "C", a: "9", b: "x", c: "15" },
        options: ["$x = \\sqrt{135}$", "$x = 12$", "$x = 24$", "$x = \\sqrt{24}$"],
        ansIdx: 1,
        sol: "The hypotenuse is $15$, one leg is $9$. $x^2 = 15^2 - 9^2 = 225 - 81 = 144$, so $x = \\sqrt{144} = 12$. (9-12-15 is a multiple of 3-4-5.)"
      }
    ],
    quiz: [
      {
        q: "A 15-foot ladder leans against a wall. Its base is 9 feet from the wall. How high up the wall does the ladder reach?",
        dia: { type: "triangle", w: 9, h: 12, A: "A", B: "B", C: "C", a: "9", b: "x", c: "15" },
        options: ["$12$ ft", "$6$ ft", "$10$ ft", "$24$ ft"],
        ansIdx: 0,
        sol: "The ladder is the hypotenuse ($15$), the ground distance is one leg ($9$). $x^2 = 15^2 - 9^2 = 225 - 81 = 144$, so $x = 12$ ft. (9-12-15 is a 3-4-5 multiple.)"
      },
      {
        q: "Two points are 3 units apart horizontally and 4 units apart vertically. What is the distance between them?",
        dia: { type: "triangle", w: 3, h: 4, A: "A", B: "B", C: "C", a: "3", b: "4", c: "x" },
        options: ["$5$", "$\\sqrt{7}$", "$7$", "$25$"],
        ansIdx: 0,
        sol: "Form a right triangle: $d^2 = 3^2 + 4^2 = 9 + 16 = 25$, so $d = \\sqrt{25} = 5$."
      },
      {
        q: "Which set of side lengths can form a right triangle?",
        options: ["$3, 4, 5$", "$2, 3, 4$", "$5, 6, 7$", "$1, 2, 3$"],
        ansIdx: 0,
        sol: "Check $3^2 + 4^2 = 9 + 16 = 25 = 5^2$. The others fail the Pythagorean theorem, so only $(3,4,5)$ works."
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     Ch02  实数  Real Numbers
     教材：北师大版·八年级数学（上册） 第2章
  ══════════════════════════════════════════════════════════════ */
  {
    id: "ch02",
    g: "8",
    gx: 2,
    title: "Real Numbers",
    coverage: "g",
    think: "$\\\sqrt{2} \\\approx 1.41421356...$ — can you write it as a fraction of two integers? What does this tell us about $\\\sqrt{2}$?",
    videos: [{yt: "mbc3_e5lWw0", title: "Introduction to square roots"}],
    notes: [
      "Square root（平方根）: $\\\sqrt{a}$ is the number whose square is $a$. Default = principal (non-negative) root.",
      "$\\\sqrt{a^2} = |a|$; $(-3)^2 = 9$, so $\\\sqrt{9} = 3$ (not $-3$).",
      "Cube root（立方根）: $\\\sqrt[3]{a}$ — can be negative, since $(-2)^3 = -8$, so $\\\sqrt[3]{-8} = -2$.",
      "Rational number（有理数）: can be written as $\\\frac{p}{q}$ where $p, q$ are integers, $q \\\neq 0$. Decimals are terminating or repeating.",
      "Irrational number（无理数）: non-terminating, non-repeating decimals. Examples: $\\\sqrt{2}$, $\\\pi$, $e$.",
      "Real numbers（实数） = rational + irrational. Every point on the number line is a real number.",
      "Laws: $\\\sqrt{ab} = \\\sqrt{a}\\\sqrt{b}$, $\\\sqrt{\\\frac{a}{b}} = \\\frac{\\\sqrt{a}}{\\\sqrt{b}}$."
    ],
    practice: [
      {
        q: "We found $5^2 = 25$. How can we be sure that $5$ is the right answer?",
        options: ["Because $5$ is an odd number.", "Because $5$ times itself equals $25$.", "Because $5$ is half of $10$."],
        ansIdx: 1,
        sol: "$5^2 = 5 \\times 5 = 25$, so $5$ is indeed the correct square root. (Khan Academy: 'How can we be sure that 5 is the right answer?')"
      },
      {
        q: "Two students make claims about $7^2$ and $\\sqrt{49}$. Which claim is correct?",
        options: ["Claim 1: $7^2 = 49$ and $\\sqrt{49} = 7$", "Claim 2: $7^2 = \\sqrt{7}$"],
        ansIdx: 0,
        sol: "Claim 1 is correct: $7^2 = 49$ and $\\sqrt{49} = 7$. Claim 2 is wrong because $\\sqrt{7} \\neq 49$. (Khan Academy reflection question.)"
      },
      {
        q: "When you square the square root of a number, what happens?",
        options: ["The answer is less than the original number.", "The answer is the original number.", "The answer is greater than the original number."],
        ansIdx: 1,
        sol: "By definition, $(\\sqrt{x})^2 = x$, so squaring a square root returns the original number. (Khan Academy: 'When you square the square root of a number...')"
      },
      {
        q: "To order $\\sqrt{28}$, $5$, and $6$ from least to greatest, what is the best strategy?",
        options: ["Square just the square roots. For example: $6,\\;(\\sqrt{28})^2,\\;5$.", "Square both the square roots and the integers. For example: $6^2,\\;(\\sqrt{28})^2,\\;5^2$."],
        ansIdx: 1,
        sol: "Square everything: $6^2 = 36$, $(\\sqrt{28})^2 = 28$, $5^2 = 25$. So the order is $5 < \\sqrt{28} < 6$. (Khan Academy strategy question.)"
      },
      {
        q: "Evaluate $\\sqrt{64}$.",
        options: ["$8$", "$32$", "$16$", "$4$"],
        ansIdx: 0,
        sol: "$\\sqrt{64} = 8$ because $8^2 = 64$. (Khan Academy practice problem.)"
      }
    ],
    quiz: [
      {
        q: "Evaluate $\\sqrt[3]{125}$.",
        options: ["$5$", "$25$", "$15$", "$3$"],
        ansIdx: 0,
        sol: "$\\sqrt[3]{125} = 5$ because $5^3 = 125$. (Khan Academy practice problem.)"
      },
      {
        q: "What type of number is $\\sqrt{3}$?",
        options: ["Whole number", "Integer", "Rational", "Irrational"],
        ansIdx: 3,
        sol: "$\\sqrt{3} \\approx 1.732...$ is non-terminating and non-repeating, so it is irrational. Khan Academy lists $\\sqrt{3}$ as an example of an irrational number."
      },
      {
        q: "Evaluate $\\sqrt[3]{-27}$.",
        options: ["$-3$", "$3$", "$-9$", "$9$"],
        ansIdx: 0,
        sol: "$\\sqrt[3]{-27} = -3$ because $(-3)^3 = -27$. Unlike square roots, cube roots can be negative. (Khan Academy: $\\sqrt[3]{-8} = -2$.)"
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     Ch03  位置与坐标  Position & Coordinate Plane
     教材：北师大版·八年级数学（上册） 第3章
  ══════════════════════════════════════════════════════════════ */
  {
    id: "ch03",
    g: "8",
    gx: 3,
    title: "Position & Coordinate Plane",
    coverage: "g",
    think: "If you walk 3 blocks east and 4 blocks north, how far are you from your starting point? Can you draw this on a grid?",
    videos: [{yt: "1op92ojA6q0", title: "The coordinate plane"}],
    notes: [
      "Coordinate plane（平面直角坐标系）: x-axis (horizontal) and y-axis (vertical), intersecting at origin $O(0,0)$.",
      "Quadrants（象限）: Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-).",
      "Distance formula（距离公式）: $d = \\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ — derived from Pythagorean theorem.",
      "Midpoint formula（中点公式）: $M = \\\left(\\\frac{x_1+x_2}{2}, \\\frac{y_1+y_2}{2}\\\right)$.",
      "Reflection over x-axis: $(x,y) \\\rightarrow (x,-y)$; over y-axis: $(x,y) \\\rightarrow (-x,y)$."
    ],
    practice: [
      {
        q: "What is the distance between the points $(1,2)$ and $(4,6)$?",
        options: ["$5$", "$\\sqrt{13}$", "$\\sqrt{34}$", "$7$"],
        ansIdx: 0,
        sol: "Use the distance formula: $d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$."
      },
      {
        q: "In which quadrant does the point $(-3,4)$ lie?",
        options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
        ansIdx: 1,
        sol: "$(-3,4)$ has $x<0$ and $y>0$, which is Quadrant II."
      },
      {
        q: "What is the midpoint of $(2,3)$ and $(4,7)$?",
        options: ["$(3,5)$", "$(3,4)$", "$(6,10)$", "$(1,2)$"],
        ansIdx: 0,
        sol: "Midpoint $= \\left(\\frac{2+4}{2}, \\frac{3+7}{2}\\right) = (3,5)$."
      },
      {
        q: "What is the reflection of $(2,5)$ across the $x$-axis?",
        options: ["$(2,-5)$", "$(-2,5)$", "$(-2,-5)$", "$(5,2)$"],
        ansIdx: 0,
        sol: "Reflecting across the $x$-axis changes the sign of $y$: $(2,5) \\to (2,-5)$."
      },
      {
        q: "Which point lies in Quadrant III?",
        options: ["$(-2,-3)$", "$(2,3)$", "$(-2,3)$", "$(2,-3)$"],
        ansIdx: 0,
        sol: "Quadrant III has $x<0$ and $y<0$, so $(-2,-3)$ is the answer."
      }
    ],
    quiz: [
      {
        q: "What is the distance between $(0,0)$ and $(5,12)$?",
        options: ["$13$", "$17$", "$7$", "$\\sqrt{119}$"],
        ansIdx: 0,
        sol: "$d = \\sqrt{(5-0)^2 + (12-0)^2} = \\sqrt{25+144} = \\sqrt{169} = 13$. (A 5-12-13 right triangle.)"
      },
      {
        q: "What is the slope of the line through $(1,2)$ and $(3,6)$?",
        options: ["$2$", "$\\frac{1}{2}$", "$4$", "$-2$"],
        ansIdx: 0,
        sol: "Slope $= \\frac{6-2}{3-1} = \\frac{4}{2} = 2$."
      },
      {
        q: "What is the $y$-intercept of the line $y = 3x - 4$?",
        options: ["$-4$", "$3$", "$4$", "$0$"],
        ansIdx: 0,
        sol: "In slope-intercept form $y = mx + b$, the $y$-intercept is $b = -4$ (the point $(0,-4)$)."
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     Ch04  一次函数  Linear Functions
     教材：北师大版·八年级数学（上册） 第4章
  ══════════════════════════════════════════════════════════════ */
  {
    id: "ch04",
    g: "8",
    gx: 4,
    title: "Linear Functions",
    coverage: "g",
    think: "A taxi charges $\\$3$ base fare plus $\\$2$ per km. Write an equation for the total cost $y$ in terms of distance $x$. Is this a function?",
    videos: [{yt: "kvGsIo1TmsM", title: "What is a function?"}],
    notes: [
      "Function（函数）: each input $x$ has exactly one output $y$. Notation: $f(x)$.",
      "Linear function（一次函数）: $y = mx + b$ or $f(x) = mx + b$.",
      "Slope（斜率）$m = \\\frac{\\\Delta y}{\\\Delta x} = \\\frac{y_2-y_1}{x_2-x_1}$ — rate of change.",
      "y-intercept（y轴截距）$b$: where line crosses y-axis; x-intercept: where $y=0$.",
      "Slope-intercept form（斜截式）: $y = mx + b$ — easiest for graphing.",
      "Parallel lines have equal slopes; perpendicular lines have slopes that are negative reciprocals ($m_1 \\\cdot m_2 = -1$)."
    ],
    practice: [
      {
        q: "What is the slope of the line through $(0,0)$ and $(2,6)$?",
        options: ["$3$", "$\\frac{1}{3}$", "$6$", "$2$"],
        ansIdx: 0,
        sol: "Slope $= \\frac{6-0}{2-0} = \\frac{6}{2} = 3$."
      },
      {
        q: "What is the $y$-intercept of $y = -2x + 5$?",
        options: ["$5$", "$-2$", "$2$", "$-5$"],
        ansIdx: 0,
        sol: "In $y = mx + b$, the $y$-intercept is $b = 5$."
      },
      {
        q: "Which equation represents a linear function?",
        options: ["$y = 2x + 1$", "$y = x^2$", "$y = \\frac{1}{x}$", "$y = \\sqrt{x}$"],
        ansIdx: 0,
        sol: "$y = 2x + 1$ is linear (constant rate of change). The others are quadratic, rational, and square-root functions."
      },
      {
        q: "If $f(x) = 4x - 3$, what is $f(2)$?",
        options: ["$5$", "$3$", "$8$", "$-5$"],
        ansIdx: 0,
        sol: "$f(2) = 4(2) - 3 = 8 - 3 = 5$."
      },
      {
        q: "What is the slope of a horizontal line?",
        options: ["$0$", "$1$", "undefined", "$-1$"],
        ansIdx: 0,
        sol: "A horizontal line has no vertical change, so its slope is $0$."
      }
    ],
    quiz: [
      {
        q: "Which equation has slope $2$ and $y$-intercept $3$?",
        options: ["$y = 2x + 3$", "$y = 3x + 2$", "$y = 2x - 3$", "$y = 3x$"],
        ansIdx: 0,
        sol: "$y = mx + b$ with $m=2$ and $b=3$ gives $y = 2x + 3$."
      },
      {
        q: "What is the $x$-intercept of $y = 2x - 6$?",
        options: ["$3$", "$-3$", "$6$", "$-6$"],
        ansIdx: 0,
        sol: "Set $y=0$: $0 = 2x - 6 \\Rightarrow 2x = 6 \\Rightarrow x = 3$."
      },
      {
        q: "What is the slope of $2x + 4y = 8$?",
        options: ["$-\\frac{1}{2}$", "$2$", "$\\frac{1}{2}$", "$-2$"],
        ansIdx: 0,
        sol: "Solve for $y$: $4y = -2x + 8 \\Rightarrow y = -\\frac{1}{2}x + 2$, so slope is $-\\frac{1}{2}$."
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     Ch05  二元一次方程组  Systems of Linear Equations
     教材：北师大版·八年级数学（上册） 第5章
  ══════════════════════════════════════════════════════════════ */
  {
    id: "ch05",
    g: "8",
    gx: 5,
    title: "Systems of Linear Equations",
    coverage: "g",
    think: "You buy 3 apples and 2 bananas for $\\$11$. Your friend buys 2 apples and 3 bananas for $\\$9$. Can you find the price of each fruit?",
    videos: [{yt: "2VeqrZ_PMiY", title: "Solving systems of equations with substitution"}],
    notes: [
      "System of equations（方程组）: two or more equations with the same variables.",
      "Solution: values that satisfy ALL equations simultaneously.",
      "Substitution method（代入法）: solve one equation for one variable, substitute into the other.",
      "Elimination method（加减/消元法）: add/subtract equations to eliminate one variable.",
      "Graphing method（图像法）: find intersection point of two lines.",
      "Types of solutions: one unique solution (intersecting lines), no solution (parallel lines), infinitely many (same line)."
    ],
    practice: [
      {
        q: "Solve the system: $y = x + 1$ and $y = 2x - 1$.",
        options: ["$(2,3)$", "$(3,2)$", "$(-2,-3)$", "$(1,1)$"],
        ansIdx: 0,
        sol: "Set equal: $x+1 = 2x-1 \\Rightarrow x = 2$, then $y = 2+1 = 3$. Solution $(2,3)$."
      },
      {
        q: "Solve: $2x + y = 5$ and $x - y = 1$.",
        options: ["$(2,1)$", "$(1,2)$", "$(-1,3)$", "$(3,-1)$"],
        ansIdx: 0,
        sol: "Add the equations: $3x = 6 \\Rightarrow x = 2$, then $2-y=1 \\Rightarrow y=1$. Solution $(2,1)$."
      },
      {
        q: "Two lines are parallel and distinct. How many solutions does the system have?",
        options: ["$0$", "$1$", "infinitely many", "$2$"],
        ansIdx: 0,
        sol: "Parallel distinct lines never intersect, so the system has no solution."
      },
      {
        q: "Solve: $x + y = 4$ and $x - y = 2$.",
        options: ["$(3,1)$", "$(1,3)$", "$(2,2)$", "$(4,0)$"],
        ansIdx: 0,
        sol: "Add: $2x = 6 \\Rightarrow x = 3$, then $3+y=4 \\Rightarrow y=1$. Solution $(3,1)$."
      },
      {
        q: "Solve by substitution: $y = 3x$ and $2x + y = 10$.",
        options: ["$(2,6)$", "$(6,2)$", "$(1,3)$", "$(3,1)$"],
        ansIdx: 0,
        sol: "Substitute: $2x + 3x = 10 \\Rightarrow 5x = 10 \\Rightarrow x = 2$, then $y = 6$. Solution $(2,6)$."
      }
    ],
    quiz: [
      {
        q: "Solve: $y = -x + 5$ and $y = x - 1$.",
        options: ["$(3,2)$", "$(2,3)$", "$(4,1)$", "$(1,4)$"],
        ansIdx: 0,
        sol: "Set equal: $-x+5 = x-1 \\Rightarrow 2x = 6 \\Rightarrow x=3$, then $y = 3-1 = 2$. Solution $(3,2)$."
      },
      {
        q: "When does a system of two linear equations have infinitely many solutions?",
        options: ["The two equations are the same line", "The lines are parallel", "The lines intersect once", "The lines are perpendicular"],
        ansIdx: 0,
        sol: "If both equations describe the same line, every point is a solution."
      },
      {
        q: "Solve: $3x + 2y = 12$ and $x = 2$.",
        options: ["$(2,3)$", "$(3,2)$", "$(2,0)$", "$(0,6)$"],
        ansIdx: 0,
        sol: "$3(2) + 2y = 12 \\Rightarrow 6 + 2y = 12 \\Rightarrow 2y = 6 \\Rightarrow y = 3$. Solution $(2,3)$."
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     Ch06  数据的分析  Data Analysis
     教材：北师大版·八年级数学（上册） 第6章
  ══════════════════════════════════════════════════════════════ */
  {
    id: "ch06",
    g: "8",
    gx: 6,
    title: "Data Analysis",
    coverage: "g",
    think: "Five students scored: 72, 85, 85, 90, 98. Which number best represents 'typical' performance? Why might you choose a different one?",
    videos: [{yt: "h8EYEJ32oQ8", title: "Statistics intro: mean, median & mode"}],
    notes: [
      "Mean（平均数）: $\\\bar{x} = \\\frac{\\\sum x_i}{n}$ — affected by outliers.",
      "Median（中位数）: middle value when ordered — robust to outliers.",
      "Mode（众数）: most frequent value — useful for categorical data.",
      "Range（极差）: max − min — simple spread measure.",
      "MAD (Mean Absolute Deviation): average distance from mean.",
      "Standard deviation（标准差）: $s = \\\sqrt{\\\frac{\\\sum(x_i - \\\bar{x})^2}{n-1}}$ — spread measure.",
      "Box plot（箱线图）: shows Q1, median, Q3, IQR, outliers."
    ],
    practice: [
      {
        q: "What is the mean of $2, 4, 6, 8$?",
        options: ["$5$", "$4$", "$6$", "$5.5$"],
        ansIdx: 0,
        sol: "Mean $= \\frac{2+4+6+8}{4} = \\frac{20}{4} = 5$."
      },
      {
        q: "What is the median of $3, 1, 7, 5, 9$?",
        options: ["$5$", "$3$", "$7$", "$4$"],
        ansIdx: 0,
        sol: "Order: $1, 3, 5, 7, 9$. The middle value is $5$."
      },
      {
        q: "What is the median of $2, 4, 6, 8$?",
        options: ["$5$", "$4$", "$6$", "$3$"],
        ansIdx: 0,
        sol: "Order: $2, 4, 6, 8$. Median $= \\frac{4+6}{2} = 5$."
      },
      {
        q: "What is the mode of $1, 2, 2, 3, 4$?",
        options: ["$2$", "$1$", "$3$", "$4$"],
        ansIdx: 0,
        sol: "The value $2$ appears most often (twice)."
      },
      {
        q: "What is the range of $5, 9, 2, 7$?",
        options: ["$7$", "$5$", "$9$", "$4$"],
        ansIdx: 0,
        sol: "Range $= 9 - 2 = 7$."
      }
    ],
    quiz: [
      {
        q: "A data set has one very large outlier. Which measure of center is least affected?",
        options: ["Median", "Mean", "Range", "Maximum"],
        ansIdx: 0,
        sol: "The median is resistant to outliers; the mean is pulled toward them."
      },
      {
        q: "For the data $1, 2, 3, 4, 5, 6, 7$, what is the interquartile range (IQR)?",
        options: ["$4$", "$3$", "$6$", "$2$"],
        ansIdx: 0,
        sol: "Lower half $1,2,3$ gives $Q_1 = 2$; upper half $5,6,7$ gives $Q_3 = 6$. IQR $= 6 - 2 = 4$."
      },
      {
        q: "A box plot shows min $= 2$, $Q_1 = 4$, median $= 6$, $Q_3 = 8$, max $= 10$. What is the IQR?",
        options: ["$4$", "$6$", "$8$", "$2$"],
        ansIdx: 0,
        sol: "IQR $= Q_3 - Q_1 = 8 - 4 = 4$."
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     Ch07  几何证明基础  Foundations of Geometric Proof
     【重组整合】北师大8上第7章 + 8下第1章核心内容
     命题与证明、平行线、三角形内角和、全等判定
  ══════════════════════════════════════════════════════════════ */
  {
    id: "ch07",
    g: "8",
    gx: 7,
    title: "Foundations of Geometric Proof",
    coverage: "g",
    think: "How can you be absolutely sure that the angles in every triangle add to 180°? Is measuring one triangle enough?",
    videos: [{yt: "7MOT17YwKdw", title: "Parallel and perpendicular lines"}],
    notes: [
      "Proposition（命题）: a statement that is either true or false.",
      "Theorem（定理）: a proposition that has been proven true.",
      "Proof（证明）: logical argument from axioms/definitions to conclusion.",
      "Parallel lines & transversal（平行线与截线）: corresponding angles equal, alternate interior angles equal, consecutive interior angles supplementary.",
      "Triangle Angle Sum Theorem（三角形内角和定理）: $\\\angle A + \\\angle B + \\\angle C = 180°$ — proven using parallel lines.",
      "Congruent triangles（全等三角形）: SSS, SAS, ASA, AAS, HL (Hypotenuse-Leg for right triangles).",
      "CPCTC: Corresponding Parts of Congruent Triangles are Congruent.",
      "Isosceles triangle（等腰三角形）: base angles equal; converse also true."
    ],
    practice: [
      {
        q: "Which criterion proves two triangles congruent when all three sides are equal?",
        options: ["SSS", "SAS", "ASA", "AAS"],
        ansIdx: 0,
        sol: "SSS (Side-Side-Side): three pairs of equal sides imply congruent triangles."
      },
      {
        q: "In SAS, the angle must be ____ the two sides.",
        options: ["the included angle", "any angle", "the longest side", "a right angle"],
        ansIdx: 0,
        sol: "SAS requires the angle to be between the two known sides (the included angle)."
      },
      {
        q: "Which criterion uses two angles and the included side?",
        options: ["ASA", "SAS", "SSS", "HL"],
        ansIdx: 0,
        sol: "ASA (Angle-Side-Angle): two angles and the side between them."
      },
      {
        q: "Vertical angles are always ____.",
        options: ["equal", "supplementary", "complementary", "perpendicular"],
        ansIdx: 0,
        sol: "Vertical angles are always equal in measure."
      },
      {
        q: "What does CPCTC stand for?",
        options: ["Corresponding Parts of Congruent Triangles are Congruent", "Congruent Parts of Congruent Triangles are Corresponding", "Center Points of Congruent Triangles are Congruent", "Corresponding Proofs of Congruent Triangles are Complete"],
        ansIdx: 0,
        sol: "CPCTC = Corresponding Parts of Congruent Triangles are Congruent."
      }
    ],
    quiz: [
      {
        q: "If $\\triangle ABC \\cong \\triangle DEF$, then $AB =$ ____.",
        options: ["$DE$", "$EF$", "$DF$", "$BC$"],
        ansIdx: 0,
        sol: "Corresponding sides of congruent triangles are equal, so $AB$ corresponds to $DE$."
      },
      {
        q: "The HL (Hypotenuse-Leg) theorem applies to which triangles?",
        options: ["Right triangles", "All triangles", "Isosceles triangles", "Equilateral triangles"],
        ansIdx: 0,
        sol: "HL is a congruence shortcut that works only for right triangles."
      },
      {
        q: "If two angles of one triangle equal two angles of another, the third angles must be ____.",
        options: ["equal", "supplementary", "unrelated", "double"],
        ansIdx: 0,
        sol: "Angles in a triangle sum to $180^\\circ$, so matching two angles forces the third to match (AA similarity)."
      }
    ]
  }
];
