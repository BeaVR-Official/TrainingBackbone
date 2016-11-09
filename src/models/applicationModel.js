/**
 * Created by Nicolas on 11/8/2016.
 */

import Router from "../router";
import * as Backbone from 'backbone';

class BeavrApplication extends Backbone.Model {
    get idAttribute() {
        return '_id';
    }

    get cidPrefix() {
        return '__c';
    }

    url() {
        return Router.getApiUrl + "applications" + this.id;
    }

    defaults() {
        return {
            id: -1,
        };
    }

    get(name) {
        return this.attributes[name];
    }

    parse(response) {
        return response;
    }
}

export default BeavrApplication;
