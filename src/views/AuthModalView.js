/**
 * Created by Nicolas on 11/13/2016.
 */

import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';
import $ from 'jquery';
import RegisterModal from './RegisterModalView';
import ResetPasswordModal from './ResetPasswordModalView';
import ProjectSelectionModal from './ProjectSelectionModalView'
import ProjectCreationModal from './ProjectCreationModalView'

require('../../sass/AuthModal.scss');

class AuthModalView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.AuthModal);
    }

    get events() {
        return {
            'click #register_button' : 'openRegisterModal',
            'click #reset_password' : 'openResetPasswordModal',
            'click #login_button' : 'loginUser',
            'click #project_creation_button' : 'openProjectCreationModal'
        };
    }

    get $el() {
        return $('.ModalSelector');
    }

    openRegisterModal() {
        var modal = new RegisterModal();
        $('#login_modal').animateCssOut('fadeOutLeft', modal);
    }

    openResetPasswordModal() {
        var modal = new ResetPasswordModal();
        $('#login_modal').animateCssOut('fadeOutLeft', modal);
    }

    loginUser() {
        var modal = new ProjectSelectionModal();
        $('#login_modal').animateCssOut('fadeOutLeft', modal);
    }

    openProjectCreationModal() {
        var modal = new ProjectCreationModal(this);
        $('#login_modal').animateCssOut('fadeOutLeft', modal);
    }

    constructor() {
        super({
            events: {}
        });
        Loader.initStyles();
    }

    show(showAnim = true) {
        this.render();
        if (showAnim)
            $('#login_modal').animateCssIn('fadeInLeft');
    }

    initialize() {}

    render() {
        this.$el.html(this.template());
        return this;
    }
}

export default AuthModalView;