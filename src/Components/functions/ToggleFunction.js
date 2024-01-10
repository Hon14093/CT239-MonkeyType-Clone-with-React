export const toggleButton = (clickedButtonId, buttonId) => {
    buttonId.forEach((buttonId) => {
        const button = document.getElementById(buttonId);
        
        if (button) {
            const isClickedButton = buttonId === clickedButtonId;
            button.classList.toggle('text-chaosPink', isClickedButton);
            button.classList.toggle('bg-chaosBG', !isClickedButton);

            if (isClickedButton) {
                let length = buttonId.substring(6);
                console.log(length); // output is the amount of words chosen
            }
        }
    })
}
// note: could refractor all modes function like this