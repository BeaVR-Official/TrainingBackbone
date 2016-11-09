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
        console.log(Loader.templates.HelloWorld);
        return _.template(Loader.templates.HelloWorld);
    }

    get $el() {
        return $('.HelloWorldSelector');
    }

    constructor() {
        super();
        this.render();
        var that = this;
        this.applications = new BeavrApplications();
        this.applications.fetch({success: function(){
            that.render();
        }});
        _.bind(this.render, this);
        this.applications.bind('change', this.render);
        this.applications.bind('change', _.bind(this.render, this));
    }

    initialize() {

    }

    render() {
        console.log(this.applications);
        this.$el.html(this.template({
                applications : this.applications
            }));
        return this;
    }
}

export default ObjectMenuView;