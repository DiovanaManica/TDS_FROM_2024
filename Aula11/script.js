document.addEventListener('DOMContentLoaded', function () {
    // Função para rolar suavemente até a seção clicada
    function scrollToSection(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajusta o scroll para cima se necessário
                behavior: 'smooth'
            });
        }
    }

    // Função para atualizar a navegação com a seção ativa
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');

        let currentIndex = sections.length;

        while (--currentIndex && window.scrollY + 50 < sections[currentIndex].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[currentIndex].classList.add('active');
    }

    // Adiciona o evento de rolagem suave nos links de navegação
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', scrollToSection);
    });

    // Adiciona o evento de rolagem para atualizar a navegação ativa
    window.addEventListener('scroll', updateActiveNav);

    // Atualiza a navegação ativa ao carregar a página
    updateActiveNav();
});