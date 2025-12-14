'use client'

import React, { useState } from 'react'
import axios from "axios"
import { useSession } from "next-auth/react"

const Edit = () => {
  const { update } = useSession();
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.put("/api/auth/edit", {
        name,
        image,
      })

      await update();

      alert("Profile updated successfully")
    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    }
  }

  return (
    <form 
      className="h-screen w-full bg-zinc-900 flex items-center justify-center text-green-500"
      onSubmit={handleAuth}
    >
      <div className="bg-zinc-800 p-6 rounded-xl shadow-lg w-96">

        <div className="mb-4">
          <label className="block mb-1 text-lg">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-zinc-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-lg">Image URL</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 rounded bg-zinc-700 text-white"
          />
        </div>

        <button className="w-full py-2 bg-green-600 rounded-xl text-white">
          Update
        </button>
      </div>
    </form>
  )
}

export default Edit
