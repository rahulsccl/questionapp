var app = {

    submitAndGetNextQuestion: function() {
        var qId = $('.questionId').val();
        var value = $('.option').val();
        console.log('submitAndGetNextQuestion');
        this.store.submitAndGetNextQuestion(qId, value, function(questionId, question, options) {

            $('.questionId').val(questionId);

            $('.question').empty();
            $('.question').append(question);

            var l = options.length;
            var e;
            $('.options-list').empty();
            for (var i=0; i<l; i++) {
                e = options[i];
                $('.options-list').append('<input type="radio" class="option" name="option" value=' + e.id + '>' + e.value + '</input><br/>');
            }
        });
    },

    initialize: function() {
        this.store = new MemoryStore();
        this.submitAndGetNextQuestion();
        $('.submit').click($.proxy(this.submitAndGetNextQuestion, this));
    }

};

app.initialize();