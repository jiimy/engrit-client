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
    return response.data[0][0][0]; // 번역된 텍스트 반환
  } catch (error) {
    throw error; // 오류 발생 시 처리
  }
}

const TranslateWord = ({ source, sourceLanguage = 'en' }: translateType) => {
  // const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  useEffect(() => {
    if (source) {
      const fetchTranslation = async () => {
        const translation = await translate(source, sourceLanguage);
        setOutputText(translation);
      };

      fetchTranslation();
    } else {
      setOutputText(""); // Clear output when input is empty
    }
  }, [source]); // Effect runs whenever inputText changes

  return (
    <>
      {outputText}
    </>
  );
}

export default TranslateWord;