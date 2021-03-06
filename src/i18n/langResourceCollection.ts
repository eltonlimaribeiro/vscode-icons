// tslint:disable object-literal-key-quotes
import { ILangResourceCollection } from '../models/i18n';
import * as de from '../../../locale/lang.de.json';
import * as en from '../../../locale/lang.json';
import * as es from '../../../locale/lang.es.json';
import * as fr from '../../../locale/lang.fr.json';
import * as it from '../../../locale/lang.it.json';
import * as ptBr from '../../../locale/lang.pt-br.json';
import * as ru from '../../../locale/lang.ru.json';
import * as tr from '../../../locale/lang.tr.json';
import * as zhCn from '../../../locale/lang.zh-cn.json';

export const langResourceCollection: ILangResourceCollection = {
  de,
  en,
  es,
  fr,
  it,
  'pt-br': ptBr,
  ru,
  tr,
  'zh-cn': zhCn,
};
