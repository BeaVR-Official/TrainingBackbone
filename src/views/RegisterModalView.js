/**
 * Created by Nicolas on 11/13/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';
import AuthModal from './AuthModalView';
import $ from 'jquery';

class RegisterModalView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.RegisterModal);
    }

    get events() {
        return {
            'click #back_button' : 'openAuthModal'
        };
    }

    get $el() {
        return $('.ModalSelector');
    }

    constructor() {
        super({
            events: {}
        });
        Loader.initStyles();
    }

    openAuthModal() {
        var modal = new AuthModal();
        $('#register_modal').animateCssOut('fadeOutLeft', modal);
    }

    initialize() {}

    show() {
        this.render();
        $('#register_modal').animateCssIn('fadeInLeft');
    }

    render() {
        this.$el.html(this.template());
        return this;
    }
}

export default RegisterModalView;