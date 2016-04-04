class User
  include Mongoid::Document
  include Mongoid::Timestamps

  has_many :posts

  field :name, type: String
  field :email, type: String
  field :is_admin, type: Boolean

  index({ email: 1 }, { unique: true})

  def to_s
    self.name
  end

end
