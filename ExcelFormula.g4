grammar ExcelFormula;

options {
  language=JavaScript;
}

// Tokens
ABS: 'ABS';
AVERAGE: 'AVERAGE';
COUNT: 'COUNT';
IF: 'IF';
MAX: 'MAX';
MIN: 'MIN';
SUM: 'SUM';
VLOOKUP: 'VLOOKUP';
INDEX: 'INDEX';
MATCH: 'MATCH';
CONCATENATE: 'CONCATENATE';
TEXT: 'TEXT';
TODAY: 'TODAY';
NOW: 'NOW';
LOG: 'LOG';
EXP: 'EXP';

// Rule for parsing a formula
formula: expression EOF;

// Rule for an expression
expression: atom
          | expression ('+'|'-') expression
          | expression ('*'|'/') expression
          ;

// Rule for an atomic element in an expression
atom: NUMBER
    | CELL_REFERENCE
    | functionCall
    | '(' expression ')'
    ;

// Rule for function calls
functionCall: ABS '(' expression ')'         // ABS: Returns the absolute value of a number.
            | AVERAGE '(' argumentList ')'  // AVERAGE: Calculates the average of numerical values.
            | COUNT '(' argumentList ')'    // COUNT: Counts the number of cells containing numerical values.
            | IF '(' expression ',' expression ',' expression ')'  // IF: Evaluates a condition and returns a value if the condition is true, and another value if the condition is false.
            | MAX '(' argumentList ')'      // MAX: Returns the maximum value among a set of values.
            | MIN '(' argumentList ')'      // MIN: Returns the minimum value among a set of values.
            | SUM '(' argumentList ')'      // SUM: Calculates the sum of numerical values.
            | VLOOKUP '(' expression ',' expression ',' expression ',' expression ')'  // VLOOKUP: Looks for a value in the first column of a range and returns a value from the same row from a specified column.
            | INDEX '(' expression ',' expression ',' expression ')'  // INDEX: Returns the value of a specific cell in a range based on the specified row and column numbers.
            | MATCH '(' expression ',' expression ',' expression ')'  // MATCH: Searches for a value in a range and returns the position of that value.
            | CONCATENATE '(' argumentList ')'  // CONCATENATE: Concatenates multiple text strings into a single string.
            | TEXT '(' expression ',' expression ')'  // TEXT: Formats a numeric value with a specified text format.
            | TODAY '(' ')'                  // TODAY: Returns the current date.
            | NOW '(' ')'                    // NOW: Returns the current date and time.
            | LOG '(' expression ')'         // LOG: Returns the natural logarithm of a number.
            | EXP '(' expression ')'         // EXP: Returns Euler's number raised to the power of a number.
            ;

argumentList: expression (',' expression)*;

NUMBER: [0-9]+ ('.' [0-9]+)?;

CELL_REFERENCE: '$'? [A-Z]+ '$'? [0-9]+;

WS: [ \t\r\n]+ -> skip;