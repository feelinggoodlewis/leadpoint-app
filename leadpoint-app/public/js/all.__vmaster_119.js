!function() {
    var t = !1,
        n = /xyz/.test(function() {
            xyz
        }) ? /\b_super\b/ : /.*/;
    this.Class = function() {}, Class.extend = function(i) {
        function s() {
            !t && this.init && this.init.apply(this, arguments)
        }
        var e = this.prototype;
        t = !0;
        var r = new this;
        t = !1;
        for (var o in i) r[o] = "function" == typeof i[o] && "function" == typeof e[o] && n.test(i[o]) ? function(t, n) {
            return function() {
                var i = this._super;
                this._super = e[t];
                var s = n.apply(this, arguments);
                return this._super = i, s
            }
        }(o, i[o]) : i[o];
        return s.prototype = r, s.constructor = s, s.extend = arguments.callee, s
    }
}();
var FS = Class.extend();
FS.analytics = {
    init: function(n) {
        "function" == typeof ga && ga("create", n), window.optimizely = window.optimizely || [], window.optimizely.push("activateUniversalAnalytics")
    },
    activateAdvertiserFeatures: function() {
        ga("require", "displayfeatures")
    },
    trackPageview: function(n) {
        "function" == typeof ga && ga("send", "pageview", n)
    },
    trackCustomVars: function() {
        "function" == typeof ga && (ga("set", "dimension1", window.sharedId), ga("set", "dimension2", window.viewType), ga("set", "dimension3", window.pageType), ga("set", "dimension4", window.formFlowConfigId), ga("set", "dimension5", window.irMpId))
    },
    trackSlideEvent: function(n, i) {
        FS.analytics.trackPageview(window.virtualPageviewUrl + "&p=" + n + "&slide=" + i), $.post(window.virtualPageviewUrl, {
            "slide-change": !0,
            slideGroup: n,
            slideIndex: i
        })
    },
    trackFieldError: function(n, i) {
        var e = null != i && "" !== i ? 1 : null;
        FS.analytics.doEvent("fieldError", "field_" + n, i, e)
    },
    trackLinkOutClick: function(n, i) {
        FS.analytics.doEvent("linkOutClick", "linkOut_" + n, i, null)
    },
    trackPopWindow: function(n, i, e) {
        FS.analytics.doEvent("popWindow_" + n, "popTrigger_" + i, e, null)
    },
    trackLeadEvent: function(n, i, e) {
        FS.analytics.doEvent("lead_" + n, "leadStatus_" + i, e, null)
    },
    trackSignUpConversion: function(n, i) {
        FS.analytics.doEvent("signup_" + n, i, 1, 1)
    },
    isInterstitial: function() {
        return "INTERSTITIAL" === window.formFlowPageType
    },
    doEvent: function(n, i, e, t) {
        "function" == typeof ga && ga("send", "event", n, i, e, t)
    }
};
HttpClient = function() {
    this.post = function() {}, this.postUsingAjax = function(t, n, o, i, a) {
        $.ajax({
            method: n,
            url: o,
            data: i,
            context: t
        }).done(a)
    }
};
!function(o) {
    function t(o, t) {
        if (!(o.originalEvent.touches.length > 1)) {
            o.preventDefault();
            var e = o.originalEvent.changedTouches[0],
                u = document.createEvent("MouseEvents");
            u.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), o.target.dispatchEvent(u)
        }
    }
    if (o.support.touch = "ontouchend" in document, o.support.touch) {
        var e, u = o.ui.mouse.prototype,
            n = u._mouseInit,
            c = u._mouseDestroy;
        u._touchStart = function(o) {
            var u = this;
            !e && u._mouseCapture(o.originalEvent.changedTouches[0]) && (e = !0, u._touchMoved = !1, t(o, "mouseover"), t(o, "mousemove"), t(o, "mousedown"))
        }, u._touchMove = function(o) {
            e && (this._touchMoved = !0, t(o, "mousemove"))
        }, u._touchEnd = function(o) {
            e && (t(o, "mouseup"), t(o, "mouseout"), this._touchMoved || t(o, "click"), e = !1)
        }, u._mouseInit = function() {
            var t = this;
            t.element.bind({
                touchstart: o.proxy(t, "_touchStart"),
                touchmove: o.proxy(t, "_touchMove"),
                touchend: o.proxy(t, "_touchEnd")
            }), n.call(t)
        }, u._mouseDestroy = function() {
            var t = this;
            t.element.unbind({
                touchstart: o.proxy(t, "_touchStart"),
                touchmove: o.proxy(t, "_touchMove"),
                touchend: o.proxy(t, "_touchEnd")
            }), c.call(t)
        }
    }
}(jQuery);
var refiHeaderText = "Refinance Rates at 2.250% (3.163% APR)",
    refiSubHeaderText = "Lock in Your Low Rate!",
    newhomeHeaderText = "Mortgage Rates at 2.250% (3.163% APR)",
    newhomeSubHeaderText = "Get a Mortgage Quote in 30 Seconds";

