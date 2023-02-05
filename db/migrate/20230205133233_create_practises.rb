class CreatePractises < ActiveRecord::Migration[6.1]
  def change
    create_table :practises do |t|

      t.timestamps
    end
  end
end
