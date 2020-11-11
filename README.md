# Request-optimization-by-memoization - August 2018
Backend engineers are much familiar with the term Webhooks. Webhooks are a way for apps to communicate between them automatically.The main aim of this project is to memoize the webhooks request. Certain application can send the same webhooks request multiple number times. It's not an ideal way to let the API process the same webhooks data again and again. The above code memoize's the webhooks request and prevents the API from processing same data. We also have an additional option to customize the memoization time.

Languages: Lodash, Javascript
