KambdaApp.factory('Comments', ['$resource', function ($resource) {
    var actions = {};

    actions.list = function () {
        var url = location.pathname + '.json';
        return $resource(url, {}, {
            list: {method: 'GET', isArray: true}
        }).list();
    };

    actions.delete = function (comment, callback) {
        return $resource(comment.jsonUrl, {}, {
            delete: {method: 'DELETE'}
        }).delete({}, callback);
    };

    actions.newCommentUrl = function () {
        return location.pathname + '/new';
    };

    return actions;
}]);