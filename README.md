# HTTPok

Simple HTTP server for webhook debugging.

![httpok PNG](https://raw.githubusercontent.com/Nex-Otaku/httpok/master/img/httpok-example.png)

## Features

 - Simplest ever HTTP server
 - Answers ```200 OK``` to any incoming request
 
## When to use it

You are building some API integration, and you need to accept webhook from some external service.

Before you rush to write code, you find it useful to first find out what format the data is being sent in.

Check what is sent to your webhook:

1. Start dummy HTTP server &mdash; **HTTPok**!
    ```bash
    httpok 8000
    ```

2. Start [ngrok](https://ngrok.com/) tunnel to dummy server.
    ```bash
    ngrok http 8000
    ```

3. Copy and paste ngrok URL, for example ```https://9017-92-244-247-26.ngrok.io``` to your service as Webhook URL.

Now, every time the service calls webhook, HTTP request will come to ngrok and then to your dummy server, answers ```HTTP 200 OK```.

Thanks to Ngrok you can see all content that is sent to webhook by service. Ngrok provides you a nice dashboard at http://127.0.0.1:4040

![Ngrok Dashboard PNG](https://raw.githubusercontent.com/Nex-Otaku/httpok/master/img/ngrok-dashboard.png)

You can use dummy HTTP server with or without any tool, not only Ngrok, it is just a useful example.
 

## Getting Started

### Prerequisites

For use this tool, you need

  * [Node.js](https://nodejs.org/)

```
sudo npm install -g @nex_otaku/httpok
```

## Usage

```
httpok <port>
```

## Alternatives

You can use a nice webservice https://httpdump.app

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © Nex Otaku.
