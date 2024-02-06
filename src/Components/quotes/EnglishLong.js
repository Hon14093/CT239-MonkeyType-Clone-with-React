
// Quote length: 301 - 600 characters
const quotes = [
    "I deserve it all. Let the cold world do its worst; one thing I know - there's a grave somewhere for me. The world may go on just as it's always done, and take everything from me - loved ones, property, everything - but it can't take that. Some day I'll lie down in it and forget it all, and my poor broken heart will be at rest.",
    "Never before had I known the sudden quiver of understanding that travels from word to brain to heart, the way a new language can move, coil, swim into life under the eyes, the almost savage leap of comprehension, the instantaneous, joyful release of meaning, the way the words shed their printed bodies in a flash of heat and light.",
    "This is your last chance. After this there is no turning back. You take the blue pill: the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill: you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember, all I'm offering is the truth, nothing more.",
    "Do you know, this morning, I was on a train that went through a city that wouldn't exist if it wasn't for you. I bought a ticket from a man who would likely be dead if it wasn't for you. I read up on my work, a whole field of scientific inquiry that only exists because of you. Now, if you wish you could have been normal, I can promise you, I do not. The world is an infinitely better place precisely because you weren't. Do you... Do you really think that? I think that sometimes it is the people who no one imagines anything of who do the things that no one can imagine.",
    "It was one of those rare and beautiful days in winter when England remembers that there is a sun. The star of the day, pale but nevertheless still splendid, was setting in the horizon, glorifying at one the heavens and the sea with bands of fire, and casting upon the tower and the old houses of the city a last ray of gold which made the windows sparkle like the reflection of a conflagration.",
    "Beautiful means 'full of beauty.' Beautiful is not about how you look on the outside, beautiful is about what you're made of. Beautiful people spend time discovering what their idea of beauty on this earth is. They know themselves well enough to know what they love, and they love themselves enough to fill up with a little of their particular kind of beauty each day.",
    "Every time it rains, it rains pennies from heaven. Don't you know each cloud contains pennies from heaven? You'll find your fortune fallin' all over town. Be sure that your umbrella is upside down. Trade them for a package of sunshine and flowers. If you want the things you love, you must have showers. So when you hear it thunder, don't run under a tree. There'll be pennies from heaven for you and me.",
    "Tom put the Ring round the end of his little finger and held it up to the candlelight. For a moment the hobbits noticed nothing strange about this. Then they gasped. There was no sign of Tom disappearing! Tom laughed again, and then he spun the Ring in the air - and it vanished with a flash. Frodo gave a cry - and Tom leaned forward and handed it back to him with a smile.",
    "Says who? Just so you know, the people who talk that way think that monkeys can do this. They take all this monkey crap and stick it in a briefcase, completely unaware that their success depends on something more than shoeshine. You are the product. You feeling something, that's what sells. Not them. They can't do what we do and they hate us for it.",
    "We can't define consciousness because consciousness does not exist. Humans fancy that there's something special about the way we perceive the world, and yet we live in loops as tight and as closed as the hosts do, seldom questioning our choices, content, for the most part, to be told what to do next.",
    "The evolution of language marked a great leap forward for our species. It boosted our cognitive abilities by webbing us together into larger, more powerful group minds. I believe that another quantum step in human cognition awaits us on the other side of direct linkage of our brains and minds to one another."
]

export default function EnglishLong() {
    // randomly choose one quote from quote variables
    const random = Math.floor(Math.random() * quotes.length);
    const sentence = quotes[random];
    const wordsArray = sentence.split(/\s+/); // split a string into words

    return (

        <div className='flex flex-wrap h-28 relative' id='words'>
            {wordsArray.map((word, wordIndex) => (
                <div key={wordIndex} className={`mr-2 word ${wordIndex === 0 ? 'active' : ''}`}>
                    {word.split('').map((letter, letterIndex) => (
                        <span key={letterIndex} className={`letter ${wordIndex === 0 && letterIndex === 0 ? 'current' : ''}`}>{letter}</span>
                    ))}
                </div>
            ))}
        </div>
    )
}