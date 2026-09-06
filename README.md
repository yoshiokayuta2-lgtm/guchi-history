# GUCHIの歴史添削隊 v6

日本史・世界史の記述添削を、先生と少人数の生徒で共有運用するためのGitHub Pages向けWebアプリです。

## 現在の状態

- Supabase共有モード：接続設定済み
- 先生ログイン：Supabase Auth（メール＋パスワード）
- 生徒ログイン：先生が登録した生徒名＋4桁コード
- 生徒登録：先生画面から可能
- 日本史 / 世界史：科目を明示して課題管理
- PDF課題化：画面フロー実装済み。AI解析はAPI契約後に接続
- 答案写真提出：実装済み
- 手書き文字起こし：画面フロー実装済み。AI OCRはAPI契約後に接続
- 先生添削・返却・書き直し：実装済み
- Private Storage：答案画像 / 課題PDF用

## GitHub Pagesへの公開

このZIPを展開し、中身をGitHubリポジトリのルートにアップロードします。

必要ファイル：

- `index.html`
- `styles.css`
- `app.js`
- `config.js`
- `favicon.svg`
- `assets/`
- `.nojekyll`

`supabase-schema.sql` と `supabase/` はバックアップ・再設定用なので、同じリポジトリに置いて問題ありません。

GitHubで `Settings` → `Pages` → `Deploy from a branch` → `main / root` を選べば公開できます。

## セキュリティ

`config.js` に入っているのは公開前提の Supabase Project URL と Publishable key だけです。

次の値はGitHubへ絶対に入れないでください。

- Supabase Secret key
- `service_role` key
- OpenAI API key
- Database password

## Supabase側で済ませておく設定

- `supabase-schema.sql` をSQL Editorで実行
- Anonymous sign-ins：ON
- 通常ユーザーのSign up：OFF推奨
- 先生ユーザー：Dashboardから作成しAuto confirm
- Edge Function `student-login`：Deploy
- `Verify JWT with legacy secret`：OFF

## 最初の実機テスト

1. GitHub Pagesを開く
2. 先生メール / パスワードでログイン
3. 生徒管理で1人登録
4. 4桁コードを確認
5. 別端末またはシークレットウィンドウで生徒ログイン
6. 課題の表示・提出・返却を確認

AI機能を除く共有運用がここまで通れば基盤完成です。
