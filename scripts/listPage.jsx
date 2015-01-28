define(['react','jsx!SearchBox','jsx!Categories','jsx!ThumbList'], function(React, SearchBox, Categories, ThumbList){
    var ListPage = React.createClass({
        
        getInitialState : function(){
            return {searchList : {}};  
        },
        
        componentWillMount : function(){
            var searchText = this.props.data.searchText;
            var curObj = this;
            
            if(!searchText){
                return;
            }
            
            searchText = searchText.replace("_", " ");
            console.log("here")
            $.ajax({
                url : "http://api.duckduckgo.com/?format=json",
                data : {q : searchText, no_redirect : 1},
                dataType : "jsonp",
                success : function(obj){
                    console.log(obj);
                    curObj.setState({
                        searchList : obj
                    });
                }
            });
        },
        
        render : function(){
            var renderList, searchList, showPage = true;
            
            searchList = this.state.searchList;
            
            if(searchList.Type === "A"){
                renderList = <Categories searchList={searchList} />;
            }else if(searchList.Type === "B"){
                   
            }else if(searchList.Type === "D" || searchList.Type === "C"){
                renderList = <ThumbList searchList={searchList} />
            }else if(searchList.Type === "E"){
                if(searchList.Redirect){
                    showPage = false;
                    window.location = searchList.Redirect;
                }
            }
            
            if(searchList.RelatedTopics && !searchList.RelatedTopics.length){
                renderList = <div className="no-result">No search result available.</div>
            }else{
                renderList = <div className="well search-box">
                        {renderList}
                    </div>
            }

            return (
                <div className={showPage ? "white-bg" : "white-bg hide"}>
                    <div className="row search-list-wrapper">
                        <div className="row col-md-1 col-md-offset-1 hidden-xs hidden-sm"><img src="images/logo.png" /></div>
                        <div className="list-search-holder col-sm-offset-1 col-sm-6 col-xs-offset-2 col-xs-8">
                            <SearchBox value={this.props.data.searchText}/>
                        </div>
                    </div>
                {renderList}
                </div>
            );
        }
    });
    return ListPage;
});