/**
 * Created by Nicolas on 11/13/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';

class RegisterModalView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.RegisterModal);
    }

    get $el() {
        return $('.ModalSelector');
    }

    constructor() {
        super({
            events: {}
        });
        this.render();
    }

    initialize() {}

    render() {
        this.$el.html(this.template());
        return this;
    }
}

export default RegisterModalView;