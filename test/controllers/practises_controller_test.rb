require "test_helper"

class PractisesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get practises_index_url
    assert_response :success
  end
end
