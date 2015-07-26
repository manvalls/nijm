var re =  /(^(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|\s)*)|((?:"(?:(?:\\(?:.|\s))|(?:[^\\"\n\r]))*")|(?:'(?:(?:\\(?:.|\s))|(?:[^\\'\n\r]))*')|(?:\/(?!\*)(?:(?:\\(?:.|\s))|(?:[^\\\/\n\r]))*\/)|(?:`(?:(?:\\(?:.|\s))|(?:[^\\`]))*`))|((?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|\s)*(?:\n|\r)(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|\s)*)|((?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*(=|\{|\*|\[|>|<|\||&|\(|\/(?!\*)|,|;|\.)(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*)|((?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*(\}|\]|\))(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*)|((?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*(\+|\-)(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])+\9(?:(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*(?!\9))?)|((?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*(\+|\-)(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*(?!\11))|((?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])+)/g,
    ure = /(^(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|\s)*)|((?:"(?:(?:\\(?:.|\s))|(?:[^\\"\n\r]))*")|(?:'(?:(?:\\(?:.|\s))|(?:[^\\'\n\r]))*')|(?:\/(?!\*)(?:(?:\\(?:.|\s))|(?:[^\\\/\n\r]))*\/)|(?:`(?:(?:\\(?:.|\s))|(?:[^\\`]))*`))|((?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|\s)*(?:\n|\r)(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|\s)*)|((?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|\s)*(=|\{|\*|\[|>|<|\||&|\(|\/(?!\*)|,|;|\.)(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|\s)*)|((?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|\s)*(\]|\)|\})(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*)|((?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*(\+|\-)(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])+\9(?:(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*(?!\9))?)|((?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*(\+|\-)(?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])*(?!\11))|((?:(?:\/\*(?:.|\s)*?\*\/)|(?:\/\/.*)|[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000])+)/g;

function replace(m, comment, string, lineFeed, nCollapse, nCollapsable, collapse, collapsable, sDouble, sSingle, sCollapse, sCollapsable, space){
  if(comment) return '';
  if(string) return string;
  if(lineFeed) return '\n';
  if(space) return ' ';
  if(collapse) return collapsable;
  if(sCollapse) return sCollapsable;
  if(nCollapse) return nCollapsable;
  if(sDouble) return sSingle + ' ' + sSingle;
  return m;
}

module.exports = function nijm(src,ugly){
  if(ugly) return src.replace(ure,replace);
  return src.replace(re,replace);
};
