/**
 * Created by ekersale on 08/11/2016.
 */

import AppListView from './views/AppListView';
import * as Backbone from 'backbone';

class Router extends Backbone.Router {

    constructor() {
        super({
            routes: {
                '': 'AppList'
            }
        });
    }

    // Base URL of the BeaVR API
    static get urlBase() {
        return 'http://beavr.fr:3000/api';
    }

    // List of the applications
    AppList() {
        new AppListView();
    }

}

export default Router;