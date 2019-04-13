var chapterData = [
  {
    number: 1,
    type: 'multiple',
    topic: 'Magnetic Force',
    question: 'Which of the following statements is totally correct?',
    questionImg: null,
    choices: [
      'An electric charge in the presence of a non-zero magnetic field $\\bf{B}$ experiences a magnetic force $\\bf{F_m}$ acting on it, whether or not the charge is moving.',
      'An electric charge in the presence of a non-zero magnetic field $\\bf{B}$ experiences a magnetic force $\\bf{F_m}$ acting on it so long as it is moving, regardless of its direction.',
      'An electric charge in the presence of a non-zero magnetic field $\\bf{B}$ experiences a magnetic force $\\bf{F_m}$ acting on it so long as it is moving in a direction other than parallel to the direction of $\\bf{B}$.',
      'None of the above three statements is correct.'
    ],
    answerIndex: 2, // choices[2]
    explanation: 'ch5/5-1.png'
  },
  {
    number: 2,
    type: 'multiple',
    topic: 'Magnetic Force',
    question: 'An electron moving in the +y direction in the presence of a magnetic field $\\bf{F_m}$\n' +
      'pointing in the $+x$ direction will experience a magnetic force in what direction?',
    questionImg: null,
    choices: [
      '$\\bf{F_m}$ points along $−\\hat{z}$',
      '$\\bf{F_m}$ points along $+\\hat{z}$',
      '${\\bf{F_m}} = 0$',
      '$\\bf{F_m}$ points along $\\boldsymbol{\\hat{ \\theta }}$ direction'
    ],
    answerIndex: 1,
    explanation: 'ch5/5-2.png'
  },
  {
    number: 3,
    type: 'multiple',
    topic: 'Magnetic Moment',
    question: 'The magnetic moment of the loop shown in the figure is:',
    questionImg: 'ch5/5-3.png',
    choices: [
      '${ \\bf{m} } = 0$',
      '${ \\bf{m} } = { \\bf{ −\\hat{x} } } 0.69 + { \\bf{ \\hat{y} } } 0.4 ( \\mathrm{ A · m^2 } )$',
      '${ \\bf{m} } = { \\bf{ −\\hat{x} } } 0.4 - { \\bf{ \\hat{y} } } 0.69 ( \\mathrm{ A · m^2 } )$',
      '${ \\bf{m} } = { \\bf{ \\hat{x} } } 0.69 - { \\bf{ \\hat{y} } } 0.4 ( \\mathrm{ A · m^2 } )$'
    ],
    answerIndex: 3,
    explanation: 'ch5/5-3.png'
  },
  {
    number: 4,
    type: 'multiple',
    topic: 'Magnetic Torque',
    question: 'What is the direction of the torque acting on the current loop?',
    questionImg: 'ch5/5-4.png',
    choices: [
      '${ \\bf{T} }$ points in $ \\bf{+\\hat{y}} $ direction',
      '${ \\bf{T} }$ points in $ \\bf{-\\hat{y}} $ direction',
      '${ \\bf{T} }$ points in $ \\bf{+\\hat{x}} $ direction',
      '${ \\bf{T} }$ points in $ \\bf{-\\hat{x}} $ direction'
    ],
    answerIndex: 0,
    explanation: 'ch5/5-4.png'
  },
  {
    number: 5,
    type: 'multiple',
    topic: 'Magnetic Force',
    question: 'Which statement is totally correct?\n<br><br>' +
      'Two linear conductors attract each other with maximum magnetic force only if:',
    questionImg: null,
    choices: [
      'their currents point along orthogonal directions',
      'their currents point along parallel directions',
      'their currents point along anti-parallel directions',
      'they carry ac currents.'
    ],
    answerIndex: 1,
    explanation: 'ch5/5-5.png'
  },
  {
    number: 6,
    type: 'multiple',
    topic: 'Magnetic Force',
    question: 'For the two infinitely long, parallel wires carrying currents in opposite directions,\n' +
      'what is the magnetic flux density ${ \\mathrm{ \\bf{B} } }$ at point $P$?',
    questionImg: 'ch5/5-6.png',
    choices: [
      '${ \\bf{B} } = {\\bf{ \\hat{ \\Phi }}} \\mbox{ 8} { \\mu_0 \\over \\pi }$',
      '${ \\bf{B} } = {\\bf{ \\hat{ \\Phi }}} \\mbox{ 4.8} { \\mu_0 \\over \\pi }$',
      '${ \\bf{B} } = {\\bf{ -\\hat{ \\Phi }}} \\mbox{ 4.8} { \\mu_0 \\over \\pi }$',
      '${ \\bf{B} } = {\\bf{ -\\hat{ \\Phi }}} \\mbox{ 9.8} { \\mu_0 \\over \\pi }$'
    ],
    answerIndex: 2,
    explanation: 'ch5/5-6.png'
  },
  {
    number: 7,
    type: 'multiple',
    topic: 'Magnetic Field',
    question: 'For the toroidal coil shown in the figure, which statement is totally true?',
    questionImg: 'ch5/5-7.png',
    choices: [
      '${ \\bf{H} } = 0$ only for $r > b$',
      '${ \\bf{H} } = 0$ only for $r < a$',
      '${ \\bf{H} } = 0$ only for $a < r < b$',
      '${ \\bf{H} } = 0$ for $r < a$ and $r > b$'
    ],
    answerIndex: 3,
    explanation: 'ch5/5-7.png'
  },
  {
    number: 8,
    type: 'multiple',
    topic: 'Boundary Conditions',
    question: 'Given ${ \\bf{H_1} } = { \\bf{ \\hat{x} } } 4 + { \\bf { \\hat{z} } } 16 ( \\mathrm{A/m} )$ in medium 1, $\\mu_1 = \\mu_0$, and $\\mu_2 = 8 \\mu_0$, determine $\\bf{H_2}$ in\n' +
      'medium 2. Neither medium is a perfect conductor or superconductor.',
    questionImg: 'ch5/5-8.png',
    choices: [
      '${ \\bf{H_2} } = ( { \\bf{ \\hat{x} } } 4 + { \\bf{ \\hat{z} } } 2) \\mbox{ } ( \\mathrm{A/m} )$',
      '${ \\bf{H_2} } = ({ \\bf{ \\hat{x} } } 2+ { \\bf{ \\hat{z} } } 4) \\mbox{ } ( \\mathrm{A/m} )$',
      '${ \\bf{H_2} } = ({ \\bf{ \\hat{x} } } 4+ { \\bf{ \\hat{z} } } 8) \\mbox{ } ( \\mathrm{A/m} )$',
      '${ \\bf{H_2} } = ({ \\bf{ \\hat{x} } } 4+ { \\bf{ \\hat{z} } } 16) \\mbox{ } ( \\mathrm{A/m} )$'
    ],
    answerIndex: 0,
    explanation: 'ch5/5-8.png'
  },
  {
    number: 9,
    type: 'multiple',
    topic: 'LVDT',
    question: 'LVDT is an acronym for:',
    questionImg: null,
    choices: [
      'Large vehicle differential torque',
      'Large vehicle differential transformer',
      'Linear variable direct transformer',
      'Linear variable differential transformer'
    ],
    answerIndex: 3,
    explanation: 'ch5/5-9.png'
  },
  {
    number: 10,
    type: 'multiple',
    topic: 'Solenoid',
    question: 'Consider two air-filled solenoids, both of identical radius $a$ and $a \\ll$ than the length\n' +
      'of either solenoid. The two solenoids are characterized by the chart below.<br><br>Which solenoid generates a stronger magnetic field inside the solenoid?',
    questionImg: 'ch5/5-10.png',
    choices: [
      'solenoid 1',
      'solenoid 2',
      'Both solenoids generate the same magnetic field.',
      'Cannot compute the magnetic fields without specifying the value of the radius $a$.'
    ],
    answerIndex: 2,
    explanation: 'ch5/5-10.png'
  },
  {
    number: 11,
    type: 'multiple',
    topic: 'Coaxial Line',
    question: 'The primary dimensions of a coaxial line are its length $l$ and the radii of its inner\n' +
      'and outer conductors, $a$ and $b$, respectively. If the inductance of a coax with $b/a=2$\n' +
      'is $L_1 = 500 \\mbox{ nH}$, what would the new inductance $L_2$ be if $b/a$ is changed to $4$, while\n' +
      'keeping all other properties the same?',
    questionImg: null,
    choices: [
      '$L_2 = 250 \\mbox{ nH}$',
      '$L_2 = 1000 \\mbox{ nH}$',
      '$L_2 = 366 \\mbox{ nH}$',
      '$L_2 = 732 \\mbox{ nH}$',
    ],
    answerIndex: 1,
    explanation: 'ch5/5-11.png'
  },
  {
    number: 12,
    type: 'multiple',
    topic: 'Boundary Conditions',
    question: 'The plane boundary defined by $z = 0$ separates air from a block of iron. If\n' +
      '${ \\bf{B_1} } = { \\bf{ \\hat{x} } } 2 − { \\bf{ \\hat{y} } } 3 + { \\bf{ \\hat{z} } } 8$ in air $(z \\geq 0)$, find $\\mathrm{\\bf{B_2}}$ in iron $(z \\leq 0)$, given that $\\mu = 5000 \\mu_0$\n' +
      'for iron.',
    questionImg: null,
    choices: [
      '${ \\bf{B_2} } = { \\bf{ \\hat{x} } } 10000 − { \\bf{ \\hat{y} } } 15000 + { \\bf{ \\hat{z} } } 8 \\mbox{ } \\mathrm{ (wb/m^2) }$',
      '${ \\bf{B_2} } = { \\bf{ \\hat{x} } } 2 − { \\bf{ \\hat{y} } } 3 + { \\bf{ \\hat{z} } } 40000 \\mbox{ } \\mathrm{ (wb/m^2) }$',
      '${ \\bf{B_2} } = { \\bf{ \\hat{x} } } 0.0004 − { \\bf{ \\hat{y} } } 0.0006 + { \\bf{ \\hat{z} } } 8 \\mbox{ } \\mathrm{ (wb/m^2) }$',
      '${ \\bf{B_2} } = { \\bf{ \\hat{x} } } 2 − { \\bf{ \\hat{y} } } 3 + { \\bf{ \\hat{z} } } 0.0016 \\mbox{ } \\mathrm{ (wb/m^2) }$'
    ],
    answerIndex: 0,
    explanation: 'ch5/5-12.png'
  },
  {
    number: 13,
    type: 'multiple',
    topic: 'Magnetic Hysteresis',
    question: 'Which one of the following statements is correct?\n<br><br>' +
      'Magnetic hysteresis refers to when certain materials:',
    questionImg: null,
    choices: [
      'become uncontrollable (hysteric) under the influence of a magnetic field.',
      'exhibit a hysteresis curve relating $\\bf{B}$ to $\\bf{H}$.',
      'exhibit magnetic breakdown, similar to voltage breakdown.',
      'are permanent magnets.'
    ],
    answerIndex: 1,
    explanation: 'ch5/5-13.png'
  },
  {
    number: 14,
    type: 'multiple',
    topic: 'Proximity Sensor',
    question: 'Select the most correct answer. An eddy-current proximity sensor uses coils to sense:',
    questionImg: null,
    choices: [
      'nearby magnetic fields',
      'nearby current sources',
      'nearby conductors',
      'All of the above.'
    ],
    answerIndex: 3,
    explanation: 'ch5/5-14.png'
  },
  {
    number: 15,
    type: 'multiple',
    topic: 'Magnetic Energy',
    question: 'An imaginary circular tube is situated in the $x–y$ plane and centered at the origin as\n' +
      'shown in the figure. The tube has a circular cross-section of radius $a = 2 \\mbox{ cm}$ and\n' +
      '$b = 1 \\mbox{ m}$. How much magnetic energy is contained within the volume of the tube\n' +
      'due to the infinitely long current-carrying conductor?',
    questionImg: 'ch5/5-15.png',
    choices: [
      '$W_{ \\mathrm{m} } = 2 \\mu_0 \\mbox{ x } 10^{−2} \\mbox{ } ( \\mbox{J} )$',
      '$W_{ \\mathrm{m} } = 16 \\mu_0 \\mbox{ x } 10^{−6} \\mbox{ } ( \\mbox{J} )$',
      '$W_{ \\mathrm{m} } = 4 \\mu_0 \\mbox{ x } 10^{−4} \\mbox{ } ( \\mbox{J} )$',
      '$W_{ \\mathrm{m} } = 4 \\mu_0 \\mbox{ x } 10^{−2} \\mbox{ } ( \\mbox{J} )$'
    ],
    answerIndex: 2,
    explanation: 'ch5/5-15.png'
  }
]

