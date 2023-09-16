import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      english: {
        translations: {
          "Welcome to React": "What is ReactJS?",
          Overview:
            "ReactJS is an open-source JavaScript library used to create user interfaces in a declarative and efficient way. It is a component-based front-end library responsible only for the view layer of a Model View Controller(MVC) architecture. React is used to create modular user interfaces and promotes the development of reusable UI components that display dynamic data.",
          "Concept of ReactJS": "Concept of ReactJS",
          Concept:
            "Let’s say one of your friends posted a photo on Facebook. If you like the photo and then you started checking out the comments too. Now as you browsing over comments you can see that the likes count has increased by 100 since you liked the picture, even without reloading the page. This magical change in count is due to ReactJS.",
          "Reason to choose ReactJS": "Reason to choose ReactJS",
          Reason:
            "ReactJS uses a declarative paradigm that allows for applications to be both effective and flexible. It creates simple views for each state in your application and efficiently updates and renders just the right component as your data changes. The declarative view makes your code more predictable and easier to debug. Each component in a React application is responsible for rendering a separate, reusable piece of HTML code. The ability to nest components within other components allows you to build complex applications from simple building blocks. A component can also keep track of its internal state, for example, a TabList component can hold a variable for the open tab in memory.",
        },
      },
      hindi: {
        translations: {
          "Welcome to React": "रिएक्टजेएस क्या है?",
          Overview:
            "ReactJS एक ओपन-सोर्स जावास्क्रिप्ट लाइब्रेरी है जिसका उपयोग घोषणात्मक और कुशल तरीके से यूजर इंटरफेस बनाने के लिए किया जाता है। यह एक घटक-आधारित फ्रंट-एंड लाइब्रेरी है जो केवल मॉडल व्यू कंट्रोलर (एमवीसी) आर्किटेक्चर की दृश्य परत के लिए जिम्मेदार है। रिएक्ट का उपयोग मॉड्यूलर यूजर इंटरफेस बनाने के लिए किया जाता है और गतिशील डेटा प्रदर्शित करने वाले पुन: प्रयोज्य यूआई घटकों के विकास को बढ़ावा देता है।",
          "Concept of ReactJS": "ReactJS की अवधारणा",
          Concept:
            "मान लीजिए कि आपके किसी मित्र ने फेसबुक पर एक तस्वीर पोस्ट की है। अगर आपको फोटो पसंद आई तो आपने कमेंट भी देखना शुरू कर दिया. अब जब आप टिप्पणियों को ब्राउज़ कर रहे हैं तो आप देख सकते हैं कि चित्र पसंद करने के बाद से पेज को दोबारा लोड किए बिना भी लाइक की संख्या 100 बढ़ गई है। गिनती में यह जादुई परिवर्तन ReactJS के कारण है।",
          "Reason to choose ReactJS": "ReactJS चुनने का कारण",
          Reason:
            "ReactJS एक घोषणात्मक प्रतिमान का उपयोग करता है जो अनुप्रयोगों को प्रभावी और लचीला दोनों बनाने की अनुमति देता है। यह आपके एप्लिकेशन में प्रत्येक स्थिति के लिए सरल दृश्य बनाता है और आपके डेटा में परिवर्तन होने पर कुशलतापूर्वक सही घटक को अद्यतन और प्रस्तुत करता है। घोषणात्मक दृश्य आपके कोड को अधिक पूर्वानुमानित और डीबग करना आसान बनाता है। रिएक्ट एप्लिकेशन में प्रत्येक घटक HTML कोड के एक अलग, पुन: प्रयोज्य टुकड़े को प्रस्तुत करने के लिए जिम्मेदार है। घटकों को अन्य घटकों के भीतर घोंसला बनाने की क्षमता आपको सरल बिल्डिंग ब्लॉक्स से जटिल एप्लिकेशन बनाने की अनुमति देती है। एक घटक अपनी आंतरिक स्थिति पर भी नज़र रख सकता है, उदाहरण के लिए, एक टैबलिस्ट घटक मेमोरी में खुले टैब के लिए एक वेरिएबल रख सकता है।",
        },
      },
      turkish: {
        translations: {
          "Welcome to React": "reaksiyon js nedir?",
          Overview:
            "ReactJS, kullanıcı arayüzlerini bildirime dayalı ve verimli bir şekilde oluşturmak için kullanılan açık kaynaklı bir JavaScript kitaplığıdır. Yalnızca Model Görünüm Denetleyicisi (MVC) mimarisinin görünüm katmanından sorumlu, bileşen tabanlı bir ön uç kitaplığıdır. React, modüler kullanıcı arayüzleri oluşturmak için kullanılır ve dinamik verileri görüntüleyen yeniden kullanılabilir UI bileşenlerinin geliştirilmesini destekler.",
          "Concept of ReactJS": "ReactJS Kavramı",
          Concept:
            "Diyelim ki arkadaşlarınızdan biri Facebook'ta bir fotoğraf paylaştı. Fotoğrafı beğendiyseniz siz de yorumları incelemeye başladınız. Artık yorumlara göz atarken, sayfayı yeniden yüklemeden bile fotoğrafı beğendiğiniz için beğeni sayısının 100 arttığını görebilirsiniz. Sayıdaki bu sihirli değişiklik ReactJS'den kaynaklanıyor.",
          "Reason to choose ReactJS": "ReactJS'yi seçme nedeni",
          Reason:
            "ReactJS, uygulamaların hem etkili hem de esnek olmasını sağlayan bildirimsel bir paradigma kullanır. Uygulamanızdaki her durum için basit görünümler oluşturur ve verileriniz değiştikçe doğru bileşeni verimli bir şekilde güncelleyip işler. Bildirime dayalı görünüm, kodunuzu daha öngörülebilir hale getirir ve hata ayıklamayı kolaylaştırır. React uygulamasındaki her bileşen, ayrı, yeniden kullanılabilir bir HTML kodu parçasının oluşturulmasından sorumludur. Bileşenleri diğer bileşenlerin içine yerleştirme yeteneği, basit yapı taşlarından karmaşık uygulamalar oluşturmanıza olanak tanır. Bir bileşen aynı zamanda dahili durumunu da takip edebilir; örneğin bir TabList bileşeni, açık sekmeye ilişkin bir değişkeni bellekte tutabilir.",
        },
      },
    },
    fallbackLng: "de",
    debug: true,
    lng: "english",

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
