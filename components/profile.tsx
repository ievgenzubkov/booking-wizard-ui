'use client';

export default function Profile({name, picture}: {name: string, picture: string}) {    
    return (
        <div className="col">
            <img src={picture!} className="rounded"/>
            <p>{name}</p>
        </div>
    );
  }