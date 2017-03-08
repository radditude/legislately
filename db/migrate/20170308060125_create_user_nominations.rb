class CreateUserNominations < ActiveRecord::Migration[5.0]
  def change
    create_table :user_nominations do |t|
      t.integer :user_id
      t.integer :nomination_id
      t.timestamps
    end
  end
end
