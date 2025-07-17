# Express JS Demo
My first express.js files

Steps:
1. Initialize the project, run `npm init -y`
2. Update the package.json, change this part:
``` 
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}
```
into this:
```
"scripts": {
  "server": "nodemon index.js"
}
```
3. Run `npm install express`
4. Run `npm install nodemon --save-dev`
5. Run `npm install ejs`
6. To start the server, run `npm run server`