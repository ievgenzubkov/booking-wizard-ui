'use client';

export default function Profile({name, picture}: {name: string, picture: string}) {    
    return (
            <div className="card p-3">
                <div className="d-flex align-items-center">
                    <div className="image pe-2"> 
                        <img src={picture!} className="rounded" width="155" />
                    </div>
                    <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0">{name}</h4> <span>User #1</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column"> <span className="articles">Articles</span> <span className="number1">45</span> </div>
                        <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">500890</span> </div>
                        <div className="d-flex flex-column"> <span className="rating">Rating</span> <span className="number3">9.99</span> </div>
                    </div>
                    <div className="button mt-2 d-flex flex-row align-items-center"> 
                        <button className="btn btn-sm btn-outline-primary w-100 me-2">Chat</button> 
                        <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button></div>
                    </div>
                </div>
            </div>
    );
  }