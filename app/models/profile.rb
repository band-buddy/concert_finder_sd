class Profile < ApplicationRecord
    belongs_to :user
    validates :user, presence: true
    has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "200x200" }
    content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] },
    size: { in: 0..10.megabytes }
end
