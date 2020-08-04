import React from "react";
import classnames from "classnames";

import "components/InterviewerListItem.scss"


export default function InterviewerListItem(props) {

  const interviewerClass = classnames("interviewers__item", { "interviewers__item--selected" : props.selected

  })

  const iterviewerSelected = function(props) {
    if (props.selected) {
      return props.name;
    }
  }

  return (
    <li 
      className={ interviewerClass }
      onClick={() => props.setInterviewer(props.name)}
    >
      <img
        className="interviewers__item-image"
        src={ props.avatar }
        alt={ props.name }
      />
      { iterviewerSelected(props) }
    </li>
  )

}