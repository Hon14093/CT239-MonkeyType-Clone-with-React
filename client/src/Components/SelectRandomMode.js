// this file handles the text box render for random mode
const SelectRandomMode = () => {
    // abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?!;:'"()[]{}<>+-*/=@#$%^&|_~
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?!;:"()[]{}<>+-*/=@#$%^&|_';

    const random = Math.floor(Math.random() * characters.length);



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
                    <span id="."className="UNIKEY">.</span>
                    <span id="/" className="UNIKEY">/</span>
                </div>

                <div id="row-5">
                    <span id="SPACE">SPACE</span>
                </div>
            </div>
            
        </div>
    )
}

export default SelectRandomMode