"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  //Enter garako task array ma rakhna...
  const [ taskArr, setTask ] = useState([]);
  function addToList() {
    const enteredTask = document.getElementById("taskEnter").value;
    
      setTask(function(temp) {
        const newArr = [...temp, enteredTask];
        return newArr;
      });
  };

  //Clear btn garda sabai task delete garna...
  function clearList() {
    document.getElementById("taskEnter").value = "";
    setTask([]);
  };

  //Delete btn click garda task delete garna...
  function deleteTaskFun(task) {
    const newArr = taskArr.filter(t => t !== task);
    setTask(newArr);
  };

  //Task Dislpay garako...
  function render() {
    return(
      taskArr.map((task, index) => {
        return ( <li key={ task }> { task } <button id="deleteTask" onClick={ () => deleteTaskFun(task) }>Delete</button> </li>)
      })
    )
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <form className="mb-20">
        <input type="text" placeholder="Enter task here..." id="taskEnter" className="w-96 mb-2  border-black border-2 rounded p-5" /> <br />
        <button type="button" onClick={ addToList } id="submitBtn" className="mr-10">ADD</button>
        <button type="button" onClick={ clearList } id="submitBtn">CLEAR</button>
      </form>

      <ol>
        { render() }
      </ol>
    </div>
  );
};
