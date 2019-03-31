var chapterData = [
  {
    number: 1,
    type: 'multiple',
    topic: 'Static Conditions',
    question: 'In electromagnetics, under "static conditions" means that $\\bf{E}$ and $\\bf{H}$ in a given region of space do not vary with time, which is due to:',
    questionImg: null,
    choices: [
      'all electrons being stationary (not moving).',
      'the charge density\n\r' + '$\\rho_v \\mbox{ within every elemental volume } \\Delta \\upsilon$\n\r' + 'is constant with time and the current density\n\r' + '${\\bf {J}} \\mbox{ crossing the surface of } \\Delta \\upsilon \\mbox{ is zero.}$',
      'both $\\rho_v$ and ${\\bf {J}}$ are constant with time.',
      '$\\rho_v = 0$ and ${\\bf {J}} = 0$.'
    ],
    answerIndex: 2, // choices[2]
    explanation: 'ch4/4-1.png'
  },
  {
    number: 2,
    type: 'multiple',
    topic: 'Static and Dynamic Conditions',
    question: 'When computing electric and magnetic fields in a given region of space, under what circumstances do we have to consider both fields simultaneously?',
    questionImg: null,
    choices: [
      'Never; we always should be able to compute E independently of H, and vice versa.',
      'We have to consider $\\bf{E}$ and $\\bf{H}$ simultaneously if they point in the same direction.',
      'Under static conditions.',
      'Under dynamic conditions.'
    ],
    answerIndex: 3,
    explanation: 'ch4/4-2.png'
  },
  {
    number: 3,
    type: 'multiple',
    topic: 'Electric Charge',
    question: 'Consider 2 circular disks of electric charge:<br><br>' +
      'Disk 1: $\\rho_{s_1} = \\rho_0r$ (linear variation with r)<br><br>' +
      'Disk 2: $\\rho_{s_2} = \\rho_0r^2$ (quadratic variation with r)<br><br>' +
      'Both disks have a radius of 1 m and $\\rho_0$ = constant. What is the ratio of the total amount of charge $Q_1$ on disk 1 to $Q_2$ on disk 2?',
    questionImg: null,
    choices: [
      '$3 \\over 4$',
      '$4 \\over 3$',
      '$2$',
      '$1 \\over 2$'
    ],
    answerIndex: 1,
    explanation: 'ch4/4-3.png'
  },
  {
    number: 4,
    type: 'multiple',
    topic: 'Electric Charge',
    question: 'Consider 2 circular disks of electric charge:<br><br>' +
      'Disk 1: $\\rho_{s_1} = \\rho_0r$ with radius $a_1 = 1 m$<br><br>' +
      'Disk 2: $\\rho_{s_2} = \\rho_0r^2$ with radius $a_2 = \\mbox{ unknown }$<br><br>' +
      'Here, $\\rho_0$ = constant. What should the value of $a_2$ be so that the two disks have the same amount of total charge?',
    questionImg: null,
    choices: [
      '$a_2 = 1.075$',
      '$a_2 = 0.75$',
      '$a_2 = 0.79$',
      '$a_2 = 1.33$'
    ],
    answerIndex: 0,
    explanation: 'ch4/4-4.png'
  },
  {
    number: 5,
    type: 'multiple',
    topic: 'Electric Charge',
    question: 'Find the total charge contained in a cylindrical volume defined by $r \\leq 3 m$ and $0 \\leq z \\leq 2 m$ if $\\rho_v = 20rz ( \\mbox{m} C/ \\mbox{m}^3 )$.',
    questionImg: null,
    choices: [
      '$Q = 0.4$ Coulomb',
      '$Q = 0.8$ Coulomb',
      '$Q = 1.13$ Coulomb',
      '$Q = 2.26$ Coulomb'
    ],
    answerIndex: 3,
    explanation: 'ch4/4-5.png'
  },
  {
    number: 6,
    type: 'multiple',
    topic: 'Electric Charge',
    question: 'If the line charge density is given by $\\rho_l = 12y^2 (\\mbox{mC/m})$, find the total charge distributed on the y axis from $y = −5$ to $y = 5$.',
    questionImg: null,
    choices: [
      '$Q = 4 \\mbox{ C}$',
      '$Q = 1 \\mbox{ C}$',
      '$Q = 0.2 \\mbox{ C}$',
      '$Q = 2 \\mbox{ C}$'
    ],
    answerIndex: 1,
    explanation: 'ch4/4-6.png'
  },
  {
    number: 7,
    type: 'multiple',
    topic: 'Electric Charge',
    question: 'The charge density across the surface of a circular disk is given by\n' +
      '$$\\rho_s = 2e^{−r} \\mbox { (C/m),}$$' +
      'where $r$ is the radial distance from the center of the disk. The disk radius is 3 m. What is the total charge on the disk?',
    questionImg: null,
    choices: [
      '$Q = 5.03 \\mbox{ C}$',
      '$Q = 10.06 \\mbox{ C}$',
      '$Q = 22.32 \\mbox{ C}$',
      '$Q = 0.51 \\mbox{ C}$'
    ],
    answerIndex: 1,
    explanation: 'ch4/4-7.png'
  },
  {
    number: 8,
    type: 'multiple',
    topic: 'Electric Current',
    question: 'If the current density is given by ${\\bf {J}} = {\\bf \\hat{z}} 3xz$, what is the total current flowing through a square with corners at (0,0,0), (2,0,0), (2,0,2), and (0,0,2)?',
    questionImg: null,
    choices: [
      '$I = 0$',
      '$I = 4 \\mbox{ A}$',
      '$I = 2 \\mbox{ A}$',
      '$I = 16 \\mbox{ A}$'
    ],
    answerIndex: 0,
    explanation: 'ch4/4-8.png'
  },
  {
    number: 9,
    type: 'multiple',
    topic: 'Electric Field',
    question: 'The ring of charge shown in the figure is situated in the x–y plane and carries a uniform line charge density $\\rho_\\ell = −2 \\mbox{ (C/m)}$. What is the direction of the induced electric field at a point along the upper part of the $z$ axis?',
    questionImg: 'ch4/4-9.png',
    choices: [
      '${\\bf {E}} = 0$ everywhere along $z$ axis.',
      '${\\bf {E}}$ direction is undefined.',
      '${\\bf {E}}$ direction along $−{\\bf {\\hat{z}}}$.',
      '${\\bf {E}}$ direction along $+{\\bf {\\hat{z}}}$.'
    ],
    answerIndex: 2,
    explanation: 'ch4/4-9.png'
  },
  {
    number: 10,
    type: 'multiple',
    topic: 'Electric Field',
    question: 'The ring of charge shown in the figure is situated in the x–y plane and carries a uniform line charge density $\\rho_\\ell = −2 \\mbox{ (C/m)}$. What is the direction of ${\\bf {E}}$ at the origin?',
    questionImg: 'ch4/4-10.png',
    choices: [
      'Along $−{\\bf {\\hat{z}}}$',
      'Irrelevant, because ${\\bf {E}} = 0$ at the origin',
      'Along $+{\\bf {\\hat{z}}}$',
      'Along ${\\bf {\\hat{r}}}$, the radial direction away from the origin.'
    ],
    answerIndex: 1,
    explanation: 'ch4/4-10.png'
  },
  {
    number: 11,
    type: 'multiple',
    topic: 'Electric Field',
    question: 'For a very long wire coincident with the $z$ axis and containing electrons, what is the direction of ${\\bf {E}}$ at a distance $r$ from the wire?',
    questionImg: 'ch4/4-11.png',
    choices: [
      'Along ${\\bf {\\hat{r}}}$',
      'Along $+{\\bf {\\hat{z}}}$',
      'Along $-{\\bf {\\hat{z}}}$',
      'Along $-{\\bf {\\hat{r}}}$'
    ],
    answerIndex: 3,
    explanation: 'ch4/4-11.png'
  },
  {
    number: 12,
    type: 'multiple',
    topic: 'Electric Potential',
    question: 'Only one of the following four statements is totally correct. Which one?',
    questionImg: null,
    choices: [
      'Electric potential difference and voltage difference are fundamentally the same quantity.',
      'Electric potential difference applies to charges, whereas voltage applies to circuits, so they are totally different.',
      'Electric potential difference becomes equivalent to voltage, but only if the charges are stationary.',
      'None of the above three statements is correct.'
    ],
    answerIndex: 0,
    explanation: 'ch4/4-12.png'
  },
  {
    number: 13,
    type: 'multiple',
    topic: 'Electric Flux Density',
    question: 'In a given region of space, the electric flux density is given by ${\\bf {D}} = {\\bf {\\hat{x}}}xz^2$. What is the corresponding volume charge density at (0,0,2)?',
    questionImg: null,
    choices: [
      '$\\rho_{\\mathrm{v}} = 0$',
      '$\\rho_{\\mathrm{v}} = −2 \\mbox{ } \\mathrm{(C/m^3)}$',
      '$\\rho_{\\mathrm{v}} = 4 \\mbox{ } \\mathrm{(C/m^3)}$',
      '$\\rho_{\\mathrm{v}} = 6 \\mbox{ } \\mathrm{(C/m^3)}$'
    ],
    answerIndex: 2,
    explanation: 'ch4/4-13.png'
  },
  {
    number: 14,
    type: 'multiple',
    topic: 'Electric Flux Density',
    question: 'The electric flux density inside a dielectric sphere of radius $a = 2 \\mbox{ m}$ and centered at the origin is given by\n' +
      '$${\\bf {D}} = {\\bf {\\hat{R}}}5R^2 \\mbox{ (C/} m^2 \\mbox{).}$$' +
      'What is the volume charge density at $r = a$?',
    questionImg: null,
    choices: [
      '$\\rho_{\\mathrm{v}} = 150$ (C/m<sup>3</sup>)',
      '$\\rho_{\\mathrm{v}} = 40$ (C/m<sup>3</sup>)',
      '$\\rho_{\\mathrm{v}} = 15$ (C/m<sup>3</sup>)',
      '$\\rho_{\\mathrm{v}} = 60$ (C/m<sup>3</sup>)'
    ],
    answerIndex: 1,
    explanation: 'ch4/4-14.png'
  },
  {
    number: 15,
    type: 'multiple',
    topic: 'Electric Field',
    question: 'For the electric dipole shown in the figure, what is the direction of ${\\bf {E}}$ at a distance $r$ from the midpoint of the dipole?',
    questionImg: 'ch4/4-15.png',
    choices: [
      'Along $+{\\bf {\\hat{z}}}$',
      'Along ${\\bf {\\hat{y}}}$',
      'Along $-{\\bf {\\hat{z}}}$',
      'Along ${\\bf {\\hat{x}}}$'
    ],
    answerIndex: 2,
    explanation: 'ch4/4-15.png'
  },
  {
    number: 16,
    type: 'multiple',
    topic: 'Electrical Conductivity',
    question: 'Copper is a good conductor and mica is a good insulator. The conductivity of copper relative to that of mica is on the order of:',
    questionImg: null,
    choices: [
      '10<sup>23</sup>',
      '10<sup>6</sup>',
      '100',
      '10'
    ],
    answerIndex: 0,
    explanation: 'ch4/4-16.png'
  },
  {
    number: 17,
    type: 'multiple',
    topic: 'Piezoresistor',
    question: 'How does a piezoresistor function as a sensor?',
    questionImg: null,
    choices: [
      'It is used to measure temperature.',
      'Its resistance depends on the current flowing through it.',
      'It functions like a fuse.',
      'Its resistance changes if it gets stretched or compressed.'
    ],
    answerIndex: 3,
    explanation: 'ch4/4-17.png'
  },
  {
    number: 18,
    type: 'multiple',
    topic: 'Voltage Breakdown',
    question: 'The dielectric strength of air is around 3 MV/m. When cloud-to-ground lightening occurs between a cloud whose base is 600 m above the ground, the corresponding breakdown voltage between the cloud and the ground is',
    questionImg: null,
    choices: [
      '$V = 5 kV$',
      '$V = 1.8 GV$',
      '$2 kV$',
      '$30 kV$'
    ],
    answerIndex: 1,
    explanation: 'ch4/4-18.png'
  },
  {
    number: 19,
    type: 'multiple',
    topic: 'Capacitance',
    question: 'The structure shown in the figure consists of two concentric cylindrical shells, with the inner cylinder composed of a dielectric material with $\\epsilon_1 = 8\\epsilon_0$ and surrounded by a material with $\\epsilon_2 = 2\\epsilon_0$. The structure has conducting plates covering the top and bottom ends. What is the capacitance of the structure?',
    questionImg: 'ch4/4-19.png',
    choices: [
      '$C = 12\\epsilon_0 \\mbox{ mF}$',
      '$C = 24\\pi\\epsilon_0 \\mbox{ mF}$',
      '$C = 7.2\\epsilon_0 \\mbox{ mF}$',
      '$C = 7.6\\pi\\epsilon_0 \\mbox{ mF}$'
    ],
    answerIndex: 3,
    explanation: 'ch4/4-19.png'
  },
  {
    number: 20,
    type: 'multiple',
    topic: 'Supercapacitor',
    question: 'Select the only totally correct statement.',
    questionImg: null,
    choices: [
      'A supercapacitor can store more energy per unit weight than a traditional capacitor, but its charge and discharge rates are slower.',
      'A supercapacitor has faster charge and discharge rates than a traditional capacitor.',
      'A supercapacitor has the same charge and discharge rates as a traditional capacitor, but it can store more energy per unit weight.',
      'A supercapacitor can store more energy per unit weight than a traditional capacitor and also has faster charge and discharge rates.'
    ],
    answerIndex: 0,
    explanation: 'ch4/4-20.png'
  },
  {
    number: 21,
    type: 'multiple',
    topic: 'Supercapacitor',
    question: 'Select the only totally correct statement.',
    questionImg: null,
    choices: [
      'A supercapacitor can charge and discharge faster than a battery as well as store more energy.',
      'A supercapacitor can charge and discharge faster than a battery but it can store only a fraction of the energy that an equal-weight battery can.',
      'A supercapacitor can store more energy per unit weight than a battery, but its charge and discharge rates are slower.',
      'A supercapacitor cannot charge and discharge as fast as a battery nor store as much energy as an equal-weight battery can.'
    ],
    answerIndex: 1,
    explanation: 'ch4/4-21.png'
  },
  {
    number: 22,
    type: 'multiple',
    topic: 'Humidity Sensor',
    question: 'A capacitive sensor measures the change in voltage in an ac bridge circuit due to a change in the capacitance. In a capacitive humidity sensor, the change in capacitance is due to:',
    questionImg: null,
    choices: [
      'change in conductivity of the electrodes due to humidity.',
      'change in separation between electrodes as the substrate expands because of humidity.',
      'change in the permittivity of the substrate as a function of humidity.',
      'change in the conductivity of the substrate as a function of humidity.'
    ],
    answerIndex: 2,
    explanation: 'ch4/4-22.png'
  },
  {
    number: 23,
    type: 'multiple',
    topic: 'Image Method',
    question: 'Consider the infinitely long line of charge, with charge density $\\rho_\\ell$, positioned\n' +
      'parallel to a perfectly conducting flat surface at $a$ distance $d$. Using the result of\n' +
      'Example 4-6 and the image method, obtain an expression for the electric field ${\\bf {E}}$ at\n' +
      'a distance $r$ from the line of charge.',
    questionImg: 'ch4/4-23.png',
    choices: [
      '${\\bf {E}} { {\\bf {\\hat{r}}} \\rho_\\ell \\over \\pi\\epsilon_0r }$',
      '${\\bf {E}} { {\\bf {\\hat{r}}} \\rho_\\ell \\over 2\\pi\\epsilon_0 } [{ 1 \\over r } - { 1 \\over 2d-r }]$',
      '${\\bf {E}} { {\\bf {\\hat{r}}} \\rho_\\ell \\over 2\\pi\\epsilon_0 } [{ 1 \\over r } + { 1 \\over 2d-r }]$',
      '${\\bf {E}} { {\\bf {\\hat{r}}} 2 \\rho_\\ell \\over \\pi\\epsilon_0r }$'
    ],
    answerIndex: 2,
    explanation: 'ch4/4-23.png'
  },
  {
    number: 24,
    type: 'multiple',
    topic: 'Electrical Energy',
    question: 'A micro–parallel-plate capacitor has square plates, each at 2 cm on the side, and separated by 1 mm. The material between the plates is mica with a permittivity\n' +
      '$\\epsilon = 6\\epsilon_0$ and a dielectric strength of 200 MV/m. What is the maximum amount of\n' +
      'electrical energy that can be stored in the capacitor before dielectric breakdown\n' +
      'occurs?',
    questionImg: null,
    choices: [
      '$W_{\\mathrm{e}} = 2.25 J$',
      '$W_{\\mathrm{e}} = 2.25 nJ$',
      '$W_{\\mathrm{e}} = 4.25 μJ$',
      '$W_{\\mathrm{e}} = 0.425 J$'
    ],
    answerIndex: 3,
    explanation: 'ch4/4-24.png'
  }
]

