# 👋Base of website with react and node.js


## 🔧Installation
Go in each folder and make.
```bash
npm i
```

## ⚙️Settings

>### Api
>>Go in ./api and rename the .sample-env in .env after just complete the file.

```env
MONGODB_URI=
PORT=
ALLOWED_ORIGINS=
```
>### Client
>>Go in ./client/src/assets/hooks and complete api.js

```js
import axios from 'axios';

const api = axios.create({
    baseURL: 'URL of api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
```
>>After you can create your theme color in  ./client/src/assets/styles/data/theme.scss.
>>
>>__Don't forget__ you have predefine breakpoint for media queries in ./client/src/assets/style/breakpoint.scss

## 🚧Launch the application
>In ./client/ and ./api/ run the command
```
npm start
```
## 🚧End of Readme
Made with ❤️
