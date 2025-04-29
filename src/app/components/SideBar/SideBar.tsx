import Link from 'next/link'
import React from 'react'

const Sitebar = () => {
  return (
    <div className="h-screen w-36 bg-green-500 flex items-center justify-center">
      <Link href="/users" className="text-white font-semibold hover:underline">
        Users
      </Link>
    </div>
  )
}

export default Sitebar
