clc;
clear all;
% Define the sampling frequency
SamplingFrequency = 30;
RowLength = 64 * SamplingFrequency;

% Read the CSV file (assuming the file is named 'data.csv')
filename = 'S002_whole_df.csv';
data = readtable(filename);

% Extract the single column and the labels
bvpData = data.BVP; % Extract the BVP column as an array
sleepStage = string(data.Sleep_Stage); % Convert the last column to a string array

% Loop to fill segmentedData and add labels

for i = 1:samplesPerRow:length(bvpData)
    if i + samplesPerRow - 1 > length(bvpData)
        break; % Stop if less than 1920 samples remain
    end
    
    % Extract the current segment of BVP data
    currentSegment = bvpData(i:i+samplesPerRow-1);
    
    % Check the corresponding sleep stage
    currentStage = sleepStage{i};  % Extract the sleep stage for the current segment
    egmentedData = [];
    end
end


timeStamp = 1;
while timeStamp + 1920 - 1 <= length(singleColumn)
    disp(TIMESTAMP(timeStamp))
    if lastColumn(timeStamp) ~= "P"
        % Extract the segment
        temp = singleColumn(timeStamp:timeStamp+1920-1);
        
        % Determine the label for the current segment
        switch lastColumn(timeStamp)
            case "W"
                label = 0;
            case "N1"
                label = 1;
            case "N2"
                label = 2;
            case "N3"
                label = 3;
            case "R"
                label = 4;
            otherwise
                label = -1; % Use -1 for unknown labels, if any
        end
        
        % Append label as the last element of the segment
        temp = [temp; label];
        
        % Store the segmented data
        segmentedData = [segmentedData, temp];
    end
    
    % Update timeStamp for the next segment
    timeStamp = timeStamp + 1920;
end

% Create a structure to store patient information
patient_info = struct( ...
    'SID', 'S002', ...
    'AGE', 65.9, ...
    'GENDER', 'M', ...
    'BMI', 27, ...
    'OAHI', 19, ...
    'AHI', 19, ...
    'Mean_SaO2', '91%', ...
    'Arousal_Index', 98, ...
    'Sleep_Disorders', 'OSA' ...
);


% Transpose the matrix to get each segment as a row
segmentedData = segmentedData';


save('S002.mat', 'segmentedData', 'patient_info');
