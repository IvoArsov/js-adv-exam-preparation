
let expect = require('chai').expect;

/////////////////FUNCTION TO TEST////////////////

let list = (function () {
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();
///////////////////////////////////////////////////

/////////////////////TESTS/////////////////////////

describe('add-delete-in-list tests', () => {
    it('should have "add, delete and toString", functions',() => {
        expect(typeof(list.add)).to.equal('function', 'List object did not have "add" function');
        expect(typeof(list.delete)).to.equal('function', 'List object did not have "delete" function');
        expect(typeof(list.toString)).to.equal('function', 'List object did not have "toString" function');
    });

    it('should return empty string when calling "toString" function on empty list', () => {
        expect(list.toString()).to.equal('', 'List is not initialized');
    });

    describe('"Add" function', () => {
        it('should add one element and print it correct', () => {
            list.add(5);
            expect(list.toString()).to.equal('5', 'Add function did not print correct output after adding one number');
        });


        it('should return correct string after using "toString" on single number',() => {
            list.add(5);
            expect(list.toString()).to.equal('5', '"Add" function did not add correct number');
        });


        it('should print strings correctly', () => {
            list.add('Yani');
            list.add('Pesho');
            expect(list.toString()).to.equal('Yani, Pesho', 'Function "toString" did not return correct output');
        });

        it('should be able to add objects to the list',() => {
            list.add({ x: 5, y: 6 });
            list.add(true);
            expect(list.toString()).to.equal('[object Object], true', 'Function "add" did not return correct output');
        });
    });


    describe('"Delete" function', function () {

        it('should return undefined if the input index is a string', () => {
            list.add(5);
            list.add(6);
            expect(list.delete('yani')).to.equal(undefined, 'Function "delete" did not return undefined when input index is a string');
        });

        it('should return undefined if the input index is less than zero', () => {
            list.add(5);
            list.add(10);
            expect(list.delete(-1)).to.equal(undefined, 'Did not return undefined with invalid index');
        });

        it('should return undefined if the list is empty',() => {
            expect(list.delete(0)).to.equal(undefined, 'Did not return undefined with invalid index');
        });

        it('should return undefined if the input index is less than zero', () => {
            list.add(5);
            list.add(10);
            expect(list.delete(2)).to.equal(undefined, 'Did not return undefined with invalid index');
        });

        it('should return "5" if the list contains only number "5"', () => {
            list.add(5);
            expect(list.delete(0)).to.equal(5, 'Did not return correct value when the inpust index is correct');
        });

        it('should return correct value if the list is containing more than 2 items', () => {
            list.add(5);
            list.add(7);
            list.add(6);
            list.add(7);
            list.delete(2);
            expect(list.toString()).to.equal('5, 7, 7', 'Did not return correct value when the inpust index is correct');
        });

        it('should return correct value if the list is containing more than 2 items', () =>  {
            list.add(5);
            list.add(7);
            list.add(7);
            list.delete(0);
            expect(list.toString()).to.equal('7, 7', 'Did not return correct value when the inpust index is correct');
        });

        it('should return correct value if the list is containing more than 2 items', () => {
            list.add(5);
            list.add(7);
            list.add(7);
            list.delete(2);
            expect(list.toString()).to.equal('5, 7', 'Did not return correct value when the inpust index is correct');
        });
    });
});