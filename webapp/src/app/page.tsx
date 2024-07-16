import { redirect } from 'next/navigation'

// This must be server-rendered page
export default async function LoginPage() {
	const user = null

	if (user) redirect('/dashboard')
	return <div className=''>Login Page</div>
}
