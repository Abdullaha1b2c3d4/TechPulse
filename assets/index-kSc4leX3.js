(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();let m=[],L=[];function T(){const e=m.filter(o=>o.featured),t=document.getElementById("featured-container");if(e.length>0){const o=e[0],n=e.slice(1,3);let r=`
                    <article class="group card-hover bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden cursor-pointer lg:row-span-2">
                        <div class="relative h-64 lg:h-80 overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-br ${o.gradient} flex items-center justify-center">
                                <div class="text-center p-8">
                                    <div class="w-20 h-20 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                                        <span class="text-4xl">${o.icon}</span>
                                    </div>
                                    <span class="text-white/80 font-mono text-sm">${o.categoryDisplay} GUIDE 2025</span>
                                </div>
                            </div>
                            <div class="absolute top-4 left-4">
                                <span class="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">FEATURED</span>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-4 mb-4">
                                <span class="px-3 py-1 text-xs font-medium rounded-full bg-${o.categoryColor}-500/10 text-${o.categoryColor}-400">${o.categoryDisplay}</span>
                                <span class="text-dark-500 text-sm">${o.readTime} read</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">${o.title}</h3>
                            <p class="text-dark-400 leading-relaxed mb-6">${o.excerpt}</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-sm">${o.authorInitial}</div>
                                    <div>
                                        <div class="text-sm font-semibold">${o.author}</div>
                                        <div class="text-xs text-dark-500">${o.date}</div>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 text-dark-500 text-sm">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                                    ${o.views}
                                </div>
                            </div>
                        </div>
                    </article>
                `;n.forEach(s=>{r+=`
                        <article class="group card-hover bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden cursor-pointer flex flex-col sm:flex-row">
                            <div class="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-br ${s.gradient} flex items-center justify-center">
                                    <span class="text-4xl">${s.icon}</span>
                                </div>
                            </div>
                            <div class="p-6 flex flex-col justify-center">
                                <span class="inline-block w-fit px-3 py-1 text-xs font-medium rounded-full bg-${s.categoryColor}-500/10 text-${s.categoryColor}-400 mb-3">${s.categoryDisplay}</span>
                                <h3 class="text-lg font-bold mb-2 group-hover:text-${s.categoryColor}-400 transition-colors line-clamp-2">${s.title}</h3>
                                <p class="text-dark-400 text-sm line-clamp-2 mb-3">${s.excerpt}</p>
                                <div class="flex items-center gap-2 text-xs text-dark-500">
                                    <span>${s.date}</span>
                                    <span>•</span>
                                    <span>${s.readTime} read</span>
                                </div>
                            </div>
                        </article>
                    `}),t.innerHTML=r}}let p=6;function b(e="all"){const t=document.getElementById("articles-grid"),o=e==="all"?m:m.filter(s=>s.category===e),n=o.slice(0,p);t.innerHTML=n.map(s=>`
                <article class="article-card group card-hover bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden cursor-pointer" data-category="${s.category}">
                    <div class="relative h-52 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br ${s.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <span class="text-6xl">${s.icon}</span>
                        </div>
                        <div class="absolute top-4 right-4 flex gap-2">
                            <span class="px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-lg">${s.readTime}</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="px-3 py-1 text-xs font-medium rounded-full bg-${s.categoryColor}-500/10 text-${s.categoryColor}-400">${s.categoryDisplay}</span>
                            <span class="text-dark-500 text-xs">${s.date}</span>
                        </div>
                        <h3 class="text-lg font-bold mb-2 group-hover:text-${s.categoryColor}-400 transition-colors">${s.title}</h3>
                        <p class="text-dark-400 text-sm line-clamp-3 mb-4">${s.excerpt}</p>
                        <div class="flex items-center justify-between pt-4 border-t border-dark-800">
                            <div class="flex items-center gap-2">
                                <div class="w-7 h-7 bg-${s.categoryColor}-500/20 rounded-full flex items-center justify-center text-${s.categoryColor}-400 text-xs font-bold">${s.authorInitial}</div>
                                <span class="text-xs text-dark-400">${s.author}</span>
                            </div>
                            <div class="flex items-center gap-3 text-dark-500">
                                <span class="flex items-center gap-1 text-xs"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg> ${s.views}</span>
                            </div>
                        </div>
                    </div>
                </article>
            `).join("");const r=document.getElementById("load-more-btn");o.length<=p?r.style.display="none":r.style.display="inline-flex"}function j(){p+=3;const e=document.querySelector(".filter-btn.bg-primary-500").dataset.filter;b(e)}function A(){const e=document.getElementById("ai-tools-grid");e.innerHTML=L.map(t=>{const o=[];for(let n=0;n<Math.floor(t.stars);n++)o.push("★");for(t.stars%1!==0&&o.push("★");o.length<5;)o.push("☆");return`
                    <div class="group card-hover bg-dark-900 border border-dark-800 rounded-2xl p-6 hover:border-primary-500/30 text-center">
                        <div class="w-16 h-16 mx-auto bg-gradient-to-br ${t.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all text-2xl">
                            ${t.icon}
                        </div>
                        <h3 class="font-bold mb-1">${t.name}</h3>
                        <p class="text-dark-500 text-sm mb-3">${t.description}</p>
                        <div class="flex items-center justify-center gap-1 mb-4">
                            <span class="text-yellow-400">${o.map(n=>n==="★"?"★":"☆").join("")}</span>
                            <span class="text-xs text-dark-500 ml-1">${t.rating}</span>
                        </div>
                        <span class="inline-block px-3 py-1 text-xs font-medium rounded-full bg-${t.pricingColor}-500/10 text-${t.pricingColor}-400">${t.pricing}</span>
                    </div>
                `}).join("")}function S(e){p=6,b(e),document.querySelectorAll(".filter-btn").forEach(n=>{n.classList.remove("bg-primary-500","text-white"),n.classList.add("bg-dark-800","text-dark-400")});const o=document.querySelector(`[data-filter="${e}"]`);o.classList.remove("bg-dark-800","text-dark-400"),o.classList.add("bg-primary-500","text-white")}const k=["& Innovation.","& AI Tools.","& Web Dev.","& Code."];let v=0,f=0,l=!1;const D=document.getElementById("typed-text");function E(){const e=k[v];D.textContent=l?e.substring(0,f--):e.substring(0,f++);let t=l?50:100;!l&&f===e.length+1?(t=2e3,l=!0):l&&f===0&&(l=!1,v=(v+1)%k.length,t=500),setTimeout(E,t)}function y(e,t,o=""){let n=0;const r=t/60,s=setInterval(()=>{n+=r,n>=t&&(n=t,clearInterval(s)),e.textContent=Math.floor(n)+(t>=1e3?o||"+":o)},30)}let $=!1;function I(){$||($=!0,y(document.getElementById("stat1"),500,"+"),y(document.getElementById("stat2"),100,"+"),y(document.getElementById("stat3"),50,"K+"))}function C(){const e=document.getElementById("search-modal");e.classList.toggle("hidden"),e.classList.contains("hidden")?document.body.style.overflow="":(document.getElementById("search-input").focus(),document.body.style.overflow="hidden")}function H(e){const t=document.getElementById("search-results");if(!e.trim()){t.innerHTML='<p class="text-center text-dark-500 py-8">Start typing to search...</p>';return}const o=m.filter(n=>n.title.toLowerCase().includes(e.toLowerCase())||n.categoryDisplay.toLowerCase().includes(e.toLowerCase())||n.author.toLowerCase().includes(e.toLowerCase()));if(o.length===0){t.innerHTML='<p class="text-center text-dark-500 py-8">No results found. Try a different search term.</p>';return}t.innerHTML=o.map(n=>`
                <a href="#" class="flex items-center gap-4 p-4 rounded-xl hover:bg-dark-800 transition-colors cursor-pointer">
                    <svg class="w-5 h-5 text-dark-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    <div>
                        <div class="text-white font-medium">${n.title}</div>
                        <div class="text-xs text-dark-500">${n.categoryDisplay} · ${n.date}</div>
                    </div>
                </a>
            `).join("")}document.addEventListener("keydown",e=>{e.key==="Escape"&&(document.getElementById("search-modal").classList.add("hidden"),document.body.style.overflow="",w()),(e.ctrlKey||e.metaKey)&&e.key==="k"&&(e.preventDefault(),C())});window.addEventListener("scroll",()=>{const e=document.getElementById("navbar");window.scrollY>50?e.classList.add("dark-glass","border-b","border-dark-800","shadow-lg"):e.classList.remove("dark-glass","border-b","border-dark-800","shadow-lg");const t=document.getElementById("back-to-top");window.scrollY>500?(t.classList.remove("opacity-0","invisible"),t.classList.add("opacity-100","visible")):(t.classList.add("opacity-0","invisible"),t.classList.remove("opacity-100","visible")),window.scrollY<600&&I()});function P(){const e=document.getElementById("mobile-menu"),t=document.getElementById("menu-icon");e.classList.toggle("hidden"),e.classList.contains("hidden")?t.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>':t.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>'}function N(e){e.preventDefault(),document.getElementById("newsletter-success").classList.remove("hidden"),e.target.reset(),setTimeout(()=>{document.getElementById("newsletter-success").classList.add("hidden")},5e3)}function O(e){e.preventDefault(),document.getElementById("contact-success").classList.remove("hidden"),e.target.reset(),setTimeout(()=>{document.getElementById("contact-success").classList.add("hidden")},5e3)}function z(e){w(),document.getElementById(`${e}-modal`).classList.remove("hidden"),document.body.style.overflow="hidden"}function w(){["privacy-modal","terms-modal","disclaimer-modal"].forEach(e=>{document.getElementById(e).classList.add("hidden")}),document.body.style.overflow=""}function F(){const e=document.getElementById("theme-icon");e.innerHTML=e.innerHTML.includes("moon")?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>':'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>'}function q(){document.getElementById("cookie-banner").classList.add("hidden"),localStorage.setItem("cookies-accepted","true")}function K(){document.getElementById("cookie-banner").classList.add("hidden"),localStorage.setItem("cookies-accepted","false")}localStorage.getItem("cookies-accepted")||setTimeout(()=>{document.getElementById("cookie-banner").classList.remove("hidden")},2e3);const Y=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".fade-in").forEach(e=>Y.observe(e));document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){const o=document.querySelector(this.getAttribute("href"));if(o&&!this.hasAttribute("onclick")){t.preventDefault();const r=o.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:r,behavior:"smooth"})}})});async function R(){const e="Abdullaha1b2c3d4/TechPulse",n=(await(await fetch(`https://api.github.com/repos/${e}/contents/content/articles`)).json()).filter(a=>a.name.endsWith(".md"));for(const a of n){const c=(await(await fetch(a.download_url)).text()).match(/---([\s\S]*?)---/);if(c){const g=c[1],i={};g.split(`
`).forEach(h=>{const[u,...x]=h.split(":");u&&(i[u.trim()]=x.join(":").trim())}),i.featured=i.featured==="true",m.push(i)}}const d=(await(await fetch(`https://api.github.com/repos/${e}/contents/content/ai-tools`)).json()).filter(a=>a.name.endsWith(".md"));for(const a of d){const c=(await(await fetch(a.download_url)).text()).match(/---([\s\S]*?)---/);if(c){const g=c[1],i={};g.split(`
`).forEach(h=>{const[u,...x]=h.split(":");u&&(i[u.trim()]=x.join(":").trim())}),i.stars=Number(i.stars||0),i.rating=Number(i.rating||0),L.push(i)}}T(),b("all"),A()}E();I();R();window.filterArticles=S;window.loadMoreArticles=j;window.toggleSearch=C;window.toggleMobile=P;window.toggleTheme=F;window.handleNewsletter=N;window.handleContact=O;window.showPage=z;window.closePages=w;window.acceptCookies=q;window.declineCookies=K;window.handleSearch=H;
