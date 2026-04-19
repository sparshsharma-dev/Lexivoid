/* ============================================
   LEXICON DATA - Untranslatable Words Database
   A curated collection of concepts that exist
   in human experience across documented languages
   ============================================ */

const UNTRANSLATABLE_WORDS = [
  // Japanese
  {
    word: "Mono no aware",
    language: "Japanese",
    pronunciation: "/mo.no no a.wa.ɾe/",
    definition: "The bittersweet awareness of impermanence — a gentle sadness at the passing of things, and a deeper gentleness toward the beauty of their transience.",
    keywords: ["impermanence", "beauty", "sadness", "passing", "transient", "fleeting", "bittersweet", "time", "loss", "gentle", "melancholy", "fading", "ephemeral"]
  },
  {
    word: "Wabi-sabi",
    language: "Japanese",
    pronunciation: "/wa.bi sa.bi/",
    definition: "Finding beauty in imperfection and accepting the natural cycle of growth, decay, and death. The aesthetic of things that are imperfect, impermanent, and incomplete.",
    keywords: ["imperfection", "beauty", "decay", "aging", "worn", "broken", "natural", "simplicity", "rustic", "weathered", "acceptance", "flawed"]
  },
  {
    word: "Komorebi",
    language: "Japanese",
    pronunciation: "/ko.mo.ɾe.bi/",
    definition: "The interplay of sunlight filtering through leaves — the dappled light that dances on the ground when sunshine shines through trees.",
    keywords: ["sunlight", "trees", "leaves", "light", "shadow", "forest", "nature", "dappled", "golden", "afternoon", "woods", "filtering"]
  },
  {
    word: "Tsundoku",
    language: "Japanese",
    pronunciation: "/tsɯn.do.kɯ/",
    definition: "The act of acquiring books and letting them pile up, unread. More than just hoarding — it's the loving accumulation of knowledge you intend to absorb.",
    keywords: ["books", "reading", "collecting", "unread", "pile", "hoarding", "knowledge", "accumulate", "buying", "library"]
  },
  {
    word: "Shinrin-yoku",
    language: "Japanese",
    pronunciation: "/ɕin.ɾin jo.kɯ/",
    definition: "Forest bathing — the practice of immersing oneself in a forest atmosphere, absorbing it through all senses for healing and restoration.",
    keywords: ["forest", "nature", "healing", "calm", "trees", "immersion", "peace", "restoration", "walk", "bathing", "woods"]
  },
  {
    word: "Natsukashii",
    language: "Japanese",
    pronunciation: "/na.tsɯ.ka.ɕiː/",
    definition: "A nostalgic longing for the past, mixed with happiness for the fond memory rather than sadness over its absence. A warm, grateful nostalgia.",
    keywords: ["nostalgia", "memory", "past", "warm", "happy", "longing", "childhood", "remember", "fond", "grateful", "home"]
  },
  {
    word: "Ikigai",
    language: "Japanese",
    pronunciation: "/i.ki.ɡai/",
    definition: "A reason for being — the thing that gets you up in the morning. The intersection of what you love, what you're good at, what the world needs, and what you can be paid for.",
    keywords: ["purpose", "meaning", "reason", "passion", "life", "motivation", "fulfillment", "calling", "drive", "vocation"]
  },
  {
    word: "Kintsugi",
    language: "Japanese",
    pronunciation: "/kin.tsɯ.ɡi/",
    definition: "The art of repairing broken pottery with gold, treating breakage as part of an object's history rather than something to disguise. Beauty born from damage.",
    keywords: ["broken", "repair", "gold", "beauty", "damage", "healing", "scars", "history", "resilience", "mend", "stronger"]
  },

  // Portuguese
  {
    word: "Saudade",
    language: "Portuguese",
    pronunciation: "/saw.ˈda.dʒi/",
    definition: "A deep emotional state of melancholic longing for something or someone you love that is absent. It carries a sense that what is missing might never return.",
    keywords: ["longing", "missing", "absent", "love", "melancholy", "yearning", "loss", "distance", "gone", "return", "ache", "heart"]
  },
  {
    word: "Desenrascanço",
    language: "Portuguese",
    pronunciation: "/dɨ.zẽ.ʁɐʃ.kɐ̃.su/",
    definition: "The ability to improvise a solution to a problem without the proper tools or resources — to pull yourself out of a tight spot through ingenuity.",
    keywords: ["improvise", "solution", "creative", "resourceful", "problem", "fix", "clever", "makeshift", "adapt", "ingenuity"]
  },

  // German
  {
    word: "Waldeinsamkeit",
    language: "German",
    pronunciation: "/valt.ˈaɪ̯n.zaːm.kaɪ̯t/",
    definition: "The feeling of solitude and connectedness to nature when alone in the woods — a peaceful aloneness that is not loneliness but communion.",
    keywords: ["solitude", "forest", "alone", "nature", "peace", "woods", "connected", "quiet", "communion", "wilderness", "walking"]
  },
  {
    word: "Fernweh",
    language: "German",
    pronunciation: "/fɛʁn.veː/",
    definition: "An ache for distant places — the opposite of homesickness. A craving for travel, for somewhere you've never been.",
    keywords: ["travel", "wanderlust", "distant", "far", "places", "craving", "explore", "adventure", "horizon", "elsewhere", "longing"]
  },
  {
    word: "Kummerspeck",
    language: "German",
    pronunciation: "/kʊ.mɐ.ʃpɛk/",
    definition: "Literally 'grief bacon' — the weight gained from emotional overeating. The physical manifestation of sorrow through food.",
    keywords: ["eating", "emotional", "grief", "weight", "food", "comfort", "sadness", "overeating", "stress", "coping"]
  },
  {
    word: "Torschlusspanik",
    language: "German",
    pronunciation: "/toːɐ̯.ʃlʊs.pa.niːk/",
    definition: "The fear that time is running out to achieve life goals — literally 'gate-closing panic.' The anxiety of diminishing opportunities with age.",
    keywords: ["time", "running out", "aging", "fear", "goals", "opportunity", "panic", "deadline", "life", "late", "behind", "clock"]
  },
  {
    word: "Sehnsucht",
    language: "German",
    pronunciation: "/zeːn.zʊxt/",
    definition: "An intense, inconsolable longing for something far off and indefinable — a deep yearning for an alternative life or an ideal experience.",
    keywords: ["longing", "yearning", "ideal", "dream", "deep", "intense", "far", "unreachable", "desire", "ache", "incomplete"]
  },
  {
    word: "Geborgenheit",
    language: "German",
    pronunciation: "/ɡəˈbɔʁɡn̩haɪ̯t/",
    definition: "The feeling of complete security and comfort, knowing you are protected and loved — a warmth that comes from being held by someone or something that shelters you.",
    keywords: ["security", "comfort", "safety", "protected", "warm", "love", "shelter", "belonging", "cozy", "home", "held", "embrace"]
  },

  // Danish
  {
    word: "Hygge",
    language: "Danish",
    pronunciation: "/hʏɡ.ə/",
    definition: "A quality of coziness and comfortable conviviality that engenders a feeling of contentment or well-being — warmth, togetherness, and present-moment joy.",
    keywords: ["cozy", "warm", "comfort", "candles", "together", "contentment", "present", "winter", "blankets", "friends", "calm", "simple"]
  },

  // Finnish
  {
    word: "Sisu",
    language: "Finnish",
    pronunciation: "/si.su/",
    definition: "Extraordinary determination and courage in the face of extreme adversity — a stoic grit that goes beyond perseverance. An inner fire that burns when everything says to stop.",
    keywords: ["determination", "courage", "grit", "perseverance", "resilience", "strength", "endurance", "stubborn", "will", "fight", "survive"]
  },
  {
    word: "Kalsarikännit",
    language: "Finnish",
    pronunciation: "/kɑl.sɑ.ri.kæn.nit/",
    definition: "The act of drinking alone at home in your underwear, with no intention of going out. Not depressing — deliberately and deliciously antisocial.",
    keywords: ["alone", "home", "drinking", "relax", "antisocial", "underwear", "comfort", "solitary", "evening", "introvert"]
  },

  // Korean
  {
    word: "Han",
    language: "Korean",
    pronunciation: "/han/",
    definition: "A collective feeling of unresolved resentment against injustice, mixed with grief, regret, and a sense of helplessness — a deep cultural sorrow carried collectively.",
    keywords: ["injustice", "resentment", "grief", "collective", "sorrow", "helpless", "anger", "history", "unresolved", "cultural", "pain"]
  },
  {
    word: "Jeong",
    language: "Korean",
    pronunciation: "/dʑʌŋ/",
    definition: "A deep bond of affection that develops over time — not romantic love, but a warm attachment that forms between people through shared experiences. It can exist even with antagonists.",
    keywords: ["bond", "affection", "attachment", "deep", "shared", "connection", "warmth", "loyalty", "time", "relationship", "familiar"]
  },
  {
    word: "Nunchi",
    language: "Korean",
    pronunciation: "/nun.tɕʰi/",
    definition: "The subtle art of gauging other people's thoughts, feelings, and moods from their behavior — an intuitive social awareness that guides appropriate responses.",
    keywords: ["intuition", "social", "awareness", "reading", "emotions", "subtle", "empathy", "perceptive", "mood", "unspoken", "sense"]
  },

  // Swedish
  {
    word: "Lagom",
    language: "Swedish",
    pronunciation: "/lɑː.ɡɔm/",
    definition: "Not too much, not too little — just right. The principle of moderation and balance, finding the optimal point between extremes.",
    keywords: ["balance", "moderation", "enough", "just right", "optimal", "sufficient", "harmony", "equilibrium", "moderate", "perfect amount"]
  },
  {
    word: "Fika",
    language: "Swedish",
    pronunciation: "/fiː.ka/",
    definition: "A social coffee break, but elevated to a philosophy of life — the act of pausing, connecting with others, and savoring the moment over coffee and pastries.",
    keywords: ["coffee", "break", "social", "pause", "relax", "conversation", "friends", "moment", "savor", "connection"]
  },
  {
    word: "Mångata",
    language: "Swedish",
    pronunciation: "/mɔŋ.ɡɑː.ta/",
    definition: "The road-like reflection of moonlight on water — the glimmering, long trail of light that the moon creates on the surface of the sea or a lake.",
    keywords: ["moon", "water", "reflection", "light", "night", "sea", "lake", "shimmering", "path", "glow", "silver"]
  },

  // Turkish
  {
    word: "Yakamoz",
    language: "Turkish",
    pronunciation: "/ja.ka.moz/",
    definition: "The reflection of moonlight on water, particularly the phosphorescent shimmer created by moonbeams dancing on waves or ripples.",
    keywords: ["moon", "water", "reflection", "shimmer", "phosphorescent", "night", "waves", "glow", "dancing", "light"]
  },
  {
    word: "Hüzün",
    language: "Turkish",
    pronunciation: "/hy.ˈzyn/",
    definition: "A melancholy that is not just personal but shared by millions — a spiritual loss felt collectively by a people, the communal sadness of a city or culture in decline.",
    keywords: ["melancholy", "collective", "communal", "decline", "spiritual", "city", "shared", "sadness", "cultural", "loss", "ruins"]
  },

  // Arabic
  {
    word: "Tarab",
    language: "Arabic",
    pronunciation: "/ta.rab/",
    definition: "A state of musical ecstasy or enchantment — the emotional transformation that occurs when music moves you so deeply that you lose yourself entirely in it.",
    keywords: ["music", "ecstasy", "enchantment", "moved", "emotion", "trance", "lost", "transported", "beauty", "song", "soul", "transcend"]
  },
  {
    word: "Ya'aburnee",
    language: "Arabic",
    pronunciation: "/jaʔ.bur.niː/",
    definition: "Literally 'you bury me' — the hope that you will die before someone you love, because you cannot bear to live without them. An extreme declaration of love.",
    keywords: ["love", "death", "before", "cannot live", "extreme", "devotion", "partner", "unbearable", "loss", "deep love"]
  },

  // Czech
  {
    word: "Litost",
    language: "Czech",
    pronunciation: "/lɪ.tɔst/",
    definition: "A state of agony and torment created by the sudden sight of one's own misery — the synthesis of grief, sympathy, remorse, and an indefinable longing.",
    keywords: ["misery", "agony", "torment", "sudden", "realization", "grief", "remorse", "self-pity", "longing", "awareness", "weakness"]
  },

  // Russian
  {
    word: "Toska",
    language: "Russian",
    pronunciation: "/tɐˈska/",
    definition: "A dull spiritual anguish without any particular cause — a sick pining, a vague restlessness, a longing with nothing to long for. The deepest and most painful form of spiritual emptiness.",
    keywords: ["anguish", "spiritual", "emptiness", "restless", "vague", "pining", "dull", "deep", "pain", "longing", "undefined", "hollow"]
  },
  {
    word: "Poshlost",
    language: "Russian",
    pronunciation: "/poʂ.ɫəstʲ/",
    definition: "Something that is not just vulgar or banal, but pretentiously so — a falseness that insists on passing itself off as genuine, a spiritual mediocrity masquerading as significance.",
    keywords: ["fake", "pretentious", "vulgar", "banal", "phony", "mediocre", "shallow", "false", "tasteless", "self-important"]
  },

  // Welsh
  {
    word: "Hiraeth",
    language: "Welsh",
    pronunciation: "/hɪ.raɪ̯θ/",
    definition: "A homesickness for a home you can't return to, or that never was — a deep longing for a place, a time, or a version of yourself that may have only existed in your imagination.",
    keywords: ["homesickness", "home", "return", "nostalgia", "longing", "past", "place", "belonging", "lost", "imagination", "yearning", "exile"]
  },

  // Hawaiian
  {
    word: "Pana poʻo",
    language: "Hawaiian",
    pronunciation: "/pa.na po.ʔo/",
    definition: "The act of scratching your head to help you remember something you've forgotten — that physical gesture of trying to retrieve a lost memory.",
    keywords: ["forget", "remember", "memory", "scratch", "head", "thinking", "lost", "recall", "frustration", "tip of tongue"]
  },

  // Yiddish
  {
    word: "Luftmensch",
    language: "Yiddish",
    pronunciation: "/lʊft.mɛnʃ/",
    definition: "Literally 'air person' — a dreamer with no practical skills, someone whose head is always in the clouds, an impractical visionary living on air.",
    keywords: ["dreamer", "impractical", "visionary", "clouds", "air", "idealist", "imagination", "detached", "otherworldly", "unpractical"]
  },

  // Indonesian
  {
    word: "Jayus",
    language: "Indonesian",
    pronunciation: "/d͡ʒa.jʊs/",
    definition: "A joke so unfunny and so poorly told that one cannot help but laugh — the hilarity that comes not from humor but from the sheer failure of humor.",
    keywords: ["joke", "unfunny", "laugh", "bad", "humor", "awkward", "terrible", "funny because bad", "embarrassing", "cringe"]
  },

  // Georgian
  {
    word: "Shemomedjamo",
    language: "Georgian",
    pronunciation: "/ʃe.mo.me.d͡ʒa.mo/",
    definition: "Eating past the point of being full because the food tastes so good — when you are no longer hungry but cannot stop because of the delicious flavor.",
    keywords: ["eating", "full", "delicious", "food", "cannot stop", "taste", "indulgence", "overflow", "flavor", "pleasure"]
  },

  // Inuit
  {
    word: "Iktsuarpok",
    language: "Inuit",
    pronunciation: "/ik.tsuː.ar.pok/",
    definition: "The feeling of anticipation that leads you to keep going outside to check if someone is coming — that restless, eager waiting for an expected arrival.",
    keywords: ["anticipation", "waiting", "expecting", "arrival", "restless", "eager", "checking", "looking", "coming", "excitement"]
  },

  // Spanish
  {
    word: "Duende",
    language: "Spanish",
    pronunciation: "/dwen.de/",
    definition: "The mysterious power of art to deeply move a person — a heightened state of emotion and expression, the dark authenticity that gives art its soul. Most associated with flamenco.",
    keywords: ["art", "power", "emotion", "soul", "mysterious", "deep", "music", "authenticity", "raw", "flamenco", "spirit", "passion"]
  },
  {
    word: "Sobremesa",
    language: "Spanish",
    pronunciation: "/so.bɾe.me.sa/",
    definition: "The time spent lingering at the table after a meal is finished — those conversations that flow naturally when no one wants to leave, when being together matters more than what was eaten.",
    keywords: ["meal", "table", "conversation", "linger", "after dinner", "together", "talking", "friends", "family", "staying", "social"]
  },
  {
    word: "Querencia",
    language: "Spanish",
    pronunciation: "/ke.ɾen.θja/",
    definition: "A place where you feel safe, from which your strength of character is drawn — a spot where you feel most authentically yourself.",
    keywords: ["safe", "place", "home", "strength", "authentic", "self", "belonging", "comfort", "center", "grounding", "refuge"]
  },

  // French
  {
    word: "L'appel du vide",
    language: "French",
    pronunciation: "/la.pɛl dy vid/",
    definition: "The call of the void — that inexplicable urge to jump when standing on the edge of a cliff or high place. Not suicidal, but a strange vertigo of possibility.",
    keywords: ["void", "edge", "jump", "urge", "cliff", "height", "vertigo", "strange", "impulse", "abyss", "call", "irrational"]
  },
  {
    word: "Dépaysement",
    language: "French",
    pronunciation: "/de.pe.iz.mɑ̃/",
    definition: "The disorientation felt in a foreign country or unfamiliar surroundings — not unpleasant, but the state of being a fish out of water, wonderfully lost.",
    keywords: ["foreign", "disorientation", "travel", "unfamiliar", "lost", "strange", "new", "abroad", "displacement", "different"]
  },
  {
    word: "Retrouvailles",
    language: "French",
    pronunciation: "/ʁə.tʁu.vaj/",
    definition: "The happiness of meeting again after a long time apart — that specific joy of reunion, the moment of re-finding someone you had lost to distance or time.",
    keywords: ["reunion", "meeting", "again", "happiness", "long time", "apart", "joy", "return", "embrace", "reconnect"]
  },
  {
    word: "Flâneur",
    language: "French",
    pronunciation: "/flɑ.nœʁ/",
    definition: "One who wanders aimlessly through a city, observing and absorbing its atmosphere — not lost, but deliberately purposeless, finding meaning in the wandering itself.",
    keywords: ["wander", "city", "aimless", "observe", "walk", "urban", "stroll", "purposeless", "watch", "absorb", "streets"]
  },

  // Italian
  {
    word: "Sprezzatura",
    language: "Italian",
    pronunciation: "/spret.tsa.tu.ra/",
    definition: "A studied carelessness — the art of making difficult things look effortless, the appearance of ease that conceals the enormous effort behind it.",
    keywords: ["effortless", "careless", "ease", "grace", "nonchalant", "elegant", "cool", "natural", "practice", "concealed effort"]
  },
  {
    word: "Meriggiare",
    language: "Italian",
    pronunciation: "/me.rid.dʒa.re/",
    definition: "To rest in the shade at midday, escaping the heat — that drowsy, languid pause in the hottest part of the day.",
    keywords: ["shade", "rest", "midday", "heat", "sleep", "noon", "lazy", "summer", "pause", "drowsy", "siesta"]
  },

  // Sanskrit
  {
    word: "Mudita",
    language: "Sanskrit",
    pronunciation: "/mu.di.taː/",
    definition: "The pleasure that comes from delighting in other people's well-being or good fortune — the opposite of schadenfreude. Vicarious joy.",
    keywords: ["joy", "others", "happiness", "vicarious", "delight", "well-being", "empathy", "generous", "celebrate", "glad for"]
  },
  {
    word: "Viraag",
    language: "Sanskrit",
    pronunciation: "/vi.raːɡ/",
    definition: "The emotional pain of separation from a loved one — specifically the ache left in your body after someone you love leaves the room.",
    keywords: ["separation", "pain", "love", "leaving", "absence", "ache", "body", "physical", "departure", "miss", "empty"]
  },

  // Greek
  {
    word: "Meraki",
    language: "Greek",
    pronunciation: "/me.ra.ki/",
    definition: "To do something with soul, creativity, or absolute devotion — putting a piece of yourself into your work so that it has something of your spirit in it.",
    keywords: ["soul", "creativity", "devotion", "craft", "love", "work", "spirit", "care", "passionate", "artisan", "dedication"]
  },
  {
    word: "Philotimo",
    language: "Greek",
    pronunciation: "/fi.lo.ti.mo/",
    definition: "A complex array of virtues — love of honor, deep respect, pride, duty, and the sense of doing the right thing because it is who you are, not because you are told to.",
    keywords: ["honor", "respect", "duty", "virtue", "pride", "integrity", "character", "moral", "right thing", "selfless"]
  },

  // Tagalog
  {
    word: "Kilig",
    language: "Tagalog",
    pronunciation: "/ki.lɪɡ/",
    definition: "The rush of euphoria and butterflies you feel when something romantic happens — that giddy, electric thrill of a crush or a romantic gesture.",
    keywords: ["butterflies", "romantic", "crush", "giddy", "thrill", "euphoria", "love", "excitement", "blush", "flutter", "heart"]
  },
  {
    word: "Gigil",
    language: "Tagalog",
    pronunciation: "/ɡi.ɡɪl/",
    definition: "The irresistible urge to squeeze or pinch something overwhelmingly cute — that uncontrollable trembling or gritting of teeth when you encounter extreme cuteness.",
    keywords: ["cute", "squeeze", "pinch", "overwhelm", "adorable", "baby", "puppy", "urge", "overwhelming", "affection"]
  },

  // Urdu
  {
    word: "Goya",
    language: "Urdu",
    pronunciation: "/ɡoː.jaː/",
    definition: "The suspension of disbelief that occurs when a story is so vivid and compelling that it feels real — as if the narrative has replaced reality temporarily.",
    keywords: ["story", "immersion", "fiction", "real", "vivid", "narrative", "lost in", "believe", "absorbed", "fantasy", "transported"]
  },

  // Tshiluba
  {
    word: "Ilunga",
    language: "Tshiluba",
    pronunciation: "/i.luŋ.ɡa/",
    definition: "A person who is ready to forgive any abuse for the first time, tolerate it a second time, but never a third time — the precise geometry of human patience.",
    keywords: ["forgive", "patience", "tolerance", "limit", "abuse", "second chance", "boundary", "enough", "three strikes", "forgiveness"]
  },

  // Norwegian
  {
    word: "Forelsket",
    language: "Norwegian",
    pronunciation: "/fɔ.ɾɛl.skɛt/",
    definition: "The euphoria of first falling in love — that irrational, all-consuming bliss of early romantic attraction before it settles into something deeper.",
    keywords: ["falling in love", "euphoria", "new love", "infatuation", "bliss", "butterflies", "beginning", "romance", "irrational", "glow"]
  },
  {
    word: "Koselig",
    language: "Norwegian",
    pronunciation: "/kuː.sə.li/",
    definition: "A warm, cozy intimacy — the feeling of being snug and content, often associated with candlelight, warm drinks, and the presence of loved ones during dark winter months.",
    keywords: ["cozy", "warm", "intimate", "candlelight", "winter", "snug", "content", "comfort", "love", "blanket"]
  },

  // Hindi
  {
    word: "Jugaad",
    language: "Hindi",
    pronunciation: "/dʒʊ.ɡɑːd/",
    definition: "A flexible approach to problem-solving that uses limited resources in an innovative way — a creative hack born from constraint, a workaround that shouldn't work but does.",
    keywords: ["hack", "creative", "resourceful", "innovative", "workaround", "limited", "constraint", "clever", "improvise", "fix"]
  },
  {
    word: "Viraha",
    language: "Hindi",
    pronunciation: "/vi.ɾa.ha/",
    definition: "The realization of love through separation — the idea that being apart from someone can deepen your love for them more than being together can.",
    keywords: ["separation", "love", "distance", "apart", "realization", "deepen", "absence", "longing", "grow", "miss"]
  },

  // Thai
  {
    word: "Greng Jai",
    language: "Thai",
    pronunciation: "/ɡrɛːŋ dʑaj/",
    definition: "The reluctance to accept help or impose on others, or to do something that might inconvenience someone — an over-considerate awareness of causing burden.",
    keywords: ["reluctance", "help", "burden", "polite", "imposing", "considerate", "shy", "asking", "favor", "guilt", "inconvenience"]
  },

  // Malay
  {
    word: "Pisan zapra",
    language: "Malay",
    pronunciation: "/pi.san za.pra/",
    definition: "The time needed to eat a banana — a unit of time measurement based on the simple, universal act of banana consumption.",
    keywords: ["time", "banana", "measurement", "duration", "moment", "brief", "quick", "interval"]
  },

  // Persian
  {
    word: "Ta'ârof",
    language: "Persian",
    pronunciation: "/tæʔ.ɒː.rof/",
    definition: "An elaborate social dance of politeness — insisting on paying, refusing compliments, offering things you don't want taken. A complex ritual of courtesy where both parties know the script.",
    keywords: ["politeness", "courtesy", "ritual", "social", "insist", "refuse", "offer", "manners", "custom", "generous", "humble"]
  },

  // Pascuense
  {
    word: "Tingo",
    language: "Pascuense",
    pronunciation: "/tiŋ.ɡo/",
    definition: "To gradually steal all the possessions of a neighbor by borrowing and not returning — the slow, systematic erosion of someone's belongings through perpetual borrowing.",
    keywords: ["borrow", "steal", "neighbor", "return", "possessions", "gradual", "taking", "lending"]
  },

  // Scottish Gaelic
  {
    word: "Cianalas",
    language: "Scottish Gaelic",
    pronunciation: "/kiə.nə.ləs/",
    definition: "A powerful, visceral homesickness mixed with a longing for a specific landscape — when your body physically aches for a particular place on Earth.",
    keywords: ["homesickness", "landscape", "place", "ache", "physical", "belonging", "land", "earth", "visceral", "return", "terrain"]
  },

  // Bantu
  {
    word: "Ubuntu",
    language: "Bantu",
    pronunciation: "/ʊ.bʊn.tuː/",
    definition: "I am because we are — the belief that a person exists only through their relationships with others. Individual humanity is inseparable from collective humanity.",
    keywords: ["community", "together", "humanity", "collective", "connection", "belonging", "shared", "people", "unity", "compassion"]
  },

  // Dutch
  {
    word: "Gezellig",
    language: "Dutch",
    pronunciation: "/xə.zɛ.ləx/",
    definition: "A warmth of being with good people, coziness, fun — a convivial atmosphere that can apply to places, moments, or gatherings. An untranslatable Dutch essential.",
    keywords: ["cozy", "warm", "together", "fun", "atmosphere", "gathering", "friends", "convivial", "pleasant", "cheerful"]
  },
  {
    word: "Uitwaaien",
    language: "Dutch",
    pronunciation: "/œyt.ʋaː.jən/",
    definition: "To go out in windy weather for refreshment — literally 'to walk in the wind,' the act of clearing your head by being blown about in nature.",
    keywords: ["wind", "walk", "refresh", "clear head", "nature", "outside", "breeze", "invigorate", "open air", "cleanse"]
  }
];

