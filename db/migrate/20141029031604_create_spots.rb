class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
      t.string :title
      t.belongs_to :list
      t.text :description
      t.decimal :lat
      t.decimal :lng
      t.string :address
      t.text :pov
      t.string :link
    end
  end
end
