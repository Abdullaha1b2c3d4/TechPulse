  import './style.css'
  // ========== DATA ARRAYS ==========
let articles = [];
let aiTools = [];


        // ========== RENDER FUNCTIONS ==========
        function renderFeatured() {
            const featuredArticles = articles.filter(a => a.featured);
            const container = document.getElementById('featured-container');
            
            if (featuredArticles.length > 0) {
                const mainFeatured = featuredArticles[0];
                const sideFeatured = featuredArticles.slice(1, 3);
                
                let html = `
                    <article class="group card-hover bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden cursor-pointer lg:row-span-2">
                        <div class="relative h-64 lg:h-80 overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-br ${mainFeatured.gradient} flex items-center justify-center">
                                <div class="text-center p-8">
                                    <div class="w-20 h-20 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                                        <span class="text-4xl">${mainFeatured.icon}</span>
                                    </div>
                                    <span class="text-white/80 font-mono text-sm">${mainFeatured.categoryDisplay} GUIDE 2025</span>
                                </div>
                            </div>
                            <div class="absolute top-4 left-4">
                                <span class="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">FEATURED</span>
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex items-center gap-4 mb-4">
                                <span class="px-3 py-1 text-xs font-medium rounded-full bg-${mainFeatured.categoryColor}-500/10 text-${mainFeatured.categoryColor}-400">${mainFeatured.categoryDisplay}</span>
                                <span class="text-dark-500 text-sm">${mainFeatured.readTime} read</span>
                            </div>
                            <h3 class="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">${mainFeatured.title}</h3>
                            <p class="text-dark-400 leading-relaxed mb-6">${mainFeatured.excerpt}</p>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-sm">${mainFeatured.authorInitial}</div>
                                    <div>
                                        <div class="text-sm font-semibold">${mainFeatured.author}</div>
                                        <div class="text-xs text-dark-500">${mainFeatured.date}</div>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 text-dark-500 text-sm">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                                    ${mainFeatured.views}
                                </div>
                            </div>
                        </div>
                    </article>
                `;
                
                sideFeatured.forEach(article => {
                    html += `
                        <article class="group card-hover bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden cursor-pointer flex flex-col sm:flex-row">
                            <div class="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-br ${article.gradient} flex items-center justify-center">
                                    <span class="text-4xl">${article.icon}</span>
                                </div>
                            </div>
                            <div class="p-6 flex flex-col justify-center">
                                <span class="inline-block w-fit px-3 py-1 text-xs font-medium rounded-full bg-${article.categoryColor}-500/10 text-${article.categoryColor}-400 mb-3">${article.categoryDisplay}</span>
                                <h3 class="text-lg font-bold mb-2 group-hover:text-${article.categoryColor}-400 transition-colors line-clamp-2">${article.title}</h3>
                                <p class="text-dark-400 text-sm line-clamp-2 mb-3">${article.excerpt}</p>
                                <div class="flex items-center gap-2 text-xs text-dark-500">
                                    <span>${article.date}</span>
                                    <span>•</span>
                                    <span>${article.readTime} read</span>
                                </div>
                            </div>
                        </article>
                    `;
                });
                
                container.innerHTML = html;
            }
        }

        let articlesToShow = 6;
        
        function renderArticles(filter = 'all') {
            const grid = document.getElementById('articles-grid');
            const filtered = filter === 'all' ? articles : articles.filter(a => a.category === filter);
            const toRender = filtered.slice(0, articlesToShow);
            
            grid.innerHTML = toRender.map(article => `
                <article class="article-card group card-hover bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden cursor-pointer" data-category="${article.category}">
                    <div class="relative h-52 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br ${article.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <span class="text-6xl">${article.icon}</span>
                        </div>
                        <div class="absolute top-4 right-4 flex gap-2">
                            <span class="px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-lg">${article.readTime}</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="px-3 py-1 text-xs font-medium rounded-full bg-${article.categoryColor}-500/10 text-${article.categoryColor}-400">${article.categoryDisplay}</span>
                            <span class="text-dark-500 text-xs">${article.date}</span>
                        </div>
                        <h3 class="text-lg font-bold mb-2 group-hover:text-${article.categoryColor}-400 transition-colors">${article.title}</h3>
                        <p class="text-dark-400 text-sm line-clamp-3 mb-4">${article.excerpt}</p>
                        <div class="flex items-center justify-between pt-4 border-t border-dark-800">
                            <div class="flex items-center gap-2">
                                <div class="w-7 h-7 bg-${article.categoryColor}-500/20 rounded-full flex items-center justify-center text-${article.categoryColor}-400 text-xs font-bold">${article.authorInitial}</div>
                                <span class="text-xs text-dark-400">${article.author}</span>
                            </div>
                            <div class="flex items-center gap-3 text-dark-500">
                                <span class="flex items-center gap-1 text-xs"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg> ${article.views}</span>
                            </div>
                        </div>
                    </div>
                </article>
            `).join('');
            
            // Hide load more if we've shown all articles
            const loadMoreBtn = document.getElementById('load-more-btn');
            if (filtered.length <= articlesToShow) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-flex';
            }
        }

        function loadMoreArticles() {
            articlesToShow += 3;
            const activeFilter = document.querySelector('.filter-btn.bg-primary-500').dataset.filter;
            renderArticles(activeFilter);
        }

        function renderTutorials() {
            const grid = document.getElementById('tutorials-grid');
            grid.innerHTML = tutorials.map(tutorial => `
                <div class="group card-hover bg-dark-900 border border-dark-800 rounded-2xl p-8 hover:border-${tutorial.levelColor}-500/30">
                    <div class="flex items-start gap-5">
                        <div class="w-14 h-14 flex-shrink-0 ${tutorial.gradient} rounded-2xl flex items-center justify-center font-bold text-xl text-white">${tutorial.number}</div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <span class="px-2 py-0.5 text-xs font-medium rounded bg-${tutorial.levelColor}-500/10 text-${tutorial.levelColor}-400">${tutorial.level}</span>
                                <span class="px-2 py-0.5 text-xs font-medium rounded bg-dark-700 text-dark-400">${tutorial.tech}</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2 group-hover:text-${tutorial.levelColor}-400 transition-colors">${tutorial.title}</h3>
                            <p class="text-dark-400 text-sm mb-4">${tutorial.description}</p>
                            <div class="flex items-center gap-4 text-sm text-dark-500">
                                <span class="flex items-center gap-1">📚 ${tutorial.lessons} Lessons</span>
                                <span class="flex items-center gap-1">⏱️ ${tutorial.hours} Hours</span>
                                <span class="flex items-center gap-1">⭐ ${tutorial.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderAITools() {
            const grid = document.getElementById('ai-tools-grid');
            grid.innerHTML = aiTools.map(tool => {
                const stars = [];
                for (let i = 0; i < Math.floor(tool.stars); i++) stars.push('★');
                if (tool.stars % 1 !== 0) stars.push('★');
                while (stars.length < 5) stars.push('☆');
                
                return `
                    <div class="group card-hover bg-dark-900 border border-dark-800 rounded-2xl p-6 hover:border-primary-500/30 text-center">
                        <div class="w-16 h-16 mx-auto bg-gradient-to-br ${tool.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all text-2xl">
                            ${tool.icon}
                        </div>
                        <h3 class="font-bold mb-1">${tool.name}</h3>
                        <p class="text-dark-500 text-sm mb-3">${tool.description}</p>
                        <div class="flex items-center justify-center gap-1 mb-4">
                            <span class="text-yellow-400">${stars.map(s => s === '★' ? '★' : '☆').join('')}</span>
                            <span class="text-xs text-dark-500 ml-1">${tool.rating}</span>
                        </div>
                        <span class="inline-block px-3 py-1 text-xs font-medium rounded-full bg-${tool.pricingColor}-500/10 text-${tool.pricingColor}-400">${tool.pricing}</span>
                    </div>
                `;
            }).join('');
        }

        // ========== FILTER FUNCTION ==========
        function filterArticles(category) {
            articlesToShow = 6; // Reset pagination
            renderArticles(category);
            
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => {
                btn.classList.remove('bg-primary-500', 'text-white');
                btn.classList.add('bg-dark-800', 'text-dark-400');
            });
            
            const activeBtn = document.querySelector(`[data-filter="${category}"]`);
            activeBtn.classList.remove('bg-dark-800', 'text-dark-400');
            activeBtn.classList.add('bg-primary-500', 'text-white');
        }

        // ========== TYPING EFFECT ==========
        const words = ['& Innovation.', '& AI Tools.', '& Web Dev.', '& Code.'];
        let wordIndex = 0, charIndex = 0, isDeleting = false;
        const typedEl = document.getElementById('typed-text');

        function type() {
            const current = words[wordIndex];
            typedEl.textContent = isDeleting 
                ? current.substring(0, charIndex--) 
                : current.substring(0, charIndex++);

            let speed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === current.length + 1) {
                speed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                speed = 500;
            }
            setTimeout(type, speed);
        }

        // ========== COUNTER ANIMATION ==========
        function animateCounter(el, target, suffix = '') {
            let current = 0;
            const step = target / 60;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.textContent = Math.floor(current) + (target >= 1000 ? (suffix || '+') : suffix);
            }, 30);
        }

        let countersStarted = false;
        function startCounters() {
            if (countersStarted) return;
            countersStarted = true;
            animateCounter(document.getElementById('stat1'), 500, '+');
            animateCounter(document.getElementById('stat2'), 100, '+');
            animateCounter(document.getElementById('stat3'), 50, 'K+');
        }

        // ========== SEARCH ==========
        function toggleSearch() {
            const modal = document.getElementById('search-modal');
            modal.classList.toggle('hidden');
            if (!modal.classList.contains('hidden')) {
                document.getElementById('search-input').focus();
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        function handleSearch(query) {
            const results = document.getElementById('search-results');
            if (!query.trim()) {
                results.innerHTML = '<p class="text-center text-dark-500 py-8">Start typing to search...</p>';
                return;
            }
            const filtered = articles.filter(item => 
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.categoryDisplay.toLowerCase().includes(query.toLowerCase()) ||
                item.author.toLowerCase().includes(query.toLowerCase())
            );
            if (filtered.length === 0) {
                results.innerHTML = '<p class="text-center text-dark-500 py-8">No results found. Try a different search term.</p>';
                return;
            }
            results.innerHTML = filtered.map(item => `
                <a href="#" class="flex items-center gap-4 p-4 rounded-xl hover:bg-dark-800 transition-colors cursor-pointer">
                    <svg class="w-5 h-5 text-dark-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    <div>
                        <div class="text-white font-medium">${item.title}</div>
                        <div class="text-xs text-dark-500">${item.categoryDisplay} · ${item.date}</div>
                    </div>
                </a>
            `).join('');
        }

        // ========== EVENT LISTENERS ==========
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.getElementById('search-modal').classList.add('hidden');
                document.body.style.overflow = '';
                closePages();
            }
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                toggleSearch();
            }
        });

        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('dark-glass', 'border-b', 'border-dark-800', 'shadow-lg');
            } else {
                navbar.classList.remove('dark-glass', 'border-b', 'border-dark-800', 'shadow-lg');
            }

            const btn = document.getElementById('back-to-top');
            if (window.scrollY > 500) {
                btn.classList.remove('opacity-0', 'invisible');
                btn.classList.add('opacity-100', 'visible');
            } else {
                btn.classList.add('opacity-0', 'invisible');
                btn.classList.remove('opacity-100', 'visible');
            }

            if (window.scrollY < 600) startCounters();
        });

        // ========== MOBILE MENU ==========
        function toggleMobile() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            menu.classList.toggle('hidden');
            if (!menu.classList.contains('hidden')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
            }
        }

        // ========== NEWSLETTER ==========
        function handleNewsletter(e) {
            e.preventDefault();
            document.getElementById('newsletter-success').classList.remove('hidden');
            e.target.reset();
            setTimeout(() => {
                document.getElementById('newsletter-success').classList.add('hidden');
            }, 5000);
        }

        // ========== CONTACT FORM ==========
        function handleContact(e) {
            e.preventDefault();
            document.getElementById('contact-success').classList.remove('hidden');
            e.target.reset();
            setTimeout(() => {
                document.getElementById('contact-success').classList.add('hidden');
            }, 5000);
        }

        // ========== LEGAL PAGES ==========
        function showPage(page) {
            closePages();
            document.getElementById(`${page}-modal`).classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closePages() {
            ['privacy-modal', 'terms-modal', 'disclaimer-modal'].forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });
            document.body.style.overflow = '';
        }

        // ========== THEME TOGGLE ==========
        function toggleTheme() {
            const icon = document.getElementById('theme-icon');
            icon.innerHTML = icon.innerHTML.includes('moon') 
                ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>'
                : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>';
        }

        // ========== COOKIES ==========
        function acceptCookies() {
            document.getElementById('cookie-banner').classList.add('hidden');
            localStorage.setItem('cookies-accepted', 'true');
        }

        function declineCookies() {
            document.getElementById('cookie-banner').classList.add('hidden');
            localStorage.setItem('cookies-accepted', 'false');
        }

        // Show cookie banner
        if (!localStorage.getItem('cookies-accepted')) {
            setTimeout(() => {
                document.getElementById('cookie-banner').classList.remove('hidden');
            }, 2000);
        }

        // ========== SCROLL ANIMATIONS ==========
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        // ========== SMOOTH ANCHOR SCROLL ==========
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target && !this.hasAttribute('onclick')) {
                    e.preventDefault();
                    const offset = 80;
                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            });
        });

        // ========== INITIALIZE ==========
async function loadData() {
    const repo = "Abdullaha1b2c3d4/TechPulse";

    // ========== LOAD ARTICLES ==========
    const listArticles = await fetch(`https://api.github.com/repos/${repo}/contents/content/articles`);
    const filesArticles = await listArticles.json();
    const mdArticles = filesArticles.filter(file => file.name.endsWith(".md"));

    for (const file of mdArticles) {
        const res = await fetch(file.download_url);
        const text = await res.text();

        // Extract YAML frontmatter
        const match = text.match(/---([\s\S]*?)---/);
        if (match) {
            const yaml = match[1];
            const article = {};
            yaml.split("\n").forEach(line => {
                const [key, ...rest] = line.split(":");
                if (!key) return;
                article[key.trim()] = rest.join(":").trim();
            });

            article.featured = article.featured === "true";
            articles.push(article);
        }
    }

    // ========== LOAD AI TOOLS ==========
    const listTools = await fetch(`https://api.github.com/repos/${repo}/contents/content/ai-tools`);
    const filesTools = await listTools.json();
    const mdTools = filesTools.filter(file => file.name.endsWith(".md"));

    for (const file of mdTools) {
        const res = await fetch(file.download_url);
        const text = await res.text();

        // Extract YAML frontmatter
        const match = text.match(/---([\s\S]*?)---/);
        if (match) {
            const yaml = match[1];
            const tool = {};
            yaml.split("\n").forEach(line => {
                const [key, ...rest] = line.split(":");
                if (!key) return;
                tool[key.trim()] = rest.join(":").trim();
            });

            tool.stars = Number(tool.stars || 0);
            tool.rating = Number(tool.rating || 0);
            aiTools.push(tool);
        }
    }

    // ========== RENDER ==========
    renderFeatured();
    renderArticles('all');
    renderAITools();
}
        type();
        startCounters();
loadData();        
let fuck = document.getElementById('fuck');
let taxi = document.getElementById('taxi');
taxi.innerHTML = `<h1 class="text-blue-500 text-2xl text-center bg-red-500"> Fuck </h1>`