// Language family classification for phoneme generation
const LANGUAGE_FAMILIES = {
  "Romance": {
    languages: ["Portuguese", "Spanish", "French", "Italian"],
    emotionalProfile: ["passionate", "warm", "flowing", "melodic"]
  },
  "Germanic": {
    languages: ["German", "Dutch", "Danish", "Swedish", "Norwegian"],
    emotionalProfile: ["grounded", "sturdy", "deep", "solid"]
  },
  "Slavic": {
    languages: ["Russian", "Czech"],
    emotionalProfile: ["intense", "profound", "resonant", "dark"]
  },
  "Japonic": {
    languages: ["Japanese"],
    emotionalProfile: ["delicate", "subtle", "precise", "quiet"]
  },
  "Koreanic": {
    languages: ["Korean"],
    emotionalProfile: ["balanced", "communal", "deep"]
  },
  "Semitic": {
    languages: ["Arabic"],
    emotionalProfile: ["rich", "ornate", "ancient", "spiritual"]
  },
  "Celtic": {
    languages: ["Welsh", "Scottish Gaelic"],
    emotionalProfile: ["mystical", "longing", "ethereal", "landscape"]
  },
  "Indo-Aryan": {
    languages: ["Hindi", "Urdu", "Sanskrit"],
    emotionalProfile: ["philosophical", "devotional", "cosmic", "transcendent"]
  },
  "Turkic": {
    languages: ["Turkish"],
    emotionalProfile: ["poetic", "visual", "evocative"]
  },
  "Austronesian": {
    languages: ["Indonesian", "Tagalog", "Malay", "Hawaiian"],
    emotionalProfile: ["fluid", "natural", "gentle", "communal"]
  },
  "Finno-Ugric": {
    languages: ["Finnish"],
    emotionalProfile: ["resilient", "natural", "stark", "enduring"]
  },
  "Kartvelian": {
    languages: ["Georgian"],
    emotionalProfile: ["sensory", "ancient", "visceral"]
  },
  "Bantu": {
    languages: ["Bantu", "Tshiluba"],
    emotionalProfile: ["communal", "rhythmic", "collective", "human"]
  },
  "Tai": {
    languages: ["Thai"],
    emotionalProfile: ["gentle", "considerate", "fluid"]
  },
  "Greek": {
    languages: ["Greek"],
    emotionalProfile: ["philosophical", "soulful", "classic", "profound"]
  },
  "Yiddish": {
    languages: ["Yiddish"],
    emotionalProfile: ["humorous", "wise", "earthy", "human"]
  }
};

