const articleTranslations = {
  zh: {
    eyebrow: "星座文章与故事",
    title: "从故事里认识 12 星座",
    intro: "这里收集带一点故事性、共鸣感和生活观察的星座短文。每一篇都对应一个星座，适合轻松阅读，也适合分享给身边的人。",
    readMore: "阅读全文"
  },
  en: {
    eyebrow: "Zodiac Articles and Stories",
    title: "Know the 12 signs through stories",
    intro: "This page collects short zodiac essays with story, emotion, and everyday reflection. Each article focuses on one sign and is easy to read or share.",
    readMore: "Read More"
  }
};

const articleData = [
  {
    id: "aries",
    symbol: "♈",
    zh: {
      tag: "白羊座 Aries",
      title: "白羊座：那个先说“我来”的人",
      excerpt: "白羊的勇敢不是不害怕，而是害怕也会先往前走一步。",
      paragraphs: [
        "有一种人，大家还在犹豫的时候，他已经站起来说：“我来。”这很像白羊座。白羊不是永远有把握，也不是从不害怕，只是他们心里有一团火，觉得人生不能总等到万事俱备才开始。",
        "白羊的可爱之处，是他们的直接和真。喜欢就是喜欢，不满就是不满，很多情绪写在脸上。这样的人有时会显得冲动，但也正因为不太会绕弯，才让人感到一种清亮的生命力。",
        "如果你是白羊，请记得：勇敢不是一直冲锋，也包括承认自己累了。如果你身边有白羊，请珍惜那个愿意为你先迈一步的人，也温柔提醒他，慢一点并不等于输。"
      ]
    },
    en: {
      tag: "Aries",
      title: "Aries: The One Who Says, “I’ll Do It”",
      excerpt: "Aries courage is not the absence of fear; it is taking one step forward anyway.",
      paragraphs: [
        "Some people stand up while everyone else is still hesitating and say, “I’ll do it.” That is very Aries. Aries is not always certain, and they are not fearless. They simply carry a fire that does not want life to wait forever.",
        "What makes Aries lovable is their directness. When they care, it shows. When they are upset, it shows too. This can look impulsive, but it also gives them a bright and honest life force.",
        "If you are Aries, remember that courage also includes admitting you are tired. If you love an Aries, value the person who takes the first step for you, and gently remind them that slowing down is not losing."
      ]
    }
  },
  {
    id: "taurus",
    symbol: "♉",
    zh: {
      tag: "金牛座 Taurus",
      title: "金牛座：把爱藏在日常里",
      excerpt: "金牛的浪漫常常不是大声告白，而是稳定地出现。",
      paragraphs: [
        "金牛座的爱，有时像一盏每天都会亮起的灯。不一定惊天动地，却让人知道：回头的时候，总有一个地方是稳的。",
        "他们不轻易改变，也不轻易把承诺说出口。可是一旦认定了，就会用很实际的方式照顾你：记得你喜欢吃什么，提醒你别太累，把混乱的日子慢慢变得可落地。",
        "如果你是金牛，请别觉得自己的慢热无趣。这个世界已经太快了，能稳定地爱、稳定地生活，是一种难得的能力。"
      ]
    },
    en: {
      tag: "Taurus",
      title: "Taurus: Love Hidden in Everyday Life",
      excerpt: "Taurus romance is often not loud confession, but steady presence.",
      paragraphs: [
        "Taurus love can feel like a lamp that turns on every evening. It may not be dramatic, but it tells you that somewhere in life, there is steadiness.",
        "They do not change easily, and they do not promise lightly. But once they choose something, they care in practical ways: remembering what you like, reminding you to rest, making messy days more livable.",
        "If you are Taurus, do not mistake your slow warmth for dullness. In a world that moves too fast, steady love is a rare gift."
      ]
    }
  },
  {
    id: "gemini",
    symbol: "♊",
    zh: {
      tag: "双子座 Gemini",
      title: "双子座：脑海里有很多扇窗",
      excerpt: "双子不是善变，而是同时看见了太多可能性。",
      paragraphs: [
        "双子座的脑海像一栋有很多窗的房子。每一扇窗外都有不同的风景，所以他们总想看看别处还有什么。",
        "别人可能说他们善变，但双子很多时候只是好奇。他们害怕被一种答案困住，也害怕世界变得太沉闷。聊天、学习、分享新发现，是他们和生活保持连接的方式。",
        "如果你是双子，请给自己的好奇心一个方向。风可以去很多地方，但当它愿意停留，也能吹动一整片海。"
      ]
    },
    en: {
      tag: "Gemini",
      title: "Gemini: A Mind Full of Windows",
      excerpt: "Gemini is not simply changeable; they see many possibilities at once.",
      paragraphs: [
        "A Gemini mind is like a house with many windows. Every window shows a different view, and naturally they want to know what else is out there.",
        "People may call them changeable, but often Gemini is simply curious. They dislike being trapped by one answer and fear a world that becomes too dull. Talking, learning, and sharing discoveries keep them connected to life.",
        "If you are Gemini, give your curiosity a direction. Wind can travel everywhere, but when it chooses to stay, it can move the whole sea."
      ]
    }
  },
  {
    id: "cancer",
    symbol: "♋",
    zh: {
      tag: "巨蟹座 Cancer",
      title: "巨蟹座：记得你没说出口的事",
      excerpt: "巨蟹的敏感，是把别人忽略的小事放在心上。",
      paragraphs: [
        "巨蟹座常常记得一些别人以为没人注意的小事。你随口说过的一句累，他可能过几天还记得；你表情里的变化，他可能比你自己更早察觉。",
        "这种敏感让巨蟹很会照顾人，也让他们容易受伤。他们把关系看得很重，所以有时会害怕被冷落、被误解，甚至把委屈藏起来。",
        "如果你是巨蟹，请记得照顾别人之前，也要给自己一个温暖的家。你不需要靠一直付出来证明自己值得被爱。"
      ]
    },
    en: {
      tag: "Cancer",
      title: "Cancer: Remembering What You Didn’t Say",
      excerpt: "Cancer sensitivity is noticing the small things others miss.",
      paragraphs: [
        "Cancer often remembers small things people assume no one noticed. A tired sentence you said casually may stay with them for days. A change in your face may reach them before you can explain it.",
        "This sensitivity makes Cancer caring, but also easily hurt. They value bonds deeply, so they may fear being ignored or misunderstood, and sometimes hide their sadness.",
        "If you are Cancer, remember to build a warm home inside yourself too. You do not have to keep giving to prove you deserve love."
      ]
    }
  },
  {
    id: "leo",
    symbol: "♌",
    zh: {
      tag: "狮子座 Leo",
      title: "狮子座：想被看见，也想照亮别人",
      excerpt: "狮子的光芒，不只是为了自己闪耀，也常常想温暖别人。",
      paragraphs: [
        "狮子座常被说爱表现，但真正的狮子，并不只是想站在中心。他们更想确认自己的热情有被看见，自己的存在能给别人带来力量。",
        "狮子的骄傲有时像盔甲。被忽视的时候，他们可能装作不在意；被伤害的时候，他们也可能用更大的声音掩盖脆弱。",
        "如果你是狮子，请相信：你不必永远强大才值得被爱。真正喜欢你的人，会看见你的光，也愿意接住你偶尔暗下来的时刻。"
      ]
    },
    en: {
      tag: "Leo",
      title: "Leo: Wanting to Be Seen, and to Warm Others",
      excerpt: "Leo light is not only for shining; it often wants to give warmth.",
      paragraphs: [
        "Leo is often called attention-loving, but a true Leo does not only want the center. They want to know that their passion is seen and that their presence gives others strength.",
        "Leo pride can be armor. When ignored, they may pretend not to care. When hurt, they may cover softness with a louder voice.",
        "If you are Leo, remember that you do not have to be powerful all the time to be loved. The right people will see your light and still stay when it dims."
      ]
    }
  },
  {
    id: "virgo",
    symbol: "♍",
    zh: {
      tag: "处女座 Virgo",
      title: "处女座：把混乱整理成可以呼吸的样子",
      excerpt: "处女座的挑剔背后，常常是想让一切变得更好。",
      paragraphs: [
        "处女座像一个愿意蹲下来捡起细节的人。别人只看到结果，他们会看到哪里可以更顺、哪里还需要修补。",
        "他们的严格，有时让人压力大，也让自己压力更大。因为处女座常常不是只要求别人，他们对自己的要求更深、更安静。",
        "如果你是处女座，请记得：人生不是等到完美才开始。你已经做得很好了，有些凌乱不代表失败，只代表你正在真实地生活。"
      ]
    },
    en: {
      tag: "Virgo",
      title: "Virgo: Turning Mess Into Something Breathable",
      excerpt: "Behind Virgo criticism is often the wish to make things better.",
      paragraphs: [
        "Virgo is like someone willing to kneel down and pick up the details. Others see the result; Virgo sees what could flow better and what still needs care.",
        "Their standards can pressure others, but they pressure themselves even more. Virgo often carries quiet expectations that are heavier than anyone sees.",
        "If you are Virgo, remember that life does not have to be perfect before it begins. Some mess is not failure; it means you are living honestly."
      ]
    }
  },
  {
    id: "libra",
    symbol: "♎",
    zh: {
      tag: "天秤座 Libra",
      title: "天秤座：在关系里寻找刚刚好的距离",
      excerpt: "天秤不是没有主见，而是太清楚每个选择都会影响关系。",
      paragraphs: [
        "天秤座常常站在两个人之间，试着让空气不要太僵。他们会考虑别人的感受，也会努力让场面更好看、更舒服。",
        "有时别人说天秤犹豫，其实他们只是看见了太多立场。每一个选择都会改变关系的平衡，所以他们才会反复衡量。",
        "如果你是天秤，请练习把自己的声音也放进天平里。真正的和谐不是所有人都满意，而是你也没有在关系里消失。"
      ]
    },
    en: {
      tag: "Libra",
      title: "Libra: Finding the Right Distance in Relationships",
      excerpt: "Libra is not without opinion; they know every choice affects connection.",
      paragraphs: [
        "Libra often stands between people, trying to soften the air. They consider feelings and try to make the room more graceful, fair, and comfortable.",
        "People may call Libra indecisive, but often they simply see too many positions. Every choice shifts the balance of a relationship, so they weigh it carefully.",
        "If you are Libra, practice placing your own voice on the scale too. Real harmony is not everyone being pleased while you disappear."
      ]
    }
  },
  {
    id: "scorpio",
    symbol: "♏",
    zh: {
      tag: "天蝎座 Scorpio",
      title: "天蝎座：越沉默，越在意真实",
      excerpt: "天蝎的深情常常很安静，但一旦相信，就很认真。",
      paragraphs: [
        "天蝎座不太喜欢停在表面。他们想知道一句话背后的动机，一个笑容背后的情绪，一段关系里真正没有说出口的部分。",
        "这种深度让天蝎很有洞察力，也让他们不容易轻易信任。不是他们冷，而是他们知道信任一旦给出去，就会很认真。",
        "如果你是天蝎，请允许自己慢慢来。保护自己很重要，但也别让所有门都关上。真正值得的人，会尊重你的深度，也不会急着闯进来。"
      ]
    },
    en: {
      tag: "Scorpio",
      title: "Scorpio: The Quieter They Are, the More They Care About Truth",
      excerpt: "Scorpio depth is often quiet, but once they trust, they mean it.",
      paragraphs: [
        "Scorpio rarely wants to stay on the surface. They want to know the motive behind a sentence, the emotion behind a smile, and the unspoken part of a relationship.",
        "This depth gives Scorpio insight, but it also makes trust slow. They are not simply cold; they know that once trust is given, it matters deeply.",
        "If you are Scorpio, let yourself take time. Protection matters, but do not close every door. The right people will respect your depth and will not rush their way in."
      ]
    }
  },
  {
    id: "sagittarius",
    symbol: "♐",
    zh: {
      tag: "射手座 Sagittarius",
      title: "射手座：心里总有一条远方的路",
      excerpt: "射手追求自由，不是为了离开谁，而是为了不弄丢自己。",
      paragraphs: [
        "射手座心里常常有一条路，通往没去过的地方、没学过的知识、没想明白的问题。他们需要远方，不一定是地理上的，也可能是精神上的。",
        "他们害怕被困住，害怕日子只剩重复。可射手的自由并不是不负责任，而是想在更大的世界里找到自己真正相信的东西。",
        "如果你是射手，请记得：远方很重要，身边的人也重要。能带着承诺去自由，才是更成熟的勇气。"
      ]
    },
    en: {
      tag: "Sagittarius",
      title: "Sagittarius: A Road Toward the Distance",
      excerpt: "Sagittarius seeks freedom not to leave everyone, but to stay true to themselves.",
      paragraphs: [
        "Sagittarius often carries a road inside, leading to places unseen, knowledge unlearned, and questions not yet answered. Their distance is not always geographic; it can be spiritual.",
        "They fear being trapped and fear days that become only repetition. But Sagittarius freedom is not always irresponsibility. It is the search for something they truly believe in.",
        "If you are Sagittarius, remember that the horizon matters, and so do the people nearby. Freedom with commitment is a deeper kind of courage."
      ]
    }
  },
  {
    id: "capricorn",
    symbol: "♑",
    zh: {
      tag: "摩羯座 Capricorn",
      title: "摩羯座：慢慢往上走的人",
      excerpt: "摩羯的沉稳背后，常常藏着一个不想让人失望的自己。",
      paragraphs: [
        "摩羯座像一个慢慢爬山的人。他们不一定说很多豪言壮语，但心里知道自己要往哪里走，也知道每一步都要付出代价。",
        "他们习惯承担，习惯把情绪放到后面。很多摩羯不是没有脆弱，只是太早学会了先把事情做好。",
        "如果你是摩羯，请记得：你不是只有成功时才值得被爱。偶尔停下来、承认累了，也不会让你之前走过的路失去意义。"
      ]
    },
    en: {
      tag: "Capricorn",
      title: "Capricorn: The One Who Climbs Slowly",
      excerpt: "Behind Capricorn steadiness is often someone who does not want to disappoint others.",
      paragraphs: [
        "Capricorn is like someone climbing a mountain slowly. They may not make grand speeches, but they know where they are going and understand that each step has a cost.",
        "They are used to carrying responsibility and placing feelings later. Many Capricorns are not without softness; they simply learned early to get things done first.",
        "If you are Capricorn, remember that you are not lovable only when you succeed. Resting and admitting tiredness do not erase the road you have already climbed."
      ]
    }
  },
  {
    id: "aquarius",
    symbol: "♒",
    zh: {
      tag: "水瓶座 Aquarius",
      title: "水瓶座：站在人群里，也保留自己的宇宙",
      excerpt: "水瓶的特别，不是故意不同，而是不想背叛真实的想法。",
      paragraphs: [
        "水瓶座常常像站在人群里，却同时保留着自己的宇宙。他们可以关心集体，也可以保持距离；可以很友好，也需要独处。",
        "他们不喜欢被定义，因为定义太窄。水瓶在意的是可能性、未来、规则之外的路，以及人是否能更自由地成为自己。",
        "如果你是水瓶，请记得：你的独特不需要一直解释。真正懂你的人，不会要求你变普通才靠近你。"
      ]
    },
    en: {
      tag: "Aquarius",
      title: "Aquarius: Keeping Their Own Universe in the Crowd",
      excerpt: "Aquarius is not different on purpose; they simply do not want to betray their real thoughts.",
      paragraphs: [
        "Aquarius can stand in a crowd while keeping a private universe inside. They may care about the collective and still need distance. They can be friendly and still need solitude.",
        "They dislike being defined because definitions feel too narrow. Aquarius cares about possibility, the future, paths outside old rules, and whether people can become freer versions of themselves.",
        "If you are Aquarius, remember that your uniqueness does not always need explanation. The right people will not ask you to become ordinary before they come close."
      ]
    }
  },
  {
    id: "pisces",
    symbol: "♓",
    zh: {
      tag: "双鱼座 Pisces",
      title: "双鱼座：把世界听成一首歌",
      excerpt: "双鱼的温柔不是脆弱，而是还愿意相信感受有意义。",
      paragraphs: [
        "双鱼座像能听见世界背景音乐的人。他们会被一句话打动，被一个眼神影响，也会在别人还没察觉的时候感到气氛变了。",
        "这种柔软有时让双鱼受伤，因为他们太容易把别人的情绪放进自己心里。但也正是这种能力，让他们拥有想象力、共情和疗愈他人的力量。",
        "如果你是双鱼，请记得：边界不是冷漠。保护好自己，才不会让你的温柔被消耗到失去光。"
      ]
    },
    en: {
      tag: "Pisces",
      title: "Pisces: Hearing the World Like a Song",
      excerpt: "Pisces softness is not weakness; it is the choice to believe feelings matter.",
      paragraphs: [
        "Pisces is like someone who hears the background music of the world. A sentence can move them, a glance can affect them, and they may sense a shift in atmosphere before others notice.",
        "This softness can hurt Pisces because they may carry other people's emotions inside. But the same ability gives them imagination, empathy, and the power to comfort others.",
        "If you are Pisces, remember that boundaries are not coldness. Protecting yourself keeps your kindness from being used up until it loses its light."
      ]
    }
  }
];

