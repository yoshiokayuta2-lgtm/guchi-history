# GUCHIの歴史添削隊 v5

日本史・世界史の論述を、

**先生：PDF出題 → 生徒：手書き写真提出 → AI文字起こし → 生徒微調整 → 先生添削 → 返却**

で回す少人数向けWebアプリです。

## v5でできること

- 日本史 / 世界史を色・ラベルで区別
- 先生画面で生徒を登録
- 生徒ごとに日本史 / 世界史 / 両方を設定
- 生徒ログインコードを発行・再発行
- PDFをアップして課題フォーム化（OpenAI API未接続時はデモ解析）
- 生徒は手書き答案の写真をアップ
- AI文字起こし → 生徒が誤読だけ修正（OpenAI API未接続時はデモ）
- 先生が写真・文字起こし・確認後答案を見て添削
- 返却後、生徒が書き直し提出
- Supabase接続後は先生PC / 生徒スマホで共有運用
- Supabase未設定なら同じブラウザ内のデモモード

## v5の変更点

- ログイン画面のメイン画像が上で切れないように修正
- GitHub Pages用に相対パスを整理
- `.nojekyll` を追加
- Supabase共有DBを実装
- 先生：Supabase Auth（メール+パスワード）
- 生徒：匿名Auth + 名前 + ログインコード
- RLS（Row Level Security）を追加
- 生徒の答案写真 / 先生のPDFをPrivate Storageに保存
- `student-login` Edge Functionを同梱

## GitHub Pagesへ上げるファイル

このフォルダの中身をそのままリポジトリのルートへ置けます。

- `index.html`
- `styles.css`
- `app.js`
- `config.js`
- `assets/`
- `.nojekyll`

Supabase用のファイルも一緒に置いて問題ありません。

- `supabase-schema.sql`
- `supabase/functions/student-login/index.ts`
- `supabase/config.toml`
- `SUPABASE_SETUP.md`

## 重要：公開してよいキー / いけないキー

`config.js` に入れてよいもの：

- Supabase Project URL
- Supabase Publishable key（公開用キー）

絶対に入れないもの：

- Supabase Secret key
- legacy service_role key
- OpenAI API key

## セットアップ順

1. GitHub Pagesへ公開
2. SupabaseでProject作成
3. `supabase-schema.sql` を実行
4. Anonymous Sign-InsをON
5. 先生用Authユーザーを1人作成
6. `student-login` Edge Functionをデプロイ
7. `config.js` にProject URL / Publishable keyを入れる
8. GitHubへ再アップロード
9. 先生ログイン → 生徒登録 → 生徒スマホからログインテスト

詳しくは `SUPABASE_SETUP.md` を参照してください。

## OpenAI APIについて

OpenAI API契約前でも、Supabaseまで設定すれば以下は本運用できます。

- 生徒登録
- 課題作成・公開
- PDF原本保存
- 生徒答案写真保存
- 提出
- 先生添削
- 返却
- 書き直し

API契約後に追加するのは主に次の2つです。

1. PDF → 課題項目の自動解析
2. 手書き答案写真 → 文字起こし
