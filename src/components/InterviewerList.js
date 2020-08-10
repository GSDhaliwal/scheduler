import React from "react";
import InterviewerListItem from "components/InterviewerListItem"
import PropTypes from 'prop-types';

import "components/InterviewerList.scss"

InterviewerList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default function InterviewerList(props){

  let interviewer = "";

  if (Array.isArray(props.interviewers)) {
    interviewer = props.interviewers.map(interviewer => (
      <InterviewerListItem
        id={interviewer.id}
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={props.onChange}  
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