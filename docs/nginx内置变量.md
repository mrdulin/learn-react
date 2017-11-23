# nginx 内置变量

全局变量

下面是可以用作`if`判断的全局变量

- `$args` ： #这个变量等于请求行中的参数，同`$query_string`，例如，`foo=123&bar=blahblah`，这个变量只可以被修改。
- `$content_length` ： 请求头中的`Content-length`字段。
- `$content_type` ： 请求头中的`Content-Type`字段。
- `$document_root` ： 当前请求在`root`指令中指定的值。
- `$host` ： 请求中的主机头(`Host`)字段，如果请求中的主机头不可用或者空，则为处理请求的`server`名称(处理请求的`server`的`server_name`指令的值)。值为小写，不包含端口。
- `$http_user_agent` ： 客户端`agent`信息
- `$http_cookie` ： 客户端`cookie`信息
- `$limit_rate` ： 这个变量可以限制连接速率。
- `$request_method` ： 客户端请求的动作，通常为`GET`或`POST`。
- `$remote_addr` ： 客户端的`IP`地址。
- `$remote_port` ： 客户端的端口。
- `$remote_user` ： 已经经过`Auth Basic Module`验证的用户名。
- `$request_filename` ： 当前请求的文件路径，由`root`或`alias`指令与`URI`请求生成。
- `$scheme`： HTTP 方法（如 http，https）。
- `$server_protocol` ： 请求使用的协议，通常是`HTTP/1.0`或`HTTP/1.1`。
- `$server_addr` ： 服务器地址，在完成一次系统调用后可以确定这个值。
- `$server_name` ： 服务器名称。
- `$server_port` ： 请求到达服务器的端口号。
- `$request_uri` ： 包含请求参数的原始`URI`，不包含主机名，如：`/foo/bar.php?arg=baz`。
- `$uri` ： 不带请求参数的当前`URI`，`$uri`不包含主机名，如`/foo/bar.html`。
- `$document_uri` ： 与`$uri`相同。
