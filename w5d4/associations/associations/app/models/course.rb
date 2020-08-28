# == Schema Information
#
# Table name: courses
#
#  id            :bigint           not null, primary key
#  name          :string
#  prereq_id     :integer
#  instructor_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Course < ApplicationRecord
    has_many :enrollments,
        primary_key: :id,
        foreign_key: :course_id,
        class_name: :Enrollment 

    has_many :enrolled_students,
        through: :enrollments,
        source: :user

    # the following is a self-join (info w/in table)
    belongs_to :prerequisite,
        primary_key: :id,
        foreign_key: :prereq_id,
        class_name: :Course

    # can do a has_many to find however many classes you can take after that prereq        
    # associations at user discretion, can be one or other, or both
   
    belongs_to :instructor,
        primary_key: :id,
        foreign_key: :instructor_id,
        class_name: :User


end
