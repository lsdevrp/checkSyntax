const checkSyntax = require("./checkSyntax");
const checkSyntax2 = require("./checkSyntax2");

console.log('fisrt logic')
const CheckSyntax = new checkSyntax();
CheckSyntax.checkArray(["[(a-b)]", "()", "[({([{*}])})]", "[( } ]", "{(a[])"]);
CheckSyntax.checkArray(["[( ) {}]", "[()]{}([])"]);

console.log('\nsecond logic')
const CheckSyntax2 = new checkSyntax2();
CheckSyntax2.checkArray(["[(a-b)]", "()", "[({([{*}])})]", "[( } ]", "{(a[])"]);
CheckSyntax2.checkArray(["[( ) {}]", "[()]{}([])"]);
