"use client"
import React from "react"


const getUsers = () => {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem("users") || "[]")
}
 
const saveUsers = (users) => {
  if (typeof window === "undefined") return
  localStorage.setItem("users", JSON.stringify(users))
}
 
const getCurrentUser = () => {
  if (typeof window === "undefined") return null
  return JSON.parse(localStorage.getItem("currentUser") || "null")
}
 
const saveCurrentUser = (user) => {
  if (typeof window === "undefined") return
  localStorage.setItem("currentUser", JSON.stringify(user))
}
 
const clearCurrentUser = () => {
  if (typeof window === "undefined") return
  localStorage.removeItem("currentUser")
}

const App = () => {

  const [state, setState] = React.useState(() => {
    return getCurrentUser() ? "dashboard" : "login"
  })

  const [formData, setFormData] = React.useState({
    name: '', email: '', password: ''
  })

  const [error, setError] = React.useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (state === "register") {
      const users = getUsers()
      if (users.find(u => u.email === formData.email)) {
        setError("Email already registered"); return
      }
      saveUsers([...users, formData])
      setState("login")

    } else {
      const users = getUsers()
      const user = users.find(
        u => u.email === formData.email && u.password === formData.password
      )
      if (!user) { setError("Wrong email or password"); return }
      saveCurrentUser({ name: user.name, email: user.email })
      setState("dashboard")
      window.location.reload()
    }
  }

  const handleLogout = () => {
    clearCurrentUser()
    setState("login")
  }

  if (state === "dashboard") {
    return <Dashboard onLogout={handleLogout} />
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-87.5 bg-purple/6 border border-purple/10 rounded-2xl px-8">
        <h1 className="text-black text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-gray-400 text-sm mt-2">Please sign in to continue</p>

        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-purple/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
            <input type="text" name="name" placeholder="Name" className="w-full bg-transparent text-purple placeholder-black/60 border-none outline-none" value={formData.name} onChange={handleChange} required />
          </div>
        )}

        <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-purple/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
          <input type="email" name="email" placeholder="Email id" className="w-full bg-transparent text-black placeholder-black/60 border-none outline-none" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="flex items-center mt-4 w-full bg-white/5 ring-2 ring-purple/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          <input type="password" name="password" placeholder="Password" className="w-full bg-transparent text-black placeholder-black/60 border-none outline-none" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="mt-4 text-left">
          <button className="text-sm text-indigo-400 hover:underline">
            Forget password?
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition">
          {state === "login" ? "Login" : "Sign up"}
        </button>

        <p onClick={() => setState(prev => prev === "login" ? "register" : "login")}
          className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer">
          {state === "login" ? "Don't have an account?" : "Already have an account?"}
          <span className="text-indigo-400 hover:underline ml-1">click here</span>
        </p>
      </form>


      <div className='fixed inset-0 -z-1 pointer-events-none'>
        <div className='absolute left-1/2 top-20 -translate-x-1/2 w-245 h-115 bg-linear-to-tr from-indigo-800/35 to-transparent rounded-full blur-3xl' />
        <div className='absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-indigo-700/35 to-transparent rounded-full blur-2xl' />
      </div>
    </>
  )
}

const Dashboard = ({ onLogout }) => {
  const user = getCurrentUser()
  return (
    <div className="text-center">
      <h1 className="text-3xl font-medium mt-10">Welcome, {user.name}!</h1>
      <p className="text-gray-400 mt-2">{user.email}</p>
      <button onClick={onLogout}
        className="mt-6 px-6 h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition">
        Logout
      </button>
    </div>
  )
}


export default function LoginPage() {
  return (
    <main className="m-10 flex items-center justify-center">
      <App />
    </main>
  )
}