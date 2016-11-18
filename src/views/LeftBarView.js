/**
 * Created by napsters on 18/11/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';
import $ from 'jquery';

require('../../sass/LeftBar.scss');

class LeftBarView extends Backbone.View {

    get template() {

        return _.template(Loader.templates.LeftBar);
    }

    get events() {
        return {
            /*'click #register_button' : 'openRegisterModal',
            'click #reset_password' : 'openResetPasswordModal',
            'click #login_button' : 'loginUser'*/
        };
    }

    get $el() {
        return $('.LeftBarSelector');
    }


    constructor() {

        super({
            events: {}
        });
        console.log("TEST");
        this.render();
    }

    render() {
        this.$el.html(this.template());
        return this;
    }
}

export default LeftBarView;
