export function saveData(data) {
  const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'weightData.json';
  link.click();
  setTimeout(function() {
    URL.revokeObjectURL(url);
  }, 0);
}
