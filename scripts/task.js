let check = false;
function verify() {
    const input = document.getElementById('A');
    const a = Number(input.value);
    const output = document.getElementById('result');
    if (input.value.trim() === '' || !Number.isFinite(a)) {
        output.value = 'Введите вещественное число A';
        check = false;
        return;
    }
    let x;
    if (a < 10) {
        x = a ** 4;
    } else if (a > 61) {
        x = a;
    } else {
        x = a - Math.sin(a ** 2);
    }
    output.value = String(x);
    check = true;
}
function send() {
    if (check) {
        document.getElementById('UserEnter').submit();
    } else {
        alert('Сначала введите число A и нажмите «Вычислить»');
    }
}
document.getElementById('A').addEventListener('input', () => { check = false; document.getElementById('result').value = 'не определён'; });
document.getElementById('verify').addEventListener('click', verify);
document.getElementById('send').addEventListener('click', send);
