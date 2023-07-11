const horariosPosibles = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", 
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", 
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
];

const horariosMaestros = [
  {
    maestro: 'Diego Emanuel Salinas Bernal',
    clase: 'Programacion Visual',
    horarios: ['16:00', '16:30', '17:00', '17:30'],
    dia: 'Lunes'
  },
  {
    maestro: 'Diego Emanuel Salinas Bernal',
    clase: 'Programacion Visual',
    horarios: ['16:00', '16:30', '17:00', '17:30'],
    dia: 'Lunes'
  },
];

const horariosClasesMuestra = [
    {
        day: 'Lunes',
        horarios: [
            '09:00',
            '09:30',
            '10:00'
        ]
    },
    {
        day: 'Lunes',
        horarios: [
            '17:30',
            '18:00',
            '18:30'
        ]
    },

];

let horariosOcupados = [...horariosMaestros];

const totalMaestros = horariosMaestros.length;

for (let i = 0; i < horariosPosibles.length - 2; i++) {
  const inicioDeClase = horariosPosibles[i];
  const mitadDeClase = horariosPosibles[i + 1];
  const finalDeClase = horariosPosibles[i + 2];

  let count = 0;

  for(let k = 0; k < horariosClasesMuestra.length; k++){
    const horarios = horariosClasesMuestra[k].horarios;

    if(
        horarios.includes(inicioDeClase) && 
        horarios.includes(mitadDeClase) && 
        horarios.includes(finalDeClase)
    ){
      count = totalMaestros;
    }
  }


  
  for (let j = 0; j < horariosOcupados.length; j++) {
    const horariosMaestro = horariosOcupados[j].horarios;
    
    if (
      horariosMaestro.includes(mitadDeClase) ||
      horariosMaestro.includes(finalDeClase) ||
      horariosMaestro.includes(inicioDeClase)
    ) {
      const ultimaHora = horariosMaestro.length - 1;
      if(horariosMaestro[0] === finalDeClase){
        continue;
      }
      if(horariosMaestro[ultimaHora] === inicioDeClase){
        continue;
      }
      count++;
    }
  }
  
  if (count === totalMaestros) {
    console.log(`El horario desde ${inicioDeClase} hasta ${finalDeClase} no está disponible.`);
  } else {
    console.log(`El horario desde ${inicioDeClase} hasta ${finalDeClase} está disponible.`);
  }
}
