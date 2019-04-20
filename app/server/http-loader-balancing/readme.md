# http loader balancing

访问 http://nginx-toturial.org:8080/

负载均衡算法:

1. Round-robin 默认算法

刷新页面，可以看到流量被负载均衡到不同的 server 上, 浏览器输出:

Http server is listening on http://localhost:3001
Http server is listening on http://localhost:3002
Http server is listening on http://localhost:3003
Http server is listening on http://localhost:3004

2. Generic hash

依次访问:

http://nginx-toturial.org:8080/generic-hash?clientid=1

输出: Http server is listening on http://localhost:3001. clientid: 1

http://nginx-toturial.org:8080/generic-hash?clientid=2

输出: Http server is listening on http://localhost:3002. clientid: 2

http://nginx-toturial.org:8080/generic-hash?clientid=3

输出: Http server is listening on http://localhost:3003. clientid: 3

http://nginx-toturial.org:8080/generic-hash?clientid=4

输出: Http server is listening on http://localhost:3004. clientid: 4
