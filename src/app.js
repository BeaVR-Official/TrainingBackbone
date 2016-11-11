/**
 * Created by ekersale on 08/11/2016.
 */

import Router from './Router';
import Loader from './utils';
import * as Backbone from 'backbone';
import $ from 'jquery';

require('../sass/main')

class Application {
    constructor() {
        Loader.loadTemplates([ 'HelloWorld' ],
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
