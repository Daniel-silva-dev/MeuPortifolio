function countsDay() {

  var data = new Date();
  var dia = data.getDate(); // 1-31
  var dia_sem = data.getDay(); // 0-6 (zero=domingo)
  var mes = data.getMonth() + 1; // 0-11 (zero=janeiro)
  var ano4 = data.getFullYear(); // 4 dígitos
  var hora = data.getHours(); // 0-23
  var min = data.getMinutes(); // 0-59

  var date = window.document.querySelector(".date");
  var hours = window.document.querySelector(".hours");
  var semana = window.document.querySelector('.semana');
  var imagem = window.document.querySelector('.img')
  var allItens = document.querySelector('.objects')

  if (hora >= 5 && hora < 7) {
    //amanhecer
    imagem.src='./imagens/amanhecer.jpeg'
    allItens.style.color='#A21BE2'
  }else if (hora >= 7 && hora <= 16) {
    //dia
    imagem.src='./imagens/dia.jpeg'
    allItens.style.color='#000'
  }else if (hora > 16 && hora < 18) {
    //anoitecer
    imagem.src='./imagens/anoitecer.jpeg'
    allItens.style.color='#A21BE2'
  }else if (hora >= 18 && hora < 23) {
    //noite
    imagem.src='./imagens/noite.jpeg'
    allItens.style.color='#A21BE2'
  }

  if (dia_sem === 0) {
    dia_sem = 'Domingo,e amanhã segunda.APROVEITE!';
  }else if (dia_sem === 1) {
    dia_sem = 'Segunda-feira.';
  }else if (dia_sem === 2) {
    dia_sem = 'Terça-feira.';
  }else if (dia_sem === 3) {
    dia_sem = 'Quarta-feira.';
  }else if (dia_sem === 4) {
    dia_sem = 'Quinta-feira.';
  }else if (dia_sem === 5) {
    dia_sem = 'Sexta-feia.';
  }else if (dia_sem == 6) {
    dia_sem = 'Sabado!Oh glória';
  }

  if (dia >= 0 && dia <= 9) {
    dia = '0' + dia;
  };

  if (mes >= 0 && mes <= 9) {
    mes = '0' + mes;
  };

  if (min >= 0 && min <= 9) {
    min = '0' + min;
  };

  if (hora >= 0 && hora <= 9) {
    hora = '0' + hora;
  };

  date.innerHTML = `${dia}/${mes}/${ano4}`;
  hours.innerHTML = `${hora}:${min}`;
  semana.innerHTML = `hoje é ${dia_sem}`;

}
;