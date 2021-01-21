class myPlugin {
    apply(complier) {
        complier.hooks.beforeCompile.callAsync = function (context, fn) {
            console.log(context)
        }
    }
}
module.exports = myPlugin