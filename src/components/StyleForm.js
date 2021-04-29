import { useState } from 'react';
import StylePicker from './StylePicker';


function StyleForm() {
    const [chosenStyle, setChosenStyle] = useState('default');
    const styles = ['default', 'black', 'white', 'finalfantasy'];


    return(
        <section className="style-picker">
            <h1>Select your style</h1>

            {styles.map((string) =>
                <StylePicker key={string} design={string} className={"style-picker-elem " + string} channel="toto" />

            )}
        </section>
    );

}



export default StyleForm;
