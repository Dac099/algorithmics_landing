/**
 * El algoritmo representa lo que se debe de hacer para cada día de la semana
 * Ya que las clases regulares y clases muestra que se manejan siempre pertenecen al mismo día
 */

const horario_laboral = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", 
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", 
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
];
/**
 * El arreglo horariolaboral se recorre por cada uno de sus elementos
 * 
 * En cada iteración se toman los dos siguientes elementos, esto con la
 * finalidad de considerar a esos 3 elementos como como una hora para poder
 * dar una clase muestra.
 * 
 * En cada iteración sobre el arrelo los tres elementos que toman se ven como
 * el siguiente formato ["09:00", "09:30", "10:00"]. De este tipo de formato hay 23,
 * ya que son 23 iteraciones que se hacen sobre el arreglo, con los valores que se tienen
 */


const clases_regulares = [
  {
    day: "Jueves",
    hours: [
      "17:30",
      "18:00",
      "18:30",
      "19:00"
    ],
    instructor: "Diego",
    lesson_name: "Python Start"
  },
  {
    day: "Jueves",
    hours: [
      "17:30",
      "18:00",
      "18:30",
      "19:00"
    ],
    instructor: "David",
    lesson_name: "Diseño de videojuegos"
  },
  {
    day: "Jueves",
    hours: [
      "19:00",
      "19:30",
      "20:00",
      "20:30"
    ],
    instructor: "David",
    lesson_name: "Diseño de videojuegos"
  },
  {
    day: "Jueves",
    hours: [
      "16:00",
      "16:30",
      "17:00",
      "17:30"
    ],
    instructor: "David",
    lesson_name: "Diseño de web"
  },
  {
    day: "Jueves",
    hours: [
      "16:00",
      "16:30",
      "17:00",
      "17:30"
    ],
    instructor: "Diego",
    lesson_name: "Python Start"
  },
];
/**
 * El arreglo de clases regulares es tomado de firestore y representa todas 
 * las clases que se dan con regularidad, clases de cursos ya establecidos.
 * 
 * Cada elemento del arreglo representa una clase.
 */


const clases_muestra = [
  {
    date: "Jueves, 13 de Julio",
    hours: [
      "09:30",
      "10:00",
      "10:30"
    ],
  },
  {
    date: "Jueves, 13 de Julio",
    hours: [
      "12:00",
      "12:30",
      "13:00"
    ],
  },
];
/**
 * Por defecto cada clase muestra tiene más elementos, pero para la filtración
 * de horas, solo se necesita conocer la fecha y el horario de la clase
 */


/**
 * En funcion del arreglo horario_laboral hay que hacer una comparación con los arreglos
 * clases_muestra y clases regulares para definir las horas disponibles en un día en específico.
 * 
 * En este caso se va a tomar al día jueves como ejemplo.
 */

/**
 * RAZONES POR LAS QUE UNA HORA ESTA DISPONIBLE
 *      
 *        [HORA A AGENDAR: 16:00 - 17:00]
 * 1. Si el inicio de la hora a agendar es igual al final a la hora final de una clase 
 * 2. Si el final de la hora a agendar es igual a la primer hora de una clase
 * 
 * Al menos una de las 2 razones se deben de cumplir para que un horario esté disponible.
 * 
 */

/**
 * FILTRANDO LOS HORARIOS DISPONIBLES A PARTIR DE LAS CLASES REGULARES:
 * 1. Crear arreglo "horarios_disponibles".
 * 2. Crear variable "total_de_maestros"
 * 3. Crear variable "incidencias"
 * 4. Verificar que el arreglo clases_regulares no este vacío
 * 5. Si no está vacío, recorrer el arreglo horario_laboral 
 * 6. Crear 3 variables:
 *  6.1 inicio_clase: es el elemento i
 *  6.2 mital_clase: es el elemento i + 1
 *  6.3 final_clase: es el elemento i + 2
 * 7. Recorrer el arreglo de clases regulares
 * 8. Crear variable horario_clase que almacene las horas de la clase
 * 9. Verificar si inicio_clase, mitad_clase, final_clase se encuentran dentro de horario_clase
 * 10. Si inicio_clase es igual al ultimo elemento de horario_clase continuamos con la siguiente iteración
 * 11. Si final_clase es igual al primer elemento de horario_clase continuamos con la siguiente iteración
 * 12. Si no se cumplen las condiciones anteriores, entonces se aumenta en 1 la variable incidencias
 * 13. Si el número de incidencias es menor al total_maestros, entonces verificamos si inicio_clase, mitad_clase y final_clase
       existen dentro del arreglo horas_restantes. Si no existen los agregamos.
 * 
 * FILTRANDO LOS HORARIOS PARA LAS CLASES MUESTRA:
 * A partir del arrelo de horas_restantes filtramos las clases muestra existentes siguiendo los pasos anteriones.
 */

function obtenerHorariosDisponibles(clases_muestra, clases_regulares, horario_laboral){
  let horarios_disponibles = [];
  const horas_restantes = [];
  //TODO: El total de maestros es igual a la longitud de la colección "instructors" de firestore
  const total_maestros = 2;
  
  if(clases_regulares.length > 0){      
    for(let i = 0; i < horario_laboral.length - 2; i++){
      const inicio_clase = horario_laboral[i];
      const mitad_clase = horario_laboral[i + 1]
      const final_clase = horario_laboral[i + 2];
      let incidencias = 0;
  
      for(let j = 0; j < clases_regulares.length; j++){
        const horario_clase = clases_regulares[j].hours;
        const final_horario_clase = horario_clase[horario_clase.length - 1];
        const inicio_horario_clase = horario_clase[0];
        
        if(horario_clase.includes(inicio_clase) || horario_clase.includes(final_clase)){
          if(inicio_clase === final_horario_clase){
            continue;
          }

          if(final_clase === inicio_horario_clase){
            continue;
          }

          incidencias += 1;
        }
      }
      
      if(incidencias < total_maestros){
        if(!horas_restantes.includes(inicio_clase)){
          horas_restantes.push(inicio_clase);
        }

        if(!horas_restantes.includes(mitad_clase)){
          horas_restantes.push(mitad_clase);
        }

        if(!horas_restantes.includes(final_clase)){
          horas_restantes.push(final_clase);
        }
      }
    }
  }

  if(clases_muestra.length > 0){
    for(let i = 0; i < horas_restantes.length - 2; i++){
      const inicio_clase = horas_restantes[i];
      const mitad_clase = horas_restantes[i + 1];
      const final_clase = horas_restantes[i + 2];
      let control = true;

      for(let j = 0; j < clases_muestra.length; j++){
        const horario = clases_muestra[j].hours;
        const inicio_horario = horario[0];
        const final_horario = horario[horario.length - 1];

        if(horario.includes(inicio_clase) || horario.includes(final_clase)){
          if(inicio_clase === final_horario){
            continue;
          }

          if(final_clase === inicio_horario){
            continue;
          }

          control = false;
        }

      }

      if(control){
        horarios_disponibles.push(inicio_clase + ' - ' + final_clase);
      }
    }
  }

  return horarios_disponibles;
}

console.log(obtenerHorariosDisponibles(clases_muestra, clases_regulares, horario_laboral));
