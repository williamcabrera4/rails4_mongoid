json.array!(@comments) do |comment|
  json.extract! comment, :body
  json.url post_comment_path(@post, comment, format: :html)
  json.jsonUrl post_comment_path(@post, comment, format: :json)
  json.editUrl edit_post_comment_path(@post, comment, format: :html)
  json.postId @post.id.to_s
  json.id = comment.id.to_s
end