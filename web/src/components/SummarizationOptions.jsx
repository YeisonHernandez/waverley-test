import styled from 'styled-components';

const StyledSummarizationOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
`;


function SummarizationOptions({ summaryLength, summaryRatio, setSummaryLength, setSummaryRatio}) {

  const handleLengthChange = (event) => {
    setSummaryLength(event.target.value);
  };

  const handleRatioChange = (event) => {
    setSummaryRatio(parseFloat(event.target.value));
  };

  return (
    <StyledSummarizationOptions>
      <label htmlFor="summaryLength">Length options: </label>
      <select id="summaryLength" value={summaryLength} onChange={handleLengthChange}>
        <option value="Short">Short</option>
        <option value="Medium">Medium</option>
        <option value="Long">Long</option>
      </select>
      <label htmlFor="ratio">Summary ratio: </label>
      <input id="ratio" type="range" min="0" max="1" step="0.1" value={summaryRatio} onChange={handleRatioChange} />
    </StyledSummarizationOptions>
  );
}

export default SummarizationOptions;