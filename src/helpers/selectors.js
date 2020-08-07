const getAppointmentsForDay = function(state, day) {

  let days = state.days;
  let appointments = state.appointments;
  let selectedDay = [];
  let appointment = [];

  for (let i = 0; i < days.length; i++) {
    if (days[i].name === day) {
      selectedDay =(days[i].appointments)
    }
  }

  for (let j = 0; j < selectedDay.length; j++) {
    appointment.push(appointments[selectedDay[j]])
  }

  return appointment;
};


const getInterview = function(state, interview){
  if(!interview){
    return null;
  } else{
    let interviewer = interview.interviewer;
    let student = interview.student;
    for(let inter in state.interviewers){
      if(interviewer === Number(inter)){
        return {student:student, interviewer:state.interviewers[inter]};
      }
    }
  }
}

export { getAppointmentsForDay, getInterview } 