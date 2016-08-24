// https://github.com/sindresorhus/pageres
const Pageres = require('pageres');

var sizes = ['1440x900']
var options = {crop: true, scale: 0.5, format: 'jpg'}

const pageres = new Pageres({delay: 30})
    .src('http://www.allenroyston.com', sizes, options)
    .src('http://www.semanticui-ang2.com/', sizes, options)
    .src('https://totallynotarobot.2016.angularattack.io/', sizes, options)
    .src('https://allenroyston-beta.herokuapp.com/', sizes, options)
    .src('https://oregon-gov.herokuapp.com/', sizes, options)
    .src('https://allenroyston.herokuapp.com/', sizes, options)
    .src('http://theclubl.com/', sizes, options)
    .src('https://arclyte-mockup.herokuapp.com', sizes, options)
    .src('https://firstrites-beta.herokuapp.com', sizes, options)
    .src('https://angularkit.herokuapp.com/#/page2', sizes, options)
    .src('https://bootstrapkit.herokuapp.com', sizes, options)
    .dest(__dirname + "/images")
    .run()
    .then(() => console.log('done'));
