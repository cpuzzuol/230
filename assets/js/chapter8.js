var chapterData = [
  {
    number: 1,
    type: 'multiple',
    topic: 'Normal Incidence',
    question: 'When a plane wave in medium 1 is incident upon a plane boundary of a different\n' +
      'medium at normal incidence, the $\\bf{E}$ and $\\bf{H}$ fields of the reflected and transmitted\n' +
      'waves can be related to those of the incident wave by applying:',
    questionImg: 'ch8/8-1.png',
    choices: [
      'Only the boundary condition for $\\bf{E}$.',
      'Only the boundary condition for $\\bf{H}$.',
      'The boundary conditions for both $\\bf{E}$ and $\\bf{H}$.',
      'Snell\'s laws.'
    ],
    answerIndex: 2, // choices[2]
    explanation: 'ch8/8-1.png'
  },
  {
    number: 2,
    type: 'multiple',
    topic: 'Oblique Incidence',
    question: 'When a plane wave in medium 1 is incident upon a plane boundary of a different\n' +
      'medium at oblique incidence, the $\\bf{E}$ and $\\bf{H}$ fields and the directions of propagation\n' +
      'of the reflected and transmitted waves can be related to those of the incident wave\n' +
      'by applying:',
    questionImg: 'ch8/8-2.png',
    choices: [
      'Only Snell\'s laws.',
      'The boundary conditions for both $\\bf{E}$ and $\\bf{H}$.',
      'The phase-matching condition.',
      'The boundary conditions for both $\\bf{E}$ and $\\bf{H}$ plus the phase-matching condition.',
    ],
    answerIndex: 3,
    explanation: 'ch8/8-2.png'
  },
  {
    number: 3,
    type: 'multiple',
    topic: 'Radar Radome',
    question: 'The aircraft radome shown in the figure has $\\epsilon_r = 16$ and the radar operates at $5 \\mbox{ GHz}$.\n' +
      'How thick should the radome be so that it is structurally strong $(d > 2 \\mbox{ cm})$\n' +
      'and simultaneously "transparent" to the radar signal?',
    questionImg: 'ch8/8-3.png',
    choices: [
      '$d = 3 \\mbox{ cm}$',
      '$d = 2.25 \\mbox{ cm}$',
      '$d = 2.5 \\mbox{ cm}$',
      '$d = 2.1 \\mbox{ cm}$'
    ],
    answerIndex: 1,
    explanation: 'ch8/8-3.png'
  },
  {
    number: 4,
    type: 'multiple',
    topic: 'Normal Incidence on Conductor',
    question: 'A $7.5 \\mbox{ GHz}$ plane wave in air is normally incident upon the plane surface of a very\n' +
      'good conductor. At what distance from the boundary in the air medium is the $\\bf{E}$\n' +
      'field at its first maximum?',
    questionImg: null,
    choices: [
      '$l_{\\mathrm{max}} = 1 \\mbox{ cm}$',
      '$l_{\\mathrm{max}} = 2 \\mbox{ cm}$',
      '$l_{\\mathrm{max}} = 4 \\mbox{ cm}$',
      '$l_{\\mathrm{max}} = 0.5 \\mbox{ cm}$'
    ],
    answerIndex: 0,
    explanation: 'ch8/8-4.png'
  },
  {
    number: 5,
    type: 'multiple',
    topic: 'Modal Dispersion',
    question: 'The term "modal dispersion" in optical fibers refers to:',
    questionImg: null,
    choices: [
      'Light rays dispersing out of the fiber.',
      'Light modes that cause the fiber to act like a short circuit.',
      'Different light modes having different transit times between the two ends.',
      'None of the above.'
    ],
    answerIndex: 2,
    explanation: 'ch8/8-5.png'
  },
  {
    number: 6,
    type: 'multiple',
    topic: 'Plane of Incidence',
    question: 'Transverse electric (TE) and transverse magnetic (TM) polarizations are defined in\n' +
      'terms of the direction of the electric field relative to the <i>plane of incidence</i>. For the\n' +
      'configuration shown, the plane of incidence is:',
    questionImg: 'ch8/8-6.png',
    choices: [
      'The $x–y$ plane.',
      'The plane containing ${ \\bf{ \\hat{k} } }_i$ and ${ \\bf{ \\hat{z} } }$.',
      'The $x–z$ plane.',
      'The $y–z$ plane.'
    ],
    answerIndex: 1,
    explanation: 'ch8/8-6.png'
  },
  {
    number: 7,
    type: 'multiple',
    topic: 'Brewster Angle',
    question: 'For nonmagnetic materials the Brewster angle does not exist:',
    questionImg: null,
    choices: [
      'For perpendicular polarization.',
      'For parallel polarization.',
      'For any polarization.',
      'For low dielectric media.'
    ],
    answerIndex: 0,
    explanation: 'ch8/8-7.png'
  },
  {
    number: 8,
    type: 'multiple',
    topic: 'Rectangular Waveguide',
    question: 'Cutoff frequencies for TE and TM modes in a hollow rectangular waveguide with\n<br><br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$a = 3 \\mbox{ cm}$ and $b = 2 \\mbox{ cm}$.\n<br><br>' +
      'In a rectangular waveguide, the cutoff frequency associated with a given mode\n' +
      'defines:',
    questionImg: 'ch8/8-8.png',
    choices: [
      'The frequency above which the wave will not propagate.',
      'The frequency at which the group velocity is a maximum.',
      'The frequency at which the zigzag angle is zero.',
      'The frequency below which the wave will not propagate.'
    ],
    answerIndex: 3,
    explanation: 'ch8/8-8.png'
  },
  {
    number: 9,
    type: 'multiple',
    topic: 'Resonant Cavity',
    question: 'One of the modes of a metallic resonant cavity has a resonant frequency of $10 \\mbox{ GHz}$\n' +
      'and a quality factor $Q = 10^4$. What is the bandwidth of the spectrum supportable\n' +
      'by that cavity at that mode?',
    questionImg: null,
    choices: [
      '$\\Delta f = 100 \\mbox{ MHz}$',
      '$\\Delta f = 1 \\mbox{ MHz}$',
      '$\\Delta f = 30 \\mbox{ MHz}$',
      '$\\Delta f = 3 \\mbox{ MHz}$'
    ],
    answerIndex: 1,
    explanation: 'ch8/8-9.png'
  },
  {
    number: 10,
    type: 'multiple',
    topic: 'Wave Power',
    question: 'A plane wave in air with an electric field amplitude of $40 \\mbox{ V/m}$ is incident normally\n' +
      'upon the surface of a lossless, nonmagnetic medium with $\\epsilon_r = 25$. Determine the\n' +
      'average power density of the transmitted wave.',
    questionImg: null,
    choices: [
      '${S^t}_{av} = 0.28 \\mbox{ } \\mathrm{W/m^2}$',
      '${S^t}_{av} = 2.92 \\mbox{ } \\mathrm{W/m^2}$',
      '${S^t}_{av} = 1.12 \\mbox{ } \\mathrm{W/m^2}$',
      '${S^t}_{av} = 0.56 \\mbox{ } \\mathrm{W/m^2}$'
    ],
    answerIndex: 2,
    explanation: 'ch8/8-10.png'
  },
  {
    number: 11,
    type: 'multiple',
    topic: 'Minima and Maxima',
    question: 'A $25 \\mbox{-MHz}$ plane wave with electric field amplitude of $25 \\mbox{ V/m}$ is normally incident\n' +
      'in air onto a semi-infinite, perfect dielectric medium with $\\epsilon_r = 36$. Determine the\n' +
      'distance in the air medium from the boundary to the nearest minimum of the\n' +
      'electric field intensity, $\\bf{|E|}$.',
    questionImg: null,
    choices: [
      '$l_{\\mathrm{min}} = 1 \\mbox{ m}$',
      '$l_{\\mathrm{min}} = 1.5 \\mbox{ m}$',
      '$l_{\\mathrm{min}} = 3 \\mbox{ m}$',
      '$l_{\\mathrm{min}} = 0$'
    ],
    answerIndex: 3,
    explanation: 'ch8/8-11.png'
  },
  {
    number: 12,
    type: 'multiple',
    topic: 'Light Color',
    question: 'Orange light of wavelength $0.61 \\mbox{ } \\mathrm{ \\mu m}$ in air enters a block of glass with $\\epsilon_r = 1.68$.\n' +
      'What color would it appear to a sensor embedded in the glass? The wavelength\n' +
      'ranges of colors are violet $(0.39 \\mbox{ to } 0.45 \\mbox{ } \\mathrm{\\mu m})$, blue $(0.45 \\mbox{ to } 0.49 \\mbox{ } \\mathrm{ \\mu m})$, green $(0.49 \\mbox{ to } 0.58 \\mbox{ } \\mathrm{ \\mu m})$,\n' +
      'yellow $(0.58 \\mbox{ to } 0.60 \\mbox{ } \\mathrm{ \\mu m})$, orange $(0.60 \\mbox{ to } 0.62 \\mbox{ } \\mathrm{\\mu m})$, and red $(0.62 \\mbox{ to } 0.78 \\mbox{ } \\mathrm{ \\mu m})$.',
    questionImg: null,
    choices: [
      'blue',
      'orange',
      'green',
      'red'
    ],
    answerIndex: 0,
    explanation: 'ch8/8-12.png'
  },
  {
    number: 13,
    type: 'multiple',
    topic: 'Incidence Angle',
    question: 'A plane wave in air with\n<br><br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${ \\bf{ \\widetilde{E} } }^i = ({ \\bf{ \\hat{x} } } 6 − { \\bf{ \\hat{y} } } 4 − { \\bf{ \\hat{z} } } 6)e^{ −j(4x+6z) }$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$(V/m)$\n<br><br>' +
      'is incident upon the planar surface of a dielectric material, with $\\epsilon_r = 2.25$\n' +
      'occupying the half-space $z \\geq 0$. Determine the incidence angle $\\theta_i$.',
    questionImg: null,
    choices: [
      '$\\theta_i = 45.4^\\circ$',
      '$\\theta_i = 33.7^\\circ$',
      '$\\theta_i = 28.4^\\circ$',
      '$\\theta_i = 62.7^\\circ$'
    ],
    answerIndex: 1,
    explanation: 'ch8/8-13.png'
  },
  {
    number: 14,
    type: 'multiple',
    topic: 'Refraction Angle',
    question: 'A parallel-polarized plane wave is incident from air onto a dielectric medium with\n' +
      '$\\epsilon_r = 4$ at the Brewster angle. What is the refraction angle?',
    questionImg: null,
    choices: [
      '$\\theta_2 = 18.44^\\circ$',
      '$\\theta_2 = 36.22^\\circ$',
      '$\\theta_2 = 19.32^\\circ$',
      '$\\theta_2 = 26.57^\\circ$'
    ],
    answerIndex: 3,
    explanation: 'ch8/8-14.png'
  },
  {
    number: 15,
    type: 'multiple',
    topic: 'Waveguide',
    question: 'A TE wave propagating in a dielectric-filled waveguide of unknown permittivity\n' +
      'has dimensions $a = 5 \\mbox{ cm}$ and $b = 3 \\mbox{ cm}$. If the x-component of its electric field is given by\n<br><br>' +
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$E_{\\mathrm{x}} = −36 \\mathrm{cos} (20 \\pi x) \\mathrm{sin} (100 \\pi y) \\mathrm{sin} (2.4 \\pi \\times 10^{10} t − 52.9 \\pi z),$&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\mbox{(V/m)}$\n<br><br>' +
      'determine the mode number.',
    questionImg: null,
    choices: [
      '$\\mathrm{TE_{13}}$',
      '$\\mathrm{TE_{31}}$',
      '$\\mathrm{TE_{23}}$',
      '$\\mathrm{TE_{12}}$'
    ],
    answerIndex: 0,
    explanation: 'ch8/8-15.png'
  }
]

