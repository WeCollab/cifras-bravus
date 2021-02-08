let campoHarmonicoC = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
let campoHarmonicoCSust = ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'];
let campoHarmonicoD = ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'];
let campoHarmonicoEb = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'];
let campoHarmonicoE = ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'];
let campoHarmonicoF = ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'];
let campoHarmonicoFSust = ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'];
let campoHarmonicoG = ['G', 'A', 'B', 'C', 'D', 'E', 'F#'];
let campoHarmonicoAb = ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'];
let campoHarmonicoA = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'];
let campoHarmonicoBb = ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'];
let campoHarmonicoB = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'];

$(document).ready(function () {
    let selectTom = document.getElementById('selectTom');
    $(selectTom).change(function () {
        let value = $(this).val();
        if (value == '1') {
            $('.tonica').text(campoHarmonicoC[0]);
            $('.segundo').text(campoHarmonicoC[1]);
            $('.quarto').text(campoHarmonicoC[3]);
            $('.quinto').text(campoHarmonicoC[4]);
            $('.sexto').text(campoHarmonicoC[5]);
            $('.setimo').text(campoHarmonicoC[6]);
        } else if (value == '2') {
            $('.tonica').text(campoHarmonicoCSust[0]);
            $('.segundo').text(campoHarmonicoCSust[1]);
            $('.quarto').text(campoHarmonicoCSust[3]);
            $('.quinto').text(campoHarmonicoCSust[4]);
            $('.sexto').text(campoHarmonicoCSust[5]);
            $('.setimo').text(campoHarmonicoCSust[6]);
        } else if (value == '3') {
            $('.tonica').text(campoHarmonicoD[0]);
            $('.segundo').text(campoHarmonicoD[1]);
            $('.quarto').text(campoHarmonicoD[3]);
            $('.quinto').text(campoHarmonicoD[4]);
            $('.sexto').text(campoHarmonicoD[5]);
            $('.setimo').text(campoHarmonicoD[6]);
        } else if (value == '4') {
            $('.tonica').text(campoHarmonicoEb[0]);
            $('.segundo').text(campoHarmonicoEb[1]);
            $('.quarto').text(campoHarmonicoEb[3]);
            $('.quinto').text(campoHarmonicoEb[4]);
            $('.sexto').text(campoHarmonicoEb[5]);
            $('.setimo').text(campoHarmonicoEb[6]);
        } else if (value == '5') {
            $('.tonica').text(campoHarmonicoE[0]);
            $('.segundo').text(campoHarmonicoE[1]);
            $('.quarto').text(campoHarmonicoE[3]);
            $('.quinto').text(campoHarmonicoE[4]);
            $('.sexto').text(campoHarmonicoE[5]);
            $('.setimo').text(campoHarmonicoE[6]);
        } else if (value == '6') {
            $('.tonica').text(campoHarmonicoF[0]);
            $('.segundo').text(campoHarmonicoF[1]);
            $('.quarto').text(campoHarmonicoF[3]);
            $('.quinto').text(campoHarmonicoF[4]);
            $('.sexto').text(campoHarmonicoF[5]);
            $('.setimo').text(campoHarmonicoF[6]);
        } else if (value == '7') {
            $('.tonica').text(campoHarmonicoFSust[0]);
            $('.segundo').text(campoHarmonicoFSust[1]);
            $('.quarto').text(campoHarmonicoFSust[3]);
            $('.quinto').text(campoHarmonicoFSust[4]);
            $('.sexto').text(campoHarmonicoFSust[5]);
            $('.setimo').text(campoHarmonicoFSust[6]);
        } else if (value == '8') {
            $('.tonica').text(campoHarmonicoG[0]);
            $('.segundo').text(campoHarmonicoG[1]);
            $('.quarto').text(campoHarmonicoG[3]);
            $('.quinto').text(campoHarmonicoG[4]);
            $('.sexto').text(campoHarmonicoG[5]);
            $('.setimo').text(campoHarmonicoG[6]);
        } else if (value == '9') {
            $('.tonica').text(campoHarmonicoAb[0]);
            $('.segundo').text(campoHarmonicoAb[1]);
            $('.quarto').text(campoHarmonicoAb[3]);
            $('.quinto').text(campoHarmonicoAb[4]);
            $('.sexto').text(campoHarmonicoAb[5]);
            $('.setimo').text(campoHarmonicoAb[6]);
        } else if (value == '10') {
            $('.tonica').text(campoHarmonicoA[0]);
            $('.segundo').text(campoHarmonicoA[1]);
            $('.quarto').text(campoHarmonicoA[3]);
            $('.quinto').text(campoHarmonicoA[4]);
            $('.sexto').text(campoHarmonicoA[5]);
            $('.setimo').text(campoHarmonicoA[6]);
        } else if (value == '11') {
            $('.tonica').text(campoHarmonicoBb[0]);
            $('.segundo').text(campoHarmonicoBb[1]);
            $('.quarto').text(campoHarmonicoBb[3]);
            $('.quinto').text(campoHarmonicoBb[4]);
            $('.sexto').text(campoHarmonicoBb[5]);
            $('.setimo').text(campoHarmonicoBb[6]);
        } else if (value == '12') {
            $('.tonica').text(campoHarmonicoB[0]);
            $('.segundo').text(campoHarmonicoB[1]);
            $('.quarto').text(campoHarmonicoB[3]);
            $('.quinto').text(campoHarmonicoB[4]);
            $('.sexto').text(campoHarmonicoB[5]);
            $('.setimo').text(campoHarmonicoB[6]);
        }
    })

    let selectType = document.getElementById('selectType');
    $(selectType).change(function () {
        let value = $(this).val();
        if (value == '2') {
            $('#corpoCifra').find('.letra').show(1000);
            $('#corpoCifra').find('.cifra-pro').show(1000);
            $('.nona').hide(1000);
            $('.sete').hide(1000);
            $('.baixo').hide(1000);
            $('.compasso').hide(1000);
            $('.estrofe-1').text('1ª Estrofe:');
        } else if (value == '3') {
            $('#corpoCifra').find('.letra').hide(1000);
            $('#corpoCifra').find('.cifra-pro').hide(1000);
            $('.nona').show(1000);
            $('.sete').show(1000);
            $('.baixo').show(1000);
            $('.compasso').show(1000);
            $('.estrofe-1').text('Estrofes:');
        } else {
            $('#corpoCifra').find('.letra').show(1000);
            $('#corpoCifra').find('.cifra-pro').show(1000);
            $('.nona').show(1000);
            $('.sete').show(1000);
            $('.baixo').show(1000);
            $('.compasso').hide(1000);
            $('.estrofe-1').text('1ª Estrofe:');
        }
    });


    /*let order = document.getElementById('selectOrder');
    $(order).change(function() {
        let value = $(this).val();
      if (value == '2') {
          $('li').css({'float': 'right', 'margin': '0 2px'});
      } else {
          $('li').css('float', 'left');
      }
    })*/

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

    $('[data-component="table-sort"]').tablesorter({
        headers : {
          1 : { sortInitialOrder: 'asc' }
        }
    });

    let order = document.getElementById('selectOrder');
    $(order).change(function () {
        let value = $(this).val();
        if (value == '2') {
            $('[data-component="table-sort"] td').each(function () {
                $(this).parent().prepend(this);
            });
            $('[data-component="table-sort"] th').each(function () {
                $(this).parent().prepend(this);
            });
        } else {
            $('[data-component="table-sort"] td').each(function () {
                $(this).parent().prepend(this);
            });
            $('[data-component="table-sort"] th').each(function () {
                $(this).parent().prepend(this);
            });
        }
    })
    $('[data-component="table-sort"]').find('th:eq(0)').trigger('sort');
});