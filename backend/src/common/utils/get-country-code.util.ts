import countries from 'i18n-iso-countries'
import en from 'i18n-iso-countries/langs/en.json'

countries.registerLocale(en)

export const getCountryCode = (name: string): string | undefined => {
  return countries.getAlpha2Code(name, 'en')
}
