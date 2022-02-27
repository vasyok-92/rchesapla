/**
 * Created by benh on 08/05/2017.
 */

$.match = function (target, source, caseSensitive) {
    var result = false, i;
    if (typeof(source) === 'string') {
        result = caseSensitive ? target === source : target.toLowerCase() === source.toLowerCase();
    } else if (source.constructor === Array) {
        for (i = 0; i < source.length && !result; i++) {
            if (caseSensitive ? target === source[i] : target.toLowerCase() === source[i].toLowerCase()) {
                result = true;
            }
        }
    }
    return result;
}

String.prototype.is = function (secondValue, caseSensitive) { return $.match(this, secondValue, caseSensitive) }
Number.prototype.padLeft = function (howMany, customChar) {
    return Array(Math.max(howMany + 1 - this.toString().length, 0)).join(customChar || "0") + this;
}

$.fn._show = $.fn._show || function (cont) {
    if (cont) { $(this).html(cont); }
    return $(this).removeClass('displayNone');
};
$.fn._hide = $.fn._hide || function () { return $(this).addClass('displayNone'); };

$.fn._toggleShow = $.fn._toggleShow || function (flag) {
    var action;
    if ($.isUn(flag)) {
        action = $(this).hasClass('displayNone') ? '_show' : '_hide';
    } else {
        action = flag ? '_show' : '_hide';
    }
    return $(this)[action]();
};