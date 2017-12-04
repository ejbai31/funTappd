# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171126030523) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beer_reviews", force: :cascade do |t|
    t.float "rating", null: false
    t.text "review"
    t.integer "user_id", null: false
    t.integer "beer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "beer_id"], name: "index_beer_reviews_on_user_id_and_beer_id", unique: true
  end

  create_table "beers", force: :cascade do |t|
    t.string "name", null: false
    t.string "style", null: false
    t.float "abv", null: false
    t.float "rating", null: false
    t.text "description", null: false
    t.integer "brewery_id", null: false
    t.string "img_url", default: "https://res.cloudinary.com/ejbai31/image/upload/v1512376982/beer_bottle-512_ulxjj6.png"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "breweries", force: :cascade do |t|
    t.string "name", null: false
    t.string "location"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "img_url", default: "https://res.cloudinary.com/ejbai31/image/upload/v1512376920/default-user_dqm6tz.png"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
