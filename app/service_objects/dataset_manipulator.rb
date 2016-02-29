class DatasetManipulator
  def initialize(filepath)
    self.filepath = Rails.root.join(filepath)
  end

  def extract_headers(header_row)
    header_mappings = {}
    tag_mappings = {}
    sort_mappings = {}
    headers = header_row.headers

    headers.map do |header|
      if header.include? "tag: "
        header_mapping = { header => header[5..-1] }
        tag_mappings.merge! header_mapping
      elsif header.include? "sort: "
        header_mapping = { header => header[6..-1] }
        sort_mappings.merge! header_mapping
      else
        header_mapping = { header => header }
        header_mappings.merge! header_mapping
      end
    end

    tags = { "tags" => tag_mappings }
    sorts = { "sorts" => sort_mappings }
    header_mappings.merge! tags
    header_mappings.merge! sorts

    header_mappings
  end

  def extract
    header_mappings = {}
    data = []

    CSV.foreach(filepath, return_headers: true, headers: true) do |row|
      if row.header_row?
        header_mappings = extract_headers(row)
        next
      end

      datum = {
        "tags" => {},
        "sorts" => {}
       }

      header_mappings.each do |key, value|
        case key
          when "tags"
            value.each do |csv_name, real_name|
              pair = { real_name => row[csv_name] }
              datum["tags"].merge! pair
            end
          when "sorts"
            value.each do |csv_name, real_name|
              pair = { real_name => row[csv_name] }
              datum["sorts"].merge! pair
            end
          else
            pair = { value => row[key] }
            datum.merge! pair
        end
      end

      data << datum
    end

    data
  end

  private
  attr_accessor :filepath
end
