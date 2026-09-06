// GUCHIの歴史添削隊 - 接続設定
//
// GitHub Pagesに置くファイルなので、ここに入れてよいのは
// Supabaseの「Project URL」と「Publishable key（公開用キー）」だけです。
// Secret key / service_role key / OpenAI API key は絶対に入れないでください。
//
// 2つとも空欄なら、この端末だけで動くデモモードになります。
window.HISTORY_APP_CONFIG = {
  supabaseUrl: "",
  supabasePublishableKey: "",

  // OpenAI API契約後に使います。
  // 未設定なら、手書きOCR / PDF自動課題化はデモ動作のままです。
  ocrEndpoint: "",
  worksheetParseEndpoint: ""
};
