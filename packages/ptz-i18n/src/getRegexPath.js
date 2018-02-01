const getRegexPath = (slug, langkey) => {
  if (langkey.con)
  const regex = new RegExp(langkey) 
  let regexPath = slug;
  console.log(regexPath);
  if(regexPath.match(regex)) {
    regexPath = regexPath.replace(regex, '');
  }
  console.log(regexPath); 
  return regexPath;
};
export default getRegexPath;
