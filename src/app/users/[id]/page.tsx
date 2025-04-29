'use client'
import { User } from '@/app/interface/page'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const { id } = useParams()
    const [users, setUsers] = useState<User>()

    useEffect(() => {
        async function getUserData() {
            try {
                const res = await fetch(`https://fakestoreapi.com/users/${id}`)
                const data = await res.json()
                setUsers(data)
            } catch (err) {
                console.error("Failed to fetch user:", err)
            }
        }
        getUserData()
    }, [id])

    
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="bg-gray-600 rounded shadow p-6 w-full max-w-md">
                {users ? (
                    <ul>
                        <li key={users.id} className="space-y-2">
                            <p className="text-lg font-semibold">
                                {users.name.firstname} {users.name.lastname}
                            </p>
                            <Link
                                href={`/users/${id}/carts`}
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                View Carts
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <p className="text-gray-500 text-center">Loading ...</p>
                )}
            </div>
        </div>
    )
}

export default Page
