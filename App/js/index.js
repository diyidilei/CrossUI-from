// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"panel_registe")
                .setDock("none")
                .setLeft("5.833333333333333em")
                .setTop("4.166666666666667em")
                .setWidth("25em")
                .setHeight("22.5em")
                .setCaption("注册")
            );
            
            host.panel_registe.append(
                xui.create("xui.UI.Input")
                .setHost(host,"age")
                .setName("age")
                .setDirtyMark(false)
                .setLeft("-0.5em")
                .setTop("7.166666666666667em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("年龄")
            );
            
            host.panel_registe.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton3")
                .setLeft("7.916666666666667em")
                .setTop("12.25em")
                .setWidth("8.583333333333334em")
                .setHeight("2.4166666666666665em")
                .setCaption("注册")
                .onClick([
                    {
                        "desc":"注冊",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{page.functions.register}",
                            "none",
                            "",
                            "{page.panel_registe.getFormValues()}"
                        ],
                        "method":"call",
                        "event":1,
                        "return":false
                    },
                    {
                        "desc":"清空",
                        "type":"control",
                        "target":"panel_registe",
                        "args":[ ],
                        "method":"formReset"
                    },
                    "_xui_ui_htmlbutton3_onclick"
                ])
            );
            
            host.panel_registe.append(
                xui.create("xui.UI.Input")
                .setHost(host,"name")
                .setDirtyMark(false)
                .setLeft("-0.5em")
                .setTop("3.8333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("姓名")
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel5")
                .setDock("none")
                .setLeft("38.333333333333336em")
                .setTop("4.166666666666667em")
                .setWidth("23.333333333333332em")
                .setHeight("22.5em")
                .setCaption("注册通过")
            );
            
            host.xui_ui_panel5.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid3")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id":"name",
                        "caption":"姓名",
                        "type":"label",
                        "width":"11em"
                    },
                    {
                        "id":"age",
                        "caption":"年龄",
                        "type":"label",
                        "width":"11em"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"input_name")
                .setName("name")
                .setDirtyMark(false)
                .setLeft("35em")
                .setTop("28.333333333333332em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("姓名")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"input_age")
                .setName("age")
                .setDirtyMark(false)
                .setLeft("35em")
                .setTop("30.833333333333332em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("年龄")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        functions:{
            "register":{
                "desc":"",
                "params":[
                    {
                        "id":"data",
                        "type":"Object",
                        "desc":""
                    }
                ],
                "actions":[
                    function(data){
                        window.parent.document.getElementById("login").contentWindow.drawMap(data)
                    }
                ]
            },
            "setFrom":{
                "desc":"",
                "params":[
                    {
                        "id":"data",
                        "type":"Object",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"input赋值1",
                        "type":"control",
                        "target":"input_name",
                        "args":[
                            "{page.input_name.setUIValue()}",
                            undefined,
                            undefined,
                            "{args[0].name}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"input赋值2",
                        "type":"control",
                        "target":"input_age",
                        "args":[
                            "{page.input_age.setUIValue()}",
                            undefined,
                            undefined,
                            "{args[0].age}"
                        ],
                        "method":"setUIValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"添加表格",
                        "type":"control",
                        "target":"xui_ui_treegrid3",
                        "args":[
                            "{args[0]}",
                            null,
                            null,
                            false
                        ],
                        "method":"insertRows"
                    },
                    function(data){
                        console.log(data);
                    }
                ]
            }
        },
        /**
         * 当鼠标单击时调用
         * @method onClick [xui.UI.HTMLButton event]
         * @param {xui.UIProfile} profile , 当前控件的配置对象(特征数据)
         * @param {Event} e , DOM事件元素
         * @param {String} src , 事件所属DOM元素的xid
        */
        _xui_ui_htmlbutton3_onclick:function(profile, e, src){
            var ns = this, uictrl = profile.boxing();
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});