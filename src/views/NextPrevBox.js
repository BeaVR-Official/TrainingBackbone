/**
 * Created by ekersale on 12/11/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from 'underscore';
import $ from 'jquery';

require('../../sass/NextPrevBox.scss');

class NextPrevBoxView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.NextPrevBox);
    }

    get $el() {
        return $('.NextPrevBoxSelector');
    }

    get events() {
        return {
            'click #next' : 'next',
            'click #prev' : 'previous'
        };
    }

    constructor() {
        super();
        this.render();
    }

    next() {

    }

    previous() {

    }


    render() {
        this.$el.html(this.template());
        return this;
    }

}

export default NextPrevBoxView;