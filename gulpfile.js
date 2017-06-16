var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// elixir.config.css.autoprefix.options.browsers = ['last 2 versions'];

elixir((mix) => {
	mix.copy('./node_modules/font-awesome/fonts', 'public/fonts');
	
    mix.sass('app.scss');
    mix.sass('windows.scss');
    mix.sass('desktop.scss');
    mix.sass('practice.scss', './practice/css/practice.css');


    mix.scripts([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/jquery-ui-dist/jquery-ui.min.js',
        './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        'app.js'
    ], 'public/js/app.js');

    mix.copy('./public/js/app.js', './practice/js/app.js');
    mix.copy('./node_modules/font-awesome/fonts', './practice/fonts');
});
