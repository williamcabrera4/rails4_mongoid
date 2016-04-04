json.array!(@users) do |user|
  json.extract! user, :name, :email, :is_admin
  json.url user_url(user, format: :json)
end