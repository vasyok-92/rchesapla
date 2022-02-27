fronter.service('GeneralOverlay', ['$', '$body'], function ($, $body) {
    var $generalOverlay = $(".generalOverlay");
    var currentScrollPosition;
    var disableSelfClosing = false;

    var callbacks = {
        show: [],
        hide: []
    };

    var currentModal, prevModal;

    function isDefined(prop) {
        return typeof  prop !== 'undefined'
    }

    function closeModalActions(ignorePopupHide) {
        if (!currentModal) {
            return false;
        }
        if (!(ignorePopupHide || currentModal.ignorePopupHide)) currentModal.$el.addClass('displayNone');
        if(currentModal.overlayClasses) $generalOverlay.removeClass(currentModal.overlayClasses);
        currentModal.onClose();
        currentModal = false;

        // getting previous modal to show again
        if (prevModal) {
            prevModal.$el.removeClass('displayNone');
            currentModal = prevModal;
            prevModal = false;
        } else {
            $body.attr('style', '').scrollTop(currentScrollPosition);
            callbacks.hide.forEach(function(callback) {
                callback();
            });
        }
    }

    /**
     *
     * @param optsOr$el - all data can be sent through here as object
     * @param closeCallback - Deprecated
     * @param ignorePopupShow - Deprecated
     * @param ignorePopupHide - Deprecated
     * @param overlayClasses - Deprecated
     */
    function openModalAndOverlay(optsOr$el, closeCallback, ignorePopupShow, ignorePopupHide, overlayClasses) {
        var $el = optsOr$el instanceof $ ? optsOr$el : optsOr$el.$el;
        var opts = {
            $el: $el,
            onClose: optsOr$el.onClose || closeCallback || $.noop,
            ignorePopupShow: isDefined(optsOr$el.ignorePopupShow) ? optsOr$el.ignorePopupShow : ignorePopupShow || false,
            ignorePopupHide: isDefined(optsOr$el.ignorePopupHide) ? optsOr$el.ignorePopupHide : ignorePopupHide || false,
            overlayClasses: optsOr$el.overlayClasses || overlayClasses || false
        };
        if (currentModal) {
            prevModal = currentModal;
            prevModal.$el.addClass('displayNone');
        } else {
            prevModal = false;
        }
        currentModal = opts;
        currentScrollPosition = $body.scrollTop();
        $body.css('position', 'fixed').scrollTop(0);

        if (!currentModal.ignorePopupShow) $el.removeClass('displayNone');

        $generalOverlay.removeClass('displayNone');

        if(opts.overlayClasses) {
            $generalOverlay.addClass(opts.overlayClasses);
        }

        callbacks.show.forEach(function(callback) {
            callback();
        });
    }

    function closeModalAndOverlay(ignorePopupHide) {
        closeModalActions(ignorePopupHide);
        if(currentModal) return;
        $generalOverlay.addClass('displayNone'); // hide immediately without animation
        disableSelfClosing = false;
    }

    $generalOverlay
        .click(function () {
            if(disableSelfClosing) return;
            closeModalActions();
            if(currentModal) return;
            $generalOverlay.fadeToggle(function() {
                $generalOverlay.removeAttr('style').addClass('displayNone');
            });
        });

    return {
        show: openModalAndOverlay,
        hide: closeModalAndOverlay,
        subscribe: function(type, callback) {
            if(!callbacks[type] || typeof callback !== 'function') return;
            callbacks[type].push(callback);
            return this;
        },
        disableSelfClose: function() {
            disableSelfClosing = true;
        },
        enableSelfClose: function() {
            disableSelfClosing = false;
        }
    };
});