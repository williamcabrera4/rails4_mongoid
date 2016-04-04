class Post
  include Mongoid::Document
  include Mongoid::Timestamps

  embeds_many :comments
  belongs_to :user

  field :title, type: String
  field :body, type: String
  field :starred, type: Boolean
  field :user_id, type: String

  index({ starred: 1 })
end
