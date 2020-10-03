var bodyCtx = JSVs(),
    newYears = new Date(new Date().getFullYear() + 1, 0, 1);

setInterval(countdown, 1000), countdown();

function countdown() {
    var diff = (newYears - new Date()) / 1000,
        days = Math.floor(diff / 3600 / 24),
        hours = Math.floor((diff - days * 3600 * 24) / 3600),
        minutes = Math.floor((diff - days * 3600 * 24 - hours * 3600) / 60),
        seconds = Math.floor(diff - days * 3600 * 24 - hours * 3600 - minutes * 60);
    bodyCtx.days.textContent = days;
    bodyCtx.hours.textContent = ('0' + hours).substr(-2);
    bodyCtx.minutes.textContent = ('0' + minutes).substr(-2);
    bodyCtx.seconds.textContent = ('0' + seconds).substr(-2);
}



function JSVs() {
    return mount(document.body, {});
    function mount(element, context) {
        return mnt(element), context;
        function mnt(el) { me(el); for (var i = 0; i < el.children.length; i++) mnt(el.children[i]); }
        function me(e) {
            var idAttr = e.attributes['id'];
            idAttr && !context[idAttr.value] && (context[idAttr.value] = e);
        }
    }
}