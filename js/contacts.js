const menuBtn = document.getElementById('menu-btn2');
const menu = document.getElementById('menu2');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

document.querySelectorAll('.project').forEach(p => {
    p.addEventListener('click', () => openLightbox(p.dataset.full || p.querySelector('img').src));
    p.addEventListener('keydown', (e)=> { if(e.key==='Enter') openLightbox(p.dataset.full||p.querySelector('img').src); });
});

function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(!name || !email || !message){
        showResult('Будь ласка, заповніть всі поля.', true);
        return;
    }
    showResult('Дякую! Повідомлення прийнято. (імітація відправки)', false);
    form.reset();
}
function showResult(text, isError){
    const el = document.getElementById('formResult');
    el.textContent = text;
    el.style.color = isError ? '#ff8a8a' : 'var(--accent)';
    setTimeout(()=> el.textContent = '', 6000);
}

const form = document.getElementById('contactForm');
const formResult = document.getElementById('formResult');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // предотвращаем стандартную отправку

    const data = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    })
        .then(response => {
            if (response.ok) {
                formResult.textContent = "Повідомлення відправлено!";
                form.reset();
            } else {
                formResult.textContent = "Помилка відправки. Спробуйте пізніше.";
            }
        })
        .catch(() => {
            formResult.textContent = "Помилка відправки. Спробуйте пізніше.";
        });
});

document.querySelectorAll('a, button, input, select, textarea, .project').forEach(el=>{
    if(!el.hasAttribute('tabindex')) el.setAttribute('tabindex','0');
});