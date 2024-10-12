'use client'

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import TransfersComponent from '@/app/(components)/TransfersComponent';

export default function LoginPage() {
  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (response.ok) {
      router.push('/profile')
    } else {
      // Handle errors
    }
  }

  const balance = 150.00;

  const transfers = [1,2,3,4,5,6,7,8,9].map(
    item => ({ transactionId: item, sender: item, receiver: item, amount: item, return: Math.round((Math.random() * 1)) })
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>

      <TransfersComponent transfers={ transfers } balance={ balance }></TransfersComponent>
    </form>
  )
}
