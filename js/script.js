document.addEventListener('DOMContentLoaded', function() {

    // --- ЛОГИКА ДЛЯ ТАЙМЕРА ОБРАТНОГО ОТСЧЕТА ---
    // Ищем таймер только если он есть на странице
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
      
        // Формат: "Месяц день, год часы:минуты:секунды" (например, "Aug 22, 2025 00:00:00")
        const birthday = "Aug 12, 2025 00:00:00"; 
        const countDownDate = new Date(birthday).getTime();

        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').innerText = days;
            document.getElementById('hours').innerText = hours;
            document.getElementById('minutes').innerText = minutes;
            document.getElementById('seconds').innerText = seconds;

            if (distance < 0) {
                clearInterval(x);
                countdownElement.innerHTML = "<div>🎉</div><div>С</div><div>Днем</div><div>Рождения!</div>";
            }
        }, 1000);
    }

    // --- ЛОГИКА ДЛЯ ПЛАВНОГО ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ ПРИ ПРОКРУТКЕ ---
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150; // Высота, на которой элемент становится видимым

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    // Вызываем функцию один раз при загрузке, чтобы показать элементы, которые уже на экране
    reveal();

    var swiper = new Swiper(".progress-slide-carousel", {
        loop: true,
        fraction: true,
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".progress-slide-carousel .swiper-pagination",
        type: "progressbar",
        },
    });


   

});
document.getElementById('play').addEventListener('click', function() {
    const audio = document.querySelector('.song');
    audio.play();
    document.getElementById('overlay').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bg-music');
    const playlist = Array.from(document.querySelectorAll('#playlist li')).map(li => li.dataset.src);
    let current = 0;

    function playTrack(index) {
        if (playlist[index]) {
            audio.src = playlist[index];
            audio.play();
        }
    }

    audio.addEventListener('ended', function() {
        current = (current + 1) % playlist.length;
        playTrack(current);
    });

    document.getElementById('play').addEventListener('click', function() {
        playTrack(current);
        document.getElementById('overlay').style.display = 'none';
    });
});


