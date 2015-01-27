define(['react'],function(React){
    var ThumbList = React.createClass({
        
        getInitialState : function(){
            return {showLeft : false,
                    showRight : true
                   };
        },
        
        navLeft : function(){
            var ulElem;
            
            ulElem = this.refs.thumb.getDOMNode();
            
            ulElem.scrollLeft -= 100;
            this.updateState();
            
        },
        
        navRight : function(){
            var ulElem;
            
            ulElem = this.refs.thumb.getDOMNode();
            ulElem.scrollLeft += 100;
            this.updateState();
        },
        
        updateState : function(){
            var ulElem;
            
            ulElem = this.refs.thumb.getDOMNode();
            
            if(ulElem.scrollLeft === 0){
                this.setState({showLeft : false});
            }else{
                this.setState({showLeft : true});
            }
            
            if(ulElem.scrollLeft + ulElem.getBoundingClientRect.width === ulElem.scrollWidth){
                this.setState({showRight: false});
            }else{
                this.setState({showRight: true});
            }
        },
        
        hideNavs : function(){
          this.setState({showLeft : false,
                        showRight : false
            });  
        },
        
        reDirect : function(url){
            window.location.href="?q="+url;
        },
        
        render : function(){
            var relatedList, flattenList=[],i ,len, 
                searchList, ulHolder, curObj = this;
            
            searchList = this.props.searchList.RelatedTopics;
            len = searchList.length;

            for(i=0; i<len; i++){
                if(searchList[i].FirstURL){
                    flattenList.push(searchList[i]);
                }else{
                    flattenList = flattenList.concat(searchList[i].Topics);
                }
            }
            
             relatedList = flattenList.map(function(topic){
                var newResult, searchVal="";
                
                newResult = topic.FirstURL;
                searchVal = newResult.split("/")[3];
                newResult = topic.Result.replace(topic.FirstURL, "?q=" + searchVal);

                 return(
                    <li onClick={curObj.reDirect.bind(curObj,searchVal)}>
                     <div>
                        <div>
                            <div className="thumb-header" dangerouslySetInnerHTML={{__html: newResult}} />
                            <div className="thumb-img-holder"><img src={topic.Icon.URL} /></div>
                        </div>
                        <div className="thumb-description">{topic.Text}</div>
                     </div>
                    </li>
                );               
            });
            
            return(
                <div className="thumb-list clearfix">
                    <div className="holder row col-md-12">
                        <ul className="list-inline" ref="thumb">
                            {relatedList}
                        </ul>
                    </div>
                    <div className={this.state.showLeft ? "nav-left shw" : "nav-left"} onClick={this.navLeft}>
                        <span><i className="glyphicon glyphicon-menu-left"></i></span>
                    </div>
                    <div className={this.state.showRight ? "nav-right shw" : "nav-right"} onClick={this.navRight}>
                        <span><i className="glyphicon glyphicon-menu-right"></i></span>
                    </div>
                </div>
            );
        }
    });
    
    return ThumbList;
});