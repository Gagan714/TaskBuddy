import { useState } from "react"
import Navbar from "./components/Navbar"
function App() {
  const [task,setTask] = useState("")
  const [tasks,setTasks]=useState([])
  const handlechange=(e)=>{
    setTask(e.target.value)
  }
  const handleclick=()=>{
    if(task.trim().length!==0){
      setTasks([...tasks,{task}])
      setTask("")
    }
  }
  return (
    <div>
      <Navbar/>
      <div className="container flex justify-center items-center py-3">
        <div className="box h-[85vh] w-1/2 bg-slate-200 rounded-xl">
          <div className="font-bold px-28 py-1 text-2xl">TaskBuddy - Manage Your Tasks At One Place</div>
          <div className="font-bold px-2 py-2 text-xl">Add a Todo Task</div>
          <div className="flex justify-center items-center">
          <input onChange={handlechange} className="w-4/5 outline-none" value={task} type="text" />
            <button onClick={handleclick} className="border border-purple-600 px-3 rounded-2xl ml-2 text-white bg-purple-700">Save</button>
          </div>
          <div className=" w-full h-[2px] bg-white mt-10 "></div>
          <div className=" font-bold text-xl">Your Tasks</div>
          {tasks.map(item=>{
          return <div key={item.id} className="taskscontainer flex justify-between items-center my-2 mx-4">
            <div className="mx-2 w-4/5 font-medium">{item.task}</div>
            <div className="flex">
            <button className="border border-purple-600 px-3 rounded-2xl ml-1 text-white bg-purple-700">Edit</button>
          <button className="border border-purple-600 px-2 rounded-2xl ml-1 text-white bg-purple-700">Delete</button>
            </div>
          </div>
          })}
        </div>
      </div>
    </div>
  )
}
export default App