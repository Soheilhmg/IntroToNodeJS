var exports = exports || {};

describe('Index', function() {
    var res = jasmine.createSpyObj('res', ["render"]);

    it('has a title', function() {
        exports.index(null, res);
        expect(res.render).toHaveBeenCalled();
        expect(res.render).toHaveBeenCalledWith("index", {title: "Express"});
    });
});