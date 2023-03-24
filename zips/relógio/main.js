function hora() {

  var data = new Date();
  var dia = data.getDate(); // 1-31
  var dia_sem = data.getDay(); // 0-6 (zero=domingo)
  var mes = data.getMonth(); // 0-11 (zero=janeiro)
  var ano4 = data.getFullYear(); // 4 dígitos
  var hora = data.getHours(); // 0-23
  var min = data.getMinutes(); // 0-59

  var date = window.document.querySelector(".date");
  var hours = window.document.querySelector(".hours");
  //var para2023 = window.document.querySelector(".for2023")

  //var hours = document.querySelector('.hora');
  setInterval(() => {
    var data = new Date();
    var hora = data.getHours(); // 0-23
    var min = data.getMinutes(); // 0-59
    if (min >= 0 && min <= 9) {
      min = '0' + min
    };
    if (hora >= 0 && hora <= 9) {
      hora = '0' + hora
    };
    date.innerHTML = `${dia}/${mes +1}/${ano4}`
    hours.innerHTML = `${hora}:${min}`
  }, 1000);

}