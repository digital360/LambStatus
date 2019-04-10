import moment from 'moment-timezone'

export const isValidDate = (dateString) => {
  try {
    getDateObject(dateString)
  } catch (e) {
    return false
  }
  return true
}

export const getDateObject = (dateString) => {
  const date = new Date(dateString)
  // Thanks to https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
  if (Object.prototype.toString.call(date) === '[object Date]' && isNaN(date.getTime())) {
    throw new Error(`invalid date string ${dateString}`)
  }
  return date
}

export const formatDateTime = (datetime, fmt = 'MMM D, YYYY, HH:mm UTC', timezone = '') => {
  let time
  if (timezone) {
    time = moment(datetime).tz(timezone)
  } else {
    time = moment(datetime).utc()
  }
  return time.format(fmt)
}

export const formatDateTimeInPST = (datetime, fmt = 'MMM D, HH:mm [PST]') => {
  return moment(datetime).utc().subtract(7, 'hours').format(fmt)
}

export const changeTimezoneToUTC = datetime => {
  return moment(datetime).utc().format()
}
