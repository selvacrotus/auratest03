/**
 * Created by karthik on 4/26/2014.
 */
Ext.define("CrotusValet.view.Description", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias:"widget.descriptionview",
    config: {
        layout: {
            align: 'stretch',
            type: 'vbox'
        },
        cls: 'backgroundcolor',
        padding:'0',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                height: '100px',
                width: '100%',
                cls: 'logoContainer',
                layout: {
                    type: 'hbox'
                    /*pack:'center',
                    align: 'center'*/
                },
                items: [
                    {
                        xtype: "button",
                        itemId: "backButton",
                        cls: 'backButton'
                        //flex:1
                    },
                    {xtype:'spacer'},
                    {
                        xtype: "image",
                        cls: 'logo',
                        html: "<img src='resources/images/logo.png'>"
                        //flex:1
                    },
                    {xtype:'spacer'},
                    {
                        xtype: "button",
                        cls: 'addToCartBtn',
                        //iconCls: "add",
                        html: "<img src='resources/icons/continueshopping.png' width='50'>",
                        itemId: "addCart"
                        //flex:1
                    }
                ]
            },
            /*{
                xtype: "toolbar",
                title: "Product Description",
                docked: "top",
                cls: 'toolcolor',
                items: [
                    {
                        xtype: "button",
                        itemId: "backButton",
                        cls: 'backButton'
                    },
                    {
                      xtype:"spacer"
                    },
                    {
                        xtype: "button",
                        cls: 'titleBar_btns',
                        iconCls: "add",
                        text: "To Cart",
                        itemId: "addCart"
                    }
                ]
            },*/
            {
                xtype: "toolbar",
                cls: 'secondarytoolcolor',
                //  title: "My Cart",
                docked: "bottom",
                layout:{
                    type:'vbox',
                    align:'center'
                },
                items: [
                    {
                        xtype: "button",
                        cls: 'secondarybuttoncolor',
                        itemId: "mainButton",
                        iconCls:'home'

                    }
                ]
            },


            {
                xtype: 'image',
                width: "100%",
                height: "50%",
                margin: "5",
                //docked: "top",
                html: "<img src='resources/images/food_def.jpg'>",
                id: "myimage",
                align: 'stretch'

            },
            {
                xtype: "fieldset",  //todo
                cls: 'formbackground',
                items: [
                    {
                        xtype: 'hiddenfield',
                        name: 'productMasterID',
                        id:'lblProductDetailID'
                    },
                    {
                        xtype:'label',
                        text: 'No Of Items'
                    },
                    {
                        xtype: 'spinnerfield',
                        id:"spinQuantity",
                        name: 'spinfield',
                        label: 'No Of Items:',
                        value: 1,
                        minValue: 1,
                        maxValue: 100,
                        stepValue: 1,
                        cycle: false
                    },
                    {

                        xtype: 'textfield',
                        hidden: true,
                        cls: 'borderhidden',
                        id: "txt1",
                        label: 'Product Price(in €):',
                        text: 'productMasterPrice',
                        name: 'productMasterPrice',
                        disabled: true
                    },
                    {

                        xtype: 'textfield',
                        //         hidden: true,
                        cls: 'borderhidden',
                        id: "txt2",
                        label: 'Product Name(in €):',
                        text: 'productMasterPrice',
                        name: 'productMasterPrice',
                        disabled: true
                    },
                    {

                        xtype: 'textfield',
                        hidden: true,
                        cls: 'borderhidden',
                        id: "txt3",
                        label: 'Product Price(in €):',
                        text: 'productMasterPrice',
                        name: 'productMasterPrice',
                        disabled: true
                    },
                    {

                        xtype: 'textfield',
                        //             hidden: true,
                        cls: 'borderhidden',
                        id: "txt4",
                        label: 'Product Price(in €):',
                        text: 'productMasterPrice',
                        name: 'productMasterPrice',
                        disabled: true
                    },
                    {

                        xtype: 'textfield',
                        hidden: true,
                        cls: 'borderhidden',
                        id: "txt5",
                        label: 'Product Price(in €):',
                        text: 'productMasterPrice',
                        name: 'productMasterPrice',
                        disabled: true
                    },
                    {

                        xtype: 'textfield',
                        hidden: true,
                        cls: 'borderhidden',
                        id: "txt6",
                        label: 'Product Price(in €):',
                        text: 'productMasterPrice',
                        name: 'productMasterPrice',
                        disabled: true
                    },
                    {

                        xtype: 'textfield',
                        hidden: true,
                        cls: 'borderhidden',
                        id: "txt7",
                        label: 'Product Price(in €):',
                        text: 'productMasterPrice',
                        name: 'productMasterPrice',
                        disabled: true
                    },
                    {

                        xtype: 'textfield',
                        hidden: true,
                        cls: 'borderhidden',
                        id: "txt8",
                        label: 'Product Price(in €):',
                        text: 'productMasterPrice',
                        name: 'productMasterPrice',
                        disabled: true
                    },
                    /*   {
                     xtype: 'textfield',
                     cls:'borderhidden',
                     id:"txtProductName",
                     label: 'Product Name:',
                     text: 'productMasterName',
                     name: 'productMasterName',
                     disabled: true
                     },
                     {

                     xtype: 'textfield',
                     cls: 'borderhidden',
                     id: "txtProductPrice",
                     label: 'Product Price(in €):',
                     text: 'productMasterPrice',
                     name: 'productMasterPrice',
                     disabled: true
                     },
                     */
                    {
                        xtype: 'textareafield',
                        cls:'borderhidden',
                        id:"txtProductDescrip",
                        label: 'Description:',
                        text: 'productMasterDescription',
                        name: 'productMasterDescription',
                        disabled:true
                    }

                ]
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButton"
            },
            {
                delegate: "#mainButton",
                event: "tap",
                fn: "onMainButton"
            },
            {
                delegate: "#addCart",
                event: "tap",
                fn: "onaddCartButton"
            }
        ]
    },
    onBackButton: function()
    {
        this.fireEvent("backToMasterCommand");
    },
    onMainButton:function(){
        this.fireEvent("backToMainViewCommand");
    },
    onaddCartButton:function(){
        this.fireEvent("addCartCommand");
    }
});

