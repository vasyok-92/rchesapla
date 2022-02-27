fronter.service('appConfig', ['window', '$html'], function (window, $html) {
    window.siteData = window.siteData || {};

    function getMobileOperatingSystem() {
        var userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
        var iphoneRegex = /(iPad|iPhone|iPod)/i;
        var androidRegex = /Android/i;

        if (iphoneRegex.test(userAgent)) return 'ios';
        if (androidRegex.test(userAgent)) return 'android';

        return 'unknown';
    }

    if(window.siteData && !window.siteData.currencyPosition) window.siteData.currencyPosition = 'left';

    return fronter.extend({
        language: $html.attr('lang') || 'en',
        mobileOS: getMobileOperatingSystem(),
        desktopVersion: '//' + window.siteData.defaultDomain + window.desktopVersion,
        EARNINGS_CHART_VARS:window.EARNINGS_CHART_VARS,
        SMALL_CHART_LANDSCAPE:window.SMALL_CHART_LANDSCAPE,
        thousandSep: window.siteData.numeric_format === 'us' ? ',' : '.',
        decimalSep: window.siteData.numeric_format === 'us' ? '.' : ','
    }, window.siteData);
});