var KambdaApp = angular.module('KambdaApp', ['ngResource', 'ui.bootstrap']).
    config(['$httpProvider', function ($httpProvider) {
        var csrfToken = $('meta[name=csrf-token]').attr('content');
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = csrfToken;
    }]);
