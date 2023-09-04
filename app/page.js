"use client";

import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const deleteHandler=(index)=>{
    let copyTask=[...mainTask];
    copyTask.splice(index,1);
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return (
        <li key={index} className="flex item-center justify-between mb-8">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{task.title}</h5>
            <h6 text-lg font-medium>
              {task.desc}
            </h6>
          </div>
          <button onClick={()=>{
            deleteHandler(index)
          }} className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
        </li>
      );
    });
  }

  const submitHandler = (e) => {
    // console.log("Form Submitted");
    e.preventDefault();
    // console.log(title);
    // console.log(desc);
    setMainTask([...mainTask, { title, desc }]);
    console.log(mainTask);
    setTitle("");
    setDesc("");
  };

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        My To-Do List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Add a task"
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Add a description"
        />

        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded">
          Add Task
        </button>
      </form>
      <hr />

      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;


// Created a Add and Delete task to-do app