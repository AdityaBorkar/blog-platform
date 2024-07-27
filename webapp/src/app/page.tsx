import { redirect } from 'next/navigation'

export default async function LoginPage() {
	const user = null

	if (user) redirect('/dashboard')
	return <div className=''>Login Page</div>
}
