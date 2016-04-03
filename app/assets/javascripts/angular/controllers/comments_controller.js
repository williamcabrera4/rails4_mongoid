KambdaApp.controller("CommentsCtrl", ['$scope', 'Comments', function ($scope, Comments) {

    function init() {
        updateCommentList();
        $scope.deleteComment = deleteComment;
        $scope.newCommentUrl = Comments.newCommentUrl();
    }

    function deleteComment(comment) {
        if (confirm('Are you sure?')) {
            Comments.delete(comment, updateCommentList);
        }
    }

    function updateCommentList() {
        $scope.comments = Comments.list();
    }

    init();
}]);