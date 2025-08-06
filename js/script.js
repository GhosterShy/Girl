document.addEventListener('DOMContentLoaded', function() {

    // --- ЛОГИКА ДЛЯ ТАЙМЕРА ОБРАТНОГО ОТСЧЕТА ---
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
      
          // Месяц и день дня рождения
        const birthdayMonth = 8; // Август (нумерация с 0)
        const birthdayDay = 12;

       

    function updateCountdown() {
            const now = new Date();
            const year = now.getFullYear();
            const birthdayDate = new Date(year, birthdayMonth - 1, birthdayDay, 0, 0, 0);

            // Проверяем, сегодня ли день рождения
            const isBirthday =
                now.getDate() === birthdayDate.getDate() &&
                now.getMonth() === birthdayDate.getMonth();

            // Проверяем, прошёл ли день рождения (на следующий день)
            const isAfterBirthday =
                now > birthdayDate &&
                !(now.getDate() === birthdayDate.getDate() && now.getMonth() === birthdayDate.getMonth());

            if (isBirthday) {
                countdownElement.innerHTML = "<div>Туған</div><div>күніңмен</div><div>жаным</div><div>🎉</div>";
            } else {
                // Если день рождения прошёл, начинаем отсчёт до следующего года
                let nextBirthday = birthdayDate;
                if (isAfterBirthday) {
                    nextBirthday = new Date(year + 1, birthdayMonth - 1, birthdayDay, 0, 0, 0);
                }
                const countDownDate = nextBirthday.getTime();
                const distance = countDownDate - now.getTime();

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById('days').innerText = days;
                document.getElementById('hours').innerText = hours;
                document.getElementById('minutes').innerText = minutes;
                document.getElementById('seconds').innerText = seconds;
            }
}

        updateCountdown();
        setInterval(updateCountdown, 1000);
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


