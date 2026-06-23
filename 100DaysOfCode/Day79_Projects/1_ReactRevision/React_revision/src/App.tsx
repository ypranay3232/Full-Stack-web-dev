// // creating an component : We can create this way 
// function App(){}
// or 

import { useState } from "react";
const Card = ({ title }: { title: string }) => { //because i installed TS i have to declare its type
  // const Card = ({title}) => { //otherwise this would be enough 
  const [HasLiked, SetLiked] = useState(false)
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-violet-500/5 flex flex-col justify-between h-48 w-full">
      <div className="absolute top-0 left-0 w-full h-0.75 bg-linear-to-r from-violet-500 to-indigo-500" />
      
      <div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-violet-400">Revision Poster</span>
        <h2 className="text-xl font-bold text-slate-100 mt-2 tracking-tight group-hover:text-white transition-colors duration-200">{title}</h2>
      </div>

      <button 
        onClick={() => SetLiked(!HasLiked)}
        className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 self-start cursor-pointer ${
          HasLiked 
            ? "bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 shadow-[0_0_15px_-3px_rgba(244,63,94,0.4)]" 
            : "bg-slate-800/40 text-slate-300 border border-slate-700/80 hover:bg-slate-800 hover:text-slate-100 hover:border-slate-600"
        }`}
      >
        <span className={`transition-transform duration-200 ${HasLiked ? "scale-125 animate-pulse" : "group-hover:scale-110"}`}>
          {HasLiked ? "❤️ Liked" : "🤍 Like"}
        </span>
      </button>
    </div>
  )
}

// understanding props : each component display an poster: so we can go into that specific component where we want to send data and we add as : ex: <Card title="titanic" /> here title is a prop but before doing that we have to add that prop to the Component itself.


// state : A state holds info about a component which changes overtime. so ex
//  if we want to check if someone has liked a song we can use a var and pass it as props.
// But react wont know if something has changed or not and it wont update dom accordingly. so we use usestate()

// let HasLiked = true;

const App = () => {


  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-start p-6 md:p-12 relative overflow-hidden selection:bg-violet-500 selection:text-white">
      {/* Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-125 h-125 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-5xl z-10">
        <header className="border-b border-slate-900 pb-8 mb-10 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 text-[10px] font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full">Day 79</span>
            <span className="text-[10px] font-semibold text-slate-500">•</span>
            <span className="text-[10px] font-semibold text-slate-400">React Core Concepts</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Functional Arrow component
          </h2>

          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            we can render as many components as possible
          </p>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <Card title="Titanic" hasliked={HasLiked}/> */}
          <Card title="Titanic" />
          <Card title="Taxi driver" />
          <Card title="Avatar" />
        </main>

        <footer className="mt-20 pt-6 border-t border-slate-900/60 text-center">
          <p className="text-xs text-slate-600 font-medium">
            Interactive Playground • State, Props, and Tailwind CSS v4 Revision
          </p>
        </footer>
      </div>
    </div>
  )
};


export default App
