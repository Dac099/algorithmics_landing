const day = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", 
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", 
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"
];

const lessons = [
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

const trial_lessons = [
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

const TOTAL_INSTRUCTORS = 2; //Traer el número desde firebase
let total_hours = day;

if(trial_lessons.length > 0){
  trial_lessons.map(lesson => {
    const first_hour = lesson.hours[0];
    const last_hour = lesson.hours[lesson.hours.length - 1];

    if(total_hours.includes(lesson.hours[0])){
      const start_hour = total_hours.findIndex(hour => hour === first_hour);
      const end_hour = total_hours.findIndex(hour => hour === last_hour)
    }
  })
}