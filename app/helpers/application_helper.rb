module ApplicationHelper

  def yes_or_no(boolean)
    boolean == '1' ? 'Yes' : 'No'
  end

end
