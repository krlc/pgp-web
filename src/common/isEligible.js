// Apparently, css animation with a 'content' change
// works in Chrome and Firefox only

export default function isEligible() {
    const isFirefox = typeof InstallTrigger !== 'undefined';
    const isChrome = !!window.chrome;

    return isFirefox || isChrome
}