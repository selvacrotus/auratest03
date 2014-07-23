/**
 * Created by karthik on 4/22/2014.
 */
Ext.define('CrotusValet.view.Cart', {
    extend: "Ext.Container",
    requires: "Ext.dataview.List",
    alias: "widget.cartview",
    config: {
        layout: {
            type:"fit"
        },
        cls: 'backgroundcolor',
        items: [
            {
                xtype: "toolbar",
                title: "My Cart",
                docked: "top",
                cls: 'toolcolor',
                items: [
                    {
                        xtype: "button",
                        itemId: "backButton",
                        iconCls: "cart3",
                        cls: 'titleBar_btns'
                    //    text: "Continue Shopping"
                    },
                    {
                       xtype:"spacer"
                    },
                /*    {
                        xtype: "button",
                        itemId: "mybill",
                        cls: 'titleBar_btns',
                        text: "MyBill",
                        name: "My Bill"
                    },*/
                    {
                        xtype: "button",
                        itemId: "confirmorder",
                        cls: 'titleBar_btns',
                        text: "Confirm",
                        name: "Order Food Items"
                    }
                ]
            },
            {
                xtype: "toolbar",
              //  title: "My Cart",
                docked: "bottom",
                layout:{
                    type:'vbox',
                  align:'center'
                },
                cls:'footerLinks',
                ////////////////////////////////////////////////////////////
                items: [
                    {
                        xtype:'textfield',
                        hidden: true,
                        width:'auto',
                        text: 'MyBill',
                        itemId: "txtitemMyBill",
                        id:'txtMyBill',
                        cls:'mybill',
                        name:'My Bill',
                        label:"My Bill",
                        disabled: true
                    }
                ]
                /////////////////////////////////////////////////////////////
            },
            {
                xtype: "list",
                cls: 'listbg',
                id: 'SpecialDisclosureList',
                store: "FoodList",
                itemId: "lstFoodItems",
                loadingText: "Loading ...",
                itemCls: 'dataPview-item',
                emptyText: "<div>No Items In Your Cart!!!</div>",
                onItemDisclosure:false,
                //     itemTpl: "<img class=\"item-item-thumbnails\" src=\"{productDetailImageUrl}\" width=80 height=60 /><!--<button class=\"addtocart\">Add To Cart</button><button class=\"order\">order</button>--><div class=\"list-item-title\">{productDetailName}</div><div class=\"list-item-mobile\">No.Of.Items: {productDetailQuantity}</div><div class=\"list-item-mobile\">Price: $ {productDetailPrice}</div>"
           /*     itemTpl:" <div class=\"common\"><div class=\"imageTitle\"><div class=\"\">" +
                    "<img src=\"{productDetailImageUrl}\"width=120 height=120>" +
                    "</div></div><div class=\"priceQuant\">" +
                    "<p class=\"title\">{productDetailName}</p><p>Price:<b><span class=\"pricecolor\"> &euro;{productDetailPrice}</span></b><br/>Quantity:<b><span class=\'proquan\'>  {productDetailQuantity}</span></b>  <br/>Total:<b><span class=\'tproquan\'>  &euro;{productTotal}</span></b>  <!--   <br/>Total:<b><span class=\'ptotal\'>{productTotalPrice}</span></b>  -->     </p><!--<div class='rembutton'><button class=\"remove\">Remove</button></div>--><div class='rembutton'><img class=\"remove\" height=35px width=25px src='resources/images/trash.png'/></div></div></div>"
           */     itemTpl:" <div class=\"common\"><div class=\"imageTitle\"><div class=\"\">" +
                    "<img src=\"resources/images/food_def.jpg\" height=50>" +
                    "</div></div><div class=\"priceQuant\">" +
                    "<p>Name:<b><span class=\'tproquan\'>   {menu_item_name}</span></b><br/>Quantity:<b><span class=\'tproquan\'>{menu_quantity}</span></b><br/>Price:<b><span class=\"pricecolor\"> &euro;{price_net}</span></b></p><div class='rembutton'><img class=\"remove\" height=35px width=25px src='resources/images/trash.png'/></div></div></div>"
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn:"onBackButtonTap"
            },
            {
                delegate: "#lstFoodItems",
                event: "disclose",
                fn: "onlstFoodDetail"
            },
            {
                delegate: "#lstFoodItems",
                event: "itemtap",
                fn:"onLstFoodItemTap"
            },
            {
                delegate: "#confirmorder",
                event: "tap",
                fn:"onConfirmOrderTap"
            },
            {
                delegate: "#mybill",
                event: "tap",
                fn:"onMyBill"
            }
        ]
    } ,
    onBackButtonTap: function(){
        console.log("onBackButton");
        this.fireEvent("backToMasterViewCommand");
    },
    onlstFoodDetail: function (list,record,target,index,evt,options) {
        this.fireEvent("foodDescriptionTapCommand", this, record);
    },
    onLstFoodItemTap: function (list,target,index,record,evt,options) {
        this.fireEvent("foodItemListTapCommand", list,target,index,record,evt,options);
    },
    onConfirmOrderTap:function(){
        this.fireEvent("confirmCommand");
    },
    onMyBill:function(){
        this.fireEvent("myBillCommand");
    }


});