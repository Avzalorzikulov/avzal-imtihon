import React from 'react'
import { User } from '@/app/interface/page'
import Link from 'next/link'

const Page = async () => {
    const responce = await fetch("https://fakestoreapi.com/users")
    if (!responce.ok) throw new Error("Failed to fetch")
    const users = await responce.json()

    return (
        <div className="min-h-screen p-6">
            <div className="max-w-2xl mx-auto bg-gray-600 rounded shadow p-6">
                <h1 className="text-2xl font-bold mb-4">Users</h1>
                <ul className="space-y-3">
                    {users.map((el: User) => (
                        <li key={el.id} className="border p-4 rounded hover:bg-gray-100 transition">
                            <Link href={`users/${el.id}`}>
                                <p className="text-gray-800 font-medium">User ID: {el.id}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Page
