'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Profile from '../components/profile';


export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className='ps-2'>
        Welcome {user.name}!  
        <a className="ps-2" href="/api/auth/logout">Logout</a>
        <Profile name={user.name!} picture={user.picture!}></Profile> 
      </div>
    );
  }

  return <a className="ps-2" href="/api/auth/login">Login</a>;
}