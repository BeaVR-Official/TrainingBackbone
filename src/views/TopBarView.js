import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';
import $ from 'jquery';

require('../../sass/TopBar.scss');

class ObjectMenuView extends Backbone.View {

    get template() {
        console.log(Loader.templates.TopBar);
        return _.template(Loader.templates.TopBar);
    }

    get $el() {
        return $('.TopBarSelector');
    }

    constructor() {
        super();
        this.render();
    }

    initialize() {}

    render() {
        this.$el.html(this.template());
        return this;
    }
}

export default ObjectMenuView;