import React from 'react';
import EnglishShort from "./quotes/EnglishShort";
import EnglishMedium from "./quotes/EnglishMedium";
import EnglishLong from "./quotes/EnglishLong";
import EnglishExtended from './quotes/EnglishExtended';

const SelectQuoteLength = ({ length }) => {

    const renderClickedLength = () => {
        switch (length) {
            case 'short':
                return <EnglishShort />;
            case 'medium':
                return <EnglishMedium />;
            case 'long':
                return <EnglishLong />;
            case 'extended':
                return <EnglishExtended />;
            default:
                return <EnglishShort />;
        }
    }

    return (
        <div id='quote'>
            { renderClickedLength() }
        </div>
    )
}

export default SelectQuoteLength;