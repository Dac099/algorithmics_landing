import { 
  TOTAL_INSTRUCTORS,
  lessons,
  trial_lessons,
  day
} from "./data.js";

function excludeTrialLessons(trial_lessons, total_hours){
  trial_lessons.forEach(lesson => {
    const first_hour = lesson.hours[0];

    if(total_hours.includes(first_hour)){

      if(first_hour === '09:00'){
  
        const start_hour = total_hours.findIndex(hour => hour === first_hour);
        total_hours.splice(start_hour, 2);

      }else{

        const start_hour = total_hours.findIndex(hour => hour === first_hour) - 1;
        total_hours.splice(start_hour, 3);
        
      }
    }
  });
}

function excludeLessons(lessons, total_hours, total_instructors){
  const lessons_hours = [];
  const string_hours = [];
  const unavailable_hours = [];
  const repeated_hours = {};
  const hours_to_delete = [];

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
    if(value >= total_instructors){
      const hours = key.split('-');
      unavailable_hours.push(hours[0]);
    }
  }

  //Get the hours to remove from the day
  unavailable_hours.forEach(unavailable_hour => {
    const start_hour = total_hours.findIndex(hour => hour === unavailable_hour) - 1;
    const final_hour = start_hour + 4

    for(let i = start_hour; i < final_hour; i++){
      if(!hours_to_delete.includes(total_hours[i])){
        hours_to_delete.push(total_hours[i]);
      }
    }
  });

  //Delete the element from day that are included in hours_to_delete array
  hours_to_delete.forEach(target => {
    if(total_hours.includes(target)){
      const index_hour = total_hours.findIndex(hour => hour === target);
      total_hours.splice(index_hour, 1);
    }
  })
}

function getAvailableHours(trial_lessons, lessons, day, total_instructors){
  let total_hours = [...day];
  
  if(trial_lessons.length > 0){
    excludeTrialLessons(trial_lessons, total_hours);
  }

  if(lessons.length > 0){
    excludeLessons(lessons, total_hours, total_instructors);
  }

  return total_hours;
}

console.log(getAvailableHours(trial_lessons,lessons,day,TOTAL_INSTRUCTORS));