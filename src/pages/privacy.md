---
# フロントマター形式で layout とかを指定できる
# frontmatter.title とかでアクセス可能らしい（レイアウトコンポーネントから利用可能）
# これによって記事タイトルや descriptionを meta 情報に挿入できる
layout: "@layouts/Layout.astro"
title: "プライバシーポリシー"
date: "2023.2.1"
# draft: true // true の場合はビルド対象から外す
---

<div class="inner">

# プライバシーポリシー

`[見出し](#見出し)` のように、見出し ID が使える。[個人情報保護方針について](#個人情報保護方針について)、これはページ内リンクになる。

## 個人情報保護方針について

pages にはマークダウンファイルを使うことも可能です。その場合 css はどうすればいいだろうか。すべてグローバルスタイルで賄う必要があるのかな。

こんな感じで、ほぼ Astro ファイルっぽく書ける。。Astro ファイルで md をサポートしていたら一番な気がするが。

</div>

<style lang="scss">
  .inner {
    margin: auto;
    padding: 1.5rem;
    max-width: 60ch;
  }
</style>
