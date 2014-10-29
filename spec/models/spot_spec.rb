require 'rails_helper'

describe Spot do

    it { should validate_presence_of :lat }
    it { should validate_presence_of :lng }
    it { should validate_presence_of :title }
    it { should allow_value(80).for(:lat)}
    it { should_not allow_value("fart").for(:lat)}

end