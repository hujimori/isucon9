## nginx
### 操作
- 再起動 : `sudo nginx -s reload`
- 停止 : `sudo nginx -s stop`

### アクセスログの場所
- macOS : `/usr/local/var/log/nginx/access.log`
- ubuntu : `/var/log/nginx/access.log`

### ローカルで動かすための設定
`nginx.conf` に `proxy_pass` を設定する。
```
location / {
    proxy_pass  http://127.0.0.1:8000;
}
```


## alp
nginx のアクセスログの解析に alp コマンドを使う。

```
cat /usr/local/var/log/nginx/access.log | alp ltsv
```

### インストール
`./alp.sh`

### nginx.conf の設定が必要
```
log_format ltsv "time:$time_local"
                "\thost:$remote_addr"
                "\tforwardedfor:$http_x_forwarded_for"
                "\treq:$request"
                "\tstatus:$status"
                "\tmethod:$request_method"
                "\turi:$request_uri"
                "\tsize:$body_bytes_sent"
                "\treferer:$http_referer"
                "\tua:$http_user_agent"
                "\treqtime:$request_time"
                "\tcache:$upstream_http_x_cache"
                "\truntime:$upstream_http_x_runtime"
                "\tapptime:$upstream_response_time"
                "\tvhost:$host";

# for macOS
access_log  /usr/local/var/log/nginx/access.log ltsv;
error_log   /usr/local/var/log/nginx/error.log  warn;

# for Ubuntu
# access_log  /var/log/nginx/access.log   ltsv; 
# error_log   /var/log/nginx/error.log    warn;
```
