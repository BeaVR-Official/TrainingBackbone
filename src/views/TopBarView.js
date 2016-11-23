import Loader from '../utils';
import * as Backbone from 'backbone';
import * as _ from '../../node_modules/underscore';

require('../../sass/TopBar.scss');

class ObjectMenuView extends Backbone.View {

    get template() {
        return _.template(Loader.templates.TopBar);
    }

    get $el() {
        return $('.TopBarSelector');
    }

    get events() {
        return {
            'dblclick #scene-tabs .tab' : 'allowRenameTab',
            'click .edit' : 'renameTab',
            'click .close-cross': 'closeTab',
            'click .add-tab': 'addTab',
            'click .project-tab': 'showProjectInformations',
            'mousewheel': 'mousewheel',
            'click .tab' : 'clickTab',
        };
    }

    constructor() {
        super();
        this.render();
    }

    initialize() {
        this.tabArray = [];
    }

    mousewheel(event,delta) {
        var value = $("#scene-tabs").scrollLeft();
        $("#scene-tabs").scrollLeft(value -= (event.originalEvent.wheelDelta) );
        event.preventDefault();
    }

    render() {
        this.$el.html(this.template());
        return this;
    }

    // To delete when not useful anymore
    generateTabId() {
        return Math.floor((Math.random() * 100000) + 1);
    }

    getNewTabName() {

        for (var i = 1; i < this.tabArray.length + 1; i++) {
            if (this.tabArray.indexOf("Scene - " + i) == -1)
                return ("Scene - " + i);
        }

        return ("Scene - " + i);
    }

    addTab() {

        var newTabId = this.generateTabId();
        var newTabName = this.getNewTabName();

        this.tabArray.push(newTabName);

        var tabsDiv = $('#scene-tabs');
        tabsDiv[0].innerHTML = tabsDiv[0].innerHTML
            + '<a class=\"item tab\" data-tab=\"tab-'
            + newTabId
            +'\">'
            + '<div class=\"ui disabled transparent input\">'
            + '<input type=\"text\" class=\"tab-input\" value=\"' + newTabName + '\">'
            + '<i class=\"hidden edit icon\"></i>'
            + '<span class=\"close-cross\">x</span>'
            + '</div></a>'

        $('.menu .item').tab();

        tabsDiv[0].children[this.tabArray.length - 1].click();
    }

    closeTab(ev) {

        var nodeList = Array.prototype.slice.call($('#scene-tabs')[0].children);
        var i = nodeList.indexOf(ev.target.parentElement.parentElement);

        var index = this.tabArray.indexOf(ev.target.parentElement.children[0].value);
        if (index > -1) {
            this.tabArray.splice(index, 1);
        }
        ev.target.parentElement.parentElement.remove();

        if (nodeList.length <= 1)
            $('.project-tab').click();
        else {
            if ((i + 1) == nodeList.length) {
                $('#scene-tabs')[0].children[i - 1].click();
            }
            else
            {
                $('#scene-tabs')[0].children[i].click();
            }
        }

        $('.menu .item').tab();
    }

    showProjectInformations() {
        Backbone.history.navigate('/settings');
    }

    allowRenameTab(ev) {
        if (ev.target.classList.contains("disabled")) {
            ev.target.classList.remove("disabled");
            ev.target.children[1].classList.remove("hidden");
        }
    }

    renameTab(ev) {
        ev.target.classList.add("hidden");
        ev.target.parentElement.classList.add("disabled");

        var input = ev.target.parentElement.children[0];
        var newName = input.value;

        var index = this.tabArray.indexOf(input.defaultValue);
        if (index > -1)
            this.tabArray[index] = newName;

        input.defaultValue = newName;
        input.style.width = ((input.value.length + 1) * 8) + "px";
    }

    clickTab(ev) {

        if (ev.target.classList.contains("edit") || ev.target.classList.contains("tab-input")) {
            var nodeList = Array.prototype.slice.call($('#scene-tabs')[0].children);

            for (var i = 0; i < nodeList.length; i++) {

                if (ev.target.parentElement.parentElement == nodeList[i])
                    nodeList[i].classList.add("active");
                else
                    nodeList[i].classList.remove("active");
            }
        }
        else
            if (!ev.target.classList.contains("close-cross")) {
                var nodeList = Array.prototype.slice.call($('#scene-tabs')[0].children);

                for (var i = 0; i < nodeList.length; i++) {

                    if (ev.target == nodeList[i] || ev.target == nodeList[i].firstElementChild)
                        nodeList[i].classList.add("active");
                    else
                        nodeList[i].classList.remove("active");
                }
            }

    }
}

export default ObjectMenuView;