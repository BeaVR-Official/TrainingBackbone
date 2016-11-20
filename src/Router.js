/**
 * Created by ekersale on 08/11/2016.
 */

import AuthModalView from './views/AuthModalView';
import * as Backbone from 'backbone';
import SettingsBox from './views/SettingsBox';
import NextPrevBox from './views/NextPrevBox';
import ToolsBox from './views/ToolsBox';

class Router extends Backbone.Router {

    constructor() {
        super({
            routes: {
                '': 'StartMenu'
            }
        });
    }

    StartMenu() {
        this.home();
        var authModal = new AuthModalView();
        authModal.openModal();
    }

/*    HelloWorld() {
        new HelloWorldView();
    }

    AuthModal() {
        new AuthModalView();
    }

    RegisterModal() {
        new RegisterModalView();
    }*/

    home() {
        new SettingsBox();
        new NextPrevBox();
        new ToolsBox();
    }

}

export default Router;