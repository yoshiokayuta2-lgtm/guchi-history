# v6.1

- GitHub PagesでSupabase共有モードに切り替わらない場合の対策を追加
- Supabase JSのCDN読み込みを jsDelivr → unpkg の順でフォールバック
- config.js / app.js / styles.css にキャッシュバスターを追加
- 「設定不足」と「SDK読み込み失敗」を画面上で区別して表示
- フッターに v6.1 を表示し、公開版の判別を容易に

# CHANGELOG

## v6
- Supabase Project URL / Publishable key を接続済みに変更
- GitHub Pagesへそのまま公開できる共有運用版に更新
- DashboardへDeployした `student-login` Edge Functionコードを同梱版にも反映
- メイン画像は上端が切れない `object-fit: contain; object-position: center top` 表示を維持
- 日本史 / 世界史の科目表示、生徒管理、課題PDF、答案写真、添削返却フローを維持

## v5
- GitHub Pages公開向け構成へ整理
- Supabase schema / Edge Function / setup guideを追加
- メイン画像の上切れを修正
