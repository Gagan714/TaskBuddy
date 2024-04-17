import Navbar from "./components/Navbar"
function App() {
  return (
    <div>
      <Navbar/>
      <div className="container flex justify-center items-center py-3">
        <div className="box h-[85vh] w-1/2 bg-slate-300 rounded-xl">
          <div className="font-bold px-28 py-1 text-2xl">TaskBuddy - Manage Your Tasks At One Place</div>
          <div className="font-bold px-2 py-1 text-xl">Add a Todo Task</div>
        </div>
      </div>
    </div>
  )
}
export default App