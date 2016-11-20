/**
 * Created by ekersale on 08/11/2016.
 */

import * as Backbone from 'backbone';
import Router from './Router';
import Loader from './utils';


require('../sass/fonts.scss');
require('../sass/main.scss');

class Application {
    constructor() {
        Loader.loadTemplates([ 'HelloWorld', 'AuthModal', 'RegisterModal', 'SettingsBox', 'NextPrevBox', 'ToolsBox' ],
            function() {
                new Router();
                Backbone.history.start();
            }
        );
    }
}

$(() => {
    new Application();
});