/**
 * Created by ekersale on 08/11/2016.
 */

import HelloWorldView from './views/HelloWorldView';
import LeftBarView from  './views/LeftBarView';


import * as Backbone from 'backbone';

class Router extends Backbone.Router {

    constructor() {
        super({
            routes: {
                '': 'initialize',
            }
        });
    }
    initialize(){
        new LeftBarView();
    }
}

export default Router;