/* Emotional keyword clusters for matching input to language families */
const EMOTIONAL_CLUSTERS = {
  "longing": {
    keywords: ["miss", "long", "yearn", "ache", "far", "distant", "gone", "absent", "want", "wish", "desire", "reach", "away"],
    families: ["Celtic", "Romance", "Germanic", "Slavic"]
  },
  "nostalgia": {
    keywords: ["remember", "past", "childhood", "memory", "old", "before", "once", "used to", "back then", "forgotten", "return"],
    families: ["Japonic", "Celtic", "Romance"]
  },
  "connection": {
    keywords: ["together", "bond", "close", "belong", "community", "people", "share", "understand", "empathy", "family", "friend"],
    families: ["Bantu", "Koreanic", "Austronesian"]
  },
  "solitude": {
    keywords: ["alone", "solitude", "quiet", "silence", "empty", "space", "void", "still", "peace", "withdrawn", "introvert", "isolated"],
    families: ["Japonic", "Germanic", "Finno-Ugric"]
  },
  "beauty": {
    keywords: ["beautiful", "beauty", "light", "glow", "shimmer", "delicate", "fragile", "transient", "fleeting", "moment", "perfect"],
    families: ["Japonic", "Turkic", "Greek"]
  },
  "sorrow": {
    keywords: ["sad", "grief", "sorrow", "pain", "hurt", "cry", "tears", "heavy", "dark", "weight", "burden", "loss"],
    families: ["Slavic", "Celtic", "Koreanic"]
  },
  "joy": {
    keywords: ["happy", "joy", "light", "warm", "laugh", "bliss", "euphoria", "glow", "delight", "celebrate", "sparkle"],
    families: ["Romance", "Austronesian", "Germanic"]
  },
  "wonder": {
    keywords: ["wonder", "awe", "vast", "infinite", "mystery", "universe", "cosmic", "transcend", "divine", "sacred", "spiritual"],
    families: ["Indo-Aryan", "Semitic", "Greek"]
  },
  "comfort": {
    keywords: ["cozy", "warm", "safe", "home", "shelter", "blanket", "comfort", "soft", "gentle", "nest", "protect", "held"],
    families: ["Germanic", "Romance", "Finno-Ugric"]
  },
  "creativity": {
    keywords: ["create", "art", "make", "craft", "build", "imagine", "dream", "vision", "inspire", "soul", "express", "flow"],
    families: ["Greek", "Indo-Aryan", "Romance"]
  },
  "nature": {
    keywords: ["forest", "tree", "ocean", "mountain", "river", "wind", "rain", "earth", "sky", "sun", "moon", "star", "leaf", "flower"],
    families: ["Japonic", "Celtic", "Germanic", "Finno-Ugric"]
  },
  "time": {
    keywords: ["time", "moment", "passing", "fleeting", "eternal", "forever", "brief", "instant", "slow", "fast", "aging", "growing"],
    families: ["Japonic", "Germanic", "Indo-Aryan"]
  },
  "love": {
    keywords: ["love", "heart", "romance", "passion", "intimate", "devotion", "tenderness", "adore", "cherish", "beloved"],
    families: ["Romance", "Semitic", "Indo-Aryan", "Austronesian"]
  },
  "resilience": {
    keywords: ["strong", "endure", "survive", "persist", "overcome", "fight", "resist", "courage", "brave", "grit", "will"],
    families: ["Finno-Ugric", "Slavic", "Koreanic"]
  },
  "absurdity": {
    keywords: ["absurd", "strange", "weird", "funny", "ironic", "paradox", "contradiction", "nonsense", "odd", "unexpected"],
    families: ["Yiddish", "Austronesian", "Slavic"]
  }
};
