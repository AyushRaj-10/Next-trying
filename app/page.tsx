'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 bg-zinc-800">
      
      <button
        onClick={() => router.push('/login')}
        className="px-6 py-2 bg-blue-600 text-white rounded"
      >
        Login
      </button>

      <button
        onClick={() => router.push('/register')}
        className="px-6 py-2 bg-green-600 text-white rounded"
      >
        Register
      </button>

    </div>
  )
}

export default page
