const SCREEN_SIZE_M     =   550;
const SCREEN_SIZE_T     =   900;

const MILI_SEC_500      =   500;
const MILI_SEC_1000     =   1000;
const MILI_SEC_2000     =   2000;

const TIME_FORMAT_HR    =   "HR";   //  Hours
const TIME_FORMAT_MI    =   "MI";   //  Minutes
const TIME_FORMAT_SC    =   "SC";   //  Seconds
const TIME_FORMAT_DD    =   "DD";   //  Days
const TIME_FORMAT_MM    =   "MM";   //  Months
const TIME_FORMAT_YY    =   "YY";   //  Years

var fileListArray       =   [];
var classObects         =   {};
var bmwsUIFuncInit      =   "";
var defaultScreenSize   =   window.innerWidth;

$(document).ready(function() {
    var allowClick  =   true;
    var allowProcs  =   true;

    class NavigationBarBottomCurvedEdge {
        constructor() {}
        
        static factory() {
            let factoryObject = "";
            if (this.objBottomNav != undefined) {factoryObject = this.objBottomNav;}
            else {factoryObject = this.objBottomNav = new NavigationBarBottomCurvedEdge();} 
            return factoryObject
        }

        calculatePosition() {
            if ($(".bmws_indicator").length > 0) {
                let activePosLeft   = $(".bmws_active")[0].getBoundingClientRect().left;
                let indicatorWidth  = $(".bmws_indicator")[0].getBoundingClientRect().width;
                let activeWidth     = $(".bmws_active")[0].getBoundingClientRect().width;
                let navBarLeft      = $(".bmws_nav_bottom_ce")[0].getBoundingClientRect().left;
                // let calcValue       = activePosLeft + ((indicatorWidth - activeWidth)/2) + (activeWidth - indicatorWidth - navBarLeft);
                let calcValue       = activePosLeft == 0 ? 0 : (activePosLeft + ((indicatorWidth - activeWidth)/2) + (activeWidth - indicatorWidth - navBarLeft));
                $(".bmws_indicator")[0].style.transform = `translateX(${calcValue}px)`;
            }
        }

        operateNavigationBar(object) {
            $(".bmws_active").removeClass("bmws_active");
            $(object).addClass("bmws_active");
        }

        toggleNavMenuStyle(arg) {
            if (arg.activate == true) {
                // $($(".bmws_nav_menu_hr")[0]).css({"width": "20px", "transform": "rotate(45deg) translate(4px, 3px)"});
                // $($(".bmws_nav_menu_hr")[1]).css({"opacity": "0"});
                // $($(".bmws_nav_menu_hr")[2]).css({"width": "20px", "transform": "rotate(-45deg) translate(4px, -3px)"});

                $($(".bmws_nav_menu_hr")[0]).css({"width": "10px", "transform": "rotate(45deg) translate(3px, -5px)"});
                $($(".bmws_nav_menu_hr")[1]).css({"width": "10px", "transform": "rotate(90deg) translate(3px, -2px)"});
                $($(".bmws_nav_menu_hr")[2]).css({"width": "10px", "transform": "rotate(-45deg) translate(7px, -9px)"});
            } else {
                $(".bmws_nav_menu_hr").removeAttr("style");
            }
        }

        adjustMenu() {
            // let navMenu = $(`#${objectID} .bmws_nav_bottom_ce .bmws_nav_item`);
            let menuCol = "";
            let navMenu = $(`.bmws_nav_bottom_ce .bmws_nav_item`);
            let htmlCode= `<div id="idMenuExplorer" class="bmws_nav_item bmws_nav_menu">
                <div class="bmws_nav_item_i" style="flex-direction: column;">
                    <hr class="bmws_nav_menu_hr" id="idMenuHr1">
                    <hr class="bmws_nav_menu_hr" id="idMenuHr2">
                    <hr class="bmws_nav_menu_hr" id="idMenuHr3">
                </div>
                <div class="bmws_nav_item_t">More</div>
            </div>`;

            if (navMenu != undefined && navMenu.length > 6) {
                navMenu.each(function(index, value) {if (index > 4) {menuCol = menuCol + value.outerHTML; $(value).remove();}})
                $(`.bmws_nav_bottom_ce`).append(htmlCode);
                $(".bmws_nav_bottom-menuex-menu").html(menuCol);
                $(".bmws_nav_bottom-menuex-menu .bmws_nav_item").removeClass("bmws_nav_item").addClass("bmws_nav_item-menuex");
                $(".bmws_nav_bottom-menuex-menu .bmws_nav_item_i").removeClass("bmws_nav_item_i").addClass("bmws_nav_item-menuex-i");
                $(".bmws_nav_bottom-menuex-menu .bmws_nav_item_t").removeClass("bmws_nav_item_t").addClass("bmws_nav_item-menuex-t");
            }
        }
    }

    class NavigationBarLeftPan {
        constructor() {}
        
        static factory() {
            let factoryObject = "";
            if (this.objBottomNav != undefined) {factoryObject = this.objBottomNav;}
            else {factoryObject = this.objBottomNav = new NavigationBarLeftPan();} 
            return factoryObject
        }

        toggleNavMenuStyle(object) {
            $(".bmws_leftnav-cont .bmws_active").removeClass("bmws_active");
            $(object).addClass("bmws_active");
        }

        toggleExpandNavigator(object) {
            if ($(".bmws_leftnav-col").length > 0) {
                $(".bmws_leftnav-col").removeClass("bmws_leftnav-col").addClass("bmws_leftnav-exp");
                $(".bmws_leftnav-ind_cont").addClass("bmws_bgcolor-maroon");
            } else {
                $(".bmws_leftnav-exp").removeClass("bmws_leftnav-exp").addClass("bmws_leftnav-col");
                $(".bmws_leftnav-ind_cont").removeClass("bmws_bgcolor-maroon");
            }
            
            if ($(".bmws_leftnav-icc").length > 0) {
                $(".bmws_leftnav-icc").removeClass("bmws_leftnav-icc").addClass("bmws_leftnav-ice");
            } else {
                $(".bmws_leftnav-ice").removeClass("bmws_leftnav-ice").addClass("bmws_leftnav-icc");
            }
        }
    }

    class PopupDesign {
        constructor() {}
    }

    class inputElementsDesign {
        constructor() {}
    }

    class LoginRegisterAlter {
        constructor() {}
    }

    class SwitchInputDesign {
        constructor() {}
    }
    
    class ModalDialogFunctions {
        static objModalDialog = undefined;
        constructor() {
            this.indHead = "H";
            this.indBody = "B";
            this.indFoot = "F";
        }

        static factory() {
            let factoryObject = "";
            if (this.objModalDialog != undefined) {factoryObject = this.objModalDialog;}
            else {factoryObject = this.objModalDialog = new ModalDialogFunctions();} 
            return factoryObject
        }

        createModal(arg) {
            let retValue = "";

            retValue = `<div class="bmws_modaldialog-custcrt bmws_modaldialog-hide" id="${arg.id}">
                <div class="${arg.colclass} bmws_modal-cont-no">
                    <div class="bmws_modal-head">
                        <div class="bmws_modal-icon">${arg.header.icon}</div>
                        <div class="bmws_modal-title ${arg.colclass}">${arg.header.title}</div>
                        <div class="bmws_modal-close"><i class="fas fa-times"></i></div>
                    </div>
                    <div class="bmws_modal-body">
                        ${arg.body.content}
                    </div>
                    <div class="bmws_modal-foot">
                        ${
                            arg.foot && arg.foot.content && arg.foot.content.trim().length > 0 ? arg.foot.content : 
                            `<div class="bmws_modal-foot-cust-cont">
                            </div>
                            <div class="bmws_modal-foot-default">
                                <button class="bmws_btn_border-red bmws_modal-reject">Cancel</button>
                                <button class="bmws_btn_border-blue bmws_modal-accept">Continue</button>
                            </div>`
                        }
                    </div>
                </div>
            </div>`;

            if ($("footer").length == 0) {return retValue;} else {$("footer").append(retValue);}
        }
        
        hideModal(object, arg, callback) {
            let currObj = object == undefined ? $(".bmws_modaldialog") : object;
            currObj.one("hidemodal", (event) => {
                // $($(currObj).children()[0]).removeClass($($(currObj).children()[0]).attr("class")).addClass("bmws_modal_cont-no");
                if (arg.size == undefined || arg.size.trim().length == 0) {
                    $($(currObj).children()[0]).removeClass("bmws_modal_cont-xs");
                    $($(currObj).children()[0]).removeClass("bmws_modal_cont-sm");
                    $($(currObj).children()[0]).removeClass("bmws_modal_cont-md");
                    $($(currObj).children()[0]).removeClass("bmws_modal_cont-lg");
                    $($(currObj).children()[0]).removeClass("bmws_modal_cont-xl");
                    $($(currObj).children()[0]).removeClass("bmws_modal_cont-fl");
                    $($(currObj).children()[0]).addClass("bmws_modal_cont-no");
                } else {
                    $($(currObj).children()[0]).removeClass(`bmws_modal_cont-${arg.size}`).addClass("bmws_modal_cont-no");
                }
                $(currObj).attr("id", "idModalDialog");
                $("#idModalDialog .bmws_modal-foot").removeClass("bmws_hidden");
                $("#idModalDialog .bmws_modal-foot-cust-cont").removeAttr("style").addClass("bmws_hidden").empty();
                $("#idModalDialog .bmws_modal-foot-default").removeAttr("style").removeClass("bmws_hidden");

                arg.emptyBody == true ? $($($(currObj).children()[0]).children()[1]).empty() : "";
                arg.resetStyle != false ? this.resetModalDialogStyle(object) : "";
                setTimeout(() => {currObj.removeClass("bmws_modaldialog").addClass("bmws_modaldialog-hide");}, 250);
                if (callback != undefined) {
                    if (typeof(callback) == "function") {callback();} else {console.error("Pass a parameter type funciton");}
                }
                if ($(".bmws_modaldialog-custcrt").length > 0) {setTimeout(() => {$(".bmws_modaldialog-custcrt").remove();}, MILI_SEC_500);}
            })
            currObj.trigger("hidemodal");
        }

        resetModalDialogStyle(object) {
            $(object).removeAttr("style");
            $($(object).children()[0]).removeAttr("style");
            $($($(object).children()[0]).children()[0]).removeAttr("style");
            $($($(object).children()[0]).children()[1]).removeAttr("style");
            $($($(object).children()[0]).children()[2]).removeAttr("style");
        }

        showModal(object, arg, callback) {
            $(object).one("showmodal", (event) => {
                object.removeClass("bmws_modaldialog-hide").addClass("bmws_modaldialog");
                setTimeout(() => {
                    if (arg.head != undefined) {
                        this.appendContent(object, {
                            areacode: this.indHead,
                            content: arg.head.content,
                            isvisible: arg.head.isvisible,
                            iscloseable: arg.head.iscloseable,
                            style: arg.head.style,
                            icon: arg.head.icon
                        })
                    }
    
                    if (arg.body != undefined) {
                        this.appendContent(object, {
                            areacode: this.indBody,
                            content: arg.body.content,
                            isvisible: arg.body.isvisible,
                            style: arg.body.style
                        })
                    }
    
                    if (arg.foot != undefined) {
                        this.appendContent(object, {
                            areacode: this.indFoot,
                            content: arg.foot.content,
                            showDefault: arg.foot.showDefault,
                            showCustom: arg.foot.showCustom,
                            isvisible: arg.foot.isvisible,
                            style: arg.foot.style
                        })
                    }
                    this.updateDialogSize(object, {size: arg.size});
                    this.updateModalSize(object, {style: arg.style});
                    this.updateModalID(object, {id: arg.id});
                }, 50);
                if (callback != undefined) {
                    if (typeof(callback) == "function") {callback();} else {console.error("Pass a parameter type funciton");}
                }
            })
            $(object).trigger("showmodal");
        }

        appendContent(object, arg) {
            switch (arg.areacode) {
                case this.indHead:
                    arg.style != undefined ? $($($(object).children()[0]).children()[0]).css(arg.style).addClass(`${arg.isvisible == true ? "" : "hidden"}`) : "";
                    arg.icon != undefined ? $($($($(object).children()[0]).children()[0]).children()[0]).html(arg.icon) : "";
                    arg.content != undefined ? $($($($(object).children()[0]).children()[0]).children()[1]).html(arg.content) : "";
                    $($($($(object).children()[0]).children()[0]).children()[2]).addClass(`${arg.iscloseable == true ? "" : "bmws_hidden"}`);
                    break;
                case this.indBody:
                    $($($(object).children()[0]).children()[1]).addClass(`${arg.isvisible == true ? "" : "bmws_hidden"}`);
                    arg.style != undefined ? $($($(object).children()[0]).children()[1]).css(arg.style) : "";
                    arg.content != undefined ? arg.content.trim().length > 0 ? $($($(object).children()[0]).children()[1]).html(arg.content) : "" : "";
                    break;
                case this.indFoot:
                    $($($(object).children()[0]).children()[2]).addClass(`${arg.isvisible == true ? "" : "bmws_hidden"}`);
                    arg.style != undefined ? $($($(object).children()[0]).children()[2]).css(arg.style) : "";
                    arg.content != undefined ? arg.content.trim().length > 0 ? $($($($(object).children()[0]).children()[2]).children()[0]).html(arg.content) : "" : "";
                    $($($($(object).children()[0]).children()[2]).children()[0]).removeClass("bmws_hidden");
                    $($($($(object).children()[0]).children()[2]).children()[1]).removeClass("bmws_hidden");

                    arg.showCustom == false ? $($($($(object).children()[0]).children()[2]).children()[0]).addClass("bmws_hidden") : "";
                    arg.showDefault == false ? $($($($(object).children()[0]).children()[2]).children()[1]).addClass("bmws_hidden") : "";

                    arg.showDefault == false ? $($($($(object).children()[0]).children()[2]).children()[0]).css({"justify-content": "flex-end"}) : "";
                    break;
            }
        }

        updateFootCustCont(object, arg) {
            $($($($(object).children()[0]).children()[2]).children()[0]).html(arg.content);
        }

        updateDialogSize(object, arg) {
            let currSize = $(object.children()[0]).attr("class");
            currSize = currSize.slice(currSize.indexOf("bmws_modal_cont-")).split(" ")[0];
            $(object.children()[0]).removeClass(currSize).addClass(`bmws_modal_cont-${arg.size}`);
        }

        updateModalSize(object, arg) {
            arg.style != undefined ? $(object).attr("style", arg.style) : "";
        }

        updateModalID(object, arg) {
            arg.id != undefined ? $(object).attr("id", arg.id) : "";
        }

        updateIcon(object, arg) {
            $($($($(object).children()[0]).children()[0]).children()[0]).text(arg.icon);
        }

        updateTitle(object, arg) {
            $($($($(object).children()[0]).children()[0]).children()[1]).text(arg.title);
        }

        updateTitleID(object, arg) {
            $($($($(object).children()[0]).children()[0]).children()[1]).attr("id", arg.title_id);
        }

        updateHeaderID(object, arg) {
            $($($(object).children()[0]).children()[0]).attr("id", arg.header_id);
        }

        disableCloseButton(object) {
            $($($($(object).children()[0]).children()[0]).children()[2]).addClass("hidden");
        }

        enableCloseButton(object) {
            $($($($(object).children()[0]).children()[0]).children()[2]).removeClass("hidden");
        }

        hideHeader(object) {
            $($($(object).children()[0]).children()[0]).addClass("hidden");
        }

        showHeader(object) {
            $($($(object).children()[0]).children()[0]).removeClass("hidden");
        }

        hideBody(object) {
            $($($(object).children()[0]).children()[1]).addClass("hidden");
        }

        showBody(object) {
            $($($(object).children()[0]).children()[1]).removeClass("hidden");
        }

        hideFooter(object) {
            $($($(object).children()[0]).children()[2]).addClass("hidden");
        }

        showFooter(object) {
            $($($(object).children()[0]).children()[2]).removeClass("hidden");
        }

        hideFooterDefault(object) {
            let checkDefault = "";
            $.each($($($(object).children()[0]).children()[2]).children(), (index, value) => {
                checkDefault == false ? checkDefault = $(value).hasClass("bmws_modal-foot-default") : "";
            })
            if (checkDefault == true) {$($($($(object).children()[0]).children()[2]).children()[1]).addClass("hidden");}
        }
        
        showFooterDefault(object) {
            let checkDefault = "";
            $.each($($($(object).children()[0]).children()[2]).children(), (index, value) => {
                checkDefault == false ? checkDefault = $(value).hasClass("bmws_modal-foot-default") : "";
            })
            if (checkDefault == true) {$($($($(object).children()[0]).children()[2]).children()[1]).removeClass("hidden");}
        }

        hideFooterCustom(object) {
            let checkDefault = "";
            $.each($($($(object).children()[0]).children()[2]).children(), (index, value) => {
                checkDefault == false ? checkDefault = $(value).hasClass("bmws_modal-foot-cust-cont") : "";
            })
            if (checkDefault == true) {$($($($(object).children()[0]).children()[2]).children()[1]).addClass("hidden");}
        }
        
        showFooterCustom(object) {
            let checkDefault = "";
            $.each($($($(object).children()[0]).children()[2]).children(), (index, value) => {
                checkDefault == false ? checkDefault = $(value).hasClass("modaldialog-foot-cust-cont") : "";
            })
            if (checkDefault == true) {$($($($(object).children()[0]).children()[2]).children()[1]).removeClass("hidden");}
        }

        setHeaderData(object, arg) {
            (arg.title != undefined && arg.title.trim().length > 0) ? this.updateTitle(object, arg) : "";
            (arg.icon != undefined && arg.icon.trim().length > 0) ? this.updateIcon(object, arg) : "";
            (arg.title_id != undefined && arg.title_id.trim().length > 0) ? this.updateTitleID(object, arg) : "";
            (arg.header_id != undefined && arg.header_id.trim().length > 0) ? this.updateHeaderID(object, arg) : "";
        }

        getHeaderData(object) {
            let retValue = {
                header_id: "",
                title_id: "",
                title: "",
                icon: ""
            }

            retValue.header_id = $($($(object).children()[0]).children()[0]).attr("id");
            retValue.title_id = $($($($(object).children()[0]).children()[0]).children()[1]).attr("id");
            retValue.title = $($($($(object).children()[0]).children()[0]).children()[1]).text();
            retValue.icon = $($($($(object).children()[0]).children()[0]).children()[0]).html();

            return retValue;
        }
    }

    class NumberCounterFunctions {
        static objCounterUI = undefined;
        constructor() {}

        static factory() {
            let factoryObject = "";
            if (this.objCounterUI != undefined) {factoryObject = this.objCounterUI;}
            else {factoryObject = this.objCounterUI = new NumberCounterFunctions();} 
            return factoryObject
        }

        activateAutoCounter(object) {
            const hundred       = 100;
            const thousand      = 1000;
            const million       = 1000000;
            const billion       = 1000000000;
            const trillion      = 1000000000000;
            const quadrillion   = 1000000000000000;
            const quintrillion  = 1000000000000000000;
            
            let maxCount = parseInt($(object).attr("data-counter"));
            let countoum = $(object).next().text();
            let countNum = 0;
            let incrmntr = 1;
            let intvTime = 0;

            if (maxCount >= hundred && maxCount < thousand) {
                incrmntr = Math.round((maxCount / thousand) * 10);
            }
            
            if (maxCount >= thousand && maxCount < million) {
                incrmntr = Math.round((maxCount / million) * 10);
                maxCount = Math.floor(maxCount / thousand);
                countoum = "K";
            } else if (maxCount >= million && maxCount < billion) {
                incrmntr = Math.round((maxCount / billion) * 10);
                maxCount = Math.floor(maxCount / million);
                countoum = "M";
            } else if (maxCount >= billion && maxCount < trillion) {
                incrmntr = Math.round((maxCount / trillion) * 10);
                maxCount = Math.floor(maxCount / billion);
                countoum = "B";
            } else if (maxCount >= trillion && maxCount < quadrillion) {
                incrmntr = Math.round((maxCount / quadrillion) * 10);
                maxCount = Math.floor(maxCount / trillion);
                countoum = "T";
            } else if (maxCount >= quadrillion && maxCount < quintrillion) {
                incrmntr = Math.round((maxCount / quintrillion) * 10);
                maxCount = Math.floor(maxCount / quadrillion);
                countoum = "Q";
            }

            incrmntr = incrmntr == 0 ? 0.1 : incrmntr;
            $(object).next().text(countoum);

            let counter = setInterval(() => {
                countNum = countNum + incrmntr;
                countNum = countNum > maxCount ? countNum - (countNum - maxCount) : countNum;
                $(object).text(countNum.toFixed(0));
                if (countNum >= maxCount) {
                    clearInterval(counter);
                }
            }, intvTime);
        }
    }

    class MessageToastFunctions {
        static objMsgToastUI = undefined;
        constructor() {
            this.COL_IND = {
                COL_IND_INFO: "I",
                COL_IND_DARK: "D",
                COL_IND_ALERT: "A",
                COL_IND_LIGHT: "L",
                COL_IND_ERROR: "E",
                COL_IND_WARN: "W",
                COL_IND_SUCCESS: "S"
            };
    
            this.ICON_CONT = {
                ICON_INFO: `<i class="fas fa-info-circle"></i>`,
                ICON_ERROR: `<i class="fas fa-exclamation-circle"></i>`,
                ICON_WARN: `<i class="fas fa-exclamation-triangle"></i>`,
                ICON_SUCCESS: `<i class="fas fa-check-circle"></i>`
            };
    
            this.TOAST_DUR = {
                QUICK: "Q",
                MODERATE: "M",
                SLOW: "S"
            };
    
            this.BOOL_VAL = {
                BOOL_TRUE: true,
                BOOL_FALSE: false
            }
        }

        static factory() {
            let factoryObject = "";
            if (this.objMsgToastUI != undefined) {factoryObject = this.objMsgToastUI;}
            else {factoryObject = this.objMsgToastUI = new MessageToastFunctions();} 
            return factoryObject;
        }

        showMsgToast(arg) {
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  ABOUT:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  This method is responsible to show a toast message. It takes some arguments which decides which type of toast you want to show.
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  ARGUMENTS:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  It takes one argument which is type of JSON object. This object contains below arguments.
            /*  1. currObj  :   Pass the identifier of the object (Class or ID) with CSS extension "." or "#".
            /*  2. msgCont  :   Toast Message (Pass Text ot HTML)
            /*  3. toastType:   Pass Type of the Toast. The type decides whether you want to show error, success, warning, info etc type of toast.
            /*                  Basically, it changes the color and the icon of the toast. You have the below list of toast types.
            /*                  a. COL_IND.COL_IND_DARK     (D : Dark Color Toast)
            /*                  b. COL_IND.COL_IND_LIGHT    (L : Light Color Toast)
            /*                  c. COL_IND.COL_IND_INFO     (I : For Information Type Toast)
            /*                  d. COL_IND.COL_IND_ALERT    (A : For Alert Type Toast)
            /*                  e. COL_IND.COL_IND_ERROR    (E : For Error Type Toast)
            /*                  f. COL_IND.COL_IND_WARN     (W : For Warning Type Toast)
            /*                  g. COL_IND.COL_IND_SUCCESS  (S : For Success Type Toast)
            /*  4. autoClose:   This argument tells if the toast closes automatically, or on cick of close button. It takes boolean values.
            /*                  a. BOOL_VAL.BOOL_TRUE       (true : The toast closes automatically)
            /*                  b. BOOL_VAL.BOOL_FALSE      (false: The toast closes on click of close button)
            /*  5. duration :   This argument decides how long the toast will appear. This option is valid when the autoClose flag is true.
            /*                  It takes the below values.
            /*                  a. TOAST_DUR.QUICK          (Q  : 1 Sec - Short Duration)
            /*                  b. TOAST_DUR.MODERATE       (M  : 1.5 Sec - Medium Duration)
            /*                  c. TOAST_DUR.SLOW           (S  : 2 Sec - Long Duration)
            /*  6. custom   :   This argument is used for any custom setup for the toast. With using this argument, you can override the exiting
            /*                  default setups. This is type of JSON Object. You can use the below options for this argument.
            /*                  a. color:   Custom Color
            /*                  b. duration: Custom Auto Close Duration
            /*                  c. icon :   Custom Icon
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  EXAMPLE:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  First of all create an object of this Toast Class (e.g. objToast).
            /*  *--- With Default Setup ---*
            /*  objToast.showMsgToast({
            /*      currObj : "#idToaster" / ".msgToaster",
            /*      toastType: objToast.COL_IND.COL_IND_ERROR / "E",
            /*      msgCont: "Message Text",
            /*      autoClose: true,
            /*      duration: "S"
            /*  })
            /*  *--- With Custom Setup ---*
            /*  objToast.showMsgToast({
            /*      currObj : "#idToaster" / ".msgToaster",
            /*      toastType: objToast.COL_IND.COL_IND_ERROR / "E",
            /*      msgCont: "Message Text",
            /*      autoClose: true,
            /*      duration: "S",
            /*      custom: {
            /*          color: rgba(0, 0, 0, 0.75),
            /*          duration: 3000 (in miliseconds),
            /*          icon: `<i class="fas fa-exclamation-circle"></i>`
            /*      }
            /*  })
            /*--------------------------------------------------------------------------------------------------------------------------------*/
    
            let toasterClass = "";
            let toastIconCls = "";
            let toastCustSty = "";
            let toastMsgDur = "";
        
            switch (arg.toastType) {
                case this.COL_IND.COL_IND_ALERT: toasterClass = "bmws_toast-alert"; toastIconCls = this.ICON_CONT.ICON_INFO; break;
                case this.COL_IND.COL_IND_INFO: toasterClass = "bmws_toast-info"; toastIconCls = this.ICON_CONT.ICON_INFO; break;
                case this.COL_IND.COL_IND_DARK: toasterClass = "bmws_toast-dark"; toastIconCls = this.ICON_CONT.ICON_INFO; break;
                case this.COL_IND.COL_IND_ERROR: toasterClass = "bmws_toast-error"; toastIconCls = this.ICON_CONT.ICON_ERROR; break;
                case this.COL_IND.COL_IND_LIGHT: toasterClass = "bmws_toast-light"; toastIconCls = this.ICON_CONT.ICON_INFO; break;
                case this.COL_IND.COL_IND_WARN: toasterClass = "bmws_toast-warn"; toastIconCls = this.ICON_CONT.ICON_WARN; break;
                case this.COL_IND.COL_IND_SUCCESS: toasterClass = "bmws_toast-success"; toastIconCls = this.ICON_CONT.ICON_SUCCESS; break;
                default: console.error("Incorrect Toast Type Passed"); break;
            }
    
            switch (arg.duration) {
                case "Q": toastMsgDur = MILI_SEC_1000; break;
                case "M": toastMsgDur = MILI_SEC_1000 * 2; break;
                case "S": toastMsgDur = (MILI_SEC_2000 + MILI_SEC_500) * 2; break;
            }
    
            if (arg.custom != undefined && Object.keys(arg.custom).length > 0) {
                if (arg.custom.icon != undefined && arg.custom.icon.trim().length > 0) {toastIconCls = arg.custom.icon;}
                if (arg.custom.color != undefined && arg.custom.color.trim().length > 0) {toastCustSty = arg.custom.color;}
                if (arg.custom.duration != undefined && arg.custom.duration.trim().length > 0) {toastMsgDur = arg.custom.duration;}
            }
    
            $(`${arg.currObj} .bmws_msg_toast-symbol`).html(toastIconCls);
            $(`${arg.currObj} .bmws_msg_toast-msg_cont`).html(arg.msgCont);
            if (arg.autoClose == this.BOOL_VAL.BOOL_TRUE) {$(`${arg.currObj} .bmws_msg_toast-close`).addClass("hidden");}
            else {$(`${arg.currObj} .bmws_msg_toast-close`).removeClass("hidden");}
        
            // $(arg.currObj).removeAttr("class").addClass(toasterClass);
            $(arg.currObj).removeClass("bmws_msg_toaster-hide").addClass(`bmws_msg_toaster ${toasterClass}`);
            // $(arg.currObj).removeClass("bmws_msg_toaster-hide").addClass("bmws_msg_toaster").addClass(toasterClass);
            toastCustSty.trim().length == 0 ? "" : $(arg.currObj).css({"color": toastCustSty, "box-shadow": `0px 0px 20px ${toastCustSty}`});
            arg.autoClose == this.BOOL_VAL.BOOL_TRUE ? setTimeout(() => {this.hideMsgToast({currObj: `.${toasterClass}`});}, toastMsgDur) : "";
        }
    
        hideMsgToast(arg) {
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  ABOUT:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  This method is responsible to hide a toast message. It works based on the argument passed.
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  ARGUMENTS:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  It takes one argument as shown below.
            /*  1. currObj  :   Pass the identifier of the object (Class or ID) to the JSON object. If not passed, this method will use the CSS
            /*                  class name to hide the toaster.
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  EXAMPLE:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  First of all create an object of this Toast Class (e.g. objToast).
            /*  objToast.hideToastMsg({
            /*      currObj : "#idToaster" / ".msgToaster"
            /*  })
            /*--------------------------------------------------------------------------------------------------------------------------------*/
    
            if (arg.currObj == undefined) {
                $(".bmws_msg_toast-symbol").empty();
                $(".bmws_msg_toast-msg_cont").empty();
                $(".bmws_msg_toast-close").addClass("hidden");
                $($(".bmws_msg_toast-symbol").parent()).removeAttr("class").addClass("bmws_msg_toaster-hide");
            } else {
                $(`${arg.currObj} .bmws_msg_toast-symbol`).empty();
                $(`${arg.currObj} .bmws_msg_toast-msg_cont`).empty();
                $(`${arg.currObj} .bmws_msg_toast-close`).addClass("hidden");
                $(`${arg.currObj}`).removeAttr("class").addClass("bmws_msg_toaster-hide");
            }
        }
    
        changeToastType(arg) {
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  ABOUT:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  This method is responsible to change the type of the toast message. It works based on the arguments passed.
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  ARGUMENTS:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  It takes one argument which is type of object and has below mentioned parameters.
            /*  1. currObj  :   Pass the identifier of the object (Class or ID) to the JSON object. If not passed, this method will use the CSS
            /*                  class name to hide the toaster.
            /*  2. toastType:   Pass Type of the Toast. The type decides whether you want to show error, success, warning, info etc type of toast.
            /*                  Basically, it changes the color and the icon of the toast. You have the below list of toast types.
            /*                  a. COL_IND.COL_IND_DARK     (D : Dark Color Toast)
            /*                  b. COL_IND.COL_IND_LIGHT    (L : Light Color Toast)
            /*                  c. COL_IND.COL_IND_INFO     (I : For Information Type Toast)
            /*                  d. COL_IND.COL_IND_ALERT    (A : For Alert Type Toast)
            /*                  e. COL_IND.COL_IND_ERROR    (E : For Error Type Toast)
            /*                  f. COL_IND.COL_IND_WARN     (W : For Warning Type Toast)
            /*                  g. COL_IND.COL_IND_SUCCESS  (S : For Success Type Toast)
            /*  6. custom   :   This argument is used for any custom setup for the toast. With using this argument, you can override the exiting
            /*                  default setups. This is type of JSON Object. You can use the below options for this argument.
            /*                  a. color:   Custom Color
            /*                  b. icon :   Custom Icon
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  EXAMPLE:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  First of all create an object of this Toast Class (e.g. objToast).
            /*  *--- With Default Setup ---*
            /*  objToast.showToastMsg({
            /*      currObj : "#idToaster" / ".msgToaster",
            /*      toastType: objToast.COL_IND.COL_IND_ERROR / "E"
            /*  })
            /*  *--- With Custom Setup ---*
            /*  objToast.showToastMsg({
            /*      currObj : "#idToaster" / ".msgToaster",
            /*      toastType: objToast.COL_IND.COL_IND_ERROR / "E",
            /*      custom: {
            /*          color: rgba(0, 0, 0, 0.75),
            /*          icon: `<i class="fas fa-exclamation-circle"></i>`
            /*      }
            /*  })
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            let toasterClass = "";
            let toastIconCls = "";
            let toastCustSty = "";
            
            switch (arg.toastType) {
                case this.COL_IND.COL_IND_ALERT: toasterClass = "bmws_toast-alert"; toastIconCls = this.ICON_CONT.ICON_INFO; break;
                case this.COL_IND.COL_IND_INFO: toasterClass = "bmws_toast-info"; toastIconCls = this.ICON_CONT.ICON_INFO; break;
                case this.COL_IND.COL_IND_DARK: toasterClass = "bmws_toast-dark"; toastIconCls = this.ICON_CONT.ICON_INFO; break;
                case this.COL_IND.COL_IND_ERROR: toasterClass = "bmws_toast-error"; toastIconCls = this.ICON_CONT.ICON_ERROR; break;
                case this.COL_IND.COL_IND_LIGHT: toasterClass = "bmws_toast-light"; toastIconCls = this.ICON_CONT.ICON_INFO; break;
                case this.COL_IND.COL_IND_WARN: toasterClass = "bmws_toast-warn"; toastIconCls = this.ICON_CONT.ICON_WARN; break;
                case this.COL_IND.COL_IND_SUCCESS: toasterClass = "bmws_toast-success"; toastIconCls = this.ICON_CONT.ICON_SUCCESS; break;
                default: console.error("Incorrect Toast Type Passed"); break;
            }
    
            if (arg.custom != undefined && Object.keys(arg.custom).length > 0) {
                if (arg.custom.icon != undefined && arg.custom.icon.trim().length > 0) {toastIconCls = arg.custom.icon;}
                if (arg.custom.color != undefined && arg.custom.color.trim().length > 0) {toastCustSty = arg.custom.color;}
            }
            
            $(`${arg.currObj} .bmws_msg_toast-symbol`).html(toastIconCls);
            toastCustSty.trim().length == 0 ? "" : $(arg.currObj).css({"color": toastCustSty, "box-shadow": `0px 0px 20px ${toastCustSty}`});
            $(arg.currObj).removeAttr("class").addClass(toasterClass);
        }
    
        appendToastContent(arg) {
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  ABOUT:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  This method is responsible to append a toast message. It works based on the argument passed.
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  ARGUMENTS:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  It takes one argument which is type of object and has below mentioned parameters.
            /*  1. currObj  :   Pass the identifier of the object (Class or ID) to the JSON object. If not passed, this method will use the CSS
            /*                  class name to hide the toaster.
            /*  2. msgCont  :   Toast Message (Pass Text ot HTML)
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  EXAMPLE:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  First of all create an object of this Toast Class (e.g. objToast).
            /*  objToast.hideToastMsg({
            /*      currObj : "#idToaster" / ".msgToaster"
            /*  })
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            $(`${arg.currObj} .bmws_msg_toast-msg_cont`).html(arg.msgCont);
        }
    
        toggleCloseable(arg) {
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  ABOUT:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  This method is responsible to decides whether the toast message is auto-closeable or manual closable. 
            /*  It works based on the argument passed.
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  ARGUMENTS:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  It takes one argument which is type of object and has below mentioned parameters.
            /*  1. currObj  :   Pass the identifier of the object (Class or ID) to the JSON object. If not passed, this method will use the CSS
            /*                  class name to hide the toaster.
            /*  2. autoClose:   This argument tells if the toast closes automatically, or on cick of close button. It takes boolean values.
            /*                  a. BOOL_VAL.BOOL_TRUE       (true : The toast closes automatically)
            /*                  b. BOOL_VAL.BOOL_FALSE      (false: The toast closes on click of close button)
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  EXAMPLE:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  First of all create an object of this Toast Class (e.g. objToast).
            /*  objToast.toggleCloseable({
            /*      currObj : "#idToaster" / ".msgToaster",
            /*      autoClose: BOOL_VAL.BOOL_TRUE (true) / BOOL_VAL.BOOL_FALSE (false)
            /*  })
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            if (arg.autoClose == this.BOOL_VAL.BOOL_TRUE) {$(`${arg.currObj} .bmws_msg_toast-close`).addClass("hidden");}
            else {$(`${arg.currObj} .bmws_msg_toast-close`).removeClass("hidden");}
        }
    
        changeToastIcon(arg) {
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  ABOUT:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  This method is responsible to change the Toast Icon.
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  ARGUMENTS:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  It takes one argument which is type of JSON object. This object contains below arguments.
            /*  1. currObj  :   Pass the identifier of the object (Class or ID) with CSS extension "." or "#".
            /*  2. msgCont  :   Toast Message (Pass Text ot HTML)
            /*  3. toastType:   Pass Type of the Toast. The type decides whether you want to show error, success, warning, info etc type of toast.
            /*                  Basically, it changes the color and the icon of the toast. You have the below list of toast types.
            /*                  a. COL_IND.COL_IND_DARK     (D : Dark Color Toast)
            /*                  b. COL_IND.COL_IND_LIGHT    (L : Light Color Toast)
            /*                  c. COL_IND.COL_IND_INFO     (I : For Information Type Toast)
            /*                  d. COL_IND.COL_IND_ALERT    (A : For Alert Type Toast)
            /*                  e. COL_IND.COL_IND_ERROR    (E : For Error Type Toast)
            /*                  f. COL_IND.COL_IND_WARN     (W : For Warning Type Toast)
            /*                  g. COL_IND.COL_IND_SUCCESS  (S : For Success Type Toast)
            /*  4. autoClose:   This argument tells if the toast closes automatically, or on cick of close button. It takes boolean values.
            /*                  a. BOOL_VAL.BOOL_TRUE       (true : The toast closes automatically)
            /*                  b. BOOL_VAL.BOOL_FALSE      (false: The toast closes on click of close button)
            /*  5. duration :   This argument decides how long the toast will appear. This option is valid when the autoClose flag is true.
            /*                  It takes the below values.
            /*                  a. TOAST_DUR.QUICK          (Q  : 1 Sec - Short Duration)
            /*                  b. TOAST_DUR.MODERATE       (M  : 1.5 Sec - Medium Duration)
            /*                  c. TOAST_DUR.SLOW           (S  : 2 Sec - Long Duration)
            /*  6. custom   :   This argument is used for any custom setup for the toast. With using this argument, you can override the exiting
            /*                  default setups. This is type of JSON Object. You can use the below options for this argument.
            /*                  a. color:   Custom Color
            /*                  b. duration: Custom Auto Close Duration
            /*                  c. icon :   Custom Icon
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  EXAMPLE:
            /*--------------------------------------------------------------------------------------------------------------------------------*/
            /*  First of all create an object of this Toast Class (e.g. objToast).
            /*  *--- With Default Setup ---*
            /*  objToast.showToastMsg({
            /*      currObj : "#idToaster" / ".msgToaster",
            /*      toastType: objToast.COL_IND.COL_IND_ERROR / "E",
            /*      msgCont: "Message Text",
            /*      autoClose: true,
            /*      duration: "S"
            /*  })
            /*  *--- With Custom Setup ---*
            /*  objToast.showToastMsg({
            /*      currObj : "#idToaster" / ".msgToaster",
            /*      toastType: objToast.COL_IND.COL_IND_ERROR / "E",
            /*      msgCont: "Message Text",
            /*      autoClose: true,
            /*      duration: "S",
            /*      custom: {
            /*          color: rgba(0, 0, 0, 0.75),
            /*          duration: 3000 (in miliseconds),
            /*          icon: `<i class="fas fa-exclamation-circle"></i>`
            /*      }
            /*  })
            /*--------------------------------------------------------------------------------------------------------------------------------*/
        }
    }

    class CheckboxFunctions {
        static objCheckboxUI = undefined;
        constructor() {}

        static factory() {
            let factoryObject = "";
            if (this.objCheckboxUI != undefined) {factoryObject = this.objCheckboxUI;}
            else {factoryObject = this.objCheckboxUI = new CheckboxFunctions();} 
            return factoryObject;
        }

        alterCheckboxAction(object) {
            if ($(object).hasClass("bmws_checkbox-uncheck")) {
                if ($(object).parent().hasClass("bmws_checkbox-group") == true) {
                    $.each($(object).parent().children(), (index, value) => {
                        if ($(value).hasClass("bmws_checkbox-check") == true) {
                            $(value).removeClass("bmws_checkbox-check").addClass("bmws_checkbox-uncheck");
                            for (let element of $(value).children()) {if (element.tagName == "INPUT") {$(element).prop("checked", false);}}
                            return false;
                        }
                    })
                }
                this.checkCheckbox(object);
            } else {
                this.uncheckCheckbox(object);
            }
            this.alterCheckboxText(object);
        }

        checkCheckbox(object) {
            $(object).removeClass("bmws_checkbox-uncheck").addClass("bmws_checkbox-check");
            for (let element of $(object).children()) {if (element.tagName == "INPUT") {$(element).prop("checked", true);}}
            // $($(object).children()[3]).prop("checked", true);
        }

        uncheckCheckbox(object) {
            if ($(object).parent().hasClass("bmws_checkbox-group") == false) {
                $(object).removeClass("bmws_checkbox-check").addClass("bmws_checkbox-uncheck");
                for (let element of $(object).children()) {if (element.tagName == "INPUT") {$(element).prop("checked", false);}}
                // $($(object).children()[3]).prop("checked", false);
            }
        }

        alterCheckboxText(object) {
            let checkboxText = $($(object).children()[1]).text();
            let checkboxTxAl = $($(object).children()[2]).text();

            if (checkboxTxAl.trim().length > 0) {
                $($(object).children()[1]).text(checkboxTxAl);
                $($(object).children()[2]).text(checkboxText);
            }
        }
    }

    class TabStripFunctions {
        static objTabstripUI = undefined;
        constructor() {}

        static factory() {
            let factoryObject = "";
            if (this.objTabstripUI != undefined) {factoryObject = this.objTabstripUI;}
            else {factoryObject = this.objTabstripUI = new TabStripFunctions();} 
            return factoryObject;
        }
        
        // tabStripTabClicks(object, defaultText, callback) {
        //     let getTabs = $($(object).parent()).children();
        //     let totTabs = getTabs.length;
        //     $(object).one("bmwstabclick", function(event) {
        //         $(".bmws_tabstrip_tab-active").removeClass("bmws_tabstrip_tab-active").addClass("bmws_tabstrip_tab");
        //         $(object).removeClass("bmws_tabstrip_tab").addClass("tabstrip_tab-active");
        //         if (callback != undefined) {
        //             if (typeof(callback) == "function") {callback();} else {console.error("Pass a parameter type funciton");}
        //         } else {
        //             defaultText == true 
        //             ?   $(".tabstrip-body").html(`<h5 class="tabstrip_demo-text">Tab ${$(event.currentTarget).index() + 1} Selected</h5>`)
        //             :   "";
        //         }
        //     })
        //     $(object).trigger("bmwstabclick");
        // }

        tabStripTabClicks(object) {
            $(".bmws_tabstrip_tab-active").removeClass("bmws_tabstrip_tab-active").addClass("bmws_tabstrip_tab");
            $(object).removeClass("bmws_tabstrip_tab").addClass("bmws_tabstrip_tab-active");
        }
    }

    class DetailPageFunctions {
        static objDtlPageUI = undefined;
        constructor() {}

        static factory() {
            let factoryObject = "";
            if (this.objDtlPageUI != undefined) {factoryObject = this.objDtlPageUI;}
            else {factoryObject = this.objDtlPageUI = new DetailPageFunctions();} 
            return factoryObject;
        }

        expandHeader(object) {
            if ($(object).parent().parent().parent().hasClass("bmws_detail_page-head_comp") == true) {
                $(object).parent().parent().parent().removeClass("bmws_detail_page-head_comp").addClass("bmws_detail_page-head_expn");
            } else {
                $(object).parent().parent().parent().removeClass("bmws_detail_page-head_expn").addClass("bmws_detail_page-head_comp");
            }
        }
    }

    class ConversationFunctions {
        static objConvUI = undefined;
        constructor() {}

        static factory() {
            let factoryObject = "";
            if (this.objConvUI != undefined) {factoryObject = this.objConvUI;}
            else {factoryObject = this.objConvUI = new ConversationFunctions();} 
            return factoryObject;
        }

        expandConversation(object) {
            $(object).removeClass("bmws_conv-act_col").addClass("bmws_conv-act_exp");
            $(object).parent().parent().next().removeAttr("style");
        }
        
        collapseConversation(object) {
            $(object).removeClass("bmws_conv-act_exp").addClass("bmws_conv-act_col");
            $(object).parent().parent().next().css({"max-height": "0px", "transform": "scaleY(0)"});
        }
    }

    class WebAppElementUserInteraction {
        constructor() {}

        static navigationBarBottomCurvedEdgeUI() {
            let objBottomNav = NavigationBarBottomCurvedEdge.factory();
            objBottomNav.adjustMenu();
            objBottomNav.calculatePosition();
            $("body").on("click", ".bmws_nav_item", function() {
                objBottomNav.operateNavigationBar(this);
                objBottomNav.toggleNavMenuStyle({activate: false})
                objBottomNav.calculatePosition()
            })

            $("body").on("click", ".bmws_nav_menu", function() {
                objBottomNav.toggleNavMenuStyle({activate: true});
            })
        }

        static navigationBarLeftPan() {
            let objLeftPanNav = NavigationBarLeftPan.factory();
            $("body").on("click", ".bmws_leftnav-item_cont", function() {
                objLeftPanNav.toggleNavMenuStyle(this);
            })

            $("body").on("click", ".bmws_leftnav-ind_cont", function() {
                objLeftPanNav.toggleExpandNavigator({activate: true});
            })
        }

        static popupUI() {
            initAdjustPopupAlignment();
            $("body").on("click", ".bmws_popup_opener", function() {
                let object          = this;
                let popupContProp   = $($(object).next())[0].getBoundingClientRect();
                let popupOpenerProp = $(object)[0].getBoundingClientRect();
                let bodyProp        = $("body")[0].getBoundingClientRect();

                allowClick = false;
                if ($($(object).next()).hasClass("bmws_popup_cont_tlc") == true) {
                    $($(object).next()).css({
                        "opacity": "1",
                        "transform": `translate(${(popupContProp.height + 10)}px, ${(popupContProp.width / 2) - 10}px)`, 
                        "z-index": "100"
                    });
                } else if ($($(object).next()).hasClass("bmws_popup_cont_trc") == true) {
                    $($(object).next()).css({
                        "opacity": "1",
                        "transform": `translate(-${(popupContProp.height + 10)}px, ${(popupContProp.width / 2) - 10}px)`, 
                        "z-index": "100"
                    });
                } else if ($($(object).next()).hasClass("bmws_popup_cont_brc") == true) {
                    $($(object).next()).css({
                        "opacity": "1",
                        "transform": `translate(-${(popupContProp.height + 10)}px, -${(popupContProp.height / 2) - 20}px)`, 
                        "z-index": "100"
                    });
                } else if ($($(object).next()).hasClass("bmws_popup_cont_blc") == true) {
                    $($(object).next()).css({
                        "opacity": "1",
                        "transform": `translate(${(popupContProp.height + 10)}px, -${(popupContProp.height / 2) - 20}px)`, 
                        "z-index": "100"
                    });
                } else if ($($(object).next()).hasClass("bmws_popup_cont_right") == true) {
                    $($(object).next()).css({
                        "opacity": "1",
                        "transform": `translateX(-${popupOpenerProp.width}px)`, 
                        "z-index": "100"
                    });
                } else if ($($(object).next()).hasClass("bmws_popup_cont_left") == true) {
                    $($(object).next()).css({
                        "opacity": "1",
                        "transform": `translate(${popupOpenerProp.width + popupOpenerProp.left + 50}px, ${50}px)`,
                        "z-index": "100"
                    });
                } else if ($($(object).next()).hasClass("bmws_popup_cont_up") == true) {
                    $($(object).next()).css({
                        "opacity": "1", 
                        "transform": `translateY(-${Math.abs(popupOpenerProp.bottom - popupContProp.bottom) + 40}px)`,
                        "z-index": "100"
                    });
                } else if ($($(object).next()).hasClass("bmws_popup_cont_down") == true) {
                    $($(object).next()).removeClass("bmws_popup_cont_up").addClass("bmws_popup_cont_down").css({"opacity": "1", "transform": `translateY(${Math.abs(popupContProp.top) + popupOpenerProp.bottom + 20}px)`, "display": "flex;", "z-index": "100"});
                }
                $(object).addClass("bmws_popup_closer").removeClass("bmws_popup_opener");
            })

            $("body").on("click", ".bmws_popup_closer", function() {
                closePopup(this);
            })

            $("body").on("click", function() {
                if (allowClick == false) {allowClick = true; return false;}
                $(".bmws_popup_closer").length > 0 ? closePopup($(".bmws_popup_closer")) : "";
            })

            $("body").on("click", ".bmws_popup_cancel", function() {
                let object = $($($($(this).parent()).parent()).parent()).prev();
                closePopup(object);
            })

            function closePopup(object) {
                if (allowProcs == false) {allowProcs = true; return false;}

                let popupContProp   = $($(object).next())[0].getBoundingClientRect();
                let popupOpenerProp = $(object)[0].getBoundingClientRect();

                $(object).addClass("bmws_popup_opener").removeClass("bmws_popup_closer");
                $($(object).next()).removeAttr("style");
            }

            function initAdjustPopupAlignment() {
                setTimeout(() => {
                    let bodyProp = $("body")[0].getBoundingClientRect();
                    let popupContProp = $(".bmws_popup_cont_up")[0].getBoundingClientRect();
                    let popupOpenerProp = $(".bmws_popup_opener")[0].getBoundingClientRect();
                    console.log(bodyProp.height, popupOpenerProp.height, popupContProp.height, (popupOpenerProp.height + 20));

                    if ((Math.abs(popupOpenerProp.left - bodyProp.left) < (popupContProp.width / 2)) &&
                        (Math.abs(popupOpenerProp.top - bodyProp.top) < popupContProp.height) &&
                        (Math.abs(bodyProp.bottom - popupOpenerProp.bottom) > popupContProp.height)) {
                        $(".bmws_popup_cont_up").addClass("bmws_popup_cont_tlc").removeClass("bmws_popup_cont_up");
                    }

                    if ((Math.abs(popupOpenerProp.right - bodyProp.right) < (popupContProp.width / 2)) &&
                        (Math.abs(popupOpenerProp.top - bodyProp.top) < popupContProp.height) &&
                        (Math.abs(bodyProp.bottom - popupOpenerProp.bottom) > popupContProp.height)) {
                        $(".bmws_popup_cont_up").addClass("bmws_popup_cont_trc").removeClass("bmws_popup_cont_up");
                    }

                    if ((Math.abs(bodyProp.right - popupOpenerProp.right) < (popupContProp.width / 2)) &&
                        (Math.abs(popupOpenerProp.bottom - bodyProp.bottom) < popupContProp.height) &&
                        ((popupOpenerProp.top - bodyProp.top) > popupContProp.height)) {
                        $(".bmws_popup_cont_up").addClass("bmws_popup_cont_brc").removeClass("bmws_popup_cont_up");
                    }

                    if ((Math.abs(popupOpenerProp.left - bodyProp.left) < (popupContProp.width / 2)) &&
                        (Math.abs(popupOpenerProp.bottom - bodyProp.bottom) < popupContProp.height) &&
                        (Math.abs(popupOpenerProp.top - bodyProp.top) > popupContProp.height)) {
                        $(".bmws_popup_cont_up").addClass("bmws_popup_cont_blc").removeClass("bmws_popup_cont_up");
                    }

                    if (((bodyProp.right - popupOpenerProp.right) < (popupContProp.width / 2)) &&
                        ((popupOpenerProp.top - bodyProp.top) > popupContProp.height) &&
                        ((bodyProp.bottom - popupOpenerProp.bottom) > popupContProp.height)) {
                        $(".bmws_popup_cont_up").addClass("bmws_popup_cont_right").removeClass("bmws_popup_cont_up");
                    }

                    if (((popupOpenerProp.left - bodyProp.left) < (popupContProp.width / 2)) &&
                        ((popupOpenerProp.top - bodyProp.top) > popupContProp.height) &&
                        ((bodyProp.bottom - popupOpenerProp.bottom) > popupContProp.height)) {
                        $(".bmws_popup_cont_up").addClass("bmws_popup_cont_left").removeClass("bmws_popup_cont_up");
                    }
                    
                    if ((popupOpenerProp.top - bodyProp.top) < popupContProp.height) {
                        $(".bmws_popup_cont_up").addClass("bmws_popup_cont_down").removeClass("bmws_popup_cont_up");
                    }
                }, 500);
            }
        }

        static inputElementsUI() {
            $("body").on("focusin", ".bmws_inpfld-bwt[data-alter=date]", function() {
                this.type = "date";
            })

            $("body").on("focusin", ".bmws_inpfld-wbt[data-alter=date]", function() {
                this.type = "date";
            })

            $("body").on("focusout", ".bmws_inpfld-bwt[data-alter=date]", function() {
                if ($(this).val().length == 0) {this.type = "text";}
            })

            $("body").on("focusout", ".bmws_inpfld-wbt[data-alter=date]", function() {
                if ($(this).val().length == 0) {this.type = "text";}
            })

            $("body").on("focusin", "input", function() {
                $(this).next().css({"border": this.style.border});
            })
            
            $("body").on("focusout", "input[data-range=to]", function() {
                $(this).val().trim().length == 0 ? $(this).next().css({"border": "none"}) : "";
            })

            $("body").on("focusout", "select", function() {
                if ($(this).hasClass("bmws_inpfld-bwt") == true || $(this).hasClass("bmws_inpfld-wbt") == true) {
                    $(this).removeClass("bmws_border-red");
                    $(this).next().removeClass("bmws_border-red bmws_color-red");
                }
            })

            $("body").on("click", ".bmws_input_file", function() {
                // $($(this).next()).click();
                $($(this).next()).trigger("click");
            })
            
            $("body").on("keyup", ".bmws_input_cont input", function() {
                validateInputElements(this);
            })
            
            $("body").on("change", ".bmws_input_cont select", function() {
                validateInputElements(this);
            })
            
            $("body").on("change", ".bmws_inptf_cont-bwt input[type=file]", function() {
                if (this.files && this.files[0]) {
                    fileListArray = this.files;
                    let htmlCode = `Selected (${fileListArray.length}) <ion-icon class="font_size-20px" name="checkmark-circle-outline"></ion-icon>`;
                    $(this).prev().removeClass("bmws_color-red").css({"border-color": "var(--color_green)", "color": "var(--color_green)"});
                    $(this).next().removeClass("bmws_color-red").addClass("bmws_color-green").html(htmlCode);
                }
            })

            $("body").on("change", ".bmws_inptf_cont-wbt input[type=file]", function() {
                if (this.files && this.files[0]) {
                    fileListArray = this.files;
                    let htmlCode = `Selected (${fileListArray.length}) <ion-icon class="font_size-20px" name="checkmark-circle-outline"></ion-icon>`;
                    $(this).prev().removeClass("bmws_color-red").css({"border-color": "var(--color_green)", "color": "var(--color_green)"});
                    $(this).next().removeClass("bmws_color-red").addClass("bmws_color-green").html(htmlCode);
                }
            })
            
            $("body").on("click", ".bmws_show_pass", function() {
                togglePasswordVisibility(this);
            })
            
            $("body").on("click", ".bmws_delete_line", function() {
                removeAddressLine(this);
            })

            function removeAddressLine(object) {
                $(object).parent().remove();
            }
            
            function validateInputElements(object) {
                let inputType = $(object).attr("type");
                let tagName   = object.tagName;
                let curObject = object;
                let validLengRes = {verMsgID: "", verMsgCrt: "", searchRes: ""};

                if (tagName == "INPUT") {
                    switch (inputType) {
                        case "password": validatePassword(object); break;
                        case "number": case "email": case "date": case "text":
                            (inputType == "date" || inputType == "number") ? validLengRes = validateRange(object) : "";
                            curObject = $(object).attr("data-range") == "from" ? validLengRes.msgObject : curObject;
                            validLengRes = validLengRes.searchRes.trim().length > 0 ? validLengRes : validAllowedFormat(object);
                            validLengRes = validLengRes.searchRes.trim().length > 0 ? validLengRes : validateInputLength(object);
                            modifyInputField({object: curObject, verMsgCrt: validLengRes.verMsgCrt, searchRes: validLengRes.searchRes, verMsgID: validLengRes.verMsgID});
                            break;
                        case "file":
                            break;
                    }
                } else {
                    $(object).removeClass("bmws_border-red");
                    $(object).next().removeClass("bmws_border-red bmws_color-red").removeAttr("style");
                }
            }

            function validateRange(object) {
                let rangeFr = "";
                let rangeTo = "";
                let fromObj = "";
                let toObjct = "";
                let searchRes = "";
                let inputType = $(object).attr("type");
                
                if ($(object).attr("data-range") != undefined) {
                    if ($(object).attr("data-range") == "from") {
                        fromObj = $(object); 
                        toObjct = $(object).parent().next().children()[0].tagName == "DIV" ? $($(object).parent().next().children()[1]) : $($(object).parent().next().children()[0]);
                    } else {
                        fromObj = $(object).parent().prev().children()[0].tagName == "DIV" ? $($(object).parent().prev().children()[1]) : $($(object).parent().prev().children()[0]);
                        toObjct = $(object);
                    }

                    rangeFr = fromObj.val();
                    rangeTo = toObjct.val();

                    if (inputType == "date") {
                        rangeFr = rangeFr.trim().length == 0 ? 0 : parseInt(rangeFr.replaceAll("-", ""));
                        rangeTo = rangeTo.trim().length == 0 ? 0 : parseInt(rangeTo.replaceAll("-", ""));
                    } else {
                        rangeFr = parseInt(rangeFr);
                        rangeTo = parseInt(rangeTo);
                    }
                    if (rangeFr > rangeTo) {searchRes = "'To' value must be larger than 'From' value";}
                }

                return {
                    verMsgID: searchRes.trim().length > 0 ? "idValidValue" : "", 
                    verMsgCrt: searchRes.trim().length > 0 ? "E" : "", 
                    searchRes: searchRes,
                    msgObject: toObjct ? (toObjct[0].tagName == "INPUT" ? toObjct : toObjct.next()) : undefined
                };
            }

            function validatePassword(object) {
                let searchRes = validAllowedFormat(object);

                searchRes.verMsgID  = searchRes.verMsgID.trim().length > 0 ? "idPassCrit" : "";
                searchRes.verMsgCrt = searchRes.verMsgCrt.trim().length > 0 ? "W" : "";

                if (searchRes.searchRes.trim().length == 0) {searchRes = validateInputLength(object);}
                modifyInputField({object: object, verMsgCrt: searchRes.verMsgCrt, searchRes: searchRes.searchRes, verMsgID: searchRes.verMsgID});
            }

            function validAllowedFormat(object) {
                let propValid = $(object).attr("data-validate") == undefined ? "" : $(object).attr("data-validate");
                let validType = propValid.trim().length > 0 ? propValid.split("-")[0] : "";
                let inputVal  = $(object).val();
                let pattern   = {asm: /[a-z]/, acp: /[A-Z]/, num: /[0-9]/, space: / /, spc: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, spcs: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]/};
                let searchRes = "";

                switch (validType) {
                    case "asm":  if (pattern.acp.test(inputVal) || pattern.num.test(inputVal) || pattern.spc.test(inputVal)) {searchRes = "Allowed a-z";} break; // Alpha All Small Letter
                    case "acp":  if (pattern.asm.test(inputVal) || pattern.num.test(inputVal) || pattern.spc.test(inputVal)) {searchRes = "Allowed A-Z";} break; // Alpha All Capital Letter
                    case "asc":  if (pattern.num.test(inputVal) || pattern.spc.test(inputVal)) {searchRes = "Allowed a-z, A-Z";} break;                          // Alpha Small & Capital Letter
                    case "num":  if (pattern.asm.test(inputVal) || pattern.acp.test(inputVal) || pattern.spc.test(inputVal)) {searchRes = "Allowed 0-9";} break; // Only Numeric
                    case "ans":  if (pattern.acp.test(inputVal) || pattern.spc.test(inputVal)) {searchRes = "Allowed a-z, 0-9";} break;                          // Alpha Numeric Small
                    case "anc":  if (pattern.asm.test(inputVal) || pattern.spc.test(inputVal)) {searchRes = "Allowed A-Z, 0-9";} break;                          // Alpha Numeric Capital
                    case "ansc": if (pattern.spc.test(inputVal) || pattern.spcs.test(inputVal)) {searchRes = "Allowed a-z, A-Z, 0-9";} break;                                                  // Alpha Numeric Small Capital
                    case "ass":  if (pattern.acp.test(inputVal) || pattern.num.test(inputVal)) {searchRes = "Allowed a-z, Special Character";} break;            // Alpha Small Special
                    case "acs":  if (pattern.asm.test(inputVal) || pattern.num.test(inputVal)) {searchRes = "Allowed A-Z, Special Character";} break;            // Alpha Capital Special
                    case "ascs": if (pattern.num.test(inputVal)) {searchRes = "Allowed a-z, A-Z, Special Character";} break;                                    // Alpha Small Capital Special
                    case "asns": if (pattern.acp.test(inputVal)) {searchRes = "Allowed a-z, 0-9, Special Character";} break;                                    // Alpha Small Numeric Special
                    case "acns": if (pattern.asm.test(inputVal)) {searchRes = "Allowed A-Z, 0-9, Special Character";} break;                                    // Alpha Captital Numeric Special
                    case "all": default: break;                                                                                                                 // All Allowed
                }

                return {
                    verMsgID: searchRes.trim().length > 0 ? "idValidFormat" : "", 
                    verMsgCrt: searchRes.trim().length > 0 ? "E" : "", 
                    searchRes: searchRes
                };
            }

            function validateInputLength(object) {
                let propValid = $(object).attr("data-validate") == undefined ? "" : $(object).attr("data-validate");
                let propMatch = $(object).attr("data-match") == undefined ? "" : $(object).attr("data-match");
                let validLeng = propValid.trim().length > 0 ? propValid.split("-")[1] : "";
                let validLnMn = (validLeng && validLeng.length > 0) ? validLeng.split("_")[0].slice(1) : 0;
                let validLnMx = (validLeng && validLeng.length > 0) ? validLeng.split("_")[1] : 0;
                let inputVal  = $(object).val();
                let verMsgID  = "";
                let verMsgCrt = "";
                let searchRes = "";
                
                if (verMsgID.trim().length == 0 && propMatch.trim().length > 0 && inputVal.trim().length > 0 && $(`#${propMatch}`).val() != inputVal) {
                    if (propValid.trim().length == 0 || $(`#${propMatch}`).val().trim().length > 0) {
                        verMsgID = "idPassMM";
                        verMsgCrt = "E";
                        searchRes = "Password and Confirm Password are not matching";
                    }
                }
                if (validLeng) {
                    if (verMsgID.trim().length == 0 && propValid.length > 0 && validLnMx == validLnMn && inputVal.trim().length > 0 && inputVal.trim().length != validLnMn) {
                        verMsgID = "idPassLMat";
                        verMsgCrt = "E";
                        searchRes = `Length must be ${validLnMn}`;
                    }
                    if (verMsgID.trim().length == 0 && propValid.length > 0 && inputVal.trim().length > 0 && inputVal.length < validLnMn) {
                        verMsgID = "idPassLMin";
                        verMsgCrt = "E";
                        searchRes = `Length must be at least ${validLnMn}`;
                    }
                    if (verMsgID.trim().length == 0 && propValid.length > 0 && inputVal.trim().length > 0 && inputVal.length > validLnMx) {
                        verMsgID = "idPassLMax";
                        verMsgCrt = "E";
                        searchRes = `Length must be at most ${validLnMx}`;
                    }
                }
                return {verMsgID: verMsgID, verMsgCrt: verMsgCrt, searchRes: searchRes};
            }

            function modifyInputField(arg) {
                let htmlCode  = "";
                let verMsgCol = "";
                let addStyle  = "";
                let object    = arg.object;

                switch (arg.verMsgCrt) {
                    case "E": verMsgCol = "--color_red"; break;
                    case "W": verMsgCol = "--color_gold"; break;
                    case "I": verMsgCol = "--color_blue"; break;
                }

                if ($(arg.object).attr("type") == "password" && 
                    ($(arg.object).attr("data-validate") && $(arg.object).attr("data-validate").trim().length > 0) && 
                    $(`#${$(arg.object).attr("data-match")}`).val().trim().length > 0) {
                    object = $(`#${$(arg.object).attr("data-match")}`);
                }

                if (arg.searchRes.trim().length > 0) {
                    htmlCode = `<div  id="${arg.verMsgID}" class="bmws_input_vm-${arg.verMsgCrt.toLowerCase()}">
                        <p style="width: 100%">${arg.searchRes}</p>
                    </div>`;
                    addStyle = ($(object).is(":focus") == true || $(object).val().trim().length > 0)
                        ?   {"color": `var(${verMsgCol})`, "border": `1px solid var(${verMsgCol})`} 
                        :   {"color": `var(${verMsgCol})`};
                    $($(object).next()).css(addStyle);
                    $(object).css({"color": `var(${verMsgCol})`, "border": `1px solid var(${verMsgCol})`});
                    $(object).prev().remove();
                    $(object).before(htmlCode);
                } else {
                    $($(object).next()).removeAttr("style");
                    $(object).removeAttr("style");
                    $($(object).prev()).remove();
                }
            }

            function togglePasswordVisibility(object) {
                let passField = $(object).prev().prev();
                if (passField.attr("type") == "password") {
                    passField.attr("type", "text");
                    $(object).addClass("bmws_color-gold").html(`<ion-icon name="eye-outline"></ion-icon>`);
                } else {
                    passField.attr("type", "password");
                    $(object).removeClass("bmws_color-gold").html(`<ion-icon name="eye-off-outline"></ion-icon>`);
                }
            }
        }

        static LoginRegisterAlterUI() {
            $("body").on("click", ".bmws_logreg_icon-h", function() {
                alterLogRegSec(this)
            })

            $("body").on("click", ".bmws_logreg_base-h .bmws_logreg_body", function() {
                alterLogRegSec($($($(this).prev()).children()[0]));
            })

            function alterLogRegSec(object) {
                let rootElem = $($(object).parent()).parent();
                let siblElem = $(rootElem).next().length > 0 ? $(rootElem).next() : $(rootElem).prev();
                
                if (window.innerWidth > 550) {
                    $(rootElem).css({"transform": `translateX(220px)`});
                    $(siblElem).css({"transform": `translateX(-220px)`});
                    $(rootElem).removeClass("bmws_logreg_base-h"). addClass("bmws_logreg_base-c");
                    $(object).removeClass("bmws_logreg_icon-h"). addClass("bmws_logreg_icon-c");
                    $(siblElem).removeClass("bmws_logreg_base-c").addClass("bmws_logreg_base-h");
                    $($($(siblElem).children()[0]).children()[0]).removeClass("bmws_logreg_icon-c").addClass("bmws_logreg_icon-h");
                    $($(object).children()[1]).removeClass("bmws_logreg_text-c").addClass("bmws_logreg_text-h");
                    $($($($(siblElem).children()[0]).children()[0]).children()[1]).removeClass("bmws_logreg_text-h").addClass("bmws_logreg_text-c");
                    setTimeout(() => {
                        $(rootElem).removeAttr("style");
                        $(siblElem).removeAttr("style");
                    }, 500);
                } else {
                    $(rootElem).css({"transform": `translateY(220px)`});
                    $(siblElem).css({"transform": `translateY(-220px)`});
                    $(rootElem).removeClass("bmws_logreg_base-h"). addClass("bmws_logreg_base-c");
                    $(object).removeClass("bmws_logreg_icon-h"). addClass("bmws_logreg_icon-c");
                    $(siblElem).removeClass("bmws_logreg_base-c").addClass("bmws_logreg_base-h");
                    $($($(siblElem).children()[0]).children()[0]).removeClass("bmws_logreg_icon-c").addClass("bmws_logreg_icon-h");
                    $($(object).children()[1]).removeClass("bmws_logreg_text-c").addClass("bmws_logreg_text-h");
                    $($($($(siblElem).children()[0]).children()[0]).children()[1]).removeClass("bmws_logreg_text-h").addClass("bmws_logreg_text-c");
                    setTimeout(() => {
                        $(rootElem).removeAttr("style");
                        $(siblElem).removeAttr("style");
                    }, 500);
                }
            }
        }

        static switchInputs() {
            $("body").on("click", ".bmws_switch_text", function() {
                let currIcon = $(this).html();
                if ($($(this).parent()).hasClass("bmws_switch-on")) {
                    $($(this).parent()).removeClass("bmws_switch-on").addClass("bmws_switch-off");
                    $($(this).next()).prop("checked", false);
                } else {
                    $($(this).parent()).removeClass("bmws_switch-off").addClass("bmws_switch-on");
                    $($(this).next()).prop("checked", true);
                    // $(this).text("ON");
                }
                $(this).html($(this).attr("data-swtxt"));
                $(this).attr("data-swtxt", currIcon);
            })
        }

        static modalDialogUI() {
            let objModalDialog = ModalDialogFunctions.factory();
            $("body").on("click", ".bmws_modal-close", function() {
                objModalDialog.hideModal($($($(this).parent()).parent()).parent(), {emptyBody: false});
            })
            $("body").on("click", ".bmws_modal-reject", function() {
                objModalDialog.hideModal($($($(this).parent()).parent()).parent().parent(), {emptyBody: false});
            })
        }

        static accordiansUI() {
            $("body").on("click", ".bmws_accordian-head-ir", function() {
                $(".bmws_accordian-body").removeClass("bmws_accordian-body").addClass("bmws_accordian-body-hide");
                $(".bmws_accordian-head-ib").removeClass("bmws_accordian-head-ib").addClass("bmws_accordian-head-ir");
                
                $(this).removeClass("bmws_accordian-head-ir").addClass("bmws_accordian-head-ib");
                $(this).parent().next().removeClass("bmws_accordian-body-hide").addClass("bmws_accordian-body");
            })
            $("body").on("click", ".bmws_accordian-head-ib", function() {
                $(this).removeClass("bmws_accordian-head-ib").addClass("bmws_accordian-head-ir");
                $(this).parent().next().removeClass("bmws_accordian-body").addClass("bmws_accordian-body-hide");
            })
        }

        static numberCountUI() {
            // activateCounter($(".bmws_counter"), "BULLET");
            function activateCounter(object, accelarate) {
                let objCounter = NumberCounterFunctions.factory();
                objCounter.activateAutoCounter($(".bmws_counter"));
            }
        }

        static messageToastUI() {
            let objMessageToast = MessageToastFunctions.factory();
            $("body").on("click", ".bmws_msg_toast-close", function() {
                let object = $(this).parent();
                objMessageToast.hideMsgToast({object: object})
            })
        }

        static checkboxUI() {
            let objCheckbox = CheckboxFunctions.factory();
            $("body").on("click", ".bmws_checkbox-check", function() {
                objCheckbox.alterCheckboxAction(this);
            })
            $("body").on("click", ".bmws_checkbox-uncheck", function() {
                objCheckbox.alterCheckboxAction(this);
            })
        }

        static tabstripUI() {
            let objTabstrip = TabStripFunctions.factory();
            $("body").on("click", ".bmws_tabstrip_tab", function() {
                objTabstrip.tabStripTabClicks(this);
            })
        }

        static detailpageUI() {
            let objDtlPage = DetailPageFunctions.factory();
            $("body").on("click", ".bmws_detail_page-icon_act", function() {
                objDtlPage.expandHeader(this);
            })
        }

        static conversationUI() {
            let objConv = ConversationFunctions.factory();
            $("body").on("click", ".bmws_conv-act_col", function() {
                objConv.expandConversation(this);
            })
            $("body").on("click", ".bmws_conv-act_exp", function() {
                objConv.collapseConversation(this);
            })
        }
    }

    bmwsUIFuncInit = WebAppElementUserInteraction;
    $(window).on("resize", function() {
        if (window.innerWidth != defaultScreenSize) {window.location.reload();}
        // callAllObjects({
        //     navigationbarbottom: true,
        //     popupui: true,
        //     inputelementsui: false,
        //     loginregisteralterui: true,
        //     switchinputui: true,
        //     modaldialogui: true,
        //     accordiansui: true,
        //     numbercountui: true,
        //     messagetoastui: true,
        //     checkboxui: true,
        //     tabstripui: true,
        // });
    })
    
    callAllObjects({
        navigationbarbottom: false,
        navigationbarleftpan: true,
        popupui: false,
        inputelementsui: false,
        loginregisteralterui: false,
        switchinputui: false,
        modaldialogui: false,
        accordiansui: true,
        numbercountui: true,
        messagetoastui: true,
        checkboxui: true,
        tabstripui: true,
        detailpageui: true,
        conversationui: true,
    });

    classObects.objBottomNav = NavigationBarBottomCurvedEdge.factory();
    classObects.objModalDialog = ModalDialogFunctions.factory();
    classObects.objNumCounter = NumberCounterFunctions.factory();
    classObects.objMessageToast = MessageToastFunctions.factory();
    // classObects.objTabstrip = MessageToastFunctions.factory();
})

