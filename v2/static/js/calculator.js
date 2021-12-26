calc = function(){
    var minerRate = document.getElementById("minerRate").value,
        gamesRate = document.getElementById("gamesRate").value,
        // Calc Total Mining
        totalRate = Number(minerRate) + Number(gamesRate);
    document.getElementById("totalRate").innerText = totalRate.toFixed(3);
        
    var distBtc = document.getElementById("distBtc").value,
        distDoge = document.getElementById("distDoge").value,
        distEth = document.getElementById("distEth").value,
        distRlt = document.getElementById("distRlt").value;

    var netBtc = document.getElementById("netBtc").value,
        netDoge = document.getElementById("netDoge").value,
        netEth = document.getElementById("netEth").value,
        netRlt = document.getElementById("netRlt").value;
        // Calc Total Net Power
        totalNet = Number(netBtc) + Number(netDoge) + Number(netEth) + Number(netRlt);
    document.getElementById("totalNet").innerText = totalNet.toFixed(3);

    var blockBtc = document.getElementById("blockBtc").innerText/100000000,
        blockDoge = document.getElementById("blockDoge").innerText,
        blockEth = document.getElementById("blockEth").innerText,
        blockRlt = document.getElementById("blockRlt").innerText;
    
        // Calc Results
    var btcPower = ((Number(totalRate)/1000) * Number(distBtc))/100
        btcPrice1 = document.getElementById('btc-price-api').innerHTML
        btcPrice = Number(btcPrice1.substring(1))
        minBtc = (Number(btcPower)*blockBtc)/(Number(netBtc)*1000)
        minBtcD = Number(minBtc) * btcPrice
        hourBtc = Number(minBtc) * 6
        hourBtcD = Number(hourBtc) * btcPrice
        dayBtc = Number(hourBtc) * 24 
        dayBtcD = Number(dayBtc) * btcPrice
        weekBtc = Number(dayBtc) * 7
        weekBtcD = Number(weekBtc) * btcPrice
        monthBtc = Number(dayBtc) * 30
        monthBtcD = Number(monthBtc) * btcPrice
        yearBtc = Number(dayBtc) * 365
        yearBtcD = Number(yearBtc) * btcPrice

    if ((isNaN(minBtc))||!(isFinite(minBtc))) {
        document.getElementById("minBtc").innerText = "-"}
        else {
            document.getElementById("minBtc").innerText = minBtc.toFixed(10);
        }
    if ((isNaN(hourBtc))||!(isFinite(hourBtc))) {
        document.getElementById("hourBtc").innerText = "-"}
        else {
            document.getElementById("hourBtc").innerText = hourBtc.toFixed(10);
        }
    if ((isNaN(dayBtc))||!(isFinite(dayBtc))) {
        document.getElementById("dayBtc").innerText = "-"}
        else {
            document.getElementById("dayBtc").innerText = dayBtc.toFixed(10);
        }
    if ((isNaN(weekBtc))||!(isFinite(weekBtc))) {
        document.getElementById("weekBtc").innerText = "-"}
        else {
            document.getElementById("weekBtc").innerText = weekBtc.toFixed(10);
        }
    if ((isNaN(monthBtc))||!(isFinite(monthBtc))) {
        document.getElementById("monthBtc").innerText = "-"}
        else {
            document.getElementById("monthBtc").innerText = monthBtc.toFixed(10);
        }
    if ((isNaN(yearBtc))||!(isFinite(yearBtc))) {
        document.getElementById("yearBtc").innerText = "-"}
        else {
            document.getElementById("yearBtc").innerText = yearBtc.toFixed(10);
        }

    if ((isNaN(minBtcD))||!(isFinite(minBtcD))) {
        document.getElementById("minBtcD").innerText = "-"}
        else {
            document.getElementById("minBtcD").innerText = "$" + minBtcD.toFixed(5);
        }
    if ((isNaN(hourBtcD))||!(isFinite(hourBtcD))) {
        document.getElementById("hourBtcD").innerText = "-"}
        else {
            document.getElementById("hourBtcD").innerText = "$" + hourBtcD.toFixed(5);
        }
    if ((isNaN(dayBtcD))||!(isFinite(dayBtcD))) {
        document.getElementById("dayBtcD").innerText = "-"}
        else {
            document.getElementById("dayBtcD").innerText = "$" + dayBtcD.toFixed(5);
        }
    if ((isNaN(weekBtcD))||!(isFinite(weekBtcD))) {
        document.getElementById("weekBtcD").innerText = "-"}
        else {
            document.getElementById("weekBtcD").innerText = "$" + weekBtcD.toFixed(5);
        }
    if ((isNaN(monthBtcD))||!(isFinite(monthBtcD))) {
        document.getElementById("monthBtcD").innerText = "-"}
        else {
            document.getElementById("monthBtcD").innerText = "$" + monthBtcD.toFixed(5);
        }
    if ((isNaN(yearBtcD))||!(isFinite(yearBtcD))) {
        document.getElementById("yearBtcD").innerText = "-"}
        else {
            document.getElementById("yearBtcD").innerText = "$" + yearBtcD.toFixed(5);
        }

    
    var dogePower = ((Number(totalRate)/1000) * Number(distDoge))/100
        dogePrice1 = document.getElementById('doge-price-api').innerHTML
        dogePrice = Number(dogePrice1.substring(1))
        minDoge = (Number(dogePower)*blockDoge)/(Number(netDoge)*1000)
        minDogeD = Number(minDoge) * dogePrice
        hourDoge = Number(minDoge) * 6
        hourDogeD = Number(hourDoge) * dogePrice
        dayDoge = Number(hourDoge) * 24 
        dayDogeD = Number(dayDoge) * dogePrice
        weekDoge = Number(dayDoge) * 7
        weekDogeD = Number(weekDoge) * dogePrice
        monthDoge = Number(dayDoge) * 30
        monthDogeD = Number(monthDoge) * dogePrice
        yearDoge = Number(dayDoge) * 365
        yearDogeD = Number(yearDoge) * dogePrice

    if ((isNaN(minDoge))||!(isFinite(minDoge))) {
        document.getElementById("minDoge").innerText = "-"}
        else {
            document.getElementById("minDoge").innerText = minDoge.toFixed(10);
        }
    if ((isNaN(hourDoge))||!(isFinite(hourDoge))) {
        document.getElementById("hourDoge").innerText = "-"}
        else {
            document.getElementById("hourDoge").innerText = hourDoge.toFixed(10);
        }
    if ((isNaN(dayDoge))||!(isFinite(dayDoge))) {
        document.getElementById("dayDoge").innerText = "-"}
        else {
            document.getElementById("dayDoge").innerText = dayDoge.toFixed(10);
        }
    if ((isNaN(weekDoge))||!(isFinite(weekDoge))) {
        document.getElementById("weekDoge").innerText = "-"}
        else {
            document.getElementById("weekDoge").innerText = weekDoge.toFixed(10);
        }
    if ((isNaN(monthDoge))||!(isFinite(monthDoge))) {
        document.getElementById("monthDoge").innerText = "-"}
        else {
            document.getElementById("monthDoge").innerText = monthDoge.toFixed(10);
        }
    if ((isNaN(yearDoge))||!(isFinite(yearDoge))) {
        document.getElementById("yearDoge").innerText = "-"}
        else {
            document.getElementById("yearDoge").innerText = yearDoge.toFixed(10);
        }
    


    if ((isNaN(minDogeD))||!(isFinite(minDogeD))) {
        document.getElementById("minDogeD").innerText = "-"}
        else {
            document.getElementById("minDogeD").innerText = "$" + minDogeD.toFixed(5);
        }
    if ((isNaN(hourDogeD))||!(isFinite(hourDogeD))) {
        document.getElementById("hourDogeD").innerText = "-"}
        else {
            document.getElementById("hourDogeD").innerText = "$" + hourDogeD.toFixed(5);
        }
    if ((isNaN(dayDogeD))||!(isFinite(dayDogeD))) {
        document.getElementById("dayDogeD").innerText = "-"}
        else {
            document.getElementById("dayDogeD").innerText = "$" + dayDogeD.toFixed(5);
        }
    if ((isNaN(weekDogeD))||!(isFinite(weekDogeD))) {
        document.getElementById("weekDogeD").innerText = "-"}
        else {
            document.getElementById("weekDogeD").innerText = "$" + weekDogeD.toFixed(5);
        }
    if ((isNaN(monthDogeD))||!(isFinite(monthDogeD))) {
        document.getElementById("monthDogeD").innerText = "-"}
        else {
            document.getElementById("monthDogeD").innerText = "$" + monthDogeD.toFixed(5);
        }
    if ((isNaN(yearDogeD))||!(isFinite(yearDogeD))) {
        document.getElementById("yearDogeD").innerText = "-"}
        else {
            document.getElementById("yearDogeD").innerText = "$" + yearDogeD.toFixed(5);
        }




    
    var ethPower = ((Number(totalRate)/1000) * Number(distEth))/100
        ethPrice1 = document.getElementById('eth-price-api').innerHTML
        ethPrice = Number(ethPrice1.substring(1))
        minEth = (Number(ethPower)*blockEth)/(Number(netEth)*1000)
        minEthD = Number(minEth) * ethPrice
        hourEth = Number(minEth) * 6
        hourEthD = Number(hourEth) * ethPrice
        dayEth = Number(hourEth) * 24 
        dayEthD = Number(dayEth) * ethPrice
        weekEth = Number(dayEth) * 7
        weekEthD = Number(weekEth) * ethPrice
        monthEth = Number(dayEth) * 30
        monthEthD = Number(monthEth) * ethPrice
        yearEth = Number(dayEth) * 365
        yearEthD = Number(yearEth) * ethPrice

    if ((isNaN(minEth))||!(isFinite(minEth))) {
        document.getElementById("minEth").innerText = "-"}
        else {
            document.getElementById("minEth").innerText = minEth.toFixed(10);
        }
    if ((isNaN(hourEth))||!(isFinite(hourEth))) {
        document.getElementById("hourEth").innerText = "-"}
        else {
            document.getElementById("hourEth").innerText = hourEth.toFixed(10);
        }
    if ((isNaN(dayEth))||!(isFinite(dayEth))) {
        document.getElementById("dayEth").innerText = "-"}
        else {
            document.getElementById("dayEth").innerText = dayEth.toFixed(10);
        }
    if ((isNaN(weekEth))||!(isFinite(weekEth))) {
        document.getElementById("weekEth").innerText = "-"}
        else {
            document.getElementById("weekEth").innerText = weekEth.toFixed(10);
        }
    if ((isNaN(monthEth))||!(isFinite(monthEth))) {
        document.getElementById("monthEth").innerText = "-"}
        else {
            document.getElementById("monthEth").innerText = monthEth.toFixed(10);
        }
    if ((isNaN(yearEth))||!(isFinite(yearEth))) {
        document.getElementById("yearEth").innerText = "-"}
        else {
            document.getElementById("yearEth").innerText = yearEth.toFixed(10);
        }
    

    if ((isNaN(minEthD))||!(isFinite(minEthD))) {
        document.getElementById("minEthD").innerText = "-"}
        else {
            document.getElementById("minEthD").innerText = "$" + minEthD.toFixed(5);
        }
    if ((isNaN(hourEthD))||!(isFinite(hourEthD))) {
        document.getElementById("hourEthD").innerText = "-"}
        else {
            document.getElementById("hourEthD").innerText = "$" + hourEthD.toFixed(5);
        }
    if ((isNaN(dayEthD))||!(isFinite(dayEthD))) {
        document.getElementById("dayEthD").innerText = "-"}
        else {
            document.getElementById("dayEthD").innerText = "$" + dayEthD.toFixed(5);
        }
    if ((isNaN(weekEthD))||!(isFinite(weekEthD))) {
        document.getElementById("weekEthD").innerText = "-"}
        else {
            document.getElementById("weekEthD").innerText = "$" + weekEthD.toFixed(5);
        }
    if ((isNaN(monthEthD))||!(isFinite(monthEthD))) {
        document.getElementById("monthEthD").innerText = "-"}
        else {
            document.getElementById("monthEthD").innerText = "$" + monthEthD.toFixed(5);
        }
    if ((isNaN(yearEthD))||!(isFinite(yearEthD))) {
        document.getElementById("yearEthD").innerText = "-"}
        else {
            document.getElementById("yearEthD").innerText = "$" + yearEthD.toFixed(5);
        }

    var rltPower = ((Number(totalRate)/1000) * Number(distRlt))/100
        minRlt = (Number(rltPower)*blockRlt)/(Number(netRlt)*1000)
        minRltD = Number(minRlt) * 1
        hourRlt = Number(minRlt) * 6
        hourRltD = Number(hourRlt) * 1
        dayRlt = Number(hourRlt) * 24 
        dayRltD = Number(dayRlt) * 1
        weekRlt = Number(dayRlt) * 7
        weekRltD = Number(weekRlt) * 1
        monthRlt = Number(dayRlt) * 30
        monthRltD = Number(monthRlt) * 1
        yearRlt = Number(dayRlt) * 365
        yearRltD = Number(yearRlt) * 1

    if ((isNaN(minRlt))||!(isFinite(minRlt))) {
        document.getElementById("minRlt").innerText = "-";
        document.getElementById("minRltD").innerText = "-"}

        else {
            document.getElementById("minRlt").innerText = minRlt.toFixed(10);
            document.getElementById("minRltD").innerText = "$" + minRltD.toFixed(5);
        }
    if ((isNaN(hourRlt))||!(isFinite(hourRlt))) {
        document.getElementById("hourRlt").innerText = "-";
        document.getElementById("hourRltD").innerText = "-"}

        else {
            document.getElementById("hourRlt").innerText = hourRlt.toFixed(10);
            document.getElementById("hourRltD").innerText = "$" + hourRltD.toFixed(5);
        }
    if ((isNaN(dayRlt))||!(isFinite(dayRlt))) {
        document.getElementById("dayRlt").innerText = "-";
        document.getElementById("dayRltD").innerText = "-"}

        else {
            document.getElementById("dayRlt").innerText = dayRlt.toFixed(10);
            document.getElementById("dayRltD").innerText = "$" + dayRltD.toFixed(5);
        }
    if ((isNaN(weekRlt))||!(isFinite(weekRlt))) {
        document.getElementById("weekRlt").innerText = "-";
        document.getElementById("weekRltD").innerText = "-"}

        else {
            document.getElementById("weekRlt").innerText = weekRlt.toFixed(10);
            document.getElementById("weekRltD").innerText = "$" + weekRltD.toFixed(5);
        }
    if ((isNaN(monthRlt))||!(isFinite(monthRlt))) {
        document.getElementById("monthRlt").innerText = "-";
        document.getElementById("monthRltD").innerText = "-"}

        else {
            document.getElementById("monthRlt").innerText = monthRlt.toFixed(10);
            document.getElementById("monthRltD").innerText = "$" + monthRltD.toFixed(5);
        }
    if ((isNaN(yearRlt))||!(isFinite(yearRlt))) {
        document.getElementById("yearRlt").innerText = "-";
        document.getElementById("yearRltD").innerText = "-"}

        else {
            document.getElementById("yearRlt").innerText = yearRlt.toFixed(10);
            document.getElementById("yearRltD").innerText = "$" + yearRltD.toFixed(5);
        }
    }
    