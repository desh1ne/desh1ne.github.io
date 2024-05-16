function showSections(firstSectionId, secondSectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Скрыть все секции
    });
    document.getElementById(firstSectionId).style.display = 'block'; // Показать первую секцию
    document.getElementById(secondSectionId).style.display = 'block'; // Показать вторую секцию
}

