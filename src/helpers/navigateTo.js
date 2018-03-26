import loadContent from "./loadContent";

let lastUrl;
export default async function navigateTo(url = '#/', filter = {}) {
    let method = url === lastUrl ? 'replaceState' : 'pushState';
    window.history[method]({filter}, document.title, lastUrl = url);
    return loadContent();
}