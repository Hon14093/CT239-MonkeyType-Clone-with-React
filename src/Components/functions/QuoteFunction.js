export const checkQuoteClicked = () => {
    const quote = document.getElementById('quote');
    const puncAndNum = document.getElementById('puncAndNum');
    const left = document.getElementById('leftBorder');

    quote.addEventListener('click', () => {
        if (puncAndNum.classList.contains('hidden')) {
            puncAndNum.classList.remove('hidden');
            left.classList.remove('hidden');
        } else {
            puncAndNum.classList.add('hidden');
            left.classList.add('hidden');
        }

        quote.classList.add('text-chaosPink');
    })
}
