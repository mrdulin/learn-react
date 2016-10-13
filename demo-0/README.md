# nginx入门 

*   查看`nginx`版本

```bash
➜  nginx-winter git:(master) ✗ nginx -v                                                                                                                                                                                                                                          
nginx version: nginx/1.10.1 
```

*   `nginx`测试`nginx.conf`文件语法是否正确

```bash
nginx-winter git:(master) ✗ nginx -t                                                                                                                                                                                                                                          
nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok                                                                                                                                                                                                       
nginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful
```

说明`nginx.conf`的配置语法正确，启动测试下配置文件是否正确。

还可以使用`-c filename`参数来指定配置文件(默认地：配置文件为`/usr/local/etc/nginx/nginx.conf`)

*   `nginx`默认的`web`文档根目录`www`路径

`Mac OS X`下，通过`brew`安装的`nginx`, `www`目录的路径为`/usr/local/var/www`。`nginx.conf`中的`root html`代表`root /usr/local/var/www/html`。

*   `nginx`启动，停止，重启命令

`nginx`启动：

```bash
➜  nginx-winter git:(master) ✗ where nginx                                                                                                                                                                                                                     
/usr/local/bin/nginx 
➜  nginx-winter git:(master) ✗ sudo /usr/local/bin/nginx                                                                                                                                                                                                       
Password: 
➜  nginx-winter git:(master) ✗ ps aux | egrep '(PID|nginx)'                                                                                                                                                                                                    
USER              PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND                                                                                                                                                                          
dulin           59604   0.0  0.3  3197948  24764   ??  S    11:52上午   0:01.62 /Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper /Applications/Visual Studio Code.app/Contents/Resources/app/out/bootstrap /
usr/local/bin/git /Users/dulin/workspace/nginx-winter utf8 /Applications/Visual Studio Code.app/Contents/MacOS/Electron 2.8.3                                                                                                                                  
dulin           62232   0.0  0.0  2432788    580 s000  R+    1:20下午   0:00.00 egrep (PID|nginx)                                                                                                                                                              
nobody          62211   0.0  0.0  2455000    992   ??  S     1:20下午   0:00.00 nginx: worker process                                                                                                                                                          
root            62210   0.0  0.0  2454772    420   ??  Ss    1:20下午   0:00.00 nginx: master process /usr/local/bin/nginx                                                                                                                                     
dulin           62205   0.0  0.0  2464416   3920   ??  S     1:20下午   0:00.04 ssh git@github.com git-upload-pack 'mrdulin/nginx-winter.git' 
```

`nginx`从容停止命令，等所有请求结束后关闭服务:

```bash
➜  nginx-winter git:(master) ✗ kill -QUIT 62210                                                                                                                                                                                                                                  
kill: kill 62210 failed: operation not permitted                                                                                                                                                                                                                                 
➜  nginx-winter git:(master) ✗ sudo kill -QUIT 62210                                                                                                                                                                                                                             
Password:                                                                                                                                                                                                                                                                        
➜  nginx-winter git:(master) ✗ ps aux | egrep '(PID|nginx)'                                                                                                                                                                                                                      
USER              PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND                                                                                                                                                                                            
dulin           59604   0.0  0.3  3199216  29120   ??  S    11:52上午   0:02.07 /Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper /Applications/Visual Studio Code.app/Contents/Resources/app/out/bootstrap /usr/local/bin/git 
/Users/dulin/workspace/nginx-winter utf8 /Applications/Visual Studio Code.app/Contents/MacOS/Electron 2.8.3                                                                                                                                                                      
dulin           62709   0.0  0.0  2423372    208 s000  R+    1:26下午   0:00.00 egrep (PID|nginx)
```

`nginx`快速停止命令，立刻关闭`nginx`进程:

