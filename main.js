document.addEventListener('DOMContentLoaded', () => {
  const runBtn = document.getElementById('runBtn');
  const queryInput = document.getElementById('query');
  const outputEl = document.getElementById('output');

  const simulatedResponses = [
    "Thinking... consulting Marcus Aurelius...\n\n\"The impediment to action advances action. What stands in the way becomes the way.\" Focus on what you can control. The current crisis is merely an opportunity to test your operational resilience.",
    "Thinking... convening the Startup Founders Pack...\n\nSteve Jobs: \"Cut the features. If it's not perfect, don't ship it.\"\nSam Altman: \"Ship it now. Iterate based on user feedback.\"\nConsensus: Ship a highly polished subset of features. Drop the rest.",
    "Processing failure audit...\n\nAnalyzing Munger's Alibaba Trap:\nLow valuation cannot save an eroding tech moat. Retail loyalty in tech decays fast. Ensure you are buying a durable competitive advantage, not just a cheap stock."
  ];

  runBtn.addEventListener('click', () => {
    const query = queryInput.value.trim();
    if (!query) return;
    
    // UI Loading state
    runBtn.disabled = true;
    runBtn.textContent = 'Running...';
    outputEl.style.display = 'block';
    outputEl.textContent = 'Analyzing request...\nInitializing Borrowed Brain Engine...';
    
    // Simulate network/processing delay
    setTimeout(() => {
      // Pick a random response for mockup purposes
      const randomResponse = simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)];
      
      outputEl.textContent = `> ${query}\n\n${randomResponse}`;
      
      // Reset UI
      runBtn.disabled = false;
      runBtn.textContent = 'Run';
      queryInput.value = '';
    }, 1500);
  });
  
  queryInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      runBtn.click();
    }
  });
});
