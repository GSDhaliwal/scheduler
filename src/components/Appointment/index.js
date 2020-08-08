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
const DELETING = "DELETING"

export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = function(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(res => transition(SHOW))
      .catch(error => console.log(error))
    }

  const cancel = function() {
    transition(DELETING);
    props.cancelInterview(props.id)
      .then(res => transition(EMPTY))
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
            onDelete={() => cancel()}
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
        {mode === DELETING &&
          <Status
            message={DELETING}
          />} 
    </article>
  )

}