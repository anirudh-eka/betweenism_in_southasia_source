// Generated by psc version 0.8.0.0
"use strict";
var Prelude = require("Prelude");
var Control_Biapplicative = require("Control.Biapplicative");
var Control_Biapply = require("Control.Biapply");
var Data_Bifunctor = require("Data.Bifunctor");
var Join = (function () {
    function Join(value0) {
        this.value0 = value0;
    };
    Join.create = function (value0) {
        return new Join(value0);
    };
    return Join;
})();
var runJoin = function (v) {
    return v.value0;
};
var joinFunctor = function (dictBifunctor) {
    return new Prelude.Functor(function (f) {
        return Prelude["<$>"](Prelude.functorFn)(Join.create)(function ($12) {
            return Data_Bifunctor.bimap(dictBifunctor)(f)(f)(runJoin($12));
        });
    });
};
var joinApply = function (dictBiapply) {
    return new Prelude.Apply(function () {
        return joinFunctor(dictBiapply["__superclass_Data.Bifunctor.Bifunctor_0"]());
    }, function (v) {
        return function (v1) {
            return new Join(Control_Biapply["<<*>>"](dictBiapply)(v.value0)(v1.value0));
        };
    });
};
var joinApplicative = function (dictBiapplicative) {
    return new Prelude.Applicative(function () {
        return joinApply(dictBiapplicative["__superclass_Control.Biapply.Biapply_0"]());
    }, function (a) {
        return new Join(Control_Biapplicative.bipure(dictBiapplicative)(a)(a));
    });
};
module.exports = {
    Join: Join, 
    runJoin: runJoin, 
    joinFunctor: joinFunctor, 
    joinApply: joinApply, 
    joinApplicative: joinApplicative
};
