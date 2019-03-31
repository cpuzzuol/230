var chapterData = [
  {
    number: 1,
    type: 'multiple',
    topic: 'Geostationary Orbit',
    question: 'A satellite in geostationary orbit:',
    questionImg: null,
    choices: [
      'Does not move (remains stationary).',
      'Moves, but does so at a very slow speed so it appears stationary from Earth.',
      'Moves at a velocity governed by its mass.',
      'Moves at a very high speed, over $10,000 \\mbox{ km/hr}$, governed by the circumference of its orbit and the duration of a sidereal day.'
    ],
    answerIndex: 3, // choices[3]
    explanation: 'ch10/10-1.png'
  },
  {
    number: 2,
    type: 'multiple',
    topic: 'Satellite Transponder',
    question: 'Some satellite transponders use <i>"polarization diversity"</i> to:',
    questionImg: null,
    choices: [
      'Double the data rate for the same bandwidth.',
      'Reduce the power requirement by a factor of 2.',
      'Reduce receiver noise.',
      'None of the above.',
    ],
    answerIndex: 0,
    explanation: 'ch10/10-2.png'
  },
  {
    number: 3,
    type: 'multiple',
    topic: 'Doppler Radar',
    question: 'A stationary $15 \\mbox{ GHz}$ Doppler radar is pointed towards a car speeding away at a\n' +
      'radial velocity of $72 \\mbox{ km/hr}$. What is the Doppler frequency shift measured by the\n' +
      'radar?',
    questionImg: null,
    choices: [
      '$f_{\\mathrm{d}} = 2 \\mbox{ kHz}$',
      '$f_{\\mathrm{d}} = −2 \\mbox{ kHz}$',
      '$f_{\\mathrm{d}} = 1 \\mbox{ kHz}$',
      '$f_{\\mathrm{d}} = −1 \\mbox{ kHz}$'
    ],
    answerIndex: 1,
    explanation: 'ch10/10-3.png'
  },
  {
    number: 4,
    type: 'multiple',
    topic: 'Monopulse Radar',
    question: 'A monopulse radar is used to:',
    questionImg: null,
    choices: [
      'Measure the shape of the pulse reflected by a target.',
      'Measure the time delay of the signal reflected by a target.',
      'Track the direction of a target.',
      'Measure the velocity of a target.'
    ],
    answerIndex: 2,
    explanation: 'ch10/10-4.png'
  },
  {
    number: 5,
    type: 'multiple',
    topic: 'Satellite Orbital Period',
    question: 'A remote sensing satellite is in circular orbit around Earth at an altitude of $900 \\mbox{ km}$\n' +
      'above Earth’s surface. What is its orbital period?',
    questionImg: null,
    choices: [
      '$T = 159.34 \\mbox{ minutes}$',
      '$T = 102.95 \\mbox{ minutes}$',
      '$T = 31.34 \\mbox{ minutes}$',
      '$T = 17.18 \\mbox{ minutes}$'
    ],
    answerIndex: 1,
    explanation: 'ch10/10-5.png'
  },
  {
    number: 6,
    type: 'multiple',
    topic: 'Pulse Repetition Frequency',
    question: 'A collision-avoidance automotive radar is designed to detect the presence of\n' +
      'vehicles up to a range of $100 \\mbox{ m}$. What is the maximum usable PRF?',
    questionImg: null,
    choices: [
      '$f_\\mathrm{p} = 3 \\mbox{ kHz}$',
      '$f_\\mathrm{p} = 1.5 \\mbox{ MHz}$',
      '$f_\\mathrm{p} = 3 \\mbox{ MHz}$',
      '$f_\\mathrm{p} = 30 \\mbox{ kHz}$'
    ],
    answerIndex: 2,
    explanation: 'ch10/10-6.png'
  },
  {
    number: 7,
    type: 'multiple',
    topic: 'Range Resolution',
    question: 'The range resolution of a radar that transmits pulses each $0.1 \\mbox{ } \\mathrm{\\mu s}$ in duration is:',
    questionImg: null,
    choices: [
      '$\\Delta R = 15 \\mbox{ m}$',
      '$\\Delta R = 1.5 \\mbox{ m}$',
      '$\\Delta R = 150 \\mbox{ m}$',
      '$\\Delta R = 15 \\mbox{ cm}$'
    ],
    answerIndex: 0,
    explanation: 'ch10/10-7.png'
  },
  {
    number: 8,
    type: 'multiple',
    topic: 'Detection vs. False Alarm',
    question: 'In target detection by radar, increasing the detection probability:',
    questionImg: 'ch10/10-8.png',
    choices: [
      'causes the false-alarm probability to decrease.',
      'has no effect on the false-alarm probability.',
      'may or may not influence the false-alarm probability.',
      'causes the false-alarm probability to increase.'
    ],
    answerIndex: 3,
    explanation: 'ch10/10-8.png'
  }
]

