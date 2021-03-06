﻿var configForDevelopment = {
    apiServerBaseAddress: 'http://localhost',
    profileUrl: 'http://localhost:22530/connect/userinfo',
    //profileUrl: 'http://localhost:63381/connect/userinfo',
    providers: {

        identSrv : {
            name: 'identSrv',
            url: 'Token/Exchange',
            authorizationEndpoint: 'http://localhost:22530/connect/authorize', //if this ends with slash --> game over
            //authorizationEndpoint: 'http://localhost:63381/connect/authorize', //if this ends with slash --> game over

            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: ['profile', 'crm','openid'],
            
            responseType :'code',


            scopePrefix: '',
            scopeDelimiter: ' ',
            requiredUrlParams: ['scope', 'nonce'],
            optionalUrlParams: ['display', 'state'],
            state: function(){
                var val = ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
                return encodeURIComponent(val);
            },
            display: 'popup',
            type: '2.0',
            clientId: 'AureliaAspNetApp',
        
            nonce : function(){
                var val = ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
                return encodeURIComponent(val);
            },
            popupOptions: { width: 452, height: 633 }
        },

        google: {
            clientId: '239531826023-ibk10mb9p7ull54j55a61og5lvnjrff6.apps.googleusercontent.com',
            state: function(){
                var val = ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
                return encodeURIComponent(val);
            }
        } 
		,
        linkedin:{
            clientId:'778mif8zyqbei7'
        },
        facebook:{
            clientId:'1452782111708498'
        }
    }
};

var configForProduction = {
    apiServerBaseAddress: 'http://docker-provided-apiServerBaseAddress',
    profileUrl: 'http://docker-provided-apiServerBaseAddress:22530/connect/userinfo',
    //profileUrl: 'http://http://192.168.0.206:63381/connect/userinfo',
    providers: {

        identSrv : {
            name: 'identSrv',
            url: 'Token/Exchange',
            authorizationEndpoint: 'http://docker-provided-apiServerBaseAddress:22530/connect/authorize', //if this ends with slash --> game over
            //authorizationEndpoint: 'http://http://192.168.0.206:63381/connect/authorize', //if this ends with slash --> game over

            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            scope: ['profile', 'crm','openid'],
            
            responseType :'code',


            scopePrefix: '',
            scopeDelimiter: ' ',
            requiredUrlParams: ['scope', 'nonce'],
            optionalUrlParams: ['display', 'state'],
            state: function(){
                var val = ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
                return encodeURIComponent(val);
            },
            display: 'popup',
            type: '2.0',
            clientId: 'AureliaAspNetApp',
        
            nonce : function(){
                var val = ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
                return encodeURIComponent(val);
            },
            popupOptions: { width: 452, height: 633 }
        },

        google: {
            clientId: '239531826023-ibk10mb9p7ull54j55a61og5lvnjrff6.apps.googleusercontent.com',
            state: function(){
                var val = ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
                return encodeURIComponent(val);
            }
        } 
		,
        linkedin:{
            clientId:'778mif8zyqbei7'
        },
        facebook:{
            clientId:'1452782111708498'
        }
    }
};
var config ;
if (window.location.hostname==='localhost') {
    config = configForDevelopment;
}
else{
    config = configForProduction;
}


export default config;
