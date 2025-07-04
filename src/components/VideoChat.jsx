// import React, { useEffect, useRef, useState } from 'react';
// import Peer from 'simple-peer';

// function VideoChat({ role }) {
//   const localVideoRef = useRef();
//   const remoteVideoRef = useRef();
//   const [peer, setPeer] = useState(null);
//   const [stream, setStream] = useState(null);
//   const [initiator, setInitiator] = useState(role === 'Interviewer');

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
//       localVideoRef.current.srcObject = stream;
//       setStream(stream);
//     });
//   }, []);

//   useEffect(() => {
//     if (!stream) return;

//     const p = new Peer({ initiator, trickle: false, stream });

//     p.on('signal', (data) => {
//       localStorage.setItem('signal', JSON.stringify(data));
//     });

//     p.on('stream', (remoteStream) => {
//       remoteVideoRef.current.srcObject = remoteStream;
//     });

//     setPeer(p);
//   }, [stream]);

//   const connect = () => {
//     const remoteSignal = JSON.parse(localStorage.getItem('signal'));
//     if (remoteSignal && peer) {
//       peer.signal(remoteSignal);
//     }
//   };

//   return (
//     <div className="my-4">
//       <h3 className="text-md font-bold mb-1">Video Chat</h3>
//       <div className="flex gap-4">
//         <video ref={localVideoRef} autoPlay playsInline muted className="w-1/2 rounded border" />
//         <video ref={remoteVideoRef} autoPlay playsInline className="w-1/2 rounded border" />
//       </div>
//       <button
//         onClick={connect}
//         className="mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
//       >
//         Connect Video
//       </button>
//     </div>
//   );
// }

// export default VideoChat;
