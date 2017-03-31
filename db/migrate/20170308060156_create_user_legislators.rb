class CreateUserLegislators < ActiveRecord::Migration[5.0]
  def change
    create_table :user_legislators do |t|
      t.integer :user_id
      t.string :legislator_id
      t.timestamps
    end
  end
end
