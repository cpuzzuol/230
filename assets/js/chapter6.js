var chapterData = [
  {
    number: 1,
    type: 'multiple',
    topic: 'Faraday\'s Law',
    question: 'According to Faraday\'s law, an electromotive force $V_\\mathrm{emf}$ is induced:',
    questionImg: 'ch6/6-1.png',
    choices: [
      'whenever a magnetic field $\\bf{B}$ crosses through the loop cross section.',
      'only if $\\bf{B}$ is time-varying.',
      'only if the loop is rotating.',
      'Either $\\bf{B}$ is changing with time, the loop is rotating and $\\bf{B}$ is static, or $\\bf{B}$ is changing in time and the loop is rotating.'
    ],
    answerIndex: 3, // choices[3]
    explanation: 'ch6/6-1.png'
  },
  {
    number: 2,
    type: 'multiple',
    topic: 'Lenz\'s Law',
    question: 'The purpose of Lenz’s law is to:',
    questionImg: 'ch6/6-2.png',
    choices: [
      'Compute the magnetic flux through the loop surface.',
      'Compute the induced field ${ \\bf{B} }_\\mathrm{ind}$.',
      'Determine the direction of $I$.',
      'Determine the internal resistance $R_i$.'
    ],
    answerIndex: 2,
    explanation: 'ch6/6-2.png'
  },
  {
    number: 3,
    type: 'multiple',
    topic: 'Ideal Transformer',
    question: 'In an ideal transformer, the secondary to primary turns ration is $N_2/N_1 = 10$.\n' +
      'Consequently, only one of the following statements is true, which one?',
    questionImg: null,
    choices: [
      '${V_2 \\over V_1} = 0.1, {I_2 \\over I_1} = 10, {P_2 \\over P_1} = 100$',
      '${V_2 \\over V_1} = 10, {I_2 \\over I_1} = 0.1, {P_2 \\over P_1} = 1$',
      '${V_2 \\over V_1} = 10, {I_2 \\over I_1} = 10, {P_2 \\over P_1} = 100$',
      '${V_2 \\over V_1} = 0.1, {I_2 \\over I_1} = 10, {P_2 \\over P_1} = 1$'
    ],
    answerIndex: 1,
    explanation: 'ch6/6-3.png'
  },
  {
    number: 4,
    type: 'multiple',
    topic: 'Piezoelectricity',
    question: 'Piezoelectric crystals are used in:',
    questionImg: null,
    choices: [
      'Ultrasound transducers, microphones, and speakers.',
      'Thermocouples to measure temperature.',
      'Accelerometers.',
      'Proximity sensors.'
    ],
    answerIndex: 0,
    explanation: 'ch6/6-4.png'
  },
  {
    number: 5,
    type: 'multiple',
    topic: 'TV Antenna',
    question: 'A circular-loop TV antenna with $0.02 \\mbox{-} \\mathrm{m^2}$ area is in the presence of a uniformamplitude\n' +
      '$300 \\mbox{ MHz}$ signal. When oriented for maximum response, the loop\n' +
      'develops an emf with a peak value of $15 \\mbox{ (mV)}$. What is the peak magnitude $B_0$\n' +
      'of the incident wave?',
    questionImg: 'ch6/6-5.png',
    choices: [
      '$B_0 = 2 \\mbox{ } ( \\mathrm{nT} )$',
      '$B_0 = 0.4 \\mbox{ } ( \\mathrm{nT} )$',
      '$B_0 = 0.1 \\mbox{ } ( \\mathrm{nT} )$',
      '$B_0 = 2 \\mbox{ } ( \\mathrm{\\mu T} )$'
    ],
    answerIndex: 1,
    explanation: 'ch6/6-5.png'
  },
  {
    number: 6,
    type: 'multiple',
    topic: 'Square Loop',
    question: 'The square loop shown in the figure is coplanar with (but not touching) a long, straight wire carrying a current<br><br>\n' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$I(t) = 5 \\mathrm{cos} (2 \\pi {\\over} 10^4t)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$( \\mathrm{A} ).$<br><br>\n' +
      'What is the emf induced across a small gap created in the loop?',
    questionImg: 'ch6/6-6.png',
    choices: [
      '$V_{ \\mathrm{emf} } = 7 \\mathrm{cos} (2 \\pi \\times 10^4t) \\mbox{ } ( \\mathrm{mV} )$',
      '$V_{ \\mathrm{emf} } = 3.5 \\mathrm{sin} (2 \\pi {\\over} 10^4t) \\mbox{ } ( \\mathrm{mV} )$',
      '$V_{ \\mathrm{emf} } = 0$',
      '$V_{ \\mathrm{emf} } = 7 \\mathrm{sin} (2 \\pi {\\over} 10^4t) \\mbox{ } ( \\mathrm{mV} )$'
    ],
    answerIndex: 2,
    explanation: 'ch6/6-6.png'
  },
  {
    number: 7,
    type: 'multiple',
    topic: 'EM Generator',
    question: 'The rectangular conducting loop shown in the figure rotates at 6,000 revolutions\n' +
      'per minute in a uniform magnetic flux density given by<br><br>\n' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ \\bf{B = \\hat{z} } } 50$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$( \\mathrm{mT} )$.<br><br>\n' +
      'When an EE student connected a voltmeter across a small gap in the loop, the\n' +
      'voltmeter registered a voltage of zero. How should the configuration be changed so\n' +
      'as to generate the maximum possible emf?',
    questionImg: 'ch6/6-7.png',
    choices: [
      'Reverse direction of $\\bf{B}$.',
      'Reverse direction of loop rotation.',
      'Increase the magnitude of $\\bf{B}$.',
      'Change $\\bf{B}$ so it points along any direction in the $x–y$ plane.'
    ],
    answerIndex: 3,
    explanation: 'ch6/6-7.png'
  },
  {
    number: 8,
    type: 'multiple',
    topic: 'EM Generator',
    question: 'The electromagnetic generator shown in the figure is connected to an electric\n' +
      'bulb with a resistance of $150 \\mbox{ } \\Omega$. If the loop area is $0.1 \\mbox{ } \\mathrm{m^2}$ and it rotates at 1800\n' +
      'revolutions per minute in a uniform magnetic flux density $B_0 = 1.6 \\mbox{ T}$, determine\n' +
      'the amplitude of the current generated in the light bulb.',
    questionImg: 'ch6/6-8.png',
    choices: [
      '$I \\approx 200 \\mbox{ } ( \\mathrm{mA} )$',
      '$I \\approx 10 \\mbox{ } ( \\mathrm{mA} )$',
      '$I \\approx 100 \\mbox{ } ( \\mathrm{mA} )$',
      '$I \\approx 1 \\mbox{ } ( \\mathrm{mA} )$'
    ],
    answerIndex: 0,
    explanation: 'ch6/6-8.png'
  },
  {
    number: 9,
    type: 'multiple',
    topic: 'EM Potentials',
    question: 'The magnetic field in a dielectric material with $\\epsilon = 9 \\epsilon_0$, $\\mu = \\mu_0$, and $\\sigma = 0$ is given by<br><br>\n' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ \\bf{H} }(y, t) = { \\bf{ \\hat{x} } } 5 \\mathrm{cos} (2 \\pi \\times 10^7t + 0.2 \\pi y)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$( \\mathrm{A/m} )$.<br><br>\n' +
      'Find the associated electric field $\\bf{E}$.',
    questionImg: null,
    choices: [
      '${ \\bf{E} } = { \\bf{ \\hat{y} } } 30 \\mathrm{cos} (2 \\pi \\times 10^7t + 0.2 \\pi y) \\mbox{ } ( \\mathrm{V/m} )$',
      '${ \\bf{E} } = { \\bf{ -\\hat{z} } } 630 \\mathrm{cos} (2 \\pi \\times 10^7t + 0.2 \\pi y) \\mbox{ } ( \\mathrm{V/m} )$',
      '${ \\bf{E} } = { \\bf{ \\hat{z} } } 30 \\mathrm{cos} (2 \\pi \\times 10^7t + 0.2 \\pi y) \\mbox{ } ( \\mathrm{V/m} )$',
      '${ \\bf{E} } = { \\bf{ \\hat{x} } } 60 \\mathrm{cos} (2 \\pi \\times 10^7t + 0.2 \\pi y) \\mbox{ } ( \\mathrm{V/m} )$'
    ],
    answerIndex: 1,
    explanation: 'ch6/6-9.png'
  },
  {
    number: 10,
    type: 'multiple',
    topic: 'EM Potentials',
    question: 'The electric field of an electromagnetic wave propagating in air is given by<br><br>\n' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ \\bf{E} }(z, t) = { \\bf{ \\hat{x} } } 4 \\mathrm{cos} (3 \\times 10^8t − z) + { \\bf{ \\hat{y} } } 3 \\mathrm{sin} (3 \\times 10^8t−z)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$( \\mathrm{V/m} ).$<br><br>\n' +
      'Find the associated magnetic field ${ \\bf{H} }(z, t)$.',
    questionImg: null,
    choices: [
      '${ \\bf{H} } (z, t) = { \\bf{ \\hat{x} } } 12 \\mathrm{cos} (3 \\times 10^8t−z) + { \\bf{ \\hat{y} } } 8 \\mathrm{cos} (3 \\times 10^8t−z) ( \\mathrm{A/m} )$',
      '${ \\bf{H} } (z, t) = { \\bf{ -\\hat{x} } } 8 \\mathrm{cos} (3 \\times 10^8t−z) + { \\bf{ \\hat{y} } } 10.6 \\mathrm{cos} (3 \\times 10^8t−z) ( \\mathrm{mA/m} )$',
      '${ \\bf{H} } (z, t) = { \\bf{ -\\hat{x} } } 8 \\mathrm{sin} (3 \\times 10^8t−z) + { \\bf{ \\hat{y} } } 10.6 \\mathrm{cos} (3 \\times 10^8t−z) ( \\mathrm{mA/m} )$',
      '${ \\bf{H} } (z, t) = { \\bf{ \\hat{x} } } 16 \\mathrm{cos} (3 \\times 10^8t−z) + { \\bf{ \\hat{y} } } 2 \\mathrm{cos} (3 \\times 10^8t−z) ( \\mathrm{mA/m} )$'
    ],
    answerIndex: 2,
    explanation: 'ch6/6-10.png'
  },
  {
    number: 11,
    type: 'multiple',
    topic: 'Lenz\'s Law',
    question: 'Based on your understanding of Lenz’s law, which of currents $I_1$ through $I_4$ is/are\n' +
      'pointed in the wrong direction?',
    questionImg: 'ch6/6-11.png',
    choices: [
      '$I_2$ and $I_3$ are printed in the wrong direction.',
      'All four currents are printed in the wrong direction.',
      '$I_1$ and $I_4$ are printed in the wrong direction.',
      'All four currents are printed correctly.'
    ],
    answerIndex: 0,
    explanation: 'ch6/6-11.png'
  },
  {
    number: 12,
    type: 'multiple',
    topic: 'Charge Dissipation',
    question: 'Suppose a certain amount of electric charge is placed at a point inside a block of\n' +
      'carbon. Given that for carbon, $\\epsilon_r = 20$ and $\\sigma = 3 \\times 10^4 \\mbox{ } ( \\mathrm{S/m} )$, how long does it\n' +
      'take the charge density at that point to dissipate to $0.1 \\%$ of its original value?',
    questionImg: null,
    choices: [
      '$t \\approx 4 \\mbox{ ms}$',
      '$t \\approx 4 \\mbox{ ns}$',
      '$t \\approx 40 \\mbox{ ps}$',
      '$t \\approx 40 \\mbox{ fs}$'
    ],
    answerIndex: 3,
    explanation: 'ch6/6-12.png'
  },
  {
    number: 13,
    type: 'multiple',
    topic: 'Boundary Conditions',
    question: 'At the interface between two different materials, the boundary conditions for electric and magnetic fields:',
    questionImg: null,
    choices: [
      'are the same for static and dynamic (time-varying) conditions.',
      'are not the same for static and dynamic (time-varying) conditions.',
      'may or may not be the same depending on the relative conductivities of the two materials.',
      'may or may not be the same depending on the charge relaxation time constants for the two materials.'
    ],
    answerIndex: 0,
    explanation: 'ch6/6-13.png'
  }
]

