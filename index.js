const horariosPosibles = [
  "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", 
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", 
  "17:00", "17:30", "18:00", "18:30", "19:00"
];

/**
 *  POSIBLE SOLUCION
 *  1. Recorrer el arrelo de posbiles horarios
 *  2. Si para cada elemento, y su siguiente elemento aparecen dentro del horario ocupado de 
 *    el total de maestros, significa que esos dos elementos no estan disponibles, de lo contrario 
 *    si estan dispoibles
 */

//Obtener los horarios ocupados de los maestros
let horariosOcupados = [
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

const totalMaestros = 3;

for (let i = 0; i < horariosPosibles.length - 2; i++) {
  const inicioDeClase = horariosPosibles[i];
  const mitadDeClase = horariosPosibles[i + 1];
  const finalDeClase = horariosPosibles[i + 2];

  let count = 0;
  
  for (let j = 0; j < horariosOcupados.length; j++) {
    const horariosMaestro = horariosOcupados[j].horarios;
    
    if (
      horariosMaestro.includes(mitadDeClase) ||
      horariosMaestro.includes(finalDeClase) ||
      horariosMaestro.includes(inicioDeClase)
    ) {
      const ultimaHora = horariosMaestro.length - 1;
      if(horariosMaestro[0] == finalDeClase){
        continue;
      }
      if(horariosMaestro[ultimaHora] == inicioDeClase){
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

