

$(document).bind("mousedown", function (e) { //Herhangi bir yere tıklandığında
    if (!$(e.target).parents(".custom-menu").length > 0) { //Menü içerisinde değilsen
        $(".custom-menu").hide(100); //Menüyü gizle
    }
});

$(".custom-menu li").click(function () { //Özel menü li nesnesine tıklandığında
    switch ($(this).attr("data-action")) { //Data action
        case "first": alert("0 242 243 1393"); break; //1 ise
        case "second": alert("info@evusmimarlik.com.tr"); break;//2 ise
        case "third": alert("© 2016, Evus Mimarlık. Tüm hakları saklıdır."); break;//3 ise
    }
    $(".custom-menu").hide(100); //İşlem bitiminde menüyü gizle
});