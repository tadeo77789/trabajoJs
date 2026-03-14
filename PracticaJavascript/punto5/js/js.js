function lista() {
    const texto = document.getElementById('texto').value.trim();
    if (!texto) return;
    const cont = document.getElementById('lista');
    const p = document.createElement('p');
    p.textContent = texto;
    cont.appendChild(p);
    document.getElementById('texto').value = '';
}
