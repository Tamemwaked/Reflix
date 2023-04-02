import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing(props) {
  const users = props.users;

  return (
    <div>
      <Link to="/catalog">
        <div className="usersContainer">
          {users.map((u) => (
            <div
              className={"userCard"}
              style={{ backgroundColor: u.backgroundColor }}
            >
              {u.name}
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
