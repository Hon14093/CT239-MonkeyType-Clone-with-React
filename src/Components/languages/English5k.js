import { SelectedWords } from '../functions/SelectedWords';

const words = [
    "a", "abandon", "ability", "able", "abolish", "abortion", "about", "above", "abroad", "absence", "absent", "absolute", "absolutely", "absorb", "abstract", "absurd", "abundance", "abuse", "academic", "academy", "accelerate", "accent", "accept", "acceptable", "acceptance", "access", "accessible", "accident", "accidentally", "accommodate", "accommodation", "accompany", "accomplish", "accomplishment", "accordance", "according to", "accordingly", "account", "accountability", "accountable", "accountant", "accounting", "accumulate", "accumulation", "accuracy", "accurate", "accurately", "accusation", "accuse", "accused", "achieve", "achievement", "acid", "acknowledge", "additional", "additionally", "address", "adequate", "adequately", "adhere", "adjacent", "adjust", "adjustment", "administer", "administration", "administrative", "administrator", "admire", "admission", "admit", "adolescent", "adopt", "adoption", "adult", "advance", "advanced", "advantage", "adventure", "adverse", "advertise", "advertisement", "advertising", "advice", "advise", "advocate", "esthetic", "affair", "affect", "affection", "afford", "affordable", "afraid", "after", "aftermath", "afternoon", "afterwards", "again", "against", "age", "aged", "agency", "agenda", "agent", "aggression", "aggressive", "ago", "agree", "agreement", "agricultural", "agriculture", "ah", "ahead", "aid", "aide", "AIDS", "aim", "air", "aircraft", "airline", "airport", "alarm", "albeit", "album", "alcohol", "alcoholic", "alert", "alien", "align", "alignment", "alike", "alive", "all", "all right", "allegation", "allege", "allegedly", "alliance", "allocate", "allocation", "allow", "allowance", "ally", "almost", "alone", "along", "alongside", "already", "also", "alter", "alternative", "although", "altogether", "aluminum", "always", "amateur", "amazed", "amazing", "ambassador", "ambition", "ambitious", "ambulance", "amend", "amendment", "amid", "among", "amount", "amusing", "analogy", "analyze", "analysis", "analyst", "ancestor", "anchor", "ancient", "and", "angel", "anger", "angle", "angrily", "angry", "animal", "animation", "ankle", "anniversary", "announce", "announcement", "annoy", "annoyed", "annoying", "annual", "annually", "anonymous", "another", "answer", "anticipate", "anxiety", "anxious", "any", "any more", "anybody", "anyone", "anything", "anyway", "anywhere", "apart", "apartment", "apologize", "apology", "app", "apparatus", "apparent", "apparently", "appeal", "appealing", "appear", "appearance", "appetite", "applaud", "apple", "applicable", "applicant", "application", "apply", "appoint", "appointment", "appreciate", "appreciation", "approach", "appropriate", "appropriately", "approval", "approve", "approximately", "arrange", "arrangement", "array", "arrest", "arrival", "arrive", "arrow", "art", "article", "articulate", "artificial", "artist", "artistic", "artwork", "as", "ash", "ashamed", "aside", "ask", "asleep", "aspect", "aspiration", "aspire", "assassination", "assault", "assemble", "assembly", "assert", "assertion", "assess", "assessment", "asset", "assign", "assignment", "assist", "assistance", "assistant", "associate", "greenhouse", "greet", "grid", "grin", "group", "growth", "guerilla", "phase", "piano", "piece", "pilot", "portrait", "possibility", "vitamin", "vibrant", "warrant", "workplace", "worried", "yourself", "zero", "license", "practice", "household", "hostage", "helicoptery", "helmet", "herb", "hence", "hers", "hierarchy", "highlight", "hilarious", "globe", "globalization", "golf", "frustrated", "frozen", "friendship", "fridge", "friendship", "fruit", "fortunate", "founder", "flounder", "fortune", "footage", "finance", "festival", "fantastic", "extremist", "extraordinary", "extensive", "exposure", "experimental", "expertise", "execution", "exert", "exhibiton", "excessive", "exclude", "excitement", "examine", "exhaustive", "estimate", "establish", "equipment", "epidemic", "entitle", "envelope", "entreprneur", "enthusiastic", "enquire", "ensure", "ensue", "enrich", "enormous", "endure", "endorsement", "encounter", "ecological", "downwards", "dozen", "draft", "drawing", "dominance", "divergence", "donation", "doctor", "do", "documentation", "dog", "dollar", "distort", "dive", "disturbing", "divert", "dishonest", "discharge", "direct", "descent", "depiction", "deny", "dense", "define", "date", "cut", "curve", "cycle", "cute", "curtain", "create", "creator", "cream", "thicc", "creature", "confirm", "configuration", "cop", "cope", "coordination", "cool", "cooking", "master", "convincing", "contribution", "contemplate", "container", "contend", "contest", "context", "consist", "conspiracy", "constitutions", "constraint", "constrained", "conquer", "convert", "conservative", "consideration", "consequence", "connection", "conflict", "confirmation", "concept", "company", "cold", "comedy", "choir", "chronic", "charter", "central", "carriage", "cartoon", "anime", "business", "building", "burn", "burst", "breathing", "boil", "boolean", "boast", "black", "betray", "belong", "behave", "beautiful", "bear", "bean", "based", "baseball", "avoid", "await", "average", "autumn", "authority", "audit", "audience", "stroke", "strongly", "studio", "stun", "style", "substitute", "supper", "super", "subtle", "such"
]

export default function English5k({ value }) {
    const selectedWords = SelectedWords(words, value);

    return (
        <div className='flex flex-wrap relative' id='words'>
        {selectedWords.map((word, wordIndex) => (
            <div key={wordIndex} className={`mr-2 word ${wordIndex === 0 ? 'active' : ''}`}>
                {word.split('').map((letter, letterIndex) => (
                    <span key={letterIndex} className={`letter ${wordIndex === 0 && letterIndex === 0 ? 'current' : ''}`}>{letter}</span>
                ))}
            </div>
        ))}
        </div>
    )
}