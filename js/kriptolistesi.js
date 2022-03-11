if (typeof jQuery == "undefined") {
    var coinyepJQuery = document.createElement("script");
    coinyepJQuery.type = "text/javascript";
    coinyepJQuery.src = "https://code.jquery.com/jquery-3.3.1.min.js";
    document.getElementsByTagName("head")[0].appendChild(coinyepJQuery);
}
var coinyepWaitForLoad = function () {
    if (typeof jQuery != "undefined") {

        jQuery(function() {
            var coinyepWidgetMarquee = "<style type='text/css'>";
            coinyepWidgetMarquee += "coinyep-widget-marquee {width:100%; height:40px;line-height:40px; vertical-align:middle; overflow:hidden;  display: block}";
            coinyepWidgetMarquee += ".coinyep_scroll_div {width:100%; height:40px;line-height:40px; vertical-align:middle;margin:0 auto; overflow: hidden; white-space: nowrap}";
            coinyepWidgetMarquee += ".coinyep_scroll_div li{padding-right:40px}";
            coinyepWidgetMarquee += "#coinyep_scroll_begin, #coinyep_scroll_end, #coinyep_scroll_begin ul, #coinyep_scroll_end ul, #coinyep_scroll_begin ul li, #coinyep_scroll_end ul li{display:inline; font-family: sans-serif}";
            coinyepWidgetMarquee += ".coinyep-bold {font-weight: 600}";
            coinyepWidgetMarquee += ".coinyep-positive{color: green}";
            coinyepWidgetMarquee += ".coinyep-negative{color:red}";
            coinyepWidgetMarquee += "#coinyep_scroll_begin ul li a, #coinyep_scroll_end ul li a{text-decoration:none}";
            coinyepWidgetMarquee += "#coinyep_scroll_begin ul li a:hover, #coinyep_scroll_end ul li a:hover{text-decoration:none}";    
            coinyepWidgetMarquee += "</style>";
            jQuery('head').append(coinyepWidgetMarquee);
        });
        
        var powered = [];
        powered["en"] = "Powered by";
        powered["es"] = "Con tecnologÃ­a de";
        powered["de"] = "PrÃ¤sentiert von";
        powered["fr"] = "Fourni par";
        powered["it"] = "Offerto da";
        powered["id"] = "Didukung oleh";
        powered["ms"] = "Powered by";
        powered["nl"] = "Aangedreven door"; 
        powered["no"] = "Drevet av"; 
        powered["pl"] = "TreÅ›Ä‡ dostarczona przez"; 
        powered["pt"] = "Fornecido por"; 
        powered["ru"] = "ĞŸĞ¸Ñ‚Ğ°Ñ‚ÑŒÑÑ Ğ¾Ñ‚"; 
        powered["sv"] = "Powered by"; 
        powered["tr"] = "Tarafından desteklenmektedir."; 
        powered["vi"] = "ÄÆ°á»£c há»— trá»£ bá»Ÿi"; 
        powered["ko"] = "Powered by"; 
        powered["he"] = '××•× ×¢ ×¢"×™'; 
        powered["th"] = "à¸‚à¸±à¸šà¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸”à¹‰à¸§à¸¢"; 
        powered["hi"] = "à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤¸à¤‚à¤šà¤¾à¤²à¤¿à¤¤"; 
        powered["zh"] = "ä¾›ç”µ"; 
        powered["ja"] = "æ­è¼‰"; 
        powered["ar"] = "Ù…Ø´ØºÙ„ Ø¨ÙˆØ§Ø³Ø·Ø©";
    
        var currency = jQuery("coinyep-widget-marquee").attr("currency");
        var list = jQuery("coinyep-widget-marquee").attr("list");
        var lang = jQuery("coinyep-widget-marquee").attr("lang");
        var poweredLang = (typeof powered[lang] !== 'undefined') ? powered[lang] : powered.en;
        var basedomain = "https://coinyep.com/";
        //var basedomain = "http://192.168.1.66/coinyep2/";
        var url = basedomain + "api/v1/?list="+list+"&currency="+currency + "&lang=" + lang;
        jQuery.getJSON(url, {format:"json"},
        function( data ) {
            
            var str = "";
            
            str += '<div id="coinyep_scroll_div" class="coinyep_scroll_div"><div id="coinyep_scroll_begin">';
            str += '<ul>';
            
            jQuery.each(data, function(index, value) {
                price = parseFloat(data[index].price);
                price = price.toLocaleString(lang, {maximumFractionDigits: 10});
                price_change = parseFloat(data[index].price_change);
                price_change = price_change.toLocaleString(lang, {maximumFractionDigits: 2});
                if (parseFloat(price_change) > 0) price_change = '+' + price_change;
                
                var price = data[index].price;
                price = parseFloat(price);
                price = price.toLocaleString(lang, {maximumFractionDigits: 10});
                var symbol = data[index].base_symbol;
                var name = data[index].base_name;
                var url = basedomain + lang + "/ex/" + symbol + "-" + currency;
                var img = basedomain + "img/png/" + symbol + ".png";
                if (data[index].price_change >= 0) {
                    var change = '<span class="coinyep-positive">▲</span>';
                    var c = 'coinyep-positive';
                }
                else {
                    var change = '<span class="coinyep-negative">▼</span>';
                    var c = 'coinyep-negative';
                }
                    
                
                str += '<li><a href="'+url+'" target="_blank"><img style="vertical-align:middle;margin-right:0.4em;width:20px height:20px !important;" src="'+img+'"><span style="color:#4c4c4c"><span class="coinyep-bold"> '+name+'</span> ('+symbol+')</span> <span class="coinyep-bold">'+price+'</span> '+currency+' <span class="'+c+'">(' + price_change + '%)</span> '+change+'</a></li>';
            });
            
            str += '</ul>';
            str += '</div><div id="coinyep_scroll_end"></div></div>';
            jQuery("coinyep-widget-marquee").html(str);   
            
            
            //avvia lo scroll
            coinyep_ScrollImgLeft();
        });
        
    } else {
        window.setTimeout(coinyepWaitForLoad, 1000);
    }
}  
window.setTimeout(coinyepWaitForLoad, 1000);
function coinyep_ScrollImgLeft(){
    var speed=20 
    var coinyep_scroll_begin = document.getElementById("coinyep_scroll_begin");
    var coinyep_scroll_end = document.getElementById("coinyep_scroll_end");
    var coinyep_scroll_div = document.getElementById("coinyep_scroll_div");
    coinyep_scroll_end.innerHTML=coinyep_scroll_begin.innerHTML;
    function coinyep_Marquee(){
        if(coinyep_scroll_end.offsetWidth-coinyep_scroll_div.scrollLeft<=0)
        coinyep_scroll_div.scrollLeft-=coinyep_scroll_begin.offsetWidth
        else
        coinyep_scroll_div.scrollLeft++
    }
    var MyMar=setInterval(coinyep_Marquee,speed)
    coinyep_scroll_div.onmouseover=function() {clearInterval(MyMar)}
    coinyep_scroll_div.onmouseout=function() {MyMar=setInterval(coinyep_Marquee,speed)}
}