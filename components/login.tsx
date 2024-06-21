'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Profile from '../components/profile';


export default function Login() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className='ps-2 hstack gap-3'>
        <Profile name={user.name!} picture={user.picture!}></Profile> 
        <a className="ps-2 btn btn-outline-secondary" href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a className="ps-2 btn btn-outline-secondary" href="/api/auth/login">Login</a>;
}