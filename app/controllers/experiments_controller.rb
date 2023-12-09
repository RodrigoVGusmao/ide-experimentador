class ExperimentsController < ApplicationController
    def show
      @oneExperiment = Experiment.find(params[:id])
    end
    
    def index 
      
    end

    def showAll
      # @experiments = Experiment.all()
      render json: Experiment.all()
    end

    def listAllTrials
      # @trials =  Trial.all()
      render json: Trial.all()
    end
  
  end
  