export const toggleButton = (clickedButtonId, buttonId) => {
    buttonId.forEach((buttonId) => {
        const button = document.getElementById(buttonId);
        
        if (button) {
            const isClickedButton = buttonId === clickedButtonId;
            button.classList.toggle('text-chaosPink', isClickedButton);
            button.classList.toggle('bg-chaosBG', !isClickedButton);

            if (isClickedButton) {
                let clickedButtonId = buttonId;
                // console.log(clickedButtonId); 
                // output is the amount of words chosen
            }
        }
    })
}
// note: could refractor all modes function like this