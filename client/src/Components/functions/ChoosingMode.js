import SelectQuoteLength from "../SelectQuoteLength";
import RenderTextbox from "./RenderTextbox";

const ChoosingMode = ({ mode, quoteLength, language, wordsValue }) => {

    console.log('current mode: ' + mode);
    if (mode === 'words') {
        return <RenderTextbox language={language} value={wordsValue} />
    } else if (mode === 'quote') {
        return <SelectQuoteLength length={quoteLength} />
    } else return <RenderTextbox language={language} value={99999} />

}

export default ChoosingMode; 