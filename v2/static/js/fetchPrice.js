fetchData = function(){

    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Cdogecoin%2Cbinancecoin%2Cmatic-network&vs_currencies=USD', {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
          // Examine the text in the response
          response.json().then(function(data) {
            prices = getResults(data)
            postResults(prices)
            calculate(prices)
    
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
      
  }
  
getResults = function(fetch_data){
    btcPrice = fetch_data.bitcoin.usd
    dogePrice = fetch_data.dogecoin.usd
    ethPrice = fetch_data.ethereum.usd
	bnbPrice = fetch_data.binancecoin.usd
    return [btcPrice, dogePrice, ethPrice, bnbPrice]
}

postResults = function(prices){
    document.getElementById("btc-price-api").innerHTML = "$" + prices[0];
    document.getElementById("doge-price-api").innerHTML = "$" + prices[1];
    document.getElementById("eth-price-api").innerHTML = "$" + prices[2];
	document.getElementById("bnb-price-api").innerHTML = "$" + prices[3];
}

//////////////////////////////
calculate = function(prices){
    var btcPrice = prices[0]
        dogePrice = prices[1]
        ethPrice = prices[2]
		bnbPrice = prices[3]
		
    /////////////////////////////////////////////////
    // BTC CALC 10 MIN
    minBtc = document.getElementById("minBtc").innerHTML;
    minBtcD = Number(minBtc) * btcPrice
    if (isNaN(minBtcD)) {
        document.getElementById("minBtcD").innerText = "-"}
        else {
            document.getElementById("minBtcD").innerText = "$" + minBtcD.toFixed(5);
        }
    // BTC CALC HOUR
    hourBtc = document.getElementById("hourBtc").innerHTML;
    hourBtcD = Number(hourBtc) * btcPrice
    if (isNaN(hourBtcD)) {
        document.getElementById("hourBtcD").innerText = "-"}
        else {
            document.getElementById("hourBtcD").innerText = "$" + hourBtcD.toFixed(5);
        }
    // BTC CALC DAY
    dayBtc = document.getElementById("dayBtc").innerHTML;
    dayBtcD = Number(dayBtc) * btcPrice
    if (isNaN(dayBtcD)) {
        document.getElementById("dayBtcD").innerText = "-"}
        else {
            document.getElementById("dayBtcD").innerText = "$" + dayBtcD.toFixed(5);
        }
    // BTC CALC WEEK
    weekBtc = document.getElementById("weekBtc").innerHTML;
    weekBtcD = Number(weekBtc) * btcPrice
    if (isNaN(weekBtcD)) {
        document.getElementById("weekBtcD").innerText = "-"}
        else {
            document.getElementById("weekBtcD").innerText = "$" + weekBtcD.toFixed(5);
        }    
    // BTC CALC MONTH
    monthBtc = document.getElementById("monthBtc").innerHTML;
    monthBtcD = Number(monthBtc) * btcPrice
    if (isNaN(minBtcD)) {
        document.getElementById("monthBtcD").innerText = "-"}
        else {
            document.getElementById("monthBtcD").innerText = "$" + monthBtcD.toFixed(5);
        }    
    // BTC CALC YEAR
    yearBtc = document.getElementById("yearBtc").innerHTML;
    yearBtcD = Number(yearBtc) * btcPrice
    if (isNaN(yearBtcD)) {
        document.getElementById("yearBtcD").innerText = "-"}
        else {
            document.getElementById("yearBtcD").innerText = "$" + yearBtcD.toFixed(5);
        } 
    /////////////////////////////////////////////////
    // DOGE CALC 10 MIN
    minDoge = document.getElementById("minDoge").innerHTML;
    minDogeD = Number(minDoge) * dogePrice
    if (isNaN(minDogeD)) {
        document.getElementById("minDogeD").innerText = "-"}
        else {
            document.getElementById("minDogeD").innerText = "$" + minDogeD.toFixed(5);
        }
    // DOGE CALC HOUR
    hourDoge = document.getElementById("hourDoge").innerHTML;
    hourDogeD = Number(hourDoge) * dogePrice
    if (isNaN(hourDogeD)) {
        document.getElementById("hourDogeD").innerText = "-"}
        else {
            document.getElementById("hourDogeD").innerText = "$" + hourDogeD.toFixed(5);
        }
    // DOGE CALC DAY
    dayDoge = document.getElementById("dayDoge").innerHTML;
    dayDogeD = Number(dayDoge) * dogePrice
    if (isNaN(dayDogeD)) {
        document.getElementById("dayDogeD").innerText = "-"}
        else {
            document.getElementById("dayDogeD").innerText = "$" + dayDogeD.toFixed(5);
        }
    // DOGE CALC WEEK
    weekDoge = document.getElementById("weekDoge").innerHTML;
    weekDogeD = Number(weekDoge) * dogePrice
    if (isNaN(weekDogeD)) {
        document.getElementById("weekDogeD").innerText = "-"}
        else {
            document.getElementById("weekDogeD").innerText = "$" + weekDogeD.toFixed(5);
        }    
    // DOGE CALC MONTH
    monthDoge = document.getElementById("monthDoge").innerHTML;
    monthDogeD = Number(monthDoge) * dogePrice
    if (isNaN(minDogeD)) {
        document.getElementById("monthDogeD").innerText = "-"}
        else {
            document.getElementById("monthDogeD").innerText = "$" + monthDogeD.toFixed(5);
        }    
    // DOGE CALC YEAR
    yearDoge = document.getElementById("yearDoge").innerHTML;
    yearDogeD = Number(yearDoge) * dogePrice
    if (isNaN(yearDogeD)) {
        document.getElementById("yearDogeD").innerText = "-"}
        else {
            document.getElementById("yearDogeD").innerText = "$" + yearDogeD.toFixed(5);
        }
	/////////////////////////////////////////////////
    // ETH CALC 10 MIN
    minEth = document.getElementById("minEth").innerHTML;
    minEthD = Number(minEth) * ethPrice
    if (isNaN(minEthD)) {
        document.getElementById("minEthD").innerText = "-"}
        else {
            document.getElementById("minEthD").innerText = "$" + minEthD.toFixed(5);
        }
    // ETH CALC HOUR
    hourEth = document.getElementById("hourEth").innerHTML;
    hourEthD = Number(hourEth) * ethPrice
    if (isNaN(hourEthD)) {
        document.getElementById("hourEthD").innerText = "-"}
        else {
            document.getElementById("hourEthD").innerText = "$" + hourEthD.toFixed(5);
        }
    // ETH CALC DAY
    dayEth = document.getElementById("dayEth").innerHTML;
    dayEthD = Number(dayEth) * ethPrice
    if (isNaN(dayEthD)) {
        document.getElementById("dayEthD").innerText = "-"}
        else {
            document.getElementById("dayEthD").innerText = "$" + dayEthD.toFixed(5);
        }
    // ETH CALC WEEK
    weekEth = document.getElementById("weekEth").innerHTML;
    weekEthD = Number(weekEth) * ethPrice
    if (isNaN(weekEthD)) {
        document.getElementById("weekEthD").innerText = "-"}
        else {
            document.getElementById("weekEthD").innerText = "$" + weekEthD.toFixed(5);
        }    
    // ETH CALC MONTH
    monthEth = document.getElementById("monthEth").innerHTML;
    monthEthD = Number(monthEth) * ethPrice
    if (isNaN(minEthD)) {
        document.getElementById("monthEthD").innerText = "-"}
        else {
            document.getElementById("monthEthD").innerText = "$" + monthEthD.toFixed(5);
        }    
    // ETH CALC YEAR
    yearEth = document.getElementById("yearEth").innerHTML;
    yearEthD = Number(yearEth) * ethPrice
    if (isNaN(yearEthD)) {
        document.getElementById("yearEthD").innerText = "-"}
        else {
            document.getElementById("yearEthD").innerText = "$" + yearEthD.toFixed(5);
        }
    /////////////////////////////////////////////////
    // bnb CALC 10 MIN
    minbnb = document.getElementById("minbnb").innerHTML;
    minbnbD = Number(minbnb) * bnbPrice
    if (isNaN(minbnbD)) {
        document.getElementById("minbnbD").innerText = "-"}
        else {
            document.getElementById("minbnbD").innerText = "$" + minbnbD.toFixed(5);
        }
    // bnb CALC HOUR
    hourbnb = document.getElementById("hourbnb").innerHTML;
    hourbnbD = Number(hourbnb) * bnbPrice
    if (isNaN(hourbnbD)) {
        document.getElementById("hourbnbD").innerText = "-"}
        else {
            document.getElementById("hourbnbD").innerText = "$" + hourbnbD.toFixed(5);
        }
    // bnb CALC DAY
    daybnb = document.getElementById("daybnb").innerHTML;
    daybnbD = Number(daybnb) * bnbPrice
    if (isNaN(daybnbD)) {
        document.getElementById("daybnbD").innerText = "-"}
        else {
            document.getElementById("daybnbD").innerText = "$" + daybnbD.toFixed(5);
        }
    // bnb CALC WEEK
    weekbnb = document.getElementById("weekbnb").innerHTML;
    weekbnbD = Number(weekbnb) * bnbPrice
    if (isNaN(weekbnbD)) {
        document.getElementById("weekbnbD").innerText = "-"}
        else {
            document.getElementById("weekbnbD").innerText = "$" + weekbnbD.toFixed(5);
        }    
    // bnb CALC MONTH
    monthbnb = document.getElementById("monthbnb").innerHTML;
    monthbnbD = Number(monthbnb) * bnbPrice
    if (isNaN(minbnbD)) {
        document.getElementById("monthbnbD").innerText = "-"}
        else {
            document.getElementById("monthbnbD").innerText = "$" + monthbnbD.toFixed(5);
        }    
    // bnb CALC YEAR
    yearbnb = document.getElementById("yearbnb").innerHTML;
    yearbnbD = Number(yearbnb) * bnbPrice
    if (isNaN(yearbnbD)) {
        document.getElementById("yearbnbD").innerText = "-"}
        else {
            document.getElementById("yearbnbD").innerText = "$" + yearbnbD.toFixed(5);
        } 

/////////////////////////////////////////////////
    // matic CALC 10 MIN
    minmatic = document.getElementById("minmatic").innerHTML;
    minmaticD = Number(minmatic) * maticPrice
    if (isNaN(minmaticD)) {
        document.getElementById("minmaticD").innerText = "-"}
        else {
            document.getElementById("minmaticD").innerText = "$" + minmaticD.toFixed(5);
        }
    // matic CALC HOUR
    hourmatic = document.getElementById("hourmatic").innerHTML;
    hourmaticD = Number(hourmatic) * maticPrice
    if (isNaN(hourmaticD)) {
        document.getElementById("hourmaticD").innerText = "-"}
        else {
            document.getElementById("hourmaticD").innerText = "$" + hourmaticD.toFixed(5);
        }
    // matic CALC DAY
    daymatic = document.getElementById("daymatic").innerHTML;
    daymaticD = Number(daymatic) * maticPrice
    if (isNaN(daymaticD)) {
        document.getElementById("daymaticD").innerText = "-"}
        else {
            document.getElementById("daymaticD").innerText = "$" + daymaticD.toFixed(5);
        }
    // matic CALC WEEK
    weekmatic = document.getElementById("weekmatic").innerHTML;
    weekmaticD = Number(weekmatic) * maticPrice
    if (isNaN(weekmaticD)) {
        document.getElementById("weekmaticD").innerText = "-"}
        else {
            document.getElementById("weekmaticD").innerText = "$" + weekmaticD.toFixed(5);
        }    
    // matic CALC MONTH
    monthmatic = document.getElementById("monthmatic").innerHTML;
    monthmaticD = Number(monthmatic) * maticPrice
    if (isNaN(minmaticD)) {
        document.getElementById("monthmaticD").innerText = "-"}
        else {
            document.getElementById("monthmaticD").innerText = "$" + monthmaticD.toFixed(5);
        }    
    // matic CALC YEAR
    yearmatic = document.getElementById("yearmatic").innerHTML;
    yearmaticD = Number(yearmatic) * maticPrice
    if (isNaN(yearmaticD)) {
        document.getElementById("yearmaticD").innerText = "-"}
        else {
            document.getElementById("yearmaticD").innerText = "$" + yearmaticD.toFixed(5);
        }



    }

fetchData()
setInterval(fetchData, 5000)


  
    // console.log('updated')
    // console.log(dogePrice)
