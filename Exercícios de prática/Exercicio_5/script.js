window.addEventListener("load", start, false);

const dayName = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado");
const monthName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");

function start() {
    var button1 = document.getElementById("btn1");
    var button2 = document.getElementById("btn2");
    var button3 = document.getElementById("btn3");
    var button4 = document.getElementById("btn4");
   
    button1.addEventListener("click", dateDecadeAgo, false);
    button2.addEventListener("click", dateYesterday, false);
    button3.addEventListener("click", dateNow, false);
    button4.addEventListener("click", dateWeekInFuture, false);
}

function dateDecadeAgo () {
    let currentDate = new Date;
    let decade = (365 * 10);
    let aDecadeDate = new Date(currentDate.setDate(currentDate.getDate() - decade));
    let Time = new Date(aDecadeDate).toLocaleTimeString();
    let messageDecadeAgo = `A uma década atrás (neste mesmo horário) foi ${dayName[aDecadeDate.getDay()]}, ${aDecadeDate.getDate()} de ${monthName[aDecadeDate.getMonth()]} de ${aDecadeDate.getFullYear()} às ${Time}.`;
    window.alert(messageDecadeAgo);
}

function dateYesterday () {
    let currentDate = new Date;
    let yesterdayDate = new Date(currentDate.setDate(currentDate.getDate()- 1));
    let Time = new Date(yesterdayDate).toLocaleTimeString();
    let messageYesterday = `Ontem (neste mesmo horário) foi ${dayName[yesterdayDate.getDay()]}, ${yesterdayDate.getDate()} de ${monthName[yesterdayDate.getMonth()]} de ${yesterdayDate.getFullYear()} às ${Time}.`;
    window.alert(messageYesterday);
}

function dateNow () {    
    let now = new Date;
    let Time = new Date(now).toLocaleTimeString();
    let messageNow = `Hoje é ${dayName[now.getDay()]}, ${now.getDate()} de ${monthName[now.getMonth()]} de ${now.getFullYear()} às ${Time}.`;;
    window.alert(messageNow);
}

function dateWeekInFuture () {
    let currentDate = new Date;
    let week = 7;
    let oneWeekDate = new Date(currentDate.setDate(currentDate.getDate() + week));
    let Time = new Date(oneWeekDate).toLocaleTimeString();
    let messageWeekFuture = `Daqui a uma semana (neste mesmo horário) será ${dayName[oneWeekDate.getDay()]}, ${oneWeekDate.getDate()} de ${monthName[oneWeekDate.getMonth()]} de ${oneWeekDate.getFullYear()} às ${Time}.`;
    window.alert(messageWeekFuture);
}