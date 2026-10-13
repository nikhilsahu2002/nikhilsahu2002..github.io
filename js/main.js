const storyData = {
  parliament: {category:"India",tag:"INDIA",title:"Parliament session opens with focus on jobs, growth and key reforms",deck:"Lawmakers return to a packed agenda as the government outlines priorities for the coming months.",image:"https://images.unsplash.com/photo-1529108329031-0f6a6c5f3f2b?auto=format&fit=crop&w=1400&q=85",intro:"The latest developments are bringing renewed attention to policy priorities, public services and the pace of economic growth."},
  markets: {category:"Business",tag:"BUSINESS",title:"Markets look for direction as investors await key economic data",deck:"Traders are watching global cues and upcoming figures for signs of the market's next move.",image:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=85",intro:"Investors are assessing the latest market signals as attention turns to economic data and global trends."},
  urban: {category:"Cities",tag:"CITIES",title:"Government announces new initiatives for urban infrastructure",deck:"New investments aim to improve roads, public spaces and essential services in growing cities.",image:"https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1400&q=85",intro:"Urban development is back in focus as officials discuss ways to improve transport, public spaces and essential services."},
  rupee: {category:"Business",tag:"BUSINESS",title:"Rupee and bond yields in focus ahead of key data",deck:"Traders are watching global cues and upcoming figures for signs of the market's next move.",image:"https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=1400&q=85",intro:"Currency and bond markets are tracking domestic and international signals ahead of a fresh set of economic releases."},
  sports: {category:"Sports",tag:"SPORTS",title:"National team prepares for a crucial international fixture",deck:"The squad has stepped up training as supporters look ahead to a high-stakes contest.",image:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85",intro:"Preparation is intensifying ahead of the next international fixture, with attention on form, fitness and team selection."},
  technology: {category:"Technology",tag:"TECHNOLOGY",title:"Technology trends expected to shape the year ahead",deck:"From practical AI tools to digital security, experts point to changes in how people work.",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",intro:"Technology teams are watching a new wave of tools and infrastructure that could change how businesses and consumers work."},
  traffic: {category:"Cities",tag:"CITY NEWS",title:"City authorities announce traffic changes for the weekend",deck:"Commuters are advised to plan journeys in advance as diversions are introduced in key areas.",image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",intro:"Local authorities have outlined temporary travel arrangements intended to manage traffic around busy corridors."},
  education: {category:"Education",tag:"EDUCATION",title:"Universities expand skill programmes for the next generation",deck:"New courses are designed to connect classroom learning with changing workplace needs.",image:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85",intro:"Education providers are expanding practical learning options as employers continue to highlight changing skill requirements."},
  climate: {category:"Environment",tag:"ENVIRONMENT",title:"New urban plans put cleaner, greener neighbourhoods in focus",deck:"City planners are exploring ways to make neighbourhoods more liveable and resilient.",image:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",intro:"City planners are considering greener public spaces and infrastructure as part of long-term neighbourhood development."},
  policy: {category:"India",tag:"POLICY",title:"States review development plans as new projects move forward",deck:"Officials are reviewing priorities and project timelines across several sectors.",image:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=85",intro:"Development plans are under review as state teams look at project milestones, public needs and implementation timelines."},
  health: {category:"Health",tag:"HEALTH",title:"Public health teams step up community outreach programmes",deck:"Community teams are working to improve awareness and access to essential services.",image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",intro:"Community health programmes are focusing on awareness, early support and easier access to essential services."},
  cinema: {category:"Entertainment",tag:"CINEMA",title:"What audiences are watching this week: the releases to know",deck:"A look at the films and releases drawing attention this week.",image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=85",intro:"This week's entertainment calendar features a mix of new releases and returning favourites."},
  music: {category:"Entertainment",tag:"MUSIC",title:"Live music and culture events bring the city together",deck:"Performances and community events are adding new energy to the local arts calendar.",image:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85",intro:"Live performances and cultural gatherings continue to create spaces for artists and audiences to connect."},
  streaming: {category:"Entertainment",tag:"STREAMING",title:"New shows and returning favourites to add to your watchlist",deck:"A quick guide to shows and series to look out for.",image:"https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1400&q=85",intro:"Streaming platforms continue to refresh their line-ups with new titles and familiar returning series."}
};
document.addEventListener("DOMContentLoaded", () => {
  const searchToggle = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");
  if (searchToggle && searchPanel) searchToggle.addEventListener("click", () => searchPanel.classList.toggle("open"));
  const searchForm = document.getElementById("searchForm");
  if (searchForm) searchForm.addEventListener("submit", e => {
    e.preventDefault();
    const q = document.getElementById("searchInput").value.trim();
    if (q) window.location.href = `category.html?section=search&q=${encodeURIComponent(q)}`;
  });
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) newsletterForm.addEventListener("submit", e => {
    e.preventDefault();
    const msg = document.getElementById("newsletterMessage");
    if (msg) msg.textContent = "Thanks! Connect this form to your newsletter service to activate subscriptions.";
    newsletterForm.reset();
  });
  const shareButton = document.getElementById("shareButton");
  if (shareButton) shareButton.addEventListener("click", async () => {
    try {
      if (navigator.share) await navigator.share({title:document.title,url:window.location.href});
      else if (navigator.clipboard) { await navigator.clipboard.writeText(window.location.href); shareButton.textContent = "Link copied"; }
      else window.prompt("Copy this article URL:", window.location.href);
    } catch (_) {}
  });
  renderArticle();
  renderCategory();
  const loadMore = document.getElementById("loadMore");
  if (loadMore) loadMore.addEventListener("click", () => {
    const list = document.getElementById("categoryStories");
    if (!list) return;
    const extra = [
      ["policy","States review development plans as new projects move forward","https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=480&q=80","INDIA"],
      ["health","Public health teams step up community outreach programmes","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=480&q=80","HEALTH"],
      ["climate","New urban plans put cleaner, greener neighbourhoods in focus","https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=480&q=80","ENVIRONMENT"]
    ];
    extra.forEach(([id,title,image,tag]) => {
      const item = document.createElement("article");
      item.className = "horizontal-story";
      item.innerHTML = `<a href="article.html?id=${id}"><img src="${image}" alt=""><div class="horizontal-copy"><span class="category-tag">${tag}</span><h3>${title}</h3><p>Read the latest context, key details and what to watch as the story develops.</p><div class="meta">Recently updated <span>•</span> News Desk</div></div></a>`;
      list.appendChild(item);
    });
    loadMore.textContent = "More stories added";
    loadMore.disabled = true;
  });
  const sortStories = document.getElementById("sortStories");
  if (sortStories) sortStories.addEventListener("change", () => {
    const list = document.getElementById("categoryStories");
    if (!list) return;
    const items = Array.from(list.children);
    if (sortStories.value === "popular") items.reverse();
    else items.sort((a,b) => (a.querySelector("h3")?.textContent || "").localeCompare(b.querySelector("h3")?.textContent || ""));
    if (sortStories.value === "latest") items.reverse();
    items.forEach(item => list.appendChild(item));
  });

// HD Premium carousel
(() => {
  const carousel = document.getElementById("premiumCarousel");
  const prev = document.getElementById("premiumPrev");
  const next = document.getElementById("premiumNext");
  const progress = document.getElementById("premiumProgress");

  if (!carousel || !prev || !next) return;

  const updateProgress = () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const percentage = maxScroll > 0
      ? (carousel.scrollLeft / maxScroll) * 80 + 20
      : 100;

    if (progress) {
      progress.style.width = `${percentage}%`;
    }

    prev.disabled = carousel.scrollLeft <= 2;
    next.disabled =
      carousel.scrollLeft >= maxScroll - 2;

    prev.style.opacity = prev.disabled ? "0.45" : "1";
    next.style.opacity = next.disabled ? "0.45" : "1";
  };

  prev.addEventListener("click", () => {
    carousel.scrollBy({
      left: -(carousel.clientWidth * 0.75),
      behavior: "smooth"
    });
  });

  next.addEventListener("click", () => {
    carousel.scrollBy({
      left: carousel.clientWidth * 0.75,
      behavior: "smooth"
    });
  });

  carousel.addEventListener("scroll", updateProgress, {
    passive: true
  });

  window.addEventListener("resize", updateProgress);

  updateProgress();
})();

});
function renderArticle() {
  const title = document.getElementById("articleTitle");
  if (!title) return;
  const id = new URLSearchParams(window.location.search).get("id") || "parliament";
  const story = storyData[id] || storyData.parliament;
  document.title = `${story.title} | Hindustan Daily`;
  document.getElementById("articleCategory").textContent = story.category;
  document.getElementById("articleTag").textContent = story.tag;
  title.textContent = story.title;
  document.getElementById("articleDeck").textContent = story.deck;
  document.getElementById("articleImage").src = story.image;
  document.getElementById("articleImage").alt = story.title;
  document.getElementById("articleIntro").textContent = story.intro;
  document.getElementById("imageCaption").textContent = `Representative image for: ${story.title}`;
}
function renderCategory() {
  const heading = document.getElementById("categoryTitle");
  if (!heading) return;
  const params = new URLSearchParams(window.location.search);
  const section = (params.get("section") || "latest").toLowerCase();
  const query = (params.get("q") || "").toLowerCase();
  const names = {india:"India",world:"World",city:"Cities",politics:"Politics",business:"Business",technology:"Technology",entertainment:"Entertainment",sports:"Sports",lifestyle:"Lifestyle",education:"Education",opinion:"Opinion",latest:"Latest News","top-stories":"Top Stories",photos:"Photos",podcasts:"Podcasts",premium:"Premium",epaper:"E-Paper",policy:"Policy",about:"About Us",contact:"Contact",privacy:"Privacy Policy",terms:"Terms of Use"};
  const name = section === "search" ? `Search results${query ? ` for “${query}”` : ""}` : (names[section] || section.charAt(0).toUpperCase()+section.slice(1));
  heading.textContent = name;
  document.title = `${name} | Hindustan Daily`;
  const desc = document.getElementById("categoryDescription");
  if (desc) desc.textContent = section === "search" ? "Search across headlines and story summaries." : `Latest ${name.toLowerCase()} headlines, reports and analysis from Hindustan Daily.`;
  const list = document.getElementById("categoryStories");
  if (!list) return;
  let visible = 0;
  Array.from(list.children).forEach(item => {
    const text = item.textContent.toLowerCase();
    const tag = (item.querySelector(".category-tag")?.textContent || "").toLowerCase();
    let show = true;
    if (section === "search") show = !query || text.includes(query);
    else if (["india","world","city","politics","business","technology","entertainment","sports","lifestyle","education","opinion","policy"].includes(section)) {
      const sectionMap = {city:"cities",technology:"technology",entertainment:"entertainment",business:"business",sports:"sports",education:"education",policy:"policy"};
      const target = sectionMap[section] || section;
      show = tag.includes(target) || text.includes(target);
      if (!show && section === "india") show = text.includes("states") || text.includes("parliament");
    }
    item.style.display = show ? "" : "none";
    if (show) visible++;
  });
  const count = document.getElementById("resultCount");
  if (count) count.textContent = `${visible} ${visible === 1 ? "story" : "stories"} shown`;
  if (visible === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = "<h3>No matching stories yet</h3><p>Try another search or explore the latest headlines.</p><a class='aside-more' href='index.html'>Return to homepage →</a>";
    list.appendChild(empty);
  }
}
