'use client';

import ZoomMtgEmbedded from '@zoom/meetingsdk/embedded';

export default function Index() {

  const authEndpoint = 'https://zoom-meeting-sdk-fc29c832ca8e.herokuapp.com/';
  const sdkKey = 'zNqY3JSPTH2mQRg1k3yVOA';
  const meetingNumber = '5342405188';
  const passWord = 'FETL77';
  const role = 0;
  const userName = 'User-' + Math.floor(Math.random() * 10000);
  const userEmail = '';
  const registrantToken = '';
  const zakToken = '';
  const client = ZoomMtgEmbedded.createClient();

  const getSignature = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    fetch(authEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role
      })
    }).then(res => res.json())
    .then(response => {
      startMeeting(response.signature);
    }).catch(error => {
      console.error(error);
    });
  }

  const startMeeting = (signature: string) => {
    const meetingSDKElement = document.getElementById('meetingSDKElement');

    if (meetingSDKElement) {
      client.init({
        zoomAppRoot: meetingSDKElement,
        language: 'en-US',
        patchJsMedia: true,
        leaveOnPageUnload: true
      }).then(() => {
        client.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: meetingNumber,
          password: passWord,
          userName: userName,
          userEmail: userEmail,
          tk: registrantToken,
          zak: zakToken
        }).then(() => {
          console.log('joined successfully');
        }).catch((error: any) => {
          console.log(error);
        });
      }).catch((error: any) => {
        console.log(error);
      });
    }
  }

  return (
    <div className="text-center m-3">
      <h1>Welcome!</h1>
      <div id="meetingSDKElement">
          {/* Zoom Meeting SDK Component View Rendered Here */}
      </div>

      <button className='btn btn-primary' onClick={getSignature}>Join Meeting</button>
    </div>
  );
}