'use client'
import Axios from "axios-observable";
import { SyntheticEvent, useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState<string>('user-10');
    const [password, setPassword] = useState<string>('pass-10');

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        event.stopPropagation();

        const created = Axios.post('http://localhost:3001/users', {
            params: {
                username,
                password,
            },
        }).subscribe({
            next(user) {
                console.log(user);
            },
            error(error) {
                console.log(error);
            },
        });
    }

    return (
        <div>
            {/* { flashMessage.login && <div className="alert danger">{flashMessage.login}</div> } */}
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
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}