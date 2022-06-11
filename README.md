# pkg_test


## Overview

Node.js で作った CLI アプリを executable binaries に変換する [pkg](https://github.com/vercel/pkg) のテスト


## How to install pkg

- `$ sudo npm install -g pkg`


## How to use pkg

- `$ pkg -t (targets) -o (outputfile) app.js`

  - `targets` : comma-separated target platforms

    - Ex.1 : `$ pkg -t node14-linux app.js`

    - Ex.2 : `$ pkg -t node14-linux,node14-win app.js`

  - `outputfile` : output filename

    - Ex.1 : `$ pkg -o myhostname app.js`


## My Notes

- 結果としてアウトプットされる実行可能ファイルがやけに大きい（このパッケージ内の app.js で実行すると１ファイル 30M バイト超になる）。Node.js 丸ごと含んでいる？？

  - この結果については [nexe](https://github.com/nexe/nexe) でも同様らしい


## Licensing

This code is licensed under MIT.


## Copyright

2022  [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
