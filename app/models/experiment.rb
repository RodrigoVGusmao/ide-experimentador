class trial_result
    attr_reader :status;
    attr_reader :position_x;
    attr_reader :position_y;
    attr_reader :battery;

    def get_data(data) #TrialExecution object
        @position_x = data.log.scan("'x':\s*(.),").last;
        @position_y = data.log.scan("'y':\s*(.),").last;
        @battery = data.log.scan("'bettery-level':\s*'(.)',").last;
        @status = data.status;
    end
end

class Experiment < ApplicationRecord
    has_many :trials
end
