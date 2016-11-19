import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';
import $ from 'jquery';

require('../../sass/TopBar.scss');

class ObjectMenuView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.TopBar);
    }

    get $el() {
        return $('.TopBarSelector');
    }

    get events() {
        return {
            'click .close-cross': 'test',
            'click .add-tab': 'test',
            'click .project-tab': 'test'
        };
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

    test() {
        console.log("ok");
    }
}

export default ObjectMenuView;