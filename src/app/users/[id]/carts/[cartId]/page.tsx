'use client'
import { Cart } from '@/app/types/page'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const { id } = useParams()
    const [cartData, setCartData] = useState<Cart>()

    useEffect(() => {
        async function getCartData() {
            try {
                const responce = await fetch(`https://fakestoreapi.com/carts/${id}`)
                const data: Cart = await responce.json()
                setCartData(data)
            } catch {
                throw new Error("Failed to fetch")
            }
        }

        getCartData()
    }, [id])

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-600 shadow-md rounded-lg p-6">
                <h1 className="text-xl font-semibold mb-4">Cart Information</h1>
                {cartData ? (
                    <ul className="space-y-2">
                        <li key={cartData.id} className="border p-4 rounded bg-gray-600">
                            <p><span className="font-medium">User ID:</span> {cartData.userId}</p>
                            <p><span className="font-medium">Date:</span> {cartData.date}</p>
                        </li>
                    </ul>
                ) : (
                    <p className="text-gray-500">Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Page
