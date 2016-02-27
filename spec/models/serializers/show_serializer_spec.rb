require 'rails_helper'

describe ShowSerializer do
  let(:show) { create :show, episode_count: 2 }
  let(:user) { create :user }

  subject { described_class.new(show, scope: user, root: false).as_json }

  before do
    user.shows << show
    user.subscriptions.first.update episode_progress: 2
  end

  it 'works' do
    expect(subject[:name]).to eq show.name
    expect(subject[:episode_progress]).to eq 2
    expect(subject[:episodes].count).to eq 2
  end
end
