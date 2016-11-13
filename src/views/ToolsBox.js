/**
 * Created by ekersale on 13/11/2016.
 */

/**
 * Created by ekersale on 12/11/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from 'underscore';
import $ from 'jquery';

require('../../sass/ToolsBox.scss');

class ToolsBoxView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.ToolsBox);
    }

    get $el() {
        return $('.ToolsBoxSelector');
    }

    get events() {
        return {
        };
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

export default ToolsBoxView;