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

阻止`nginx`代理服务器传递`request header`给服务器, 访问 http://nginx-toturial.org:8080/prevent-header, `req.headers`如下：

```bash
{ connection: 'close',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'accept-encoding': 'gzip, deflate',
  'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ko;q=0.7' }
```

可见，没有了`host`和`x-real-ip`这两个`request header`

`nginx`代理服务器传递的默认的`request header`，访问 http://nginx-toturial.org:8080/default-header， `req.headers`如下：

```bash
{ host: '127.0.0.1:3001',
  connection: 'close',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'accept-encoding': 'gzip, deflate',
  'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,ko;q=0.7' }
```

`host`是`$proxy_host`，即`proxy_pass`中指定的服务器的 IP(域名) 和端口, `$proxy_host` - name and port of a proxied server as specified in the `proxy_pass` directive;

`Connection`是`close` - https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection#%E6%8C%87%E4%BB%A4
