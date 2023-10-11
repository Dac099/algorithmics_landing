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

const TOTAL_INSTRUCTORS = 2; //Bring the amount of instructors from firestore
let total_hours = [...day];

//Remove hours of the scheduled trial lessons from the day
if(trial_lessons.length > 0){
  trial_lessons.forEach(lesson => {
    const first_hour = lesson.hours[0];

    if(total_hours.includes(lesson.hours[0])){
      const start_hour = total_hours.findIndex(hour => hour === first_hour) - 1;
      total_hours.splice(start_hour, 3);
    }
  });
}

//Remove hours of the regular lessons from the day
if(lessons.length > 0){
  const lessons_hours = [];
  const string_hours = [];
  const unavailable_hours = [];
  const repeated_hours = {};

  //Get the hours for each lesson
  lessons.forEach(lesson => {
    lessons_hours.push(lesson.hours);
  });
  
  //Transform each array of hours into a string
  lessons_hours.forEach(lesson => {
    string_hours.push(lesson.join('-'));
  });

  //Count how many times a string is repeated
  string_hours.forEach(string => {
    repeated_hours[string] = (repeated_hours[string] || 0) + 1;
  });

  //Get the first element of the array of hours
  for(const [key, value] of Object.entries(repeated_hours)){
    if(value >= TOTAL_INSTRUCTORS){
      const hours = key.split('-');
      unavailable_hours.push(hours[0]);
    }
  }

  //Remove the unavailable hours from the day
  unavailable_hours.forEach(unavailable_hour => {
    const start_hour = total_hours.findIndex(hour => hour === unavailable_hour) - 1;
    total_hours.splice(start_hour, 4);
  });
}
console.log(total_hours);

