import React from "react";

export default function AllTabs() {
  return (
    <ul className="nav nav-tabs mt-4">
      <li className="active ml-3 mr-3">
        <a data-toggle="tab" href="#shows">
          My shows list
        </a>
      </li>

      <li>
        <a data-toggle="tab" href="#movies">
          My movies list
        </a>
      </li>
    </ul>
  );
}
