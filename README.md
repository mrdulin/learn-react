# Learning nginx with examples

edit nginx.conf using vscode

```bash
code /usr/local/etc/nginx/nginx.conf
```

`hosts`如下：

```txt
127.0.0.1 nginx-toturial.org
127.0.0.1 www.nginx-toturial.org
```

## examples

- `nginx`的基本操作 [demo-0](./demo-0)
- `nginx`配置域名虚拟服务器 [demo-1](./demo-1)
- `nginx`使用`include`引入配置 [demo-2](./demo-2)
- `nginx`配置临时跳转 [demo-3](./demo-3)

`nginx-toturial.org`是假域名

## references

- https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/
- http://nginx.org/en/docs/http/ngx_http_map_module.html
