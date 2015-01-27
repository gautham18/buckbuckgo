 require.config({
    baseUrl: "scripts",
    paths: {
        "jsx!App" : "app",
        "jsx!MainPage" : "MainPage",
        "jsx!ListPage" : "ListPage",
        "jsx!SearchBox" : "SearchBox",
        "jsx!Categories" : "categories",
        "jsx!ThumbList" : "thumbList",
        "react" : "../../bower_components/react/react",
        "jquery": "../../bower_components/jquery/dist/jquery.min",
        "main" : "main",
        "JSXTransformer" : "JSXTransformer"
    },

    jsx: {
        fileExtension: '.jsx'
    }
});

require(['react','jsx!App'],function(React, App){
     App = React.createFactory(App);
     React.render(App({}), document.getElementById("main"));
});
