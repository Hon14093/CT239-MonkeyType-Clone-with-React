import React from 'react';
import EnglishShort from "./quotes/EnglishShort";
import EnglishMedium from "./quotes/EnglishMedium";

const SelectQuoteLength = ({ length }) => {

    const renderClickedLength = () => {
        switch (length) {
            case 'short':
                return <EnglishShort />;
            case 'medium':
                return <EnglishMedium />;
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