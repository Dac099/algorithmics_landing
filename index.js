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
      "17:30",
      "18:00",
      "18:30"
    ],
  },
  {
    date: "Jueves, 13 de Julio",
    hours: [
      "16:30",
      "17:00",
      "17:30"
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
 * APLICANDO LA SOLUCIÓN:
 * 1. Crear arreglo "total_de_clases" y el arreglo "horarios_disponibles".
 * 2. Crear variable "total_de_maestros"
 * 3. Crear variable "incidencias"
 * 
 * 
 * 4. Verificar que el arreglo clases_muestra no esté vacío, si no
 *  está vacío, entonces copiar sus elementos a total_de_clases.
 * 
 * 5. Verificar que el arreglo clases_regulares no esté vacío, si no
 *  está vacío, entonces copiar sus elementos en el arreglo total_de_clases.
 * 
 * 6. Recorrer el arreglo horario_laboral, como se indica al inicio
 * 
 * 7. Tomando los elementos [i, i + 1, i + 2] del arreglo, los renombramos 
 *  como "inicio_clase", "mitad_clase", "final_clase" respectivamente
 * 
 * 8. Filtrar el arreglo total_de_clases, en función de las clases que incluyan
 *  "inicio_clase", "mitad_clase", "final_clase" en su campo hours.
 *  8.1 Aplicando las razones por las que una clase esté disponible
 * 
 * 9. Las clases filtradas las asignamos a la variable incidencias
 * 
 * 10. Si el número de incidencias es igual al número total de maestros,
 *  entonces, el elemento de la iteración (la hora) no esta disponible.
 * 
 * 11. Si el número de incidencias es distinto al número total de maestros, 
 *  entonces es un horario disponible y lo almacenamos en el arreglo "horarios_disponibles"
 * 
 * 12. Retornamos el arreglo horarios disponibles
 */

function obtenerHorariosDisponibles(clases_muestra, clases_regulares, horario_laboral){
  const total_de_clases = [];
  const horarios_disponibles = [];
  //TODO: El total de maestros es igual a la longitud de la colección "instructors" de firestore
  const total_maestros = 2;
  let incidencias = 0;

  if(clases_muestra.length > 0){
    total_de_clases.push(...clases_muestra);
  }

  if(clases_regulares.length > 0){
    total_de_clases.push(...clases_regulares);
  }

  
}
