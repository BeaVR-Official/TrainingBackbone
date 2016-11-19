/**
 * Created by napsters on 18/11/2016.
 */

import Router from "../Router";
import ItemLeftMenu from "../models/ItemLeftMenu";

import * as Backbone from '../../../../node_modules/backbone/backbone';

class LeftMenuCollection extends  Backbone.Collection(){

    url(){
        return ""; //Router.baseURI;
    }

    get model(){
        return ItemLeftMenu;
    }

    constructor(params) {

        super(params);
    }
}

export  default LeftMenuCollection;