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
 
# Requirement
 
"hoge"を動かすのに必要なライブラリなどを列挙する
 
* huga 3.5.2
* hogehuga 1.0.2
 
# Installation
 
Requirementで列挙したライブラリなどのインストール方法を説明する
 
```bash
pip install huga_package
```
 
# Usage
 
DEMOの実行方法など、"hoge"の基本的な使い方を説明する
 
```bash
git clone https://github.com/hoge/~
cd examples
python demo.py
```
 
# Note
 
注意点などがあれば書く
 
