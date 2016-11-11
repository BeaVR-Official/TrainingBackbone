import Router from "../router";
import * as Backbone from '../../node_modules/backbone/backbone';
import Application from "../models/applicationModel";

class Applications extends Backbone.Collection {

    url() {
        return Router.urlBase + "/applications/";
    }

    get model() {
        return Application;
    }

    constructor(params) {
        super(params);
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
export default Applications;