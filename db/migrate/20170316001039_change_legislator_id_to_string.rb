class ChangeLegislatorIdToString < ActiveRecord::Migration[5.0]
  def change
    change_column :user_legislators, :legislator_id, :string
  end
end
