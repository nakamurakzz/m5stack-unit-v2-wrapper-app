# m5stack-unit-v2-wrapper-app
## このアプリについて
- M5Stack Unit V2 の顔認識機結果をWebUI経由で取得する
- 現時点では人がいるかどうかの判定を行う

## 前提
- M5Stack Unit V2 本体側でobject_recognitionを起動しておくこと
- M5Stack Unit V2のUIにアクセスできること

## 手順
### Node.jsのインストール（すでにNode.jsがインストールされている場合はスキップ）
- すでにnodenvがインストールされている前提
```
nodenv install
```

### モジュールインストール
```
yarn
```

### M5Stack Unit V2に接続可能なIPを src/index.ts のuri変数に設定する

### 実行
```
yarn start
```
