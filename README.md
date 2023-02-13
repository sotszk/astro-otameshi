# Astro お試しリポジトリ

[Astro ドキュメント](https://astro.build)

## コマンド

```
# パッケージのインストール
$ yarn install

# 開発スタート
$ yarn start

## コードフォーマット（prettier）
$ yarn prettify
```

## ページ構成

- Index
  - Tailwind 導入
- About
  - 素の JS を書く
  - [Typed.js](https://github.com/mattboldt/typed.js/) 利用
- Contact
  - Mixing Frameworks
  - React Component を使ってフォームを実装
- Privacy
  - [Markdown](https://docs.astro.build/en/guides/markdown-content/) を試してみる
- Grid
  - CSS Grid のリハビリ
- PostCSS
  - 最近の PostCSS 事情を汲み取る
- OpenProps
  - [OpenProps](https://open-props.style) という CSS Variables ベースの CSS フレームワークをお試し。とてもよいものだった。

## 導入したライブラリ

- [Open Props](https://open-props.style)
- [PostCSS Preset Env](https://github.com/csstools/postcss-preset-env)
- [TailwindCSS](https://github.com/mattboldt/typed.js/)

## 所感

### 2023.2.13

v2 の時点で、周辺のツール（たとえば VSCode Extension, Prettier, ESLint とか）のサポートがだいたいなされていて好印象。  
Vite を使っているのもあって、開発時のビルドが高速。ただしたまに HMR で CSS まわりのコンパイルエラーでこける（サイド HMR させると解消する。ブラウザリロードではダメ）。  
あとは、VSCode で `.astro` ファイルを扱う際、`<style>` ブロックで PostCSS のシンタックス（要 Extension）が使えない。特に PostCSS Nesting でシンタックスやプロパティ補完が効かないのが痛い。おとなしく `lang="scss"` とするか、`.css` ファイルに CSS を切り出すのが無難かもしれない。
