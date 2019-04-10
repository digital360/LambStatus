import assert from 'assert'
import { changeTimezoneToUTC, formatDateTime, formatDateTimeInPST } from 'utils/datetime'

describe('datetime', () => {
  describe('formatDateTime', () => {
    it('should format datetime', async () => {
      assert(formatDateTime('2018-04-09T01:00:00Z', 'MMM D, YYYY, HH:mm UTC', '') === 'Apr 9, 2018, 01:00 UTC')
      assert(formatDateTime('2018-04-09T01:00:00+09:00', 'MMM D, YYYY, HH:mm UTC', '') === 'Apr 8, 2018, 16:00 UTC')

      // timezone is set to Australia/Melbourne by default
      assert(formatDateTime('2019-04-09T00:00:00Z', 'MMM D, YYYY, HH:mm Z') === 'Apr 9, 2019, 10:00 +10:00')
      assert(formatDateTime('2018-04-09T01:00:00+09:00', 'MMM D, YYYY, HH:mm Z') === 'Apr 9, 2018, 02:00 +10:00')
    })
  })

  describe('formatDateTimeInPST', () => {
    it('should format datetime in PST', async () => {
      assert(formatDateTimeInPST('2018-04-09T01:00:00Z') === 'Apr 8, 18:00 PST')
      assert(formatDateTimeInPST('2018-04-09T01:00:00+09:00') === 'Apr 8, 09:00 PST')
    })
  })

  describe('changeTimezoneToUTC', () => {
    it('should change time zone from local to UTC', async () => {
      assert(changeTimezoneToUTC('2018-04-09T01:00:00+09:00') === '2018-04-08T16:00:00Z')
      assert(changeTimezoneToUTC('2018-04-09T01:00:00+00:00') === '2018-04-09T01:00:00Z')
    })
  })
})
