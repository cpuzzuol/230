var chapterData = [
  {
    number: 1,
    type: 'multiple',
    topic: 'Point Charge',
    question: 'The electric field $\\bf{E}$ at a distance $R$ from a negative electric charge:',
    questionImg: null,
    choices: [
      'Decreases in magnitude as $1/R^2$ and points away from the charge.',
      'Decreases in magnitude as $1/R$ and points away from the charge.',
      'Decreases in magnitude as $1/R^2$ and points towards the charge.',
      'Decreases in magnitude as $1/R$ and points towards the charge.'
    ],
    answerIndex: 2, // choices[2]
    explanation: 'ch1/1-1.png'
  },
  {
    number: 2,
    type: 'multiple',
    topic: 'Electric Force',
    question: 'The electric force acting on a charge at a distance $R$ from another charge of the same polarity:',
    questionImg: null,
    choices: [
      'Is attractive and varies as $1/R$.',
      'Is repulsive and varies as $1/R^2$.',
      'Is repulsive and varies as $1/R$.',
      'Is attractive and varies as $1/R^2$.'
    ],
    answerIndex: 1,
    explanation: 'ch1/1-2.png'
  },
  {
    number: 3,
    type: 'multiple',
    topic: 'Steady Current',
    question: 'A steady current $I$:',
    questionImg: null,
    choices: [
      'Induces an electric field, but not a magnetic field.',
      'Induces a magnetic field, but not an electric field.',
      'Induces neither an electric field nor a magnetic field.',
      'Induces both an electric field and a magnetic field.'
    ],
    answerIndex: 3,
    explanation: 'ch1/1-3.png'
  },
  {
    number: 4,
    type: 'multiple',
    topic: 'Electric and Magnetic Fields',
    question: 'Electric fields are induced by electric charges and magnetic fields are induced by electric currents. Only one of the following four statements is true. Which one?',
    questionImg: null,
    choices: [
      'Electric and magnetic fields are always independent of one another because they are induced by different sources.',
      'Electric and magnetic fields are always coupled, even when electric charges are stationary.',
      'Electric and magnetic fields are always coupled, even when electric charges are moving at a constant velocity.',
      'Electric and magnetic fields are coupled under time-varying conditions.'
    ],
    answerIndex: 3,
    explanation: 'ch1/1-4.png'
  },
  {
    number: 5,
    type: 'multiple',
    topic: 'Acoustic Wave',
    question: 'A $2.8 \\mbox{ kHz}$ acoustic wave travels in water at a speed of $1.4 \\mbox{ km/s}$.What is the wave\'s wavelength?',
    questionImg: null,
    choices: [
      '$\\lambda = 0.1 \\mbox{ m}$',
      '$\\lambda = 0.25 \\mbox{ m}$',
      '$\\lambda = 0.5 \\mbox{ m}$',
      '$\\lambda = 2 \\mbox{ m}$'
    ],
    answerIndex: 2,
    explanation: 'ch1/1-5.png'
  },
  {
    number: 6,
    type: 'multiple',
    topic: 'Lead/Lag',
    question: 'Does the red wave phase-lead or phase-lag the blue wave and by how much?',
    questionImg: 'ch1/1-6.png',
    choices: [
      'Leads by $45^\\circ$',
      'Leads by $90^\\circ$',
      'Lags by $45^\\circ$',
      'Lags by $90^\\circ$'
    ],
    answerIndex: 2,
    explanation: 'ch1/1-6.png'
  },
  {
    number: 7,
    type: 'multiple',
    topic: 'Time Shift',
    question: 'If $\\phi =\\pi/4$ and $T = 16 \\mbox{s}$, what is $\\Delta t$?',
    questionImg: 'ch1/1-7.png',
    choices: [
      '$\\Delta t = 2 \\mbox{ s}$',
      '$\\Delta t = 4 \\mbox{ s}$',
      '$\\Delta t = 6 \\mbox{ s}$',
      '$\\Delta t = 8 \\mbox{ s}$'
    ],
    answerIndex: 0,
    explanation: 'ch1/1-7.png'
  },
  {
    number: 8,
    type: 'multiple',
    topic: 'Traveling Wave',
    question: 'The height profile of a water wave created by a wave generator is given by $$y(x) = 3e^{−0.4x} \\mbox{cos} (4\\pi x) \\mbox{ meters,}$$' +
      'where $x = 0$ is the location of the generator. At what distance is the amplitude of the wave reduced to $0.6 \\mbox{m} $?',
    questionImg: null,
    choices: [
      '$4 \\mbox{ m}$',
      '$1.2 \\mbox{ m}$',
      '$0.6 \\mbox{ m}$',
      '$2 \\mbox{ m}$'
    ],
    answerIndex: 0,
    explanation: 'ch1/1-8.png'
  },
  {
    number: 9,
    type: 'multiple',
    topic: 'Traveling Wave',
    question: 'The height profile of a water wave created by a wave generator is given by $$y(x) = 4e^{−0.4x} \\mbox{cos} (4\\pi x) \\mbox{ meters,}$$' +
      'where $x = 0$ is the location of the generator. At what distance is the amplitude of the wave reduced to $0.8 \\mbox{m} $?',
    questionImg: null,
    choices: [
      '$4 \\mbox{ m}$',
      '$1.2 \\mbox{ m}$',
      '$0.6 \\mbox{ m}$',
      '$2 \\mbox{ m}$'
    ],
    answerIndex: 0,
    explanation: 'ch1/1-9.png'
  },
  {
    number: 10,
    type: 'multiple',
    topic: 'EM Spectrum',
    question: 'The visible part of the EM spectrum covers the wavelength range:',
    questionImg: null,
    choices: [
      '$1–4 \\mbox{ } \\mathrm{\\mu m}$',
      '$0.4–4 \\mbox{ } \\mathrm{\\mu m}$',
      '$0.4–0.7 \\mbox{ } \\mathrm{\\mu m}$',
      '$0.1–0.4 \\mbox{ } \\mathrm{\\mu m}$'
    ],
    answerIndex: 2,
    explanation: 'ch1/1-10.png'
  },
  {
    number: 11,
    type: 'multiple',
    topic: 'Mobile Phone Bands',
    question: 'Most mobile-phone communication channels operate in:',
    questionImg: null,
    choices: [
      'the VHF band',
      'the HF and VHF bands',
      'the UHF and SHF bands',
      'the EHF band'
    ],
    answerIndex: 2,
    explanation: 'ch1/1-11.png'
  },
  {
    number: 12,
    type: 'multiple',
    topic: 'Complex Numbers',
    question: 'Given that $V_1 = 6− j8$ and $V_2 = 3+ j4$, what is $V_1/V_2$?',
    questionImg: null,
    choices: [
      '$V_1/V_2 = 4 \\angle −53^\\circ$',
      '$V_1/V_2 = 4 \\angle 53^\\circ$',
      '$V_1/V_2 = 2 \\angle 106^\\circ$',
      '$V_1/V_2 = 2 \\angle −106^\\circ$'
    ],
    answerIndex: 3,
    explanation: 'ch1/1-12.png'
  },
  {
    number: 13,
    type: 'multiple',
    topic: 'Complex Numbers',
    question: 'Given that $V_1 = 6− j8$ and $V_2 = 3+ j4$, what is $V_1V_2^*$?',
    questionImg: null,
    choices: [
      '$V_1V_2^* = 50 \\angle 0^\\circ$',
      '$V_1V_2^* = 25 \\angle 0^\\circ$',
      '$V_1V_2^* = 50 \\angle −106^\\circ$',
      '$V_1V_2^* = 25 \\angle 106^\\circ$'
    ],
    answerIndex: 2,
    explanation: 'ch1/1-13.png'
  },
  {
    number: 14,
    type: 'multiple',
    topic: 'Complex Numbers',
    question: 'Given that $V_1 = 6− j8$ and $V_2 = 3+ j4$, what is $V_1V_2$?',
    questionImg: null,
    choices: [
      '$V_1V_2 = 50 \\angle 0^\\circ$',
      '$V_1V_2 = 25 \\angle 0^\\circ$',
      '$V_1V_2 = 50 \\angle −106^\\circ$',
      '$V_1V_2 = 25 \\angle 106^\\circ$'
    ],
    answerIndex: 0,
    explanation: 'ch1/1-14.png'
  },
  {
    number: 15,
    type: 'multiple',
    topic: 'Complex Algebra',
    question: 'Given $z = 2 \\angle −0.5 \\mbox{rad}$, determine ln ${\\bf z}$.',
    questionImg: null,
    choices: [
      'ln ${\\bf z} = −j0.345$',
      'ln ${\\bf z} = 0.69− j0.5$',
      'ln ${\\bf z} = 2− j1$',
      'ln ${\\bf z} = 0.69− j2$'
    ],
    answerIndex: 1,
    explanation: 'ch1/1-15.png'
  },
  {
    number: 16,
    type: 'multiple',
    topic: 'Phasors',
    question: 'The phasor equivalent of the time function $\\nu (t) = 10 \\mbox{sin} (\\omega t +45^\\circ)$ is:',
    questionImg: null,
    choices: [
      '$\\widetilde{V} = 10e^{−j45^\\circ}$',
      '$\\widetilde{V} = 10e^{j45^\\circ}$',
      '$\\widetilde{V} = 10e^{−j135^\\circ}$',
      '$\\widetilde{V} = 10e^{j135^\\circ}$'
    ],
    answerIndex: 0,
    explanation: 'ch1/1-16.png'
  },
  {
    number: 17,
    type: 'multiple',
    topic: 'Phasors',
    question: 'The phasor equivalent of the time function $\\nu (t) = −4 \\mbox{cos} (\\omega t −30^\\circ)$ is:',
    questionImg: null,
    choices: [
      '$\\widetilde{V} = 4e^{−j150^\\circ}$',
      '$\\widetilde{V} = 4e^{j150\\circ}$',
      '$\\widetilde{V} = −4e^{j30\\circ}$',
      '$\\widetilde{V} = −4e^{j150\\circ}$',
    ],
    answerIndex: 1,
    explanation: 'ch1/1-17.png'
  },
  {
    number: 18,
    type: 'multiple',
    topic: 'Phasors',
    question: 'For an ac voltage at an angular frequency $\\omega$, the instantaneous time function corresponding to the phasor $\\widetilde{V} = −5e^{j30^\\circ}$ is:',
    questionImg: null,
    choices: [
      '$\\nu (t) = 5 \\mathrm{cos} (\\omega t +150^\\circ)$',
      '$\\nu (t) = 5 \\mathrm{cos} (\\omega t −30^\\circ)$',
      '$\\nu (t) = 5 \\mathrm{cos} (\\omega t −150^\\circ)$',
      '$\\nu (t) = −5 \\mathrm{cos} (\\omega t +60^\\circ)$'
    ],
    answerIndex: 2,
    explanation: 'ch1/1-18.png'
  },
  {
    number: 19,
    type: 'multiple',
    topic: 'Phasors',
    question: 'For an ac voltage at an angular frequency $\\omega = 377 \\mbox{ rad/s}$, the instantaneous time function corresponding to the phasor $\\widetilde{V} = 3e^{−j30^\\circ}$ is:',
    questionImg: null,
    choices: [
      '$\\nu (t) = 3 \\mathrm{cos} (377t +30^\\circ)$',
      '$\\nu (t) = 3 \\mathrm{cos} (377t +150^\\circ)$',
      '$\\nu (t) = −3 \\mathrm{cos} (377t −30^\\circ)$',
      '$\\nu (t) = −3 \\mathrm{sin} (377t −120^\\circ)$'
    ],
    answerIndex: 3,
    explanation: 'ch1/1-19.png'
  },
  {
    number: 20,
    type: 'multiple',
    topic: 'Traveling Wave',
    question: 'The height profile of a water wave created by a wave generator is given by' +
      '$$y(x) = 6e^{−0.2x} \\mbox{cos} (8 \\pi x) \\mbox{ meters,}$$' +
      'What is the wavelength of the wave?',
    questionImg: null,
    choices: [
      '$\\lambda = 0.2 \\mbox{ m}$',
      '$\\lambda = 0.25 \\mbox{ m}$',
      '$\\lambda = 0.4 \\mbox{ m}$',
      '$\\lambda = 4 \\mbox{ m}$'
    ],
    answerIndex: 1,
    explanation: 'ch1/1-20.png'
  }
]

