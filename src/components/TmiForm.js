import { useState } from "react";
function TmiForm() {
    const [channel, setChannel] = useState('');
    const [onBan, setOnBan] = useState('replace');
    const [onTimeout, setOnTimeout] = useState('replace');
    const [channelError, setChannelError] = useState(false);
    
    const changeChannel = (event) => {
        setChannel(event.target.value);
    }
    const changeBanMethod = (event) => {
        setOnBan(event.target.value)
    }
    const changeTimeoutMethod = (event) => {
        setOnTimeout(event.target.value)
    }
    function submitForm(e) {
        e.preventDefault();
        if(channel === '') {
            setChannelError(true)
        }
        console.log(channelError)
        console.log(`Channel is ${channel}`);
        console.log(`Ban is ${onBan}`);
        console.log(`Timeout is ${onTimeout}`);
    }
    return(
        <form onSubmit={submitForm}>
            <div>
                <h4>Select the channel</h4>
                <label htmlFor="channel">Type the name of the channel</label>
                <input type="text" name="channel" id="channel" value={channel} onChange={changeChannel}></input>
                {channelError === true &&
                   <div className="error">Channel name is required</div>
                }
            </div>
            <div>
                <h4>ban events</h4>
                <h5>What to do with messages</h5>
                <label htmlFor="ban_replace">Replace</label>
                <input type="radio" id="ban_replace" name="banevents" value="replace" onChange={changeBanMethod} checked={onBan === 'replace'}></input>                
                <label htmlFor="ban_delete">Delete</label>
                <input type="radio" id="ban_delete" name="banevents" value="delete" onChange={changeBanMethod}></input>
            </div>
            <div>
                <h4>timeout events</h4>
                <h5>What to do with messages</h5>
                <label htmlFor="timeout_replace">Replace</label>
                <input type="radio" id="timeout_replace" name="timeoutevents" value="replace" onChange={changeTimeoutMethod} checked={onTimeout === 'replace'}></input>                
                <label htmlFor="timeout_delete">Delete</label>
                <input type="radio" id="timeout_delete" name="timeoutevents" value="delete" onChange={changeTimeoutMethod}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
export default TmiForm;


