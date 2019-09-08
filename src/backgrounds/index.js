import tanoshimu_en from './tanoshimu_en.png';
import tanoshimu_fr from './tanoshimu_fr.png';
import tanoshimu_jp from './tanoshimu_jp.png';

export {default as not_found_bg} from './not-found.jpg';
export {default as notaki} from './forevernote.png';
export {default as crystal_clear} from './crystal_clear.png';

export const tanoshimu = {
  en: tanoshimu_en,
  fr: tanoshimu_fr,
  jp: tanoshimu_jp,
  ja: tanoshimu_jp
};

const currentLocale = localStorage['current_locale'] || 'en';
export const defaultTanoshimu = tanoshimu[currentLocale];
