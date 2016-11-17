/**
 * Created by ekersale on 08/11/2016.
 */

import HelloWorldView from './views/HelloWorldView';
import TopBarView from './views/TopBarView';
import * as Backbone from 'backbone';

class Router extends Backbone.Router {

    constructor() {
        super({
            routes: {
                '': 'HelloWorld',
            }
        });
    }

    HelloWorld() {
        new HelloWorldView();
    }

    TopBar() {
        new TopBarView();
    }

}

export default Router;