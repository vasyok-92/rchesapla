/**
 * Created by gadyb on 26/4/2017.
 */

$(document).ready(function () {
    hideColumns();
});

function hideColumns() {
    if (window.hideCols) {
        for (column in window.hideCols) {
             $(".js-col-" + window.hideCols[column]).addClass('hiddenThree');
        }
    }
}

function showError(box) {
    $(box).addClass('redBg');
}

function hideError(box) {
    $(box).removeClass('redBg');
}

function validateInputs(inputsArray) {
    var i = 0;
    var ret = true;
    while (i < inputsArray.length) {
        hideError(inputsArray[i]);
        if (isNaN($(inputsArray[i]).val()) || $(inputsArray[i]).val().length == 0) {
            showError(inputsArray[i]);
            ret = false;
        }
        i++;
    }
    return ret;
}

function toFixed(num, decim) {
    num *= Math.pow(10, decim);
    num = Math.round(num);
    num /= Math.pow(10, decim);
    return num;
}

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};