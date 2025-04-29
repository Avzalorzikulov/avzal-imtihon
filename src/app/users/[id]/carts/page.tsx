'use client'
import { Cart } from '@/app/interface/page'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<Cart[]>([])

    useEffect(() => {
        async function getCartData() {
            setLoading(true)
            try {
                const res = await fetch("https://fakestoreapi.com/carts")
                if (!res.ok) throw new Error("Failed to fetch")
                const getData = await res.json()
                setData(getData)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        getCartData()
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {loading ? (
                <div className="text-center text-gray-500">Loading...</div>
            ) : (
                <ul className="space-y-4 max-w-3xl mx-auto">
                    {data.map(cart => (
                        <li key={cart.id} className="bg-gray-600 shadow-sm p-4 rounded border hover:shadow-md transition">
                            <Link href={`/users/${cart.userId}/carts/${cart.id}`} className="block">
                                <p className="text-lg font-semibold">Cart ID: {cart.id}</p>
                                <p className="text-gray-700">User ID: {cart.userId}</p>
                                <p className="text-gray-500 text-sm">Date: {cart.date}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Page
