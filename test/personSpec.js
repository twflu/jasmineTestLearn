describe('person test', function(){
    var p;
    beforeEach(function(){
        p = new person();
    });

    it('getFirstName should be called when getFullName is invoked', function(){
        spyOn(p, 'getFirstName');
        p.getFullName();
        expect(p.getFirstName).toHaveBeenCalled();
        expect(p.getFirstName).toHaveBeenCalledWith();
    });

    it('spyOn setFirstName should not modify the real first name', function(){
        spyOn(p, 'setFirstName');
        p.setFirstName('zhou');
        expect(p.getFirstName()).not.toBe('zhou');
    });

    it('spyOn andCallThrough setFirstName should modify the real first name', function(){
        spyOn(p, 'setFirstName').andCallThrough();
        p.setFirstName('zhou');
        expect(p.getFirstName()).toBe('zhou');
    });

    it('spyOn andReturn getFullName should be the mock full name', function(){
        spyOn(p, 'getFullName').andReturn('yzzhou');
        expect(p.getFullName()).toBe('yzzhou');
    });

    it('spyOn andCallFake getFullName should be the mock full name', function(){
        spyOn(p, 'getFullName').andCallFake(function(){
            return 'mockFullName';
        });
        expect(p.getFullName()).toBe('mockFullName');
    });

    it('createSpy', function(){
        var displayFnMock = jasmine.createSpy('display fn');
        p.setDisplayFn(displayFnMock);
        p.display();
        expect(displayFnMock).toHaveBeenCalled();
    });

    it('jasmine any', function(){
        expect({}).toEqual(jasmine.any(Object));
        expect(12).toEqual(jasmine.any(Number));
    });

    it('mock clock', function(){
        jasmine.Clock.useMock();
        var callBack = jasmine.createSpy('call back');
        setTimeout(function(){
            callBack()
        }, 500);
        expect(callBack).not.toHaveBeenCalled();
        jasmine.Clock.tick(500);
        expect(callBack).toHaveBeenCalled();
    });
});
