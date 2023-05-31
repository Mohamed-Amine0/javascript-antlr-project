// Generated from c:\Users\Mohamed-Amine-Miladi\Documents\Dossier_FST\2022-2023\internship\javascript-antlr-project\ExcelFormula.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001c\u0091\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0019",
    "\n\u0003\f\u0003\u000e\u0003\u001c\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "%\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005\u0087\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0007\u0006\u008c\n\u0006\f\u0006\u000e\u0006\u008f\u000b\u0006",
    "\u0003\u0006\u0002\u0003\u0004\u0007\u0002\u0004\u0006\b\n\u0002\u0004",
    "\u0003\u0002\u0003\u0004\u0003\u0002\u0005\u0006\u0002\u00a0\u0002\f",
    "\u0003\u0002\u0002\u0002\u0004\u000f\u0003\u0002\u0002\u0002\u0006$",
    "\u0003\u0002\u0002\u0002\b\u0086\u0003\u0002\u0002\u0002\n\u0088\u0003",
    "\u0002\u0002\u0002\f\r\u0005\u0004\u0003\u0002\r\u000e\u0007\u0002\u0002",
    "\u0003\u000e\u0003\u0003\u0002\u0002\u0002\u000f\u0010\b\u0003\u0001",
    "\u0002\u0010\u0011\u0005\u0006\u0004\u0002\u0011\u001a\u0003\u0002\u0002",
    "\u0002\u0012\u0013\f\u0004\u0002\u0002\u0013\u0014\t\u0002\u0002\u0002",
    "\u0014\u0019\u0005\u0004\u0003\u0005\u0015\u0016\f\u0003\u0002\u0002",
    "\u0016\u0017\t\u0003\u0002\u0002\u0017\u0019\u0005\u0004\u0003\u0004",
    "\u0018\u0012\u0003\u0002\u0002\u0002\u0018\u0015\u0003\u0002\u0002\u0002",
    "\u0019\u001c\u0003\u0002\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002",
    "\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u0005\u0003\u0002\u0002\u0002",
    "\u001c\u001a\u0003\u0002\u0002\u0002\u001d%\u0007\u001a\u0002\u0002",
    "\u001e%\u0007\u001b\u0002\u0002\u001f%\u0005\b\u0005\u0002 !\u0007\u0007",
    "\u0002\u0002!\"\u0005\u0004\u0003\u0002\"#\u0007\b\u0002\u0002#%\u0003",
    "\u0002\u0002\u0002$\u001d\u0003\u0002\u0002\u0002$\u001e\u0003\u0002",
    "\u0002\u0002$\u001f\u0003\u0002\u0002\u0002$ \u0003\u0002\u0002\u0002",
    "%\u0007\u0003\u0002\u0002\u0002&\'\u0007\n\u0002\u0002\'(\u0007\u0007",
    "\u0002\u0002()\u0005\u0004\u0003\u0002)*\u0007\b\u0002\u0002*\u0087",
    "\u0003\u0002\u0002\u0002+,\u0007\u000b\u0002\u0002,-\u0007\u0007\u0002",
    "\u0002-.\u0005\n\u0006\u0002./\u0007\b\u0002\u0002/\u0087\u0003\u0002",
    "\u0002\u000201\u0007\f\u0002\u000212\u0007\u0007\u0002\u000223\u0005",
    "\n\u0006\u000234\u0007\b\u0002\u00024\u0087\u0003\u0002\u0002\u0002",
    "56\u0007\r\u0002\u000267\u0007\u0007\u0002\u000278\u0005\u0004\u0003",
    "\u000289\u0007\t\u0002\u00029:\u0005\u0004\u0003\u0002:;\u0007\t\u0002",
    "\u0002;<\u0005\u0004\u0003\u0002<=\u0007\b\u0002\u0002=\u0087\u0003",
    "\u0002\u0002\u0002>?\u0007\u000e\u0002\u0002?@\u0007\u0007\u0002\u0002",
    "@A\u0005\n\u0006\u0002AB\u0007\b\u0002\u0002B\u0087\u0003\u0002\u0002",
    "\u0002CD\u0007\u000f\u0002\u0002DE\u0007\u0007\u0002\u0002EF\u0005\n",
    "\u0006\u0002FG\u0007\b\u0002\u0002G\u0087\u0003\u0002\u0002\u0002HI",
    "\u0007\u0010\u0002\u0002IJ\u0007\u0007\u0002\u0002JK\u0005\n\u0006\u0002",
    "KL\u0007\b\u0002\u0002L\u0087\u0003\u0002\u0002\u0002MN\u0007\u0011",
    "\u0002\u0002NO\u0007\u0007\u0002\u0002OP\u0005\u0004\u0003\u0002PQ\u0007",
    "\t\u0002\u0002QR\u0005\u0004\u0003\u0002RS\u0007\t\u0002\u0002ST\u0005",
    "\u0004\u0003\u0002TU\u0007\t\u0002\u0002UV\u0005\u0004\u0003\u0002V",
    "W\u0007\b\u0002\u0002W\u0087\u0003\u0002\u0002\u0002XY\u0007\u0012\u0002",
    "\u0002YZ\u0007\u0007\u0002\u0002Z[\u0005\u0004\u0003\u0002[\\\u0007",
    "\t\u0002\u0002\\]\u0005\u0004\u0003\u0002]^\u0007\t\u0002\u0002^_\u0005",
    "\u0004\u0003\u0002_`\u0007\b\u0002\u0002`\u0087\u0003\u0002\u0002\u0002",
    "ab\u0007\u0013\u0002\u0002bc\u0007\u0007\u0002\u0002cd\u0005\u0004\u0003",
    "\u0002de\u0007\t\u0002\u0002ef\u0005\u0004\u0003\u0002fg\u0007\t\u0002",
    "\u0002gh\u0005\u0004\u0003\u0002hi\u0007\b\u0002\u0002i\u0087\u0003",
    "\u0002\u0002\u0002jk\u0007\u0014\u0002\u0002kl\u0007\u0007\u0002\u0002",
    "lm\u0005\n\u0006\u0002mn\u0007\b\u0002\u0002n\u0087\u0003\u0002\u0002",
    "\u0002op\u0007\u0015\u0002\u0002pq\u0007\u0007\u0002\u0002qr\u0005\u0004",
    "\u0003\u0002rs\u0007\t\u0002\u0002st\u0005\u0004\u0003\u0002tu\u0007",
    "\b\u0002\u0002u\u0087\u0003\u0002\u0002\u0002vw\u0007\u0016\u0002\u0002",
    "wx\u0007\u0007\u0002\u0002x\u0087\u0007\b\u0002\u0002yz\u0007\u0017",
    "\u0002\u0002z{\u0007\u0007\u0002\u0002{\u0087\u0007\b\u0002\u0002|}",
    "\u0007\u0018\u0002\u0002}~\u0007\u0007\u0002\u0002~\u007f\u0005\u0004",
    "\u0003\u0002\u007f\u0080\u0007\b\u0002\u0002\u0080\u0087\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u0007\u0019\u0002\u0002\u0082\u0083\u0007\u0007",
    "\u0002\u0002\u0083\u0084\u0005\u0004\u0003\u0002\u0084\u0085\u0007\b",
    "\u0002\u0002\u0085\u0087\u0003\u0002\u0002\u0002\u0086&\u0003\u0002",
    "\u0002\u0002\u0086+\u0003\u0002\u0002\u0002\u00860\u0003\u0002\u0002",
    "\u0002\u00865\u0003\u0002\u0002\u0002\u0086>\u0003\u0002\u0002\u0002",
    "\u0086C\u0003\u0002\u0002\u0002\u0086H\u0003\u0002\u0002\u0002\u0086",
    "M\u0003\u0002\u0002\u0002\u0086X\u0003\u0002\u0002\u0002\u0086a\u0003",
    "\u0002\u0002\u0002\u0086j\u0003\u0002\u0002\u0002\u0086o\u0003\u0002",
    "\u0002\u0002\u0086v\u0003\u0002\u0002\u0002\u0086y\u0003\u0002\u0002",
    "\u0002\u0086|\u0003\u0002\u0002\u0002\u0086\u0081\u0003\u0002\u0002",
    "\u0002\u0087\t\u0003\u0002\u0002\u0002\u0088\u008d\u0005\u0004\u0003",
    "\u0002\u0089\u008a\u0007\t\u0002\u0002\u008a\u008c\u0005\u0004\u0003",
    "\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008c\u008f\u0003\u0002\u0002",
    "\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002",
    "\u0002\u008e\u000b\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002",
    "\u0002\u0007\u0018\u001a$\u0086\u008d"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ExcelFormulaParser extends antlr4.Parser {

    static grammarFileName = "ExcelFormula.g4";
    static literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'('", "')'", 
                            "','", "'ABS'", "'AVERAGE'", "'COUNT'", "'IF'", 
                            "'MAX'", "'MIN'", "'SUM'", "'VLOOKUP'", "'INDEX'", 
                            "'MATCH'", "'CONCATENATE'", "'TEXT'", "'TODAY'", 
                            "'NOW'", "'LOG'", "'EXP'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "ABS", "AVERAGE", "COUNT", "IF", "MAX", "MIN", 
                             "SUM", "VLOOKUP", "INDEX", "MATCH", "CONCATENATE", 
                             "TEXT", "TODAY", "NOW", "LOG", "EXP", "NUMBER", 
                             "CELL_REFERENCE", "WS" ];
    static ruleNames = [ "formula", "expression", "atom", "functionCall", 
                         "argumentList" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ExcelFormulaParser.ruleNames;
        this.literalNames = ExcelFormulaParser.literalNames;
        this.symbolicNames = ExcelFormulaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ExcelFormulaParser.RULE_formula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.expression(0);
	        this.state = 11;
	        this.match(ExcelFormulaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, ExcelFormulaParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.atom();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 24;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 22;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExcelFormulaParser.RULE_expression);
	                    this.state = 16;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 17;
	                    _la = this._input.LA(1);
	                    if(!(_la===ExcelFormulaParser.T__0 || _la===ExcelFormulaParser.T__1)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 18;
	                    this.expression(3);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExcelFormulaParser.RULE_expression);
	                    this.state = 19;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 20;
	                    _la = this._input.LA(1);
	                    if(!(_la===ExcelFormulaParser.T__2 || _la===ExcelFormulaParser.T__3)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 21;
	                    this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 26;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ExcelFormulaParser.RULE_atom);
	    try {
	        this.state = 34;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ExcelFormulaParser.NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.match(ExcelFormulaParser.NUMBER);
	            break;
	        case ExcelFormulaParser.CELL_REFERENCE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.match(ExcelFormulaParser.CELL_REFERENCE);
	            break;
	        case ExcelFormulaParser.ABS:
	        case ExcelFormulaParser.AVERAGE:
	        case ExcelFormulaParser.COUNT:
	        case ExcelFormulaParser.IF:
	        case ExcelFormulaParser.MAX:
	        case ExcelFormulaParser.MIN:
	        case ExcelFormulaParser.SUM:
	        case ExcelFormulaParser.VLOOKUP:
	        case ExcelFormulaParser.INDEX:
	        case ExcelFormulaParser.MATCH:
	        case ExcelFormulaParser.CONCATENATE:
	        case ExcelFormulaParser.TEXT:
	        case ExcelFormulaParser.TODAY:
	        case ExcelFormulaParser.NOW:
	        case ExcelFormulaParser.LOG:
	        case ExcelFormulaParser.EXP:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 29;
	            this.functionCall();
	            break;
	        case ExcelFormulaParser.T__4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 30;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 31;
	            this.expression(0);
	            this.state = 32;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ExcelFormulaParser.RULE_functionCall);
	    try {
	        this.state = 132;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ExcelFormulaParser.ABS:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.match(ExcelFormulaParser.ABS);
	            this.state = 37;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 38;
	            this.expression(0);
	            this.state = 39;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.AVERAGE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.match(ExcelFormulaParser.AVERAGE);
	            this.state = 42;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 43;
	            this.argumentList();
	            this.state = 44;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.COUNT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.match(ExcelFormulaParser.COUNT);
	            this.state = 47;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 48;
	            this.argumentList();
	            this.state = 49;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.IF:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 51;
	            this.match(ExcelFormulaParser.IF);
	            this.state = 52;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 53;
	            this.expression(0);
	            this.state = 54;
	            this.match(ExcelFormulaParser.T__6);
	            this.state = 55;
	            this.expression(0);
	            this.state = 56;
	            this.match(ExcelFormulaParser.T__6);
	            this.state = 57;
	            this.expression(0);
	            this.state = 58;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.MAX:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 60;
	            this.match(ExcelFormulaParser.MAX);
	            this.state = 61;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 62;
	            this.argumentList();
	            this.state = 63;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.MIN:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 65;
	            this.match(ExcelFormulaParser.MIN);
	            this.state = 66;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 67;
	            this.argumentList();
	            this.state = 68;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.SUM:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 70;
	            this.match(ExcelFormulaParser.SUM);
	            this.state = 71;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 72;
	            this.argumentList();
	            this.state = 73;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.VLOOKUP:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 75;
	            this.match(ExcelFormulaParser.VLOOKUP);
	            this.state = 76;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 77;
	            this.expression(0);
	            this.state = 78;
	            this.match(ExcelFormulaParser.T__6);
	            this.state = 79;
	            this.expression(0);
	            this.state = 80;
	            this.match(ExcelFormulaParser.T__6);
	            this.state = 81;
	            this.expression(0);
	            this.state = 82;
	            this.match(ExcelFormulaParser.T__6);
	            this.state = 83;
	            this.expression(0);
	            this.state = 84;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.INDEX:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 86;
	            this.match(ExcelFormulaParser.INDEX);
	            this.state = 87;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 88;
	            this.expression(0);
	            this.state = 89;
	            this.match(ExcelFormulaParser.T__6);
	            this.state = 90;
	            this.expression(0);
	            this.state = 91;
	            this.match(ExcelFormulaParser.T__6);
	            this.state = 92;
	            this.expression(0);
	            this.state = 93;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.MATCH:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 95;
	            this.match(ExcelFormulaParser.MATCH);
	            this.state = 96;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 97;
	            this.expression(0);
	            this.state = 98;
	            this.match(ExcelFormulaParser.T__6);
	            this.state = 99;
	            this.expression(0);
	            this.state = 100;
	            this.match(ExcelFormulaParser.T__6);
	            this.state = 101;
	            this.expression(0);
	            this.state = 102;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.CONCATENATE:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 104;
	            this.match(ExcelFormulaParser.CONCATENATE);
	            this.state = 105;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 106;
	            this.argumentList();
	            this.state = 107;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.TEXT:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 109;
	            this.match(ExcelFormulaParser.TEXT);
	            this.state = 110;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 111;
	            this.expression(0);
	            this.state = 112;
	            this.match(ExcelFormulaParser.T__6);
	            this.state = 113;
	            this.expression(0);
	            this.state = 114;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.TODAY:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 116;
	            this.match(ExcelFormulaParser.TODAY);
	            this.state = 117;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 118;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.NOW:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 119;
	            this.match(ExcelFormulaParser.NOW);
	            this.state = 120;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 121;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.LOG:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 122;
	            this.match(ExcelFormulaParser.LOG);
	            this.state = 123;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 124;
	            this.expression(0);
	            this.state = 125;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        case ExcelFormulaParser.EXP:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 127;
	            this.match(ExcelFormulaParser.EXP);
	            this.state = 128;
	            this.match(ExcelFormulaParser.T__4);
	            this.state = 129;
	            this.expression(0);
	            this.state = 130;
	            this.match(ExcelFormulaParser.T__5);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentList() {
	    let localctx = new ArgumentListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ExcelFormulaParser.RULE_argumentList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.expression(0);
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ExcelFormulaParser.T__6) {
	            this.state = 135;
	            this.match(ExcelFormulaParser.T__6);
	            this.state = 136;
	            this.expression(0);
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ExcelFormulaParser.EOF = antlr4.Token.EOF;
ExcelFormulaParser.T__0 = 1;
ExcelFormulaParser.T__1 = 2;
ExcelFormulaParser.T__2 = 3;
ExcelFormulaParser.T__3 = 4;
ExcelFormulaParser.T__4 = 5;
ExcelFormulaParser.T__5 = 6;
ExcelFormulaParser.T__6 = 7;
ExcelFormulaParser.ABS = 8;
ExcelFormulaParser.AVERAGE = 9;
ExcelFormulaParser.COUNT = 10;
ExcelFormulaParser.IF = 11;
ExcelFormulaParser.MAX = 12;
ExcelFormulaParser.MIN = 13;
ExcelFormulaParser.SUM = 14;
ExcelFormulaParser.VLOOKUP = 15;
ExcelFormulaParser.INDEX = 16;
ExcelFormulaParser.MATCH = 17;
ExcelFormulaParser.CONCATENATE = 18;
ExcelFormulaParser.TEXT = 19;
ExcelFormulaParser.TODAY = 20;
ExcelFormulaParser.NOW = 21;
ExcelFormulaParser.LOG = 22;
ExcelFormulaParser.EXP = 23;
ExcelFormulaParser.NUMBER = 24;
ExcelFormulaParser.CELL_REFERENCE = 25;
ExcelFormulaParser.WS = 26;

ExcelFormulaParser.RULE_formula = 0;
ExcelFormulaParser.RULE_expression = 1;
ExcelFormulaParser.RULE_atom = 2;
ExcelFormulaParser.RULE_functionCall = 3;
ExcelFormulaParser.RULE_argumentList = 4;

class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExcelFormulaParser.RULE_formula;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(ExcelFormulaParser.EOF, 0);
	};


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExcelFormulaParser.RULE_expression;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExcelFormulaParser.RULE_atom;
    }

	NUMBER() {
	    return this.getToken(ExcelFormulaParser.NUMBER, 0);
	};

	CELL_REFERENCE() {
	    return this.getToken(ExcelFormulaParser.CELL_REFERENCE, 0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExcelFormulaParser.RULE_functionCall;
    }

	ABS() {
	    return this.getToken(ExcelFormulaParser.ABS, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	AVERAGE() {
	    return this.getToken(ExcelFormulaParser.AVERAGE, 0);
	};

	argumentList() {
	    return this.getTypedRuleContext(ArgumentListContext,0);
	};

	COUNT() {
	    return this.getToken(ExcelFormulaParser.COUNT, 0);
	};

	IF() {
	    return this.getToken(ExcelFormulaParser.IF, 0);
	};

	MAX() {
	    return this.getToken(ExcelFormulaParser.MAX, 0);
	};

	MIN() {
	    return this.getToken(ExcelFormulaParser.MIN, 0);
	};

	SUM() {
	    return this.getToken(ExcelFormulaParser.SUM, 0);
	};

	VLOOKUP() {
	    return this.getToken(ExcelFormulaParser.VLOOKUP, 0);
	};

	INDEX() {
	    return this.getToken(ExcelFormulaParser.INDEX, 0);
	};

	MATCH() {
	    return this.getToken(ExcelFormulaParser.MATCH, 0);
	};

	CONCATENATE() {
	    return this.getToken(ExcelFormulaParser.CONCATENATE, 0);
	};

	TEXT() {
	    return this.getToken(ExcelFormulaParser.TEXT, 0);
	};

	TODAY() {
	    return this.getToken(ExcelFormulaParser.TODAY, 0);
	};

	NOW() {
	    return this.getToken(ExcelFormulaParser.NOW, 0);
	};

	LOG() {
	    return this.getToken(ExcelFormulaParser.LOG, 0);
	};

	EXP() {
	    return this.getToken(ExcelFormulaParser.EXP, 0);
	};


}



class ArgumentListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExcelFormulaParser.RULE_argumentList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};


}




ExcelFormulaParser.FormulaContext = FormulaContext; 
ExcelFormulaParser.ExpressionContext = ExpressionContext; 
ExcelFormulaParser.AtomContext = AtomContext; 
ExcelFormulaParser.FunctionCallContext = FunctionCallContext; 
ExcelFormulaParser.ArgumentListContext = ArgumentListContext; 
