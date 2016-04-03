var KambdaApp = angular.module('KambdaApp', ['ngResource']).
    config(['$httpProvider', function ($httpProvider) {
        var csrfToken = $('meta[name=csrf-token]').attr('content');
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = csrfToken;
    }]);
