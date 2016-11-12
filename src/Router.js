/**
 * Created by ekersale on 08/11/2016.
 */

import SettingsBox from './views/SettingsBox';
import NextPrevBox from './views/NextPrevBox';
import * as Backbone from 'backbone';

class Router extends Backbone.Router {

    constructor() {
        super({
            routes: {
                '': 'home'
            }
        });
    }

    home() {
        new SettingsBox();
        new NextPrevBox();
    }

}

export default Router;