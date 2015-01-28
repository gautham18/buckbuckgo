define(['react','jsx!SearchBox','jquery'], function(React, SearchBox, $){
    var MainPage = React.createClass({
        
        render : function(){
            return(
            <div className="grey-bg">
                <div className="menu">
                    <div className="menu-holder">
                        <i className="glyphicon glyphicon-menu-hamburger"></i>
                    </div>
                </div>
                <div className="container">
                <div className="clearfix search-area">
                    <div className="row text-center col-xs-6 col-xs-offset-3 ">
                        <div className="hidden-xs"><img src="images/logo.png" /></div>
                        <div className="header">BuckBuckGo</div>
                        <SearchBox data={this.props.data} getSearchList={this.props.getSearchList} value={this.props.data.searchText}/>
                    </div>
                </div>
                <div className="pricing">
                    <div className="row">
                        <div className="row text-center search-text">Try Search Pro</div>
                        <div className="plan-wrapper">
                            <div className="row col-md-3 col-md-offset-2 col-xs-6 col-xs-offset-3">
                                <div className="plan-holder">
                                    <div className="plan-header green">
                                        <div className="plan-name text-capitalize">light</div>
                                        <div className="plan-description">Great for small business</div>
                                    </div>
                                    <div className="plan-cost text-center">
                                        <div><span>$</span><span>5</span></div>
                                        <div className="monthly text-capitalize">monthly</div>
                                    </div>
                                    <div className="plan-details">
                                        <ul className="list-unstyled">
                                            <li><i className="glyphicon glyphicon-time"></i>24/7 Tech Support</li>
                                            <li><i className="glyphicon glyphicon-plus"></i>Advanced Options</li>
                                            <li><i className="glyphicon glyphicon-star"></i>100GB Storage</li>
                                            <li><i className="glyphicon glyphicon-heart"></i>1GB Bandwidth</li>
                                        </ul>
                                    </div>
                                    <div className="plan-search">
                                        <div>Up to 1 million searches</div>
                                    </div>
                                </div>
                                <div className="bookmark-holder green">
                                    <div>
                                        <div className="right-transparent-arrow"></div>
                                        <div className="tag-text">join</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row col-md-3 run-plan col-xs-6 col-xs-offset-3 col-md-offset-0">
                                <div className="plan-holder">
                                    <div className="plan-header orange">
                                        <div className="plan-name text-capitalize">Run</div>
                                        <div className="plan-description">Great for small business</div>
                                    </div>
                                    <div className="plan-cost text-center">
                                        <div><span>$</span><span>9</span><span>79</span></div>
                                        <div className="monthly text-capitalize">monthly</div>
                                    </div>
                                    <div className="plan-border"></div>
                                    <div className="plan-details">
                                        <ul className="list-unstyled">
                                            <li><i className="glyphicon glyphicon-time"></i>24/7 Tech Support</li>
                                            <li><i className="glyphicon glyphicon-plus"></i>Advanced Options</li>
                                            <li><i className="glyphicon glyphicon-star"></i>100GB Storage</li>
                                            <li><i className="glyphicon glyphicon-heart"></i>1GB Bandwidth</li>
                                        </ul>
                                    </div>
                                    <div className="plan-search">
                                        <div>Up to 5 million searches</div>
                                    </div>
                                </div>
                                <div className="arrow-holder norican-font hidden-xs hidden-sm">
                                    <div className = "arrow-img-holder">
                                        <img src="../images/arrow.png" />
                                    </div>
                                    <div className="special-text">
                                        While our commercial director <br/> was on vacation, we came up with this<div className="highlight-text">crazy prize</div>                                      </div>
                                </div>
                                <div className="bookmark-holder orange">
                                    <div>
                                        <div className="right-transparent-arrow"></div>
                                        <div className="tag-text">join</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row col-md-3 col-xs-6 col-xs-offset-3 col-md-offset-0">
                                <div className="plan-holder">
                                    <div className="plan-header green">
                                        <div className="plan-name text-capitalize">light</div>
                                        <div className="plan-description">Great for small business</div>
                                    </div>
                                    <div className="plan-cost text-center">
                                        <div><span>$</span><span>12</span></div>
                                        <div className="monthly text-capitalize">monthly</div>
                                    </div>
                                    <div className="plan-details">
                                        <ul className="list-unstyled">
                                            <li><i className="glyphicon glyphicon-time"></i>24/7 Tech Support</li>
                                            <li><i className="glyphicon glyphicon-plus"></i>Advanced Options</li>
                                            <li><i className="glyphicon glyphicon-star"></i>100GB Storage</li>
                                            <li><i className="glyphicon glyphicon-heart"></i>1GB Bandwidth</li>
                                        </ul>
                                    </div>
                                    <div className="plan-search">
                                        <div>Unlimited searches</div>
                                    </div>
                                </div>
                                <div className="bookmark-holder green">
                                    <div>
                                        <div className="right-transparent-arrow"></div>
                                        <div className="tag-text">join</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer></footer>
                </div>
            </div>
                </div>
            );
        }
    }); 
    return MainPage; 
});