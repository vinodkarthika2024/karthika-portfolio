const cases = {
  hyrox: {
    kicker: "Partnership marketing • Integrated campaign • Live event",
    title: "Cambridge Spark × HYROX",
    link: "https://www.instagram.com/reel/DXa-N_Osu9W/",
    html: `
      <h4>Context</h4>
      <p>Cambridge Spark was the Official AI Education Partner of HYROX Cardiff. The campaign used the theme “Ambition Amplified” to connect the partnership across pre-event promotion and the live event.</p>
      <h4>What I worked on</h4>
      <p>My work covered social content, email communications, web content, campaign messaging, event-related promotion and live content. I also created a 30-second promotional ad in Canva as part of the campaign activity.</p>
      <h4>Activation change</h4>
      <p>The original app-based activation was dropped because of HYROX data-security concerns. The team moved to a form-based prize draw for a HYROX PUMA bag, which meant the campaign messaging and supporting communications had to be adapted.</p>
      <h4>Why it belongs in my portfolio</h4>
      <p>This project shows the campaign side of my role: coordinating content across several channels, supporting a major external partnership and adapting the marketing execution when the activation changed.</p>
    `
  },
  lloyds: {
    kicker: "Customer storytelling • Creative direction • Video",
    title: "Lloyds Banking Group × Cambridge Spark",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7503075542955511808",
    html: `
      <h4>Context</h4>
      <p>The project was a customer story featuring Lloyds Banking Group and Cambridge Spark’s work together.</p>
      <h4>My role</h4>
      <p>I developed the concept and storyline before filming, including the narrative direction and the parts of the customer story we wanted the video to bring out.</p>
      <h4>Production</h4>
      <p>An external agency handled filming and technical editing. I worked with them on the content direction and reviewed the footage and edits, specifying which sections to keep, what to remove and how the final story should flow.</p>
      <h4>Deliverables</h4>
      <p>The content was developed as a main customer film with additional shorter edits for social use.</p>
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
      <p>I create the LinkedIn updates around podcast episodes for Raoul’s profile, using the conversation and episode themes as the source material.</p>
      <h4>What changes from the company page</h4>
      <p>The founder-led posts are written separately from Cambridge Spark’s company-page promotion. I adapt the angle and copy for Raoul’s profile rather than reusing the same company caption.</p>
      <h4>Skills shown</h4>
      <p>Founder-led content, executive voice adaptation, podcast repurposing and B2B LinkedIn copy.</p>
    `
  },
  repurpose: {
    kicker: "Content repurposing • Editorial • LinkedIn carousel",
    title: "Podcast conversation → LinkedIn carousel",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7528792040151744512",
    html: `
      <h4>Source</h4>
      <p>This carousel came from a podcast conversation between Dr Jeremy Bradley and Professor Alessandra Russo about AI systems, LLMs and the importance of rules and constraints in real-world decision processes.</p>
      <h4>My role</h4>
      <p>I reviewed the long-form conversation, selected a single idea that could work independently on social and structured it into a concise slide-by-slide narrative.</p>
      <h4>Format</h4>
      <p>The final output was a LinkedIn carousel designed to make a technical topic easier to scan without needing the audience to listen to the full podcast first.</p>
      <h4>Skills shown</h4>
      <p>Long-form to short-form repurposing, editorial judgement, B2B copywriting and carousel structure.</p>
    `
  },
  newsletter: {
    kicker: "Editorial • Newsletter • Content planning",
    title: "Cambridge Spark monthly LinkedIn newsletter",
    link: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7254837648303808512",
    html: `
      <h4>What I own</h4>
      <p>I plan and write Cambridge Spark’s monthly LinkedIn newsletter.</p>
      <h4>Editorial work</h4>
      <p>That includes setting the theme, choosing which stories and resources to include, writing and editing the copy, structuring the edition and coordinating it with wider marketing activity.</p>
      <h4>Content mix</h4>
      <p>Editions can bring together thought leadership, company updates, webinars, customer stories, practical resources and developments across data and AI.</p>
      <h4>Skills shown</h4>
      <p>Editorial planning, content curation, newsletter writing, B2B content strategy and lifecycle content.</p>
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
      <p>I used the event as a social-content opportunity, shaping professional short-form content for Cambridge Spark’s LinkedIn audience.</p>
      <h4>Format</h4>
      <p>The final content used event footage and a polished edit designed for a professional social channel rather than a traditional event recap.</p>
      <h4>Skills shown</h4>
      <p>Event storytelling, short-form video, social-first content planning and LinkedIn content.</p>
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
