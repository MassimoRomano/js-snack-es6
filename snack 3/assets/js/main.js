let animali = [
    { nome: 'tigre', famiglia: 'felini', classe: 'mammiferi' },
    { nome: 'leone', famiglia: 'felini', classe: 'mammiferi' },
    { nome: 'quaglia', famiglia: 'volatili', classe: 'uccelli' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'balena', famiglia: 'cetacei', classe: 'mammiferi' },
  ];

  
  const mammiferi = animali.filter(animal => animal.classe === 'mammiferi');
  
  console.log(mammiferi);