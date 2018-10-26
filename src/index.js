export default value => {
  try {
    const newValue = value
      .replace(/\'/g, '"')
      .replace(/\n/g, '')
      .replace(/([^\,\:\{\}\"\s]+)\s*\:/g, ($1, $2) => {
        if ($2) {
          return `"${$2.replace(/\s*/g, '')}":`;
        }
        return '';
      });
    const mappingJson = JSON.parse(newValue);
    return mappingJson;
  } catch (e) {
    throw(e);
  }
};
