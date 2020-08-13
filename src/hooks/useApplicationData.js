import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {


  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get("/api/days")),
      Promise.resolve(axios.get("/api/appointments")),
      Promise.resolve(axios.get("/api/interviewers")),
    ])
    .then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  }, [])
  
  
  const bookInterview = function(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    }
    return(
      axios
      .put(`/api/appointments/${id}`, appointment)
    )
  }

  const updateInterviewAfterBooking = function(id, interview) {
    
    let dayId;

    if (id <= 5) {
      dayId = 0; 
    } else if (id > 5 && id <= 10) {
      dayId = 1; 
    } else if (id > 10 && id <= 15) {
      dayId = 2; 
    } else if (id > 15 && id <= 20) {
      dayId = 3; 
    } else if (id > 20 && id <= 25) {
      dayId = 4; 
    }

    
    const updateSpots = {
      ...state.days[dayId], spots: state.days[dayId].spots - 1
    }
    const days = [...state.days]
    
    days[dayId] = updateSpots;
      
    
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
   
      setState({
        ...state,
        appointments, days
      });
    
  }


  const updateInterviewAfterEdit = function(id, interview) {
        
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
  
    setState({
      ...state,
      appointments
    });
    
  }

  const cancelInterview = function(id) {
    return(
      axios
      .delete(`/api/appointments/${id}`)

    )
  }

  const updateInterviewAfterCancel = function(id) {
    let dayId;

    if (id <= 5) {
      dayId = 0; 
    } else if (id > 5 && id <= 10) {
      dayId = 1; 
    } else if (id > 10 && id <= 15) {
      dayId = 2; 
    } else if (id > 15 && id <= 20) {
      dayId = 3; 
    } else if (id > 20 && id <= 25) {
      dayId = 4; 
    }

    
    const updateSpots = {
      ...state.days[dayId], spots: state.days[dayId].spots + 1
    }
    const days = [...state.days]
    
    days[dayId] = updateSpots;
       
    const appointment = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    setState({
      ...state,
      appointments, days
    });
  };

  return { state, setDay, bookInterview, cancelInterview, updateInterviewAfterBooking, updateInterviewAfterCancel, updateInterviewAfterEdit };

}