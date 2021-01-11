const campoHarmonicoC = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const campoHarmonicoCSust = ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'];
const campoHarmonicoD = ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'];
const campoHarmonicoEb = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'];
const campoHarmonicoE = ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'];
const campoHarmonicoF = ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'];
const campoHarmonicoFSust = ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'];
const campoHarmonicoG = ['G', 'A', 'B', 'C', 'D', 'E', 'F#'];
const campoHarmonicoAb = ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'];
const campoHarmonicoA = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'];
const campoHarmonicoBb = ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'];
const campoHarmonicoB = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'];

let selectType = document.getElementById('selectType');
let selectTom = document.getElementById('selectTom');

let tonica = document.querySelectorAll('.tonica');
let segundo = document.querySelectorAll('.segundo');
let quarto = document.querySelectorAll('.quarto');
let quinto = document.querySelectorAll('.quinto');
let sexto = document.querySelectorAll('.sexto');
let setimo = document.querySelectorAll('.setimo');

function tomAtual() {
    if (selectTom.option.value = 1) {
        tonica.innerHTML = campoHarmonicoC[0];
        segundo.innerHTML = campoHarmonicoC[1];
        quarto.innerHTML = campoHarmonicoC[3];
        quinto.innerHTML = campoHarmonicoC[4];
        sexto.innerHTML = campoHarmonicoC[5];
        setimo.innerHTML = campoHarmonicoC[6];
    } else if (selectTom.option.value = 2) {
        tonica = campoHarmonicoCSust[0];
        segundo = campoHarmonicoCSust[1];
        quarto = campoHarmonicoCSust[3];
        quinto = campoHarmonicoCSust[4];
        sexto = campoHarmonicoCSust[5];
        setimo = campoHarmonicoCSust[6];
    } else if (selectTom.option.value = 3) {
        tonica = campoHarmonicoD[0];
        segundo = campoHarmonicoD[1];
        quarto = campoHarmonicoD[3];
        quinto = campoHarmonicoD[4];
        sexto = campoHarmonicoD[5];
        setimo = campoHarmonicoD[6];
    } else if (selectTom.option.value = 4) {
        tonica = campoHarmonicoEb[0];
        segundo = campoHarmonicoEb[1];
        quarto = campoHarmonicoEb[3];
        quinto = campoHarmonicoEb[4];
        sexto = campoHarmonicoEb[5];
        setimo = campoHarmonicoEb[6];
    } else if (selectTom.option.value = 5) {
        tonica = campoHarmonicoE[0];
        segundo = campoHarmonicoE[1];
        quarto = campoHarmonicoE[3];
        quinto = campoHarmonicoE[4];
        sexto = campoHarmonicoE[5];
        setimo = campoHarmonicoE[6];
    } else if (selectTom.option.value = 6) {
        tonica = campoHarmonicoF[0];
        segundo = campoHarmonicoF[1];
        quarto = campoHarmonicoF[3];
        quinto = campoHarmonicoF[4];
        sexto = campoHarmonicoF[5];
        setimo = campoHarmonicoF[6];
    } else if (selectTom.option.value = 7) {
        tonica = campoHarmonicoFSust[0];
        segundo = campoHarmonicoFSust[1];
        quarto = campoHarmonicoFSust[3];
        quinto = campoHarmonicoFSust[4];
        sexto = campoHarmonicoFSust[5];
        setimo = campoHarmonicoFSust[6];
    } else if (selectTom.option.value = 8) {
        tonica = campoHarmonicoG[0];
        segundo = campoHarmonicoG[1];
        quarto = campoHarmonicoG[3];
        quinto = campoHarmonicoG[4];
        sexto = campoHarmonicoG[5];
        setimo = campoHarmonicoG[6];
    } else if (selectTom.option.value = 9) {
        tonica = campoHarmonicoAb[0];
        segundo = campoHarmonicoAb[1];
        quarto = campoHarmonicoAb[3];
        quinto = campoHarmonicoAb[4];
        sexto = campoHarmonicoAb[5];
        setimo = campoHarmonicoAb[6];
    } else if (selectTom.option.value = 10) {
        tonica = campoHarmonicoA[0];
        segundo = campoHarmonicoA[1];
        quarto = campoHarmonicoA[3];
        quinto = campoHarmonicoA[4];
        sexto = campoHarmonicoA[5];
        setimo = campoHarmonicoA[6];
    } else if (selectTom.option.value = 11) {
        tonica = campoHarmonicoBb[0];
        segundo = campoHarmonicoBb[1];
        quarto = campoHarmonicoBb[3];
        quinto = campoHarmonicoBb[4];
        sexto = campoHarmonicoBb[5];
        setimo = campoHarmonicoBb[6];
    } else if (selectTom.option.value = 12) {
        tonica = campoHarmonicoB[0];
        segundo = campoHarmonicoB[1];
        quarto = campoHarmonicoB[3];
        quinto = campoHarmonicoB[4];
        sexto = campoHarmonicoB[5];
        setimo = campoHarmonicoB[6];
    }
}

$('#menu').click(function () {
    if (document.querySelector('nav').style.display == 'block') {
        $(document.querySelector('nav')).hide(1000);
    } else {
        $(document.querySelector('nav')).show(1000);
    }
})

$('main').click(function () {
    if (document.querySelector('nav').style.display == 'block') {
        $(document.querySelector('nav')).hide(1000);
    }
})