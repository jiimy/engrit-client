import axios from "axios";
import { franc } from 'franc';
import React, { useState, useEffect } from "react";

type translateType = {
  source: string;
  sourceLanguage?: string;
  id: string;
}

async function translate(source: string, sourceLanguage: string, targetLanguage: string) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(source)}`;

  try {
    const response = await axios.get(url);
    return response.data[0][0][0];
  } catch (error) {
    throw error;
  }
}

const detectLanguage = (input: string) => {
  const langCode = franc(input);
  return langCode;
};

// 특수문자 정리
export function cleanText(text: string): string {
  return text.replace(/&amp;quot;/g, "'").replace(/&amp;/g, "").replace(/#39;/g, "'").replace(/\n/g, " "); // 특수 문자 제거
}

const TranslateWord = ({ source, sourceLanguage = 'en', id }: translateType) => {
  const [outputText, setOutputText] = useState("");
  const [idLanguageMap, setIdLanguageMap] = useState<{ [key: string]: string }>({}); // id별 언어 저장

  useEffect(() => {
    const fetchTranslation = async () => {
      const cleanedText = cleanText(source);

      // 만약 id에 대해 이미 언어가 저장되어 있으면 그 언어를 사용
      const detectedLanguage = idLanguageMap[id] || detectLanguage(cleanedText);

      // 언어가 감지된 경우에만 처리
      // if (!idLanguageMap[id] && detectedLanguage !== 'eng' && detectedLanguage !== 'en') {
      // }
      setIdLanguageMap((prev) => ({ ...prev, [id]: detectedLanguage }));

      let intermediateText = cleanedText;

      // 감지된 언어가 영어가 아니면 영어로 번역
      // if (detectedLanguage !== 'eng' && detectedLanguage !== 'en') {
      // } 
      intermediateText = await translate(cleanedText, "es", "ko");
      // 중간 언어(영어)에서 한국어로 번역
      // const finalTranslation = await translate(intermediateText, "en", "ko");
      setOutputText(intermediateText);
    };

    if (source) {
      fetchTranslation();
    } else {
      setOutputText("");
    }
  }, [source, id, idLanguageMap]);

  return <>{outputText}</>;
};

export default TranslateWord;