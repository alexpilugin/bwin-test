1. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
2. Also I used [React-Bootstrap](https://react-bootstrap.github.io/getting-started.html)
3. It was installed by ***$ npm install react-bootstrap --save*** command
4. Also this project uses [Twitter Bootstrap](http://getbootstrap.com)
5. Twitter Bootsrap was installed with ***$ npm install bootstrap --save*** command
6. I also used [window.fetch polyfil](https://github.com/github/fetch) which was installed with ***$ npm install whatwg-fetch --save*** command
7. Usage fetch() : import 'whatwg-fetch'
8. fetch() with promises:
~~~~ 
  loadData(url, success) {
    return fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJSON)
      .then(success);
  }
~~~~ 
Demo on AWS: [https://goo.gl/SQ8Mz0](https://goo.gl/SQ8Mz0)
