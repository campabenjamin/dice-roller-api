document.getElementById('rollBtn').addEventListener('click', async () => {
  const res = await fetch('/roll');
  const data = await res.json();
  document.getElementById('resultText').textContent = `The number rolled is ${data.result}`;
});
