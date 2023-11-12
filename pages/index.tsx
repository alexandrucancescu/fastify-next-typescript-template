import Head from 'next/head'
import { useEffect, useState } from 'react'
import ky from 'ky-universal'

export default function Home() {
	const [message, setMessage] = useState<string | null>(null)

	useEffect(() => {
		ky.get('/message?name=world')
			.json<{ message: string }>()
			.then((resp) => {
				console.log(resp)
				setMessage(resp.message)
			})
	}, [])

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h3>alexandrucancescu/fastify-next-typescript-template</h3>
				{message && <h4>Server message: {message}</h4>}
				<div>
					<span className="text-amber-500">Test</span>
					<input type="range" className="range range-warning" />
				</div>
			</main>
		</>
	)
}
