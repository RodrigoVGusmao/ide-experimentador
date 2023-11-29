class trial_result
    attr_reader :strStatus;
    attr_reader :fpPositionX;
    attr_reader :fpPositionY;
    attr_reader :fpBattery;

    def getData()
        @fpPositionX = TrialExecution.log.scan("'x':\s*(.),").last;
        @fpPositionY = TrialExecution.log.scan("'y':\s*(.),").last;
        @fpBattery = TrialExecution.log.scan("'bettery-level':\s*'(.)',").last;
        @strStatus = TrialExecution.status;
    end
end

class Experiment < ApplicationRecord
    has_many :trials
end
