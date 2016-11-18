/**
 * Created by napsters on 18/11/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';
import $ from 'jquery';

import RegisterModal from './RegisterModalView';
import ResetPasswordModal from './ResetPasswordModalView';
import ProjectSelectionModal from './ProjectSelectionModalView'

//require('../../sass/AuthModal.scss');

class LeftBarView extends Backbone.View {

    get template() {
        console.log(Loader.templates.LeftBarView);
        return _.template(Loader.templates.LeftBarView);
    }

    get events() {
        /*return {
            'click #register_button' : 'openRegisterModal',
            'click #reset_password' : 'openResetPasswordModal',
            'click #login_button' : 'loginUser'
        };*/
    }

    get $el() {
        return $('.LeftBarSelector');
    }

    openRegisterModal() {
        //var modal = new RegisterModal();
        //$('#login_modal').animateCssOut('fadeOutLeft', modal);
    }

    openResetPasswordModal() {
        //var modal = new ResetPasswordModal();
        //$('#login_modal').animateCssOut('fadeOutLeft', modal);
    }

    loginUser() {
        //var modal = new ProjectSelectionModal();
        //$('#login_modal').animateCssOut('fadeOutLeft', modal);
    }

    constructor() {
        super({
            events: {}
        });
    }

    /*show(showAnim = true) {
     this.render();
     if (showAnim === true)
     $('#login_modal').animateCssIn('fadeInLeft');
     }*/

    initialize() {}

    render() {
        this.$el.html(this.template());
        return this;
    }
}

export default LeftBarView;
