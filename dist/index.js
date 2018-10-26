export default (function (value) {
  try {
    var newValue = value.replace(/\'/g, '"').replace(/\n/g, '').replace(/([^\,\:\{\}\"\s]+)\s*\:/g, function ($1, $2) {
      if ($2) {
        return '"' + $2.replace(/\s*/g, '') + '":';
      }
      return '';
    });
    var mappingJson = JSON.parse(newValue);
    return mappingJson;
  } catch (e) {
    throw e;
  }
});