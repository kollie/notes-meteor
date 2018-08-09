import React from "react";
import moment from "moment";
import propTypes from "prop-types";

const NoteListItem = props => {
  return (
    <div>
      <h1>{props.note.title || "Untitled Note"}</h1>
      <p>{moment(props.updatedAt).format("M/DD/YY")}</p>
    </div>
  );
};

Notification.propTypes = {
  note: propTypes.object.isRequired
};

export default NoteListItem;
