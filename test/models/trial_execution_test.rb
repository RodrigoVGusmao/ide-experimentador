require "test_helper"

class TrialResultInfo
  attr_accessor :status;
  attr_accessor :log;
  def initialize(a, b)
    @status = a;
    @log = b;
  end
end

class TrialExecutionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "retorna dados do experimento com log bem definido"
    data = TrialResultInfo.new("success", "{'battery-level':50,'x':1,'y':1,'x':2,'y':2,'battery-level':25}");
    result = TrialResult.new(data);
    assert_equal("success", result.status, "String de status '" + result.status + "' não é igual à constante 'success'");
    assert_equal("2", result.position_x, "String de status '" + result.position_x + "' não é igual à constante '2'");
    assert_equal("2", result.position_y, "String de status '" + result.position_y + "' não é igual à constante '2'");
    assert_equal("25", result.battery, "String de status '" + result.battery + "' não é igual à constante '25'");
  end
  test "retorna dados do experimento com log nil"
    data = TrialResultInfo.new("success", nil);
    result = TrialResult.new(data);
    assert_equal("N/A", result.status, "String de status '" + result.status + "' não é igual à constante 'N/A'");
    assert_equal("-", result.position_x, "String de status '" + result.position_x + "' não é igual à constante '-'");
    assert_equal("-", result.position_y, "String de status '" + result.position_y + "' não é igual à constante '-'");
    assert_equal("-", result.battery, "String de status '" + result.battery + "' não é igual à constante '-'");
  end
  test "retorna dados do experimento com log vazio"
    data = TrialResultInfo.new("success", "");
    result = TrialResult.new(data);
    assert_equal("N/A", result.status, "String de status '" + result.status + "' não é igual à constante 'N/A'");
    assert_equal("-", result.position_x, "String de status '" + result.position_x + "' não é igual à constante '-'");
    assert_equal("-", result.position_y, "String de status '" + result.position_y + "' não é igual à constante '-'");
    assert_equal("-", result.battery, "String de status '" + result.battery + "' não é igual à constante '-'");
  end
end
