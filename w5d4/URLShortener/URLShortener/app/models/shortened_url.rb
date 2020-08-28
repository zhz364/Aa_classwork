# == Schema Information
#
# Table name: shortened_urls
#
#  id        :bigint           not null, primary key
#  long_url  :string           not null
#  short_url :string           not null
#  user_id   :integer          not null
#
class ShortenedUrl < ApplicationRecord
    validates :long_url, presence: true, uniqueness: true
    validates :short_url, presence: true #uniqueness: true
    validates :user_id, presence: true, uniqueness: true
end
