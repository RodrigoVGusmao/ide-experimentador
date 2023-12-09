class ExperimentsController < ApplicationController
    def show
      @oneExperiment = Experiment.find(params[:id])
    end
    
    def index 
      @experiments = Experiment.all()
    end

    def listAllTrials
      @trials =  Trial.all()
      # render json: Trial.all()
    end
  
  end
  