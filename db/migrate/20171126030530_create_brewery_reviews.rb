class CreateBreweryReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :brewery_reviews do |t|
      t.integer :rating, null: false 
      t.text :review
      t.integer :user_id, null: false 
      t.integer :brewery_id, null: false
      t.timestamps
    end
  end
end
