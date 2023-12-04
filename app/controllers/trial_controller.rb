class TrialController < ApplicationController
  def show
    render json: TrialExecution.find(params[:id])
    # @data = TrialExecution.new(params[:id]);
  end
  
  def index 
    render json: Trial.all()
  end

end
