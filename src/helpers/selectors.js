
export default function getAppointmentsForDay(state, day) {

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