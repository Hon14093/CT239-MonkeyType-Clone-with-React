
// Quote length: 101 - 300 characters
const quotes = [
    "There are darknesses in life and there are lights, and you are one of the lights, the light of all lights.",
    "I've always loved you, and when you love someone, you love the whole person, just as he or she is, and not as you would like them to be.",
    "Memory is a way of holding onto the things you love, the things you are, the things you never want to lose.",
    "I have waited lifetimes to find you. Now that you're here I can remind you of the things I've been dreaming of times two.",
    "Yeah it's you, you're the one that makes me feel right. I've been in love with her for ages and I can't seem to get it right. I fell in love with her in stages my whole life.",
    "I often think that men don't understand what is noble and what is ignorant, though they always talk about it.",
    "There's no reason a fake can't do what the real thing would. And it's possible for a fake to be more real than the real thing.",
    "How many are there in you? Whose hopes and dreams do you encompass? Could you but see the eyes in your own, the minds in your mind, you would see how much we share." , // Vortigaunt, Half-Life 2
    "You know, being Caroline taught me a valuable lesson. I thought you were my greatest enemy, when all along you were my best friend. The surge of emotion that shot through me when I saved your life taught me an even more valuable lesson - where Caroline lives in my brain.", // GLaDOS, Portal 2
    "People can run from the things they don't like all they want. But if they're just averting their eyes, they're not running. As long as you think the current situation is okay, no one can help.", // Mother Araragi
    "When the world is filled with red lights signaling danger, the world is safer than usual. But when it's filled with green lights signaling safety, it creates a place more dangerous than anywhere.", // Ougi Oshino 
    "The fake is of far greater value. In its deliberate attempt to be real, it’s more real than the real thing." // Kaiki Deshu
]

export default function EnglishMedium() {
    // randomly choose one quote from quote variables
    const random = Math.floor(Math.random() * quotes.length);

    return (
        <div className="h-28">
            { quotes[random] }
        </div>
    )
}