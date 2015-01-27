define(['react'], function(React){
    var SearchBox = React.createClass({

        getInitialState : function(){
            return {value : this.props.value};  
        },

        handleKeyDown : function(e){
          if(e.keyCode == 13){
            this.setSearchText();
          }
        },

        onChange : function(e){
            this.setState({value : e.target.value});
        },

        setSearchText : function(){
            var searchText;
            
            debugger;
            searchText = this.refs.searchInput.getDOMNode().value.trim();
            location.href = "?q=" + searchText;
        },

        render : function(){
            return (
                <div className=" clearfix input-wrapper search-bar">
                    <input className="form-control" type="text" onKeyUp={this.handleKeyDown} ref="searchInput" value={this.state.value} onChange={this.onChange}/>
                    <span onClick={this.setSearchText}>
                        <i className="glyphicon glyphicon-search"></i>
                    </span>
                </div>
            );
        }
     });
    return SearchBox;
});
