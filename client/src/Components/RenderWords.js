import React from 'react';
import English from './languages/English';
import English1k from './languages/English1k';
import English5k from './languages/English5k';
import English10k from './languages/English10k';

const RenderWords = ({ language, value }) => {

    const renderSelectedComponent = () => {
        switch (language) {
            case 'english':
                return <English value={value} />
            case 'english1k':
                return <English1k value={value} />
            case 'english5k':
                return <English5k value={value} />
            case 'english10k':
                return <English10k value={value} />
            default:
                return <English value={value} />
        }
    }

    return (
        <div className='h-28' id='renderLanguage'>
            { renderSelectedComponent() }
        </div>
    );
};

export default RenderWords;
