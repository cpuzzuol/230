var chapterData = [
  {
    number: 1,
    type: 'multiple',
    topic: 'Transmission Line Effects',
    question: 'For a transmission line of length $l$ carrying a voltage wave of wavelength $\\lambda$ , phase shift and reflection effects can be ignored if:',
    questionImg: null,
    choices: [
      '$l/\\lambda > 1$',
      '$l/\\lambda < 0.01$',
      '$l < 10 \\mbox{ m}$, regardless of the value of $\\lambda$',
      '$l < 1 \\mbox{ cm}$, regardless of the value of $l$'
    ],
    answerIndex: 1, // choices[1]
    explanation: 'ch2/2-1.png'
  },
  {
    number: 2,
    type: 'multiple',
    topic: 'Dispersion',
    question: 'A transmission line is dispersive if:',
    questionImg: null,
    choices: [
      'A wave is transmitted into multiple directions',
      'A wave suffers attenuation',
      'A rectangular pulse changes shape as it travels along the line',
      'The velocity of a sinusoidal wave traveling on the line is independent of the wave’s frequency'
    ],
    answerIndex: 2,
    explanation: 'ch2/2-2.png'
  },
  {
    number: 3,
    type: 'multiple',
    topic: 'TEM',
    question: 'The acronym TEM stands for:',
    questionImg: null,
    choices: [
      'Transmission Eigen Mode',
      'Transmission Elastic Mode',
      'Transverse Elastic Mode',
      'Transverse Electromagnetic'
    ],
    answerIndex: 3,
    explanation: 'ch2/2-3.png'
  },
  {
    number: 4,
    type: 'multiple',
    topic: 'TEM',
    question: 'In a TEM mode:',
    questionImg: null,
    choices: [
      'The electric and magnetic fields are always orthogonal to the direction of propagation, but not to one another',
      'At least one directional component of the electric field is orthogonal to the magnetic field',
      'The electric and magnetic fields are parallel to one another',
      'The electric and magnetic fields are always orthogonal to the direction of propagation, as well as to each other.'
    ],
    answerIndex: 3,
    explanation: 'ch2/2-4.png'
  },
  {
    number: 5,
    type: 'multiple',
    topic: 'Coaxial Line',
    question: 'For a coaxial line with $b = 2a$, under what conditions is its line inductance $L^\\prime = 0$?',
    questionImg: 'ch2/2-5.png',
    choices: [
      'Never',
      '$\\epsilon = \\epsilon_0$',
      '$\\sigma_c = \\infty$',
      '$\\mu = \\infty$'
    ],
    answerIndex: 0,
    explanation: 'ch2/2-5.png'
  },
  {
    number: 6,
    type: 'multiple',
    topic: 'Coaxial Line',
    question: 'For a coaxial line with $b = 2a$, under what conditions is its line inductance $G^\\prime = 0$?',
    questionImg: 'ch2/2-6.png',
    choices: [
      '$\\epsilon = \\epsilon_0$',
      '$\\sigma_c = \\infty$',
      '$\\mu = \\infty$',
      '$\\sigma = 0$'
    ],
    answerIndex: 3,
    explanation: 'ch2/2-6.png'
  },
  {
    number: 7,
    type: 'multiple',
    topic: 'TEM Line',
    question: 'An air-filled coaxial line with $\\epsilon = \\epsilon_0$ and $\\mu = \\mu_0$ has a line inductance $L^\\prime = (1/27) \\mbox{ }\\mu \\mbox{H/m}$. What is the line capacitance $C^\\prime$?',
    questionImg: null,
    choices: [
      '$C^\\prime = 0.1 \\mbox{ nF/m}$',
      '$C^\\prime = 0.3 \\mbox{ nF/m}$',
      '$C^\\prime = 1 \\mbox{ nF/m}$',
      '$C^\\prime = 0.3 \\mbox{ } \\mu \\mbox{F/m}$'
    ],
    answerIndex: 1,
    explanation: 'ch2/2-7.png'
  },
  {
    number: 8,
    type: 'multiple',
    topic: 'Lossless Line',
    question: 'A lossless transmission line:',
    questionImg: null,
    choices: [
      'Is nondispersive and its $\\alpha = 0$.',
      'Is nondispersive but its $\\alpha$ may be $\\ne 0$.',
      'May or may not be dispersive, but $\\alpha = 0$.',
      'May or may not be dispersive and may be $\\ne 0$.'
    ],
    answerIndex: 0,
    explanation: 'ch2/2-8.png'
  },
  {
    number: 9,
    type: 'multiple',
    topic: 'Microstrip Line',
    question: 'A $50 \\mbox{ } \\Omega$ microstrip line uses a dielectric with $\\epsilon_r = 2$. What is the value of $s = w/h$?',
    questionImg: null,
    choices: [
      '$s = 4.2$',
      '$s = 2.1$',
      '$s = 0.33$',
      '$s = 3.33$'
    ],
    answerIndex: 3,
    explanation: 'ch2/2-9.png'
  },
  {
    number: 10,
    type: 'multiple',
    topic: 'Reflection Coefficient',
    question: 'A lossless $50 \\mbox{ } \\Omega$ line is terminated with an inductance $L = 1 \\mbox{ mH}$. At $\\omega = 50×10^3 \\mbox{ rad/s}$, what is the reflection coefficient at the end of the line?',
    questionImg: null,
    choices: [
      '$\\Gamma = 0$',
      '$\\Gamma = −1$',
      '$\\Gamma = 1e^{j \\theta r}$, with $\\theta = −90^\\circ \\pm 180^\\circ$',
      '$\\Gamma = 1e^{j \\theta r}$, with $\\theta = 45^\\circ \\pm 180^\\circ$'
    ],
    answerIndex: 2,
    explanation: 'ch2/2-10.png'
  },
  {
    number: 11,
    type: 'multiple',
    topic: 'SWR',
    question: 'If the reflection coefficient at the load is $|\\Gamma| = 0.5e^{j30^\\circ}$, what is the SWR?',
    questionImg: null,
    choices: [
      '$S = 0$',
      '$S = 2$',
      '$S = 3$',
      '$S = 5$'
    ],
    answerIndex: 2,
    explanation: 'ch2/2-11.png'
  },
  {
    number: 12,
    type: 'multiple',
    topic: 'Voltage Max',
    question: 'If the reflection coefficient at the load is $| \\Gamma | = 0.5e^{j30^\\circ}$ and the magnitude of the incident voltage wave is $|V^{+}_0|=2 \\mbox{ V}$, what is the magnitude of the voltage maximum on the line?',
    questionImg: null,
    choices: [
      '$|\\widetilde{V}|_ \\mathrm{max} = 3 \\mbox{ V}$',
      '$|\\widetilde{V}|_ \\mathrm{max} = 1 \\mbox{ V}$',
      '$|\\widetilde{V}|_ \\mathrm{max} = 4 \\mbox{ V}$',
      '$|\\widetilde{V}|_ \\mathrm{max} = 1.5 \\mbox{ V}$'
    ],
    answerIndex: 0,
    explanation: 'ch2/2-12.png'
  },
  {
    number: 13,
    type: 'multiple',
    topic: 'Voltage Min',
    question: 'If the reflection coefficient at the load is $| \\Gamma | = 0.5e^{j30^\\circ}$ and the magnitude of the incident voltage wave is $|V^{+}_0|=2 \\mbox{ V}$, what is the magnitude of the voltage minimum on the line?',
    questionImg: null,
    choices: [
      '$|\\widetilde{V}|_ \\mathrm{min} = 0 \\mbox{ V}$',
      '$|\\widetilde{V}|_ \\mathrm{min} = 0.5 \\mbox{ V}$',
      '$|\\widetilde{V}|_ \\mathrm{min} = 1.5 \\mbox{ V}$',
      '$|\\widetilde{V}|_ \\mathrm{min} = 1 \\mbox{ V}$'
    ],
    answerIndex: 3,
    explanation: 'ch2/2-13.png'
  },
  {
    number: 14,
    type: 'multiple',
    topic: 'First Voltage Max',
    question: 'If the reflection coefficient at the load is $| \\Gamma | = 0.5e^{j30^\\circ}$ and $\\lambda = 60 \\mbox{ cm}$, what is the location of the voltage maximum nearest to the load?',
    questionImg: null,
    choices: [
      '$d_\\mathrm{max} = 1 \\mbox{ cm}$',
      '$d_\\mathrm{max} = 2.5 \\mbox{ cm}$',
      '$d_\\mathrm{max} = 5 \\mbox{ cm}$',
      '$d_\\mathrm{max} = 10 \\mbox{ cm}$'
    ],
    answerIndex: 1,
    explanation: 'ch2/2-14.png'
  },
  {
    number: 15,
    type: 'multiple',
    topic: 'First Voltage Max',
    question: 'If the reflection coefficient at the load is $| \\Gamma | = 0.5e^{-j30^\\circ}$ and $\\lambda = 60 \\mbox{ cm}$, what is the location of the voltage maximum nearest to the load?',
    questionImg: null,
    choices: [
      '$d_\\mathrm{max} = 55 \\mbox{ cm}$',
      '$d_\\mathrm{max} = 27.5 \\mbox{ cm}$',
      '$d_\\mathrm{max} = 18.75 \\mbox{ cm}$',
      '$d_\\mathrm{max} = 36 \\mbox{ cm}$'
    ],
    answerIndex: 1,
    explanation: 'ch2/2-15.png'
  },
  {
    number: 16,
    type: 'multiple',
    topic: 'Reflection Coefficient',
    question: 'On a lossless transmission line, the distance between successive voltage maxima is 40 cm, the voltage maximum nearest the load is at 5 cm from the load, and $S = 3$. Determine $\\Gamma$.',
    questionImg: null,
    choices: [
      '$\\Gamma = (0.2 + j0.1)$',
      '$\\Gamma = (0.4 − j0.2)$',
      '$\\Gamma = (0.35 + j0.35)$',
      '$\\Gamma = (0.1 − j0.3)$'
    ],
    answerIndex: 2,
    explanation: 'ch2/2-16.png'
  },
  {
    number: 17,
    type: 'multiple',
    topic: 'Equivalent Inductor',
    question: 'A $100 \\mbox{ } \\Omega$ lossless transmission line is terminated in a short circuit. The line is operated at $f = 2 \\mbox{ GHz}$ and the wavelength on the line is $\\lambda = 8$ cm. What should the length of the line be so that its input impedance is equivalent to that of an inductor with $L_{eq} = (25/ \\pi ) \\mbox{ nH}$?',
    questionImg: null,
    choices: [
      '$l = 1 \\mbox{ cm}$',
      '$l = 2 \\mbox{ cm}$',
      '$l = 0.5 \\mbox{ cm}$',
      '$l = 4 \\mbox{ cm}$'
    ],
    answerIndex: 0,
    explanation: 'ch2/2-17.png'
  },
  {
    number: 18,
    type: 'multiple',
    topic: 'Input Impedance',
    question: 'The wavelength on a $75 \\mbox{ } \\Omega$ transmission line is $6 \\mbox{ cm}$ and the line length is $9 \\mbox{ cm}$. If the line is terminated in $Z_{ \\mathrm{L} } = 150 \\mbox{ } \\Omega$, what is the input impedance?',
    questionImg: null,
    choices: [
      '$Z_{ \\mathrm{in} } = 50 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = 75 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = 100 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = 150 \\mbox{ } \\Omega$'
    ],
    answerIndex: 3,
    explanation: 'ch2/2-18.png'
  },
  {
    number: 19,
    type: 'multiple',
    topic: 'Input Impedance',
    question: 'The wavelength on a $75 \\mbox{ } \\Omega$ transmission line is 6 cm and the line length is $7.5 \\mbox{ cm}$. If the line is terminated in $Z_{ \\mathrm{L} } = 150 \\mbox{ } \\Omega$, what is the input impedance?',
    questionImg: null,
    choices: [
      '$Z_{ \\mathrm{in} } = 75 \\mbox{ cm}$',
      '$Z_{ \\mathrm{in} } = 37.5 \\mbox{ cm}$',
      '$Z_{ \\mathrm{in} } = 10 \\mbox{ cm}$',
      '$Z_{ \\mathrm{in} } = 150 \\mbox{ cm}$'
    ],
    answerIndex: 1,
    explanation: 'ch2/2-19.png'
  },
  {
    number: 20,
    type: 'multiple',
    topic: 'Transmitted Power',
    question: 'A $100 \\mbox{ } \\Omega$ lossless transmission line is terminated in $Z_{ \\mathrm{L} } = 150 \\mbox{ } \\Omega$. What fraction of the incident average power is absorbed by the load?',
    questionImg: null,
    choices: [
      'Power fraction = 0.2',
      'Power fraction = 0.4',
      'Power fraction = 0.8',
      'Power fraction = 0.96'
    ],
    answerIndex: 3,
    explanation: 'ch2/2-20.png'
  },
  {
    number: 21,
    type: 'multiple',
    topic: 'Input Impedance',
    question: 'For the circuit shown, what is $Z_{ \\mathrm{in} }$?',
    questionImg: 'ch2/2-21.png',
    choices: [
      '$Z_{ \\mathrm{in} } = 37.5 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = 75 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = 50 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = 100 \\mbox{ } \\Omega$'
    ],
    answerIndex: 0,
    explanation: 'ch2/2-21.png'
  },
  {
    number: 22,
    type: 'multiple',
    topic: 'Input Impedance',
    question: 'Find $Z_{ \\mathrm{in} }$.',
    questionImg: 'ch2/2-22.png',
    choices: [
      '$Z_{ \\mathrm{in} } = 100 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = 200 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = 400 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = 800 \\mbox{ } \\Omega$'
    ],
    answerIndex: 2,
    explanation: 'ch2/2-22.png'
  },
  {
    number: 23,
    type: 'multiple',
    topic: 'Impedance',
    question: 'On a lossless transmission line terminated in $Z_{ \\mathrm{L} } = 200 \\mbox{ } \\Omega$, the SWR is 2.0. One possible value is $Z_0$ is $100 \\mbox{ } \\Omega$. What is the other possible value?',
    questionImg: null,
    choices: [
      '$Z_0 = 200 \\mbox{ } \\Omega$',
      '$Z_0 = 400 \\mbox{ } \\Omega$',
      '$Z_0 = 50 \\mbox{ } \\Omega$',
      '$Z_0 = 120 \\mbox{ } \\Omega$'
    ],
    answerIndex: 1,
    explanation: 'ch2/2-23.png'
  },
  {
    number: 24,
    type: 'multiple',
    topic: 'Input Impedance',
    question: 'A $25 \\mbox{ } \\Omega$ lossless transmission line is terminated in a short circuit. Use a Smith-Chart-Module to determine the input impedance at a distance of $0.8 \\mbox{ } \\lambda$ from the load.',
    questionImg: null,
    choices: [
      '$Z_{ \\mathrm{in} } = 100 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = j100 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = −j77 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = −j150 \\mbox{ } \\Omega$'
    ],
    answerIndex: 2,
    explanation: 'ch2/2-24.png'
  },
  {
    number: 25,
    type: 'multiple',
    topic: 'Load Impedance',
    question: 'A lossless $200 \\mbox{ } \\Omega$ transmission line $3 \\lambda /8$ in length is terminated in an unknown impedance. If the input impedance is $Z_{in} = −j5 \\mbox{ } \\Omega$, use a Smith-Chart Module to determine $Z_{ \\mathrm{L} }$.',
    questionImg: null,
    choices: [
      '$Z_\\mathrm{L} = j190 \\mbox{ } \\Omega$',
      '$Z_\\mathrm{L} = 190 \\mbox{ } \\Omega$',
      '$Z_\\mathrm{L} = −j190 \\mbox{ } \\Omega$',
      '$Z_\\mathrm{L} = −j95 \\mbox{ } \\Omega$'
    ],
    answerIndex: 0,
    explanation: 'ch2/2-25.png'
  },
  {
    number: 26,
    type: 'multiple',
    topic: 'Input Impedance',
    question: 'At an operating frequency of $5 \\mbox{ GHz}$, a $50 \\mbox{ W}$ lossless coaxial line with insulating\n' +
      'material having a relative permittivity $\\epsilon_r = 2.25$ is terminated in an antenna with\n' +
      'impedance $Z_{ \\mathrm{L} } = 100 \\mbox{ } \\Omega$. The line length is $31 \\mbox{ cm}$. Determine the input impedance.',
    questionImg: null,
    choices: [
      '$Z_{ \\mathrm{in} } = 50 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = 75 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = 25 \\mbox{ } \\Omega$',
      '$Z_{ \\mathrm{in} } = 100 \\mbox{ } \\Omega$'
    ],
    answerIndex: 2,
    explanation: 'ch2/2-26.png'
  },
  {
    number: 27,
    type: 'multiple',
    topic: 'Quarter-Wave Transformer',
    question: 'A lossless $25 \\mbox{ } \\Omega$ line is terminated in a load impedance $Z_{ \\mathrm{L} } = (50 − j100) \\mbox{ } \\Omega$. To\n' +
      'eliminate reflections, a quarter-wave transformer with impedance $Z_{02} = 7.75 \\mbox{ } \\Omega$ is\n' +
      'inserted at a distance $d$ from the load. If $\\lambda = 30 \\mbox{ cm}$, what is the value of $d$?',
    questionImg: null,
    choices: [
      '$d = 10 \\mbox{ cm}$',
      '$d = 6.5 \\mbox{ cm}$',
      '$d = 13 \\mbox{ cm}$',
      '$d = 1.5 \\mbox{ cm}$'
    ],
    answerIndex: 1,
    explanation: 'ch2/2-27.png'
  },
  {
    number: 28,
    type: 'multiple',
    topic: 'Quarter-Wave Transformer',
    question: 'A lossless $25 \\mbox{ } \\Omega$ line is terminated in a load impedance $Z_{ \\mathrm{L} } = (50 − j100) \\mbox{ } \\Omega$. To\n' +
      'eliminate reflections, a quarter-wave transformer was inserted at a distance of\n' +
      '$6.5 \\mbox{ cm}$ from the load. If $\\lambda = 30 \\mbox{ cm}$, what is the characteristic impedance of the\n' +
      'quarter-wave transformer?',
    questionImg: null,
    choices: [
      '$Z_{02} = 7.75 \\mbox{ } \\Omega$',
      '$Z_{02} = 25 \\mbox{ } \\Omega$',
      '$Z_{02} = 50 \\mbox{ } \\Omega$',
      '$Z_{02} = 100 \\mbox{ } \\Omega$'
    ],
    answerIndex: 0,
    explanation: 'ch2/2-28.png'
  },
  {
    number: 29,
    type: 'multiple',
    topic: 'Matching',
    question: 'A $100 \\mbox{ } \\Omega$ lossless line is to be matched to an antenna with $Z_{ \\mathrm{L} } = (150 − j40) \\mbox{ } \\Omega$\n' +
      'using a shorted stub. For perfect matching, it was determined that the stub should\n' +
      'be inserted at $d_1 = 0.104 \\lambda$ from the load. What should the length of the stub $l_1$ be?',
    questionImg: 'ch2/2-29.png',
    choices: [
      '$l_1 = 0.25 \\lambda$',
      '$l_1 = 0.35 \\lambda$',
      '$l_1 = 0.5 \\lambda$',
      '$l_1 = 0.17 \\lambda$'
    ],
    answerIndex: 3,
    explanation: 'ch2/2-29.png'
  },
  {
    number: 30,
    type: 'multiple',
    topic: 'Matching',
    question: 'A $100 \\mbox{ } \\Omega$ lossless line is to be matched to an antenna with $Z_{ \\mathrm{L} } = (150 − j40) \\mbox{ } \\Omega$\n' +
      'using a shorted stub. For perfect matching, it was determined that the stub should\n' +
      'be inserted at $d_1$ from the load and its length should be $l_1 = 0.173 \\lambda$. What is the value of $d_1$?',
    questionImg: null,
    choices: [
      '$d_1 = 0.3 \\lambda$',
      '$d_1 = 0.2 \\lambda$',
      '$d_1 = 0.1 \\lambda$',
      '$d_1 = 0.05 \\lambda$'
    ],
    answerIndex: 2,
    explanation: 'ch2/2-30.png'
  },
  {
    number: 31,
    type: 'multiple',
    topic: 'Impedance Matching',
    question: 'A $100 \\mbox{ } \\Omega$ lossless line is to be matched to an antenna with $Z_{ \\mathrm{L} } = (200 + j100) \\mbox{ } \\Omega$\n' +
      'using a shorted stub. For perfect matching, it was determined that the stub should\n' +
      'be inserted at $d_1 = 0.2 \\lambda$ from the load. What should the length of the stub $l_1$ be?',
    questionImg: 'ch2/2-31.png',
    choices: [
      '$l_1 = 0.125 \\lambda$',
      '$l_1 = 0.25 \\lambda$',
      '$l_1 = 0.375 \\lambda$',
      '$l_1 = 0.5 \\lambda$'
    ],
    answerIndex: 0,
    explanation: 'ch2/2-31.png'
  },
  {
    number: 32,
    type: 'multiple',
    topic: 'Impedance Matching',
    question: 'A $100 \\mbox{ } \\Omega$ lossless line is to be matched to an antenna with $Z_{ \\mathrm{L} } = (200 + j100) \\mbox{ } \\Omega$\n' +
      'using a shorted stub. For perfect matching, it was determined that the stub should\n' +
      'be inserted at $d_1$ from the load and its length should be $l_1 = 0.125 \\lambda$. What is the\n' +
      'value of $d_1$?',
    questionImg: null,
    choices: [
      '$d_1 = 0.1 \\lambda$',
      '$d_1 = 0.2 \\lambda$',
      '$d_1 = 0.3 \\lambda$',
      '$d_1 = 0.4 \\lambda$'
    ],
    answerIndex: 1,
    explanation: 'ch2/2-32.png'
  },
  {
    number: 33,
    type: 'multiple',
    topic: 'Transient Response',
    question: 'In response to a step voltage, the voltage waveform shown in the figure was\n' +
      'observed at the sending end of a lossless transmission line with $R_{g} = Z_0 = 150 \\mbox{ } \\Omega$\n' +
      'and $\\epsilon_r = 9$. Determine the length of the line.',
    questionImg: 'ch2/2-33.png',
    choices: [
      '$l = 150 \\mbox{ m}$',
      '$l = 300 \\mbox{ m}$',
      '$l = 450 \\mbox{ m}$',
      '$l = 600 \\mbox{ m}$'
    ],
    answerIndex: 1,
    explanation: 'ch2/2-33.png'
  },
  {
    number: 34,
    type: 'multiple',
    topic: 'Transient Response',
    question: 'In response to a step voltage, the voltage waveform shown in the figure was\n' +
      'observed at the sending end of a lossless transmission line with $R_{g} = Z_0 = 150 \\mbox{ } \\Omega$\n' +
      'and $\\epsilon_r = 9$. Determine the load impedance.',
    questionImg: 'ch2/2-34.png',
    choices: [
      '$Z_\\mathrm{L} = 25 \\mbox{ } \\Omega$',
      '$Z_\\mathrm{L} = 100 \\mbox{ } \\Omega$',
      '$Z_\\mathrm{L} = 150 \\mbox{ } \\Omega$',
      '$Z_\\mathrm{L} = 50 \\mbox{ } \\Omega$'
    ],
    answerIndex: 3,
    explanation: 'ch2/2-34.png'
  }
]

