module.exports = function(source) {
    return `const style = document.createElement('style');
    style.innerHTML = ${source};
            document.head.appendChild(style);
            `
}