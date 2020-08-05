import React from "react";
import InterviewerListItem from "components/InterviewerListItem"

import "components/InterviewerList.scss"



export default function InterviewerList(props){

  let interviewer = "";

  if (Array.isArray(props.interviewers)) {
    interviewer = props.interviewers.map(interviewer => (
      <InterviewerListItem
        id={interviewer.id}
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={props.setInterviewer}  
      />
    ))
  }


  return (
    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">
      { interviewer }
    </ul>
    </section>
  )
}