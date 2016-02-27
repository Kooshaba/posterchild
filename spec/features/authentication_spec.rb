require 'rails_helper'
require_relative '../support/feature_helpers'

describe 'signing in' do
  it 'works' do
    sign_in
    expect(page).to have_content 'Dashboard'
  end
end