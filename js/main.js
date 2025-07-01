// 項目數據 - 可輕鬆添加新項目
const projects = [
    {
        id: 1,
        title: "LearnGarden 學習花園",
        description: "一個創新的學習管理平台，提供個人化的學習體驗和進度追蹤功能。採用現代化的網頁技術開發，具有直觀的用戶界面和響應式設計。",
        tags: ["HTML", "CSS", "JavaScript", "響應式設計", "用戶體驗"],
        icon: "fas fa-seedling",
        liveUrl: "https://henryhan168.github.io/learngarden/index.html",
        githubUrl: "#",
        featured: true,
        category: "教育平台"
    }
    // 未來可以在這裡添加更多項目
    // {
    //     id: 2,
    //     title: "新項目名稱",
    //     description: "項目描述...",
    //     tags: ["技術標籤"],
    //     icon: "fas fa-icon-name",
    //     liveUrl: "項目網址",
    //     githubUrl: "GitHub網址",
    //     featured: false,
    //     category: "項目類別"
    // }
];

// DOM 元素
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const projectsGrid = document.getElementById('projects-grid');

// 導航功能
class Navigation {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupScrollEffect();
        this.setupSmoothScroll();
    }

    // 手機版導航選單
    setupMobileMenu() {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            this.toggleBurgerAnimation();
        });

        // 點擊導航連結時關閉選單
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                this.resetBurgerAnimation();
            });
        });

        // 點擊外部區域關閉選單
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                this.resetBurgerAnimation();
            }
        });
    }

    // 漢堡選單動畫
    toggleBurgerAnimation() {
        const bars = navToggle.querySelectorAll('.bar');
        bars[0].style.transform = navMenu.classList.contains('active') 
            ? 'rotate(-45deg) translate(-5px, 6px)' 
            : 'none';
        bars[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        bars[2].style.transform = navMenu.classList.contains('active') 
            ? 'rotate(45deg) translate(-5px, -6px)' 
            : 'none';
    }

    resetBurgerAnimation() {
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }

    // 滾動效果
    setupScrollEffect() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // 平滑滾動
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // 考慮導航欄高度
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// 項目管理
class ProjectManager {
    constructor() {
        this.projects = projects;
        this.init();
    }

    init() {
        this.renderProjects();
        this.setupIntersectionObserver();
    }

    // 渲染項目卡片
    renderProjects() {
        if (!projectsGrid) return;

        projectsGrid.innerHTML = this.projects.map(project => this.createProjectCard(project)).join('');
        
        // 添加動畫效果
        this.animateProjectCards();
    }

    // 創建項目卡片HTML
    createProjectCard(project) {
        return `
            <div class="project-card" data-project-id="${project.id}">
                <div class="project-image">
                    <i class="${project.icon}"></i>
                    ${project.featured ? '<div class="featured-badge">精選作品</div>' : ''}
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <i class="fas fa-external-link-alt"></i>
                            查看作品
                        </a>
                        ${project.githubUrl !== '#' ? `
                            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                                <i class="fab fa-github"></i>
                                原始碼
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    // 項目卡片動畫
    animateProjectCards() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    // 添加新項目的方法（供未來使用）
    addProject(projectData) {
        const newId = Math.max(...this.projects.map(p => p.id)) + 1;
        const newProject = {
            id: newId,
            ...projectData
        };
        
        this.projects.push(newProject);
        this.renderProjects();
        
        return newProject;
    }

    // 移除項目
    removeProject(projectId) {
        this.projects = this.projects.filter(p => p.id !== projectId);
        this.renderProjects();
    }

    // 更新項目
    updateProject(projectId, updateData) {
        const projectIndex = this.projects.findIndex(p => p.id === projectId);
        if (projectIndex !== -1) {
            this.projects[projectIndex] = { ...this.projects[projectIndex], ...updateData };
            this.renderProjects();
        }
    }

    // 交集觀察器（Intersection Observer）
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // 觀察所有區塊
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }
}

// 工具函數
class Utils {
    // 節流函數
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // 防抖函數
    static debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // 檢查元素是否在視窗中
    static isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

// 載入動畫
class LoadingAnimation {
    constructor() {
        this.init();
    }

    init() {
        // 頁面載入完成後移除載入動畫
        window.addEventListener('load', () => {
            this.hideLoading();
        });

        // 為了確保動畫效果，設定最小顯示時間
        setTimeout(() => {
            this.hideLoading();
        }, 1000);
    }

    hideLoading() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }
    }
}

// 初始化應用程式
class App {
    constructor() {
        this.init();
    }

    init() {
        // 等待DOM載入完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeComponents();
            });
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        // 初始化各個組件
        new Navigation();
        new ProjectManager();
        new LoadingAnimation();

        // 添加全局樣式
        this.addGlobalStyles();

        // 初始化其他功能
        this.initializeFeatures();
    }

    addGlobalStyles() {
        // 添加載入動畫的CSS（如果需要）
        const style = document.createElement('style');
        style.textContent = `
            .fade-in-up {
                animation: fadeInUp 0.8s ease-out;
            }
            
            .featured-badge {
                position: absolute;
                top: 15px;
                right: 15px;
                background: linear-gradient(135deg, #f093fb, #f5576c);
                color: white;
                padding: 0.25rem 0.75rem;
                border-radius: 20px;
                font-size: 0.75rem;
                font-weight: 600;
                box-shadow: 0 2px 10px rgba(240, 147, 251, 0.3);
            }
            
            .loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: white;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                transition: opacity 0.3s ease;
            }
        `;
        document.head.appendChild(style);
    }

    initializeFeatures() {
        // 添加鍵盤導航支援
        this.setupKeyboardNavigation();

        // 添加滾動到頂部按鈕
        this.setupScrollToTop();

        // 初始化其他互動功能
        this.setupInteractiveFeatures();
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                navMenu.classList.remove('active');
            }
        });
    }

    setupScrollToTop() {
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border: none;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            box-shadow: var(--shadow);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
            z-index: 999;
        `;

        document.body.appendChild(scrollToTopBtn);

        // 滾動事件
        window.addEventListener('scroll', Utils.throttle(() => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.visibility = 'visible';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.visibility = 'hidden';
            }
        }, 100));

        // 點擊事件
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    setupInteractiveFeatures() {
        // 添加滑鼠視差效果
        document.addEventListener('mousemove', Utils.throttle((e) => {
            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
                    const xRotate = (y - rect.height / 2) / 10;
                    const yRotate = (rect.width / 2 - x) / 10;
                    card.style.transform = `perspective(1000px) rotateX(${xRotate}deg) rotateY(${yRotate}deg) translateZ(10px)`;
                } else {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                }
            });
        }, 16));
    }
}

// 啟動應用程式
new App(); 