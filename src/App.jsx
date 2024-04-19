import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showfinished, setshowfinished] = useState(true)
  useEffect(() => {
  let taskstring=localStorage.getItem("tasks")
  if(taskstring){
    let todos = JSON.parse(localStorage.getItem("tasks"))
    setTasks(todos)
  }
  }, [])
  
  const saveToLocal = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTask(value);
  };

  const handleSave = () => {
    if (task.trim().length !== 0) {
      const newTask = { id: uuidv4(), task: task, isCompleted: false };
      setTasks([...tasks, newTask]);
      saveToLocal([...tasks, newTask]);
      setTask("");
    }
  };

  const handleCheckbox = (taskId) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === taskId) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTasks(updatedTasks);
    saveToLocal(updatedTasks);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((item) => item.id !== taskId);
    setTasks(updatedTasks);
    saveToLocal(updatedTasks);
  };

  const handleEdit = (taskId) => {
    const taskToEdit = tasks.find((item) => item.id === taskId);
    setTask(taskToEdit.task);
    const updatedTasks = tasks.filter((item) => item.id !== taskId);
    setTasks(updatedTasks);
    saveToLocal(updatedTasks);
  };
  const handlefinished=()=>{
    setshowfinished(!showfinished)
  }
  return (
    <div>
      <Navbar />
      <div className="container flex justify-center items-center py-3">
      <div className="box h-[85vh] overflow-y-scroll w-1/2 bg-slate-200 rounded-xl" style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}>
          <div className="font-bold px-28 py-1 text-2xl">
            TaskBuddy - Manage Your Tasks At One Place
          </div>
          <div className="font-bold px-2 py-2 text-xl">Add a Todo Task</div>
          <div className="flex justify-center items-center py-2">
            <input
              onChange={handleChange}
              value={task}
              className="w-4/5 outline-none"
              type="text"
            />
            <button
              onClick={handleSave}
              className="border border-purple-600 px-3 rounded-2xl ml-2 text-white bg-purple-700"
            >
              Save
            </button>
          </div>
          <input className=" ml-2" onChange={handlefinished} type="checkbox" checked={showfinished} />Show Finished
          <div className=" w-full h-[2px] bg-white mt-2 "></div>
          <div className=" font-bold text-xl">Your Tasks</div>
          {tasks.map((item) => (
             (showfinished || !item.isCompleted) && <div key={item.id} className="taskscontainer flex justify-between items-center my-2 mx-4">
              <input
                onChange={() => handleCheckbox(item.id)}
                type="checkbox"
                checked={item.isCompleted}
              />
              <div className={item.isCompleted ? "line-through mx-2 w-4/5 font-medium" : "mx-2 w-4/5 font-medium"}>
                {item.task}
              </div>
              <div className="flex">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="border border-purple-600 px-3 rounded-2xl ml-1 text-white bg-purple-700"
                >
                  <BiSolidEdit />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="border border-purple-600 px-2 rounded-2xl ml-1 text-white bg-purple-700"
                >
                 <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
