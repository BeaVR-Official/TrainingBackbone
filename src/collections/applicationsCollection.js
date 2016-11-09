/**
 * Created by Nicolas on 11/8/2016.
 */

import Router from "../router";
import BeavrApplication from "../models/applicationModel";
import * as Backbone from '../../node_modules/backbone/backbone';

class BeavrApplications extends Backbone.Collection {

    constructor(params) {
        super(params);
    }

    url() {
        return Router.getApiUrl + "applications";
    }

    get model() {
        return BeavrApplication;
    }

    defaults() {
        return {
            models: []
        };
    }

    parse(response) {
        return response.data.application;
    }
}

export default BeavrApplications;
