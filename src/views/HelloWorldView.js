/**
 * Created by ekersale on 08/11/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';

require('../../sass/HelloWorld.scss');

class ObjectMenuView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.HelloWorld);
    }

    get events() {
        return {
            'click .openAuthModal' : 'openAuthModal',
            'click .login_button' : 'openAuthModal'
        };
    }

    get $el() {
        return $('.HelloWorldSelector');
    }

    openAuthModal() {
        $('.coupled.modal').modal({
                allowMultiple: true
            });
        $('.register.modal')
            .modal('attach events', '.login.modal #register_button');
        $('.password.modal')
            .modal('attach events', '.login.modal #password_button')
        $('.login.modal')
            .modal('show');
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

export default ObjectMenuView;