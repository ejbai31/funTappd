class CreateBeers < ActiveRecord::Migration[5.1]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.string :style, null: false 
      t.integer :abv, null: false 
      t.text :description, null: false
      t.integer :brewery_id, null: false 
      t.string :img_url, null: false 
      t.timestamps
    end
  end
end