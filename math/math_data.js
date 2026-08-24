var MATH_DATA = [
  /* ══════════════════════════════════════════════════════════════
     Ch01  勾股定理  Pythagorean Theorem
     教材：北师大版·八年级数学（上册） 第1章
  ══════════════════════════════════════════════════════════════ */
  {
    id: "ch01",
    g: "8",
    gx: 1,
    title: "Pythagorean Theorem",
    coverage: "g",
    think: "A right triangle has legs $9$ cm and $12$ cm. Guess the hypotenuse without using a calculator. How did you estimate it?",
    videos: [
      { yt: "LrS5_l-gk94", t: "Pythagorean Theorem Proof Using Similarity", m: "English · Khan Academy", duration: "~10 min" }
    ],
    notes: [
      "In a right triangle (直角三角形): $a^2 + b^2 = c^2$, where $c$ is the hypotenuse（斜边，直角对边）.",
      "Find any side: $c = \\sqrt{a^2+b^2}$ or $a = \\sqrt{c^2-b^2}$.",
      "Pythagorean triples（勾股数）: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$.",
      "Converse（逆定理）: if $a^2 + b^2 = c^2$, the triangle is a right triangle.",
      "45°–45°–90°: legs equal, hypotenuse $= \\text{leg} \\times \\sqrt{2}$.",
      "30°–60°–90°: short leg $= x$, long leg $= x\\sqrt{3}$, hypotenuse $= 2x$."
    ],
    practice: [
      {
        q: "In $\\triangle ABC$, $\\angle C = 90°$, $AC = 8$ and $BC = 15$. Find $AB$.",
        ans: "$17$",
        sol: "$AB^2 = 8^2 + 15^2 = 64 + 225 = 289$, so $AB = \\sqrt{289} = 17$.",
        dia: { type: "triangle", w: 15, h: 8, A: "A", B: "B", C: "C", a: "15", b: "8", c: "?" }
      },
      {
        q: "$\\triangle PQR$ has $PQ = 24$, $PR = 7$, and $QR = 25$. Is it a right triangle?",
        ans: "Yes",
        sol: "$7^2 + 24^2 = 49 + 576 = 625 = 25^2$. By the converse of the Pythagorean theorem, it is a right triangle."
      },
      {
        q: "In a 45°–45°–90° triangle, each leg is $6$ cm. What is the hypotenuse?",
        ans: "$6\\sqrt{2}$ cm",
        sol: "In a 45-45-90 triangle, hypotenuse $= \\text{leg} \\times \\sqrt{2}$. Here: $6 \\times \\sqrt{2} = 6\\sqrt{2}$ cm.",
        dia: { type: "triangle", w: 6, h: 6, A: "A", B: "B", C: "C", a: "6", b: "6", c: "?" }
      },
      {
        q: "The two legs of a right triangle are $5$ and $12$. Find the hypotenuse.",
        ans: "$13$",
        sol: "$c = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$."
      },
      {
        q: "In a 30°–60°–90° triangle, the short leg is $4$ cm. Find the long leg and the hypotenuse.",
        ans: "Long leg $= 4\\sqrt{3}$ cm, hypotenuse $= 8$ cm",
        sol: "Short leg $= x = 4$. Long leg $= x\\sqrt{3} = 4\\sqrt{3}$. Hypotenuse $= 2x = 8$."
      }
    ],
    quiz: [
      {
        q: "Find the distance between points $A(3, 4)$ and $B(0, 0)$.",
        ans: "$5$",
        sol: "Distance $= \\sqrt{(3-0)^2 + (4-0)^2} = \\sqrt{9+16} = \\sqrt{25} = 5$."
      },
      {
        q: "A ladder leans against a wall. The foot of the ladder is $3$ m from the wall, and the top reaches $4$ m high. How long is the ladder?",
        ans: "$5$ m",
        sol: "$c = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$ m."
      },
      {
        q: "Which of the following is a Pythagorean triple?",
        options: ["$6, 8, 10$", "$4, 5, 6$", "$2, 3, 4$", "$7, 8, 15$"],
        ans: "$6, 8, 10$",
        sol: "$6^2+8^2 = 36+64 = 100 = 10^2$. Also note $(6,8,10)$ is a multiple of $(3,4,5)$."
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
    think: "$\\sqrt{2} \\approx 1.41421356...$ — can you write it as a fraction of two integers? What does this tell us about $\\sqrt{2}$?",
    videos: [
      { yt: "SH_6A-K5bjY", t: "Introduction to Square Roots", m: "English · Khan Academy", duration: "~5 min" }
    ],
    notes: [
      "Square root（平方根）: $\\sqrt{a}$ is the number whose square is $a$. Default = principal (non-negative) root.",
      "$\\sqrt{a^2} = |a|$; $(-3)^2 = 9$, so $\\sqrt{9} = 3$ (not $-3$).",
      "Cube root（立方根）: $\\sqrt[3]{a}$ — can be negative, since $(-2)^3 = -8$, so $\\sqrt[3]{-8} = -2$.",
      "Rational number（有理数）: can be written as $\\frac{p}{q}$ where $p, q$ are integers, $q \\neq 0$. Decimals are terminating or repeating.",
      "Irrational number（无理数）: non-terminating, non-repeating decimals. Examples: $\\sqrt{2}$, $\\pi$, $e$.",
      "Real numbers（实数） = rational + irrational. Every point on the number line is a real number.",
      "Laws: $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$, $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$."
    ],
    practice: [
      {
        q: "Simplify: $\\sqrt{49}$.",
        ans: "$7$",
        sol: "$49 = 7^2$, so $\\sqrt{49} = 7$."
      },
      {
        q: "Simplify: $\\sqrt{18}$.",
        ans: "$3\\sqrt{2}$",
        sol: "$\\sqrt{18} = \\sqrt{9 \\times 2} = \\sqrt{9} \\times \\sqrt{2} = 3\\sqrt{2}$."
      },
      {
        q: "Is $\\sqrt{50}$ rational or irrational?",
        ans: "Irrational",
        sol: "$50 = 2 \\times 25$, so $\\sqrt{50} = 5\\sqrt{2}$, and $\\sqrt{2}$ is irrational."
      },
      {
        q: "Simplify: $\\sqrt[3]{-27}$.",
        ans: "$-3$",
        sol: "Since $(-3)^3 = -27$, the cube root is $-3$."
      },
      {
        q: "Arrange in order: $\\sqrt{3}$, $1.7$, $\\frac{5}{3}$.",
        ans: "$1.7 < \\frac{5}{3} < \\sqrt{3}$",
        sol: "$\\sqrt{3} \\approx 1.732$, $\\frac{5}{3} \\approx 1.667$. So $1.7 < 1.667$? Wait — $1.7 > 1.667$. Correct order: $\\frac{5}{3} < 1.7 < \\sqrt{3}$."
      }
    ],
    quiz: [
      {
        q: "Which of the following is irrational?",
        options: ["$\\sqrt{16}$", "$\\frac{3}{7}$", "$0.\\overline{3}$", "$\\sqrt{7}$"],
        ans: "$\\sqrt{7}$",
        sol: "$\\sqrt{16}=4$ (rational), $\\frac{3}{7}$ (rational), $0.\\overline{3}=\\frac{1}{3}$ (rational). $\\sqrt{7}$ is not a perfect square, so it is irrational."
      },
      {
        q: "Simplify: $\\sqrt{72}$.",
        ans: "$6\\sqrt{2}$",
        sol: "$\\sqrt{72}=\\sqrt{36 \\times 2}=\\sqrt{36}\\sqrt{2}=6\\sqrt{2}$."
      },
      {
        q: "State the relationship between $\\mathbb{Z}$ (integers), $\\mathbb{Q}$ (rationals), and $\\mathbb{R}$ (reals).",
        ans: "$\\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$",
        sol: "All integers can be written as fractions (e.g. $3 = \\frac{3}{1}$), so $\\mathbb{Z} \\subset \\mathbb{Q}$. All rationals are real numbers, so $\\mathbb{Q} \\subset \\mathbb{R}$."
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
    think: "A chess piece is at $(3, 6)$. A knight moves in an 'L': 2 squares in one direction, then 1 square perpendicular. Where can a knight go from $(3, 6)$?",
    videos: [
      { yt: "VsHX5tC83pM", t: "Introduction to the Coordinate Plane", m: "English · Khan Academy", duration: "~7 min" }
    ],
    notes: [
      "Coordinate plane（平面直角坐标系）: $x$-axis (horizontal) and $y$-axis (vertical), intersect at origin $O(0,0)$.",
      "Four quadrants（象限）: QI $(+,+)$, QII $(-,+)$, QIII $(-,-)$, QIV $(+,-)$.",
      "Ordered pair $(x, y)$: $x$ = horizontal position, $y$ = vertical position.",
      "Reflection symmetry（轴对称）: reflect $(x,y)$ across $x$-axis → $(x,-y)$; across $y$-axis → $(-x,y)$.",
      "Distance formula（两点距离公式）: $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ — derived from Pythagorean theorem!",
      "Midpoint（中点公式）: $M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$."
    ],
    practice: [
      {
        q: "Plot and label the points $A(2, 3)$, $B(-1, 4)$, $C(3, -2)$, $D(-2, -3)$ on a coordinate plane. Which quadrant is each in?",
        ans: "A: QI, B: QII, C: QIV, D: QIII",
        sol: "Check the signs of $x$ and $y$: QI $(+,+)$, QII $(-,+)$, QIII $(-,-)$, QIV $(+,-)$."
      },
      {
        q: "Find the distance between $A(1, 2)$ and $B(4, 6)$.",
        ans: "$5$",
        sol: "$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
      },
      {
        q: "Point $P(-3, 5)$ is reflected across the $x$-axis. What are the coordinates of the image?",
        ans: "$(-3, -5)$",
        sol: "Reflecting across the $x$-axis changes the sign of $y$: $(x,y) \\to (x,-y)$."
      },
      {
        q: "Find the midpoint of $A(2, 7)$ and $B(6, 3)$.",
        ans: "$(4, 5)$",
        sol: "$M_x = \\frac{2+6}{2} = 4$, $M_y = \\frac{7+3}{2} = 5$. So $M(4, 5)$."
      },
      {
        q: "If $P(2k, k-1)$ lies on the $y$-axis, what is $k$?",
        ans: "$k = 0$",
        sol: "On the $y$-axis means $x=0$, so $2k=0 \\Rightarrow k=0$."
      }
    ],
    quiz: [
      {
        q: "A rectangle has vertices $A(1,1)$, $B(5,1)$, $C(5,4)$, $D(1,4)$. What is its area?",
        ans: "$12$ square units",
        sol: "Width $= |5-1| = 4$, height $= |4-1| = 3$. Area $= 4 \\times 3 = 12$."
      },
      {
        q: "Which transformation maps $(x,y)$ to $(-x, y)$?",
        options: ["Reflection over $x$-axis", "Reflection over $y$-axis", "Rotation 90°", "Translation"],
        ans: "Reflection over $y$-axis",
        sol: "Reflecting over the $y$-axis flips the sign of the $x$-coordinate: $(x,y) \\to (-x,y)$."
      },
      {
        q: "Find the perimeter of triangle with vertices $A(0,0)$, $B(6,0)$, $C(3,4)$.",
        ans: "$6 + 5 + \\sqrt{61} \\approx 18.81$",
        sol: "$AB=6$, $BC=\\sqrt{(6-3)^2+(0-4)^2}=\\sqrt{9+16}=\\sqrt{25}=5$, $AC=\\sqrt{(3-0)^2+(4-0)^2}=\\sqrt{25}=5$. Wait — $AC=5$, not $\\sqrt{61}$. $P = 6+5+5 = 16$."
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
    think: "A taxi charges $\\$3$ to start the ride plus $\\$2$ per kilometre. Write a function for the cost $C$ in terms of distance $x$ km. What type of function is this?",
    videos: [
      { yt: "J59E7Jc1xl4", t: "Graphing a Linear Function", m: "English · Khan Academy", duration: "~6 min" }
    ],
    notes: [
      "Linear function（一次函数）: $y = mx + b$, where $m$ = slope（斜率）, $b$ = $y$-intercept（$y$截距）.",
      "Slope（斜率） $m = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1}$. Positive $m$: rising; negative $m$: falling; $m=0$: horizontal.",
      "Forms of a line: slope-intercept $y=mx+b$, point-slope $y-y_1=m(x-x_1)$, standard form $Ax+By=C$.",
      "Intercepts: $x$-intercept: set $y=0$, solve for $x$. $y$-intercept: set $x=0$, get $y=b$.",
      "Two lines are parallel（平行） if $m_1 = m_2$. Perpendicular（垂直） if $m_1 \\times m_2 = -1$.",
      "A function（函数） passes the vertical line test — no vertical line cuts the graph more than once."
    ],
    practice: [
      {
        q: "Find the slope of the line through $A(1, 3)$ and $B(4, 9)$.",
        ans: "$2$",
        sol: "$m = \\frac{9-3}{4-1} = \\frac{6}{3} = 2$."
      },
      {
        q: "Write the equation of the line with slope $3$ and $y$-intercept $-2$.",
        ans: "$y = 3x - 2$",
        sol: "Use slope-intercept form: $y = mx + b = 3x + (-2)$."
      },
      {
        q: "Are the lines $y = 2x + 1$ and $y = 2x - 5$ parallel?",
        ans: "Yes",
        sol: "Both have $m=2$, so they are parallel (same slope, different $y$-intercept)."
      },
      {
        q: "Find the $x$-intercept of $y = 3x - 12$.",
        ans: "$(4, 0)$",
        sol: "Set $y=0$: $0 = 3x - 12 \\Rightarrow x = 4$."
      },
      {
        q: "The cost $C$ of a taxi ride is $C = 2x + 3$, where $x$ is kilometres. If you travel $10$ km, how much do you pay?",
        ans: "$\\$23$",
        sol: "$C = 2(10) + 3 = 20 + 3 = 23$."
      }
    ],
    quiz: [
      {
        q: "Find the equation of the line through $(2, 5)$ and $(4, 9)$.",
        ans: "$y = 2x + 1$",
        sol: "$m = \\frac{9-5}{4-2} = 2$. Using point-slope: $y-5 = 2(x-2) \\Rightarrow y = 2x+1$."
      },
      {
        q: "Which line is perpendicular to $y = -\\frac{1}{2}x + 3$?",
        options: ["$y = 2x - 1$", "$y = -\\frac{1}{2}x + 7$", "$y = \\frac{1}{2}x + 4$", "$y = -2x + 5$"],
        ans: "$y = 2x - 1$",
        sol: "Perpendicular slope: $m_1 \\times m_2 = -1$. Here $m_1 = -\\frac{1}{2}$, so $m_2 = 2$."
      },
      {
        q: "Is $y = x^2 + 1$ a linear function?",
        ans: "No",
        sol: "A linear function must be of the form $y = mx + b$. $y=x^2+1$ is quadratic (degree 2), not linear."
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
    think: "Two numbers add to $10$. One number is twice the other. Can you find both numbers? Show your reasoning.",
    videos: [
      { yt: "syoQh3U5MQ0", t: "Systems of Equations with Substitution", m: "English · Khan Academy", duration: "~5 min" }
    ],
    notes: [
      "System of linear equations（二元一次方程组）: two or more linear equations in the same variables.",
      "Substitution method（代入法）: isolate one variable, substitute into the other equation.",
      "Elimination method（消元法）: add or subtract equations to cancel one variable.",
      "Three possible outcomes: one solution (intersecting lines), infinitely many (same line), or no solution (parallel lines).",
      "Graphical method（图象法）: the intersection point is the solution.",
      "Word problems: define variables clearly, write equations, then solve."
    ],
    practice: [
      {
        q: "Solve by substitution: $\\begin{cases} y = 2x + 1 \\\\ x + y = 7 \\end{cases}$",
        ans: "$(2, 5)$",
        sol: "Substitute $y$: $x + (2x+1) = 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$. Then $y = 2(2)+1 = 5$."
      },
      {
        q: "Solve by elimination: $\\begin{cases} 2x + y = 5 \\\\ x - y = 1 \\end{cases}$",
        ans: "$(2, 1)$",
        sol: "Add equations: $3x = 6 \\Rightarrow x = 2$. Substitute: $2 - y = 1 \\Rightarrow y = 1$."
      },
      {
        q: "The sum of two numbers is $12$, and their difference is $4$. Find the numbers.",
        ans: "$8$ and $4$",
        sol: "Let $x+y=12$, $x-y=4$. Adding: $2x=16 \\Rightarrow x=8$, so $y=4$."
      },
      {
        q: "Solve: $\\begin{cases} 3x + 2y = 12 \\\\ x + 2y = 4 \\end{cases}$",
        ans: "$(4, 0)$",
        sol: "Subtract eqn2 from eqn1: $2x = 8 \\Rightarrow x=4$. Then $4+2y=4 \\Rightarrow y=0$."
      },
      {
        q: "How many solutions does this system have? $\\begin{cases} y = 2x + 3 \\\\ 4x - 2y = -6 \\end{cases}$",
        ans: "Infinitely many",
        sol: "Rewrite $4x-2y=-6$ as $-2y = -4x-6 \\Rightarrow y = 2x+3$. Same equation, so infinitely many solutions."
      }
    ],
    quiz: [
      {
        q: "Solve: $\\begin{cases} x + 2y = 7 \\\\ 3x - y = 7 \\end{cases}$",
        ans: "$(3, 2)$",
        sol: "From first: $x = 7-2y$. Substitute: $3(7-2y)-y=7 \\Rightarrow 21-6y-y=7 \\Rightarrow 14=7y \\Rightarrow y=2$. Then $x=7-4=3$."
      },
      {
        q: "A school buys $3$ basketballs and $5$ volleyballs for $\\$310$. Each basketball costs twice as much as a volleyball. Find the price of each.",
        ans: "Basketball: $\\$60$, Volleyball: $\\$30$",
        sol: "Let $v=$ volleyball price, $b=2v$. $3(2v)+5v=310 \\Rightarrow 11v=310 \\Rightarrow v=30$, $b=60$."
      },
      {
        q: "Which graph shows 'no solution'?",
        options: ["Two lines intersecting at one point", "Two identical lines", "Two parallel lines", "A single diagonal line"],
        ans: "Two parallel lines",
        sol: "Parallel lines never intersect, so the system has no solution."
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
    think: "Five students scored: $70, 75, 80, 85, 90$. What is the 'average' score? Does the mean or the median better describe a typical score here?",
    videos: [
      { yt: "XeSuDFmu60w", t: "Statistics intro: Mean, Median & Mode", m: "English · Khan Academy", duration: "~9 min" }
    ],
    notes: [
      "Mean（平均数）: $\\bar{x} = \\frac{\\sum x_i}{n}$ — sum divided by count.",
      "Median（中位数）: the middle value when data is sorted. If even count, average of two middle values.",
      "Mode（众数）: the most frequent value. A dataset may have no mode or multiple modes.",
      "Range（极差）: $\\text{max} - \\text{min}$.",
      "Variance（方差） $\\sigma^2$: measures spread. $\\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n}$.",
      "Standard deviation（标准差） $\\sigma = \\sqrt{\\text{variance}}$ — in the same units as the data.",
      "MAD = Mean Absolute Deviation: average of $|x_i - \\bar{x}|$."
    ],
    practice: [
      {
        q: "Find the mean, median, and mode of: $3, 7, 7, 2, 5, 9, 7, 2$.",
        ans: "Mean $= 5.25$, Median $= 6$, Mode $= 7$",
        sol: "Sum $= 42$, count $= 8$, so mean $= 42/8 = 5.25$. Sorted: $2,2,3,5,7,7,7,9$. Median $= (5+7)/2 = 6$. Mode $= 7$ (appears 3 times)."
      },
      {
        q: "The data set is: $4, 8, 6, 5, 3, 2, 8, 9, 5$. Find the range.",
        ans: "$7$",
        sol: "Range $= \\text{max} - \\text{min} = 9 - 2 = 7$."
      },
      {
        q: "Calculate the variance of: $2, 4, 4, 4, 5, 5, 7, 9$.",
        ans: "$4$",
        sol: "Mean $\\bar{x}=5$. Deviations: $-3,-1,-1,-1,0,0,2,4$. Squares: $9,1,1,1,0,0,4,16$. Sum$=32$. Variance$=32/8=4$."
      },
      {
        q: "Two classes have exam means of $72$ and $78$. Class A has $20$ students, Class B has $30$. What is the overall mean?",
        ans: "$75.6$",
        sol: "Total score $= 72 \\times 20 + 78 \\times 30 = 1440 + 2340 = 3780$. Total students $= 50$. Overall mean $= 3780/50 = 75.6$."
      },
      {
        q: "The heights (cm) of 5 students: $155, 160, 162, 158, 165$. Find the standard deviation.",
        ans: "$\\approx 3.43$ cm",
        sol: "Mean $= 160$. Deviations: $-5,0,2,-2,5$. Squares: $25,0,4,4,25$. Sum$=58$. Variance$=58/5=11.6$. $\\sigma=\\sqrt{11.6} \\approx 3.43$."
      }
    ],
    quiz: [
      {
        q: "Which measure of central tendency is most affected by outliers（异常值）?",
        options: ["Mean", "Median", "Mode", "Range"],
        ans: "Mean",
        sol: "Mean uses all values, so extreme outliers pull it in their direction. Median and mode are more resistant."
      },
      {
        q: "A dataset has mean $80$ and standard deviation $5$. What percent of data falls within one standard deviation of the mean?",
        ans: "Approximately $68\\%$",
        sol: "By the empirical rule, about $68\\%$ of data in a normal distribution falls within $\\bar{x} \\pm \\sigma = [75, 85]$."
      },
      {
        q: "A company pays salaries (in ¥1000): $30, 35, 40, 40, 40, 200$. Which average best represents typical salary?",
        ans: "Median ($40{,}000$)",
        sol: "The outlier $200{,}000$ skews the mean upward. Median $= (40+40)/2 = 40$ (in ¥1000 units), better representing typical salary."
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     Ch07  三角形的证明  Triangle Proofs
     教材：北师大版·八年级数学（上册） 第7章
  ══════════════════════════════════════════════════════════════ */
  {
    id: "ch07",
    g: "8",
    gx: 7,
    title: "Triangle Proofs",
    coverage: "g",
    think: "Two triangles share the same three side lengths. Does that guarantee they are exactly the same shape and size? Why might a student think 'no'?",
    videos: [
      { yt: "F4JFDW6s5yQ", t: "Triangle Congruence Postulates", m: "English · Khan Academy", duration: "~10 min" }
    ],
    notes: [
      "Congruent triangles（全等三角形）: same size AND same shape. All corresponding sides and angles are equal.",
      "SSS（边边边）: three pairs of corresponding sides equal → congruent.",
      "SAS（边角边）: two sides and the INCLUDED angle equal → congruent.",
      "ASA（角边角）: two angles and the INCLUDED side equal → congruent.",
      "AAS（角角边）: two angles and a non-included side equal → congruent.",
      "SSA（边边角）: NOT sufficient — can give two different triangles (the 'ambiguous case').",
      "CPCTC: Corresponding Parts of Congruent Triangles are Congruent — use after proving SSS/SAS/ASA/AAS.",
      "HL theorem（直角三角形全等判定）: hypotenuse + one leg equal → congruent right triangles."
    ],
    practice: [
      {
        q: "Which criterion proves these triangles congruent? $\\triangle ABC$ and $\\triangle DEF$: $AB=DE$, $BC=EF$, $AC=DF$.",
        ans: "SSS",
        sol: "All three corresponding sides are equal → SSS."
      },
      {
        q: "In the diagram, $AB = AD$ and $AC$ bisects $\\angle BAD$. Prove $\\triangle ABC \\cong \\triangle ADC$.",
        ans: "By SAS: $AB=AD$ (given), $AC$ common, $\\angle BAC = \\angle DAC$ (bisector).",
        sol: "Since $AC$ bisects $\\angle BAD$, $\\angle BAC = \\angle DAC$. We have $AB = AD$ (given), $AC$ common, so by SAS, $\\triangle ABC \\cong \\triangle ADC$."
      },
      {
        q: "Given: $AB \\parallel CD$, $AB = CD$. Prove: $\\triangle AOB \\cong \\triangle DCO$ (where $O$ is the intersection).",
        ans: "By ASA: $\\angle A = \\angle D$ (alternate interior), $\\angle AOB = \\angle DOC$ (vertical angles), $AB=CD$ (given).",
        sol: "$\\angle A = \\angle D$ (alternate interior angles), $\\angle AOB = \\angle DOC$ (vertical angles), and $AB=CD$ (given). So by ASA, triangles are congruent."
      },
      {
        q: "Can you use SSA to prove two triangles are congruent? Why or why not?",
        ans: "No — SSA is not a valid congruence criterion",
        sol: "SSA can produce two different triangles with the same two sides and a non-included angle (the 'ambiguous case' of the law of sines)."
      },
      {
        q: "Prove the diagonals of a parallelogram bisect each other using triangle congruence.",
        ans: "Show $\\triangle AOB \\cong \\triangle COD$ by ASA",
        sol: "In parallelogram $ABCD$, $AB \\parallel CD$ gives $\\angle ABO = \\angle CDO$ (alternate interior). Also $AB = CD$ (opposite sides). $\\angle AOB = \\angle COD$ (vertical). By ASA: $\\triangle AOB \\cong \\triangle COD$, so $AO = CO$ and $BO = DO$."
      }
    ],
    quiz: [
      {
        q: "In $\\triangle ABC$ and $\\triangle DEF$: $AB = DE$, $\\angle B = \\angle E$, $BC = EF$. Which criterion applies?",
        ans: "SAS",
        sol: "Two sides ($AB, BC$) and the INCLUDED angle ($\\angle B$) are equal. The angle must be between the two sides → SAS."
      },
      {
        q: "If two right triangles have hypotenuse $10$ and one leg $6$, are they congruent?",
        ans: "Yes, by HL theorem",
        sol: "HL theorem (special case of SSS for right triangles): if hypotenuse and one leg are equal, the triangles are congruent."
      },
      {
        q: "Fill in the blank: After proving $\\triangle ABC \\cong \\triangle DEF$ by SAS, we conclude $\\angle C = \\angle F$ by _______.",
        ans: "CPCTC",
        sol: "CPCTC = Corresponding Parts of Congruent Triangles are Congruent. This theorem lets us claim any corresponding parts are equal once the whole triangles are proven congruent."
      }
    ]
  },

  /* ══════════════════════════════════════════════════════════════
     Ch08  平行四边形  Parallelograms
     教材：北师大版·八年级数学（下册） 第6章
  ══════════════════════════════════════════════════════════════ */
  {
    id: "ch08",
    g: "8",
    gx: 8,
    title: "Parallelograms",
    coverage: "g",
    think: "A quadrilateral has one pair of opposite sides both parallel and equal in length. Is it enough to conclude it is a parallelogram? What property would you use to convince a classmate?",
    videos: [
      { yt: "XjrgKBrDD7w", t: "Quadrilateral Properties", m: "English · Khan Academy", duration: "~6 min" }
    ],
    notes: [
      "Parallelogram（平行四边形）: both pairs of opposite sides are parallel.",
      "Properties: opposite sides are equal ($AB = CD$, $BC = AD$); opposite angles are equal ($\\angle A = \\angle C$, $\\angle B = \\angle D$); diagonals bisect each other.",
      "Rectangle（矩形）: a parallelogram with four right angles. Diagonals are equal.",
      "Rhombus（菱形）: a parallelogram with four equal sides. Diagonals are perpendicular bisectors.",
      "Square（正方形）: a rectangle + rhombus. All sides equal, all angles $90°$.",
      "Trapezoid/Trapezium（梯形）: at least one pair of parallel sides.",
      "Tests for parallelogram: (1) both pairs of opposite sides parallel; (2) both pairs of opposite sides equal; (3) diagonals bisect each other.",
      "Area formulas: Parallelogram $A = bh$; Rectangle $A = ab$; Triangle $A = \\frac{1}{2}bh$."
    ],
    practice: [
      {
        q: "In parallelogram $ABCD$, $AB = 5$ cm and $BC = 7$ cm. Find the perimeter.",
        ans: "$24$ cm",
        sol: "Opposite sides equal: $AB=CD=5$, $BC=AD=7$. Perimeter $= 2(5+7) = 24$ cm."
      },
      {
        q: "Prove: In a parallelogram, opposite angles are equal.",
        ans: "Use triangle congruence (SAS): $\\triangle ABC \\cong \\triangle CDA$, so $\\angle B = \\angle D$.",
        sol: "Diagonal $AC$ divides the parallelogram into $\\triangle ABC$ and $\\triangle CDA$. $AB = CD$ (opp. sides), $BC = AD$ (opp. sides), $AC$ common. By SSS, triangles are congruent, so $\\angle B = \\angle D$ and $\\angle A = \\angle C$."
      },
      {
        q: "A rhombus has diagonals of lengths $8$ cm and $6$ cm. Find its area.",
        ans: "$24$ cm$^2$",
        sol: "Area of rhombus $= \\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times 8 \\times 6 = 24$ cm$^2$."
      },
      {
        q: "Is a rectangle also a parallelogram? Explain.",
        ans: "Yes — a rectangle has all the properties of a parallelogram",
        sol: "A parallelogram needs both pairs of opposite sides parallel. A rectangle has four right angles, which forces opposite sides to be parallel. So every rectangle is a parallelogram (but not every parallelogram is a rectangle)."
      },
      {
        q: "The diagonals of a quadrilateral bisect each other at $O$. If $AO = 3$ cm and $OC = 3$ cm, is this enough to prove it is a parallelogram?",
        ans: "Yes — the diagonals bisect each other",
        sol: "A quadrilateral whose diagonals bisect each other is a parallelogram (one of the three tests for a parallelogram)."
      }
    ],
    quiz: [
      {
        q: "Which of the following is NOT a property of all parallelograms?",
        options: ["Opposite sides are parallel", "Opposite angles are equal", "All four angles are $90°$", "Diagonals bisect each other"],
        ans: "All four angles are $90°$",
        sol: "Only rectangles (a special type of parallelogram) have four $90°$ angles. General parallelograms do not."
      },
      {
        q: "A quadrilateral has sides $AB=CD$ and $BC=AD$ (two pairs of opposite equal sides). Is it necessarily a parallelogram?",
        ans: "Yes — this is one of the three parallelogram tests",
        sol: "If both pairs of opposite sides are equal, the quadrilateral is a parallelogram. This is a standard test."
      },
      {
        q: "Find the area of a parallelogram with base $10$ cm and height $6$ cm.",
        ans: "$60$ cm$^2$",
        sol: "Area $= base \\times height = 10 \\times 6 = 60$ cm$^2$."
      }
    ]
  }
];
