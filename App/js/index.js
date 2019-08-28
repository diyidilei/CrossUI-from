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
                .setLeft("13.333333333333334em")
                .setTop("9.166666666666666em")
                .setWidth("25em")
                .setHeight("22.5em")
                .setCaption("注册")
            );
            
            host.panel_registe.append(
                xui.create("xui.UI.Input")
                .setHost(host,"input_age")
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
                .setLeft("7.083333333333333em")
                .setTop("11.416666666666666em")
                .setWidth("8.583333333333334em")
                .setHeight("2.4166666666666665em")
                .setCaption("注册")
                .onClick([
                    {
                        "desc":"赋值到全局变量",
                        "type":"control",
                        "target":"panel_registe",
                        "args":[
                            "{page.panel_registe.getFormValues()}",
                            "global",
                            "from"
                        ],
                        "method":"getFormValues",
                        "redirection":"other:callback:call",
                        "event":1
                    }
                ])
            );
            
            host.panel_registe.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input27")
                .setDirtyMark(false)
                .setLeft("-0.5em")
                .setTop("3.8333333333333335em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("姓名")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
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