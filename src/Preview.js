export function Preview(props){
    return(

        <div class="left">
            <div id="startButton" class="button">Start Recording</div>
            <h2>Preview</h2>
            <video id="preview" width="160" height="120" autoplay muted></video>
            <div id="stopButton" class="button">Stop Testing</div>
        </div>
    );
}