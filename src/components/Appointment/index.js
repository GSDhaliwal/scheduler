import React from "react"

import "./styles.scss";

import Header from "./Header"
import Show from "./Show"
import Empty from "./Empty"
import Form from "./Form"
import Status from "./Status"

import useVisualMode from "hooks/useVisualMode"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING"

export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = function(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING, true);
    props.bookInterview(props.id, interview)
      .then(res => transition(SHOW))
      .catch(error => console.log(error))
  }



  return (
    <article className="appointment">
      <Header time={ props.time }/>
        {mode === EMPTY && 
          <Empty 
            onAdd={(() => transition(CREATE))} />}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer.name}
          />
        )}
        {mode === CREATE && 
          <Form
            interviewers={props.interviewers}
            onSave={save}
            onCancel={(() => back())}
            />}
        {mode === SAVING &&
          <Status
            message={SAVING}
          />}  
    </article>
  )

}