define(['react'],function(React){
    var Categories = React.createClass({
        getInitialState : function(){
            return {expanded : false}
        },

        expandBox : function(){
            this.setState({expanded: !this.state.expanded});
        },
        
        render : function(){
            var searchList, relatedList, expandClass="", upDownClass;
            
            searchList = this.props.searchList;
            relatedList = searchList.RelatedTopics.map(function(topic){
                var newHref, searchVal;
                
                searchVal = topic.FirstURL.split("/")[3];
                newHref = "?q=" + searchVal;
                return(
                    <li><a href={newHref}>{topic.Text}</a></li>
                );
            });
            if(this.state.expanded){
                expandClass = "row summary-container expanded";
                upDownClass = "glyphicon glyphicon-chevron-up";
            }else{
                expandClass = "row summary-container";
                upDownClass = "glyphicon glyphicon-chevron-down";
            }
            
            return(
                <div className={expandClass}>
                    <div className="row col-md-2 col-md-offset-1">
                        <div><img src={searchList.Image} /></div>
                    </div>
                    <div className="row col-md-4">
                        <div className="search-main-summary ">
                            <h4 className="title">{searchList.Heading}</h4>
                            <div>{searchList.Abstract}</div>
                        </div>
                        <ul className="list-inline">
                            <li onClick={this.expandBox} className="show-more"><i className={upDownClass}></i>Show More</li>
                            <li><a href={searchList.AbstractURL} target="_blank">More at Wikipedia</a></li>
                        </ul>
                    </div>

                    <div className="row col-md-4 col-md-offset-1 related-list">
                        <ul className="list-unstyled">
                            <li>Related Topics</li>
                            {relatedList}
                        </ul>
                        <div onClick={this.expandBox} className="navigate"><i className={upDownClass}></i></div>
                    </div>
                </div>
            );
        }
    });
    
    return Categories;
});