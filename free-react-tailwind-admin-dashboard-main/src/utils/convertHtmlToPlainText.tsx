export const ConvertHtmlToPlainText = (html: any) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};
