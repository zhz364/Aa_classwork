class Cat < ApplicationRecord 
    include ActionView::Helpers::DateHelper #included the module
    # validates :size, inclusion: { in: %w(small medium large),
    # message: "%{value} is not a valid size" }
    COLORS = %w(yellow black white grey gray brown)
    
    
    validates :color, inclusion: { in: COLORS}
    validates :sex, inclusion: { in: %w(M F)}
    

    def age #compare cats birthdate to now
        # time_ago_in_words
        # from_time = Time.now
        time_ago_in_words(birthdate)  #calling it on the birthdate, automatic setters/getters
    end
end