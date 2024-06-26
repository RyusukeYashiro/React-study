# 概要

大学のリアクションペーバーもどきを作ってみた。  
React を使用して、実行環境は　create-react-app を用いた。  
フォームのバリデーションには *yup* ライブララリー　を使用し、CSS スタイリングには *CSS Modules* を採用している。  
 
# demo
<img width="1000" alt="スクリーンショット 2024-06-26 20 56 28" src="https://github.com/RyusukeYashiro/React-study/assets/166738435/da67aeae-70a8-4f29-a795-6f084fdb36c5">

入力チェックを行なっている  
日付: 指定した日から何日間(FormYup.jsのdataをいじる)  
名前:　２０文字以内  
学年：　プルダウンで表示  
学籍番号:　１０桁  
記述欄:　300字以上  
       眠い、つまらないなどは不可  

未入力

<img width="976" alt="スクリーンショット 2024-06-26 20 57 08" src="https://github.com/RyusukeYashiro/React-study/assets/166738435/fb645418-d5da-4ce4-9d55-2229acb4f33b">
　　
validationチェック　　
<img width="699" alt="スクリーンショット 2024-06-26 20 59 51" src="https://github.com/RyusukeYashiro/React-study/assets/166738435/08f6a535-edc9-451b-aaae-3034e0f8d61c">

送信した場合  
<img width="707" alt="スクリーンショット 2024-06-26 21 05 48" src="https://github.com/RyusukeYashiro/React-study/assets/166738435/a3f907ea-c0c3-4385-bf5c-ed60d25fcb67">

# Requirement
 
動かすのに必要なライブラリなど
 
* Node.js の実行環境
 
# Installation

create-react-upの実行環境（my-appは例)　　
```bash
npx create-react-app my-app
```

```bash
npm start	
```
必要ライブラリーのinstall  
```bash
npm install react-hook-form
```
```bash
npm install @hookform/resolvers yup
```
```bash
npm install classname
```



 
# Usage
 
installが終わったらsrcディレクトリーにFormYup.jsとForm.module.cssを配置  
```index.js
const root = ReactDOM.createRoot(document.getElementById('root'));
```
をindex.jsに記述。　　
```index.js
import FormYup from './FormYup';
```
importを済ませ  
```index.js
root.render(
    <FormYup/>
)
```
renderを行う  
あとはnpm startを行えば良い
 
# Note
 
注意点などがあれば書く
 
