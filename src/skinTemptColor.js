//import '../SkinTemptColor.html'
import './index.css';
import React, { useRef, useEffect} from 'react';

 

export function SkinTemptColor(props){
    let preview = document.getElementById("preview");
    let recordingTimeMS = 5000;
    let recording = document.getElementById("recording");

    function wait(delayInMS) {
        return new Promise((resolve) => setTimeout(resolve, delayInMS));
      }

    function startRecording(stream, lengthInMS) {
        let recorder = new MediaRecorder(stream);
        let data = [];
      
        recorder.ondataavailable = (event) => data.push(event.data);
        recorder.start();
        console.log(`${recorder.state} for ${lengthInMS / 1000} seconds…`);
      
        let stopped = new Promise((resolve, reject) => {
          recorder.onstop = resolve;
          recorder.onerror = (event) => reject(event.name);
        });
      
        let recorded = wait(lengthInMS).then(() => {
          if (recorder.state === "recording") {
            recorder.stop();
          }
        });
      
        return Promise.all([stopped, recorded]).then(() => data);
      }


    function handleClick(event){
        
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({
                video: true
            })
            
            .then((stream) => {
                preview.srcObject = stream;
                //preview.requestPictureInPicture();


                preview.captureStream =
                preview.captureStream || preview.mozCaptureStream;
                return new Promise((resolve) => (preview.onplaying = resolve));
            })
            .then(() => startRecording(preview.captureStream(), recordingTimeMS))
            .then((recordedChunks) => {
                let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
                recording.src = URL.createObjectURL(recordedBlob);

            console.log(
                `Successfully recorded ${recordedBlob.size} bytes of ${recordedBlob.type} media.`
             );
            })
            .catch((error) => {
                if (error.name === "NotFoundError") {
                    console.log("Camera or microphone not found. Can't record.");
                } else {
                    console.log('error');
            }
            });
           
           
           
              
             
              
              
        }
        
    }

    
    function handleStop(event){
        //let stopButton = document.getElementById("stopButton");
        //preview.srcObject
        if (preview) { 
            //preview.srcObject =… 
            stop(preview.srcObject);
            function stop(stream) {
                stream.getTracks().forEach((track) => track.stop());
            }
        } 
            else {
                ///startRecording(null, null);
            }
    }
    return (
        <div className="main-body">
                
                <p>this function will help you to know your skin Tempterature</p>
                <p>camera required</p>
                <div className="start">
                    <button onClick={handleClick}> start testing</button>
                    <video id="preview" width="160" height="120" autopplay="true"></video>
                </div>
                    
                <div>
                {/* <video 
                ref={videoRef}
                autoPlay
                /> */}
                    {/* <h2>Recording</h2> */}
                    <video id="recording" width="160" height="120" controls></video>
                </div>
                <div className="stop">
                    <button id="stopButton" className="button"onClick={handleStop}>Stop Recording</button>
                 </div>
        </div>
        
    );
}