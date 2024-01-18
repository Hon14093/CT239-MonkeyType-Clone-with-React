import React from 'react';
import EnglishShort from "./quotes/EnglishShort";
import EnglishMedium from "./quotes/EnglishMedium";
import EnglishLong from "./quotes/EnglishLong";

const SelectQuoteLength = ({ length }) => {

    const renderClickedLength = () => {
        switch (length) {
            case 'short':
                return <EnglishShort />;
            case 'medium':
                return <EnglishMedium />;
            case 'long':
                return <EnglishLong />;
            default:
                return <EnglishShort />;
        }
    }

    return (
        <div>
            { renderClickedLength() }
        </div>
    )
}

export default SelectQuoteLength;