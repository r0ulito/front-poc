import '../chatbox.css';
function StylePicker(props) {

    function selectStyle(style) {
        console.log(style);
    }
    


    return(
        <div className={props.className} onClick={() =>selectStyle(props.design)}>
            <span style={{color: "salmon"}}>{props.channel}</span>
            <div>lorem ipsum devic sin alec jeto malea corpus</div>
        </div>
    );
}



export default StylePicker;