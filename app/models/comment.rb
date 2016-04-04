class Comment
  include Mongoid::Document
  include Mongoid::Timestamps

  embedded_in :post, inverse_of: :comments

  field :body, type: String
  field :user_id, type: String

  def user
    if(self.user_id)
      User.find(self.user_id)
    end
  end

end
