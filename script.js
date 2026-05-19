const translations = {
  zh: {
    brand: "星座基础分析",
    navHome: "首页",
    navZodiac: "星座",
    welcomeEyebrow: "欢迎来到星座空间",
    welcomeTitle: "认识宇宙，也认识自己",
    welcomeText: "在这里轻松认识 12 星座，看看自己和身边的人有哪些有趣的性格线索。",
    enterSite: "进入星座分析",
    tiktokLink: "TikTok 橱窗甄选",
    googleLink: "Google 搜索",
    today: "今日时间",
    eyebrow: "12 星座 · 基础性格 · 中英文",
    heroTitle: "选择你的星座，查看基础分析",
    heroText: "认识宇宙，认识自己的星座，认识自己的周围的人。",
    choose: "选择星座",
    zodiacTitle: "12 星座",
    basicAnalysis: "基础分析",
    celebrities: "同星座知名人物",
    comingSoon: "完整分析即将开放",
    interestHint: "点击按钮可以用来观察用户兴趣，当前版本不会收费。",
    interestClicked: "已记录一次完整分析兴趣。当前版本不会收费。",
    footer: "© 2026 Zodiac Basics. All rights reserved. 本网站内容仅供娱乐和自我探索，不构成专业建议。"
  },
  en: {
    brand: "Zodiac Basics",
    navHome: "Home",
    navZodiac: "Signs",
    welcomeEyebrow: "Welcome to the zodiac space",
    welcomeTitle: "Know the universe, and know yourself",
    welcomeText: "Explore the 12 zodiac signs and discover simple clues about yourself and the people around you.",
    enterSite: "Enter Zodiac Analysis",
    tiktokLink: "TikTok Picks",
    googleLink: "Google Search",
    today: "Current Time",
    eyebrow: "12 Signs · Basic Traits · Chinese / English",
    heroTitle: "Choose your zodiac sign and read a simple analysis",
    heroText: "Understand the universe, your zodiac sign, and the people around you.",
    choose: "Choose Sign",
    zodiacTitle: "12 Zodiac Signs",
    basicAnalysis: "Basic Analysis",
    celebrities: "Famous people with this sign",
    comingSoon: "Full Analysis Coming Soon",
    interestHint: "Use this button to observe interest. This version does not charge money.",
    interestClicked: "Interest recorded once. This version does not charge money.",
    footer: "© 2026 Zodiac Basics. All rights reserved. Content is for entertainment and self-reflection only, not professional advice."
  }
};

