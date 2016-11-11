/**
 * Created by ekersale on 08/11/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from 'underscore';
import $ from 'jquery';

require('../../sass/SettingsBox.scss');

class ObjectMenuView extends Backbone.View {

    get template() {
        console.log(Loader.templates.SettingsBox);
        return _.template(Loader.templates.SettingsBox);
    }

    get $el() {
        return $('.SettingsBoxSelector');
    }

    constructor() {
        super();
        this.render();
    }

    render() {
        this.$el.html(this.template());
        return this;
    }
}

export default ObjectMenuView;