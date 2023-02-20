/**
 * Display an amount of base 60 time into a
 * correct string
 */
export const displayTime = (amount: number) =>
  amount.toString().padStart(2, '0')
