/* ============================================
   PHONEME ENGINE v2
   Now with common-word filtering so it doesn't
   make up words for "horny" or "sad"
   ============================================ */

const PhonemeEngine = (() => {

  /* Common Emotions — Words That Already Exist */
  const COMMON_WORDS = [
    { triggers: ["horny","aroused","turned on","sexually excited","lustful","want sex","feeling sexual","lust","arousal","libido","desire","sexually","horniness","lusty","carnal"],
      word: "Horny / Lustful",
      explain: "This feeling has many names: 'horny' (English), 'kāma' (कामा, Sanskrit — desire/longing), 'shehwa' (شهوة, Arabic — carnal desire), 'geil' (German). Try describing the *specific shade* of desire — the context, the contradiction, the emotion underneath." },
    { triggers: ["happy","happiness","joyful","joyous","joy","cheerful","delighted","elated","glad","blissful","content","pleased","euphoric","ecstatic","merry","gleeful"],
      word: "Happy / Joyful",
      explain: "Joy already has words in every language: 'happy' (English), 'heureux' (French), 'glücklich' (German), 'feliz' (Spanish), 'ureshii' (嬉しい, Japanese). Try describing what makes *your* happiness different — the exact texture of it." },
    { triggers: ["sad","sadness","unhappy","sorrow","sorrowful","grief","grieving","miserable","depressed","depression","melancholy","melancholic","gloomy","despondent","heartbroken","despair","dejected","downcast","blue","hopeless"],
      word: "Sad / Melancholy",
      explain: "Sadness is universal: 'sad' (English), 'triste' (French/Spanish/Italian), 'traurig' (German), 'kanashii' (悲しい, Japanese). Try describing the *particular shape* of your sadness — what makes it uniquely yours." },
    { triggers: ["angry","anger","furious","rage","raging","mad","pissed","pissed off","irritated","frustrated","frustration","annoyed","infuriated","outraged","livid","irate","wrathful","wrath","seething","enraged"],
      word: "Angry / Furious",
      explain: "Anger has names everywhere: 'angry' (English), 'en colère' (French), 'wütend' (German), 'ikari' (怒り, Japanese). Try describing the feeling *around* the anger — what it masks, what triggered it, the aftertaste." },
    { triggers: ["scared","fear","afraid","frightened","terrified","terror","fearful","petrified","horrified","spooked","dread","dreading","panicked","panic","phobia","alarmed"],
      word: "Afraid / Terrified",
      explain: "Fear is named in every tongue: 'afraid' (English), 'peur' (French), 'Angst' (German), 'kowai' (怖い, Japanese). Try describing the *quality* of the fear — is it a hum? A falling? A shadow?" },
    { triggers: ["lonely","loneliness","alone","isolated","isolation","solitude","solitary","friendless","abandoned","lonesome","forsaken","disconnected"],
      word: "Lonely / Isolated",
      explain: "Loneliness is widely named: 'lonely' (English), 'einsam' (German), 'solitario' (Spanish), 'sabishii' (寂しい, Japanese). Try describing what makes your aloneness *specific* — lonely in a crowd? Lonely inside a relationship? Lonely for a version of yourself?" },
    { triggers: ["bored","boredom","boring","tedium","tedious","uninterested","monotony","monotonous","ennui","dull","unstimulated"],
      word: "Bored / Ennui",
      explain: "Boredom has names: 'bored' (English), 'ennui' (French — existential boredom), 'Langeweile' (German — literally 'long while'). Try describing what's *underneath* the boredom — is it dread? Restlessness? A hunger for something you can't name?" },
    { triggers: ["tired","exhausted","exhaustion","fatigue","fatigued","weary","weariness","burnt out","burnout","drained","spent","sleepy","drowsy","drowsiness","lethargic","lethargy"],
      word: "Exhausted / Weary",
      explain: "Fatigue has many names: 'tired' (English), 'müde' (German), 'fatigué' (French), 'tsukareta' (疲れた, Japanese). Try describing the *kind* of tiredness — is it your body, your soul, your patience? The tiredness of caring too much?" },
    { triggers: ["jealous","jealousy","envious","envy","covetous","resentful","begrudging","green with envy"],
      word: "Jealous / Envious",
      explain: "Jealousy has words everywhere: 'jealous' (English), 'jaloux' (French), 'eifersüchtig' (German). Try describing the specific *flavor* — jealousy of someone's life? Their ease? Their ability to not care?" },
    { triggers: ["grateful","gratitude","thankful","thankfulness","blessed","appreciative","appreciation"],
      word: "Grateful / Thankful",
      explain: "Gratitude is universal: 'grateful' (English), 'reconnaissant' (French), 'dankbar' (German). Try describing the gratitude that *hurts* — the kind mixed with guilt, or with the knowledge that what you have is fragile." },
    { triggers: ["confused","confusion","bewildered","perplexed","puzzled","disoriented","baffled","lost","clueless","befuddled"],
      word: "Confused / Disoriented",
      explain: "Confusion has names: 'confused' (English), 'verwirrt' (German), 'confus' (French). Try describing the *shape* of the confusion — is it fog? A fork in the road? The feeling of reading a map of a country you've never heard of?" },
    { triggers: ["hungry","hunger","starving","famished","ravenous"],
      word: "Hungry",
      explain: "Hunger is named in every language. Try describing a *metaphorical* hunger — a hunger for meaning, for connection, for something you can't buy or eat." },
    { triggers: ["love","loving","in love","amorous","infatuated","infatuation","smitten","adoration","adore","affection","affectionate","enamored","devotion","romantic"],
      word: "Love / Amour",
      explain: "Love has thousands of words: 'love' (English), 'amour' (French), 'Liebe' (German), 'ai' (愛, Japanese), 'ishq' (عشق, Arabic). Try describing the *unnamed corner* of love — the fear inside it, the moment it changed, the part that surprises you." },
    { triggers: ["nervous","anxiety","anxious","nervousness","worried","worry","worrying","apprehensive","uneasy","unease","tense","tension","on edge","stressed","stress","overthinking"],
      word: "Nervous / Anxious",
      explain: "Anxiety is widely named: 'nervous' (English), 'Angst' (German — existential anxiety), 'inquiet' (French). Try describing where in your *body* the feeling lives, and what it whispers." },
    { triggers: ["disgusted","disgust","revolted","repulsed","repulsion","grossed out","nauseous","nausea","sick","sickened","appalled","abhorrence","eww","ew","gross","yuck","icky"],
      word: "Disgusted / Repulsed",
      explain: "Disgust has names everywhere. Try describing the *moral* disgust, the aesthetic revulsion, or the self-directed kind — those are the unnamed corners." },
    { triggers: ["excited","excitement","thrilled","pumped","hyped","eager","anticipation","anticipating","giddy","elated","stoked","exhilarated","enthusiasm","enthusiastic"],
      word: "Excited / Thrilled",
      explain: "Excitement is universal: 'excited' (English), 'excité' (French), 'aufgeregt' (German). Try describing the *specific anticipation* — what are you excited for, and what's the tiny fear mixed into it?" },
    { triggers: ["proud","pride","prideful","accomplished","triumphant","self-satisfied","smug","victorious"],
      word: "Proud / Prideful",
      explain: "Pride is widely named: 'proud' (English), 'fier' (French), 'stolz' (German). Try describing the *complex* pride — the kind that surprises you, or the pride that makes you tearful." },
    { triggers: ["guilty","guilt","remorse","remorseful","regret","regretful","ashamed","shame","shameful","culpable"],
      word: "Guilty / Ashamed",
      explain: "Guilt is named widely: 'guilty' (English), 'coupable' (French), 'schuldig' (German). Try describing the *texture* of the guilt — is it sharp or dull? Does it come in waves or sit constant?" },
    { triggers: ["nostalgic","nostalgia","missing the past","miss the old days","reminiscing","wistful"],
      word: "Nostalgic / Wistful",
      explain: "Nostalgia already has a name (Greek: νόσταλγία — the pain of return). Try describing the *specific* memory that haunts you, and what about *now* makes it ache." },
    { triggers: ["embarrassed","embarrassment","humiliated","humiliation","mortified","awkward","cringe","cringy","self-conscious"],
      word: "Embarrassed / Mortified",
      explain: "Embarrassment is universally named. Try describing the *specific social geometry* of the moment — who was watching, what you wished you could undo, the echo it left." },
  ];

  /* Check If Input Is A Common Emotion */
  function checkCommonEmotion(text) {
    const lower = text.toLowerCase().trim();
    const words = lower.split(/\s+/);

    for (const entry of COMMON_WORDS) {
      for (const trigger of entry.triggers) {
        // Exact match
        if (lower === trigger) return entry;
        // Common patterns: "i feel X", "feeling X", "the feeling of X", "i am X", "what is X"
        const patterns = [
          "i feel " + trigger, "i'm feeling " + trigger, "feeling " + trigger,
          "i am " + trigger, "i'm " + trigger, "i am feeling " + trigger,
          "the feeling of " + trigger, "a feeling of " + trigger,
          "feeling of " + trigger, trigger + " af", "so " + trigger,
          "very " + trigger, "really " + trigger, "extremely " + trigger,
          "what is " + trigger, "what's " + trigger,
          "i feel so " + trigger, "i'm so " + trigger
        ];
        for (const p of patterns) {
          if (lower === p || lower === p + ".") return entry;
        }
        // Short input that contains the trigger word (under 50 chars, under 8 words)
        if (lower.length < 50 && words.length <= 8 && lower.includes(trigger)) {
          return entry;
        }
      }
    }
    return null;
  }


  /* Phoneme Inventories By Language Family */
  const PHONEME_SETS = {
    Romance: {
      onsets: ["b","d","f","l","m","n","p","r","s","t","v","br","cr","fl","fr","gr","pr","tr","bl","cl"],
      nuclei: ["a","e","i","o","u","ei","ou","ai"],
      codas: ["","r","l","n","s","m"],
      flavor: "flowing"
    },
    Germanic: {
      onsets: ["b","d","f","g","h","k","l","m","n","r","s","t","v","w","z","br","dr","fr","gr","st","tr"],
      nuclei: ["a","e","i","o","u","ei","au","ie"],
      codas: ["","n","r","l","t","s","nd","rn","ng"],
      flavor: "grounded"
    },
    Slavic: {
      onsets: ["b","d","g","k","l","m","n","p","r","s","t","v","z","br","dr","gr","kr","pr","sl","st","str","tr"],
      nuclei: ["a","e","i","o","u","ya","ye"],
      codas: ["","k","l","m","n","r","s","t","v","st"],
      flavor: "resonant"
    },
    Japonic: {
      onsets: ["","k","s","t","n","h","m","y","r","w","g","z","b","p","sh","ch"],
      nuclei: ["a","i","u","e","o"],
      codas: ["","n"],
      flavor: "delicate"
    },
    Semitic: {
      onsets: ["b","d","f","g","h","k","l","m","n","r","s","sh","t","w","y","z","kh"],
      nuclei: ["a","i","u","aa","ii","ai","au"],
      codas: ["","b","d","h","k","l","m","n","r","s","t"],
      flavor: "ancient"
    },
    Celtic: {
      onsets: ["b","c","d","f","g","l","m","n","p","r","s","t","br","cr","dr","gl","gr","sl","tr","th"],
      nuclei: ["a","e","i","o","u","ai","ei","ia","ea","ao"],
      codas: ["","ch","l","ll","n","nn","r","s","th"],
      flavor: "mystical"
    },
    "Indo-Aryan": {
      onsets: ["b","bh","ch","d","dh","g","gh","h","j","k","kh","l","m","n","p","r","s","sh","t","th","v","y"],
      nuclei: ["a","aa","i","ii","u","uu","e","ai","o","au"],
      codas: ["","k","l","m","n","r","s","t"],
      flavor: "transcendent"
    },
    Greek: {
      onsets: ["","b","d","f","g","k","l","m","n","p","r","s","t","th","v","z","ph"],
      nuclei: ["a","e","i","o","u","ei","ai","oi"],
      codas: ["","s","n","r","l","x"],
      flavor: "philosophical"
    },
    Austronesian: {
      onsets: ["b","d","g","h","k","l","m","n","ng","p","r","s","t","w","y"],
      nuclei: ["a","e","i","o","u","ai","au"],
      codas: ["","k","l","m","n","ng","r","t"],
      flavor: "gentle"
    },
    "Finno-Ugric": {
      onsets: ["h","j","k","l","m","n","p","r","s","t","v"],
      nuclei: ["a","e","i","o","u","aa","ee","oo","uu"],
      codas: ["","k","l","m","n","r","s","t","kk","nn"],
      flavor: "stark"
    },
    Turkic: {
      onsets: ["b","d","f","g","h","k","l","m","n","p","r","s","t","v","y","z"],
      nuclei: ["a","e","i","o","u"],
      codas: ["","k","l","m","n","r","s","t","z"],
      flavor: "harmonic"
    },
    Koreanic: {
      onsets: ["","g","n","d","r","m","b","s","j","ch","k","t","p","h"],
      nuclei: ["a","eo","o","u","eu","i","ae","e"],
      codas: ["","k","n","l","m","p","ng"],
      flavor: "balanced"
    },
    Bantu: {
      onsets: ["b","d","f","g","h","j","k","l","m","n","ng","p","r","s","sh","t","w","y","z","mb","nd"],
      nuclei: ["a","e","i","o","u"],
      codas: ["","a","i","u"],
      flavor: "rhythmic"
    }
  };

  /* Emotional-phonetic Mapping */
  const EMOTION_SOUND_MAP = {
    soft: {
      onsets: ["m","n","l","w","y","h","sh","f","v"],
      nuclei: ["i","e","u","ei","ai"],
      codas: ["","n","l","m"],
      syllables: [2,3]
    },
    deep: {
      onsets: ["d","b","g","k","v","r","dr","gr","br"],
      nuclei: ["o","u","a","au","aa"],
      codas: ["n","r","l","nd","ng","m"],
      syllables: [2,3]
    },
    sharp: {
      onsets: ["k","t","p","s","z","st","tr","sk"],
      nuclei: ["a","i","e","ai","ei"],
      codas: ["k","t","s","r"],
      syllables: [2,3]
    },
    warm: {
      onsets: ["m","b","g","w","h","n","r","l"],
      nuclei: ["a","o","u","ai","au"],
      codas: ["","n","m","r","l"],
      syllables: [2,3]
    },
    light: {
      onsets: ["f","l","h","sh","y","w","fl","sl"],
      nuclei: ["i","e","ei","ai","a"],
      codas: ["","n","l","s"],
      syllables: [2,3]
    },
    dark: {
      onsets: ["v","z","th","dr","gr","sk","d","g"],
      nuclei: ["o","u","a","au"],
      codas: ["r","n","th","k","s"],
      syllables: [2,3]
    },
    bittersweet: {
      onsets: ["m","s","l","n","v","r","sh"],
      nuclei: ["a","e","o","ai","ei"],
      codas: ["","n","r","l","s","m"],
      syllables: [3,4]
    },
    restless: {
      onsets: ["t","k","s","p","r","st","tr"],
      nuclei: ["i","e","a","ei"],
      codas: ["k","t","s","r","n"],
      syllables: [2,3]
    }
  };

  /* Helpers */
  function seededRng(seed) {
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
    return () => {
      h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
      h = Math.imul(h ^ (h >>> 13), 0x45d9f3b);
      h ^= h >>> 16;
      return (h >>> 0) / 4294967296;
    };
  }

  function pick(arr, rng) { return arr[Math.floor(rng() * arr.length)]; }

  function pickWeighted(preferred, fallback, rng) {
    const overlap = preferred.filter(p => fallback.includes(p));
    if (overlap.length > 0 && rng() < 0.65) return pick(overlap, rng);
    return pick(fallback, rng);
  }


  const isVowel = c => "aeiouäöüy".includes(c);

  /* Analyze Emotional Tone */
  function analyzeEmotion(text) {
    const lower = text.toLowerCase();
    const words = lower.split(/\s+/);
    const scores = { soft:0, deep:0, sharp:0, warm:0, light:0, dark:0, bittersweet:0, restless:0 };

    const map = {
      soft: ["gentle","soft","quiet","tender","whisper","delicate","subtle","faint","mild","feather","silk","breeze","murmur","petal","barely","linger","trace","flutter"],
      deep: ["deep","profound","vast","heavy","gravity","weight","ocean","abyss","core","root","soul","bone","ancient","overwhelming","immense","beneath"],
      sharp: ["sudden","sharp","jolt","pierce","cut","sting","flash","shock","bolt","snap","crack","break","shatter","strike","instant","split","sever"],
      warm: ["warm","cozy","comfort","safe","home","embrace","hold","blanket","sun","glow","hearth","shelter","nest","soothe","calm","wrap","protect","familiar"],
      light: ["light","airy","float","drift","cloud","sky","ethereal","wispy","shimmer","sparkle","bubble","dance","lift","rise","dissolve","evaporate"],
      dark: ["dark","shadow","night","void","black","hollow","haunt","eerie","ghost","twilight","dread","gloom","murky","lurk","chasm","abyss","empty"],
      bittersweet: ["bittersweet","mixed","paradox","contradiction","beautiful pain","joy sorrow","both","yet","simultaneously","strange mix","happy sad","nostalgic"],
      restless: ["restless","anxious","pace","fidget","uneasy","itch","tense","nervous","churn","turmoil","unsettled","racing","edge","itching","crawling"]
    };

    for (const w of words) {
      for (const [emotion, keys] of Object.entries(map)) {
        if (keys.some(k => w.includes(k) || k.includes(w))) scores[emotion]++;
      }
    }

    // Phrase bonuses
    if (lower.includes("but also") || lower.includes("and yet") || lower.includes("at the same time")) scores.bittersweet += 3;
    if (lower.includes("can't explain") || lower.includes("no words") || lower.includes("hard to describe")) scores.deep += 2;
    if (lower.includes("used to") || lower.includes("remember when")) { scores.bittersweet += 2; scores.warm += 1; }
    if (lower.includes("alone") || lower.includes("no one")) { scores.deep++; scores.dark++; }
    if (text.length > 200) scores.deep++;
    if (text.length < 50) scores.sharp++;
    if (text.split(",").length > 3) scores.bittersweet++;

    const sorted = Object.entries(scores).sort((a,b) => b[1]-a[1]);
    return { primary: sorted[0][0], secondary: sorted[1][1] > 0 ? sorted[1][0] : sorted[0][0], scores };
  }

  /* Find Language Families For Input */
  function findFamilies(text) {
    const lower = text.toLowerCase();
    const famScores = {};
    for (const [, data] of Object.entries(EMOTIONAL_CLUSTERS)) {
      let s = 0;
      for (const kw of data.keywords) { if (lower.includes(kw)) s++; }
      if (s > 0) for (const f of data.families) famScores[f] = (famScores[f]||0) + s;
    }
    const sorted = Object.entries(famScores).sort((a,b) => b[1]-a[1]);
    if (sorted.length === 0) {
      if (lower.length < 80) return ["Japonic","Celtic"];
      if (lower.length > 200) return ["Indo-Aryan","Slavic","Romance"];
      return ["Greek","Romance","Celtic"];
    }
    return sorted.slice(0,3).map(s => s[0]);
  }

  /* Generate Syllable */
  function makeSyllable(phonemes, emotionProfile, rng) {
    const onset = pickWeighted(emotionProfile.onsets, phonemes.onsets, rng);
    const nucleus = pickWeighted(emotionProfile.nuclei, phonemes.nuclei, rng);
    const coda = pickWeighted(emotionProfile.codas, phonemes.codas, rng);
    return onset + nucleus + coda;
  }

  /* Generate Word */
  function generateWord(text) {
    const emotion = analyzeEmotion(text);
    const families = findFamilies(text);
    const rng = seededRng(text.trim().toLowerCase());
    
    const pf = families[0], sf = families.length > 1 ? families[1] : families[0];
    const pp = PHONEME_SETS[pf] || PHONEME_SETS.Romance;
    const sp = PHONEME_SETS[sf] || PHONEME_SETS.Celtic;
    const pe = EMOTION_SOUND_MAP[emotion.primary];
    const se = EMOTION_SOUND_MAP[emotion.secondary];

    const minS = pe.syllables[0], maxS = pe.syllables[pe.syllables.length-1];
    const sylCount = minS + Math.floor(rng() * (maxS - minS + 1));

    let syllables = [];
    for (let i = 0; i < sylCount; i++) {
      syllables.push(makeSyllable(i%2===0?pp:sp, i===0?pe:se, rng));
    }

    let word = syllables.join("");

    // Clean consonant clusters
    let clean = "", cRun = 0;
    for (let i = 0; i < word.length; i++) {
      if (isVowel(word[i])) { cRun=0; clean+=word[i]; }
      else { cRun++; clean += cRun<=2 ? word[i] : "a"+word[i]; if(cRun>2) cRun=1; }
    }
    word = clean;

    // Soften ending
    if (!isVowel(word[word.length-1]) && rng() < 0.5) {
      word += pick(["a","e","i","o"], rng);
    }

    // Capitalize
    word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    // Length bounds
    if (word.length < 4) word += makeSyllable(pp, pe, rng);
    if (word.length > 11) {
      let cut = 9;
      for (let i = 7; i < Math.min(word.length,11); i++) { if(isVowel(word[i])){cut=i+1;break;} }
      word = word.slice(0, cut);
    }
    word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    // Avoid common English
    const banned = ["the","and","for","are","but","not","you","all","can","had","her","was","one","our","out","day","get","has","him","his","how","its","may","new","now","old","see","way","who","did","let","say","she","too","use","man","men","run","sit","set"];
    if (banned.includes(word.toLowerCase())) {
      word += makeSyllable(sp, se, rng);
      word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return { word, families: [pf,sf], emotion };
  }

  /* Ipa Pronunciation */
  function makePronunciation(word) {
    const lower = word.toLowerCase();
    const vMap = {"a":"a","e":"ɛ","i":"i","o":"o","u":"u"};
    const cMap = {"sh":"ʃ","ch":"tʃ","th":"θ","ph":"f","gh":"ɣ","kh":"x","ng":"ŋ","ts":"ts","dh":"ð","bh":"bʱ"};

    let tokens = [], i = 0;
    while (i < lower.length) {
      if (i < lower.length-1) {
        const di = lower.substring(i,i+2);
        if (cMap[di]) { tokens.push({ipa:cMap[di],v:false}); i+=2; continue; }
        if (isVowel(lower[i]) && lower[i]===lower[i+1]) { tokens.push({ipa:(vMap[lower[i]]||lower[i])+"ː",v:true}); i+=2; continue; }
      }
      const c = lower[i];
      if (vMap[c]) tokens.push({ipa:vMap[c],v:true});
      else if (isVowel(c)) tokens.push({ipa:c,v:true});
      else tokens.push({ipa:c,v:false});
      i++;
    }

    let result = "/", hadV = false;
    for (let t = 0; t < tokens.length; t++) {
      if (tokens[t].v) hadV = true;
      if (!tokens[t].v && hadV && t < tokens.length-1 && tokens[t+1] && tokens[t+1].v) result += ".";
      result += tokens[t].ipa;
    }
    return result + "/";
  }

  /* Etymology */
  function makeEtymology(families, emotion) {
    const names = families.map(f => {
      const data = LANGUAGE_FAMILIES[f];
      return data ? `${f} (${data.languages.slice(0,2).join(", ")})` : f;
    });
    const emoDesc = {soft:"gentle resonance",deep:"profound depth",sharp:"crystalline clarity",warm:"grounding warmth",light:"ethereal lightness",dark:"shadowed mystery",bittersweet:"complex duality",restless:"kinetic tension"};
    const p = emoDesc[emotion.primary]||"emotional truth";
    const s = emoDesc[emotion.secondary]||"nuanced feeling";
    return `Derived from the phonological patterns of ${names.join(" and ")} language families. Carries the ${p} of its primary emotional register${emotion.primary!==emotion.secondary?`, tempered by ${s}`:""}.`;
  }

  function makeRoots(families, emotion) {
    return families.map(f => {
      const d = LANGUAGE_FAMILIES[f];
      return d ? `${f}: ${d.emotionalProfile.slice(0,2).join(", ")}` : f;
    }).concat([`Emotional register: ${emotion.primary}`]).join(" · ");
  }

  /* Public Api */
  function nameTheUnnameable(description) {
    const r = generateWord(description);
    return {
      word: r.word,
      pronunciation: makePronunciation(r.word),
      definition: description.trim(),
      etymology: makeEtymology(r.families, r.emotion),
      roots: makeRoots(r.families, r.emotion),
      emotion: r.emotion,
      families: r.families,
      timestamp: Date.now()
    };
  }

  function findExistingMatch(description) {
    const lower = description.toLowerCase();
    const words = lower.split(/\s+/).filter(w => w.length > 2);
    let best = null, bestScore = 0;

    for (const entry of UNTRANSLATABLE_WORDS) {
      let score = 0;
      for (const kw of entry.keywords) {
        if (lower.includes(kw)) score++;
        for (const w of words) { if (kw.includes(w) && w.length > 3) score += 0.5; }
      }
      const norm = score / entry.keywords.length;
      if (norm > bestScore && norm >= 0.25) { bestScore = norm; best = entry; }
    }
    return bestScore >= 0.3 && best ? { match: best, confidence: bestScore } : null;
  }

  function getSearchLanguages() {
    const langs = [...new Set(UNTRANSLATABLE_WORDS.map(e => e.language))];
    const extra = ["Mandarin Chinese","Cantonese","Bengali","Punjabi","Tamil","Telugu","Swahili","Yoruba","Zulu","Vietnamese","Khmer","Mongolian","Tibetan","Nepali","Kurdish","Azerbaijani","Hungarian","Estonian","Romanian","Bulgarian","Croatian","Albanian","Basque","Icelandic","Quechua","Nahuatl","Maori","Samoan","Navajo","Cherokee","Ojibwe","Lakota","Guaraní"];
    for (const l of extra) if (!langs.includes(l)) langs.push(l);
    for (let i = langs.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [langs[i],langs[j]]=[langs[j],langs[i]]; }
    return langs;
  }

  return { nameTheUnnameable, findExistingMatch, checkCommonEmotion, getSearchLanguages, analyzeEmotion };
})();
