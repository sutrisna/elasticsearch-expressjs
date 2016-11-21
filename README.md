# elasticsearch-expressjs
Integrasi elasticsearch di Express JS

###Install elasticsearch
- Download elasticsearch
```bash
https://www.elastic.co/downloads/elasticsearch
```
- Extract ZIP terus masuk ke path
```bash
elasticseacrh[version]/bin
```
- Running service elasticsearch lewat cmd
```bash
elasticsearch[version]\bin>elasticsearch
```
- Anda juga bisa setting elastichseacrh as service jadi gak ribet nyalain service berkali-kali

Masuk ke path `elasticsearch[version]\bin>elasticsearch` buka cmd lalu ketikan `elasticseacrh-service install` Jika muncul error `"configure using -Xss"` bla..bla..bla.. buka dulu `jvm.options` terus tambahkan `-Xss1m` lalu ketik ulang command `elasticseacrh-service install`

# Install ExpressJS
- Clone this project:
```bash
$ git clone https://github.com/sutrisna/elasticsearch-expressjs.git
$ cd elasticsearch-expressjs
```
- Install NPM dependencies:
```bash
$ npm install
```
- Running aplikasi:
```bash
$ node bin/www
```

### Explore lebih lanjut kunjungi 
https://www.elastic.co/

### Sutrisna 1453
Jika tidak bisa sedekah dengan uang, maka bersedekahlah dengan ilmu pengetahuan
