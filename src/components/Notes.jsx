import React from "react";

function Notes(props) {
  return (
    <div className="box w-1/4 border-2 rounded-xl m-10 shadow-xl">
      <h1 className="px-5 py-3 text-2xl font-bold border-b-2 tracking-wide">{props.title}</h1>
      <p className="p-5">
        {props.desc}
      </p>
    </div>
  );
}

export default Notes;
