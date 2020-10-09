var startDateControl = document.querySelector('input[type="date"]');
var finishDateControl = document.querySelector('#finish');

var date = new Date();
var day = date.getDate(); //Gün

if(day < 10){
    day = '0' + date.getDate(); 
} else {
    day = date.getDate(); 
}

var month = date.getMonth() + 1; //Ay sıfırdan başlıyo hazır fonksiyonda

if(month < 10){
    month = '0' + month;
} else {
    month = date.getMonth() + 1;
}

const year = date.getFullYear(); //Yıl

const currentDate = year + '-' + month + '-' + day;

startDateControl.min = currentDate; //Şuan ki Tarih Bilgisi.
finishDateControl.min = currentDate;


//Smooth Scrool

$('.navbar a').on('click',function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);

    }
})
