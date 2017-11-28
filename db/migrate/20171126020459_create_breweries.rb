class CreateBreweries < ActiveRecord::Migration[5.1]
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :location, null: false 
      t.string :img_url
      t.timestamps
    end
  end
end
