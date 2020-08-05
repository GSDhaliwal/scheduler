import React from "react";
import classnames from "classnames";

import "components/InterviewerListItem.scss"


export default function InterviewerListItem(props) {

  //classnames for SCSS
  const interviewerClass = classnames("interviewers__item", { "interviewers__item--selected" : props.selected

  })

  
  const interviewerSelected = function(props) {
    if (props.selected) {
      return props.name;
    }
  }

  return (
    <li 
      className={ interviewerClass }
      onClick={() => props.setInterviewer(props.id)}
    >
      <img
        className="interviewers__item-image"
        src={ props.avatar }
        alt={ props.name }
      />
      { interviewerSelected(props) }
    </li>
  )

}