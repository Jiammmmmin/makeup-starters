export function PreviewRecording(props){
  const stopButton = document.getElementById('stopButton');
	
    stopButton.addEventListener(
        "click",
        () => {
          return(
                  <div class="right">
                    <h2>Recording</h2>
                    <video id="recording" width="160" height="120" controls></video>
                    <a id="downloadButton" class="button"> Download </a>
                  </div>
          );
          
        },
        false
      );

      if(document.getElementById('button').clicked == false){
        return(
          <div class="left">
            <div id="startButton" class="button">Start Recording</div>
            <h2>Preview</h2>
            <video id="preview" width="160" height="120" autoplay muted></video>
            <div id="stopButton" class="button">Stop Testing</div>
        </div>
        
        );
       
        
      

  }
}