import React from 'react'
import { useReactMediaRecorder } from "react-media-recorder-2";


const RecordView = () => {

  const { status, startRecording, stopRecording, mediaBlobUrl,} =
    useReactMediaRecorder({  video:true});
    const save= async()=>{
      if(mediaBlobUrl)
      { const ISscreen=false
        const recordedTime = new Date().toLocaleString();
        const videoType = ISscreen ? 'screen' : 'video';
        const response= await fetch("http://localhost:8000/saved",{
          method: "POST",
          headers:{
            "Content-Type":"application/json",
            "authorization":`Bearer ${localStorage.getItem("token")}`
          },
          body:JSON.stringify({mediaBlobUrl,recordedTime,videoType})
        });
        if(response.ok)
        {
          console.log("video saved")
        }
      }
    }
  return (
    <div>
    <p>{status}</p>
    <button onClick={startRecording}>Start Recording</button>
    <button onClick={stopRecording}>Stop Recording</button>
    <button onClick={save}>Save</button>


    <video src={mediaBlobUrl} controls autoPlay loop />
  </div>
);
    
}

export default RecordView