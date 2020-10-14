export default function parseCsv(string) {
  const rows = string.split('\n');
  const headers = rows[0].split(',');
  
  return rows.slice(1).map(i => i.split(',').reduce((acc, cur, idx) => ({
    ...acc,
    [headers[idx]]: cur,
  }), {}));
}
