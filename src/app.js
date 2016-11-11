/**
 * Created by ekersale on 08/11/2016.
 */

import Router from './Router';
import Loader from './utils';
import * as Backbone from 'backbone';
import $ from 'jquery';

class Application {
    constructor() {
        Loader.loadTemplates([ 'AppList' ],
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