class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :caption
      t.attachment :picture
      t.timestamps
    end
  end
end
