// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support async functions
xui.Class('App.Name49', 'xui.Module',{
    Instance:{
        // Dependencies css
        Dependencies: [],
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
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button47")
                .setDirtyMark(false)
                .setLeft("25em")
                .setTop("22.5em")
                .setWidth("17.333333333333332em")
                .setHeight("5.333333333333333em")
                .setCaption("普通按钮")
                .onClick([
                    {
                        "desc":"动作 1",
                        "type":"other",
                        "target":"callback",
                        "args":[
                            "{functions.setFroms}"
                        ],
                        "method":"call",
                        "event":1
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});