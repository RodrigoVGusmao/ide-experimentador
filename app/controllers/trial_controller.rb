class TrialController < ApplicationController
  def show
    @data = TrialResult.new(params[:id]);
  end
end
