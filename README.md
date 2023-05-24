# Realtime News Translator Application - Node.js
A real-time news translator application with Amazon serverless technology using Terraform and Node.js. This app translates German news into English in real time. This conversion happens automatically when the Lambda function URL is accessed.
It uses two APIs. The [newsapi.org](https://newsapi.org/) API is used to pull news and then uses Google Translater to translate it.

The newsapi.org API-KEY is considered a secret value. So it must be set in a .tfvars file that is not in this repository. The key will then be set as an environment variable for the lambda function.

---
Deutsch

Eine Echtzeit-Nachrichtenübersetzungsanwendung mit serverloser Amazon-Technologie unter Verwendung von Terraform und Node.js. Diese App übersetzt deutsche Nachrichten in Echtzeit ins Englische. Diese Konvertierung erfolgt automatisch, wenn auf die Lambda-Funktions-URL zugegriffen wird. Es verwendet zwei APIs. Die [newsapi.org](https://newsapi.org/) API wird zum Abrufen von Nachrichten verwendet und verwendet dann Google Translater, um sie zu übersetzen.

Der newsapi.org API-KEY gilt als geheimer Wert. Daher muss es in einer .tfvars-Datei festgelegt werden, die sich nicht in diesem Repository befindet. Der Schlüssel wird dann als Umgebungsvariable für die Lambda-Funktion festgelegt.