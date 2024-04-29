// this file handles the text box render for random mode
const SelectRandomMode = () => {
    // abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?!;:'"()[]{}<>+-*/=@#$%^&|_~
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?!;:"()[]{}<>+-*/=@#$%^&|_';

    const random = Math.floor(Math.random() * characters.length);

    return (
        <div id='renderLanguage'>
            {/* { renderClickedLength() } */}
            {characters[random]}
        </div>
    )
}

export default SelectRandomMode