const signs = [
  {
    id: "aries",
    symbol: "♈",
    zh: {
      name: "白羊座",
      date: "3月21日 - 4月19日",
      analysis: "白羊座直接、热情，行动力很强。你通常不喜欢把事情拖太久，一旦有目标就想马上开始。这个星座的优点是勇敢、坦率、敢尝试，适合开启新计划、带动气氛和面对挑战。需要留意的是，冲得太快时可能忽略细节，也可能让身边的人跟不上节奏。学会多停一步、听一听别人的想法，会让你的行动力更有方向。",
      celebrities: ["成龙", "Lady Gaga"]
    },
    en: {
      name: "Aries",
      date: "Mar 21 - Apr 19",
      analysis: "Aries is direct, warm, and full of momentum. You usually prefer action over waiting, and once a goal appears, you want to start quickly. This sign is brave, honest, and willing to try first, which makes it strong for new plans and challenges. The watchout is rushing past details or moving faster than others can follow. Pausing to listen can make your energy more focused.",
      celebrities: ["Jackie Chan", "Lady Gaga"]
    }
  },
  {
    id: "taurus",
    symbol: "♉",
    zh: {
      name: "金牛座",
      date: "4月20日 - 5月20日",
      analysis: "金牛座稳定、务实，重视安全感和长期价值。你适合把想法慢慢落到现实里，也懂得欣赏舒适、品质和生活的细节。这个星座往往有耐心，愿意长期投入，只要认定方向就不容易放弃。需要留意的是，太坚持自己的节奏时，可能会抗拒必要的变化。保持稳定很好，但给新机会留一点空间，会让你走得更远。",
      celebrities: ["周润发", "Dwayne Johnson"]
    },
    en: {
      name: "Taurus",
      date: "Apr 20 - May 20",
      analysis: "Taurus is steady, practical, and drawn to security and lasting value. You are good at turning ideas into reality step by step, and you notice comfort, quality, and the details of daily life. This sign often has patience and endurance. Once you commit, you rarely give up easily. The watchout is resisting change when it is actually useful. Stability is powerful, but leaving room for new opportunities helps you grow.",
      celebrities: ["Chow Yun-fat", "Dwayne Johnson"]
    }
  },
  {
    id: "gemini",
    symbol: "♊",
    zh: {
      name: "双子座",
      date: "5月21日 - 6月20日",
      analysis: "双子座好奇、灵活，擅长沟通和吸收信息。你很容易对新话题产生兴趣，也能快速看见事情的不同角度。这个星座适合学习、表达、社交、写作和需要反应速度的事情。你身上有轻盈的适应力，能让沉闷的环境变得活起来。需要留意的是，兴趣太多时容易分散精力。选择一两个真正重要的方向深入，会让你的聪明更有成果。",
      celebrities: ["张学友", "Marilyn Monroe"]
    },
    en: {
      name: "Gemini",
      date: "May 21 - Jun 20",
      analysis: "Gemini is curious, flexible, and strong at communication. You can become interested in new topics quickly and often see several sides of the same situation. This sign is suited for learning, writing, social connection, and fast-moving work. Your adaptability can make a dull room feel alive. The watchout is spreading your energy too thin. Choosing one or two important directions to go deeper will turn cleverness into results.",
      celebrities: ["Jacky Cheung", "Marilyn Monroe"]
    }
  },
  {
    id: "cancer",
    symbol: "♋",
    zh: {
      name: "巨蟹座",
      date: "6月21日 - 7月22日",
      analysis: "巨蟹座敏感、细腻，重视情感连接和归属感。你容易感受到别人没有说出口的情绪，也很在意家人、朋友和熟悉的环境。这个星座的力量来自照顾、记忆、保护和共情。你可以给别人很强的安全感。需要留意的是，不要把所有压力都藏在心里，也不要因为害怕受伤就关闭自己。清楚表达需求，会让关系更轻松。",
      celebrities: ["梁朝伟", "Tom Hanks"]
    },
    en: {
      name: "Cancer",
      date: "Jun 21 - Jul 22",
      analysis: "Cancer is sensitive, caring, and deeply connected to belonging. You often notice emotions that others do not say out loud, and you care about family, close friends, and familiar spaces. This sign draws strength from care, memory, protection, and empathy. You can make people feel safe. The watchout is hiding pressure inside or closing off because you fear getting hurt. Clear expression makes relationships easier.",
      celebrities: ["Tony Leung", "Tom Hanks"]
    }
  },
  {
    id: "leo",
    symbol: "♌",
    zh: {
      name: "狮子座",
      date: "7月23日 - 8月22日",
      analysis: "狮子座自信、慷慨，喜欢把热情带给身边的人。你适合表达、创造、领导和让一件事情变得有存在感。这个星座常常有舞台感，不一定是真的站在舞台上，而是愿意把生命力展现出来。你也很重视被认可和被真诚对待。需要留意的是，真正的影响力不仅来自光芒，也来自倾听。让别人也有空间发光，会让你更受欢迎。",
      celebrities: ["王菲", "Barack Obama"]
    },
    en: {
      name: "Leo",
      date: "Jul 23 - Aug 22",
      analysis: "Leo is confident, generous, and expressive. You are suited for creation, leadership, performance, and making things feel alive. This sign often has a sense of presence, not always on a literal stage, but through the courage to show life force. You also value recognition and sincere treatment. The watchout is remembering that influence comes from listening as well as shining. Giving others room to shine makes you even stronger.",
      celebrities: ["Faye Wong", "Barack Obama"]
    }
  },
  {
    id: "virgo",
    symbol: "♍",
    zh: {
      name: "处女座",
      date: "8月23日 - 9月22日",
      analysis: "处女座细致、理性，擅长整理问题和优化流程。你能发现别人忽略的细节，也很在意一件事是否真正有用、是否足够清楚。这个星座适合分析、服务、规划、写作和需要质量感的工作。你的优势是把混乱变得有秩序。需要留意的是，不必等到完美才开始，也不要把自我要求变成压力。适度放松，反而能让你表现更稳定。",
      celebrities: ["杨幂", "Beyonce"]
    },
    en: {
      name: "Virgo",
      date: "Aug 23 - Sep 22",
      analysis: "Virgo is thoughtful, analytical, and skilled at improving systems. You notice details others miss and care whether something is useful, clear, and well made. This sign is suited for analysis, service, planning, writing, and quality-focused work. Your gift is turning mess into order. The watchout is waiting for perfection before beginning or turning high standards into pressure. A little softness can make your performance more stable.",
      celebrities: ["Yang Mi", "Beyonce"]
    }
  },
  {
    id: "libra",
    symbol: "♎",
    zh: {
      name: "天秤座",
      date: "9月23日 - 10月22日",
      analysis: "天秤座温和、有审美，重视关系中的平衡与公平。你擅长协调不同意见，也很懂得观察气氛和人与人之间的距离。这个星座适合合作、设计、谈判、社交和需要判断美感的事情。你常常希望每个人都舒服。需要留意的是，过度顾及别人可能让自己的选择变模糊。学会说出真正想要的东西，会让你的关系更健康。",
      celebrities: ["刘德华", "Will Smith"]
    },
    en: {
      name: "Libra",
      date: "Sep 23 - Oct 22",
      analysis: "Libra is diplomatic, aesthetic, and drawn to balance and fairness. You are good at harmonizing different views and sensing the space between people. This sign is suited for cooperation, design, negotiation, social connection, and beauty-related choices. You often want everyone to feel comfortable. The watchout is losing your own preference while trying to please others. Saying what you truly want makes relationships healthier.",
      celebrities: ["Andy Lau", "Will Smith"]
    }
  },
  {
    id: "scorpio",
    symbol: "♏",
    zh: {
      name: "天蝎座",
      date: "10月23日 - 11月21日",
      analysis: "天蝎座深刻、专注，重视真实和情感深度。你不太满足于表面答案，常常想知道事情背后的真正原因。这个星座适合研究、洞察、转化和处理复杂情绪。你的恢复力很强，经历压力后也能重新站起来。需要留意的是，信任需要慢慢建立，也需要适度表达。不是所有事情都要独自消化，让可靠的人靠近会带来力量。",
      celebrities: ["马化腾", "Leonardo DiCaprio"]
    },
    en: {
      name: "Scorpio",
      date: "Oct 23 - Nov 21",
      analysis: "Scorpio is intense, focused, and drawn to emotional truth. You are rarely satisfied with surface answers and often want to understand the deeper reason behind things. This sign is suited for research, insight, transformation, and complex feelings. You have strong resilience and can rise again after pressure. The watchout is allowing trust to build slowly while still expressing yourself. You do not have to process everything alone.",
      celebrities: ["Pony Ma", "Leonardo DiCaprio"]
    }
  },
  {
    id: "sagittarius",
    symbol: "♐",
    zh: {
      name: "射手座",
      date: "11月22日 - 12月21日",
      analysis: "射手座乐观、自由，喜欢探索新的地方和观点。你身上有一种向外走的力量，可能是旅行，也可能是学习、思想、信仰和远方目标。这个星座适合分享经验、学习语言、跨文化交流和寻找更大的可能性。你容易鼓舞别人。需要留意的是，追求远方时也要照顾当下的承诺。自由和责任并不是敌人，平衡后会更有力量。",
      celebrities: ["李小龙", "Taylor Swift"]
    },
    en: {
      name: "Sagittarius",
      date: "Nov 22 - Dec 21",
      analysis: "Sagittarius is optimistic, freedom-loving, and exploratory. You carry an outward-moving energy, whether through travel, learning, philosophy, belief, or distant goals. This sign is suited for sharing experience, languages, cross-cultural connection, and searching for larger possibilities. You can inspire others. The watchout is honoring present commitments while chasing the next horizon. Freedom and responsibility are not enemies; balancing them gives you more power.",
      celebrities: ["Bruce Lee", "Taylor Swift"]
    }
  },
  {
    id: "capricorn",
    symbol: "♑",
    zh: {
      name: "摩羯座",
      date: "12月22日 - 1月19日",
      analysis: "摩羯座自律、可靠，重视目标和长期积累。你适合规划、执行、承担责任，也能在压力下保持清醒。这个星座知道成果需要时间，所以愿意一步一步往上走。你的优势是稳定、耐心和现实感。需要留意的是，不要把所有价值都放在成就上，也别把休息当成浪费。恢复力也是生产力的一部分，温柔一点不会削弱你。",
      celebrities: ["周杰伦", "Michelle Obama"]
    },
    en: {
      name: "Capricorn",
      date: "Dec 22 - Jan 19",
      analysis: "Capricorn is disciplined, reliable, and focused on long-term growth. You are suited for planning, execution, responsibility, and staying clear under pressure. This sign understands that results take time, so it is willing to climb step by step. Your strengths are steadiness, patience, and realism. The watchout is placing all value on achievement or treating rest as waste. Recovery is part of productivity, and softness does not weaken you.",
      celebrities: ["Jay Chou", "Michelle Obama"]
    }
  },
  {
    id: "aquarius",
    symbol: "♒",
    zh: {
      name: "水瓶座",
      date: "1月20日 - 2月18日",
      analysis: "水瓶座独立、有想法，喜欢创新和不同寻常的路径。你常常能从整体角度看问题，也会关注未来、群体和新的可能性。这个星座适合科技、创意、社群、改革和需要跳出旧框架的事情。你不喜欢被过度限制。需要留意的是，理性之外也有情感需求。把想法说清楚，也把感受说出来，会让别人更容易理解你。",
      celebrities: ["邓小平", "Oprah Winfrey"]
    },
    en: {
      name: "Aquarius",
      date: "Jan 20 - Feb 18",
      analysis: "Aquarius is independent, inventive, and drawn to unconventional paths. You often see the bigger system and care about the future, communities, and new possibilities. This sign is suited for technology, creativity, groups, reform, and work that needs a break from old patterns. You dislike being overly restricted. The watchout is remembering that emotional needs matter too. Explaining both your ideas and feelings helps others understand you.",
      celebrities: ["Deng Xiaoping", "Oprah Winfrey"]
    }
  },
  {
    id: "pisces",
    symbol: "♓",
    zh: {
      name: "双鱼座",
      date: "2月19日 - 3月20日",
      analysis: "双鱼座温柔、富有想象力，容易感受到他人的情绪。你适合创作、音乐、影像、疗愈和需要共情的事情。这个星座的直觉很强，常常能捕捉到语言之外的氛围。你的柔软是一种力量，不是弱点。需要留意的是，保持边界能让善意更持久。不要把所有人的情绪都背在自己身上，照顾自己也同样重要。",
      celebrities: ["马云", "Albert Einstein"]
    },
    en: {
      name: "Pisces",
      date: "Feb 19 - Mar 20",
      analysis: "Pisces is gentle, imaginative, and emotionally perceptive. You are suited for creation, music, film, healing, and work that needs empathy. This sign has strong intuition and often senses the atmosphere beyond words. Your softness is a strength, not a weakness. The watchout is keeping boundaries so your kindness can last. You do not need to carry everyone's feelings; caring for yourself matters too.",
      celebrities: ["Jack Ma", "Albert Einstein"]
    }
  }
];

