import dayjs from 'dayjs'

const duration = require('dayjs/plugin/duration')

const calculateRemainingTime = (expirationDate) => {
  dayjs.extend(duration)

  const difference = dayjs(expirationDate).diff(dayjs())

  if (difference <= 0) return 'EXPIRÓ'

  return dayjs.duration({
    hours: dayjs(expirationDate).diff(dayjs(), 'hours'),
    minutes: dayjs(difference).minute(),
    seconds: dayjs(difference).second()
  }).format('HH:mm:ss')
}

export default calculateRemainingTime
