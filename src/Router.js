/**
 * Created by ekersale on 08/11/2016.
 */

import HelloWorldView from './views/HelloWorldView';
import * as Backbone from 'backbone';

class Router extends Backbone.Router {

    constructor() {
        super({
            routes: {
                '': 'HelloWorld'
            }
        });
    }

    static get getApiUrl() {
        return 'http://beavr.fr:3000/api/'
    }

    HelloWorld() {
        new HelloWorldView();
    }

}

export default Router;