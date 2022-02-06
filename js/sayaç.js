var princewedding=new dcountup("Dec 9, 2021", "days")
princewedding.oncountup=function(result){
    //result is an object containing the current count up date/time, updated every second
    //Available properties: result["days"], result["hours"], result["minutes"], and result["seconds"]
    var mycountainer=document.getElementById("cpcontainer")
    mycountainer.innerHTML="Çalışma süresi: <b>"+result['days']+"</b> gün aktif."
}

// TARİH AYARI //
function refrClock()
{
var d=new Date();
var s=d.getSeconds();
var m=d.getMinutes();
var h=d.getHours();
var day=d.getDay();
var date=d.getDate();
var month=d.getMonth();
var year=d.getFullYear();
var days=new Array("Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi");
var months=new Array("Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık");
if (s<10) {s="0" + s}
if (m<10) {m="0" + m}
document.getElementById("clock").innerHTML= "<b>Tarih:</b> " + date + " " + months[month] + " " + year + " | <b>Günlerden:</b> " + days[day] + " | <b>Saat:</b> " + h + ":" + m + ":" + s + " "
setTimeout("refrClock()",1000);
}
refrClock();