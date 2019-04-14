# passing request headers

直接访问 http://localhost:3001/, `req.headers`如下：

```bash
{ host: 'localhost:3001',
  connection: 'keep-alive',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ko;q=0.7',
  cookie: '_ga=GA1.1.1546537775.1551148026' }
```

通过`nginx`代理服务器访问 http://nginx-toturial.org:8080/, `req.headers`如下：

```bash
{ host: 'nginx-toturial.org',
  'x-real-ip': '127.0.0.1',
  connection: 'close',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'accept-encoding': 'gzip, deflate',
  'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ko;q=0.7' }
```

`hosts`如下：

```txt
127.0.0.1 nginx-toturial.org
127.0.0.1 www.nginx-toturial.org
```
