/* Basic locale support from .json files */

import lang from '../locales/fr.json';

const _ = (msg: string)=> {
  const l:any = lang;
  if(l[msg]) return l[msg];
  return msg;
}

export default _;