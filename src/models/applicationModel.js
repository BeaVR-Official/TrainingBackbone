import Router from "../router";
import * as Backbone from 'backbone';

class Application extends Backbone.Model {
    get idAttribute() {
        return '_id';
    }

    get cidPrefix() {
        return '__c';
    }

    url() {
        return Router.urlBase + "/applications";
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

export default Application;