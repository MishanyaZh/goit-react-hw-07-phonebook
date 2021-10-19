# goit-react-hw-07-phonebook

https://61699a3009e030001712c4bd.mockapi.io/api/v1/:endpoint

1. npx create-react-app .

2. npm start

3. npm run build

---

- new

---

## NETLIFY

настройка проекта.
https://drive.google.com/file/d/1_mFfA_jdOfTgtwOtEE6hsuo6U95hZU45/view

1. create file netlify.toml

[build] publish = "build"

[[redirects]] from = "/\*" to = "/index.html" status = 200

---

2.  npm install netlify-cli -g

3.  netlify login

4.  add to scripts "scripts": { add...

---

"predeploy": "npm run build", "deploy": "netlify deploy -p"

---

}

5.

- npm run deploy
- (create & configure a new site + enter)
- team (enter)
- zhm-goit-react-hw-04-movies

- netlify open --site

6. add to host new version deploy

- npm run deploy

---

standart setings PROECT

---

- eslint npm install --save-dev prettier eslint

- lint-staged npx mrm@2 lint-staged

- add to jsone "lint-staged": { "_.{js,jsx}": "eslint --cache --fix",
  "_.{js,css,md,jsx}": "prettier --write" }

- create .prettierrc.json .prettierrc.json

{ "printWidth": 80, "tabWidth": 2, "useTabs": false, "semi": true,
"singleQuote": true, "trailingComma": "all", "bracketSpacing": true,
"jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap": "always" }

---

liba

1. css liba https://emotion.sh/docs/introduction npm i @emotion/styled
   @emotion/react

2. prop-types https://www.npmjs.com/package/prop-types npm i prop-types

3.To create a random id https://www.npmjs.com/package/uuid#version-4 npm i uuid

4.toast tostiky https://react-hot-toast.com/docs npm i react-hot-toast

5. react-spinner-loader https://github.com/mhnpd/react-loader-spinner npm
   install react-loader-spinner --save

6. Lightbox modalka https://basiclightbox.electerious.com npm install
   basiclightbox

7. axios https://www.npmjs.com/package/axios npm i axios

8. npm install react-router-dom npm install react-router-dom

npm install redux

npm install react-redux

npm install --save redux-devtools-extension

npm install @reduxjs/toolkit

npm i redux-logger

npm i redux-persist
