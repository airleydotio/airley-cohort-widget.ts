export function getCurrencySymbol(currency: string): string {
  switch (currency) {
    case 'USD':
      return '$'
    case 'EUR':
      return '€'
    case 'GBP':
      return '£'
    case 'JPY':
      return '¥'
    case 'CNY':
      return '¥'
    case 'INR':
      return '₹'
    default:
      return ''
  }
}

export function currencyFormat(currency: string): string {
  switch (currency) {
    case 'USD':
      return 'USD'
    case 'EUR':
      return 'EUR'
    case 'GBP':
      return 'GBP'
    case 'INR':
      return 'INR'
    default:
      return currency
  }
}

export function formatAmount(amount: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2,
    maximumSignificantDigits: 3,
  }).format(amount)
}

export const isEmpty = (value: any): boolean => {
  return value === null || value === undefined || value === ''
}

export function isDevMode(): string | null {
  const localApi = localStorage.getItem('localAPI')
  return !isEmpty(localApi) ? localApi : null
}
