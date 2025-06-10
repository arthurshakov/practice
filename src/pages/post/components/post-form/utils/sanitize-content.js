export const sanitizeContent = (content) =>
  content
    .replace(/ +/g, ' ')
    .replaceAll('<div><br></div><div>', '\n')
    .replaceAll('<div>', '\n')
    .replaceAll('</div>', '')
  ;
