test("each_slice", 12, function() {
    var count = 0;
    $('#test li').each_slice(2, function() {
        count++;
        ok(this.jquery, '`this` should be a jQuery collection');
        equals(this.length, 2, 'each iteration should have had a colelction with 2 elements');
        this.addClass('done');
    });
    
    equals(count, 5, 'should have had 5 iterations');
    equals($('#test li.done').length, 10, 'should have iterated over all elements');
});