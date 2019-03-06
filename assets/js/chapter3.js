var chapterData = [
  {
    number: 1,
    type: 'multiple',
    topic: 'Commutative Vector Operations',
    question: 'For two vectors <strong>A</strong> and <strong>B</strong>, which one of the following statements is true?',
    questionImg: null,
    choices: [
      'A·B is commutative, as is A×B.',
      'A·B is commutative, but A×B is not.',
      'A·B is not commutative, but A×B is.',
      'Neither A·B nor A×B is commutative.'
    ],
    answerIndex: 1, // choices[1]
    explanation: 'ch3/3-1.png'
  },
  {
    number: 2,
    type: 'multiple',
    topic: 'Cross Product',
    question: 'For the vector operation <strong>C = A×B</strong>, which one of the following statements is true?',
    questionImg: null,
    choices: [
      'The direction of C lies in the plane containing A and B and obeys the righthand rule.',
      'The direction of C lies in the plane containing A and B and obeys the lefthand rule.',
      'The direction of C is orthogonal to the plane containing A and B and obeys the right-hand rule.',
      'The direction of C is orthogonal to the plane containing A and B and obeys the left-hand rule.'
    ],
    answerIndex: 2,
    explanation: 'ch3/3-2.png'
  },
  {
    number: 3,
    type: 'multiple',
    topic: 'Meaningful Products',
    question: 'Only one of the following four statements is a meaningful product. Which one?',
    questionImg: null,
    choices: [
      'A·(B·C)',
      'A×(B·C)',
      'A(B×C)',
      'A(B·C)'
    ],
    answerIndex: 3,
    explanation: 'ch3/3-3.png'
  },
  {
    number: 4,
    type: 'multiple',
    topic: 'Differential Length',
    question: 'Of the following four definitions for the differential length $d \\bf{l}$ in cylindrical coordinates, only one is correct. Which one?',
    questionImg: null,
    choices: [
      '$d {\\bf {l}} = {\\bf \\hat{r}} rdr+ {\\bf \\hat{\\Phi}} r d \\phi +{\\bf \\widehat{z}} dz$',
      '$d {\\bf {l}} = {\\bf \\hat{r}} dr+ {\\bf \\hat{\\Phi}} d \\phi +{\\bf \\widehat{z}} dz$',
      '$d {\\bf {l}} = {\\bf \\hat{r}} dr+ {\\bf \\hat{\\Phi}} r d \\phi +{\\bf \\widehat{z}} dz$',
      '$d {\\bf {l}} = {\\bf \\hat{r}} dr+ {\\bf \\hat{\\Phi}} r d \\phi +{\\bf \\widehat{z}} rdz$'
    ],
    answerIndex: 2,
    explanation: 'ch3/3-4.png'
  },
  {
    number: 5,
    type: 'multiple',
    topic: 'Angle between Vectors',
    question: 'Given vectors ${\\bf {A}} = {\\bf \\hat{x}} 3 − {\\bf \\hat{z}}4 \\mbox{ and } {\\bf {B}} = {\\bf \\hat{z}} 2$, what is the angle qAB between them?',
    questionImg: null,
    choices: [
      '$\\theta_{AB} = 36.87^\\circ$',
      '$\\theta_{AB} = 143.13^\\circ$',
      '$\\theta_{AB} = −36.87^\\circ$',
      '$\\theta_{AB} = −143.13^\\circ$'
    ],
    answerIndex: 2,
    explanation: 'ch3/3-5.png'
  },
  {
    number: 6,
    type: 'multiple',
    topic: 'Gradient and Curl Operators',
    question: 'Only one of the following four statements is valid. Which one?',
    questionImg: null,
    choices: [
      'The gradient can operate on only scalar fields while the curl can operate on only vector fields.',
      'Both the gradient and the curl can operate on scalar fields.',
      'Both the gradient and the curl can operate on vector fields.',
      'The gradient can operate on only vector fields while the curl can operate on only scalar fields.'
    ],
    answerIndex: 0,
    explanation: 'ch3/3-6.png'
  },
  {
    number: 7,
    type: 'multiple',
    topic: 'Directional Derivative',
    question: 'For the scalar function $V = x2y−2z2$, determine its directional derivative along the ${\\bf \\hat{z}}$ direction and then evaluate it at $P = (1,2,3)$.',
    questionImg: null,
    choices: [
      '$(dV/dl) |_{(1,2,3)} = 8$',
      '$(dV/dl) |_{(1,2,3)} = -2$',
      '$(dV/dl) |_{(1,2,3)} = 2$',
      '$(dV/dl) |_{(1,2,3)} = -12$'
    ],
    answerIndex: 3,
    explanation: 'ch3/3-7.png'
  },
  {
    number: 8,
    type: 'multiple',
    topic: 'Directional Derivative',
    question: 'For the scalar function $V = 5e^{−2r} sin \\phi$, determine its directional derivative along the ${\\bf \\hat{\\Phi}}$ direction and then evaluate it at $P = (0.5,\\pi/4,2)$.',
    questionImg: null,
    choices: [
      '$(dV/dl) |_{(0.5,\\pi/4,2)} = 2.6$',
      '$(dV/dl) |_{(0.5,\\pi/4,2)} = 1.3$',
      '$(dV/dl) |_{(0.5,\\pi/4,2)} = -2.6$',
      '$(dV/dl) |_{(0.5,\\pi/4,2)} = 0.3$'
    ],
    answerIndex: 0,
    explanation: 'ch3/3-8.png'
  },
  {
    number: 9,
    type: 'multiple',
    topic: 'Divergence',
    question: 'Given vector ${\\bf {A}} = −{\\bf \\hat{x}} 2xy + {\\bf \\hat{y}} 2 y^2$, determine the divergence $\\triangledown · {\\bf {A}}$ at $P = (1,2)$.',
    questionImg: 'ch3/3-9.png',
    choices: [
      '$({\\bf {\\triangledown · A}}) |_{(1,2)} = 0$',
      '$({\\bf {\\triangledown · A}}) |_{(1,2)} = 2$',
      '$({\\bf {\\triangledown · A}}) |_{(1,2)} = 4$',
      '$({\\bf {\\triangledown · A}}) |_{(1,2)} = -2$',
    ],
    answerIndex: 2,
    explanation: 'ch3/3-9.png'
  },
  {
    number: 10,
    type: 'multiple',
    topic: 'Flux Out of a Cube',
    question: 'Given a vector field ${\\bf {A}} = {\\bf \\hat{x}} x$, determine the amount of flux flowing out of a cube centered at the origin with its sides extending between $−10 \\mbox{ and } +10$ along $x \\mbox{, } y \\mbox{, and } z$.',
    questionImg: 'ch3/3-10.png',
    choices: [
      '$\\oint_S {\\bf {A}} · d {\\bf {s}} = −2000$',
      '$\\oint_S {\\bf {A}} · d {\\bf {s}} = 0$',
      '$\\oint_S {\\bf {A}} · d {\\bf {s}} = 4000$',
      '$\\oint_S {\\bf {A}} · d {\\bf {s}} = 8000$'
    ],
    answerIndex: 3,
    explanation: 'ch3/3-10.png'
  },
  {
    number: 11,
    type: 'multiple',
    topic: 'Flux Out of a Cube',
    question: 'Given a vector field ${\\bf {A}} = {\\bf \\hat{x}} x$, determine the amount of flux flowing out of a cube centered at the origin with its sides extending between $−10 \\mbox{ and } +10$ along $x \\mbox{, } y \\mbox{, and } z$.',
    questionImg: 'ch3/3-11.png',
    choices: [
      '$\\oint_S {\\bf {A}} · d {\\bf {s}} = −2000$',
      '$\\oint_S {\\bf {A}} · d {\\bf {s}} = 8/3 \\times 10^5$',
      '$\\oint_S {\\bf {A}} · d {\\bf {s}} = 4/3 \\times 10^5$',
      '$\\oint_S {\\bf {A}} · d {\\bf {s}} = 2000$'
    ],
    answerIndex: 1,
    explanation: 'ch3/3-11.png'
  },
  {
    number: 12,
    type: 'multiple',
    topic: 'Conservation Vector',
    question: 'A vector field ${\\bf {A}}$ is said to be conservative if:',
    questionImg: null,
    choices: [
      '${\\bf {\\triangledown · A}} = 0$',
      '${\\bf {\\triangledown \\times A}} = 0$',
      '${\\bf {\\triangledown · A}} = 0$ and ${\\bf {\\triangledown \\times A}} = 0$',
      'None of the above'
    ],
    answerIndex: 1,
    explanation: 'ch3/3-12.png'
  },
  {
    number: 13,
    type: 'multiple',
    topic: 'Divergence',
    question: 'At a given point is space, the divergence of a vector field ${\\bf {E}}$ is negative; that is, ${\\bf {\\triangledown · E}} < 0$. This means that the small volume surrounding that point in space is equivalent to:',
    questionImg: null,
    choices: [
      'A sink of field lines.',
      'A source of field lines.',
      'Neither a sink nor a source.',
      'A sink or a source.'
    ],
    answerIndex: 0,
    explanation: 'ch3/3-13.png'
  },
  {
    number: 14,
    type: 'multiple',
    topic: 'Divergence Theorem',
    question: 'For a vector field ${\\bf {A}}$ defined over a volume $\\upsilon$ bounded by a surface $S$, the divergence theorem is given by:',
    questionImg: null,
    choices: [
      '$\\int_\\upsilon \\triangledown · {\\bf {A}} d \\upsilon = \\oint_S ( {\\bf {\\triangledown \\times A}} ) · ds$',
      '$\\oint_S {\\bf {A}} · ds = \\oint_\\upsilon | {\\bf {A}} | d \\upsilon$',
      '$\\int_\\upsilon \\triangledown · {\\bf {A}} d \\upsilon = \\oint_S {\\bf {A}} · ds$',
      '$\\int_S ( {\\bf {\\triangledown \\times A}} ) · ds = \\int | {\\bf {A}} | d \\upsilon$'
    ],
    answerIndex: 2,
    explanation: 'ch3/3-14.png'
  },
  {
    number: 15,
    type: 'multiple',
    topic: 'Stokes\'s Theorem',
    question: 'For a vector field ${\\bf {B}}$ defined over a surface $S$ bounded by a contour $C$, Stokes\'s theorem states:',
    questionImg: null,
    choices: [
      '$\\int_S {\\bf {B}} · ds = \\oint_C {\\bf {B}} · d \\ell$',
      '$\\int_S {\\bf {\\triangledown}} · ds = \\oint_C {\\bf {B}} · d \\ell$',
      '$\\int_S {\\bf {B}} · ds = \\oint_C ({\\bf {\\triangledown \\times B}}) · d \\ell$',
      '$\\int_S ({\\bf {\\triangledown \\times B}}) · ds = \\oint_C {\\bf {B}} · d \\ell$'
    ],
    answerIndex: 3,
    explanation: 'ch3/3-15.png'
  },
  {
    number: 16,
    type: 'multiple',
    topic: 'Divergence',
    question: 'The phasor equivalent of the time function $\\nu (t) = 10sin(\\omega t +45^\\circ)$ is:',
    questionImg: null,
    choices: [
      '$\\widetilde{V} = 10e^{−j45^\\circ}$',
      '$\\widetilde{V} = 10e^{j45^\\circ}$',
      '$\\widetilde{V} = 10e^{−j135^\\circ}$',
      '$\\widetilde{V} = 10e^{j135^\\circ}$'
    ],
    answerIndex: 2,
    explanation: 'ch3/3-16.png'
  },
  {
    number: 17,
    type: 'multiple',
    topic: 'Divergence',
    question: 'Compute the divergence of the vector field. $${\\bf {A}} = {\\bf \\hat{r}} {\\cos \\phi \\over r^2} + {\\bf {\\hat{\\Phi}}} {\\sin \\phi \\over r^2}$$',
    questionImg: null,
    choices: [
      '${\\bf {\\triangledown · A}} = 0$',
      '${\\bf {\\triangledown · A}} = {2 \\cos \\phi \\over r^2}$',
      '${\\bf {\\triangledown · A}} = -{2 \\cos \\phi \\over r^2}$',
      '${\\bf {\\triangledown · A}} = {2 \\cos \\phi \\over r^3}$'
    ],
    answerIndex: 0,
    explanation: 'ch3/3-17.png'
  },
  {
    number: 18,
    type: 'multiple',
    topic: 'Laplacian',
    question: 'Compute the Laplacian of the scalar function $$ V=x^2y+y^2z+y^2x$$',
    questionImg: null,
    choices: [
      '$\\triangledown^2V = 0$',
      '$\\triangledown^2V = x + z$',
      '$\\triangledown^2V = y + z$',
      '$\\triangledown^2V = 2(x+y+z)$'
    ],
    answerIndex: 3,
    explanation: 'ch3/3-18.png'
  },
  {
    number: 19,
    type: 'multiple',
    topic: 'Arrow Representation',
    question: 'The arrow representation shown in the figure corresponds to the function:',
    questionImg: 'ch3/3-19.png',
    choices: [
      '${\\bf {E}} = {\\bf \\hat{x}} y$',
      '${\\bf {E}} = {\\bf \\hat{y}} x$',
      '${\\bf {E}} = -{\\bf \\hat{x}} y$',
      '${\\bf {E}} = -{\\bf \\hat{y}} x$'
    ],
    answerIndex: 1,
    explanation: 'ch3/3-19.png'
  }
]

