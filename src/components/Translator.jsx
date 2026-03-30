import { useEffect } from "react";

const Translator = () => {
  useEffect(() => {
    const addScript = () => {
      if (window.googleTranslateElementInit) return;

      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,ur",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    // ⏳ delay important hai
    setTimeout(addScript, 1000);
  }, []);

  return <div className="w-full h-full"></div>;
};

export default Translator;