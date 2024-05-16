document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const nextSibling = target.nextElementSibling || target.parentElement.firstElementChild; // Если следующий элемент отсутствует, выбираем первый элемент
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
        setTimeout(() => { // Небольшая задержка для плавной прокрутки
            window.scrollBy({
                top: nextSibling.getBoundingClientRect().top - window.innerHeight / 2,
                behavior: 'smooth'
            });
        }, 600);
    });
});
