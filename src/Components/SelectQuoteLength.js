import React, { useState } from 'react';
import EnglishShort from "./quotes/EnglishShort";
import EnglishMedium from "./quotes/EnglishMedium";

const SelectQuoteLength = ({ value }) => {

    const renderClickedLength = (value) => {
        switch (value) {
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

        </div>
    )
}

export default SelectQuoteLength;