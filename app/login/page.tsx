'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { signIn } from "next-auth/react"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
  
    if (res?.ok) {
      router.push("/profile")
    } else {
      alert("Invalid email or password")
    }
  }

  return (
    <form
      className="h-screen w-full bg-zinc-900 flex items-center justify-center text-green-500"
      onSubmit={handleAuth}
    >
      <div className="bg-zinc-800 p-6 rounded-xl shadow-lg w-96">

        <div className="mb-4">
          <label className="block mb-1 text-lg">Email</label>
          <input
            type="email"
            placeholder="Ayush@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-zinc-700 text-white outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-lg">Password</label>
          <input
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-zinc-700 text-white outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-600 rounded-xl text-white font-semibold mt-2"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
          className="w-full py-2 bg-red-600 rounded-xl text-white font-semibold mt-4"
        >
          Continue with Google
        </button>

      </div>
    </form>
  )
}

export default Login
