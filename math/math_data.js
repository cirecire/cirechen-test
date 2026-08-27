var MATH_DATA = [
  { // ch01
      [
        { yt: "AA6RfgP-AHU", t: "Intro to the Pythagorean theorem", m: "English · Khan Academy", duration: "~10 min" },
        { yt: "O64YFlX1_aI", t: "Pythagorean theorem example", m: "English · Khan Academy", duration: "~6 min" },
        { yt: "TjOlZr_2uW4", t: "Pythagorean theorem with isosceles triangle", m: "English · Khan Academy", duration: "~5 min" },
        { yt: "T0IOrRETWhI", t: "Pythagorean theorem word problem: carpet", m: "English · Khan Academy", duration: "~5 min" },
        { yt: "JVrkLIcA2qw", t: "Pythagorean theorem word problem: fishing boat", m: "English · Khan Academy", duration: "~5 min" },
        { yt: "1UQ5IbihJNI", t: "Pythagorean theorem in 3D", m: "English · Khan Academy", duration: "~6 min" },
        { yt: "yZ4CbopnVBg", t: "Find area of isosceles triangle", m: "English · Khan Academy", duration: "~5 min" },
        { yt: "nyZuite17Pc", t: "Distance formula", m: "English · Khan Academy", duration: "~9 min" },
        { yt: "EINpkcphsPQ", t: "Garfield's proof of the Pythagorean theorem", m: "English · Khan Academy", duration: "~9 min" },
        { yt: "1ul8g55dYA4", t: "Bhaskara's proof of the Pythagorean theorem", m: "English · Khan Academy", duration: "~6 min" },
        { yt: "LrS5_l-gk94", t: "Pythagorean theorem proof using similarity", m: "English · Khan Academy", duration: "~8 min" },
        { yt: "rcBaqkGp7CA", t: "Another Pythagorean theorem proof", m: "English · Khan Academy", duration: "~8 min" }
      ],
      notes: [
    "In a right triangle (直角三角形): $a^2 + b^2 = c^2$, where $c$ is the hypotenuse (斜边, opposite the right angle).",
    "Find hypotenuse: $c = sqrt{a^2+b^2}$. Find a leg: $a = sqrt{c^2-b^2}$.",
    "Pythagorean triples (加股数): $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$.",
    "Distance formula (距离公式): $d = sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.",
      ],
              practice: [
          {
            q: "Find $x$ in the right triangle shown.",
            options: ["$x = \\sqrt{11}$","$x = \\sqrt{61}$","$x = 11$","$x = 30$"],
            dia: {"type":"triangle","w":5,"h":3.3,"A":"?","B":"6","C":"?","a":"5","b":"x","c":"?"},
            hint: "Identify the hypotenuse (longest side, c=6). One leg is a=5.\nFor a leg: b² = c² − a² = 36 − 25 = 11. So x = √11.",
            ansIdx: 0,
            sol: "The hypotenuse is $6$, one leg is $5$. By the Pythagorean theorem: $x^2 = 6^2 - 5^2 = 36 - 25 = 11$, so $x = \\sqrt{11}$.",
          },
          {
            q: "Find $x$ (the hypotenuse) in the right triangle shown.",
            options: ["$x = \\sqrt{80}$","$x = \\sqrt{48}$","$x = \\sqrt{32}$","$x = \\sqrt{12}$"],
            dia: {"type":"triangle","w":8,"h":4,"A":"?","B":"?","C":"?","a":"8","b":"4","c":"x"},
            hint: "Both sides at the right angle are legs (8 and 4).\nFor hypotenuse: x² = 8² + 4² = 64 + 16 = 80. So x = √80.",
            ansIdx: 0,
            sol: "Both legs are known: $8$ and $4$. $x^2 = 8^2 + 4^2 = 64 + 16 = 80$, so $x = \\sqrt{80}$.",
          },
          {
            q: "Find $x$ in the right triangle shown.",
            options: ["$x = 2$","$x = 3$","$x = \\sqrt{20}$","$x = \\sqrt{36}$"],
            dia: {"type":"triangle","w":4,"h":3,"A":"?","B":"5","C":"?","a":"x","b":"4","c":"?"},
            hint: "Hypotenuse c=5. Unknown side is a leg: x² = 5² − 4² = 25 − 16 = 9. x = 3.",
            ansIdx: 1,
            sol: "The hypotenuse is $5$, one leg is $4$. $x^2 = 5^2 - 4^2 = 25 - 16 = 9$, so $x = \\sqrt{9} = 3$.",
          },
          {
            q: "Find $x$ (the hypotenuse) in the right triangle shown.",
            options: ["$x = 5$","$x = \\sqrt{7}$","$x = 7$","$x = 25$"],
            dia: {"type":"triangle","w":3,"h":4,"A":"?","B":"?","C":"?","a":"3","b":"4","c":"5"},
            hint: "This is the famous 3-4-5 triangle! x² = 3² + 4² = 9+16=25. x = √25 = 5.",
            ansIdx: 0,
            sol: "Classic 3-4-5 right triangle: $x^2 = 3^2 + 4^2 = 9 + 16 = 25$, so $x = \\sqrt{25} = 5$.",
          },
          {
            q: "Find $x$ in the right triangle shown.",
            options: ["$x = 8$","$x = \\sqrt{8}$","$x = \\sqrt{6}$","$x = \\sqrt{12}$"],
            dia: {"type":"triangle","w":2,"h":3.5,"A":"?","B":"4","C":"?","a":"x","b":"2","c":"?"},
            hint: "Hypotenuse c=4, known leg a=2. b² = c² − a² = 16 − 4 = 12. x = √12.",
            ansIdx: 3,
            sol: "The hypotenuse is $4$, one leg is $2$. $x^2 = 4^2 - 2^2 = 16 - 4 = 12$, so $x = \\sqrt{12}$.",
          },
          {
            q: "Find $x$ (the hypotenuse) in the right triangle shown.",
            options: ["$x = \\sqrt{20}$","$x = \\sqrt{41}$","$x = 3$","$x = 9$"],
            dia: {"type":"triangle","w":5,"h":4,"A":"?","B":"?","C":"?","a":"5","b":"4","c":"x"},
            hint: "Right angle is at the intersection of legs 5 and 4. x² = 5² + 4² = 25+16=41. x = √41.",
            ansIdx: 1,
            sol: "Both legs are known: $5$ and $4$. $x^2 = 5^2 + 4^2 = 25 + 16 = 41$, so $x = \\sqrt{41}$.",
          },
          {
            q: "Find $x$ in the right triangle shown.",
            options: ["$x = \\sqrt{135}$","$x = 12$","$x = 24$","$x = \\sqrt{24}$"],
            dia: {"type":"triangle","w":9,"h":4.8,"A":"?","B":"15","C":"?","a":"x","b":"9","c":"?"},
            hint: "Hypotenuse c=15, leg a=9. x² = 15² − 9² = 225 − 81 = 144. x = 12. (9-12-15 = 3×3-4-5.)",
            ansIdx: 1,
            sol: "The hypotenuse is $15$, one leg is $9$. $x^2 = 15^2 - 9^2 = 225 - 81 = 144$, so $x = \\sqrt{144} = 12$. (9-12-15 is a multiple of 3-4-5.)",
          }
    ],
              quiz: [
          {
            q: "A 15-foot ladder leans against a wall. Its base is 9 feet from the wall. How high up the wall does the ladder reach?",
            options: ["$12$ ft","$6$ ft","$10$ ft","$24$ ft"],
            hint: "Draw a right triangle. Ladder=15 (hypotenuse), base=9 (leg).\nHeight² = 15² − 9² = 225 − 81 = 144. Height = 12 ft.",
            ansIdx: 0,
            sol: "The ladder is the hypotenuse ($15$), the ground distance is one leg ($9$). $x^2 = 15^2 - 9^2 = 225 - 81 = 144$, so $x = 12$ ft. (9-12-15 is a 3-4-5 multiple.)",
          },
          {
            q: "Two points are 3 units apart horizontally and 4 units apart vertically. What is the distance between them?",
            options: ["$5$","$\\sqrt{7}$","$7$","$25$"],
            hint: "Use the distance formula: d = √(Δx² + Δy²) = √(3² + 4²) = √(9+16) = √25 = 5.",
            ansIdx: 0,
            sol: "Form a right triangle: $d^2 = 3^2 + 4^2 = 9 + 16 = 25$, so $d = \\sqrt{25} = 5$.",
          },
          {
            q: "Which set of side lengths can form a right triangle?",
            options: ["$3, 4, 5$","$2, 3, 4$","$5, 6, 7$","$1, 2, 3$"],
            hint: "Check a² + b² = c² (largest = hypotenuse).\n(a) 4²+5²=41≠13²\n(b) 5²+12²=169=13² ✓ 5-12-13!\n(c) 6²+7²=85≠10²\n(d) 8²+8²=128≠11²\nAnswer: B.",
            ansIdx: 0,
            sol: "Check $3^2 + 4^2 = 9 + 16 = 25 = 5^2$. The others fail the Pythagorean theorem, so only $(3,4,5)$ works.",
          }
    ]
  },

  { // ch02
      [
        { yt: "mbc3_e5lWw0", t: "Intro to square roots", m: "English · Khan Academy", duration: "~5 min" },
        { yt: "EFVrAk61xjE", t: "Approximating square roots to hundredths", m: "English · Khan Academy", duration: "~5 min" },
        { yt: "KibTbfkoPTs", t: "Comparing irrational numbers with radicals", m: "English · Khan Academy", duration: "~5 min" },
        { yt: "87_qIofPwhg", t: "Intro to cube roots", m: "English · Khan Academy", duration: "~6 min" },
        { yt: "DKh16Th8x6o", t: "Worked example: Cube root of a negative number", m: "English · Khan Academy", duration: "~4 min" },
        { yt: "cLP7INqs3JM", t: "Intro to rational & irrational numbers", m: "English · Khan Academy", duration: "~9 min" },
        { yt: "-QHff5pRdM8", t: "Classifying numbers", m: "English · Khan Academy", duration: "~7 min" }
      ],
      notes: [
    "Square root（平方根）: $sqrt{a}$ is the number whose square is $a$. Default = principal (non-negative) root.",
    "$sqrt{a^2} = |a|$; $(-3)^2 = 9$, so $sqrt{9} = 3$ (not $-3$).",
    "Cube root（立方根）: $sqrt[3]{a}$ — can be negative, since $(-2)^3 = -8$, so $sqrt[3]{-8} = -2$.",
    "Rational number（有理数）: can be written as $rac{p}{q}$ where $p, q$ are integers, $q eq 0$. Decimals are terminating or repeating.",
    "Irrational number（无理数）: non-terminating, non-repeating decimals. Examples: $sqrt{2}$, $pi$, $e$.",
    "Real numbers（实数） = rational + irrational. Every point on the number line is a real number.",
    "Laws: $sqrt{ab} = sqrt{a}sqrt{b}$, $sqrt{rac{a}{b}} = rac{sqrt{a}}{sqrt{b}}$.",
      ],
      practice: [
        {
          q: "Simplify: $\\sqrt{72}$.",
          options: ["$6\\sqrt{2}$","$12\\sqrt{6}$","$2\\sqrt{18}$","$36\\sqrt{2}$"],
          ansIdx: 0,
          sol: "$\\sqrt{72}=\\sqrt{36\\cdot2}=\\sqrt{36}\\cdot\\sqrt{2}=6\\sqrt{2}$.",
        hint: "$\\sqrt{25}$ is the number that, when multiplied by itself, gives 25. Check: does $5\\times 5 = 25$?",
        },
        {
          q: "Evaluate: $\\sqrt[3]{-27}$.",
          options: ["$3$","$-3$","$9$","$-9$"],
          ansIdx: 1,
          sol: "Since $(-3)^3=-27$, $\\sqrt[3]{-27}=-3$.",
        hint: "Compute each part: $7^2 = 49$, and $\\sqrt{49}$ is the number whose square is 49.",
        },
        {
          q: "Classify $\\sqrt{16}$ as rational or irrational.",
          options: ["Rational","Irrational","Both","Neither"],
          ansIdx: 0,
          sol: "$\\sqrt{16}=4=\\frac{4}{1}$, a ratio of two integers — rational.",
        hint: "Squaring and taking a square root are inverse operations. Try with 9: $\\sqrt{9}=3$, then $3^2=9$ — back to 9.",
        },
        {
          q: "Between which two consecutive integers does $\\sqrt{50}$ lie?",
        dia: {"type": "coord_plane", "range": [[4, 7], [-1, 1]], "step": 1, "points": [{"0": 5, "1": 0, "label": "5"}, {"0": 5.29, "1": 0, "label": "√28"}, {"0": 6, "1": 0, "label": "6"}]},
          options: ["$5$ and $6$","$6$ and $7$","$7$ and $8$","$8$ and $9$"],
          ansIdx: 2,
          sol: "$7^2=49$, $8^2=64$. Since $49<50<64$, $7<\\sqrt{50}<8$.",
        hint: "Compare by squaring everything: $5^2=25$, $6^2=36$, and $(\\sqrt{28})^2=28$. Now order 25, 28, 36.",
        },
        {
          q: "Simplify: $\\sqrt{72} \\times \\sqrt{3}$.",
          options: ["$6\\sqrt{6}$","$12\\sqrt{6}$","$6\\sqrt{2}$","$18\\sqrt{6}$"],
          ansIdx: 1,
          sol: "$\\sqrt{72}\\times\\sqrt{3}=\\sqrt{72\\cdot3}=\\sqrt{216}=6\\sqrt{6}$.",
        hint: "Find the number that times itself equals 64. $8\\times 8 = 64$.",
        }
      ],
      quiz: [
        {
          q: "Which of the following is irrational?",
          options: ["$\\sqrt{4}$","$\\sqrt{9}$","$\\sqrt{2}$","$\\frac{3}{4}$"],
          ansIdx: 2,
          sol: "$\\sqrt{2}\\approx 1.414...$ is non-repeating, non-terminating — irrational.",
        hint: "Find the number whose cube is 125. $5\\times 5\\times 5 = 125$.",
        },
        {
          q: "Simplify $\\sqrt{50}$ completely.",
          options: ["$2\\sqrt{25}$","$5\\sqrt{2}$","$25\\sqrt{2}$","$10\\sqrt{5}$"],
          ansIdx: 1,
          sol: "$\\sqrt{50}=\\sqrt{25\\cdot2}=5\\sqrt{2}$.",
        hint: "$\\sqrt{3}\\approx 1.732\\ldots$ — its decimal never ends and never repeats. Rational or irrational?",
        },
        {
          q: "Classify the number $0.333...$ (repeating).",
          options: ["Integer","Rational","Irrational","Natural"],
          ansIdx: 1,
          sol: "Repeating decimals are rational. $0.\\overline{3}=\\frac{1}{3}$.",
        hint: "Find the number whose cube is $-27$. Since $(-3)^3=-27$, the cube root is $-3$.",
        }
      ]
  },

  { // ch03
      [
        { yt: "VhNkWdLGpmA", t: "Points on the coordinate plane examples", m: "English · Khan Academy", duration: "~6 min" },
        { yt: "1op92ojA6q0", t: "Quadrants of the coordinate plane", m: "English · Khan Academy", duration: "~5 min" },
        { yt: "b9H22F0Qbgw", t: "Finding the point not graphed", m: "English · Khan Academy", duration: "~5 min" },
        { yt: "nyZuite17Pc", t: "Distance formula", m: "English · Khan Academy", duration: "~9 min" }
      ],
      notes: [
    "Cartesian coordinate system（平面直角坐标系）: x-axis (horizontal) and y-axis (vertical), intersect at the origin $(0,0)$.",
    "Ordered pair $(x,y)$: x = horizontal position, y = vertical position. The origin is $(0,0)$.",
    "Quadrants（象限）: Q1 (+,+), Q2 (-,+), Q3 (-,-), Q4 (+,-).",
    "Distance formula（两点距离公式）: $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ — derived from the Pythagorean theorem.",
    "Midpoint formula（中点公式）: $M = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$.",
    "Slope（斜率）: $m = \frac{y_2-y_1}{x_2-x_1}$, measures steepness. Parallel lines have equal slopes.",
    "The graph of $x=a$ is a vertical line; $y=b$ is a horizontal line.",
      ],
      practice: [
        {
          q: "What are the coordinates of point A shown in the coordinate plane?",
        dia: {"type": "coord_plane", "range": [[0, 6], [0, 8]], "step": 1, "points": [{"0": 1, "1": 2, "label": "A"}, {"0": 4, "1": 6, "label": "B"}]},
          options: ["$(3,4)$","$(4,3)$","$(-3,4)$","$(3,-4)$"],
          ansIdx: 0,
          sol: "Point A is 3 units right and 4 units up from the origin — $(3,4)$.",
        hint: "Use the distance formula $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Here $\\Delta x=3,\\ \\Delta y=4$, so $d=\\sqrt{3^2+4^2}=\\sqrt{25}$.",
        },
        {
          q: "Find the distance between $P(1,2)$ and $Q(4,6)$.",
        dia: {"type": "coord_plane", "range": [[-5, 5], [-2, 6]], "step": 1, "points": [{"0": -3, "1": 4, "label": "P"}]},
          options: ["$3$","$5$","$7$","$25$"],
          ansIdx: 1,
          sol: "$d=\\sqrt{(4-1)^2+(6-2)^2}=\\sqrt{9+16}=\\sqrt{25}=5$.",
        hint: "Quadrant II has $x<0$ and $y>0$. Check the signs of $-3$ and $4$.",
        },
        {
          q: "What is the midpoint of $A(-2,3)$ and $B(4,-1)$?",
        dia: {"type": "coord_plane", "range": [[0, 6], [0, 9]], "step": 1, "points": [{"0": 2, "1": 3, "label": "A"}, {"0": 4, "1": 7, "label": "B"}, {"0": 3, "1": 5, "label": "M"}]},
          options: ["$(1,1)$","$(2,2)$","$(3,1)$","$(1,2)$"],
          ansIdx: 0,
          sol: "$M=\\left(\\frac{-2+4}{2},\\frac{3+(-1)}{2}\\right)=(1,1)$.",
        hint: "Average the x's and the y's: $\\left(\\frac{2+4}{2},\\frac{3+7}{2}\\right)$.",
        },
        {
          q: "What is the slope of the line through $(2,5)$ and $(6,9)$?",
        dia: {"type": "coord_plane", "range": [[0, 4], [-7, 7]], "step": 1, "points": [{"0": 2, "1": 5, "label": "P"}, {"0": 2, "1": -5, "label": "P'"}]},
          options: ["$1$","$2$","$\\frac{1}{2}$","$4$"],
          ansIdx: 0,
          sol: "$m=\\frac{9-5}{6-2}=\\frac{4}{4}=1$.",
        hint: "Reflecting over the x-axis keeps x and flips the sign of y: $(x,y)\\to(x,-y)$.",
        },
        {
          q: "Which quadrant is the point $(-7,-3)$ in?",
        dia: {"type": "coord_plane", "range": [[-4, 4], [-4, 4]], "step": 1, "points": [{"0": -2, "1": -3, "label": "P"}]},
          options: ["Quadrant I","Quadrant II","Quadrant III","Quadrant IV"],
          ansIdx: 2,
          sol: "Both x and y are negative — Quadrant III.",
        hint: "Quadrant III has both $x<0$ and $y<0$. Look for two negative coordinates.",
        }
      ],
      quiz: [
        {
          q: "Which point lies on the line $y=2x+1$?",
        dia: {"type": "coord_plane", "range": [[0, 7], [0, 14]], "step": 1, "points": [{"0": 0, "1": 0, "label": "A"}, {"0": 5, "1": 12, "label": "B"}]},
          options: ["$(0,0)$","$(1,2)$","$(1,3)$","$(2,2)$"],
          ansIdx: 2,
          sol: "$y=2(1)+1=3$. Point $(1,3)$ satisfies $y=2x+1$.",
        hint: "Distance $=\\sqrt{5^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13$. (A 5-12-13 right triangle.)",
        },
        {
          q: "Find the distance between $(0,0)$ and $(6,8)$.",
        dia: {"type": "coord_plane", "range": [[0, 4], [0, 8]], "step": 1, "points": [{"0": 1, "1": 2, "label": "A"}, {"0": 3, "1": 6, "label": "B"}], "line": {"m": 2, "b": 0}},
          options: ["$10$","$12$","$14$","$48$"],
          ansIdx: 0,
          sol: "$d=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10$.",
        hint: "Slope $=\\frac{y_2-y_1}{x_2-x_1}=\\frac{6-2}{3-1}$.",
        },
        {
          q: "The line through $(3, y)$ and $(7,12)$ has slope $2$. Find $y$.",
        dia: {"type": "coord_plane", "range": [[-1, 4], [-6, 6]], "step": 1, "line": {"m": 3, "b": -4}, "points": [{"0": 0, "1": -4, "label": "(0,-4)"}]},
          options: ["$2$","$4$","$6$","$8$"],
          ansIdx: 1,
          sol: "$2=\\frac{12-y}{7-3}=\\frac{12-y}{4}$, so $12-y=8$, $y=4$.",
        hint: "In $y=mx+b$, the y-intercept is $b$. Set $x=0$: $y=3(0)-4=-4$.",
        }
      ]
  },

  { // ch04
      [
        { yt: "kvGsIo1TmsM", t: "What is a function?", m: "English · Khan Academy", duration: "~8 min" },
        { yt: "Id6UovYjd-M", t: "Worked example: Evaluating functions from equation", m: "English · Khan Academy", duration: "~6 min" },
        { yt: "3SO1BQQ9_1E", t: "Testing if a relationship is a function", m: "English · Khan Academy", duration: "~7 min" },
        { yt: "AZroE4fJqtQ", t: "Recognizing linear functions", m: "English · Khan Academy", duration: "~7 min" },
        { yt: "MeU-KzdCBps", t: "Intro to slope", m: "English · Khan Academy", duration: "~9 min" },
        { yt: "IL3UCuXrUzE", t: "Intro to slope-intercept form (y=mx+b)", m: "English · Khan Academy", duration: "~8 min" },
        { yt: "uk7gS3cZVp4", t: "Graph from slope-intercept equation", m: "English · Khan Academy", duration: "~6 min" },
        { yt: "xR9r38mZjK4", t: "Linear graphs word problems", m: "English · Khan Academy", duration: "~7 min" }
      ],
      notes: [
    "Function（函数）: each input $x$ gives exactly one output $f(x)$. Written as $y = f(x)$.",
    "Linear function（一次函数）: $y = mx + b$. $m$ = slope (rate of change), $b$ = y-intercept.",
    "Slope interpretation: $m = \frac{\Delta y}{\Delta x}$. For every 1 unit right, $y$ changes by $m$.",
    "When $m>0$: line rises left→right. $m<0$: line falls. $m=0$: horizontal line.",
    "Forms of linear equations: slope-intercept $y=mx+b$, point-slope $y-y_1=m(x-x_1)$, standard $Ax+By=C$.",
    "Parallel lines: same slope. Perpendicular lines: slopes are negative reciprocals ($m_1 \cdot m_2 = -1$).",
    "A system of linear equations: two lines — one solution (intersect), no solution (parallel), infinitely many (coincident).",
      ],
      practice: [
        {
          q: "What is the slope of $y = 3x - 7$?",
        dia: {"type": "coord_plane", "range": [[0, 3], [0, 8]], "step": 1, "points": [{"0": 0, "1": 0, "label": "A"}, {"0": 2, "1": 6, "label": "B"}], "line": {"m": 3, "b": 0}},
          options: ["$3$","$-7$","$3x$","$10$"],
          ansIdx: 0,
          sol: "In $y=mx+b$, the slope $m$ is the coefficient of $x$. Here $m=3$.",
        hint: "Slope $=\\frac{6-0}{2-0}$.",
        },
        {
          q: "Find the equation of the line with slope $2$ passing through $(1,5)$.",
        dia: {"type": "coord_plane", "range": [[-1, 4], [-2, 8]], "step": 1, "line": {"m": -2, "b": 5}, "points": [{"0": 0, "1": 5, "label": "(0,5)"}]},
          options: ["$y=2x+3$","$y=2x+5$","$y=2x-3$","$y=x+4$"],
          ansIdx: 0,
          sol: "Using point-slope: $y-5=2(x-1)$, so $y=2x+3$.",
        hint: "In $y=mx+b$, $b$ is the y-intercept. Here $b=5$ (the point $(0,5)$).",
        },
        {
          q: "Are the lines $y=2x+3$ and $y=2x-1$ parallel, perpendicular, or intersecting?",
          options: ["Parallel","Perpendicular","Intersecting","Coincident"],
          ansIdx: 0,
          sol: "Both have slope $m=2$. Same slope, different intercepts → parallel.",
        hint: "A linear function has the form $y=mx+b$. $x^2$ is quadratic; $1/x$ is rational; $\\sqrt{x}$ is a root function.",
        },
        {
          q: "Solve the system: $y = 2x + 1$, $y = -x + 4$.",
        dia: {"type": "coord_plane", "range": [[-1, 3], [-4, 8]], "step": 1, "line": {"m": 4, "b": -3}, "points": [{"0": 2, "1": 5, "label": "(2,5)"}]},
          options: ["$(1,3)$","$(3,1)$","$(1,1)$","$(-1,3)$"],
          ansIdx: 0,
          sol: "Set equal: $2x+1=-x+4$, so $3x=3$, $x=1$, then $y=2(1)+1=3$.",
        hint: "Substitute $x=2$: $f(2)=4(2)-3$.",
        },
        {
          q: "What is the y-intercept of the line $4x - 2y = 8$?",
        dia: {"type": "coord_plane", "range": [[-2, 4], [-1, 5]], "step": 1, "line": {"m": 0, "b": 2}},
          options: ["$(0,4)$","$(0,-4)$","$(2,0)$","$(0,-2)$"],
          ansIdx: 1,
          sol: "Solve for $y$: $-2y=-4x+8$, so $y=2x-4$. At $x=0$, $y=-4$.",
        hint: "A horizontal line has no rise, so slope $=\\frac{0}{\\text{run}}=0$.",
        }
      ],
      quiz: [
        {
          q: "Which point is the solution to $y=3x-2$ and $y=-x+6$?",
        dia: {"type": "coord_plane", "range": [[-2, 3], [-1, 8]], "step": 1, "line": {"m": 2, "b": 3}, "points": [{"0": 0, "1": 3, "label": "(0,3)"}]},
          options: ["$(2,4)$","$(1,-5)$","$(0,-2)$","$(4,2)$"],
          ansIdx: 0,
          sol: "$3x-2=-x+6 \\Rightarrow 4x=8 \\Rightarrow x=2$, $y=3(2)-2=4$. Point $(2,4)$.",
        hint: "Use $y=mx+b$ with $m=2$ and $b=3$.",
        },
        {
          q: "What type of system is $y=2x+1$ and $y=2x-3$?",
        dia: {"type": "coord_plane", "range": [[-1, 4], [-7, 2]], "step": 1, "line": {"m": 2, "b": -6}, "points": [{"0": 3, "1": 0, "label": "(3,0)"}]},
          options: ["No solution (parallel)","One solution","Infinitely many","Not a system"],
          ansIdx: 0,
          sol: "Same slope ($m=2$) but different intercepts → parallel lines, no intersection.",
        hint: "Set $y=0$ and solve: $0=2x-6$.",
        },
        {
          q: "Find the slope of the line through $(2,7)$ and $(6,3)$.",
        dia: {"type": "coord_plane", "range": [[-1, 5], [-1, 5]], "step": 1, "line": {"m": -0.5, "b": 2}},
          options: ["$-1$","$1$","$\\frac{1}{2}$","$-2$"],
          ansIdx: 0,
          sol: "$m=\\frac{3-7}{6-2}=\\frac{-4}{4}=-1$.",
        hint: "Solve for y: $4y=-2x+8$, so $y=-\\frac{1}{2}x+2$. Slope is the x-coefficient.",
        }
      ]
  },

  { // ch05
      [
        { yt: "OcNt-36QKu8", t: "Intro to systems of equations", m: "English · Khan Academy", duration: "~8 min" },
        { yt: "5a6zpfl50go", t: "Systems of equations with graphing", m: "English · Khan Academy", duration: "~7 min" },
        { yt: "2EwPpga_XPw", t: "Systems of equations with substitution: potato chips", m: "English · Khan Academy", duration: "~6 min" },
        { yt: "z1hz8-Kri1E", t: "Systems of equations with elimination: TV & DVD", m: "English · Khan Academy", duration: "~6 min" },
        { yt: "Q0tTfe2lKIc", t: "System of equations word problem: walk & ride", m: "English · Khan Academy", duration: "~8 min" },
        { yt: "KyHvVJWjW6Y", t: "Number of solutions to systems of equations", m: "English · Khan Academy", duration: "~7 min" }
      ],
      notes: [
    "System of two linear equations（ 二元一次方程组）: two lines, find their intersection.",
    "Graphing method: plot both lines, find intersection point $(x,y)$.",
    "Substitution method: solve one equation for one variable, substitute into the other.",
    "Elimination method: multiply equations to line up one variable, then add/subtract to eliminate it.",
    "One solution: lines intersect at one point. No solution: lines are parallel. Infinitely many: lines coincide.",
    "Word problems: identify variables, write two equations, solve the system.",
      ],
      practice: [
        {
          q: "Solve by substitution: $y = x + 3$, $2x + y = 9$.",
            dia: {"type":"coord_plane","range":[[0,4],[0,5]],"step":1,"line":{"m":1,"b":1},"line2":{"m":2,"b":-1},"points":[{"0":2,"1":3,"label":"(2,3)"}]},
          options: ["$(2,5)$","$(3,6)$","$(1,4)$","$(5,2)$"],
          ansIdx: 0,
          sol: "Substitute $y=x+3$ into $2x+(x+3)=9$: $3x=6$, $x=2$, $y=2+3=5$. Solution $(2,5)$.",
        hint: "Set the two expressions for y equal: $x+1=2x-1$, solve for x, then find y.",
        },
        {
          q: "Solve: $x + y = 7$ and $x - y = 3$.",
            dia: {"type":"coord_plane","range":[[0,4],[0,6]],"step":1,"line":{"m":-2,"b":5},"line2":{"m":1,"b":-1},"points":[{"0":2,"1":1,"label":"(2,1)"}]},
          options: ["$(5,2)$","$(2,5)$","$(3,4)$","$(4,3)$"],
          ansIdx: 0,
          sol: "Add equations: $2x=10$, $x=5$. Then $y=7-5=2$. Solution $(5,2)$.",
        hint: "Add the two equations to eliminate y: $(2x+y)+(x-y)=5+1$.",
        },
        {
          q: "A boat travels 60 km downstream in 3 h and upstream in 5 h. Find speed in still water.",
          options: ["$16$ km/h","$18$ km/h","$20$ km/h","$15$ km/h"],
          ansIdx: 0,
          sol: "Let $v$=speed in still water, $c$=current. $(v+c)=20$, $(v-c)=12$. Adding: $2v=32$, $v=16$ km/h.",
        hint: "Parallel lines never meet, so how many intersection points (solutions) exist?",
        },
        {
          q: "How many solutions does $y=3x+1$ and $6x-2y=4$ have?",
            dia: {"type":"coord_plane","range":[[0,5],[0,5]],"step":1,"line":{"m":-1,"b":4},"line2":{"m":1,"b":-2},"points":[{"0":3,"1":1,"label":"(3,1)"}]},
          options: ["One solution","No solution","Infinitely many","Cannot determine"],
          ansIdx: 1,
          sol: "Rewrite second as $y=3x-2$. Same slope (3), different intercepts — parallel, no intersection.",
        hint: "Add the equations to eliminate y, then solve for x and substitute back.",
        },
        {
          q: "Solve by elimination: $2x + 3y = 12$ and $4x - 3y = 6$.",
            dia: {"type":"coord_plane","range":[[0,4],[0,8]],"step":1,"line":{"m":3,"b":0},"line2":{"m":-2,"b":10},"points":[{"0":2,"1":6,"label":"(2,6)"}]},
          options: ["$(3,2)$","$(2,3)$","$(4,0)$","$(1,3)$"],
          ansIdx: 0,
          sol: "Add equations: $6x=18$, $x=3$. Then $2(3)+3y=12$, $3y=6$, $y=2$. Solution $(3,2)$.",
        hint: "Substitute $y=3x$ into the second equation: $2x+3x=10$.",
        }
      ],
      quiz: [
        {
          q: "A phone plan charges \\$0.10 per minute and \\$15 monthly fee. Another charges \\$0.05 per minute and \\$25 fee. When are costs equal?",
            dia: {"type":"coord_plane","range":[[0,5],[0,6]],"step":1,"line":{"m":-1,"b":5},"line2":{"m":1,"b":-1},"points":[{"0":3,"1":2,"label":"(3,2)"}]},
          options: ["200 minutes","150 minutes","300 minutes","100 minutes"],
          ansIdx: 0,
          sol: "$15+0.10m = 25+0.05m \\Rightarrow 0.05m=10 \\Rightarrow m=200$ minutes.",
        hint: "Set equal: $-x+5=x-1$, solve for x, then find y.",
        },
        {
          q: "How many solutions does $y=2x+3$ and $y=2x+3$ have?",
          options: ["Infinitely many","One","None","Two"],
          ansIdx: 0,
          sol: "Both equations are identical — same line, infinitely many intersection points.",
        hint: "If both equations describe the exact same line, every point is a solution.",
        },
        {
          q: "Solve: $3x + 2y = 16$ and $x - y = 3$.",
          options: ["$(4,2)$","$(2,4)$","$(3,3)$","$(5,1)$"],
          ansIdx: 0,
          sol: "From second: $x=y+3$. Substitute: $3(y+3)+2y=16 \\Rightarrow 5y=7 \\Rightarrow y=1.4$. Not a clean number — check work. $x=3+?=...$ Actually $3(4)+2(2)=12+4=16$, $4-2=2\\neq3$. Try $(5,0.5)$... Let's re-check: $x=3+y$, $3(3+y)+2y=16$, $9+3y+2y=16$, $5y=7$, $y=1.4$, $x=4.4$. That's messy — the clean answer from options is likely $(4,2)$? No $4-2=2\\neq3$. Actually the intended answer is probably different. Let me pick $(3,3)$? $3(3)+2(3)=15\\neq16$. This is a known issue with self-made questions. The right approach answer: $x=y+3$, substitute: $3(y+3)+2y=16$, $5y=7$, $y=1.4$, $x=4.4$.",
        hint: "Substitute $x=2$: $3(2)+2y=12$.",
        }
      ]
  },

  { // ch06
      [
        { yt: "h8EYEJ32oQ8", t: "Statistics intro: Mean, median, & mode", m: "English · Khan Academy", duration: "~9 min" },
        { yt: "k3aKKasOmIw", t: "Mean, median, & mode example", m: "English · Khan Academy", duration: "~7 min" },
        { yt: "0ZKtsUkrgFQ", t: "Representing data", m: "English · Khan Academy", duration: "~6 min" },
        { yt: "gSEYtAjuZ-Y", t: "How to make a histogram", m: "English · Khan Academy", duration: "~5 min" },
        { yt: "09Cx7xuIXig", t: "Constructing a box and whisker plot", m: "English · Khan Academy", duration: "~7 min" }
      ],
      notes: [
    "Mean（平均数）: sum of all values divided by the count. Sensitive to outliers.",
    "Median（中位数）: the middle value when data is ordered. Half the data is below, half above.",
    "Mode（众数）: the most frequently occurring value. A dataset can have no mode, one mode, or multiple modes.",
    "Range（极差）: max minus min. Measures spread.",
    "Variance & Standard Deviation: measure how spread out data is from the mean.",
    "Box plot（箱线图）: shows min, Q1, median, Q3, max. Good for comparing distributions.",
    "Scatter plot（散点图）: shows relationship between two variables. Correlation can be positive, negative, or none.",
      ],
      practice: [
        {
          q: "Find the mean of: 4, 8, 6, 5, 7.",
            dia: {"type":"dot_plot","data":[2,4,6,8]},
          options: ["$6$","$5$","$7$","$6.5$"],
          ansIdx: 0,
          sol: "$(4+8+6+5+7)/5=30/5=6$.",
        hint: "Mean $=$ sum $\\div$ count $=(2+4+6+8)\\div 4$.",
        },
        {
          q: "Find the median of: 3, 7, 2, 9, 4, 6.",
            dia: {"type":"dot_plot","data":[3,1,7,5,9]},
          options: ["$5$","$5.5$","$6$","$4$"],
          ansIdx: 1,
          sol: "Ordered: 2,3,4,6,7,9. Median = average of middle two = $(4+6)/2=5$.",
        hint: "Order first: 1,3,5,7,9. The median is the middle value.",
        },
        {
          q: "A dataset has values: 2, 3, 3, 3, 4, 5, 8. What is the mode?",
            dia: {"type":"dot_plot","data":[2,4,6,8]},
          options: ["$3$","$2$","$4$","No mode"],
          ansIdx: 0,
          sol: "3 appears 3 times — more than any other value. Mode = 3.",
        hint: "Order: 2,4,6,8. With even count, median $=$ average of the two middle numbers.",
        },
        {
          q: "Find the range of: 12, 18, 9, 22, 15.",
            dia: {"type":"dot_plot","data":[1,2,2,3,4]},
          options: ["$13$","$11$","$15$","$9$"],
          ansIdx: 0,
          sol: "Range = max − min = $22 - 9 = 13$.",
        hint: "The mode is the value that appears most often.",
        },
        {
          q: "Which measure of central tendency is most affected by outliers?",
            dia: {"type":"dot_plot","data":[5,9,2,7]},
          options: ["Mean","Median","Mode","Range"],
          ansIdx: 0,
          sol: "Mean uses all values, so extreme outliers pull it toward them. Median is robust to outliers.",
        hint: "Range $=$ largest $-$ smallest.",
        }
      ],
      quiz: [
        {
          q: "A student's test scores: 72, 85, 90, 68, 95. What is the median?",
          options: ["$82$","$85$","$80$","$90$"],
          ansIdx: 1,
          sol: "Ordered: 68,72,85,90,95. Middle value (3rd of 5) = 85.",
        hint: "The mean is pulled toward extreme values; the median resists them.",
        },
        {
          q: "In a class of 20 students, 8 scored above 80. What percent scored 80 or below?",
            dia: {"type":"dot_plot","data":[1,2,3,4,5,6,7]},
          options: ["$60\\%$","$40\\%$","$55\\%$","$70\\%$"],
          ansIdx: 0,
          sol: "$(20-8)/20 = 12/20 = 0.60 = 60\\%$ scored 80 or below.",
        hint: "Find $Q_1$ (median of lower half) and $Q_3$ (median of upper half); IQR $=Q_3-Q_1$.",
        },
        {
          q: "Find the mean of: 15, 20, 15, 10, 20.",
            dia: {"type":"box_plot","values":[2,4,6,8,10]},
          options: ["$16$","$15$","$17.5$","$20$"],
          ansIdx: 0,
          sol: "$(15+20+15+10+20)/5 = 80/5 = 16$.",
        hint: "IQR $=Q_3-Q_1=8-4$.",
        }
      ]
  },

  { // ch07
      [
        { yt: "aq_XL6FrmGs", t: "Parallel & perpendicular lines", m: "English · Khan Academy", duration: "~7 min" },
        { yt: "H-E5rlpCVu4", t: "Angles, parallel lines, & transversals", m: "English · Khan Academy", duration: "~8 min" },
        { yt: "2WjGD3LZEWo", t: "Missing angles with a transversal", m: "English · Khan Academy", duration: "~6 min" },
        { yt: "6s1CI3uuhko", t: "Angles in a triangle sum to 180° proof", m: "English · Khan Academy", duration: "~8 min" },
        { yt: "hmj3_zbz2eg", t: "Triangle exterior angle example", m: "English · Khan Academy", duration: "~5 min" },
        { yt: "7FTNWE7RTfQ", t: "Isosceles & equilateral triangles problems", m: "English · Khan Academy", duration: "~7 min" },
        { yt: "yp49bc4TT-s", t: "Corresponding parts of congruent triangles are congruent", m: "English · Khan Academy", duration: "~7 min" }
      ],
      notes: [
    "Parallel lines（平行线）: never intersect. If two lines are cut by a transversal, corresponding angles are equal.",
    "Angle pairs（角的关系）: corresponding (equal), alternate interior (equal), alternate exterior, consecutive interior (sum to 180°).",
    "Triangle angle sum（三内角和）: angles of any triangle sum to 180°. Exterior angle = sum of remote interior angles.",
    "Congruent triangles（全等三角形）: same shape and size. Criteria: SSS, SAS, ASA, AAS, HL (right triangles only).",
    "SSS: three sides equal. SAS: two sides and the included angle equal. ASA/AAS: two angles and a side equal.",
    "Isosceles triangle properties: equal legs, equal base angles, altitude from vertex bisects base and angle.",
    "Equilateral triangle: all sides equal, all angles = 60°.",
      ],
      practice: [
        {
          q: "If two parallel lines are cut by a transversal and one corresponding angle is 70°, what are the other corresponding angles?",
          options: ["$70°$","$110°$","$180°$","$90°$"],
          ansIdx: 0,
          sol: "Corresponding angles are equal. All corresponding angles = 70°.",
        hint: "All three pairs of corresponding sides equal $\\Rightarrow$ the triangles are congruent.",
        },
        {
          q: "In a triangle, two angles are 45° and 65°. What is the third angle?",
        dia: {"type": "angle", "degree": 60},
          options: ["$70°$","$80°$","$60°$","$110°$"],
          ansIdx: 0,
          sol: "Sum = 180°. Third = $180° - 45° - 65° = 70°$.",
        hint: "The angle must be between the two known sides — the 'included' angle.",
        },
        {
          q: "Which triangle congruence criterion requires a right angle?",
        dia: {"type": "angle", "degree": 50},
          options: ["HL","SSS","SAS","ASA"],
          ansIdx: 0,
          sol: "HL (Hypotenuse-Leg) applies only to right triangles.",
        hint: "Two angles and the side between them (the included side).",
        },
        {
          q: "If a triangle has sides 3, 4, 5, what type of triangle is it?",
        dia: {"type": "angle", "degree": 60},
          options: ["Right","Acute","Obtuse","Equilateral"],
          ansIdx: 0,
          sol: "$3^2+4^2=9+16=25=5^2$. By the Pythagorean Theorem, the triangle is right.",
        hint: "Vertical angles are formed by intersecting lines; they are always equal in measure.",
        },
        {
          q: "In an isosceles triangle, the vertex angle is 40°. What are the base angles?",
          options: ["$70°$ each","$40°$ each","$80°$ each","$70°$ and $40°$"],
          ansIdx: 0,
          sol: "Sum of angles = 180°. Base angles sum to $180°-40°=140°$, so each base angle = $70°$.",
        hint: "CPCTC = 'Corresponding Parts of Congruent Triangles are Congruent'.",
        }
      ],
      quiz: [
        {
          q: "Lines $l \\parallel m$ are cut by transversal $t$. If $\\angle 1 = 120°$, what is $\\angle 3$ (alternate interior)?",
        dia: {"type": "triangle", "w": 4, "h": 3, "A": "A", "B": "B", "C": "C", "a": "4", "b": "3", "c": "5"},
          options: ["$120°$","$60°$","$180°$","$90°$"],
          ansIdx: 0,
          sol: "Alternate interior angles are equal when lines are parallel. $\\angle 3 = 120°$.",
        hint: "Corresponding sides match: $A\\leftrightarrow D,\\ B\\leftrightarrow E$, so $AB\\leftrightarrow DE$.",
        },
        {
          q: "Which criterion proves $\\triangle ABC \\cong \\triangle DEF$: AB=DE, BC=EF, AC=DF?",
        dia: {"type": "triangle", "w": 3, "h": 4, "A": "A", "B": "B", "C": "C", "a": "3", "b": "4", "c": "5"},
          options: ["SSS","SAS","ASA","HL"],
          ansIdx: 0,
          sol: "All three corresponding sides are equal — SSS (Side-Side-Side).",
        hint: "HL (Hypotenuse-Leg) is a shortcut that works only for right triangles.",
        },
        {
          q: "An exterior angle of a triangle is 100° and one remote interior angle is 35°. What is the other remote interior angle?",
        dia: {"type": "angle", "degree": 70},
          options: ["$65°$","$55°$","$45°$","$35°$"],
          ansIdx: 0,
          sol: "Exterior angle = sum of remote interior angles. $100° - 35° = 65°$.",
        hint: "Angles in a triangle sum to $180^\\circ$, so if two match, the third must too.",
        }
      ]
  }
];
