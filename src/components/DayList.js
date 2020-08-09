import React from "react";
import DayListItem from "components/DayListItem"

export default function DayList(props){

  let dayOnSchedule = "";

  if (Array.isArray(props.days)) {
    dayOnSchedule = props.days.map(day => (
      <DayListItem 
        key={day.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === props.day.day}
        setDay={props.setDay}  
      />
    ))
  }


  return(
    <ul>
      { dayOnSchedule }
    </ul>
  )
}
