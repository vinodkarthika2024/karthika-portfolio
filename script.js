const cases = {
  hyrox: {
    kicker: "Partnership marketing • Integrated campaign • Live event",
    title: "Cambridge Spark × HYROX",
    link: "https://www.instagram.com/reel/DXa-N_Osu9W/",
    html: `
      <h4>Context</h4>
      <p>Cambridge Spark was the Official AI Education Partner of HYROX Cardiff. The campaign used the theme “Ambition Amplified” across pre-event promotion and the live activation.</p>
      <h4>My role</h4>
      <p>I supported the partnership campaign across the marketing channels around the event.</p>
      <h4>What I did</h4>
      <p>My work included social content, email communications, web content, campaign messaging, event-related promotion and live content. I also created a 30-second promotional ad in Canva. When the original app-based activation was dropped because of HYROX data-security concerns, the campaign was adapted around a form-based prize draw for a HYROX PUMA bag.</p>
      <h4>Output</h4>
      <p>An integrated partnership campaign spanning social, email, web, event content, a promotional ad and the revised prize-draw activation.</p>
    `
  },
  lloyds: {
    kicker: "Customer storytelling • Creative direction • Video",
    title: "Lloyds Banking Group × Cambridge Spark",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7503075542955511808",
    html: `
      <h4>Context</h4>
      <p>A customer story featuring Lloyds Banking Group and Cambridge Spark’s work together.</p>
      <h4>My role</h4>
      <p>I developed the concept, storyline and editorial direction for the video.</p>
      <h4>What I did</h4>
      <p>I shaped the narrative before filming and worked with the external production agency through post-production, reviewing footage and edits and specifying which sections to keep, remove and prioritise in the final story.</p>
      <h4>Output</h4>
      <p>A main customer film supported by shorter edits for social use.</p>
    `
  },
  founder: {
    kicker: "Founder-led content • LinkedIn • Podcast",
    title: "Data & AI Mastery — founder-led LinkedIn content",
    link: "https://lnkd.in/p/eGTGr_Jq",
    html: `
      <h4>Context</h4>
      <p>Data & AI Mastery is a Cambridge Spark podcast featuring founder and Group CEO Dr Raoul-Gabriel Urma in conversation with guests from the data and AI space.</p>
      <h4>My role</h4>
      <p>I create the LinkedIn updates around podcast episodes for Raoul’s profile.</p>
      <h4>What I did</h4>
      <p>I use the episode themes and guest conversations as source material, then adapt the angle and copy for a founder profile rather than reusing Cambridge Spark’s company-page promotion.</p>
      <h4>Output</h4>
      <p>Founder-led LinkedIn posts built from podcast and expert content.</p>
    `
  },
  repurpose: {
    kicker: "Content repurposing • Editorial • LinkedIn carousel",
    title: "Podcast conversation → LinkedIn carousel",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7528792040151744512",
    html: `
      <h4>Context</h4>
      <p>The source was a podcast conversation between Dr Jeremy Bradley and Professor Alessandra Russo about AI systems, LLMs and rules and constraints in real-world decision processes.</p>
      <h4>My role</h4>
      <p>I turned the long-form conversation into a standalone social asset.</p>
      <h4>What I did</h4>
      <p>I reviewed the conversation, selected one central idea that could work independently on social and structured it into a concise slide-by-slide narrative.</p>
      <h4>Output</h4>
      <p>A LinkedIn carousel designed to make the technical topic easier to scan without requiring the audience to listen to the full podcast first.</p>
    `
  },
  newsletter: {
    kicker: "Editorial • Newsletter • Content planning",
    title: "Cambridge Spark monthly LinkedIn newsletter",
    link: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7254837648303808512",
    html: `
      <h4>Context</h4>
      <p>Cambridge Spark publishes a monthly LinkedIn newsletter covering the company’s wider data and AI content and activity.</p>
      <h4>My role</h4>
      <p>I plan and write the monthly edition.</p>
      <h4>What I did</h4>
      <p>I set the editorial theme, select the stories and resources, write and edit the copy, structure the edition and coordinate it with wider marketing activity.</p>
      <h4>Output</h4>
      <p>A recurring LinkedIn newsletter bringing together thought leadership, company updates, webinars, customer stories, practical resources and developments across data and AI.</p>
    `
  },
  eventvideo: {
    kicker: "Event content • LinkedIn • Short-form video",
    title: "Celebration of Achievement — LinkedIn event content",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7495420670923800576",
    html: `
      <h4>Context</h4>
      <p>Cambridge Spark’s Celebration of Achievement brought learners, customers and the wider community together at London Guildhall.</p>
      <h4>My role</h4>
      <p>I used the event as a social-content opportunity for Cambridge Spark’s LinkedIn audience.</p>
      <h4>What I did</h4>
      <p>I shaped the content concept around the event footage and the way the event should be presented on a professional social channel.</p>
      <h4>Output</h4>
      <p>A polished short-form LinkedIn video built from the in-person event.</p>
    `
  }
};

const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target)}})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const metricSection=document.querySelector(".metrics");let counted=false;
const metricObserver=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting||counted)return;counted=true;document.querySelectorAll("[data-count]").forEach(node=>{const target=Number(node.dataset.count);const duration=1250;const start=performance.now();const tick=now=>{const progress=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-progress,3);node.textContent=Math.floor(target*eased).toLocaleString();if(progress<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)});metricObserver.disconnect()},{threshold:.35});if(metricSection)metricObserver.observe(metricSection);

const modal=document.getElementById("case-modal"),modalTitle=document.getElementById("modal-title"),modalKicker=document.getElementById("modal-kicker"),modalContent=document.getElementById("modal-content"),modalLink=document.getElementById("modal-link");
document.querySelectorAll("[data-open]").forEach(btn=>btn.addEventListener("click",()=>{const item=cases[btn.dataset.open];if(!item)return;modalTitle.textContent=item.title;modalKicker.textContent=item.kicker;modalContent.innerHTML=item.html;modalLink.href=item.link||"#";modalLink.style.display=item.link?"inline-flex":"none";modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}));
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeModal));document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});document.getElementById("year").textContent=new Date().getFullYear();

if(window.matchMedia("(pointer:fine)").matches){document.querySelectorAll(".project,.range-card,.strength-card").forEach(card=>{card.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*2}deg) rotateY(${x*2}deg) translateY(-5px)`});card.addEventListener("mouseleave",()=>card.style.transform="")})}
