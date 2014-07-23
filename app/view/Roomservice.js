/**
 * Created by karthik on 4/21/2014.
 */
Ext.define('CrotusValet.view.Roomservice', {
    extend: "Ext.Container",
    alias: "widget.roomserviceview",
    config: {

        layout: {
            align: 'stretch',
            type: 'vbox'
        },
        cls: 'backgroundcolor',
        styleHtmlContent:true,
        padding:'0 0 0 0',
        items:[
            {
                xtype:'container',
                height:'45px',
                cls:'introText',
                html:'<h5><span class="guestName">Categories</span></h5>'
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                height: '100px',
                width: '100%',
                cls: 'logoContainer',
                layout: {
                    type: 'vbox',
                    pack:'center',
                    align: 'center'
                },
                items: [
                    {
                        xtype: "image",
                        cls: 'logo logoInnerPages',
                        html: "<img src='resources/images/logo.png'>"
                    }
                ]
            },
            {
                docked: 'bottom',
                xtype: 'titlebar',
                height: '65px',
                width: '100%',
                cls: 'footerLinks',

                items: [
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'hbox',
                            align: 'start',
                            pack: 'start'
                        },
                        items: [
                            {
                                xtype: "button",
                                cls: 'footIcons homeIcon',
                                //iconCls: 'home',
                                //html: "<img src='resources/icons/icon11.png'>",
                                itemId: 'Hmaster'
                            }
                        ]
                    },
                    { xtype: "spacer" },
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: "image",
                                cls: 'footIcons',
                                html: "<img src='resources/icons/icon10.png'>",
                                itemId: 'congirence'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: "image",
                                cls: 'footIcons',
                                html: "<img src='resources/icons/icon11.png'>",
                                itemId: 'airlines'
                            }
                        ]
                    },
                    { xtype: "spacer" },
                    /*{
                        xtype: 'container',
                        cls: 'innerSubMenus',
                        layout: {
                            type: 'vbox',
                            align: 'end',
                            pack: 'end'
                        },
                        items: [
                            {
                                xtype: "button",
                                cls: 'footIcons subMenuIcon',
                                //iconCls: 'menuLines',
                                //html: "<img src='resources/icons/icon11.png'>",
                                itemId: 'airlines',
                                handler: function () {
                                    console.log('show');
                                    Ext.getCmp('secondarytitlebar').show();
                                }
                            }
                        ]
                    }*/
                ]
            },
            /*{
                docked: 'bottom',
                xtype: 'titlebar',
                hidden: true,
                id:"secondarytitlebar",
                zIndex: 999,
                height: '65px',
                width: '100%',
                cls: 'introText',
                //   cls: 'footerLinks',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                showAnimation: {
                    type: 'fadeIn'
                    //     reveal: true,
                    //      direction:'up',
                    //      duration: 400
                },
                hideAnimation: {
                    type: 'fadeOut'
                    //    reveal: true,
                    //    direction:'up',
                    //    duration: 400
                },
                items: [

                    {
                        xtype: 'button',
                        //    height: '85px',
                        //       text: 'Information',
                        iconAlign:'left',
                        iconCls:'inforamtion',
                        id: 'infobtn',
                        cls: 'subMenu_btns',
                        itemId: 'btnInformation'


                    },
                    {
                        xtype: 'button',
                        //      height: '85px',
                        iconAlign:'left',
                        iconCls:'facilities',
                        //     text: 'Faclities',
                        cls: 'subMenu_btns',
                        itemId: 'btnFaclities'

                    },
                    {
                        xtype: 'button',
                        //      height: '85px',
                        iconAlign:'left',
                        iconCls:'map',
                        //     text: 'Maps',
                        cls: 'subMenu_btns',
                        itemId: 'btnMaps'

                    },
                    {
                        xtype: 'button',
                        //     height: '85px',
                        iconAlign:'left',
                        iconCls:'room_types',
                        //      text: 'Room Type',
                        cls: 'subMenu_btns',
                        itemId: 'btnRoomType'

                    }
                ]
            },*/
            {
                xtype: 'container',
                height: '100%',
                flex: 4,
                items: [{
                    xtype: 'dataview',
                    name: 'dataviewpack',
                    //     scrollable: 'horizontal',
                    itemId: "dvRoomService",
                    // store: "Guests",
                    loadingText: "Loading...",
                    emptyText: "<div class=\"notes-list-empty-text\">Check Internet!!!</div>",
                    itemTpl: ['<div class="imgcss {DataClass}"> <img src=\"{path}\" width=100% height=100%/></div>',
                        '<div id="aligntext"  class="imgText">{rev_class_name}</div>'
                    ].join(''),
                    height: "100%",
                    styleHtmlContent: true,
                    layout: {
                        type: "fit"
                    },

                    inline: {
                        wrap: true
                    },

                    itemCls: 'dataRview-item',
                    itemLength: 200
                }]
            }
        ],
        listeners: [
            {
                delegate: "#dvRoomService",
                event: "itemtap",
                fn: "onRoomSerViewTap"
            },
            {
                delegate: "#Hmaster",
                event: "tap",
                fn: "hMasterTap"
            }
        ]
    },
    onRoomSerViewTap: function (list, target, index, record, evt, options) {
        this.fireEvent("roomSerCommand",list, target, index, record, evt, options);
    },
    hMasterTap:function(){
        this.fireEvent("hMasterCommand");
    }
});


