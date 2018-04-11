1. Для развертывания на Heroku без ошибок необходимо использовать код в package.json
"scripts": {
    "heroku-postbuild": "npm run build",
    "dev": "cross-env NODE_ENV=development PORT=5000 DEBUG=server:* nodemon --config nodemon.json --watch server --exec babel-node server/index.js",
    "build": "webpack --progress --hide-modules"
  },

2. Для запрета деалоя в гит настроек WebStorm необходимо воспользоваться на вкладке Version Control кнопкой
"Configure Ignored files"

3. Инсталлируем пакет eslint (npm i --save eslint).
Насройка ESLint - в настройках WebStorm находим поиском Eslint (Languages & Framworks->JavaScript->Code Quality Tools->EsLint).
Включаем через Enabled

4. После выполнения команды "heroku git:remote -a pepellats" необходимо внести изменения в конфигурационные настройки heroku
  $ heroku config:set NPM_CONFIG_PRODUCTION=false (разрешаем использовать при сброрке библиотеки из devDependencies)
  $ heroku config:set NODE_ENV=production (разрешаем использовать при сброрке библиотеки из devDependencies)
После этих команд можно запускать скрипт "sh deploy.sh"

5. Установка человеческого адреса сайта на heroku через меню Settings.
Нажать кнопку Add domain" и ввести два Domain Name ("pepellats.pro" и "www.pepellats.pro")

6. Для подключения БД PostgreSQL на Heroku запустить следующий скрипт: heroku addons:create heroku-postgresql:hobby-dev
  6.1. Получаем информацию по созданной БД
       Created postgresql-asymmetrical-88320 as DATABASE_URL
       Use heroku addons:docs heroku-postgresql to view documentation
  6.2. Переходим в DataStore и прописываем из settings параметры БД в файл serverv->controllers->config->heroku.dev.js
  6.3. Подкючение к Heroku PostgreSQL через DataGrip:
  jdbc:postgresql://<host>:<port>/<dbname>?sslmode=require&user=<username>&password=<password>
  jdbc:postgresql://ec2-54-246-84-200.eu-west-1.compute.amazonaws.com:5432/d27oq71l81atgn?sslmode=require&user=bmeoxtfyvuujgb&password=4403c0b3da87985af887cffef3c5fa9ed22a648b321872103a1717ff27b3d95b








