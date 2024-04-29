import SelectQuoteLength from "../SelectQuoteLength";
import SelectRandomMode from "../SelectRandomMode";
import RenderWords from "../RenderWords";

const ChoosingMode = ({ mode, quoteLength, language, wordsValue }) => {

    console.log('current mode: ' + mode);

    switch (mode) {
        case 'words':
            return <RenderWords language={language} value={wordsValue} />
        case 'quote':
            return <SelectQuoteLength length={quoteLength} />
        case 'random':
            return <SelectRandomMode />
        case 'time':
            return <RenderWords language={language} value={99999} />
    }

    // if (mode === 'words') {
    //     return <RenderTextbox language={language} value={wordsValue} />
    // } else if (mode === 'quote') {
    //     return <SelectQuoteLength length={quoteLength} />
    // } else return <RenderTextbox language={language} value={99999} />

}

export default ChoosingMode; 