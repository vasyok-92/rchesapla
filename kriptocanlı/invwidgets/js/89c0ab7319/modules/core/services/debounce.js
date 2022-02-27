fronter.service('debounce', [], function () {
    var timeout;
    return function (func, wait, immediate) {
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (func && !immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

});