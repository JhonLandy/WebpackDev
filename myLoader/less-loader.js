const less = require('less')
module.exports = function(source) {
    less.render(source, (e, output) => {
        const callback = this.async()
        this.callback(e, output.css)
        console.log(output.css)
    })
}