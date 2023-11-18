import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
    const { isAuthenticated, logout , user} = useAuth();

    return (
        <nav className=' bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
            <Link to={
                isAuthenticated ? '/tasks' : '/'
            }>
                <h1 className=' text-2xl font-bold '>Task Manager</h1>
            </Link>
            {isAuthenticated ? (
                <>
                    <ul className=' flex gap-x-2'>
                        <li>
                            Welcome {user.username}
                        </li>
                        <li>
                            <Link to='/add-tasks' className=' bg-indigo-500 px-4 py-2'
                            >Add task</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={() =>{
                                logout()
                            }}>Logout</Link>
                        </li>
                    </ul>
                </>

            ) : (
                <>
                    <ul className=' flex gap-x-2'>
                        <li>
                            <Link to='/login' className=' bg-indigo-500 px-4 py-2'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register' className=' bg-indigo-500 px-4 py-2'>Register</Link>
                        </li>
                    </ul>
                </>
            )}

        </nav>
    )
}

export default Navbar