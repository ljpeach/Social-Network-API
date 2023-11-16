dayjs = require('dayjs');
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

const formatDate = (date) => {
    return dayjs(date).format('MMM Do, YYYY [at] h:mm a');
}

module.exports = formatDate;