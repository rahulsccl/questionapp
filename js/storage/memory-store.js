var MemoryStore = function(successCallback, errorCallback) {

    this.submitAndGetNextQuestion = function(questionId, option, callback) {
        var questions = this.questions;
        
        var question = null;
        var l = questions.length;
        for (var i=0; i < l; i++) {

            if (questions[i].id === Number(questionId)+1) {
                question = questions[i];
                break;
            }
        }
        
        var options = this.options.filter(function(element){
            if(element.qid === question.id){
                var option = {"id": element.oid, "value":element.value};
                return option; 
            }
        });

        callLater(callback, question,options);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, question,options) {
        if (callback) {
            setTimeout(function() {
                callback(question.id,question.question,options);
            });
        }
    }

    this.questions = [
        {"id": 1, "question": "What is your name ?"},
        {"id": 2, "question": "What is your Father's name ?"},
        {"id": 3, "question": "What is your Mother's name ?"},
        {"id": 4, "question": "What is your surname ?"},
        {"id": 5, "question": "Where do you live currently ?"},
    ];

    this.options = [
        {"qid": 1, "oid":1, "value": "Rahul"},
        {"qid": 1, "oid":2, "value": "SVK"},
        {"qid": 1, "oid":3, "value": "Vasanth"},
        {"qid": 1, "oid":4, "value": "Deepak"},
        {"qid": 2, "oid":1, "value": "Father 1"},
        {"qid": 2, "oid":2, "value": "Father 2"},
        {"qid": 2, "oid":3, "value": "Father 3"},
        {"qid": 2, "oid":4, "value": "Father 4"},
        {"qid": 3, "oid":1, "value": "Mother 1"},
        {"qid": 3, "oid":2, "value": "Mother 2"},
        {"qid": 3, "oid":3, "value": "Mother 3"},
        {"qid": 3, "oid":4, "value": "Mother 4"},
        {"qid": 4, "oid":1, "value": "Surname 1"},
        {"qid": 4, "oid":2, "value": "Surname 2"},
        {"qid": 4, "oid":3, "value": "Surname 3"},
        {"qid": 4, "oid":4, "value": "Surname 4"},
        {"qid": 5, "oid":1, "value": "Hyderabad"},
        {"qid": 5, "oid":2, "value": "Bangalore"},
        {"qid": 5, "oid":3, "value": "Delhi"},
        {"qid": 5, "oid":4, "value": "Bombay"},
    ];

    callLater(successCallback);
}