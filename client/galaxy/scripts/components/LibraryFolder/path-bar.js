import _ from "underscore";
import Backbone from "backbone";

var PathBar = Backbone.View.extend({
    el: "#path-bar",

    full_path: null,

    initialize: function (options) {
        console.log("options", options);
        console.log("options", options);
        console.log("options", options);
        console.log("options", options);
        console.log("options", options);
        this.render(options);
    },
    pathBar: function () {
        return _.template(
            `<ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a title="Return to the list of libraries" href="#">Libraries</a>
                </li>
                <% _.each(path, function(path_item) { %>
                    <% if (path_item[0] != id) { %>
                        <li class="breadcrumb-item">
                            <a title="Return to this folder" href="#/folders/<%- path_item[0] %>">
                                <%- path_item[1] %>
                            </a>
                        </li>
                    <% } else { %>
                        <li class="breadcrumb-item active">
                            <span title="You are in this folder">
                                <%- path_item[1] %>
                            </span>
                        </li>
                    <% } %>
                <% }); %>
            </ol>
            `
        );
    },

    render: function (options) {
        var template = this.pathBar();

        // find the upper id in the full path
        var path = options.full_path;
        var upper_folder_id;
        if (path.length === 1) {
            // the library is above us
            upper_folder_id = 0;
        } else {
            upper_folder_id = path[path.length - 2][0];
        }
        console.log(options);
        this.$el.html(
            template({
                path: options.full_path,
                id: options.id,
                parent_library_id: options.parent_library_id,
                upper_folder_id: upper_folder_id,
            })
        );
    },
});

export default {
    PathBar: PathBar,
};
