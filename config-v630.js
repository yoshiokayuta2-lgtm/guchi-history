// GUCHIの歴史添削隊 - 接続設定
//
// GitHub Pagesに置く公開設定です。
// ここに入れてよいのは Supabase の Project URL と Publishable key だけです。
// Secret key / service_role key / OpenAI API key は絶対に入れないでください。
window.HISTORY_APP_CONFIG = {
  supabaseUrl: "https://kacfozgubzqijfuglpmg.supabase.co",
  supabasePublishableKey: "sb_publishable_jJH9eGsRgE4rv9kA--8sww_DC2ZmekL",

  // OpenAI API契約後に使います。
  // 未設定でも、Word等からPDF化した文字データ入りPDFはブラウザ内で直接読み取ります。
  // 画像PDFの解析と手書きOCRはAPI接続後に有効化します。
  ocrEndpoint: "",
  worksheetParseEndpoint: ""
};
