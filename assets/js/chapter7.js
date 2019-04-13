var chapterData = [
  {
    number: 1,
    type: 'multiple',
    topic: 'TEM Wave',
    question: 'A TEM wave propagating from an aircraft overhead towards the ground has its $\\bf{E}$\n' +
      'field pointing eastward. What is the direction of its $\\bf{H}$ field?',
    questionImg: null,
    choices: [
      '$\\bf{H}$ points westward.',
      '$\\bf{H}$ points northward',
      '$\\bf{H}$ points southward.',
      '$\\bf{H}$ points eastward.'
    ],
    answerIndex: 2, // choices[2]
    explanation: 'ch7/7-1.png'
  },
  {
    number: 2,
    type: 'multiple',
    topic: 'Wavelength',
    question: 'The electric field of a plane wave propagating in a nonmagnetic material is given by \n<br><br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ \\bf{E} } = [ { \\bf{ \\hat{y} } } 3 \\mathrm{sin} ( \\pi \\times 10^8t − \\pi x) + { \\bf{ \\hat{z} } } 4 \\mathrm{cos} ( \\pi \\times 10^8t − \\pi x)]$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$( \\mathrm{V/m} ).$\n<br><br>' +
      'Determine the wavelength $\\lambda$.',
    questionImg: null,
    choices: [
      '$\\lambda = 10 \\mbox{ m}$',
      '$\\lambda = 2 \\mbox{ m}$',
      '$\\lambda = 0.2 \\mbox{ m}$',
      '$\\lambda = 0.1 \\mbox{ m}$',
    ],
    answerIndex: 1,
    explanation: 'ch7/7-2.png'
  },
  {
    number: 3,
    type: 'multiple',
    topic: 'Relative Permittivity',
    question: 'The electric field of a plane wave propagating in a nonmagnetic material is given by \n<br><br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ \\bf{E} } = [ { \\bf{ \\hat{y} } } 3 \\mathrm{sin} ( \\pi \\times 10^8t − \\pi x) + { \\bf{ \\hat{z} } } 4 \\mathrm{cos} ( \\pi \\times 10^8t − \\pi x)]$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$( \\mathrm{V/m} ).$\n<br><br>' +
      'Determine the relative permittivity of the material.',
    questionImg: null,
    choices: [
      '$\\epsilon_r = 4$',
      '$\\epsilon_r = 1$',
      '$\\epsilon_r = 36$',
      '$\\epsilon_r = 9$'
    ],
    answerIndex: 3,
    explanation: 'ch7/7-3.png'
  },
  {
    number: 4,
    type: 'multiple',
    topic: 'Wavelength',
    question: 'The electric field of a plane wave propagating in a lossless, nonmagnetic, dielectric\n' +
      'material with $\\epsilon_r = 2.56$ is given by\n<br><br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ \\bf{E} } = { \\bf{ \\hat{y} } } 12 \\mathrm{cos} (6 \\pi \\times 10^9t − kz)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$( \\mathrm{V/m} ).$\n<br><br>' +
      'Determine the wavelength $\\lambda$ in the material.',
    questionImg: null,
    choices: [
      '$\\lambda = 6.24 \\mbox{ cm}$',
      '$\\lambda = 2 \\mbox{ m}$',
      '$\\lambda = 8.4 \\mbox{ cm}$',
      '$\\lambda = 62.4 \\mbox{ cm}$',
    ],
    answerIndex: 0,
    explanation: 'ch7/7-4.png'
  },
  {
    number: 5,
    type: 'multiple',
    topic: 'Intrinsic Impedance',
    question: 'The electric field of a plane wave propagating in a lossless, nonmagnetic, dielectric\n' +
      'material with $\\epsilon_r = 14.2$ is given by\n<br><br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ \\bf{E} } = { \\bf{ \\hat{y} } } 12 \\mathrm{cos} (6 \\pi \\times 10^9t − kz)$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$( \\mathrm{V/m} ).$\n<br><br>' +
      'Determine the intrinsic impedance $\\eta$ of the material.',
    questionImg: null,
    choices: [
      '$\\eta = 187 \\mbox{ } \\Omega$',
      '$\\eta = 76 \\mbox{ } \\Omega$',
      '$\\eta = 100 \\mbox{ } \\Omega$',
      '$\\eta = 63 \\mbox{ } \\Omega$'
    ],
    answerIndex: 2,
    explanation: 'ch7/7-5.png'
  },
  {
    number: 6,
    type: 'multiple',
    topic: 'RFID',
    question: 'RFID tags operating at the microwave frequency of 2.45 GHz offer superior\n' +
      'performance over those operating at lower frequencies in the following regard:',
    questionImg: null,
    choices: [
      'Greater read range and lower power requirements.',
      'Greater read range and higher data rate.',
      'Higher data rate and lower power requirements.',
      'Smaller size and lower power requirements.'
    ],
    answerIndex: 1,
    explanation: 'ch7/7-6.png'
  },
  {
    number: 7,
    type: 'multiple',
    topic: 'Wave Polarization',
    question: 'A helical antenna is used to generate:',
    questionImg: null,
    choices: [
      'Linearly polarized EM waves.',
      'Elliptically polarized EM waves.',
      'Circularly polarized EM waves.',
      'All of the above.'
    ],
    answerIndex: 2,
    explanation: 'ch7/7-7.png'
  },
  {
    number: 8,
    type: 'multiple',
    topic: 'RHC Polarization',
    question: 'A TEM wave is right-hand circularly polarized if the $\\bf{E}$ vector:',
    questionImg: null,
    choices: [
      'rotates counterclockwise as it travels in space.',
      'rotates clockwise as a function of time when viewed in a plane across the direction of travel.',
      'rotates at the same rate as the $\\bf{H}$ vector.',
      'rotates counterclockwise as a function of time when viewed in a plane across the direction of travel.'
    ],
    answerIndex: 3,
    explanation: 'ch7/7-8.png'
  },
  {
    number: 9,
    type: 'multiple',
    topic: 'Linear Polarization',
    question: 'The electric field of a plane wave is given by:\n<br><br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ \\bf{E} } (z, t) = { \\bf{ \\hat{x} } } a_x \\mathrm{cos} ( \\omega t − kz) + { \\bf{ \\hat{y} } } a_y \\mathrm{cos} ( \\omega t − kz + \\delta )$.\n<br><br>' +
      'The wave is linearly polarized only if:',
    questionImg: null,
    choices: [
      '$\\delta = 0$ or $\\pi$',
      '$a_x = a_y$',
      '$a_x = 0$ or $a_y = 0$',
      '$a_x = a_y$ and $\\delta = 0$'
    ],
    answerIndex: 0,
    explanation: 'ch7/7-9.png'
  },
  {
    number: 10,
    type: 'multiple',
    topic: 'RHC Polarization',
    question: 'The electric field of a plane wave is given by:\n<br><br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ \\bf{E} } (z, t) = { \\bf{ \\hat{x} } } a_x \\mathrm{cos} ( \\omega t − kz) + { \\bf{ \\hat{y} } } a_y \\mathrm{cos} ( \\omega t − kz + \\delta )$.\n<br><br>' +
      'The wave is RHC polarized only if:',
    questionImg: null,
    choices: [
      '$\\delta = 0$',
      '$a_x = a_y$',
      '$a_x = a_y$ and $\\delta = \\pi /2$',
      '$a_x = a_y$ and $\\delta = − \\pi /2$'
    ],
    answerIndex: 3,
    explanation: 'ch7/7-10.png'
  },
  {
    number: 11,
    type: 'multiple',
    topic: 'Good Conductor',
    question: 'Seawater has a relative permittivity $\\epsilon_r = 80$ and a conductivity $\\sigma = 4 \\mbox{ (S/m)}$. Over \n' +
      'what frequency range does seawater behave like a good conductor?',
    questionImg: null,
    choices: [
      '$f < 9 \\mbox{ MHz}$',
      '$f > 180 \\mbox{ MHz}$',
      '$f < 18 \\mbox{ MHz}$',
      '$f > 2 \\mbox{ MHz}$'
    ],
    answerIndex: 0,
    explanation: 'ch7/7-11.png'
  },
  {
    number: 12,
    type: 'multiple',
    topic: 'Good Conductor',
    question: 'Dry soil has a relative permittivity $\\epsilon_r = 2.5$ and a conductivity $\\sigma = 10^{−4} \\mbox{ (S/m)}$.\n' +
      'Over what frequency range does dry soil behave like a good conductor?',
    questionImg: null,
    choices: [
      '$f > 1 \\mbox{ MHz}$',
      '$f < 700 \\mbox{ kHz}$',
      '$f < 1 \\mbox{ MHz}$',
      '$f > 1 \\mbox{ GHz}$'
    ],
    answerIndex: 1,
    explanation: 'ch7/7-12.png'
  },
  {
    number: 13,
    type: 'multiple',
    topic: 'Skin Depth',
    question: 'Seawater has a relative permittivity $\\epsilon_r = 80$, magnetic permeability $\\mu = \\mu_0$, and a\n' +
      'conductivity $\\sigma = 4 \\mbox{ (S/m)}$. What is the skin depth of seawater at $1 \\mbox{ MHz}$?',
    questionImg: null,
    choices: [
      '$\\delta_s = 100 \\mbox{ m}$',
      '$\\delta_s = 1 \\mbox{ cm}$',
      '$\\delta_s = 1 \\mbox{ km}$',
      '$\\delta_s = 25 \\mbox{ cm}$'
    ],
    answerIndex: 3,
    explanation: 'ch7/7-13.png'
  },
  {
    number: 14,
    type: 'multiple',
    topic: 'Power Density',
    question: 'A wave traveling in a nonmagnetic medium with $\\epsilon_r = 9$ is characterized by an electric field given by\n<br><br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ \\bf{E} } = [ { \\bf{ \\hat{y} } } 6 \\mathrm{cos} ( \\pi \\times 10^7t + kx) − { \\bf{ \\hat{z} } } 4 \\mathrm{cos} ( \\pi \\times 10^7t + kx )]$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$( \\mathrm{V/m} )$.\n<br><br>' +
      'What is the average power density carried by the wave?',
    questionImg: null,
    choices: [
      '$S_{av} = 12 \\mbox{ } ( \\mathrm{ W/m^2 })$',
      '$S_{av} = 0.2 \\mbox{ } ( \\mathrm{ W/m^2 })$',
      '$S_{av} = 8 \\mbox{ } ( \\mathrm{ mW/m^2 })$',
      '$S_{av} = 2 \\mbox{ } ( \\mathrm{ mW/m^2 })$'
    ],
    answerIndex: 1,
    explanation: 'ch7/7-14.png'
  },
  {
    number: 15,
    type: 'multiple',
    topic: 'Phase Velocity',
    question: 'A wave traveling in a lossless, nonmagnetic medium has an electric field amplitude\n' +
      'of $47.56 \\mbox{ V/m}$ and an average power density of $6 \\mbox{ } \\mathrm{W/m^2}$. Determine the phase\n' +
      'velocity of the wave.',
    questionImg: null,
    choices: [
      '$u_p = 3 \\times 10^8 \\mbox{ m/s}$',
      '$u_p = 1 \\times 10^8 \\mbox{ m/s}$',
      '$u_p = 1.5 \\times 10^8 \\mbox{ m/s}$',
      '$u_p = 0.75 \\times 10^8 \\mbox{ m/s}$'
    ],
    answerIndex: 2,
    explanation: 'ch7/7-15.png'
  },
  {
    number: 16,
    type: 'multiple',
    topic: 'Radar Safe Region',
    question: 'At microwave frequencies, the power density considered safe for human exposure\n' +
      'is $1 \\mbox{ } \\mathrm{(mW/cm^2)}$. A radar radiates a wave with an electric field amplitude $E$ that\n' +
      'decays with distance as $E(R) = (1,000/R) \\mbox{ (V/m)}$, where $R$ is the distance in\n' +
      'meters. What is the radius of the unsafe region?',
    questionImg: null,
    choices: [
      '$R = 1 \\mbox{ km}$',
      '$R = 75 \\mbox{ m}$',
      '$R = 167 \\mbox{ m}$',
      '$R = 11.52 \\mbox{ m}$'
    ],
    answerIndex: 3,
    explanation: 'ch7/7-16.png'
  }
]

