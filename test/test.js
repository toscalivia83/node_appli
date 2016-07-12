var assert = require('chai').assert
var problemService = require('../service/problemService')

describe('Check User', function (user) {
	var userValid = 'Marion La Big Boss'
	var userUndefined = undefined
	var userNull = null
	var userNoChar = ''
	var userAboveFifty = 'Marion La Big Boss Marion La Big Boss Marion La Big Boss Marion La Big Boss'

	describe('#typeIsValid', function () {
		it('should be valid', function () {
			assert.equal(problemService.typeUserIsValid(userValid), true)
			assert.equal(problemService.typeUserIsValid(userUndefined), false)
			assert.equal(problemService.typeUserIsValid(userNull), false)
			assert.equal(problemService.typeUserIsValid(userAboveFifty), false)
			assert.equal(problemService.typeUserIsValid(userNoChar), false)
		})
	})
})

describe('Check Num Poste DA', function (user) {
	var numPosteDACollection = ['numPosteDA1', 'numPosteDA2', 'numPosteDA3']
	var numPosteDAValid = 'numPosteDA1'
	var numPosteDAUndefined = undefined
	var numPosteDANull = null
	var numPosteDANoChar = ''

	describe('#typeIsValid', function () {
		it('should be Valid', function () {
			assert.equal(problemService.typenumPosteDAIsValid(numPosteDAValid), true)
			assert.equal(problemService.typenumPosteDAIsValid(numPosteDAUndefined), false)
			assert.equal(problemService.typenumPosteDAIsValid(numPosteDANull), false)
			assert.equal(problemService.typenumPosteDAIsValid(numPosteDANoChar), false)
		})
	})

})

describe('Check adress IP', function (user) {
	var regex = "^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$";
	var adressIPValid = "0.205.1.7";
	var adressIPNull = null;
	var adressIPUndefined = undefined;
	var adressIPNoChar = "";
	var adressIPMoreThan4ForFirst = "4510.245.1.7";
	var adressIPMoreThan4ForSecond = "0.2045.1.7";
	var adressIPMoreThan4ForThird = "0.204.1451.7";
	var adressIPMoreThan4ForFourth = "0.204.1.7482";
	var adressIPNoNumberForFirst = ".205.1.7";
	var adressIPNoNumberForSecond = "5..1.7";
	var adressIPNoNumberForThird = "2.204..7";
	var adressIPNoNumberForFourth = "5.205.1.";

	describe('#typeIsValid', function(){

		it('should be Valid', function(){
			assert.equal(problemService.typeAdressIsValid(adressIPValid), true);
			assert.equal(problemService.typeAdressIsValid(adressIPNull), false);
			assert.equal(problemService.typeAdressIsValid(adressIPUndefined), false);
			assert.equal(problemService.typeAdressIsValid(adressIPNoChar), false);
			assert.equal(problemService.typeAdressIsValid(adressIPMoreThan4ForFirst), false);
			assert.equal(problemService.typeAdressIsValid(adressIPMoreThan4ForSecond), false);
			assert.equal(problemService.typeAdressIsValid(adressIPMoreThan4ForThird), false);
			assert.equal(problemService.typeAdressIsValid(adressIPMoreThan4ForFourth), false);
			assert.equal(problemService.typeAdressIsValid(adressIPNoNumberForFirst), false);
			assert.equal(problemService.typeAdressIsValid(adressIPNoNumberForSecond), false);
			assert.equal(problemService.typeAdressIsValid(adressIPNoNumberForThird), false);
			assert.equal(problemService.typeAdressIsValid(adressIPNoNumberForFourth), false);
		})

	})

})

describe('Check type problems by default', function(user){

	var typeProblemsValid = "typeProblems2";
	var typeProblemsNull = null;
	var typeProblemsUndefined = undefined;
	var typeProblemsNoChar = "";

	describe('#typeIsValid', function(){

		it('should be Valid', function(){
			assert.equal(problemService.typeProblemeIsValid(typeProblemsValid), true);
			assert.equal(problemService.typeProblemeIsValid(typeProblemsNull), false);
			assert.equal(problemService.typeProblemeIsValid(typeProblemsUndefined), false);
			assert.equal(problemService.typeProblemeIsValid(typeProblemsNoChar), false);
		})

	})

})

describe('Check comments', function(user){

	var commentValid = "Comment";
	var commentNull = null;
	var commentUndefined = undefined;
	var commentNoChar = "";

	describe('#typeIsValid', function(){

		it('should not be undefined or null', function(){
			assert.equal(problemService.typeCommentsIsValid(commentValid), true);
			assert.equal(problemService.typeCommentsIsValid(commentNull), false);
			assert.equal(problemService.typeCommentsIsValid(commentUndefined), false);
			assert.equal(problemService.typeCommentsIsValid(commentNoChar), false);
		})

	})

})

describe('Check time spent', function(user){

	var durationValid = 600;
	var durationUndefined = undefined;
	var durationNull = null;
	var durationNegative = -600;
	var durationNotANumber = "I'm not a number";
	var durationNoChar = "";


	describe('#typeIsValid', function(){

		it('should not be undefined or null', function(){
			assert.equal(problemService.typeDurationIsValid(durationValid), true);
			assert.equal(problemService.typeDurationIsValid(durationUndefined), false);
			assert.equal(problemService.typeDurationIsValid(durationNull), false);
			assert.equal(problemService.typeDurationIsValid(durationNegative), false);
			assert.equal(problemService.typeDurationIsValid(durationNotANumber), false);
			assert.equal(problemService.typeDurationIsValid(durationNoChar), false);
		})
	})

})

describe('Check date', function(user){

	var dateValid = 1467985122110;
	var dateUndefined = undefined;
	var dateNull = null;
	var dateNegative = -600;
	var dateNotANumber = "I'm not a number";
	var dateNoChar = "";


	describe('#typeIsValid', function(){

		it('should not be undefined or null', function(){
			assert.equal(problemService.typeDateIsValid(dateValid), true);
			assert.equal(problemService.typeDateIsValid(dateUndefined), false);
			assert.equal(problemService.typeDateIsValid(dateNull), false);
			assert.equal(problemService.typeDateIsValid(dateNegative), false);
			assert.equal(problemService.typeDateIsValid(dateNotANumber), false);
			assert.equal(problemService.typeDateIsValid(dateNoChar), false);
		})
	})

})
