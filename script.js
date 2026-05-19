const translations = {
  zh: {
    brand: "星座基础分析",
    eyebrow: "12 星座 · 基础性格 · 中英文",
    heroTitle: "选择你的星座，查看基础分析",
    heroText: "先上线一个超简单版本，用来学习部署、观察用户点击完整分析的意愿。",
    choose: "选择星座",
    zodiacTitle: "12 星座",
    basicAnalysis: "基础分析",
    comingSoon: "完整分析即将开放",
    interestHint: "点击按钮可以用来观察用户兴趣，当前版本不会收费。",
    interestClicked: "已记录一次完整分析兴趣。当前版本不会收费。",
    footer: "仅供娱乐和自我探索，不构成专业建议。"
  },
  en: {
    brand: "Zodiac Basics",
    eyebrow: "12 Signs · Basic Traits · Chinese / English",
    heroTitle: "Choose your zodiac sign and read a simple analysis",
    heroText: "A tiny first version for launching, learning deployment, and testing interest in full readings.",
    choose: "Choose Sign",
    zodiacTitle: "12 Zodiac Signs",
    basicAnalysis: "Basic Analysis",
    comingSoon: "Full Analysis Coming Soon",
    interestHint: "Use this button to observe interest. This version does not charge money.",
    interestClicked: "Interest recorded once. This version does not charge money.",
    footer: "For entertainment and self-reflection only. This is not professional advice."
  }
};