```bash
➜  nginx-winter git:(master) ✗ where nginx                                                                                                                                                                                                                                       
/usr/local/bin/nginx                                                                                                                                                                                                                                                             
➜  nginx-winter git:(master) ✗ sudo /usr/local/bin/nginx                                                                                                                                                                                                                         
➜  nginx-winter git:(master) ✗ ps aux | egrep '(PID|nginx)'                                                                                                                                                                                                                      
USER              PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND                                                                                                                                                                                            
dulin           59604   0.0  0.3  3199216  27404   ??  S    11:52上午   0:02.18 /Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper /Applications/Visual Studio Code.app/Contents/Resources/app/out/bootstrap /usr/local/bin/git 
/Users/dulin/workspace/nginx-winter utf8 /Applications/Visual Studio Code.app/Contents/MacOS/Electron 2.8.3                                                                                                                                                                      
dulin           62844   0.0  0.0  2423372    204 s000  R+    1:28下午   0:00.00 egrep (PID|nginx)                                                                                                                                                                                
nobody          62833   0.0  0.0  2456024    980   ??  S     1:28下午   0:00.00 nginx: worker process                                                                                                                                                                            
root            62832   0.0  0.0  2447604    424   ??  Ss    1:28下午   0:00.00 nginx: master process /usr/local/bin/nginx                                                                                                                                                       
➜  nginx-winter git:(master) ✗ kill -TERM 62832                                                                                                                                                                                                                                  
kill: kill 62832 failed: operation not permitted                                                                                                                                                                                                                                 
➜  nginx-winter git:(master) ✗ sudo kill -TERM 62832                                                                                                                                                                                                                             
➜  nginx-winter git:(master) ✗ ps aux | egrep '(PID|nginx)'                                                                                                                                                                                                                      
USER              PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND                                                                                                                                                                                            
dulin           59604   0.0  0.3  3199216  27404   ??  S    11:52上午   0:02.18 /Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper /Applications/Visual Studio Code.app/Contents/Resources/app/out/bootstrap /usr/local/bin/git 
/Users/dulin/workspace/nginx-winter utf8 /Applications/Visual Studio Code.app/Contents/MacOS/Electron 2.8.3                                                                                                                                                                      
dulin           62891   0.0  0.0  2423372    204 s000  R+    1:28下午   0:00.00 egrep (PID|nginx)                                                                                                                                                                                
➜  nginx-winter git:(master) ✗
```

如果以上命令不管用，可以强制停止

`kill -9 nginx主进程号`

如果嫌麻烦可以不用查看进程号，直接使用命令进行操作
其中`/usr/local/var/run/nginx.pid`为`nginx.conf`中`pid`命令设置的参数，用来存放`nginx`主进程号的文件

```bash
kill -信号类型(HUP|TERM|QUIT) `cat /usr/local/var/run/nginx.pid`
```

怎么查看`nginx.pid`文件的路径？

```bash
➜  nginx-winter git:(master) ✗ nginx -V                                                                                                                                                                                                                                          
nginx version: nginx/1.10.1                                                                                                                                                                                                                                                      
built by clang 7.3.0 (clang-703.0.31)                                                                                                                                                                                                                                            
built with OpenSSL 1.0.2h  3 May 2016                                                                                                                                                                                                                                            
TLS SNI support enabled                                                                                                                                                                                                                                                          
configure arguments: --prefix=/usr/local/Cellar/nginx/1.10.1 --with-http_ssl_module --with-pcre --with-ipv6 --sbin-path=/usr/local/Cellar/nginx/1.10.1/bin/nginx --with-cc-opt='-I/usr/local/Cellar/pcre/8.38/include -I/usr/local/Cellar/openssl/1.0.2h_1/include' --with-ld-opt
='-L/usr/local/Cellar/pcre/8.38/lib -L/usr/local/Cellar/openssl/1.0.2h_1/lib' --conf-path=/usr/local/etc/nginx/nginx.conf --pid-path=/usr/local/var/run/nginx.pid --lock-path=/usr/local/var/run/nginx.lock --http-client-body-temp-path=/usr/local/var/run/nginx/client_body_tem
p --http-proxy-temp-path=/usr/local/var/run/nginx/proxy_temp --http-fastcgi-temp-path=/usr/local/var/run/nginx/fastcgi_temp --http-uwsgi-temp-path=/usr/local/var/run/nginx/uwsgi_temp --http-scgi-temp-path=/usr/local/var/run/nginx/scgi_temp --http-log-path=/usr/local/var/lo
g/nginx/access.log --error-log-path=/usr/local/var/log/nginx/error.log --with-http_gzip_static_module
```

`--pid-path`就是`nginx.pid`文件的路径。

例子：

```bash
➜  nginx-winter git:(master) ✗ nginx                                                                                                                                                                                                                                             
➜  nginx-winter git:(master) ✗ cat /usr/local/var/run/nginx.pid                                                                                                                                                                                                                  
63001                                                                                                                                                                                                                                                                            
➜  nginx-winter git:(master) ✗ kill -QUIT `cat /usr/local/var/run/nginx.pid`                                                                                                                                                                                                     
➜  nginx-winter git:(master) ✗ ps aux | egrep '(PID|nginx)'                                                                                                                                                                                                                      
USER              PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND                                                                                                                                                                                            
dulin           63477   0.6  0.0  2452244    780 s000  S+    1:40下午   0:00.00 egrep (PID|nginx)                                                                                                                                                                                
dulin           59604   0.0  0.3  3192996  23116   ??  S    11:52上午   0:02.59 /Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper /Applications/Visual Studio Code.app/Contents/Resources/app/out/bootstrap /usr/local/bin/git 
/Users/dulin/workspace/nginx-winter utf8 /Applications/Visual Studio Code.app/Contents/MacOS/Electron 2.8.3
```
