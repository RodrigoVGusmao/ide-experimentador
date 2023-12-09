class TrialController < ApplicationController
  def showTrialExecution
    render json: TrialExecution.find(params[:id])
    # @data = TrialExecution.new(params[:id]);
  end
  

end
