import Navbar from "./components/Navbar"
function App() {
  return (
    <div>
      <Navbar/>
      <div className="container flex justify-center items-center py-3">
        <div className="box h-[85vh] w-1/2 bg-slate-200 rounded-xl">
          <div className="font-bold px-28 py-1 text-2xl">TaskBuddy - Manage Your Tasks At One Place</div>
          <div className="font-bold px-2 py-2 text-xl">Add a Todo Task</div>
          <div className="flex justify-center items-center">
          <input className="w-4/5 outline-none" type="text" />
            <button className="border border-purple-600 px-3 rounded-2xl ml-2 text-white bg-purple-700">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App