import React from 'react';
import FooterMenuItems from './FooterMenuItems';
import storefrontitaly from './images/storefrontitaly.jpg';
import storefrontold from './images/storefrontold.jpg';
import storefronturban from './images/storefronturban.jpg';
import storefrtontfrench from './images/storefrtontfrench.jpg';
import PageNavigationShortMenu from './PageNavigationShortMenu';
import SideBarMenu from './SideBarMenu';


import TeQuestHeader from './TeQuestHeader';

function ServiceProvidersList () {
  return (
    <div className="App">
        <TeQuestHeader></TeQuestHeader>

        <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-view-top">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-search">
                                                <input type="email" value="Search"/>
                                                <button><i className="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="product-short">
                                                <div className="dropdown">
                                                    <div className="dropdown-toggle" data-toggle="dropdown">Product short by</div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="LatestAdditions.js" className="dropdown-item">Newest</a>
                                                        <a href="PopularProvidersList.js" className="dropdown-item">Popular</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="product-price-range">
                                                <div className="dropdown">
                                                    <div className="dropdown-toggle" data-toggle="dropdown">Product price range</div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">$0 to $50</a>
                                                        <a href="#" className="dropdown-item">$51 to $100</a>
                                                        <a href="#" className="dropdown-item">$101 to $150</a>
                                                        <a href="#" className="dropdown-item">$151 to $200</a>
                                                        <a href="#" className="dropdown-item">$201 to $250</a>
                                                        <a href="#" className="dropdown-item">$251 to $300</a>
                                                        <a href="#" className="dropdown-item">$301 to $350</a>
                                                        <a href="#" className="dropdown-item">$351 to $400</a>
                                                        <a href="#" className="dropdown-item">$401 to $450</a>
                                                        <a href="#" className="dropdown-item">$451 to $500</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="ServiceProviderDetailsPage.js">Fren(s)h Bakery</a> 
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="ServiceProviderDetailsPage.js">
                                            <img src={storefrtontfrench} height="150px" alt="French Bakery"/>
                                        </a>
                                        <div className="product-action">
                                            <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                            <a href="index.html"><i className="fa fa-heart"></i></a>
                                            <a href="index.html"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>59</h3>
                                        <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="ServiceProviderDetailsPage.js">Fren(s)h Bakery</a> 
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="ServiceProviderDetailsPage.js">
                                            <img src={storefrtontfrench} height="150px" alt="French Bakery"/>
                                        </a>
                                        <div className="product-action">
                                            <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                            <a href="index.html"><i className="fa fa-heart"></i></a>
                                            <a href="index.html"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>59</h3>
                                        <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="ServiceProviderDetailsPage.js">Fren(s)h Bakery</a> 
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="ServiceProviderDetailsPage.js">
                                            <img src={storefrtontfrench} height="150px" alt="French Bakery"/>
                                        </a>
                                        <div className="product-action">
                                            <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                            <a href="index.html"><i className="fa fa-heart"></i></a>
                                            <a href="index.html"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>59</h3>
                                        <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="ServiceProviderDetailsPage.js">Fren(s)h Bakery</a> 
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="ServiceProviderDetailsPage.js">
                                            <img src={storefrtontfrench} height="150px" alt="French Bakery"/>
                                        </a>
                                        <div className="product-action">
                                            <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                            <a href="index.html"><i className="fa fa-heart"></i></a>
                                            <a href="index.html"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>59</h3>
                                        <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="ServiceProviderDetailsPage.js">Fren(s)h Bakery</a> 
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="ServiceProviderDetailsPage.js">
                                            <img src={storefrtontfrench} height="150px" alt="French Bakery"/>
                                        </a>
                                        <div className="product-action">
                                            <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                            <a href="index.html"><i className="fa fa-heart"></i></a>
                                            <a href="index.html"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>59</h3>
                                        <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="ServiceProviderDetailsPage.js">Fren(s)h Bakery</a> 
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="ServiceProviderDetailsPage.js">
                                            <img src={storefrtontfrench} height="150px" alt="French Bakery"/>
                                        </a>
                                        <div className="product-action">
                                            <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                            <a href="index.html"><i className="fa fa-heart"></i></a>
                                            <a href="index.html"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>59</h3>
                                        <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="ServiceProviderDetailsPage.js">Fren(s)h Bakery</a> 
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="ServiceProviderDetailsPage.js">
                                            <img src={storefrtontfrench} height="150px" alt="French Bakery"/>
                                        </a>
                                        <div className="product-action">
                                            <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                            <a href="index.html"><i className="fa fa-heart"></i></a>
                                            <a href="index.html"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>59</h3>
                                        <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="ServiceProviderDetailsPage.js">Fren(s)h Bakery</a> 
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="ServiceProviderDetailsPage.js">
                                            <img src={storefrtontfrench} height="150px" alt="French Bakery"/>
                                        </a>
                                        <div className="product-action">
                                            <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                            <a href="index.html"><i className="fa fa-heart"></i></a>
                                            <a href="index.html"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>59</h3>
                                        <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="ServiceProviderDetailsPage.js">Fren(s)h Bakery</a> 
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="ServiceProviderDetailsPage.js">
                                            <img src={storefrtontfrench} height="150px" alt="French Bakery"/>
                                        </a>
                                        <div className="product-action">
                                            <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                            <a href="index.html"><i className="fa fa-heart"></i></a>
                                            <a href="index.html"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>59</h3>
                                        <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        
                    </div>
                    <div className="col-lg-4 sidebar">
                                <SideBarMenu>

                                </SideBarMenu>
                    </div>
                </div>
            </div>
    
            <div className="col-md-12">
                <PageNavigationShortMenu></PageNavigationShortMenu>
                <div>
                    <p> </p>
                   
                </div>
                <FooterMenuItems></FooterMenuItems>
            </div>
                       
        </div>
    </div>
  );
}

export default ServiceProvidersList