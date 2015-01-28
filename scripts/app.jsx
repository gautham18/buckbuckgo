define(['react','jsx!MainPage','jsx!ListPage'], function(React, MainPage, ListPage){ 
    var App = React.createClass({
        
        getHashVal : function(){
            var locationHref = location.href, hrefArray, searchText="";
            
            hrefArray  = locationHref.split("?q=");
            searchText = hrefArray[1];
            
            return searchText;
        },
        
        getInitialState : function(){
            var searchText="";
            
            searchText = this.getHashVal();
                
            return {
                searchText : searchText,
            };
        },
        
        render : function(){
            var searchText, page;

            if(this.state.searchText){
                page = <ListPage data={this.state} getSearchList={this.getSearchList}/>
            }else{
                page = <MainPage data={this.state} />
            }

            return(page);
        }
    });
    return App;
});


