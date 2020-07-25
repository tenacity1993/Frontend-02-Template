class Request {
  constructor(options) {
    this.method = options.method || "GET"
    this.port = options.port || 80
    this.path = options.path || '/'
    this.host = options.host
    this.headers = options.headers || {}
    this.body = options.body

    if (!this.headers['Content-type']) {
      // 默认值
      this.headers['Content-type'] = 'application/x-www-form-urlencoded'
    }

    if (this.headers['Content-type'] === 'application/json') {
      this.bodyText = JSON.stringify(this.body)
    } else if (this.headers['Content-type'] === 'application/x-www-form-urlencoded') {
      this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&')
    }

    this.headers['Content-length'] = this.bodyText.length
  }

  send() {
    return new Promise((resolve, reject) => {

    })
  }
}

async function func() {
  let request = new Request({
    method: 'POST',
    host: '127.0.0.1',
    path: '/',
    headers: {},
    body: {
      name: 'hello world'
    }
  })

  let response = await request.send()
  console.log(response)
}
