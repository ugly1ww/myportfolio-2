const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

document.querySelectorAll('.project').forEach(p => {
    p.addEventListener('click', () => openLightbox(p.dataset.full || p.querySelector('img').src));
    p.addEventListener('keydown', (e) => { if (e.key === 'Enter') openLightbox(p.dataset.full || p.querySelector('img').src); });
});

/*// обробка форми муляж, без відправлення на сервер
function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    // базова валідація
    if(!name || !email || !message){
        showResult('Будь ласка, заповніть всі поля.', true);
        return;
    }
    // імітація відправки
    showResult('Дякую! Повідомлення прийнято. (імітація відправки)', false);
    form.reset();
}
function showResult(text, isError){
    const el = document.getElementById('formResult');
    el.textContent = text;
    el.style.color = isError ? '#ff8a8a' : 'var(--accent)';
    setTimeout(()=> el.textContent = '', 6000);
}

document.querySelectorAll('a, button, input, select, textarea, .project').forEach(el=>{
    if(!el.hasAttribute('tabindex')) el.setAttribute('tabindex','0');
});*/

const city = "Soria";

async function getWeather() {
    const url = `https://wttr.in/${city}?format=j1`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Помилка запиту");

        const data = await response.json();

        const current = data.current_condition[0];
        const weatherInfo = document.getElementById("weather-info");

        weatherInfo.innerHTML = `
        <p><strong>${city}</strong></p>
        <p>${current.weatherDesc[0].value}</p>
        <p>🌡️ Температура: ${current.temp_C}°C</p>
        <p>💨 Вітер: ${current.windspeedKmph} км/год</p>
        <p>💧 Вологість: ${current.humidity}%</p>
    `;
    } catch (error) {
        document.getElementById("weather-info").innerText = "Помилка завантаження даних.";
        console.error(error);
    }
}

const audit = {
    performance: Math.floor(Math.random() * 40) + 60,
    seo: Math.floor(Math.random() * 30) + 70,
    accessibility: Math.floor(Math.random() * 20) + 80
};

document.getElementById("audit").innerHTML = `
    <h3>Аналіз сайту</h3>
    <p>Продуктивність: ${audit.performance}%</p>
    <p>SEO: ${audit.seo}%</p>
    <p>Доступність: ${audit.accessibility}%</p>
`;