function callAllObjects(activeOpts) {
    activeOpts.navigationbarbottom == true ? bmwsUIFuncInit.navigationBarBottomCurvedEdgeUI() : "";
    activeOpts.navigationbarleftpan == true ? bmwsUIFuncInit.navigationBarLeftPan() : "";
    activeOpts.popupui == true ? bmwsUIFuncInit.popupUI() : "";
    activeOpts.inputelementsui == true ? bmwsUIFuncInit.inputElementsUI() : "";
    activeOpts.loginregisteralterui == true ? bmwsUIFuncInit.LoginRegisterAlterUI() : "";
    activeOpts.switchinputui == true ? bmwsUIFuncInit.switchInputs() : "";
    activeOpts.modaldialogui == true ? bmwsUIFuncInit.modalDialogUI() : "";
    activeOpts.accordiansui == true ? bmwsUIFuncInit.accordiansUI() : "";
    activeOpts.numbercountui == true ? bmwsUIFuncInit.numberCountUI() : "";
    activeOpts.messagetoastui == true ? bmwsUIFuncInit.messageToastUI() : "";
    activeOpts.checkboxui == true ? bmwsUIFuncInit.checkboxUI() : "";
    activeOpts.tabstripui == true ? bmwsUIFuncInit.tabstripUI() : "";
    activeOpts.detailpageui == true ? bmwsUIFuncInit.detailpageUI() : "";
    activeOpts.conversationui == true ? bmwsUIFuncInit.conversationUI() : "";
}

function accessObjects(createOpts) {
    return {
        objBottomNav: createOpts.navigationbarbottom == true ? classObects.objBottomNav : "",
        objModalDialog: createOpts.modaldialogui == true ? classObects.objModalDialog : "",
        objNumCounter: createOpts.numbercountui == true ? classObects.objNumCounter : "",
        objMessageToast: createOpts.messagetoastui == true ? classObects.objMessageToast : "",
    }
}