let currentLang = "zh";
let selectedSign = signs[0];

const grid = document.querySelector("#zodiac-grid");
const selectedName = document.querySelector("#selected-name");
const selectedDate = document.querySelector("#selected-date");
const selectedAnalysis = document.querySelector("#selected-analysis");
const selectedCelebrities = document.querySelector("#selected-celebrities");
const interestCount = document.querySelector("#interest-count");
const currentDate = document.querySelector("#current-date");
const currentTime = document.querySelector("#current-time");

function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

function renderTranslations() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[currentLang][key];
  });
}

function renderGrid() {
  grid.innerHTML = "";
  signs.forEach((sign) => {
    const content = sign[currentLang];
    const button = document.createElement("button");
    button.className = `zodiac-card${sign.id === selectedSign.id ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span class="symbol" aria-hidden="true">${sign.symbol}</span>
      <span>
        <span class="card-name">${content.name}</span>
        <span class="card-date">${content.date}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      selectedSign = sign;
      trackEvent("zodiac_select", {
        zodiac_id: sign.id,
        zodiac_name: sign.en.name,
        language: currentLang
      });
      renderGrid();
      renderSelectedSign();
      document.querySelector(".analysis-section").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    grid.appendChild(button);
  });
}

function renderSelectedSign() {
  const content = selectedSign[currentLang];
  document.querySelector(".analysis-panel").style.setProperty("--sign-symbol", `"${selectedSign.symbol}"`);
  selectedName.textContent = currentLang === "zh"
    ? `${selectedSign.zh.name} / ${selectedSign.en.name}`
    : `${selectedSign.en.name} / ${selectedSign.zh.name}`;
  selectedDate.textContent = content.date;
  selectedAnalysis.textContent = content.analysis;
  selectedCelebrities.textContent = content.celebrities.join(" · ");
  interestCount.textContent = translations[currentLang].interestHint;
}

function renderClock() {
  const now = new Date();
  const locale = currentLang === "zh" ? "zh-CN" : "en-US";
  currentDate.textContent = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(now);
  currentTime.textContent = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(now);
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  renderTranslations();
  renderGrid();
  renderSelectedSign();
  renderClock();
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelector("#unlock-button").addEventListener("click", () => {
  const key = `full-analysis-clicks-${selectedSign.id}`;
  const count = Number(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, String(count));
  trackEvent("full_analysis_click", {
    zodiac_id: selectedSign.id,
    zodiac_name: selectedSign.en.name,
    language: currentLang
  });
  interestCount.textContent = `${translations[currentLang].interestClicked} (${count})`;
});

document.querySelectorAll("[data-track]").forEach((element) => {
  element.addEventListener("click", () => {
    trackEvent(element.dataset.track, {
      link_text: element.textContent.trim(),
      language: currentLang
    });
  });
});

renderTranslations();
renderGrid();
renderSelectedSign();
renderClock();
setInterval(renderClock, 1000);
