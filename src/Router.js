/**
 * Created by ekersale on 08/11/2016.
 */

import HelloWorldView from './views/HelloWorldView';
import AuthModalView from './views/AuthModalView';
import RegisterModalView from './views/RegisterModalView'
import ResetPasswordModalView from './views/ResetPasswordModalView'
import ProjectSelectionModalView from './views/ProjectSelectionModalView'
import * as Backbone from 'backbone';

class Router extends Backbone.Router {

    constructor() {
        super({
            routes: {
                '': 'HelloWorld'
            }
        });
    }

    HelloWorld() {
        new HelloWorldView();
    }

    AuthModal() {
        new AuthModalView();
    }

    RegisterModal() {
        new RegisterModalView();
    }

    ResetPasswordModal() {
        new ResetPasswordModalView();
    }

    ProjectSelectionModal() {
        new ProjectSelectionModalView();
    }

}

export default Router;