const signs = [
  {
    id: "aries",
    symbol: "♈",
    zh: { name: "白羊座", date: "3月21日 - 4月19日", analysis: "白羊座直接、热情，行动力很强。你适合快速开始新计划，也容易在挑战里找到动力。需要留意的是，冲得太快时可能忽略细节和他人的节奏。" },
    en: { name: "Aries", date: "Mar 21 - Apr 19", analysis: "Aries is direct, energetic, and action-oriented. You are good at starting quickly and finding motivation in challenges. The main watchout is moving so fast that details and other people's pace get missed." }
  },
  {
    id: "taurus",
    symbol: "♉",
    zh: { name: "金牛座", date: "4月20日 - 5月20日", analysis: "金牛座稳定、务实，重视安全感和长期价值。你适合把想法落到现实，也懂得享受生活。需要留意的是，过度坚持可能让改变变得困难。" },
    en: { name: "Taurus", date: "Apr 20 - May 20", analysis: "Taurus is steady, practical, and drawn to security and lasting value. You are good at turning ideas into reality and enjoying life's comforts. The watchout is holding on so tightly that change becomes harder." }
  },
  {
    id: "gemini",
    symbol: "♊",
    zh: { name: "双子座", date: "5月21日 - 6月20日", analysis: "双子座好奇、灵活，擅长沟通和吸收信息。你能快速看见不同角度，也适合学习新东西。需要留意的是，兴趣太多时容易分散精力。" },
    en: { name: "Gemini", date: "May 21 - Jun 20", analysis: "Gemini is curious, flexible, and strong at communication. You quickly see multiple angles and enjoy learning new things. The watchout is spreading your energy too thin when too many interests compete." }
  },
  {
    id: "cancer",
    symbol: "♋",
    zh: { name: "巨蟹座", date: "6月21日 - 7月22日", analysis: "巨蟹座敏感、细腻，重视情感连接和归属感。你很会照顾人，也能感受到环境里的微妙变化。需要留意的是，不要把所有压力都藏在心里。" },
    en: { name: "Cancer", date: "Jun 21 - Jul 22", analysis: "Cancer is sensitive, caring, and deeply connected to belonging. You are naturally protective and aware of subtle emotional shifts. The watchout is carrying pressure quietly instead of expressing what you need." }
  },
  {
    id: "leo",
    symbol: "♌",
    zh: { name: "狮子座", date: "7月23日 - 8月22日", analysis: "狮子座自信、慷慨，喜欢把热情带给身边的人。你适合表达、领导和创造有存在感的作品。需要留意的是，真正的影响力也来自倾听。" },
    en: { name: "Leo", date: "Jul 23 - Aug 22", analysis: "Leo is confident, generous, and expressive. You bring warmth to others and are suited for leadership, performance, and creative work. The watchout is remembering that real influence also grows through listening." }
  },
  {
    id: "virgo",
    symbol: "♍",
    zh: { name: "处女座", date: "8月23日 - 9月22日", analysis: "处女座细致、理性，擅长整理问题和优化流程。你能发现别人忽略的细节，也适合做需要质量感的事情。需要留意的是，不必等到完美才开始。" },
    en: { name: "Virgo", date: "Aug 23 - Sep 22", analysis: "Virgo is thoughtful, analytical, and skilled at improving systems. You notice details others miss and care about quality. The watchout is waiting for perfection before allowing yourself to begin." }
  },
  {
    id: "libra",
    symbol: "♎",
    zh: { name: "天秤座", date: "9月23日 - 10月22日", analysis: "天秤座温和、有审美，重视关系中的平衡与公平。你擅长协调不同意见，也很懂氛围。需要留意的是，过度顾及别人可能让自己的选择变模糊。" },
    en: { name: "Libra", date: "Sep 23 - Oct 22", analysis: "Libra is diplomatic, aesthetic, and drawn to balance and fairness. You are good at harmonizing different views and reading the room. The watchout is losing clarity by trying to satisfy everyone." }
  },
  {
    id: "scorpio",
    symbol: "♏",
    zh: { name: "天蝎座", date: "10月23日 - 11月21日", analysis: "天蝎座深刻、专注，重视真实和情感深度。你适合研究复杂问题，也有很强的恢复力。需要留意的是，信任需要慢慢建立，也需要适度表达。" },
    en: { name: "Scorpio", date: "Oct 23 - Nov 21", analysis: "Scorpio is intense, focused, and drawn to emotional truth. You are suited for deep research and have strong resilience. The watchout is allowing trust to grow gradually while still expressing yourself." }
  },
  {
    id: "sagittarius",
    symbol: "♐",
    zh: { name: "射手座", date: "11月22日 - 12月21日", analysis: "射手座乐观、自由，喜欢探索新的地方和观点。你适合学习、旅行、分享经验。需要留意的是，追求远方时也要照顾当下的承诺。" },
    en: { name: "Sagittarius", date: "Nov 22 - Dec 21", analysis: "Sagittarius is optimistic, freedom-loving, and exploratory. You are suited for learning, travel, and sharing experience. The watchout is honoring present commitments while chasing the next horizon." }
  },
  {
    id: "capricorn",
    symbol: "♑",
    zh: { name: "摩羯座", date: "12月22日 - 1月19日", analysis: "摩羯座自律、可靠，重视目标和长期积累。你适合规划、执行和承担责任。需要留意的是，别把休息当成浪费，恢复力也是生产力的一部分。" },
    en: { name: "Capricorn", date: "Dec 22 - Jan 19", analysis: "Capricorn is disciplined, reliable, and focused on long-term growth. You are suited for planning, execution, and responsibility. The watchout is treating rest as wasted time when recovery is part of effectiveness." }
  },
  {
    id: "aquarius",
    symbol: "♒",
    zh: { name: "水瓶座", date: "1月20日 - 2月18日", analysis: "水瓶座独立、有想法，喜欢创新和不同寻常的路径。你能从整体角度看问题，也适合做面向未来的事。需要留意的是，理性之外也有情感需求。" },
    en: { name: "Aquarius", date: "Jan 20 - Feb 18", analysis: "Aquarius is independent, inventive, and drawn to unconventional paths. You see systems and future possibilities clearly. The watchout is remembering that emotional needs matter alongside ideas." }
  },
  {
    id: "pisces",
    symbol: "♓",
    zh: { name: "双鱼座", date: "2月19日 - 3月20日", analysis: "双鱼座温柔、富有想象力，容易感受到他人的情绪。你适合创作、疗愈和需要共情的事情。需要留意的是，保持边界能让善意更持久。" },
    en: { name: "Pisces", date: "Feb 19 - Mar 20", analysis: "Pisces is gentle, imaginative, and emotionally perceptive. You are suited for creative, healing, and empathetic work. The watchout is keeping boundaries so your kindness can last." }
  }
];

let currentLang = "zh";
let selectedSign = signs[0];

const grid = document.querySelector("#zodiac-grid");
const selectedName = document.querySelector("#selected-name");
const selectedDate = document.querySelector("#selected-date");
const selectedAnalysis = document.querySelector("#selected-analysis");
const interestCount = document.querySelector("#interest-count");

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
      renderGrid();
      renderSelectedSign();
      document.querySelector(".analysis-section").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    grid.appendChild(button);
  });
}

function renderSelectedSign() {
  const content = selectedSign[currentLang];
  selectedName.textContent = `${content.name} ${selectedSign.en.name}`;
  selectedDate.textContent = content.date;
  selectedAnalysis.textContent = content.analysis;
  interestCount.textContent = translations[currentLang].interestHint;
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  renderTranslations();
  renderGrid();
  renderSelectedSign();
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelector("#unlock-button").addEventListener("click", () => {
  const key = `full-analysis-clicks-${selectedSign.id}`;
  const count = Number(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, String(count));
  interestCount.textContent = `${translations[currentLang].interestClicked} (${count})`;
});

renderTranslations();
renderGrid();
renderSelectedSign();