Field = Class.extend({
    init: function(e, i, t) {
        this.fieldName = e.fieldName, this.stateKnown = !1, this.valid = !1, this.visited = !1, this.pendingValidation = !1, this.fieldType = void 0 !== e.fieldType && this.isValidInputType(e.fieldType) ? e.fieldType : "hidden", this.fieldClasses = void 0 !== e.fieldClasses ? e.fieldClasses : "", this.parentElement = i, this.fieldDefaultValue = this.getPrepopulatedOrDefaultValue(e), this.labelText = void 0 !== e.labelText ? e.labelText : "", this.labelClasses = void 0 !== e.labelClasses ? e.labelClasses : "", this.fieldDivClasses = void 0 !== e.fieldDivClasses ? e.fieldDivClasses : "", this.fieldLabelPairCssClasses = void 0 !== e.fieldLabelPairCssClasses ? e.fieldLabelPairCssClasses : "", this.labelDivClass = void 0 !== e.labelDivClass ? e.labelDivClass : "", this.fieldDivId = "FIELD-BODY-" + this.fieldName, this.labelDivId = "FIELD-LABEL-" + this.fieldName, this.fieldMaxLength = void 0 !== e.fieldMaxLength ? e.fieldMaxLength : "", this.placeholder = void 0 !== e.placeholder ? e.placeholder : "", this.extraAttributes = void 0 !== e.extraAttributes ? e.extraAttributes : [], this.callBack = t, this.fieldLabelPairDivId = this.generateNewParentId(), this.fieldSouthTextId = this.fieldName + "_SOUTH_TEXT", this.fieldSouthText = void 0 !== e.fieldSouthText ? e.fieldSouthText : "", this.fieldNorthTextId = this.fieldName + "_NORTH_TEXT", this.fieldNorthText = void 0 !== e.fieldNorthText ? e.fieldNorthText : "", this.fieldInlineCss = void 0 !== e.fieldInlineCss ? e.fieldInlineCss : "", this.virtualPageviewUrl = void 0 !== e.context.virtualPageviewUrl ? e.context.virtualPageviewUrl : "/?", this.ffsid = void 0 !== e.context.ffsid ? e.context.ffsid : "", this.hideOnCreate = void 0 !== e.hideOnCreate && e.hideOnCreate, this.VALIDATE_ELEMENT_PREFIX = "validateelement", this.requiredField = void 0 !== e.requiredField && e.requiredField, this.requiredFieldErrMessage = void 0 !== e.requiredFieldErrMessage ? e.requiredFieldErrMessage : this.getDefaultRequiredFieldText(), this.validate = void 0 === e.validate || e.validate, this.errorMessageLocation = void 0 !== e.errorMessageLocation ? e.errorMessageLocation : "TOP", this.errorMessageContId = "error-message-" + this.fieldName, this.skipDefaultValue = void 0 !== e.skipDefaultValue ? e.skipDefaultValue : this.getSkipDefaultValueSetting(e), self[this.fieldName] = this, void 0 !== e.shouldCreateParent && 1 == e.shouldCreateParent && (this.parentElement = this.createAppendFieldLabelPairDiv()), this.hideOnCreate && $(this.parentElement).hide()
    },
    getSkipDefaultValueSetting: function(e) {
        return void 0 !== e.context && void 0 !== e.context.fieldValues && void 0 !== e.context.fieldValues.LP_ORIGINATING_LEAD && null !== e.context.fieldValues.LP_ORIGINATING_LEAD && "null" !== e.context.fieldValues.LP_ORIGINATING_LEAD && "true" === e.context.fieldValues.LP_ORIGINATING_LEAD.toLowerCase()
    },
    getDefaultRequiredFieldText: function() {
        return this.labelText + " is required"
    },
    getPrepopulatedOrDefaultValue: function(e) {
        return void 0 !== e.context && void 0 !== e.context.fieldValues && void 0 !== e.context.fieldValues[this.fieldName] && null !== e.context.fieldValues[this.fieldName] && "null" !== e.context.fieldValues[this.fieldName] ? e.context.fieldValues[this.fieldName] : void 0 !== e.defaultValue ? e.defaultValue : ""
    },
    isValidInputType: function(e) {
        return "text" == e.toLowerCase() || "checkbox" == e.toLowerCase() || "email" == e.toLowerCase() || "number" == e.toLowerCase() || "date" == e.toLowerCase() || "hidden" == e.toLowerCase() || "tel" == e.toLowerCase() || "radio" == e.toLowerCase()
    },
    setValid: function(e) {
        this.valid = e
    },
    isValid: function() {
        return this.valid
    },
    setStateKnown: function(e) {
        this.stateKnown = e
    },
    markVisited: function() {
        this.visited = !0
    },
    val: function() {
        return $("#" + this.fieldName).val()
    },
    doValidate: function() {
        if (this.markVisited(), this.setValid(!1), this.setStateKnown(!1), this.setPendingValidation(!0), !this.validate) return void this.setFieldValid();
        if (1 != this.requiredField || this.val()) data = "estprg=1&single-field-validation=true&validationName=" + this.fieldName + "&validationValue=" + this.val() + "&" + this.fieldName + "=" + this.val() + "&ffsid=" + this.ffsid, httpClient.postUsingAjax(this, "POST", this.virtualPageviewUrl, data, this.onValidationComplete);
        else {
            var e = {
                result: {
                    invalid: !0,
                    message: this.requiredFieldErrMessage
                }
            };
            this.onValidationComplete(e)
        }
    },
    trackFirstField: function() {
        data = "estprg=1&single-field-validation=true&validationName=" + this.fieldName + "&validationValue=" + this.val() + "&" + this.fieldName + "=" + this.val() + "&ffsid=" + this.ffsid, httpClient.postUsingAjax(this, "POST", this.virtualPageviewUrl, data, function() {})
    },
    onValidationComplete: function(e) {

        this.markVisited(), e.result.invalid ? (this.setValid(!1), this.setErrorMessage(e.result.message), this.showValidationError(!0)) : (this.setValid(!0), this.setErrorMessage(""), this.showValidationError(!1)), this.setPendingValidation(!1), this.setStateKnown(!0), null != this.callBack && this.callBack(), this.removePlaceHolder()
    },
    isPendingValidation: function() {
        return this.pendingValidation
    },
    isStateKnown: function() {
        return this.stateKnown = this.stateKnown
    },
    isVisited: function() {
        return this.visited
    },
    setPendingValidation: function(e) {
        this.pendingValidation = e
    },
    createAppendFieldBodyDiv: function() {
        $(this.parentElement).append("<div class='" + this.fieldDivClasses + "' id='" + this.fieldDivId + "'></div>")
    },
    createAppendFieldLabelDiv: function() {
        $(this.parentElement).append("<div class='" + this.labelDivClass + "' id='" + this.labelDivId + "'></div>")
    },
    createAppendFieldLabel: function() {
        $("#" + this.labelDivId).append("<label class='" + this.labelClasses + "' for='" + this.fieldName + "' id='" + this.fieldName + "_LABEL'>" + this.labelText + "</label>")
    },
    createAppendField: function() {
        this.fieldNorthText && this.createAppendFieldNorthText(), $("#" + this.fieldDivId).append("<input type='" + this.fieldType + "' id='" + this.fieldName + "' name='" + this.fieldName + "' value='" + this.fieldDefaultValue + "' maxlength='" + this.fieldMaxLength + "' class='" + this.fieldClasses + "' " + this.generateExtraAttributes() + " placeholder='" + this.placeholder + "'>"), this.fieldSouthText && this.createAppendFieldSouthText()
    },
    createAppendFieldLabelPairDiv: function() {
        return $(this.parentElement).append("<div id='" + this.fieldLabelPairDivId + "' class='field-label-pair " + this.fieldLabelPairCssClasses + "' ></div>"), $("#" + this.fieldLabelPairDivId)
    },
    createAppendLabelAndField: function() {
        this.createAppendFieldLabelDiv(), this.createAppendFieldLabel(), this.createAppendFieldBodyDiv(), this.createAppendField(), this.addFieldOnChangeAction(), this.removePlaceHolderOnFocus(), this.validate || this.setValidOnCreate()
    },
    createAppendFieldNorthText: function() {
        $("#" + this.fieldDivId).append("<div id='" + this.fieldNorthTextId + "' class='north-text'><label id='" + this.fieldNorthTextId + "_LABEL'>" + this.fieldNorthText + "</label></div>")
    },
    createAppendFieldSouthText: function() {
        $("#" + this.fieldDivId).append("<div id='" + this.fieldSouthTextId + "' class='south-text'><label id='" + this.fieldSouthTextId + "_LABEL'>" + this.fieldSouthText + "</label></div>")
    },
    generateExtraAttributes: function() {
        var e = "";
        if (this.extraAttributes.length > 0)
            for (i = 0; i < this.extraAttributes.length; i++) e = e + this.extraAttributes[i].attributeName + "='" + this.extraAttributes[i].attributeValue + "' ";
        return e
    },
    addFieldOnChangeAction: function() {
        $("#" + this.fieldName).on("blur", function() {
            self[this.id].doValidate()
        })
    },
    removePlaceHolderOnFocus: function() {
        $("#" + this.fieldName).on("focus", function() {
            self[this.id].removePlaceHolder()
        })
    },
    setErrorMessage: function(e) {
        var i = $("#" + this.errorMessageContId);
        if (i.length > 0) i.html(e);
        else {
            var t = $("#" + this.fieldName),
                s = void 0 !== t.attr(this.VALIDATE_ELEMENT_PREFIX) ? $("#" + t.attr(this.VALIDATE_ELEMENT_PREFIX)) : t.parent().parent(),
                a = "<div id='" + this.errorMessageContId + "' class='error-message loc-" + this.errorMessageLocation.toLowerCase() + "'>" + e + "</div>";
            "TOP" == this.errorMessageLocation.toUpperCase() ? s.prepend(a) : s.append(a)
        }
    },
    showValidationError: function(e) {
        var i = $("#" + this.fieldName),
            t = void 0 !== i.attr(this.VALIDATE_ELEMENT_PREFIX) ? $("#" + i.attr(this.VALIDATE_ELEMENT_PREFIX)) : i.parent().parent();
        if (e) {
            t.addClass("error"), t.removeClass("valid");
            var s = $(t).find(".error-message").height();
            $(t).find(".padding-on-validate").css("padding-top", s + "px"), $("#" + this.errorMessageContId).show()
        } else t.removeClass("error"), t.addClass("valid"), $(t).find(".padding-on-validate").css("padding-top", ""), $("#" + this.errorMessageContId).hide()
    },
    generateNewParentId: function() {
        return $(this.parentElement).attr("id") + "_" + this.fieldName + "_FIELD_LABEL_PAIR"
    },
    clearFieldAndValidate: function() {
        $("#" + this.fieldName).val(""), this.doValidate()
    },
    removePlaceHolder: function() {
        $("#" + this.fieldName).attr("placeholder") && $("#" + this.fieldName).removeAttr("placeholder")
    },
    setFieldValid: function() {
        var e = {
            result: {
                invalid: !1,
                message: ""
            }
        };
        this.onValidationComplete(e)
    },
    setValidOnCreate: function() {
        this.setValid(!0), this.setStateKnown(!0), this.markVisited(!0)
    }
});
Slider = Field.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.displayValues = e.displayValues, this.rangeValues = e.rangeValues, this.SLIDER_POSTFIX = "_SLIDER", this.SLIDER_DISPLAY_POSTFIX = "_DISPLAY", this.SLIDER_DISPLAY_SMALL_POSTFIX = "_DISPLAY_SMALL", this.sliderId = this.fieldName + this.SLIDER_POSTFIX, this.onSliderUpdate = void 0 !== e.onSliderUpdate ? e.onSliderUpdate : function() {}, this.sliderSouthText = void 0 !== e.sliderSouthText ? e.sliderSouthText : "", this.defaultSelectedIndex = void 0 !== e.selectedIndex ? e.selectedIndex : 0, this.sliderSouthTextId = this.fieldName + "_SLIDER_SOUTH_TEXT", this.fieldDefaultValue = void 0 !== e.defaultValue ? e.defaultValue : "", this.canGetIndexHighestValue = void 0 === e.canGetIndexHighestValue || e.canGetIndexHighestValue, self[this.sliderId] = this, this.createSliderDivAndDisplaySpan(), this.defaultPrePopSelectedIndex = this.getPrepopulatedOrDefaultSelectedIndex(e), this.drawSlider(this.defaultPrePopSelectedIndex)
    },
    getIndexOfNextHighestValueInRange: function(e, t) {
        t || (t = this.fieldDefaultValue), e || (e = this.rangeValues);
        for (var i = 0; i < e.length; i++)
            if (parseInt(e[i]) >= t) return i;
        return this.rangeValues.length - 1
    },
    getPrepopulatedOrDefaultSelectedIndex: function(e) {
        var t = this.defaultSelectedIndex;
        return void 0 !== e.context && void 0 !== e.context.fieldValues && void 0 !== e.context.fieldValues[this.fieldName] && (this.fieldDefaultValue = e.context.fieldValues[this.fieldName], t = $.inArray(e.context.fieldValues[this.fieldName], this.rangeValues)), t < 0 && this.canGetIndexHighestValue && (t = this.getIndexOfNextHighestValueInRange()), void 0 !== e.selectedIndex && t <= 0 && (t = e.selectedIndex), t < 0 && (t = 0), t
    },
    drawSlider: function(e) {
        $("#" + this.sliderId).slider({
            range: "min",
            max: this.rangeValues.length - 1,
            min: 0,
            value: e,
            slide: function(e, t) {
                $("#" + self[this.id].fieldName + self[this.id].SLIDER_DISPLAY_SMALL_POSTFIX).html(self[this.id].displayValues[t.value]), $("#" + self[this.id].fieldName + self[this.id].SLIDER_DISPLAY_POSTFIX).html(self[this.id].displayValues[t.value]), $("#" + self[this.id].fieldName).val(self[this.id].rangeValues[t.value]), self[this.id].onSliderUpdate()
            }
        }), this.setDefaultValues(e), this.onSliderUpdate()
    },
    createSliderDivAndDisplaySpan: function() {
        this.createAppendLabelAndField(), $(this.parentElement).append("<div id='" + this.fieldName + this.SLIDER_DISPLAY_SMALL_POSTFIX + "' class='visible-xs'></div><div id='" + this.fieldName + this.SLIDER_POSTFIX + "'></div><div id='" + this.fieldName + this.SLIDER_DISPLAY_POSTFIX + "' class='hidden-xs'></div>"), this.sliderSouthText && $(this.parentElement).append("<div id='" + this.sliderSouthTextId + "' class='slider-south-text'><label id='" + this.sliderSouthTextId + "_LABEL'>" + this.sliderSouthText + "</label></div>")
    },
    setDefaultValues: function(e) {
        $("#" + this.fieldName).val(this.rangeValues[e]), $("#" + this.fieldName + this.SLIDER_DISPLAY_SMALL_POSTFIX).html(this.displayValues[e]), $("#" + this.fieldName + this.SLIDER_DISPLAY_POSTFIX).html(this.displayValues[e])
    },
    updateSlider: function(e, t, i, s, a) {
        this.displayValues = e, this.rangeValues = t, $("#" + this.sliderId).slider("option", "max", s), $("#" + this.sliderId).slider("option", "min", i), $("#" + this.sliderId).slider("option", "value", a), this.drawSlider(a)
    },
    setDisplayAndValueToFirstValue: function() {
        $("#" + this.fieldName + this.SLIDER_DISPLAY_SMALL_POSTFIX).html(this.displayValues[0]), $("#" + this.fieldName + this.SLIDER_DISPLAY_POSTFIX).html(this.displayValues[0])
    }
}), CreditGradeSlider = Slider.extend({
    init: function(e, t, i) {
        this._super(e, t, i)
    },
    createSliderDivAndDisplaySpan: function() {
        this.createAppendLabelAndField(), this.CREDIT_GRADE_LABELS_POSTFIX = "_DISPLAY_LABELS", this.CREDIT_GRADE_LABELS_SMALL_POSTFIX = "_DISPLAY_LABELS_SMALL";
        var e = this.generateCreditGradeSliderLabels();
        $(this.parentElement).append("<div id='" + this.fieldName + this.SLIDER_DISPLAY_SMALL_POSTFIX + "' class='visible-xs'></div><div id='" + this.fieldName + this.CREDIT_GRADE_LABELS_SMALL_POSTFIX + "' class='visible-xs'>" + e + "<div class='clear'></div></div><div id='" + this.fieldName + this.SLIDER_POSTFIX + "'></div><div id='" + this.fieldName + this.SLIDER_DISPLAY_POSTFIX + "' class='hidden-xs'></div><div id='" + this.fieldName + this.CREDIT_GRADE_LABELS_POSTFIX + "' class='hidden-xs'>" + e + "<div class='clear'></div></div></div>"), this.sliderSouthText && $(this.parentElement).append("<div id='" + this.sliderSouthTextId + "' class='slider-south-text'><label id='" + this.sliderSouthTextId + "_LABEL'>" + this.sliderSouthText + "</label></div>")
    },
    generateCreditGradeSliderLabels: function() {
        for (var e = "", t = 0; t < this.displayValues.length; t++) e += "<div class='credit-grade-slider-labels' id='creditgrade-slider-value-" + t + "'>", e += this.displayValues[t], e += "</div>";
        return e
    }
}), ButtonInput = Field.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.buttons = e.buttons, this.BUTTON_GROUP_OUTER_POSFIX = "_OUTER_GROUP", this.BUTTON_GROUP_INNER_POSFIX = "_INNER_GROUP", this.BUTTON_DIV_POSTFIX = "-group", this.buttonOuterGroupClasses = void 0 !== e.buttonOuterGroupClasses ? e.buttonOuterGroupClasses : "", this.buttonInnerGroupClasses = void 0 !== e.buttonInnerGroupClasses ? e.buttonInnerGroupClasses : "", this.buttonsSouthText = void 0 !== e.buttonsSouthText ? e.buttonsSouthText : "", this.buttonsSouthTextId = this.fieldName + "_BUTTONS_SOUTH_TEXT", this.allowNextButtonShowHide = void 0 !== e.allowNextButtonShowHide && e.allowNextButtonShowHide, self[this.fieldName] = this
    },
    createAppendButtons: function() {
        void 0 !== this.labelText && "" !== this.labelText && (this.createAppendFieldLabelDiv(), this.createAppendFieldLabel()), this.createAppendFieldBodyDiv(), this.createAppendField(), this.createAppendButtonOuterGroupDiv(), this.createAppendButtonInnerGroupDiv(), this.prepopulatedButtonId = "";
        for (var e = 0; e < this.buttons.length; e++) this.createAppendButtonDiv(this.buttons[e].buttonId, this.buttons[e].buttonDivClasses), this.createAppendButton(this.buttons[e].buttonId, this.buttons[e].buttonClasses, this.buttons[e].buttonText, this.buttons[e].buttonValue), this.addOnClickAction(this.buttons[e].buttonId, this.buttons[e].buttonText), this.fieldDefaultValue.toLowerCase() == this.buttons[e].buttonValue.toLowerCase() && (this.prepopulatedButtonId = this.buttons[e].buttonId);
        this.buttonsSouthText && this.createAppendButtonsSouthText(), this.addOnLoadSetPrePopValFunction()
    },
    setSelectValOnLoad: function() {
        this.prepopulatedButtonId && this.updateSelectedValue($("#" + this.prepopulatedButtonId), !0)
    },
    addOnLoadSetPrePopValFunction: function() {
        self.onButtonLoadfunctions || (self.onButtonLoadfunctions = [], $(document).ready(function() {
            if (self.onButtonLoadfunctions && self.onButtonLoadfunctions.length > 0)
                for (var e = 0; e < self.onButtonLoadfunctions.length; e++) self.onButtonLoadfunctions[e].setSelectValOnLoad()
        })), self.onButtonLoadfunctions.push(this)
    },
    createAppendButtonOuterGroupDiv: function() {
        $("#" + this.fieldDivId).append("<div class='" + this.buttonOuterGroupClasses + "' id='" + this.fieldName + this.BUTTON_GROUP_OUTER_POSFIX + "'></div>")
    },
    createAppendButtonInnerGroupDiv: function() {
        $("#" + this.fieldName + this.BUTTON_GROUP_OUTER_POSFIX).append("<div class='" + this.buttonInnerGroupClasses + "' id='" + this.fieldName + this.BUTTON_GROUP_INNER_POSFIX + "'></div>")
    },
    createAppendButtonDiv: function(e, t) {
        $("#" + this.fieldName + this.BUTTON_GROUP_INNER_POSFIX).append("<div class='" + t + "' id='" + e + this.BUTTON_DIV_POSTFIX + "'></div>")
    },
    createAppendButton: function(e, t, i, s) {
        $("#" + e + this.BUTTON_DIV_POSTFIX).append("<button type='button' id='" + e + "' class='" + t + "' target='" + this.fieldName + "' selectedValue='" + s + "'>" + i + "</button>")
    },
    createAppendButtonsSouthText: function() {
        $("#" + this.fieldName + this.BUTTON_GROUP_INNER_POSFIX).append("<div id='" + this.buttonsSouthTextId + "' class='buttons-south-text'><label id='" + this.buttonsSouthTextId + "_LABEL'>" + this.buttonsSouthText + "</label></div>")
    },
    showHide: function(e) {
        e ? ($(this.parentElement).show(), $("html, body").animate({
            scrollTop: $(this.parentElement).offset().top
        }, "fast")) : $(this.parentElement).hide()
    },
    getButtonIdBySelectedValue: function(e) {
        for (var t = 0; t < this.buttons.length; t++)
            if (this.buttons[t].buttonValue == e) return this.buttons[t].buttonId;
        return ""
    },
    setSelectVal: function(e) {
        var t = this.getButtonIdBySelectedValue(e);
        t && $("#" + t).trigger("click")
    },
    updateSelectedValue: function(e) {
        var t = $(e).parent().parent().find(".selected");
        t && t.removeClass("selected"), $(e).addClass("selected");
        var i = $(e).attr("target");
        $("#" + i).val($(e).attr("selectedValue"))
    },
    addOnClickAction: function(e, t) {
        $("#" + e).on("click", function(e) {
            var t = $(this).attr("target");
            self[t].updateSelectedValue(this), self[t].doValidate()
        })
    }
}), TileInput = ButtonInput.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.BUTTON_IMAGE_TEXT_POSTFIX = "-text", this.tileInputId = this.fieldName + "-TILE", this.buttonsNorthText = void 0 !== e.buttonsNorthText ? e.buttonsNorthText : "", this.buttonsNorthTextId = this.fieldName + "_BUTTONS_NORTH_TEXT", this.buttonsSouthText = void 0 !== e.buttonsSouthText ? e.buttonsSouthText : "", this.buttonsSouthTextId = this.fieldName + "_BUTTONS_SOUTH_TEXT", self[this.tileInputId] = this
    },
    createAppendButtonDiv: function(e, t, i) {
        $("#" + this.fieldName + this.BUTTON_GROUP_INNER_POSFIX).append("<div class='" + t + "' id='" + e + this.BUTTON_DIV_POSTFIX + "' target='" + this.fieldName + "' selectedValue='" + i + "'></div>")
    },
    createAppendTileText: function(e, t) {
        $("#" + e + this.BUTTON_DIV_POSTFIX).append("<div id='" + e + this.BUTTON_IMAGE_TEXT_POSTFIX + "'><label>" + t + "</label></div>")
    },
    createAppendButton: function(e, t, i, s) {
        $("#" + e + this.BUTTON_DIV_POSTFIX).append("<button type='button' id='" + e + "' class='" + t + "' target='" + this.fieldName + "' selectedValue='" + s + "'></button>"), this.createAppendTileText(e, i)
    },
    createAppendTiles: function() {
        for (this.createAppendFieldBodyDiv(), this.createAppendField(), this.createAppendButtonOuterGroupDiv(), this.createAppendButtonInnerGroupDiv(), this.buttonsNorthText && this.createAppendButtonsNorthText(), i = 0; i < this.buttons.length; i++) this.createAppendButtonDiv(this.buttons[i].buttonId, this.buttons[i].buttonDivClasses, this.buttons[i].buttonValue), this.createAppendButton(this.buttons[i].buttonId, this.buttons[i].buttonClasses, this.buttons[i].buttonText, this.buttons[i].buttonValue), this.addOnClickAction(this.buttons[i].buttonId, this.buttons[i].buttonText), this.fieldDefaultValue.toLowerCase() == this.buttons[i].buttonValue.toLowerCase() && (this.prepopulatedButtonId = this.buttons[i].buttonId);
        this.prepopulatedButtonId && this.updateSelectedValue($("#" + this.prepopulatedButtonId + this.BUTTON_DIV_POSTFIX)), this.buttonsSouthText && this.createAppendButtonsSouthText()
    },
    updateSelectedValue: function(e) {
        var t = $(e).parent().find(".selected");
        t && t.removeClass("selected"), $(e).addClass("selected");
        var i = $(e).attr("target");
        $("#" + i).val($(e).attr("selectedValue"))
    },
    addOnClickAction: function(e, t) {
        $("#" + e + this.BUTTON_DIV_POSTFIX).on("click", function(e) {
            var t = $(this).attr("target");
            self[t].updateSelectedValue(this), self[t].doValidate()
        })
    },
    createAppendButtonsSouthText: function() {
        $("#" + this.fieldName + this.BUTTON_GROUP_INNER_POSFIX).append("<div id='" + this.buttonsSouthTextId + "' class='buttons-south-text'><label id='" + this.buttonsSouthTextId + "_LABEL'>" + this.buttonsSouthText + "</label></div>")
    },
    createAppendButtonsNorthText: function() {
        $("#" + this.fieldName + this.BUTTON_GROUP_INNER_POSFIX).append("<div id='" + this.buttonsNorthTextId + "' class='buttons-north-text'><label id='" + this.buttonsNorthTextId + "_LABEL'>" + this.buttonsNorthText + "</label></div>")
    }
}), SpecHomeButtonInput = ButtonInput.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.slideManager = void 0 !== e.slideManager ? e.slideManager : origin, this.purchaseHomeFieldName = void 0 !== e.purchaseHomeFieldName ? e.purchaseHomeFieldName : "PURCHASE_CONTRACT"
    },
    updateSelectedValue: function(e, t) {
        var i = $(e).parent().parent().find(".selected");
        i && i.removeClass("selected"), $(e).addClass("selected");
        var s = $(e).attr("target");
        $("#" + s).val($(e).attr("selectedValue")), t || this.showHidePurchaseHome()
    },
    showHidePurchaseHome: function() {
        1 == this.allowNextButtonShowHide && this.slideManager.hideNextButton(), self[this.purchaseHomeFieldName].showHide("yes" == $("#" + this.fieldName).val().toLowerCase()), "no" == $("#" + this.fieldName).val().toLowerCase() && self[this.purchaseHomeFieldName].setSelectVal("No"), "no" == $("#" + this.fieldName).val().toLowerCase() ? (self[this.purchaseHomeFieldName].setSelectVal("No"), 1 == this.allowNextButtonShowHide && this.slideManager.setFieldGroupShowNextButton(!1, this.fieldName), this.setFieldValid(), this.slideManager.forceGoForward()) : 1 == this.allowNextButtonShowHide && (this.slideManager.setFieldGroupShowNextButton(!0, this.fieldName), this.slideManager.showNextButton())
    }
}), ProductTileInput = TileInput.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.productPageHeaderText = void 0 !== e.productPageHeaderText ? e.productPageHeaderText : "", this.productPageHeaderId = void 0 !== e.productPageHeaderId ? e.productPageHeaderId : "", this.productPageSubHeaderId = void 0 !== e.productPageSubHeaderId ? e.productPageSubHeaderId : "", this.productPageHeadSubTexts = void 0 !== e.productPageHeadSubTexts ? e.productPageHeadSubTexts : [], this.estValSliderId = void 0 !== e.estValSliderId ? e.estValSliderId : "EST_VAL", this.refiProductDefaultSelectedIndex = void 0 !== e.refiProductDefaultSelectedIndex ? e.refiProductDefaultSelectedIndex : 24, this.newHomeProductDefaultSelectedIndex = void 0 !== e.newHomeProductDefaultSelectedIndex ? e.newHomeProductDefaultSelectedIndex : 23
    },
    setProductPageHeader: function() {
        for (var e = 0; e < this.productPageHeadSubTexts.length; e++) this.productPageHeadSubTexts[e].productId == $("#" + this.fieldName).val() && ($("#" + this.productPageHeaderId).html(this.productPageHeadSubTexts[e].productPageHeaderText), $("#" + this.productPageSubHeaderId).html(this.productPageHeadSubTexts[e].productPageSubHeaderText))
    },
    createAppendTiles: function() {
        for (this.createAppendFieldBodyDiv(), this.createAppendField(), this.createAppendButtonOuterGroupDiv(), this.createAppendButtonInnerGroupDiv(), this.buttonsNorthText && this.createAppendButtonsNorthText(), i = 0; i < this.buttons.length; i++) this.createAppendButtonDiv(this.buttons[i].buttonId, this.buttons[i].buttonDivClasses, this.buttons[i].buttonValue), this.createAppendButton(this.buttons[i].buttonId, this.buttons[i].buttonClasses, this.buttons[i].buttonText, this.buttons[i].buttonValue), this.addOnClickAction(this.buttons[i].buttonId, this.buttons[i].buttonText), this.fieldDefaultValue.toLowerCase() == this.buttons[i].buttonValue.toLowerCase() && (this.prepopulatedButtonId = this.buttons[i].buttonId);
        this.prepopulatedButtonId && this.updateSelectedValue($("#" + this.prepopulatedButtonId + this.BUTTON_DIV_POSTFIX)), this.buttonsSouthText && this.createAppendButtonsSouthText(), this.setProductPageHeader()
    },
    addOnClickAction: function(e, t) {
        $("#" + e + this.BUTTON_DIV_POSTFIX).on("click", function(e) {
            var t = $(this).attr("target");
            self[t].updateSelectedValue(this), self[t].doValidate()
        })
    }
}), SecondMortgageYesNoButtonInput = ButtonInput.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.mtgTwoFieldId = e.mtgTwoFieldId, this.mtgTwoIntFieldId = e.mtgTwoIntFieldId, this.SLIDER_POSTFIX = "_SLIDER", this.slideManager = void 0 !== e.slideManager ? e.slideManager : origin
    },
    updateSelectedValue: function(e, t) {
        var i = $(e).parent().parent().find(".selected");
        i && i.removeClass("selected"), $(e).addClass("selected");
        var s = $(e).attr("target");
        $("#" + s).val($(e).attr("selectedValue")), t || this.showHideSecondMortgage("yes" == $(e).attr("selectedValue").toLowerCase())
    },
    showHideSecondMortgage: function(e) {
        1 == this.allowNextButtonShowHide && this.slideManager.hideNextButton(), e ? ($("#" + this.mtgTwoFieldId + this.SLIDER_POSTFIX).parent().show(), $("#" + this.mtgTwoIntFieldId + this.SLIDER_POSTFIX).parent().show(), $("html, body").animate({
            scrollTop: $("#" + this.mtgTwoFieldId + this.SLIDER_POSTFIX).parent().offset().top
        }, "fast"), 1 == this.allowNextButtonShowHide && (this.slideManager.setFieldGroupShowNextButton(!0, this.fieldName), this.slideManager.showNextButton())) : (self[this.mtgTwoFieldId + this.SLIDER_POSTFIX].setDisplayAndValueToFirstValue(), self[this.mtgTwoIntFieldId + this.SLIDER_POSTFIX].setDisplayAndValueToFirstValue(), $("#" + this.mtgTwoFieldId + this.SLIDER_POSTFIX).parent().hide(), $("#" + this.mtgTwoIntFieldId + this.SLIDER_POSTFIX).parent().hide(), 1 == this.allowNextButtonShowHide && this.slideManager.setFieldGroupShowNextButton(!1, this.fieldName), this.setFieldValid(), this.slideManager.forceGoForward())
    }
}), USPhoneField = Field.extend({
    init: function(e, t, i) {
        this._super(e, t, i)
    },
    createAppendPhonefields: function() {
        void 0 !== this.labelText && "" !== this.labelText && (this.createAppendFieldLabelDiv(), this.createAppendFieldLabel()), this.createAppendFieldBodyDiv(), this.createAppendField(), $("#" + this.fieldDivId).prepend("<span class='phone-extras'>(</span><input type='tel' id='PRI_PHONE-p1' name='PRI_PHONE-p1' value='' size='3' maxlength='3' class='phone-field' target='" + this.fieldName + "'><span class='phone-extras'>)</span><input type='tel' id='PRI_PHONE-p2' name='PRI_PHONE-p2' value='' size='3' maxlength='3' class='phone-field' target='" + this.fieldName + "'> <span class='phone-extras'>-</span><input type='tel' id='PRI_PHONE-p3' name='PRI_PHONE-p3' value='' size='4' maxlength='4' class='phone-field' target='" + this.fieldName + "'>"), this.addOnChangeAction(), this.addPrepopulatedPhoneValue()
    },
    addPrepopulatedPhoneValue: function() {
        this.fieldDefaultValue && 10 == this.fieldDefaultValue.length && ($("#PRI_PHONE-p1").val(this.fieldDefaultValue.substring(0, 3)), $("#PRI_PHONE-p2").val(this.fieldDefaultValue.substring(3, 6)), $("#PRI_PHONE-p3").val(this.fieldDefaultValue.substring(6)))
    },
    addOnChangeAction: function(e, t) {
        $("#PRI_PHONE-p1,#PRI_PHONE-p2,#PRI_PHONE-p3").on("blur", function(e) {
            var t = $(this).attr("target");
            $("#" + t).val($("#PRI_PHONE-p1").val().toString() + $("#PRI_PHONE-p2").val().toString() + $("#PRI_PHONE-p3").val().toString());
            var i = $(this).parent().find(".phone-field");
            if (!$("#" + t).attr("validated"))
                for (var s = 0; s < i.length; s++)
                    if ("" == $(i[s]).val()) return;
            $("#" + t).attr("validated", !0), self[t].doValidate()
        }), $("#PRI_PHONE-p1,#PRI_PHONE-p2").keyup(function(e) {
            $(this).val().length == $(this).attr("maxlength") && ("PRI_PHONE-p1" == $(this).attr("id") ? $("#PRI_PHONE-p2").focus() : $("#PRI_PHONE-p3").focus())
        })
    }
}), SSNField = Field.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.ssnInput1Id = "SSN-p1", this.ssnInput2Id = "SSN-p2", this.ssnInput3Id = "SSN-p3"
    },
    createAppendSSNfields: function() {
        void 0 !== this.labelText && "" !== this.labelText && (this.createAppendFieldLabelDiv(), this.createAppendFieldLabel()), this.createAppendFieldBodyDiv(), this.createAppendField(), $("#" + this.fieldDivId).prepend("<div id='FIELD-BODY-INNER-" + this.fieldName + "'><input type='tel' id='" + this.ssnInput1Id + "' name='" + this.ssnInput1Id + "' value='' size='3' maxlength='3' class='ssn-field' target='" + this.fieldName + "' /><input type='tel' id='" + this.ssnInput2Id + "' name='" + this.ssnInput2Id + "' value='' size='2' maxlength='2' class='ssn-field' target='" + this.fieldName + "' /><input type='tel' id='" + this.ssnInput3Id + "' name='" + this.ssnInput3Id + "' value='' size='4' maxlength='4' class='ssn-field' target='" + this.fieldName + "' /> <div class='ssn-tooltip'><i class='fa fa-lock'></i><div class='tip' style='display:none' id='tip-SSN'>Your SSN is secure with us and is used to verify your identity. Not all lenders will receive your SSN.</div></div></div>"), this.addOnChangeAction(), this.addOnHoverChangeAction()
    },
    concatSSNValueAndValidate: function() {
        $("#" + this.fieldName).val($("#" + this.ssnInput1Id).val().toString() + $("#" + this.ssnInput2Id).val().toString() + $("#" + this.ssnInput3Id).val().toString());
        var e = $("#" + this.ssnInput3Id).parent().find(".ssn-field");
        if (!$("#" + this.fieldName).attr("validated"))
            for (var t = 0; t < e.length; t++)
                if ("" == $(e[t]).val()) return;
        $("#" + this.fieldName).attr("validated", !0), this.doValidate()
    },
    addOnChangeAction: function() {
        $("#" + this.ssnInput1Id + ",#" + this.ssnInput2Id + ",#" + this.ssnInput3Id).on("blur", function(e) {
            var t = $(this).attr("target");
            self[t].concatSSNValueAndValidate()
        }), $("#" + this.ssnInput1Id + ",#" + this.ssnInput2Id).keyup(function(e) {
            var t = $(this).attr("target");
            $(this).val().length == $(this).attr("maxlength") && ("SSN-p1" == $(this).attr("id") ? $("#" + self[t].ssnInput2Id).focus() : $("#" + self[t].ssnInput3Id).focus())
        })
    },
    clearFieldAndValidate: function() {
        $("#" + this.ssnInput1Id).val(""), $("#" + this.ssnInput2Id).val(""), $("#" + this.ssnInput3Id).val(""), $("#" + this.fieldName).val(""), this.doValidate()
    },
    addOnHoverChangeAction: function() {
        $(".ssn-tooltip").on("mousemove", function(e) {
            $("#tip-SSN").show(), $("#tip-SSN").position({
                my: "left+3 bottom+50",
                of: e,
                collision: "fit"
            })
        }), $(".ssn-tooltip").on("mouseout", function() {
            $("#tip-SSN").hide()
        })
    }
}), SelectField = Field.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.selectOptionsAsArray = e.selectOptions, this.selectFieldSouthText = void 0 !== e.selectFieldSouthText ? e.selectFieldSouthText : "", this.selectFieldSouthTextId = this.fieldName + "_SELECT_FIELD_SOUTH_TEXT", this.defaultSelectedIndex = void 0 !== e.selectedIndex ? e.selectedIndex : 0, this.selectedIndex = this.getPrepopulatedOrDefaultSelectedIndex(e), self[this.fieldName] = this, this.onSelectUpdate = void 0 !== e.onSelectUpdate ? e.onSelectUpdate : function() {}
    },
    setSelectedIndex: function() {
        $("#" + this.fieldName).prop("selectedIndex", this.selectedIndex)
    },
    getPrepopulatedOrDefaultSelectedIndex: function(e) {
        var t = this.defaultSelectedIndex;
        return void 0 !== e.context && void 0 !== e.context.fieldValues && void 0 !== e.context.fieldValues[this.fieldName] && (t = this.getIndexOfValueFromSelectOptions(e.context.fieldValues[this.fieldName], this.selectOptionsAsArray)), t < 0 && (t = this.defaultSelectedIndex), t
    },
    createAppendSelectField: function() {
        void 0 !== this.labelText && "" !== this.labelText && (this.createAppendFieldLabelDiv(), this.createAppendFieldLabel()), this.createAppendFieldBodyDiv(), $("#" + this.fieldDivId).append("<select class='select-input' name='" + this.fieldName + "' id='" + this.fieldName + "'" + this.generateExtraAttributes() + ">" + this.generateSelectOptions() + "</select>"), this.selectFieldSouthText && $("#" + this.fieldDivId).append("<div id='" + this.selectFieldSouthTextId + "' class='select-south-text'><label id='" + this.selectFieldSouthTextId + "_LABEL'>" + this.selectFieldSouthText + "</label></div>"), $(this.parentElement).append("<div class='clear'></div>"), $("#" + this.fieldName).val(this.fieldDefaultValue), this.setSelectedIndex(), this.addOnChangeAction()
    },
    generateSelectOptions: function() {
        for (var e = "", t = 0; t < this.selectOptionsAsArray.length; t++) e += "<option value='" + this.selectOptionsAsArray[t][0] + "'>" + this.selectOptionsAsArray[t][1] + "</option>";
        return e
    },
    addOnChangeAction: function() {
        $("#" + this.fieldName).on("change", function() {
            self[this.id].doValidate()
        })
    },
    updateSelectField: function(e, t) {
        var i = $("#" + this.fieldName);
        i.empty();
        for (var s = 0; s < t.length; s++) i.append($("<option></option>").attr("value", t[s][0]).text(t[s][1]));
        i.prop("selectedIndex", e), this.onSelectUpdate()
    },
    getIndexOfValueFromSelectOptions: function(e, t) {
        for (var i = 0; i < t.length; i++)
            if (!isNaN(e) && parseInt(e) == parseInt(t[i][0]) || e == t[i][0]) return i;
        return -1
    }
}), ValueAsDisplaySelectField = SelectField.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.createAppendSelectField(), this.addChangeDisplayTextToSelectValueEvent(), this.changeDefaultSelectedDisplayText()
    },
    changeDefaultSelectedDisplayText: function() {
        $("#" + this.fieldName + " option:selected").html($("#" + this.fieldName + " option:selected").attr("value"))
    },
    generateSelectOptions: function() {
        for (var e = "", t = 0; t < this.selectOptionsAsArray.length; t++) e += "<option value='" + this.selectOptionsAsArray[t][0] + "' data-text='" + this.selectOptionsAsArray[t][1] + "'>" + this.selectOptionsAsArray[t][1] + "</option>";
        return e
    },
    addOnChangeAction: function() {
        this.addChangeDisplayTextToSelectValueEvent()
    },
    addChangeDisplayTextToSelectValueEvent: function() {
        $("#" + this.fieldName).on("change mouseleave focusout", function() {
            $("#" + $(this).attr("id") + " option").each(function() {
                $(this).html($(this).attr("data-text"))
            }), $("#" + $(this).attr("id") + " option:selected").html($("#" + $(this).attr("id") + " option:selected").attr("value")), self[this.id].doValidate()
        }), $("#" + this.fieldName).on("focus", function() {
            $("#" + $(this).attr("id") + " option").each(function() {
                $(this).html($(this).attr("data-text"))
            })
        })
    }
}), EstSelectField = SelectField.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.balOneSelectFieldId = null != e.balOneSliderFieldId ? e.balOneSliderFieldId : "BAL_ONE", this.balTwoSelectFieldId = null != e.balTwoSliderFieldId ? e.balTwoSliderFieldId : "BAL_TWO", this.addCashSelectFieldId = null != e.addCashSliderFieldId ? e.addCashSliderFieldId : "ADD_CASH", this.downPmtSelectFieldId = null != e.downPmtSliderFieldId ? e.downPmtSliderFieldId : "DOWN_PMT", this.onSelectUpdate = this.updateBalOneTwoAddCashDownPmt, this.createAppendSelectField(), this.setOnLoadFunction()
    },
    addOnChangeAction: function() {
        $("#" + this.fieldName).on("change", function() {
            self[this.id].onSelectUpdate(), self[this.id].doValidate()
        })
    },
    getIndexOfNextHighestValueInRange: function() {
        for (var e = 0; e < this.this.selectOptionsAsArray.length; e++)
            if (parseInt(this.this.selectOptionsAsArray[e][0]) >= this.fieldDefaultValue) return e;
        return this.rangeValues.length - 1
    },
    setSelectedValOnLoad: function() {
        var e = $.inArray(this.fieldDefaultValue, this.rangeValues);
        e < 0 && (e = this.getIndexOfNextHighestValueInRange()), this.drawSlider(e)
    },
    changeSelectedIndex: function(e) {
        $("#" + this.fieldName).prop("selectedIndex", e), this.updateBalOneTwoAddCashDownPmt()
    },
    setOnLoadFunction: function() {
        self.estValSelectField || (self.estValSelectField = this, this.skipDefaultValue || $(document).ready(function() {
            self.estValSelectField.updateBalOneTwoAddCashDownPmt(!0)
        }))
    },
    updateBalOneTwoAddCashDownPmt: function(e) {
        var t = $("#" + this.fieldName).val();
        this.updateBalOne(t, this.selectOptionsAsArray, e), this.updateDownPmt(t, e)
    },
    updateDownPmt: function(e, t) {
        if (self[this.downPmtSelectFieldId]) {
            var i = this.generateDownPaymentSelectFieldOptions(e),
                s = 0;
            t && (s = this.getInitialSelectIndex(i, this.downPmtSelectFieldId)), i.length > 0 && s < 0 && (s = this.getIndexBasedOnPercentageOfValue(.2, e, i)), self[this.downPmtSelectFieldId].updateSelectField(s, i)
        }
    },
    getInitialSelectIndex: function(e, t) {
        for (var i = 0; i < e.length; i++)
            if (parseInt(e[i][0]) >= self[t].fieldDefaultValue) return i;
        return -1
    },
    generateDownPaymentSelectFieldOptions: function(e) {
        for (var t = [], i = 0; i <= 20; i++) {
            var s = Math.round(e * (5 * i) / 100),
                a = s,
                d = "$" + this.formatNumber(s) + " (" + 5 * i + "% down)";
            t.push([a, d])
        }
        return t
    },
    formatNumber: function(e) {
        for (var t = "" + e, i = ""; t.length >= 3;) i.length > 0 && (i = "," + i), i = t.substr(-3) + i, t = t.substr(0, t.length - 3);
        return t.length > 0 && (i.length > 0 && (i = "," + i), i = t + i), i
    },
    updateBalOne: function(e, t, i) {
        if (self[this.balOneSelectFieldId]) {
            var s = this.generateMortgageDisplayAndValues(8e4, e, t, !0),
                a = 0;
            i && (a = this.getInitialSelectIndex(selectFieldOptions, this.downPmtSelectFieldId)), a < 0 && s.length > 0 ? (a = this.getIndexBasedOnPercentageOfValue(.8, e, s), $("#" + this.balOneSelectFieldId).val(s[a][0])) : $("#" + this.balOneSelectFieldId).val(0), self[this.balOneSelectFieldId].updateSelectField(a, s);
            var d = parseInt($("#" + this.fieldName).val()) - parseInt($("#" + this.balOneSelectFieldId).val());
            this.updateBalTwoExtraCash(d, t, i)
        }
    },
    copySelectOptions: function(e) {
        for (var t = new Array, i = 0; i < e.length; i++) t.push(e[i]);
        return t
    },
    updateBalTwoExtraCash: function(e, t, i) {
        var s = this.generateMortgageDisplayAndValues(0, e, t, !1),
            a = $.extend(!0, [], s),
            d = $.extend(!0, [], s),
            l = 0;
        $("#" + this.balTwoSelectFieldId).val(0);
        var l = i ? this.getInitialSelectIndex(a, this.balTwoSliderFieldId) : 0,
            n = i ? this.getInitialSelectIndex(d, this.addCashSelectFieldId) : 0;
        self[this.balTwoSelectFieldId] && (a.length > 0 && (a[0][1] = "Paid Off"), self[this.balTwoSelectFieldId].updateSelectField(l, balanceTwoSelectOptionProductTileInput), d.length > 0 && (d[0][1] = "$0"), self[this.addCashSelectFieldId].updateSelectField(n, d))
    },
    getIndexBasedOnPercentageOfValue: function(e, t, s) {
        var a = e * t;
        for (i = 0; i < s.length; i++)
            if (parseInt(s[i][0]) >= a) return i;
        return 0
    },
    generateLowerBalanceValuesAndDisplay: function() {
        var e = [
            ["0", "$0"],
            ["5000", "$1 - $5,000"],
            ["10000", "$5,001 - $10,000"],
            ["15000", "$10,001 - $15,000"],
            ["20000", "$15,001 - $20,000"],
            ["25000", "$20,001 - 25,000"],
            ["30000", "$25,001 - $30,000"],
            ["35000", "$30,001 - $35,000"],
            ["40000", "$35,001 - $40,000"],
            ["45000", "$40,001 - $45,000"],
            ["50000", "$45,001 - $50,000"],
            ["55000", "$50,001 - $55,000"],
            ["60000", "$55,001 - $60,000"],
            ["65000", "$60,001 - $65,000"],
            ["70000", "$65,001 - $70,000"],
            ["75000", "$70,001 - $75,000"],
            ["80000", "$75,001 - $80,000"]
        ];
        return e
    },
    updateSelectedValue: function(e, t) {
        $("#CRED_GRADE").prop("selectedIndex", e), this.onSliderUpdate(t)
    },
    generateMortgageDisplayAndValues: function(e, t, i, s) {
        e = parseInt(e), t = parseInt(t);
        var a = [
            ["0", ""]
        ];
        if (t > 0) {
            var d = !0;
            if (!s) {
                a = [];
                for (var l = this.generateLowerBalanceValuesAndDisplay(), n = this.getIndexOfValueFromSelectOptions(e, l), o = n; o < l.length; o++) {
                    if (!(parseInt(l[o][0]) <= t)) {
                        d = !1;
                        break
                    }
                    a.push(l[o])
                }
            }
            if (d) {
                var h = this.getIndexOfValueFromSelectOptions(t, i),
                    n = 0;
                l && l.length > 0 && (n = this.getIndexOfValueFromSelectOptions(l[l.length - 1][0], i)), n < 0 && (n = 0);
                for (var o = n; o <= h; o++) a.push(i[o])
            }
        }
        return a
    }
}), BalOneSelectField = EstSelectField.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.estValSelectFieldId = null != e.estValSelectFieldId ? e.estValSelectFieldId : "EST_VAL", $("#" + this.balTwoSelectFieldId) && (this.onSelectUpdate = this.updateBalTwo)
    },
    updateBalTwo: function() {
        var e = parseInt($("#" + this.estValSelectFieldId).val()) - parseInt($("#" + this.fieldName).val());
        this.updateBalTwoExtraCash(e, this.selectOptionsAsArray)
    }
}), BalTwoSelectField = EstSelectField.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.estValSelectFieldId = null != e.estValSelectFieldId ? e.estValSelectFieldId : "EST_VAL", this.onSelectUpdate = function() {
            this.updateAddCash(this.selectOptionsAsArray)
        }
    },
    updateAddCash: function(e) {
        if (self[this.addCashSelectFieldId]) {
            var t = 0;
            $("#" + this.fieldName).val() && (t = $("#" + this.fieldName).val());
            var i = parseInt($("#" + this.estValSelectFieldId).val()) - parseInt($("#" + this.balOneSelectFieldId).val()) - t,
                s = this.generateMortgageDisplayAndValues(0, i, e, !1),
                a = 0;
            $("#" + this.addCashSelectFieldId).val(0), s && s.length > 0 && (s[0][1] = "$0"), self[this.addCashSelectFieldId].updateSelectField(a, s)
        }
    }
}), RadioInput = Field.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.radios = e.radios, this.RADIO_GROUP_OUTER_POSFIX = "_OUTER_GROUP", this.RADIO_GROUP_INNER_POSFIX = "_INNER_GROUP", this.RADIO_NAME_POSTFIX = "_radio_name", this.RADIO_DIV_POSTFIX = "-group", this.radioOuterGroupClasses = e.radioOuterGroupClasses, this.radioInnerGroupClasses = e.radioInnerGroupClasses, this.radiosSouthText = void 0 !== e.radiosSouthText ? e.radiosSouthText : "", this.radiosSouthTextId = this.fieldName + "_RADIOS_SOUTH_TEXT", self[this.fieldName] = this
    },
    createAppendRadios: function() {
        void 0 !== this.labelText && "" !== this.labelText && (this.createAppendFieldLabelDiv(), this.createAppendFieldLabel()), this.createAppendFieldBodyDiv(), this.createAppendField(), this.createAppendRadioOuterGroupDiv(), this.createAppendRadioInnerGroupDiv(), this.prepopulatedRadioId = "";
        for (var e = 0; e < this.radios.length; e++) this.createAppendRadioDiv(this.radios[e].radioId, this.radios[e].radioDivClasses), this.createAppendRadio(this.radios[e].radioId, this.radios[e].radioClasses, this.radios[e].radioText, this.radios[e].radioValue), this.addOnClickAction(this.radios[e].radioId, this.radios[e].radioText), this.fieldDefaultValue == this.radios[e].radioValue && (this.prepopulatedradiosId = this.radios[e].radioId);
        this.radiosSouthText && this.createAppendRadiosSouthText(), this.createAppendClearDiv(), this.addOnLoadSetPrePopValFunction(), this.setDefaultSelectedValue()
    },
    setSelectValOnLoad: function() {
        this.prepopulatedRadioId && this.updateSelectedValue($("#" + this.prepopulatedRadioId))
    },
    addOnLoadSetPrePopValFunction: function() {
        self.onRadioLoadfunctions || (self.onRadioLoadfunctions = [], $(document).ready(function() {
            if (self.onRadioLoadfunctions && self.onRadioLoadfunctions.length > 0)
                for (var e = 0; e < self.onRadioLoadfunctions.length; e++) self.onRadioLoadfunctions[e].setSelectValOnLoad()
        })), self.onRadioLoadfunctions.push(this)
    },
    createAppendRadioOuterGroupDiv: function() {
        $("#" + this.fieldDivId).append("<div class='" + this.radioOuterGroupClasses + "' id='" + this.fieldName + this.RADIO_GROUP_OUTER_POSFIX + "'></div>")
    },
    createAppendRadioInnerGroupDiv: function() {
        $("#" + this.fieldName + this.RADIO_GROUP_OUTER_POSFIX).append("<div class='" + this.radioInnerGroupClasses + "' id='" + this.fieldName + this.RADIO_GROUP_INNER_POSFIX + "'></div>")
    },
    createAppendRadioDiv: function(e, t) {
        $("#" + this.fieldName + this.RADIO_GROUP_INNER_POSFIX).append("<div class='" + t + "' id='" + e + this.RADIO_DIV_POSTFIX + "'></div>")
    },
    createAppendRadio: function(e, t, i, s) {
        $("#" + e + this.RADIO_DIV_POSTFIX).append("<input type='radio' id='" + e + "' class='" + t + "' target='" + this.fieldName + "' value='" + s + "' name='" + this.fieldName + this.RADIO_NAME_POSTFIX + "'><label for='" + e + "'>" + i + "</label><div class='clear'></div>");
    },
    createAppendRadiosSouthText: function() {
        $("#" + this.fieldName + this.RADIO_GROUP_INNER_POSFIX).append("<div id='" + this.radiosSouthTextId + "' class='buttons-south-text'><label id='" + this.radiosSouthTextId + "_LABEL'>" + this.radiosSouthText + "</label></div>")
    },
    createAppendClearDiv: function() {
        $("#" + this.fieldName + this.RADIO_GROUP_INNER_POSFIX).append("<div class='clear'></div>")
    },
    updateSelectedValue: function(e) {
        var t = $(e).attr("target");
        $("#" + t).val($(e).val())
    },
    addOnClickAction: function(e) {
        $("#" + e).on("click", function(e) {
            var t = $(this).attr("target");
            self[t].updateSelectedValue(this), self[t].doValidate()
        })
    },
    setDefaultSelectedValue: function() {
        var e = $("#" + this.fieldName + this.RADIO_GROUP_INNER_POSFIX + " input[value=" + this.val() + "]");
        e && e.trigger("click")
    }
}), ShowHideRadioInput = RadioInput.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.showHideContainersAsArray = void 0 !== e.showHideContainerIds ? e.showHideContainerIds : []
    },
    showHideContainers: function() {
        for (var e = 0; e < this.showHideContainersAsArray.length; e++) this.showHideContainer(this.showHideContainersAsArray[e])
    },
    showHideContainer: function(e) {
        var t = $("#" + e.id);
        t.length > 0 && ("yes" == this.val().toLowerCase() ? t.show() : (t.hide(), $("#" + e.fieldName).val(e.defaultValue)))
    },
    setSelectValOnLoad: function() {
        this.prepopulatedRadioId && this.updateSelectedValue($("#" + this.prepopulatedRadioId)), this.setDefaultSelectedValue()
    },
    addOnClickAction: function(e) {
        $("#" + e).on("click", function(e) {
            var t = $(this).attr("target");
            self[t].updateSelectedValue(this), self[t].showHideContainers(), self[t].doValidate()
        })
    }
}), EstSlider = Slider.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.balOneSliderFieldId = null != e.balOneSliderFieldId ? e.balOneSliderFieldId : "BAL_ONE", this.balTwoSliderFieldId = null != e.balTwoSliderFieldId ? e.balTwoSliderFieldId : "BAL_TWO", this.addCashSliderFieldId = null != e.addCashSliderFieldId ? e.addCashSliderFieldId : "ADD_CASH", this.downPmtSliderFieldId = null != e.downPmtSliderFieldId ? e.downPmtSliderFieldId : "DOWN_PMT", this.onSliderUpdate = this.updateBalOneTwoAddCashDownPmt, this.setOnLoadFunction()
    },
    getPrepopulatedOrDefaultSelectedIndex: function(e) {
        var t = this.defaultSelectedIndex;
        return void 0 !== e.context && void 0 !== e.context.fieldValues && void 0 !== e.context.fieldValues[this.fieldName] && (this.fieldDefaultValue = e.context.fieldValues[this.fieldName], t = $.inArray(e.context.fieldValues[this.fieldName], this.rangeValues)), t < 0 && (t = this.getIndexOfNextHighestValueInRange()), t
    },
    setSelectedValOnLoad: function() {
        var e = $.inArray(this.fieldDefaultValue, this.rangeValues);
        e < 0 && (e = this.getIndexOfNextHighestValueInRange()), this.drawSlider(e)
    },
    changeSelectedIndex: function(e) {
        this.drawSlider(e), this.updateBalOneTwoAddCashDownPmt()
    },
    setOnLoadFunction: function() {
        self.estValSlider || (self.estValSlider = this, $(document).ready(function() {
            self.estValSlider.updateBalOneTwoAddCashDownPmt(!0)
        }))
    },
    updateBalOneTwoAddCashDownPmt: function(e) {
        var t = $("#" + this.fieldName).val(),
            i = {
                displayValues: this.displayValues,
                rangeValues: this.rangeValues
            };
        this.updateBalOne(t, i, e), this.updateDownPmt(t, e)
    },
    updateDownPmt: function(e, t) {
        var i = this.generateDownPaymentSliderValues(e),
            s = i.displayValues,
            a = i.rangeValues,
            d = 0;
        s.length > 0 ? (d = this.getDefaultOrPopulatedDownPaymentIndex(e, a, t), $("#" + this.downPmtSliderFieldId).val(a[d])) : $("#" + this.downPmtSliderFieldId).val("$0 (0% down)"), self[this.downPmtSliderFieldId + this.SLIDER_POSTFIX].updateSlider(s, a, 0, a.length - 1, d)
    },
    getDefaultOrPopulatedDownPaymentIndex: function(e, t, i) {
        return self[this.downPmtSliderFieldId].skipDefaultValue && i ? this.getIndexOfNextHighestValueInRange(t, self[this.downPmtSliderFieldId].fieldDefaultValue) : this.getIndexBasedOnPercentageOfValue(.2, e, t)
    },
    generateDownPaymentSliderValues: function(e) {
        for (var t = [], i = [], s = 0; s <= 20; s++) {
            var a = Math.round(e * (5 * s) / 100),
                d = a,
                l = "$" + this.formatNumber(a) + " (" + 5 * s + "% down)";
            t[s] = l, i[s] = d
        }
        return {
            displayValues: t,
            rangeValues: i
        }
    },
    formatNumber: function(e) {
        for (var t = "" + e, i = ""; t.length >= 3;) i.length > 0 && (i = "," + i), i = t.substr(-3) + i, t = t.substr(0, t.length - 3);
        return t.length > 0 && (i.length > 0 && (i = "," + i), i = t + i), i
    },
    generateMortgageDisplayAndValues: function(e, t, i, s) {
        e = parseInt(e), t = parseInt(t);
        var a = [],
            d = [];
        if (t > 0) {
            var l = !0;
            if (!s)
                for (var n = this.generateLowerBalanceValuesAndDisplay(), o = n.lowerBalanceValues, h = n.lowerBalanceDisplayValues, r = $.inArray(e.toString(), o); r < o.length; r++) {
                    if (!(o[r] <= t)) {
                        l = !1;
                        break
                    }
                    a.push(h[r]), d.push(o[r])
                }
            if (l) {
                var u = $.inArray(t.toString(), i.rangeValues),
                    c = 0;
                d.length > 0 && (c = $.inArray(d[d.length - 1].toString(), i.rangeValues)), c < 0 && (c = 0);
                for (var r = c; r <= u; r++) a.push(i.displayValues[r]), d.push(i.rangeValues[r])
            }
        }
        return {
            displayValues: a,
            balanceValues: d
        }
    },
    updateBalOne: function(e, t, i) {
        var s = this.generateMortgageDisplayAndValues(8e4, e, t),
            a = s.displayValues,
            d = s.balanceValues,
            l = 0;
        d.length > 0 ? (l = this.getDefaultOrPopulatedBalOneIndex(e, d, i), $("#" + this.balOneFieldSlider).val(d[l])) : $("#" + this.balOneFieldSlider).val(0);
        var n = d.length - 1;
        if (n < 0 && (n = 0), self[this.balOneSliderFieldId + this.SLIDER_POSTFIX]) {
            self[this.balOneSliderFieldId + this.SLIDER_POSTFIX].updateSlider(a, d, 0, n, l, t);
            var o = parseInt($("#" + this.fieldName).val()) - parseInt($("#" + this.balOneSliderFieldId).val());
            this.updateBalTwoExtraCash(o, t, i)
        }
    },
    getDefaultOrPopulatedBalOneIndex: function(e, t, i) {
        return self[this.balOneSliderFieldId].skipDefaultValue && i ? this.getIndexOfNextHighestValueInRange(t, self[this.balOneSliderFieldId].fieldDefaultValue) : this.getIndexBasedOnPercentageOfValue(.8, e, t)
    },
    updateBalTwoExtraCash: function(e, t, i) {
        var s = this.generateMortgageDisplayAndValues(0, e, t, !1),
            a = s.displayValues,
            d = s.displayValues,
            l = s.balanceValues,
            n = i ? this.getInitialIndexBalTwoAddCash(l, this.balTwoSliderFieldId) : 0,
            o = i ? this.getInitialIndexBalTwoAddCash(l, this.balTwoSliderFieldId) : 0;
        $("#" + this.balTwoSliderFieldId).val(0);
        var h = l.length - 1;
        h < 0 && (h = 0), self[this.balTwoSliderFieldId + this.SLIDER_POSTFIX] && (a.length > 0 && (a[0] = "Paid Off"), self[this.balTwoSliderFieldId + this.SLIDER_POSTFIX].updateSlider(a, l, 0, h, n, t), d.length > 0 && (d[0] = "$0"), self[this.addCashSliderFieldId + this.SLIDER_POSTFIX].updateSlider(d, l, 0, h, o, t))
    },
    getInitialIndexBalTwoAddCash: function(e, t) {
        if (!e) return 0;
        if (!self[t] || !self[t].fieldDefaultValue) return 0;
        for (var i = 0; i < e.length; i++)
            if (parseInt(e[i]) >= self[t].fieldDefaultValue) return i;
        return 0
    },
    getIndexBasedOnPercentageOfValue: function(e, t, s) {
        var a = e * t;
        for (i = 0; i < s.length; i++)
            if (s[i] >= a) return i;
        return 0
    },
    generateLowerBalanceValuesAndDisplay: function() {
        var e = ["0", "5000", "10000", "15000", "20000", "25000", "30000", "35000", "40000", "45000", "50000", "55000", "60000", "65000", "70000", "75000", "80000"],
            t = ["$0", "$1 - $5,000", "$5,001 - $10,000", "$10,001 - $15,000", "$15,001 - $20,000", "$20,001 - 25,000", "$25,001 - $30,000", "$30,001 - $35,000", "$35,001 - $40,000", "$40,001 - $45,000", "$45,001 - $50,000", "$50,001 - $55,000", "$55,001 - $60,000", "$60,001 - $65,000", "$65,001 - $70,000", "$70,001 - $75,000", "$75,001 - $80,000"];
        return {
            lowerBalanceValues: e,
            lowerBalanceDisplayValues: t
        }
    },
    updateSlider: function(e, t, i, s, a, d) {
        this.displayValues = e, this.rangeValues = t, $("#" + this.sliderId).slider("option", "max", s), $("#" + this.sliderId).slider("option", "min", i), $("#" + this.sliderId).slider("option", "value", a), this.setDefaultValues(a), this.onSliderUpdate(d)
    }
}), BalOneSlider = EstSlider.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.estValSliderFieldId = null != e.estValSliderFieldId ? e.estValSliderFieldId : "EST_VAL", $("#" + this.balTwoSliderFieldId) && (this.onSliderUpdate = this.updateBalTwo)
    },
    updateBalTwo: function(e) {
        var t = parseInt($("#" + this.estValSliderFieldId).val()) - parseInt($("#" + this.fieldName).val()),
            i = {
                displayValues: this.displayValues,
                rangeValues: this.rangeValues
            };
        this.updateBalTwoExtraCash(t, i, e)
    }
}), BalTwoSlider = EstSlider.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.estValSliderFieldId = null != e.estValSliderFieldId ? e.estValSliderFieldId : "EST_VAL", $("#" + this.addCashSliderFieldId) && (this.onSliderUpdate = function() {
            var e = {
                displayValues: this.displayValues,
                rangeValues: this.rangeValues
            };
            this.updateAddCash(e)
        })
    },
    updateAddCash: function(e) {
        var t = 0;
        $("#" + this.fieldName).val() && (t = $("#" + this.fieldName).val());
        var i = parseInt($("#" + this.estValSliderFieldId).val()) - parseInt($("#" + this.balOneSliderFieldId).val()) - t,
            s = this.generateMortgageDisplayAndValues(0, i, e, !0),
            a = s.displayValues,
            d = s.balanceValues,
            l = 0;
        $("#" + this.addCashSliderFieldId).val(0), a[0] = "$0";
        var n = d.length - 1;
        n < 0 && (n = 0), self[this.addCashSliderFieldId + this.SLIDER_POSTFIX] && self[this.addCashSliderFieldId + this.SLIDER_POSTFIX].updateSlider(a, d, 0, n, l)
    }
}), DOBField = Field.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.dateFormat = void 0 !== e.dateFormat ? e.dateFormat : "ddmmyyyy", this.dobDayId = "DOB-day", this.dobMonthId = "DOB-month", this.dobYearId = "DOB-year"
    },
    createAppendDOBfields: function() {
        void 0 !== this.labelText && "" !== this.labelText && (this.createAppendFieldLabelDiv(), this.createAppendFieldLabel()), this.createAppendFieldBodyDiv(), this.createAppendField(), $("#" + this.fieldDivId).append("<div id='FIELD-BODY-INNER-" + this.fieldName + "'></div>"), this.createFormattedDateField(), this.createAppendClearDiv(), this.addOnChangeAction()
    },
    createFormattedDateField: function() {
        "ddmmyyyy" === this.dateFormat ? (this.createAppendDOBDay(), this.createAppendDOBMonth(), this.createAppendDOBYear()) : "mmddyyyy" === this.dateFormat ? (this.createAppendDOBMonth(), this.createAppendDOBDay(), this.createAppendDOBYear()) : "yyyyddmm" === this.dateFormat ? (this.createAppendDOBYear(), this.createAppendDOBDay(), this.createAppendDOBMonth()) : "yyyymmdd" === this.dateFormat && (this.createAppendDOBYear(), this.createAppendDOBMonth(), this.createAppendDOBDay())
    },
    createAppendDOBDay: function() {
        for (var e = "<select class='dob-select' name='" + this.dobDayId + "' id='" + this.dobDayId + "' target='" + this.fieldName + "'><option value='' selected='selected'>Day</option>", t = 1; t <= 31; t++) {
            var i = t;
            i < 10 && (i = "0" + i), e += "<option value='" + i + "'>" + i + "</option>"
        }
        e += "</select>", $("#" + this.fieldDivId).append(e)
    },
    createAppendDOBMonth: function() {
        for (var e = "<select class='dob-select' name='" + this.dobMonthId + "' id='" + this.dobMonthId + "'target='" + this.fieldName + "'><option value='' selected='selected'>Month</option>", t = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], i = 1; i <= 12; i++) {
            var s = i;
            s < 10 && (s = "0" + s), e += "<option value='" + s + "'>" + t[i] + "</option>"
        }
        e += "</select>", $("#" + this.fieldDivId).append(e)
    },
    createAppendDOBYear: function() {
        for (var e = "<select class='dob-select' name='" + this.dobYearId + "' id='" + this.dobYearId + "' target='" + this.fieldName + "'><option value='' selected='selected'>Year</option>", t = 1997; t >= 1931; t--) e += "<option value='" + t + "'>" + t + "</option>";
        e += "</select>", $("#" + this.fieldDivId).append(e)
    },
    concatDOBValueAndValidate: function() {
        $("#" + this.fieldName).val($("#" + this.dobYearId).val().toString() + "-" + $("#" + this.dobMonthId).val().toString() + "-" + $("#" + this.dobDayId).val().toString());
        var e = $("#" + this.dobDayId).parent().find(".dob-select");
        if (!$("#" + this.fieldName).attr("validated"))
            for (var t = 0; t < e.length; t++)
                if ("" == $(e[t]).val()) return;
        $("#" + this.fieldName).attr("validated", !0), this.doValidate()
    },
    addOnChangeAction: function() {
        $("#" + this.dobDayId + ",#" + this.dobMonthId + ",#" + this.dobYearId).on("change", function(e) {
            var t = $(this).attr("target");
            self[t].concatDOBValueAndValidate()
        })
    },
    createAppendClearDiv: function() {
        $("#" + this.fieldDivId).append("<div class='clear'></div>")
    }
}), ButtonInputWithExtraAction = ButtonInput.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.extraActionEval = null != e.extraActionEval ? e.extraActionEval : ""
    },
    updateSelectedValue: function(el, onload) {
        var currentSelected = $(el).parent().parent().find(".selected");
        currentSelected && currentSelected.removeClass("selected"), $(el).addClass("selected");
        var targetFieldId = $(el).attr("target");
        $("#" + targetFieldId).val($(el).attr("selectedValue")), onload || eval(this.extraActionEval)
    }
}), NumericalSlider = Slider.extend({
    init: function(e, t, i) {
        this._super(e, t, i)
    },
    getIndexOfNextHighestValueInRange: function(e, t) {
        e || (e = this.rangeValues), t || (t = this.fieldDefaultValue);
        for (var i = 0; i < e.length; i++)
            if (parseInt(e[i]) >= t) return i;
        return this.rangeValues.length - 1
    },
    getPrepopulatedOrDefaultSelectedIndex: function(e) {
        var t = this.defaultSelectedIndex;
        return void 0 !== e.context && void 0 !== e.context.fieldValues && void 0 !== e.context.fieldValues[this.fieldName] && (this.fieldDefaultValue = e.context.fieldValues[this.fieldName], t = $.inArray(e.context.fieldValues[this.fieldName], this.rangeValues)), t < 0 && (t = this.getIndexOfNextHighestValueInRange()), t
    }
}), CheckboxInput = Field.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.checkboxs = e.checkboxs, this.CHECKBOX_GROUP_OUTER_POSFIX = "_OUTER_GROUP", this.CHECKBOX_GROUP_INNER_POSFIX = "_INNER_GROUP", this.CHECKBOX_NAME_POSTFIX = "_checkbox_name", this.CHECKBOX_DIV_POSTFIX = "-group", this.checkboxOuterGroupClasses = e.checkboxOuterGroupClasses, this.checkboxInnerGroupClasses = e.checkboxInnerGroupClasses, this.checkboxsSouthText = void 0 !== e.checkboxsSouthText ? e.checkboxsSouthText : "", this.checkboxsSouthTextId = this.fieldName + "_CHECKBOXS_SOUTH_TEXT", self[this.fieldName] = this
    },
    createAppendCheckboxs: function() {
        void 0 !== this.labelText && "" !== this.labelText && (this.createAppendFieldLabelDiv(), this.createAppendFieldLabel()), this.createAppendFieldBodyDiv(), this.createAppendField(), this.createAppendCheckboxOuterGroupDiv(), this.createAppendCheckboxInnerGroupDiv(), this.prepopulatedCheckboxId = "";
        for (var e = 0; e < this.checkboxs.length; e++) this.createAppendCheckboxDiv(this.checkboxs[e].checkboxId, this.checkboxs[e].checkboxDivClasses), this.createAppendCheckbox(this.checkboxs[e].checkboxId, this.checkboxs[e].checkboxClasses, this.checkboxs[e].checkboxText, this.checkboxs[e].checkboxValue), this.addOnClickAction(this.checkboxs[e].checkboxId, this.checkboxs[e].checkboxText), this.fieldDefaultValue == this.checkboxs[e].checkboxValue && (this.prepopulatedcheckboxsId = this.checkboxs[e].checkboxId);
        this.checkboxsSouthText && this.createAppendCheckboxsSouthText(), this.createAppendClearDiv(), this.addOnLoadSetPrePopValfunction(), this.setDefaultSelectedValue()
    },
    setSelectValOnLoad: function() {
        this.prepopulatedCheckboxId && this.updateSelectedValue($("#" + this.prepopulatedCheckboxId))
    },
    addOnLoadSetPrePopValfunction: function() {
        self.onCheckboxLoadFunctions || (self.onCheckboxLoadFunctions = [], $(document).ready(function() {
            if (self.onCheckboxLoadFunctions && self.onCheckboxLoadFunctions.length > 0)
                for (var e = 0; e < self.onCheckboxLoadFunctions.length; e++) self.onCheckboxLoadFunctions[e].setSelectValOnLoad()
        })), self.onCheckboxLoadFunctions.push(this)
    },
    createAppendCheckboxOuterGroupDiv: function() {
        $("#" + this.fieldDivId).append("<div class='" + this.checkboxOuterGroupClasses + "' id='" + this.fieldName + this.CHECKBOX_GROUP_OUTER_POSFIX + "'></div>")
    },
    createAppendCheckboxInnerGroupDiv: function() {
        $("#" + this.fieldName + this.CHECKBOX_GROUP_OUTER_POSFIX).append("<div class='" + this.checkboxInnerGroupClasses + "' id='" + this.fieldName + this.CHECKBOX_GROUP_INNER_POSFIX + "'></div>")
    },
    createAppendCheckboxDiv: function(e, t) {
        $("#" + this.fieldName + this.CHECKBOX_GROUP_INNER_POSFIX).append("<div class='" + t + "' id='" + e + this.CHECKBOX_DIV_POSTFIX + "'></div>")
    },
    createAppendCheckbox: function(e, t, i, s) {
        $("#" + e + this.CHECKBOX_DIV_POSTFIX).append("<input type='checkbox' id='" + e + "' class='" + t + "' target='" + this.fieldName + "' value='" + s + "' name='" + this.fieldName + this.CHECKBOX_NAME_POSTFIX + "'><label for='" + e + "'>" + i + "</label><div class='clear'></div>")
    },
    createAppendCheckboxsSouthText: function() {
        $("#" + this.fieldName + this.CHECKBOX_GROUP_INNER_POSFIX).append("<div id='" + this.checkboxsSouthTextId + "' class='buttons-south-text'><label id='" + this.checkboxsSouthTextId + "_LABEL'>" + this.checkboxsSouthText + "</label></div>")
    },
    createAppendClearDiv: function() {
        $("#" + this.fieldName + this.CHECKBOX_GROUP_INNER_POSFIX).append("<div class='clear'></div>")
    },
    updateSelectedValue: function(e) {
        for (var t = $(e).attr("target"), i = "", s = 0; s < this.checkboxs.length; s++) {
            var a = $("#" + this.checkboxs[s].checkboxId);
            $(a).is(":checked") && (s > 0 && (i += ","), i += this.checkboxs[s].checkboxValue)
        }
        $("#" + t).val(i)
    },
    addOnClickAction: function(e) {
        $("#" + e).on("click", function(e) {
            var t = $(this).attr("target");
            self[t].updateSelectedValue(this), self[t].doValidate()
        })
    },
    setDefaultSelectedValue: function() {
        for (var e = this.val().split(","), t = 0; t < e.length; t++) {
            var i = $("#" + this.fieldName + this.CHECKBOX_GROUP_INNER_POSFIX + " input[value=" + e[t] + "]");
            i && i.trigger("click")
        }
    }
}), ImageField = Field.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.imageUrl = void 0 !== e.imageUrl ? e.imageUrl : "", this.IMAGE_GROUP_OUTER_POSFIX = "_OUTER_GROUP", this.IMAGE_GROUP_INNER_POSFIX = "_INNER_GROUP", this.IMAGE_NAME_POSTFIX = "_image_name", this.IMAGE_DIV_POSTFIX = "-group", this.imageOuterGroupClasses = void 0 !== e.imageOuterGroupClasses ? e.imageOuterGroupClasses : "", this.imageInnerGroupClasses = void 0 !== e.imageInnerGroupClasses ? e.imageInnerGroupClasses : "", this.imageDivClasses = void 0 !== e.imageDivClasses ? e.imageDivClasses : "", this.imageClasses = void 0 !== e.imageClasses ? e.imageClasses : "", this.imageSouthText = void 0 !== e.imageSouthText ? e.imageSouthText : "", this.imageNorthText = void 0 !== e.imageNorthText ? e.imageNorthText : "", this.imageSouthTextId = this.fieldName + "_IMAGE_SOUTH_TEXT", this.imageNorthTextId = this.fieldName + "_IMAGE_NORTH_TEXT", self[this.fieldName] = this
    },
    createAppendImageField: function() {
        this.setValidOnCreate(), void 0 !== this.labelText && "" !== this.labelText && (this.createAppendFieldLabelDiv(), this.createAppendFieldLabel()), this.createAppendFieldBodyDiv(), this.createAppendField(), this.createAppendImageOuterGroupDiv(), this.createAppendImageInnerGroupDiv(), $("#" + this.fieldName + this.IMAGE_GROUP_INNER_POSFIX).append("<div class='" + this.imageDivClasses + "' id='" + this.fieldName + this.IMAGE_DIV_POSTFIX + "'></div>"), $("#" + this.fieldName + this.IMAGE_DIV_POSTFIX).append("<img src='" + this.imageUrl + "' id='" + this.fieldName + "_image' class='" + this.imageClasses + "'>"), this.imageSouthText && this.createAppendImageSouthText(), this.imageNorthText && this.createAppendImageNorthText(), this.createAppendClearDiv()
    },
    createAppendImageOuterGroupDiv: function() {
        $("#" + this.fieldDivId).append("<div class='" + this.imageOuterGroupClasses + "' id='" + this.fieldName + this.IMAGE_GROUP_OUTER_POSFIX + "'></div>")
    },
    createAppendImageInnerGroupDiv: function() {
        $("#" + this.fieldName + this.IMAGE_GROUP_OUTER_POSFIX).append("<div class='" + this.imageInnerGroupClasses + "' id='" + this.fieldName + this.IMAGE_GROUP_INNER_POSFIX + "'></div>")
    },
    createAppendImageSouthText: function() {
        $("#" + this.fieldName + this.IMAGE_GROUP_INNER_POSFIX).append("<div id='" + this.imageSouthTextId + "' class='image-south-text'><label id='" + this.imageSouthTextId + "_LABEL'>" + this.imageSouthText + "</label></div>")
    },
    createAppendImageNorthText: function() {
        $("#" + this.fieldName + this.IMAGE_GROUP_INNER_POSFIX).prepend("<div id='" + this.imageNorthTextId + "' class='image-north-text'><label id='" + this.imageNorthTextId + "_LABEL'>" + this.imageNorthText + "</label></div>")
    },
    createAppendClearDiv: function() {
        $("#" + this.fieldName + this.IMAGE_GROUP_INNER_POSFIX).append("<div class='clear'></div>")
    }
}), ClearDiv = Field.extend({
    init: function(e) {
        this.parentElement = e
    },
    createAppendClearDiv: function() {
        $(this.parentElement).append("<div class='clear'></div>"), this.setValidOnCreate()
    }
}), CurrencyField = Field.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.fieldType = "tel", this.currencySymbol = void 0 !== e.currencySymbol ? e.currencySymbol : "", this.currencyFormat = void 0 !== e.currencyFormat ? e.currencyFormat : "000,000,000,000,000.00", this.setOnLoadFunction(), self[this.fieldName] = this
    },
    setOnLoadFunction: function() {
        self.currencyOnLoadFunctions || (self.currencyOnLoadFunctions = [], $(document).ready(function() {
            if (self.currencyOnLoadFunctions && self.currencyOnLoadFunctions.length > 0)
                for (var e = 0; e < self.currencyOnLoadFunctions.length; e++) self.currencyOnLoadFunctions[e].maskField()
        })), self.currencyOnLoadFunctions.push(this)
    },
    createAppendField: function() {
        this.fieldNorthText && this.createAppendFieldNorthText(), this.createAppendCurrencySymbol(), $("#" + this.fieldDivId).append("<input type='" + this.fieldType + "' id='" + this.fieldName + "' name='" + this.fieldName + "' value='" + this.fieldDefaultValue + "' maxlength='" + this.fieldMaxLength + "' class='" + this.fieldClasses + "' " + this.generateExtraAttributes() + " placeholder='" + this.placeholder + "'>"), this.fieldSouthText && this.createAppendFieldSouthText()
    },
    createAppendCurrencySymbol: function() {
        $("#" + this.fieldDivId).append("<span id='currency-" + this.fieldName + "-symbol' class='currency-symbol'>" + this.currencySymbol + "</span>")
    },
    maskField: function() {
        $("#" + this.fieldName).mask(this.currencyFormat, {
            reverse: !0
        })
    }
}), DivElement = Field.extend({
    init: function(e, t, i) {
        this.parentElement = t, this.divId = void 0 !== e.divId ? e.divId : "", this.divClasses = void 0 !== e.divClasses ? e.divClasses : "", this.fieldName = e.fieldName, this.fieldDefaultValue = this.getPrepopulatedOrDefaultValue(e), this.hideOnCreate = void 0 !== e.hideOnCreate && e.hideOnCreate, this.hideIfEmpty = void 0 !== e.hideIfEmpty && e.hideIfEmpty, self[this.divId] = this
    },
    createAppendDivElement: function() {
        $(this.parentElement).append("<div id='" + this.divId + "' class='" + this.divClasses + "'>" + this.fieldDefaultValue + "</div>"), this.setValidOnCreate(), (this.hideOnCreate || this.hideIfEmpty && !this.fieldDefaultValue) && $("#" + this.divId).hide()
    },
    setHtml: function(e) {
        $("#" + this.divId).html(e), this.hideIfEmpty && !e ? this.showHide(!1) : this.showHide(!0)
    },
    showHide: function(e) {
        e ? $("#" + this.divId).show() : $("#" + this.divId).hide()
    }
}), ZipField = Field.extend({
    init: function(e, t, i) {
        this._super(e, t, i), this.fieldType = "tel", this.cityFieldId = void 0 !== e.cityFieldId ? e.cityFieldId : "CITY", this.stateFieldId = void 0 !== e.stateFieldId ? e.stateFieldId : "STATE", this.validationMessageContId = this.fieldName + "-validation-container", this.validatingMessage = void 0 !== e.validatingMessage ? e.validatingMessage : "validating...", this.validatingMessageLocation = void 0 !== e.validatingMessageLocation ? e.validatingMessageLocation : "BOTTOM", this.useSingleCityStateDiv = void 0 !== e.useSingleCityStateDiv && e.useSingleCityStateDiv, this.singleCityStateDivId = void 0 !== e.singleCityStateDivId && e.singleCityStateDivId
    },
    getCityState: function(e) {
        data = "formFlowConfigId=" + formFlowConfigId, httpClient.postUsingAjax(this, "GET", "/api/formdata/" + formFlowConfigId + "?ZIP=" + this.val(), data, e)
    },
    updateCity: function(e, t) {
        $("#" + this.cityFieldId).is("input") ? $("#" + this.cityFieldId).val(e) : $("#" + this.cityFieldId).html(e), t || e ? $("#" + this.cityFieldId).show() : $("#" + this.cityFieldId).hide()
    },
    updateState: function(e, t) {
        $("#" + this.stateFieldId).is("input") ? $("#" + this.stateFieldId).val(e) : $("#" + this.stateFieldId).html(e), t || e ? $("#" + this.stateFieldId).show() : $("#" + this.stateFieldId).hide()
    },
    updateSingleCityStateField: function(e, t, i) {
        $("#" + this.singleCityStateDivId).html(e + ", " + t), i || e ? $("#" + this.singleCityStateDivId).show() : $("#" + this.singleCityStateDivId).hide()
    },
    updateCityStateFields: function(e, t) {
        this.useSingleCityStateDiv || this.singleCityStateDivId ? this.updateSingleCityStateField(e, t) : (this.updateCity(e), this.updateState(t))
    },
    getAndUpdateCityStateFields: function() {
        this.getCityState(this.onGetCityStateComplete)
    },
    onGetCityStateComplete: function(e) {
        if (this.showHideValidatingMsg(!1), e.fieldValues && e.fieldValues[this.fieldName] === this.val()) {
            var t = "";
            e.fieldValues.CITY && (t = e.fieldValues.CITY);
            var i = "";
            e.fieldValues.STATE && (i = e.fieldValues.STATE), this.updateCityStateFields(t, i)
        }
    },
    onValidationComplete: function(e) {
        this.markVisited(), this.setPendingValidation(!1), this.setStateKnown(!0), e.result.invalid ? (this.setValid(!1), this.setErrorMessage(e.result.message), this.showValidationError(!0), this.showHideValidatingMsg(!1)) : (this.getAndUpdateCityStateFields(), this.setValid(!0), this.setErrorMessage(""), this.showValidationError(!1), this.showHideValidatingMsg(!1)), null != this.callBack && this.callBack(), this.removePlaceHolder()
    },
    setPendingValidation: function(e) {
        this.pendingValidation = e, this.showHideValidatingMsg(!0), this.clearCityStateField()
    },
    showHideValidatingMsg: function(e) {
        var t = $("#" + this.validationMessageContId),
            i = $("#" + this.fieldName),
            s = void 0 !== i.attr(this.VALIDATE_ELEMENT_PREFIX) ? $("#" + i.attr(this.VALIDATE_ELEMENT_PREFIX)) : i.parent().parent();
        t.length <= 0 && (t = "<div id='" + this.validationMessageContId + "' class='validating-message loc-validating-msg-" + this.errorMessageLocation.toLowerCase() + "'></div>"), "TOP" == this.validatingMessageLocation.toUpperCase() ? s.prepend(t) : s.append(t), $("#" + this.validationMessageContId).html(this.validatingMessage), e ? $("#" + this.validationMessageContId).show() : $("#" + this.validationMessageContId).hide()
    },
    clearCityStateField: function() {
        this.useSingleCityStateDiv ? this.updateSingleCityStateField("", "", !1) : (this.updateCity("", !1), this.updateState("", !1))
    },
    addFieldOnChangeAction: function() {
        $("#" + this.fieldName).on("blur", function() {
            $(this).val().length != self[this.id].fieldMaxLength && self[this.id].doValidate()
        }), $("#" + this.fieldName).keyup(function(e) {
            $(this).val().length == self[this.id].fieldMaxLength && self[this.id].doValidate()
        })
    }
});
FieldGroupManagerRule = Class.extend({
    init: function(e, i, t, l) {
        this.fieldName = e, this.operation = i, this.value = t, this.relationToNextRule = l ? l : "||"
    },
    isTrue: function() {
        return isNaN(this.value) || isNaN($("#" + this.fieldName).val()) || !$("#" + this.fieldName).val() ? eval("'" + $("#" + this.fieldName).val() + "' " + this.operation + " '" + this.value + "'") : eval($("#" + this.fieldName).val() + this.operation + this.value)
    }
}), FieldGroupManagerRulesGroup = Class.extend({
    init: function(e, i) {
        this.fieldGroupManagerRules = e, this.relationToNextRuleGroup = i ? i : "||"
    },
    isTrue: function() {
        if (0 == this.fieldGroupManagerRules.length) return !0;
        if (1 == this.fieldGroupManagerRules.length) return this.fieldGroupManagerRules[0].isTrue();
        var e = new Array;
        e.push([this.fieldGroupManagerRules[0].isTrue(), this.fieldGroupManagerRules[0].relationToNextRule]);
        for (var i = 1; i < this.fieldGroupManagerRules.length; i++) {
            var t = new Array,
                l = this.fieldGroupManagerRules[i].isTrue();
            t.push([this.evaluateRuleABOutcomeOperation(e[0][0], l, e[0][1]), this.fieldGroupManagerRules[i].relationToNextRule]), e = t
        }
        return e[0][0]
    },
    evaluateRuleABOutcomeOperation: function(ruleAOutcome, ruleBOutcome, operation) {
        return eval(ruleAOutcome + operation + ruleBOutcome)
    }
}), FieldGroupManager = Class.extend({
    init: function(e, i, t, l, s) {
        this.fields = [], this.fieldGroupId = e.fieldGroupId, this.fieldGroupCssClasses = void 0 !== e.fieldGroupCssClasses ? e.fieldGroupCssClasses : "", this.formGroupCssClasses = void 0 !== e.formGroupCssClasses ? e.formGroupCssClasses : "", this.fieldGroupInlineCss = void 0 !== e.fieldGroupInlineCss ? e.fieldGroupInlineCss : "", this.fieldGroupHeader = void 0 !== e.fieldGroupHeader ? e.fieldGroupHeader : "", this.parentElement = i, this.FIELD_GROUP_POSTFIX = "_GROUP", this.FORM_GROUP_POSTFIX = "_FORM_GROUP", this.fieldGroupProduct = void 0 !== e.fieldGroupProduct ? e.fieldGroupProduct : "ALL", this.showDisclaimer = void 0 !== e.showDisclaimer && e.showDisclaimer, this.canSkipGroup = void 0 !== e.canSkipGroup && e.canSkipGroup, this.canAutoNext = void 0 === e.canAutoNext || e.canAutoNext, this.showPageHeader = void 0 === e.showPageHeader || e.showPageHeader, this.showProgressbar = void 0 === e.showProgressbar || e.showProgressbar, this.showProgressText = void 0 !== e.showProgressText && e.showProgressText, this.progressText = void 0 !== e.progressText ? e.progressText : "", this.continueButtonText = void 0 !== e.continueButtonText ? e.continueButtonText : "", this.hideNextButton = void 0 !== e.hideNextButton && e.hideNextButton, this.progressbarPercentage = void 0 !== e.progressbarPercentage ? e.progressbarPercentage : "", this.slideTransition = void 0 !== l.slideTransition ? l.slideTransition : "FADE", this.addFieldGroupHeader = void 0 === e.addFieldGroupHeader || e.addFieldGroupHeader, this.fieldHeaderRole = void 0 !== e.fieldHeaderRole ? e.fieldHeaderRole : "", this.groupName = void 0 !== e.groupName ? e.groupName : "field-group-" + (new Date).getTime().toString(36), this.fieldGroupHeaderTag = void 0 !== e.fieldGroupHeaderTag ? e.fieldGroupHeaderTag : "h3", this.fieldGroupManagerRules = void 0 !== e.fieldGroupManagerRules ? e.fieldGroupManagerRules : [], this.fieldGroupManagerRulesGroups = void 0 !== e.fieldGroupManagerRulesGroups ? e.fieldGroupManagerRulesGroups : [], this.disabilityMode = s, this.callBack = t;
        var r = void 0 !== e.fields ? e.fields : [];
        r.context = e.context, this.buildFieldGroup(r, e)
    },
    buildFieldGroup: function(e) {
        this.createAppendFieldSet(e), this.addFieldGroupHeader && this.createAppendGroupHeader(e), this.createAppendFieldsDiv(e), this.createAppendFields(e), 1 != this.disabilityMode && $("#" + this.fieldGroupId).hide()
    },
    validateAllFieldsIfStateUnknown: function() {
        for (var e = 0; e < this.fields.length; e++) this.fields[e].isStateKnown() || this.fields[e].doValidate()
    },
    trackFirstFields: function() {
        for (var e = 0; e < this.fields.length; e++) "function" == typeof this.fields[e].trackFirstField && this.fields[e].trackFirstField()
    },
    isStateKnown: function() {
        for (var e = 0; e < this.fields.length; e++)
            if (!this.fields[e].isStateKnown()) return !1;
        return !0
    },
    allFieldsValid: function() {
        for (var e = 0; e < this.fields.length; e++)
            if (!this.fields[e].isStateKnown() || !this.fields[e].isValid()) return !1;
        return !0
    },
    isPendingValidation: function() {
        for (i = 0; i < this.fields.length; i++)
            if (this.fields[i].isPendingValidation()) return !0;
        return !1
    },
    isGroupVisited: function() {
        for (i = 0; i < this.fields.length; i++)
            if (!this.fields[i].isVisited()) return !1;
        return !0
    },
    createAppendFieldSet: function(e) {
        var t = "";
        if (void 0 !== e.extraAttributes)
            for (i = 0; i < e.extraAttributes.length; i++) t + e.extraAttributes[i][0] + "='" + e.extraAttributes[i][1] + "' ";
        $(this.parentElement).append("<fieldset class='" + this.fieldGroupCssClasses + "' id='" + this.fieldGroupId + "' style='" + this.fieldGroupInlineCss + "' " + t + "></div>")
    },
    createAppendGroupHeader: function() {
        var e = "<div ";
        this.fieldHeaderRole && (e += "role='" + this.fieldHeaderRole + "' "), e += "id='container-outer-header-" + this.groupName + "'>", e += "<" + this.fieldGroupHeaderTag + ">" + this.fieldGroupHeader + "</" + this.fieldGroupHeaderTag + "> </div>", $("#" + this.fieldGroupId).append(e)
    },
    createAppendFieldsDiv: function() {
        $("#" + this.fieldGroupId).append("<div class='" + this.formGroupCssClasses + "' id='" + this.fieldGroupId + this.FORM_GROUP_POSTFIX + "'></div>")
    },
    createAppendFields: function(e) {
        if (e)
            for (var i = 0; i < e.length; i++) shouldCreateParent = e.length > 1, e[i].shouldCreateParent = shouldCreateParent, e[i].context = e.context, this.createAppendField(e[i])
    },
    createAppendField: function(e) {
        if (e) {
            var i;
            "TileInput" == e.fieldType ? (i = new TileInput(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendButtonDiv(), i.createAppendTiles()) : "ProductTileInput" == e.fieldType ? (i = new ProductTileInput(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendButtonDiv(), i.createAppendTiles()) : "ButtonInput" == e.fieldType ? (i = new ButtonInput(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendButtons()) : "SpecHomeButtonInput" == e.fieldType ? (i = new SpecHomeButtonInput(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendButtons()) : "SecondMortgageYesNoButtonInput" == e.fieldType ? (i = new SecondMortgageYesNoButtonInput(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendButtons()) : "Slider" == e.fieldType ? i = new Slider(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack) : "CreditGradeSlider" == e.fieldType ? i = new CreditGradeSlider(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack) : "USPhone" == e.fieldType ? (i = new USPhoneField(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendPhonefields()) : "SSNField" == e.fieldType || "SSN" == e.fieldType ? (i = new SSNField(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendSSNfields()) : "SelectField" == e.fieldType ? (i = new SelectField(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendSelectField()) : "DOBField" == e.fieldType ? (i = new DOBField(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendDOBfields()) : "EstSlider" == e.fieldType ? i = new EstSlider(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack) : "BalOneSlider" == e.fieldType ? i = new BalOneSlider(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack) : "BalTwoSlider" == e.fieldType ? i = new BalTwoSlider(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack) : "EstSelectField" == e.fieldType ? i = new EstSelectField(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack) : "EstSelectField" == e.fieldType ? i = new EstSelectField(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack) : "BalOneSelectField" == e.fieldType ? i = new BalOneSelectField(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack) : "BalTwoSelectField" == e.fieldType ? i = new BalTwoSelectField(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack) : "RadioInput" == e.fieldType ? (i = new RadioInput(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendRadios()) : "CheckboxInput" == e.fieldType ? (i = new CheckboxInput(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendCheckboxs()) : "ShowHideRadioInput" == e.fieldType ? (i = new ShowHideRadioInput(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendRadios()) : "ValueAsDisplaySelectField" == e.fieldType ? i = new ValueAsDisplaySelectField(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack) : "ButtonInputWithExtraAction" == e.fieldType ? (i = new ButtonInputWithExtraAction(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendButtons()) : "NumericalSlider" == e.fieldType ? i = new NumericalSlider(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack) : "ImageField" == e.fieldType ? (i = new ImageField(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendImageField()) : "clearDiv" == e.fieldType ? (i = new ClearDiv($("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX)), i.createAppendClearDiv()) : "CurrencyField" == e.fieldType ? (i = new CurrencyField(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendLabelAndField()) : "ZipField" == e.fieldType ? (i = new ZipField(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendLabelAndField()) : "DivElement" == e.fieldType ? (i = new DivElement(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendDivElement()) : (i = new Field(e, $("#" + this.fieldGroupId + this.FORM_GROUP_POSTFIX), this.callBack), i.createAppendLabelAndField()), this.fields.push(i)
        }
    },
    isGroupForProduct: function(e) {
        return "ALL" == this.fieldGroupProduct || this.fieldGroupProduct == e
    },
    canShowDisclaimer: function() {
        return this.showDisclaimer
    },
    canSkipGroup: function() {
        return this.canSkipGroup
    },
    showHide: function(e, i, t) {
        "SLIDE_UP" == this.slideTransition && this.slideUpShowHide(e, i), "SLIDE_DOWN" == this.slideTransition ? this.slideDownShowHide(e, i) : "SLIDE_LEFT" == this.slideTransition ? this.slideLeftRightShowHide(e, i, t) : this.fadeShowHide(e, i)
    },
    fadeShowHide: function(e, i) {
        e ? $("#" + this.fieldGroupId).fadeIn(150, i) : $("#" + this.fieldGroupId).fadeOut(150, i)
    },
    slideUpShowHide: function(e, i) {
        e ? $("#" + this.fieldGroupId).show("slide", {
            direction: "down"
        }, 400, i) : $("#" + this.fieldGroupId).hide("slide", {
            direction: "up"
        }, 40, i)
    },
    slideDownShowHide: function(e, i) {
        e ? $("#" + this.fieldGroupId).show("slide", {
            direction: "up"
        }, 400, i) : $("#" + this.fieldGroupId).hide("slide", {
            direction: "down"
        }, 40, i)
    },
    slideLeftRightShowHide: function(e, i, t) {
        (!t || "left" != t && "right" != t) && (t = e ? "right" : "left"), e ? $("#" + this.fieldGroupId).show("slide", {
            direction: t
        }, 200, function() {
            i(t)
        }) : $("#" + this.fieldGroupId).hide("slide", {
            direction: t
        }, 200, function() {
            i(t)
        })
    },
    show: function() {
        $("#" + this.fieldGroupId).show()
    },
    clearAllFieldsAndValidate: function() {
        for (var e = 0; e < this.fields.length; e++) this.fields[e].clearFieldAndValidate()
    },
    getContinueButtonText: function() {
        return this.continueButtonText
    },
    isOwnerOfField: function(e) {
        for (var i = 0; i < this.fields.length; i++)
            if (this.fields[i].fieldName === e) return !0;
        return !1
    },
    setShowNextButton: function(e) {
        e ? this.hideNextButton = !1 : this.hideNextButton = !0
    },
    scrollToCurrentSection: function() {
        $("html, body").animate({
            scrollTop: $("#" + this.fieldGroupId).offset().top
        }, "slow")
    },
    canShowGroup: function() {
        return 0 == this.fieldGroupManagerRules.length && 0 == this.fieldGroupManagerRulesGroups.length || (this.fieldGroupManagerRulesGroups.length > 0 ? this.evaluateFieldGroupManagerRulesGroups() : this.evaluateFieldGroupManagerRules())
    },
    evaluateRuleABOutcomeOperation: function(ruleAOutcome, ruleBOutcome, operation) {
        return eval(ruleAOutcome + operation + ruleBOutcome)
    },
    evaluateFieldGroupManagerRulesGroups: function() {
        var e = new Array;
        e.push([this.fieldGroupManagerRulesGroups[0].isTrue(), this.fieldGroupManagerRulesGroups[0].relationToNextRuleGroup]);
        for (var i = 1; i < this.fieldGroupManagerRulesGroups.length; i++) {
            var t = new Array,
                l = this.fieldGroupManagerRulesGroups[i].isTrue();
            t.push([this.evaluateRuleABOutcomeOperation(e[0][0], l, e[0][1]), this.fieldGroupManagerRulesGroups[i].relationToNextRuleGroup]), e = t
        }
        return e[0][0]
    },
    evaluateFieldGroupManagerRules: function() {
        var e = new Array;
        e.push([this.fieldGroupManagerRules[0].isTrue(), this.fieldGroupManagerRules[0].relationToNextRuleGroup]);
        for (var i = 1; i < this.fieldGroupManagerRules.length; i++) {
            var t = new Array,
                l = this.fieldGroupManagerRules[i].isTrue();
            t.push([this.evaluateRuleABOutcomeOperation(e[0][0], l, e[0][1]), this.fieldGroupManagerRulesGroups[i].relationToNextRuleGroup]), e = t
        }
        return e[0][0]
    }
});

function setCookie(i, t) {
    document.cookie = i + "=" + t
}

function getCookie(i) {
    for (var t = i + "=", e = document.cookie.split(";"), r = 0; r < e.length; r++) {
        for (var n = e[r];
            " " == n.charAt(0);) n = n.substring(1);
        if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
    }
    return ""
}
SlideShowTracker = Class.extend({
    init: function(i) {
        this.currentProduct = i, this.currentProductSlideNumber = 0, this.currentSlideNumber = 0
    },
    trackSlideView: function(i, t) {
        this.currentProduct == t ? i > this.currentSlideNumber ? this.currentProductSlideNumber++ : i > 0 && this.currentProductSlideNumber-- : this.setProduct(i, t), this.currentSlideNumber = i, FS.analytics.trackSlideEvent(this.currentProduct.toString(), this.currentProductSlideNumber)
    },
    trackFormSubmit: function() {
        FS.analytics.doEvent("form_submit", formFlowConfigId, 1, 1)
    },
    setProduct: function(i, t) {
        this.currentProduct = t, this.currentProductSlideNumber = i, this.currentSlideNumber = i
    },
    trackLeadSold: function(i) {
        var t = "track_lead_event_sent_" + i;
        getCookie(t) || (FS.analytics.trackLeadEvent("primary", "SOLD", i), setCookie(t, !0))
    }
}), SlideManager = Class.extend({
    init: function(i, t, e, r, n, o) {
        this.slideManagerCookieName = "slideManagerCurrentSlideNumer-" + formFlowConfigId, this.currentSlide = this.getCurrentSlideNumberFromCookieOrDefault(), this.fieldGroupManagers = [], this.groupPrefix = "group-", this.pendingNextAction = !1, this.slideShowTracker = new SlideShowTracker($("#" + r).val()), this.changingSlide = !1, origin = this, this.disclaimerId = void 0 !== t.disclaimerId ? t.disclaimerId : "tmmfs_submitButtonDisclaimer", this.continueButtonId = void 0 !== t.continueButtonId ? t.continueButtonId : "continue_button", this.continueButtonTextId = void 0 !== t.continueButtonTextId ? t.continueButtonTextId : "continue_button_text", this.continueButtonGroupId = void 0 !== t.continueButtonGroupId ? t.continueButtonGroupId : "continue_button_group", this.backButtonId = void 0 !== t.backButtonId ? t.backButtonId : "back_button", this.backButtonGroupId = void 0 !== t.backButtonGroupId ? t.backButtonGroupId : "back_button_group", this.skipButtonId = void 0 !== t[""] ? t[""] : "skip_button", this.skipButtonGroupId = void 0 !== t.skipButtonGroupId ? t.skipButtonGroupId : "skip_button_group", this.pageHeaderId = n, this.productFieldId = r, this.lastSlideContinueButtonText = void 0 !== t.lastSlideContinueButtonText ? t.lastSlideContinueButtonText : "Finish", this.defaultButtonText = void 0 !== t.defaultButtonText ? t.defaultButtonText : "<span>Continue</span>", this.showProgressbar = void 0 !== t.showProgressbar && t.showProgressbar, this.progressbarId = void 0 !== t.progressbarId ? t.progressbarId : "progressbar", this.progressbarTextId = void 0 !== t.progressbarTextId ? t.progressbarTextId : "progressbar-text", this.progressTextId = void 0 !== t.progressTextId ? t.progressTextId : "progressTextId", this.progressbarStepContainerId = void 0 !== t.progressbarStepContainerId ? t.progressbarStepContainerId : "progressbarStepContainerId", this.slideTransition = void 0 !== t.slideTransition ? t.slideTransition : "FADE", this.formSubmitType = void 0 !== t.formSubmitType ? t.formSubmitType : "DEFAULT", this.formId = void 0 !== t.formId ? t.formId : "form1", this.showSpinner = void 0 !== t.showSpinner && t.showSpinner, this.spinnerId = void 0 !== t.spinnerId ? t.spinnerId : "spinner", this.numberTimesPinged = 0, this.pingSleepTime = void 0 !== t.pingSleepTime ? t.pingSleepTime : 1e3, this.pingTimeOut = void 0 !== t.pingTimeOut ? t.pingTimeOut : 18e4, this.pollResponse = void 0 !== t.pollResponse && t.pollResponse, this.fireConversionPixel = void 0 !== t.fireConversionPixel && t.fireConversionPixel, this.moneytipsRedirect = void 0 !== t.moneytipsRedirect && t.moneytipsRedirect, this.showSpinnerOnFormSubmit = void 0 !== t.showSpinnerOnFormSubmit && t.showSpinnerOnFormSubmit, this.addPublisherPingHtml = void 0 !== t.addPublisherPingHtml && t.addPublisherPingHtml, this.productionEnv = void 0 !== t.productionEnv && t.productionEnv, this.interstitialElementId = void 0 !== t.interstitialElementId ? t.interstitialElementId : "interstitial-container", this.showInterstitial = void 0 !== t.showInterstitial && t.showInterstitial, this.interstitialText = void 0 !== t.interstitialText ? t.interstitialText : "<strong>Matching Your Request</strong>", this.ajaxFormSubmit = void 0 !== t.ajaxFormSubmit && t.ajaxFormSubmit, this.moneytipsRedirectConfig = void 0 !== t.moneytipsRedirectConfig ? t.moneytipsRedirectConfig : {}, this.conversionPixelFired = !1, o.slideTransition = this.slideTransition, this.buildSlides(i, e, o), this.addActionSlideButtons(), this.registerSlideStart(), this.createProgressbar(), this.showPreviousSlideOrFirst(), this.captureBrowserBack(), this.preventBrowserBack()
    },
    createProgressbar: function() {
        var i = this.fieldGroupManagers.length,
            t = 1e-4 / i * 100;
        $("#" + this.progressbarId).progressbar({
            value: t
        }), $("#" + this.progressbarId + " .ui-progressbar-value").append($("#" + this.progressbarTextId)), this.updateProgressbar(), this.changeProgressText()
    },
    showPreviousSlideOrFirst: function() {
        this.goToSlide(this.currentSlide, !0)
    },
    registerSlideStart: function() {
        0 == this.currentSlide && (this.fieldGroupManagers[this.currentSlide].trackFirstFields(), this.slideShowTracker.trackSlideView(this.currentSlide, $("#" + this.productFieldId).val()))
    },
    buildSlides: function(i, t, e) {
        if (i)
            for (var r = 0; r < i.length; r++) {
                i[r].context = e;
                var n = new FieldGroupManager(i[r], t, this.goAutoNextIfNotLastSlide, e);
                this.fieldGroupManagers.push(n)
            }
        $(t).append("<div class='clear'></div>")
    },
    getFieldGroups: function() {
        return this.fieldGroupManagers
    },
    isLastSlide: function() {
        return this.currentSlide == this.fieldGroupManagers.length - 1
    },
    getPreviousSlideNumberForCurrentProduct: function() {
        for (var i = this.currentSlide - 1, t = i; t > 0; t--)
            if (this.fieldGroupManagers[t].isGroupForProduct($("#" + this.productFieldId).val())) return t;
        return 0
    },
    getNextSlideNumberForCurrentProduct: function() {
        for (var i = this.currentSlide + 1, t = i; t < this.fieldGroupManagers.length; t++)
            if (this.fieldGroupManagers[t].isGroupForProduct($("#" + this.productFieldId).val())) return t;
        return i
    },
    scrollTop: function() {
        $("body").animate({
            scrollTop: 0
        }, "fast")
    },
    showHideSpinner: function(i) {
        !i || 1 != this.showSpinner && 1 != this.showSpinnerOnFormSubmit ? $("#" + this.spinnerId).hide() : $("#" + this.spinnerId).show()
    },
    postFormUsingAjax: function() {
        this.showInterstitial && this.showHideInternalInterstitial(!0), this.showHideSpinner(!0);
        var i = $("#" + this.formId).serialize(),
            t = $("#" + this.formId).attr("action");
        httpClient.postUsingAjax(this, "POST", t, i, function() {}), 1 == this.pollResponse ? this.pollLeadSubmit() : 1 == this.moneytipsRedirect ? this.redirectToMoneytips() : window.location.href = "/?estprg=4"
    },
    pollLeadSubmit: function() {
        origin.numberTimesPinged++;
        var i = "i-poll=true";
        1 == origin.addPublisherPingHtml && (i += "&add_publisher_ping_html=true", origin.logPublisherPingHtmlEnabled()), httpClient.postUsingAjax(origin, "POST", "/", i, origin.pollLeadSubmitComplete)
    },
    logPublisherPingHtmlEnabled: function() {
        1 != this.productionEnv && console.warn("Publisher ping html will be added here before interstitial page hence it will not fire on upsell, Please remove 'addPublisherPingHtml' in the slideManagerConfigOptions if this form gets to upsell page")
    },
    redirectToMoneytips: function(i) {
        1 == this.fireConversionPixel && i && this.addConversionPixelAndFireGAEvents(i);
        var t = "";
        i && void 0 !== i.secretToken && (t += "&secretToken=" + i.secretToken), window.location.href = origin.getUrlEncodedMoneytipsParams(t)
    },
    addConversionPixelAndFireGAEvents: function(i) {
        i.publisherPingHtml && 0 == this.conversionPixelFired && ($("body").append(i.publisherPingHtml), this.conversionPixelFired = !0), i.leadId && this.slideShowTracker.trackLeadSold(i.leadId)
    },
    pollLeadSubmitComplete: function(i, t, e) {
        return "completed" == i.status ? (1 == this.fireConversionPixel && !this.conversionPixelFired && i && this.addConversionPixelAndFireGAEvents(i), void(1 == this.moneytipsRedirect ? origin.redirectToMoneytips(i) : window.location.href = "/")) : origin.numberTimesPinged * origin.pingSleepTime >= origin.pingTimeOut ? void location.reload() : void setTimeout(origin.pollLeadSubmit, origin.pingSleepTime)
    },
    jsonParse: function(i) {
        return JSON.parse(i)
    },
    submitForm: function() {
        void 0 !== self.exitPop && "function" == typeof self.exitPop.submitButtonClick && self.exitPop.submitButtonClick(), void 0 !== self.utility && "function" == typeof self.utility.submitButtonClick && self.utility.submitButtonClick(), this.slideShowTracker.trackFormSubmit(), 1 != this.moneytipsRedirect && 1 != this.ajaxFormSubmit || this.postFormUsingAjax(), $("#" + this.formId).submit()
    },
    goForward: function(i) {
        this.isPendingNextAction() || this.isChangingSlide() || (i || this.fieldGroupManagers[this.currentSlide].allFieldsValid() ? this.currentSlide == this.fieldGroupManagers.length - 1 ? (this.removeSlideNumberFromCookie(), this.submitForm()) : this.goToSlide(this.getNextSlideNumberForCurrentProduct(), !1, "left") : this.fieldGroupManagers[this.currentSlide].isStateKnown() || (this.setPendingNextAction(!0), this.fieldGroupManagers[this.currentSlide].validateAllFieldsIfStateUnknown()))
    },
    goBack: function() {
        this.currentSlide > 0 && !this.isChangingSlide() && this.goToSlide(this.getPreviousSlideNumberForCurrentProduct(), !1, "right")
    },
    hidePreviousSlideAndShowNewSlide: function(i, t) {
        this.fieldGroupManagers[i].showHide(!1, this.hidePreviousSlideComplete, t)
    },
    hidePreviousSlideComplete: function(i) {
        i ? (i = "left" == i ? "right" : "left", origin.showNewCurrentSlide(i)) : origin.showNewCurrentSlide()
    },
    showNewCurrentSlide: function(i) {
        1 == i ? this.fieldGroupManagers[this.currentSlide].show() : this.fieldGroupManagers[this.currentSlide].showHide(!0, this.slideChangeComplete, i), this.updateProgressbar()
    },
    goToSlide: function(i, t, e) {
        var r = this.currentSlide;
        this.currentSlide = i, t ? this.showNewCurrentSlide(t) : this.hidePreviousSlideAndShowNewSlide(r, e), 1 == this.fieldGroupManagers[this.currentSlide].showPageHeader ? $("#" + this.pageHeaderId).show() : $("#" + this.pageHeaderId).hide(), this.currentSlide > 0 && this.currentSlide < this.fieldGroupManagers.length ? $("#" + this.backButtonGroupId).show() : $("#" + this.backButtonGroupId).hide();
        var n = this.fieldGroupManagers[this.currentSlide].canShowDisclaimer();
        this.showHideDisclaimer(n), this.changeContinueButtonText();
        var o = this.fieldGroupManagers[this.currentSlide].canSkipGroup;
        this.showHideSkipButton(o), this.showHideNextButton(), this.saveCurrentSlideNumberInCookie(), this.preventBrowserBack(), this.slideShowTracker.trackSlideView(this.currentSlide, $("#" + this.productFieldId).val())
    },
    changeContinueButtonText: function(i) {
        var t = this.fieldGroupManagers[this.currentSlide].getContinueButtonText();
        t ? $("#" + this.continueButtonId).html(t) : i ? $("#" + this.continueButtonId).html(this.lastSlideContinueButtonText) : $("#" + this.continueButtonId).html(this.defaultButtonText)
    },
    showHideDisclaimer: function(i) {
        i ? $("#" + this.disclaimerId).show() : $("#" + this.disclaimerId).hide()
    },
    isFieldPartOfCurrentSlide: function(i) {
        return this.fieldGroupManagers[this.currentSlide].isGroupManager(i)
    },
    goAutoNextIfNotLastSlide: function() {
        if (origin.fieldGroupManagers[origin.currentSlide].isGroupVisited()) {
            var i = origin.isPendingNextAction(),
                t = origin.fieldGroupManagers[origin.currentSlide].canAutoNext,
                e = origin.isLastSlide();
            (i || t && !e) && (origin.setPendingNextAction(!1), origin.goForward())
        } else origin.fieldGroupManagers[origin.currentSlide].isPendingValidation() || origin.setPendingNextAction(!1)
    },
    isPendingNextAction: function() {
        return this.pendingNextAction
    },
    setPendingNextAction: function(i) {
        this.pendingNextAction = i
    },
    isChangingSlide: function() {
        return this.changingSlide
    },
    setChangingSlide: function(i) {
        this.changingSlide = i
    },
    slideChangeComplete: function() {
        origin.setChangingSlide(!1), origin.scrollTop()
    },
    skipGroup: function() {
        origin.setPendingNextAction(!0), origin.fieldGroupManagers[origin.currentSlide].clearAllFieldsAndValidate(), origin.goForward()
    },
    showDisclaimer: function() {
        return this.fieldGroupManagers[this.currentSlide].showDisclaimer()
    },
    showHideSkipButton: function(i) {
        $("#" + this.skipButtonGroupId).length > 0 && (i ? ($("#" + this.skipButtonGroupId).show(), $("#" + this.backButtonGroupId).hide()) : $("#" + this.skipButtonGroupId).hide())
    },
    addActionSlideButtons: function() {
        $("#" + this.continueButtonId).on("click", function() {
            origin.goForward()
        }), $("#" + this.backButtonId).on("click", function() {
            origin.goBack()
        }), $("#" + this.skipButtonId).on("click", function() {
            origin.skipGroup()
        })
    },
    getCurrentSlideProgressbarValue: function() {
        var i = parseInt(this.fieldGroupManagers[this.currentSlide].progressbarPercentage);
        if (!i) {
            var t = this.fieldGroupManagers.length,
                e = this.currentSlide + 1;
            i = Math.round(e / t * 100)
        }
        return i
    },
    updateProgressbar: function() {
        var i = (this.fieldGroupManagers.length, this.currentSlide + 1, this.getCurrentSlideProgressbarValue());
        this.showProgressbar && this.fieldGroupManagers[this.currentSlide].showProgressbar ? ($("#" + this.progressbarId).show(), $("#" + this.progressbarId).progressbar({
            value: i
        }), $("#" + this.progressbarTextId).html(i + "%")) : $("#" + this.progressbarId).hide(), this.changeProgressText()
    },
    changeProgressText: function() {
        var i = void 0 !== this.fieldGroupManagers[this.currentSlide].progressText ? this.fieldGroupManagers[this.currentSlide].progressText : "";
        this.fieldGroupManagers[this.currentSlide].showProgressText ? ($("#" + this.progressTextId).html(i), $("#" + this.progressTextId).show()) : $("#" + this.progressTextId).hide()
    },
    setCookie: function(i, t) {
        var e = (new Date, "expires=0");
        document.cookie = i + "=" + t + "; " + e
    },
    readCookie: function(i) {
        for (var t = i + "=", e = document.cookie.split(";"), r = 0; r < e.length; r++) {
            for (var n = e[r];
                " " == n.charAt(0);) n = n.substring(1);
            if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
        }
        return ""
    },
    deleteCookie: function(i) {
        document.cookie = i + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    },
    saveCurrentSlideNumberInCookie: function() {
        this.setCookie(this.slideManagerCookieName, this.currentSlide)
    },
    getCurrentSlideNumberFromCookieOrDefault: function() {
        var i = 0,
            t = this.readCookie(this.slideManagerCookieName);
        return t && (i = parseInt(t)), i
    },
    removeSlideNumberFromCookie: function() {
        this.deleteCookie(this.slideManagerCookieName)
    },
    preventBrowserBack: function() {
        window.location.href = "#" + this.currentSlide
    },
    captureBrowserBack: function() {
        window.onhashchange = origin.onBrowserBack
    },
    onBrowserBack: function() {
        var i = window.location.hash.replace("#", "");
        i && NaN !== i ? (i = parseInt(i), i < origin.currentSlide && origin.goToSlide(i)) : origin.preventBrowserBack()
    },
    forceGoForward: function() {
        origin.goForward(!0)
    },
    showHideNextButton: function() {
        1 == this.fieldGroupManagers[this.currentSlide].hideNextButton ? this.hideNextButton() : this.showNextButton()
    },
    showNextButton: function() {
        $("#" + origin.continueButtonId).show()
    },
    hideNextButton: function() {
        $("#" + origin.continueButtonId).hide()
    },
    setFieldGroupShowNextButton: function(i, t) {
        for (var e = 0; e < this.fieldGroupManagers.length; e++) this.fieldGroupManagers[e].isOwnerOfField(t) && this.fieldGroupManagers[e].setShowNextButton(i)
    },
    getUrlEncodedMoneytipsParams: function(i) {
        var t = "/";
        return void 0 !== this.moneytipsRedirectConfig.getFullRedirectUrl && (t = this.moneytipsRedirectConfig.getFullRedirectUrl($("#" + this.productFieldId).val())), encodeURI(t)
    },
    showHideInternalInterstitial: function(i) {
        $("#" + this.interstitialElementId).length < 1 && $("#" + this.formId).parent().append("<div id='" + this.interstitialElementId + "' class='internal-interstitial' style='display:none;'>" + this.interstitialText + "</div>"), i ? this.showHideProgressBarElements(!1) : this.showHideProgressBarElements(!0), "SLIDE_UP" == this.slideTransition ? this.slideUpShowHideInterstitial(i) : "SLIDE_LEFT" == this.slideTransition ? this.slideLeftRightShowHideInterstitial(i) : this.fadeShowHideInterstitial(i)
    },
    fadeShowHideInterstitial: function(i) {
        i ? $("#" + this.formId).fadeOut(150, function() {
            $("#" + origin.interstitialElementId).fadeIn(150, function() {})
        }) : $("#" + this.interstitialElementId).fadeOut(150, function() {
            $("#" + origin.formId).fadeIn(150, function() {})
        })
    },
    slideUpShowHideInterstitial: function(i) {
        i ? ($("#" + this.formId).hide(), $("#" + origin.interstitialElementId).show("slide", {
            direction: "up"
        }, 200, function() {})) : ($("#" + this.interstitialElementId).hide(), $("#" + origin.formId).show("slide", {
            direction: "up"
        }, 200, function() {}))
    },
    slideLeftRightShowHideInterstitial: function(i) {
        var t = origin.getJqueryFormattedSlideDirection();
        i ? $("#" + this.formId).hide("slide", {
            direction: t
        }, 200, function() {
            var i = "left" == origin.getJqueryFormattedSlideDirection() ? "right" : "left";
            $("#" + origin.interstitialElementId).show("slide", {
                direction: i
            }, 200, function() {})
        }) : $("#" + this.interstitialElementId).hide("slide", {
            direction: t
        }, 200, function() {
            var i = "left" == origin.getJqueryFormattedSlideDirection() ? "right" : "left";
            $("#" + origin.formId).show("slide", {
                direction: i
            }, 200, function() {})
        })
    },
    showHideProgressBarElements: function(i) {
        i ? ($("#" + this.progressbarId).show(), $("#" + this.progressbarStepContainerId).show()) : ($("#" + this.progressbarId).hide(), $("#" + this.progressbarStepContainerId).hide())
    },
    getJqueryFormattedSlideDirection: function() {
        return "SLIDE_LEFT" == this.slideTransition ? "left" : "right"
    },
    getCurrentProduct: function() {
        return $("#" + this.productFieldId).val()
    }
});