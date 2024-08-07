let slideIndex = 0; // Inicjalizacja indeksu slajdu
showSlides(); // Wywołanie funkcji pokazującej slajdy

function showSlides() {
    let slides = document.getElementsByClassName("mySlides"); // Pobranie wszystkich slajdów
    let dots = document.getElementsByClassName("dot"); // Pobranie wszystkich kropek

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ukrycie wszystkich slajdów
    }

    slideIndex++; // Zwiększenie indeksu slajdu

    if (slideIndex > slides.length) {
        slideIndex = 1; // Jeśli indeks jest większy niż liczba slajdów, wróć do pierwszego slajdu
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Usunięcie klasy 'active' ze wszystkich kropek
    }

    slides[slideIndex - 1].style.display = "block"; // Wyświetlenie aktualnego slajdu
    dots[slideIndex - 1].className += " active"; // Dodanie klasy 'active' do aktualnej kropki

    setTimeout(showSlides, 1000); // Zmiana slajdu co 3 sekundy
}

document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
    
    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1); // Pobiera id sekcji bez '#'
            const targetSection = document.getElementById(targetId); // Pobiera element sekcji

            if (targetSection) {
                // Scrolluj stronę do sekcji
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth" // Płynne przewijanie
                });
            }
        });
    });
});