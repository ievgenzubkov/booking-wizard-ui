'use client';

export default function Profile({name, picture}: {name: string, picture: string}) {    
    return (
        <div className="hstack gap-3">
            <span className="text-secondary align-middle">{name}</span>
            <img src={picture!} alt={name} className="rounded" width={40}/>
        </div>
    );
  }