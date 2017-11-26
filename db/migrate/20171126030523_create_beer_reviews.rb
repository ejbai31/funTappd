class CreateBeerReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :beer_reviews do |t|
      t.integer :rating, null: false
      t.text :review
      t.integer :user_id, null: false
      t.integer :beer_id, null: false
      t.timestamps
    end
    add_index :beer_reviews, [:user_id, :beer_id], unique: true
  end
end
