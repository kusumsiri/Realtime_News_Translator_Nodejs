# Realtime News Translator Application
A real-time news translator application with Amazon serverless technology using Terraform and Node.js. This app translates German news into English in real time. This conversion happens automatically when the Lambda function URL is accessed.
It uses two APIs. The [newsapi.org](https://newsapi.org/) API is used to pull news and then uses Google Translater to translate it.

The newsapi.org API-KEY is considered a secret value. So it must be set in a .tfvars file that is not in this repository. The key will then be set as an environment variable for the lambda function.
