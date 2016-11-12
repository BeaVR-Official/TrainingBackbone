/**
 * Created by ekersale on 08/11/2016.
 */

import Router from './Router';
import Loader from './utils';
import * as Backbone from 'backbone';
import $ from 'jquery';

require('../sass/fonts.scss');
require('../sass/main.scss');

class Application {
    constructor() {
        Loader.loadTemplates([ 'SettingsBox', 'NextPrevBox' ],
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
