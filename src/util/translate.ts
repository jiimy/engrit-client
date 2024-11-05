'use client'
export async function translateText( sourceText : string, sourceLanguage = "en", targetLanguage = "ko" ) {

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(
    sourceText
  )}`;

  const result = await fetch(url);
  const json = await result.json();
  // return json[0][0][0];
  try {
    return json[0][0][0];
  } catch (error) {
    return error;
  }
}
