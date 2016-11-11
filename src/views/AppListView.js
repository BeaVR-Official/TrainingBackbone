/**
 * Created by ekersale on 08/11/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';
import $ from 'jquery';
import Applications from "../collections/applicationCollection";


class ObjectMenuView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.AppList);
    }

    get $el() {
        return $('.AppListSelector');
    }

    constructor() {
        super();
        this.render();
        this.listenTo(this.applicationCollection, 'all', this.render);
        this.applicationCollection = new Applications();
        this.applicationCollection.fetch();
    }

    initialize() {}

    render() {
        this.$el.html(this.template({applications: this.applicationCollection}));
        return this;
    }
}

export default ObjectMenuView;