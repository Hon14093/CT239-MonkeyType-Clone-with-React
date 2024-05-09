import { SelectedWords } from '../functions/SelectedWords';
import { reset } from '../functions/Reset';

const words = [
    "the", "of", "and", "a", "in", "for", "is", "on", "that", "by", "this", "with", "I", "you", "it", "not", "or", "be", "are", "from", "at", "as", "your", "all", "have", "new", "more", "an", "was", "we", "will", "home", "can", "about", "if", "page", "has", "search", "free", "but", "our", "one", "other", "do", "no", "information", "time", "they", "site", "he", "up", "may", "what", "which", "their", "news", "out", "use", "any", "there", "see", "only", "so", "his", "when", "contact", "here", "business", "who", "web", "also", "now", "help", "get", "view", "online", "first", "am", "been", "would", "how", "were", "me", "services", "some", "these", "click", "its", "like", "service", "than", "find", "price", "date", "back", "top", "people", "had", "list", "name", "just", "over", "state", "year", "day", "into", "email", "two", "health", "world", "next", "used", "go", "work", "last", "most", "products", "music", "buy", "data", "make", "them", "should", "product", "system", "post", "her", "city", "add", "policy", "number", "such", "please", "available", "copyright", "support", "message", "after", "best", "software", "then", "good", "video", "well", "where", "info", "rights", "public", "books", "high", "school", "through", "each", "links", "she", "review", "years", "order", "very", "privacy", "book", "items", "company", "read", "group", "need", "many", "user", "said", "does", "set", "under", "general", "research", "university", "January", "mail", "full", "map", "reviews", "program", "life", "know", "games", "way", "days", "management", "part", "could", "great", "united", "hotel", "real", "item", "international", "center", "must", "store", "travel", "comments", "made", "development", "report", "off", "member", "details", "line", "terms", "before", "hotels", "did", "send", "right", "type", "because", "local", "those", "using", "results", "office", "education", "national", "car", "design", "take", "posted", "internet", "address", "community", "within", "states", "area", "want", "phone", "shipping", "reserved", "subject", "between", "forum", "family", "long", "based", "code", "show", "even", "black", "check", "special", "prices", "website", "index", "being", "women", "much", "sign", "file", "link", "open", "today", "technology", "south", "case", "project", "same", "pages", "version", "section", "own", "found", "sports", "house", "related", "security", "both", "county", "American", "photo", "game", "members", "power", "while", "care", "network", "down", "computer", "systems", "three", "total", "place", "end", "following", "download", "him", "without", "per", "access", "think", "north", "resources", "current", "posts", "big", "media", "law", "control", "water", "history", "pictures", "size", "art","personal", "since", "including", "guide", "shop", "directory", "board", "location", "change", "white", "text", "small", "rating", "rate", "government", "children", "during", "return", "students", "shopping", "account", "times", "sites", "level", "digital", "profile", "previous", "form", "events", "love", "old", "main", "call", "hours", "image", "department", "title", "description", "insurance", "another", "why", "shall", "property", "class", "still", "money", "quality", "every", "listing", "content", "country", "private", "little", "visit", "save", "tools", "low", "reply", "customer", "December", "compare", "movies", "include", "college", "value", "article", "man", "card", "jobs", "provide", "food", "source", "author", "different", "press", "learn", "sale", "around", "print", "course", "job", "Canada", "process", "teen", "room", "stock", "training", "too", "credit", "point", "join", "science", "men", "categories", "advanced", "west", "sales", "look", "English", "left", "team", "estate", "box", "conditions", "select", "windows", "photos", "gay", "thread", "week", "category", "note", "live", "large", "gallery", "table", "register", "however", "June", "October", "November", "market", "library", "really", "action", "start", "series", "model", "features", "air", "industry", "plan", "human", "provided", "yes", "required", "second", "hot", "accessories", "cost", "movie", "forums", "march", "September", "better", "say", "questions", "July", "going", "medical", "test", "friend", "come", "server", "study", "application", "cart", "staff", "articles", "feedback", "again", "play", "looking", "issues", "April", "never", "users", "complete", "street", "topic", "comment", "financial", "things", "working", "against", "standard", "tax", "person", "below", "mobile", "less", "got", "blog", "party", "payment", "equipment", "login", "student", "let", "programs", "offers", "legal", "above", "recent", "park", "stores", "side", "act", "problem", "red", "give", "memory", "performance", "social", "August", "quote", "language", "story", "sell", "options", "experience", "rates", "create", "key", "body", "young", "America", "important", "field", "few", "east", "paper", "single", "age", "activities", "club", "example", "girls", "additional", "password", "latest", "something", "road", "gift", "question", "changes", "night", "hard", "Texas", "pay", "four", "poker", "status", "browse", "issue", "range", "building", "seller", "court", "February", "always", "result", "audio", "light", "write", "offer", "blue", "groups", "easy", "given", "files", "event", "release", "analysis", "request", "fax", "China", "making", "picture", "needs", "possible", "might", "professional", "yet", "month", "major", "star", "areas", "future", "space", "committee", "hand", "sun", "cards", "problems", "London", "Washington", "meeting", "become", "interest", "child", "keep", "enter", "California", "share", "similar", "garden", "schools", "million", "added", "reference", "companies", "listed", "baby", "learning", "energy", "run", "delivery", "net", "popular", "term", "film", "stories", "put", "computers", "journal", "reports", "try", "welcome", "central", "images", "president", "notice", "god", "original", "head", "radio", "until", "cell", "color", "self", "council", "away", "includes", "track", "Australia", "discussion", "archive", "once", "others", "entertainment", "agreement", "format", "least", "society", "months", "log", "safety", "friends", "sure", "trade", "edition", "cars", "messages", "marketing", "tell", "further", "updated", "association", "able", "having", "provides", "fun", "already", "green", "studies", "close", "common", "drive", "specific", "several", "gold", "living", "collection", "called", "short", "arts", "lot", "ask", "display", "limited", "powered", "solutions", "means", "director", "daily", "beach", "past", "natural", "whether", "due", "electronics", "five", "upon", "period"
];

export default function English10k({ value }) {
    const selectedWords = SelectedWords(words, value);
    window.content = selectedWords.join(' ');
    // console.log(window.content);
    const wordsBox = document.getElementById('words');
    if (wordsBox) {
        reset();
    }

    return (
        <div className='flex flex-wrap relative' id='words'>
            {selectedWords.map((word, wordIndex) => (
                <div
                    key={wordIndex}
                    className={`mr-2 word ${
                    wordIndex === 0 ? 'active first_word' : wordIndex === selectedWords.length - 1 ? 'last_word' : ''
                    }`}
                >
                    {word.split('').map((letter, letterIndex) => (
                    <span
                        key={letterIndex}
                        className={`letter ${
                        wordIndex === 0 && letterIndex === 0 ? 'current' : ''
                        }`}
                    >
                        {letter}
                    </span>
                    ))}
                </div>
            ))}
        </div>
    )
}
