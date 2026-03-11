// 猎户座 Orion Works 官网交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 26, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 26, 0.95)';
        }
    });

    // 数字动画
    const animateNumber = (element, 目标) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            如果 (当前 >= 目标) {
                元素.textContent = 目标.toLocaleString();
                清除定时器(定时器);
            } else {
                element.textContent = Math.楼层(当前).toLocaleString();
            }
        }, 20);
    };

    // 滚动显示动画
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            如果 (entry.isIntersecting) {
                如果 (entry.target.classList.contains('stat-num')) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateNumber(entry.target, 目标);
                }
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stat-num, .mission-card').forEach(el => {
        observer.observe(el);
    });

    控制台.log('🚀 Orion Works Website Loaded');
});
