/**
 * Created by ekersale on 08/11/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';
import $ from 'jquery';
import BeavrApplications from '../collections/applicationsCollection';

class ObjectMenuView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.HelloWorld);
    }

    get $el() {
        return $('.HelloWorldSelector');
    }

    constructor() {
        super();
        this.applications = new BeavrApplications();
        this.listenTo(this.applications, 'all', this.render);
        this.applications.fetch();
    }

    render() {
        this.$el.html(this.template({
                applications : this.applications
            }));
        return this;
    }
}

export default ObjectMenuView;