1 /*
1,关于HTTP协议说法错误的是（D）
 A HTTP报文分为请求报文和响应报文
 B GET请求没有请求正文
 C HTTP请求方法在服务器中即使部分实现了，考虑到安全问题，也不一定会用
 D 请求头的后面的空行可有可无
 2，关于 HTTP 协议，下列说法错误的是（C）
 A HTTP 是无状态协议
 B HTTP 是应用层协议
 C HTTP 是基于二进制的协议
 D HTTP 状态码 200 表示成功
 拓展：
一、什么是HTTP？
    HTTP是超文本传输协议，HTTP是基于TCP/IP的关于数据如何在万维网中如何通信的协议
二、HTTP特点？
 （1）HTTP是无状态协议；
 （2）HTTP是web服务使用的协议；
 （3）HTTP是基于TCP协议的；
 （4）HTTP的通信方式是客户端-服务器模式，即C/S模式
 （5）HTTP是应用层协议。
三、HTTP的报文格式
  HTTP的报文有两种，分别是请求报文和响应报文
    1.请求报文(请求行/请求头/请求数据/空行)
        请求行
            请求方法字段、URL字段和HTTP协议版本
            例如：GET /index.html HTTP/1.1
                get方法将数据拼接在url后面，传递参数受限
            请求方法：
                GET、POST、HEAD、PUT、DELETE、OPTIONS、TRACE、CONNECT
        请求头(key value形式)
            User-Agent：产生请求的浏览器类型。
            Accept：客户端可识别的内容类型列表。
            Host：主机地址
        请求数据
            post方法中，会把数据以key value形式发送请求
        空行
            发送回车符和换行符，通知服务器以下不再有请求头
    2.响应报文(状态行、消息报头、响应正文)
        http响应由三个部分组成分别是状态行，响应头，响应正文。
    （1）状态行是：HTTP-Version+Status-Code+Reason-Phrase （分别表示http版本 + 状态码 + 状态代码的文本描述）
         比如：HTTP/1.1 200 ok
   
         状态码：
             1xx 指示信息–表示请求已接收，继续处理
            2xx 成功–表示请求已被成功接收、理解、接受
            3xx 重定向–要完成请求必须进行更进一步的操作。
            4xx  客户端错误–请求有语法错误或请求无法实现。
            5xx  服务器端错误–服务器未能实现合法的请求。
    （2）响应头：包含服务器类型，日期，长度，内容类型等
        Server:Apache Tomcat/5.0.12
        Date:Mon,6Oct2003 13:13:33 GMT
        Content-Type:text/html
        Last-Moified:Mon,6 Oct 2003 13:23:42 GMT
        Content-Length:112

    （3）响应正文响应正文就是服务器返回的HTML页面或者json数据
 
    例如请求数据：

    1 GET/sample.jspHTTP/1.1
    2 Accept:image/gif.image/jpeg,
    3 Accept-Language:zh-cn
    4 Connection:Keep-Alive
    5 Host:localhost
    6 User-Agent:Mozila/4.0(compatible;MSIE5.01;Window NT5.0)
    7 Accept-Encoding:gzip,deflate
    8
    9 username=jinqiao&password=1234

    第一行为http请求行，包含方法，URI 和http版本
    2-7为请求头，包含浏览器，主机，接受的编码方式和压缩方式
    第8行表示一个空行 表示请求头结束 这个空行是必须的
    第9行是数据体，比如是需要查询的信息。

四，post和get区别：
     GET请求的参数是放在URL里的，POST请求参数是放在请求Request body中；
     GET请求的URL传参有长度限制，而POST请求没有长度限制；
     GET请求的参数只能设置URL编码，因为是ASCK||编码，而POST请求传参没有这个限制；
     GET请求只能进行url编码，而POST支持多种编码方式。
     GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
     GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
     GET在浏览器回退时是无害的，而POST会再次提交请求
     GET产生一个TCP数据包；POST产生两个TCP数据包（对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；

而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据））

五，http和https：
    HTTP是基于TCP/IP的关于数据如何在万维网中如何通信的协议，HTTP的底层是TCP/IP。所以GET和POST的底层也是TCP/IP，


    1. http 的URL 以http:// 开头，https以https:// 开头。
    2. http 标准端口是80 ，https是443。
    3.https 协议需要到ca申请证书，http不需要。
    4.http 是超文本传输协议，信息是明文传输，https 则是具有安全性的ssl加密传输协议。
    5.http 的连接很简单,是无状态的，https协议是由SSL+http协议构建的可进行加密传输、身份认证的网络协议 要比http协议安全。
*/