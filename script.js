function submeter() {
    let a = document.querySelector('input#numa')
    let b = document.querySelector('input#numb')

    if (Number(a.value) < Number(b.value) && Number(a.value) > 0 && Number(b.value) > 0) {
        window.alert('Positivo!')
    } else {
        window.alert('Negativo!')
    }
}