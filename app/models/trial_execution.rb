class TrialResult
    attr_reader :status;
    attr_reader :position_x;
    attr_reader :position_y;
    attr_reader :battery;

    def initialize(data) #TrialExecution object
        @position_x = data.log.match(".*'x':\s*(.+?)(,|})")[1];
        @position_y = data.log.match(".*'y':\s*(.+?)(,|})")[1];
        @battery = data.log.match(".*'battery-level':\s*'(.+?)'(,|})")[1];
        @status = data.status;
    end
end

class TrialExecution < ApplicationRecord
    belongs_to :trial
end
