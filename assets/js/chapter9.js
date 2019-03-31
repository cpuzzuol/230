var chapterData = [
  {
    number: 1,
    type: 'multiple',
    topic: 'Dipole Efficiency',
    question: 'A $2 \\mbox{ m}$ long center-fed dipole antenna operates in the AM broadcast band at\n' +
      '$10 \\mbox{ MHz}$. The dipole is made of copper wire with a radius of $1 \\mbox{ mm}$. Determine\n' +
      'the radiation efficiency of the antenna.',
    questionImg: null,
    choices: [
      '$\\xi = 31.2\\%$',
      '$\\xi = 62.4\\%$',
      '$\\xi = 97.7\\%$',
      '$\\xi = 8.1\\%$'
    ],
    answerIndex: 2, // choices[2]
    explanation: 'ch9/9-1.png'
  },
  {
    number: 2,
    type: 'multiple',
    topic: 'Antenna Gain',
    question: 'An antenna with a radiation efficiency of $80\\%$ has a directivity of $8.0 \\mbox{ dB}$. What is its gain in decibels?',
    questionImg: null,
    choices: [
      '$G \\mbox{(dB)} = 8.9 \\mbox{ dB}$',
      '$G \\mbox{(dB)} = 7.03 \\mbox{ dB}$',
      '$G \\mbox{(dB)} = 6.97 \\mbox{ dB}$',
      '$G \\mbox{(dB)} = 5.23 \\mbox{ dB}$',
    ],
    answerIndex: 1,
    explanation: 'ch9/9-2.png'
  },
  {
    number: 3,
    type: 'multiple',
    topic: 'Antenna Directivity',
    question: 'The radiation pattern of a circular parabolic-reflector antenna consists of a circular\n' +
      'major lobe with a half-power beamwidth of $6^\\circ$ and a few minor lobes. Ignoring the\n' +
      'minor lobes, obtain an estimate for the antenna directivity in $\\mbox{dB}$.',
    questionImg: null,
    choices: [
      '$D \\mbox{(dB)} = 30.59 \\mbox{ dB}$',
      '$D \\mbox{(dB)} = 36.21 \\mbox{ dB}$',
      '$D \\mbox{(dB)} = 27.36 \\mbox{ dB}$',
      '$D \\mbox{(dB)} = 18.62 \\mbox{ dB}$'
    ],
    answerIndex: 0,
    explanation: 'ch9/9-3.png'
  },
  {
    number: 4,
    type: 'multiple',
    topic: 'Radiated Power',
    question: 'A $1 \\mbox{ m}$ long dipole is excited by a sinusoidally varying current with an amplitude\n' +
      '$I_0 =5 \\mbox{ A}$. Determine the time average power radiated by the dipole if the oscillating\n' +
      'frequency is $150 \\mbox{ MHz}$.',
    questionImg: null,
    choices: [
      '$P_{ \\mathrm{rad} } = 230 \\mbox{ W}$',
      '$P_{ \\mathrm{rad} } = 460 \\mbox{ W}$',
      '$P_{ \\mathrm{rad} } = 715 \\mbox{ W}$',
      '$P_{ \\mathrm{rad} } = 915 \\mbox{ W}$'
    ],
    answerIndex: 3,
    explanation: 'ch9/9-4.png'
  },
  {
    number: 5,
    type: 'multiple',
    topic: 'Dipole Effective Area',
    question: 'Determine the effective area of a half-wave dipole antenna at $75 \\mbox{ MHz}$.',
    questionImg: null,
    choices: [
      '$A_{ \\mathrm{e} } = 6.2 \\mbox{ } \\mathrm{cm^2}$',
      '$A_{ \\mathrm{e} } = 29.1 \\mbox{ } \\mathrm{cm^2}$',
      '$A_{ \\mathrm{e} } = 2.09 \\mbox{ } \\mathrm{cm^2}$',
      '$A_{ \\mathrm{e} } = 16.36 \\mbox{ } \\mathrm{cm^2}$'
    ],
    answerIndex: 2,
    explanation: 'ch9/9-5.png'
  },
  {
    number: 6,
    type: 'multiple',
    topic: 'Communication Link',
    question: 'A $3 \\mbox{ GHz}$ line-of-sight microwave communication link consists of two lossless\n' +
      'parabolic dish antennas, each $2 \\mbox{ m}$ in diameter. If the receive antenna requires\n' +
      '$10 \\mbox{ nW}$ of receive power for good reception and the distance between the antennas\n' +
      'is $40 \\mbox{ km}$, how much power should be transmitted?',
    questionImg: null,
    choices: [
      '$P_{ \\mathrm{t} } = 1.36 \\mbox{ W}$',
      '$P_{ \\mathrm{t} } = 62.9 \\mbox{ mW}$',
      '$P_{ \\mathrm{t} } = 16.2 \\mbox{ mW}$',
      '$P_{ \\mathrm{t} } = 32.4 \\mbox{ mW}$'
    ],
    answerIndex: 2,
    explanation: 'ch9/9-6.png'
  },
  {
    number: 7,
    type: 'multiple',
    topic: 'Communication Link',
    question: 'A half-wave dipole TV broadcast antenna transmits $1 \\mbox{ kW}$ at $100 \\mbox{ MHz}$. What is the\n' +
      'power received by a home television antenna with $3\\mbox{-dB}$ gain if located at a distance\n' +
      'of $30 \\mbox{ km}$?',
    questionImg: null,
    choices: [
      '$P_{ \\mathrm{rec} } = 2.32 \\mbox{ } \\mathrm{mW}$',
      '$P_{ \\mathrm{rec} } = 0.21 \\mbox{ } \\mathrm{\\mu W}$',
      '$P_{ \\mathrm{rec} } = 4.42 \\mbox{ } \\mathrm{\\mu W}$',
      '$P_{ \\mathrm{rec} } = 8.16 \\mbox{ } \\mathrm{nW}$'
    ],
    answerIndex: 1,
    explanation: 'ch9/9-7.png'
  },
  {
    number: 8,
    type: 'multiple',
    topic: 'Link Power Budget',
    question: 'Consider the communication system shown in the figure, with all components\n' +
      'properly matched. If $P_t = 10 \\mbox{ W}$ and $f = 10 \\mbox{ GHz}$, what is the received power?',
    questionImg: 'ch9/9-8.png',
    choices: [
      '$P_{ \\mathrm{rec} } = 2.85 \\mbox{ } \\mathrm{nW}$',
      '$P_{ \\mathrm{rec} } = 2.85 \\mbox{ } \\mathrm{\\mu W}$',
      '$P_{ \\mathrm{rec} } = 2.85 \\mbox{ } \\mathrm{mW}$',
      '$P_{ \\mathrm{rec} } = 2.85 \\mbox{ } \\mathrm{pW}$'
    ],
    answerIndex: 0,
    explanation: 'ch9/9-8.png'
  },
  {
    number: 9,
    type: 'multiple',
    topic: 'Antenna Directivity',
    question: 'A uniformly illuminated square aperture situated in the $x–y$ plane is $2 \\mbox{ m}$ on each\n' +
      'side. If $f = 10 \\mbox{ GHz}$, determine the antenna directivity $D$ in decibels.',
    questionImg: null,
    choices: [
      '$D = 32.7 \\mbox{ dB}$',
      '$D = 10.8 \\mbox{ dB}$',
      '$D = 56.2 \\mbox{ dB}$',
      '$D = 48.6 \\mbox{ dB}$'
    ],
    answerIndex: 3,
    explanation: 'ch9/9-9.png'
  },
  {
    number: 10,
    type: 'multiple',
    topic: 'Reciprocity',
    question: 'Most antennas are reciprocal devices, which means they:',
    questionImg: null,
    choices: [
      'exhibit the same voltage across their terminals regardless of the polarization of the incident wave.',
      'exhibit the same radiation pattern when used as transmitters as when used as receievers.',
      'exhibit the same current flowing through them when connected to an ac source, regardless of the frequency of the ac source.',
      'exhibit the same radiation resistance regardless of the ac frequency.'
    ],
    answerIndex: 1,
    explanation: 'ch9/9-10.png'
  },
  {
    number: 11,
    type: 'multiple',
    topic: 'Short Dipole',
    question: 'A dipole antenna may be treated as a short antenna if its length $l$ is such that:',
    questionImg: null,
    choices: [
      '$l <$ a few centimeters.',
      '$l \\lesssim \\lambda /2$, where $\\lambda$ is the wavelength of the radiated wave.',
      '$l \\lesssim \\lambda /50$.',
      'None of the above.'
    ],
    answerIndex: 2,
    explanation: 'ch9/9-11.png'
  },
  {
    number: 12,
    type: 'multiple',
    topic: 'Short Dipole Radiation Pattern',
    question: 'For a short dipole antenna whose length is oriented along the $z \\mbox{-axis}$, its azimuth\n' +
      'radiation pattern (in the $x–y$ plane) is:',
    questionImg: null,
    choices: [
      'a circle.',
      'an infinity-like pattern with a half-power beamwidth of $90^{ \\circ }$.',
      'an infinity-like pattern with a half-power beamwidth of $78^{ \\circ }$.',
      'an infinity-like pattern with a half-power beamwidth of $45^{ \\circ }$.'
    ],
    answerIndex: 0,
    explanation: 'ch9/9-12.png'
  },
  {
    number: 13,
    type: 'multiple',
    topic: 'Antenna Pattern',
    question: 'On a $\\mbox{dB}$ scale, the maximum value of an antenna radiation pattern is:',
    questionImg: null,
    choices: [
      '$10 \\mbox{ dB}$',
      '$3 \\mbox{ dB}$',
      '$3 \\mbox{ dB}$',
      '$0 \\mbox{ dB}$'
    ],
    answerIndex: 3,
    explanation: 'ch9/9-13.png'
  },
  {
    number: 14,
    type: 'multiple',
    topic: 'Half-Power Beamwidth',
    question: 'The half-power beamwidth can be obtained for the radiation pattern, when plotted\n' +
      'in $\\mbox{dB}$, by measuring the angle between:',
    questionImg: null,
    choices: [
      'the $−0.5 \\mbox{ dB}$ angles.',
      'the $−3 \\mbox{ dB}$ angles.',
      'the $−10 \\mbox{ dB}$ angles.',
      'the $+3 \\mbox{ dB}$ angles.'
    ],
    answerIndex: 1,
    explanation: 'ch9/9-14.png'
  },
  {
    number: 15,
    type: 'multiple',
    topic: 'Antenna Gain and Directivity',
    question: 'Is antenna gain $G$ related to antenna directivity $D$?',
    questionImg: null,
    choices: [
      'No. Antenna gain $G$ accounts for how an antenna boosts the amount of power radiated by the antenna, whereas antenna directivity $D$ is a measure of howdirective its beam is.',
      'No. Antenna gain $G$ has nothing to do with the antenna’s radiation pattern whereas the directivity $D$ is computed using the radiation pattern.',
      'Yes. The two terms are identical and represent the same antenna property.',
      'Yes. $G = \\xi D$, where $\\xi$ is the radiation efficiency, which takes into account ohmic losses.'
    ],
    answerIndex: 3,
    explanation: 'ch9/9-15.png'
  },
  {
    number: 16,
    type: 'multiple',
    topic: 'Directivity Variation with Frequency',
    question: 'An antenna with a uniformly illuminated circular aperture has a directivity of\n' +
      '$32 \\mbox{ dB}$. If the frequency is doubled from $10 \\mbox{ GHz}$ to $20 \\mbox{ GHz}$, the directivity increases by:',
    questionImg: null,
    choices: [
      '$6 \\mbox{ dB}$',
      '$3 \\mbox{ dB}$',
      '$1.5 \\mbox{ dB}$',
      '$9 \\mbox{ dB}$'
    ],
    answerIndex: 0,
    explanation: 'ch9/9-16.png'
  },
  {
    number: 17,
    type: 'multiple',
    topic: 'Communication Receiver',
    question: 'The receiver section of a communication system is characterized by a system noise\n' +
      'temperature $T_{ \\mathrm{sys} }$ and operates over a bandwidth $B$. With all other elements of the\n' +
      'communication system remaining constant, the signal-to-noise ratio $S_n$ varies as:',
    questionImg: null,
    choices: [
      '$S_{ \\mathrm{n} } \\sim T_{ \\mathrm{sys} }B$',
      '$S_{ \\mathrm{n} } \\sim T_{ \\mathrm{sys} }/B$',
      '$S_{ \\mathrm{n} } \\sim 1/(T_{ \\mathrm{sys} }B)$',
      '$S_{ \\mathrm{n} } \\sim T_{ \\mathrm{sys} }B^2$'
    ],
    answerIndex: 2,
    explanation: 'ch9/9-17.png'
  },
  {
    number: 18,
    type: 'multiple',
    topic: 'Eye\'s Beamwidth',
    question: 'The pupil of the human eye is circular in shape and has a diameter of approximately\n' +
      '$4 \\mbox{ mm}$. What is the approximate beamwidth of the eye’s pupil for red color $(\\lambda \\approx 0.7 \\mbox{ } \\mathrm{\\mu m})$?',
    questionImg: null,
    choices: [
      '$\\beta \\approx 10^{\\circ}$',
      '$\\beta \\approx 1^{\\circ}$',
      '$\\beta \\approx 0.1^{\\circ}$',
      '$\\beta \\approx 0.01^{\\circ}$'
    ],
    answerIndex: 3,
    explanation: 'ch9/9-18.png'
  },
  {
    number: 19,
    type: 'multiple',
    topic: 'Frequency Scanning',
    question: 'Most antenna arrays can be used to steer the beam electronically upon:',
    questionImg: 'ch9/9-19.png',
    choices: [
      'reception and transmission.',
      'reception only.',
      'transmission only.',
      'phase conjugation.'
    ],
    answerIndex: 0,
    explanation: 'ch9/9-19.png'
  },
  {
    number: 20,
    type: 'multiple',
    topic: 'Frequency Scanning',
    question: 'The term "frequency scanning" refers to when:',
    questionImg: null,
    choices: [
      'Different-frequency signals are assigned to the different elements of a linear antenna array.',
      'The beam of a linear antenna array is steered in direction by changing the frequency of the excitation signal.',
      'The excitation signal is connected to only every other element of the linear antenna array.',
      'None of the above.'
    ],
    answerIndex: 1,
    explanation: 'ch9/9-20.png'
  }
]

