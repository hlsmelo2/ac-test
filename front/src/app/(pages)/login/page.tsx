'use client'

import { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
    const [username, setUsername] = useState<string>('user-1');
    const [password, setPassword] = useState<string>('pass-1');
    const [flashMessage, setMessages] = useState<Record<string, string>>({ login: '' });

    const router = useRouter();

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        event.stopPropagation();

        const logged: any = await signIn('credentials', {
            username,
            password,
            redirect: false,
        });

        console.log({flashMessage, logged});
        if (logged?.error) {
            setMessages({ login: logged.error });

            return;
        }

        router.replace('/transfers');
    }

    return (
        <div>
            { flashMessage.login && <div className="alert danger">{flashMessage.login}</div> }
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
