# node_appli

Node application which is intented to communicate connexion problems encoutered.
Parameters which have to be entered: problem type, duration, username, laptop number, IP adress and a comment.
I used mongodb and mongoose to build my database. I have three different models which are built like this :

This one is to list problemTypes existing with their duration by default.
const Schema = mongoose.Schema

const schemaExistingProblems = new Schema({
  typeProbleme: String,
  duree: Number
})

const ExistingProblemsModel = mongoose.model('existingProblemsModel', schemaExistingProblems)// We use the previous schema to build a model. We have to act like this for each schema in creating a model.

The second one is to list laptop number
const schemaNumPosteDA = new Schema({
  numPosteDA: String
})

And the third and last one is to list trouble added by a user.
const schemaProblemeUser = new Schema({
  user: String,
  numPosteDA: String,
  adresseIPSopra: String,
  typeProbleme: String,
  commentaire: String,
  duree: Number,
  date: { type: Number, default: (new Date()).getTime() }
})


This Node application is linked with angular_appli. You have to download both to have a result.

How to run :
You have to install nodejs and mongodb on your computer.
- download node_appli
- In command line (CMD), follow the path until the node_appli project location and launch : npm install. It will install all dependencies you need to run this application. /!\ Your system needs internet to find dependencies to install
- You have to launch mongodb. For this, in CMD follow the path of the install package until ..\MongoDB\Server\3.2\bin and then launch mongod.
- Launch "npm start" to launch node_appli application.
- Once both are running, in CMD follow the path until angular_appli folder and lauchn npm run serve.

The application will automatically be launched in your browser if everything is ok.


You could as well launch unitary tests I've done in following node_appli folder in CMD, and launching : mocha
These tests are written in test/test.js

In case you tried to launch my application and you have encountered an error, don't hesitate to contact me, It will be a pleasure for me to help you.
