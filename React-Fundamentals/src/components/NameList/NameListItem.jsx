import React from "react";
import moment from "moment";
import "./NameListItem.css";

function NameListItem(props) {
  return (
    <React.Fragment>
      <li className="list-group-item shadow-sm">
        <div className="row item align-center">
          <div className="col-2">
            <img src={props.avatar} alt={props.name} className="border rounded-circle border-dark"/>
          </div>

          <div className="col-10">
            <h3>{props.name}</h3>
            <p>
              {props.email} | {props.city}
            </p>
            <small>{moment(props.birthday).format("DD-MM-YYYY")}</small>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}

export default NameListItem;
