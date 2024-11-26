import axios from "axios";
import React, { useState, useEffect } from "react";

type translateType = {
  source: string;
  sourceLanguage?: string;
}

async function translate(source: string, sourceLanguage: string) {
  const targetLanguage = "ko";

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(source)}`;

  try {
    const response = await axios.get(url);
    return response.data[0][0][0];
  } catch (error) {
    throw error;
  }
}

// "guys I&amp;#39;m literally pulling up to school"

// 특수문자 정리
export function cleanText(text: string): string {
  return text.replace(/&amp;/g, "").replace(/#39;/g, "'").replace(/\n/g, ""); // 특수 문자 제거
}

const TranslateWord = ({ source, sourceLanguage = 'en' }: translateType) => {
  const [outputText, setOutputText] = useState("");

  useEffect(() => {
    if (source) {


      const fetchTranslation = async () => {
        const translation = await translate(cleanText(source), sourceLanguage);
        setOutputText(translation);
      };

      fetchTranslation();
    } else {
      setOutputText(""); 
    }
  }, [source]);

  return (
    <>
      {outputText}
    </>
  );
}

export default TranslateWord;