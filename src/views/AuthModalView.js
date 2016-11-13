/**
 * Created by Nicolas on 11/13/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';
import RegisterModal from './RegisterModalView';

class AuthModalView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.AuthModal);
    }

    get events() {
        return {
            'click .register_button' : 'openRegisterModal'
        };
    }

    get $el() {
        return $('.ModalSelector');
    }

    openRegisterModal() {
        new RegisterModal();
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

export default AuthModalView;