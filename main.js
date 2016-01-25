var commentsAndStrings = /((?:"(?:(?:\\(?:.|\s))|(?:[^\\"\n\r]))*")|(?:'(?:(?:\\(?:.|\s))|(?:[^\\'\n\r]))*')|(?:\/(?![\*\/])(?:(?:\\(?:.|\s))|(?:[^\\\/\n\r]))*\/)|(?:`(?:(?:\\(?:.|\s))|(?:[^\\`]))*`))|(?:(?:\/\*(?:.|\s)*?(?:(?:\*\/)|$))|(?:\/\/(?:.*))|(?:<\!\-\-(?:.*)))/g,
    ltGroup = /\s*[\n\r\u2028\u2029]\s*/g,
    spGroup = /[ \t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u3000]+/g,
    uglyPairs = /(?:\s?(([\+\-><])+\s\2))|(?:\s?(\+{2,}|\-{2,}|>{2,}|<{2,})(?: |(\n))?)|(?:\s?([\+\-><])\s?)/g,
    pairs = /(?: ?(([\+\-><])+ \2))|(?: ?([\+\-><]+) ?)/g,
    things = / ?([=\{\*\[\|&\!\?\:\^\~\(\/,;\.\}\]\)]+) ?/g,
    uglyThings1 = /\s?([=\{\*\[\|&\!\?\:\^\~\(\/,;\.]+)\s?/g,
    uglyThings2 = /\s?([\}\]\)]+) ?/g,
    stRest = /""(\d+)""/g,
    initialSp = /^\s*/,

    strings;

function replaceCommentsAndStrings(m,string){

  if(string){
    strings.push(string);
    return '""' + (strings.length - 1) + '""';
  }

  return ' ';
}

function uglyPairsReplace(m,pairGroup,s,group,lt,sign){
  if(pairGroup) return pairGroup;
  if(group) return group + (lt || '');
  return sign;
}

function pairsReplace(m,pairGroup,s,group){
  if(pairGroup) return pairGroup;
  return group;
}

function restoreStrings(m,i){
  i = parseInt(i);
  return strings[i];
}

function nijm(src,ugly){
  src = (src || '') + '';
  strings = [];

  src = src.replace(commentsAndStrings,replaceCommentsAndStrings);
  src = src.replace(ltGroup,'\n');
  src = src.replace(spGroup,' ');
  src = src.replace(initialSp,'');

  if(ugly){
    src = src.replace(uglyPairs,uglyPairsReplace);
    src = src.replace(uglyThings1,'$1');
    src = src.replace(uglyThings2,'$1');
  }else{
    src = src.replace(pairs,pairsReplace);
    src = src.replace(things,'$1');
  }

  try{ return src.replace(stRest,restoreStrings); }
  finally{ strings = null; }
}

/*/ exports /*/

module.exports = nijm;
