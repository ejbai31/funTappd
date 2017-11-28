class CreateBeers < ActiveRecord::Migration[5.1]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.string :style, null: false 
      t.float :abv, null: false
      t.float :rating, null:false 
      t.text :description, null: false
      t.integer :brewery_id, null: false 
      t.string :img_url 
      t.timestamps
    end
  end
end