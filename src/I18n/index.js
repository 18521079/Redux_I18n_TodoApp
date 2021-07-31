import I18n from "i18n-js";
import { Localization } from "expo-localization";


// import en from "./en.json";
// import vi from "./vi.json";

import ar from './ar';
import en from './en';
import fr from './fr';

I18n.fallbacks = true;

I18n.translations = {
  en,
  ar,
  fr,
};

// I18n.translations = {
//   en,
//   vi
// };

// const getLanguage = async() => {
//   try {
//     const choice = await Localization.locale
//     I18n.locale = choice.substr(0, 2)
//     I18n.initAsync()
//   } catch (error) {
//     console.log(Localization.locale)
//   }
// }

// getLanguage()

// export function t(name) {
//   return I18n.t(name);
// }

export default I18n;