let articleLang = "zh";

function trackArticleEvent(eventName, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

function renderArticleTranslations() {
  document.documentElement.lang = articleLang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-article-i18n]").forEach((element) => {
    element.textContent = articleTranslations[articleLang][element.dataset.articleI18n];
  });
}

function renderArticleCards() {
  const grid = document.querySelector("#article-grid");
  grid.innerHTML = articleData.map((article) => {
    const content = article[articleLang];
    return `
      <article class="article-card">
        <span class="article-symbol" aria-hidden="true">${article.symbol}</span>
        <p class="article-tag">${content.tag}</p>
        <h2>${content.title}</h2>
        <p>${content.excerpt}</p>
        <button type="button" class="read-button" data-article-open="${article.id}">
          ${articleTranslations[articleLang].readMore}
        </button>
      </article>
    `;
  }).join("");
  document.querySelectorAll("[data-article-open]").forEach((button) => {
    button.addEventListener("click", () => openArticle(button.dataset.articleOpen));
  });
}

function openArticle(articleId) {
  const article = articleData.find((item) => item.id === articleId);
  const content = article[articleLang];
  document.querySelector("#reader-tag").textContent = content.tag;
  document.querySelector("#reader-title").textContent = content.title;
  document.querySelector("#reader-body").innerHTML = content.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  document.querySelector("#article-reader").hidden = false;
  document.querySelector("#article-reader").scrollIntoView({ behavior: "smooth", block: "start" });
  trackArticleEvent("article_open", {
    article_id: articleId,
    zodiac_name: article.en.tag,
    language: articleLang
  });
}

document.querySelectorAll("[data-article-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    articleLang = button.dataset.articleLang;
    document.querySelectorAll("[data-article-lang]").forEach((item) => {
      item.classList.toggle("active", item.dataset.articleLang === articleLang);
    });
    renderArticleTranslations();
    renderArticleCards();
    document.querySelector("#article-reader").hidden = true;
  });
});

document.querySelector("#article-close").addEventListener("click", () => {
  document.querySelector("#article-reader").hidden = true;
});

renderArticleTranslations();
renderArticleCards();
