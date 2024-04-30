// this file handles the text box render for random mode
import { handleKeyboardInput } from "./InputField_Random";
import { useRef, useEffect } from "react";

const SelectRandomMode = () => {
    const inputRef = useRef(null);
    window.key = 0;

    useEffect(() => {
        const handleClick = (event) => {
            if (document.activeElement !== inputRef.current && !event.target.closest('select') && inputRef.current) {
                inputRef.current.focus();
            }
        }
        
        inputRef.current.focus();
        document.addEventListener('click', handleClick);

        randomizer();

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    function randomizer() {
        const characters = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3',
            '4', '5', '6', '7', '8', '9', ',', '.', ';', '[',
            ']', '/', 'SPACE'
        ]; 
    
        const random = Math.floor(Math.random() * characters.length);
        window.key = characters[random].toLowerCase();
        console.log('random: ' + characters[random]);

        const randomDiv = document.getElementById(characters[random]);
        console.log('random div: ' + randomDiv.innerHTML);

        if (randomDiv) {
            randomDiv.classList.add('bg-chaosPink');
        }
    }

    return (
        <div id='renderLanguage'>
            <div className="keyboard flex flex-col gap-2 items-center">
                <div id="row-1" className="flex gap-4">
                    <span id="1" className="UNIKEY">1</span>
                    <span id="2" className="UNIKEY">2</span>
                    <span id="3" className="UNIKEY">3</span>
                    <span id="4" className="UNIKEY">4</span>
                    <span id="5" className="UNIKEY">5</span>
                    <span id="6" className="UNIKEY">6</span>
                    <span id="7" className="UNIKEY">7</span>
                    <span id="8" className="UNIKEY">8</span>
                    <span id="9" className="UNIKEY">9</span>
                    <span id="0" className="UNIKEY">0</span>
                </div>

                <div id="row-2" className="flex gap-4">
                    <span id="Q" className="UNIKEY">Q</span>
                    <span id="W" className="UNIKEY">W</span>
                    <span id="E" className="UNIKEY">E</span>
                    <span id="R" className="UNIKEY">R</span>
                    <span id="T" className="UNIKEY">T</span>
                    <span id="Y" className="UNIKEY">Y</span>
                    <span id="U" className="UNIKEY">U</span>
                    <span id="I" className="UNIKEY">I</span>
                    <span id="O" className="UNIKEY">O</span>
                    <span id="P" className="UNIKEY">P</span>
                    <span id="[" className="UNIKEY">[</span>
                    <span id="]" className="UNIKEY">]</span>
                </div>

                <div id="row-3" className="flex gap-4">
                    <span id="A" className="UNIKEY">A</span>
                    <span id="S" className="UNIKEY">S</span>
                    <span id="D" className="UNIKEY">D</span>
                    <span id="F" className="UNIKEY">F</span>
                    <span id="G" className="UNIKEY">G</span>
                    <span id="H" className="UNIKEY">H</span>
                    <span id="J" className="UNIKEY">J</span>
                    <span id="K" className="UNIKEY">K</span>
                    <span id="L" className="UNIKEY">L</span>
                    <span id=";" className="UNIKEY">;</span>
                    <span id="'" className="UNIKEY">'</span>
                </div>

                <div id="row-4" className="flex gap-4">
                    <span id="Z" className="UNIKEY">Z</span>
                    <span id="X" className="UNIKEY">X</span>
                    <span id="C" className="UNIKEY">C</span>
                    <span id="V" className="UNIKEY">V</span>
                    <span id="B" className="UNIKEY">B</span>
                    <span id="N" className="UNIKEY">N</span>
                    <span id="M" className="UNIKEY">M</span>
                    <span id="," className="UNIKEY">,</span>
                    <span id="." className="UNIKEY">.</span>
                    <span id="/" className="UNIKEY">/</span>
                </div>

                <div id="row-5">
                    <span id="SPACE">SPACE</span>
                </div>
            </div>

            <div className="flex gap-10 justify-center mt-6 text-chaosPink">
                <div className="flex">
                    <p className="mr-3">acc:</p>
                    <p id="accRandom" className="">100.00%</p>
                </div>

                <div className="flex">
                    <p id="correctCount">0</p>
                    /
                    <p id="incorrectCount">0</p>
                </div>
            </div>
            
            <input
                id='inputField'
                ref={inputRef}
                type="text"
                className="opacity-0 absolute top-0 left-0 w-0 h-0 p-0 m-0 overflow-hidden focus:outline-none time"
                onKeyDown={(event) => {
                    handleKeyboardInput(event);
                }}
            />
        </div>
        
    )
}

export default SelectRandomMode