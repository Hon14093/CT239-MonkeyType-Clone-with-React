import SelectQuoteLength from "../../SelectQuoteLength";
import RenderTextbox from "../RenderTextbox";

const ChoosingMode = ({ mode, quoteLength, language, wordsValue }) => {

    // console.log(mode + " " + quoteLength + " " + language + " " + wordsValue);

    if (mode === 'words') {
        console.log('words');
        return <RenderTextbox language={language} value={wordsValue} />
    } else if (mode === 'quote') {
        return <SelectQuoteLength length={quoteLength} />
    }

}

export default ChoosingMode; 