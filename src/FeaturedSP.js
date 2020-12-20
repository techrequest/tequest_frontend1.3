import React from 'react';
import storefrontitaly from './images/storefrontitaly.jpg';
import storefrontold from './images/storefrontold.jpg';
import storefronturban from './images/storefronturban.jpg';
import storefrtontfrench from './images/storefrtontfrench.jpg';


function FeaturedSPs(){
    return (
        <div className="featured-product product">
            <div className="container-fluid">
                <div className="section-header">
                    <h1>Featured Service Providers</h1>
                </div>
                <div className="row align-items-center product-slider product-slider-3">
                    <div className="col-lg-3">
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
                    
                    <div className="col-lg-3">
                        <div className="product-item">
                            <div className="product-title">
                                <a href="ServiceProviderDetailsPage.js">Paninoteca</a>
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
                                    <img src={storefrontitaly} height="150px" alt="Paninoteca"/>
                                </a>
                                <div className="product-action">
                                    <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                    <a href="index.html"><i className="fa fa-heart"></i></a>
                                    <a href="index.html"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="product-price">
                                <h3><span>$</span>49</h3>
                                <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product-item">
                            <div className="product-title">
                                <a href="ServiceProviderDetailsPage.js">Spanish Antiques</a>
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
                                    <img src={storefrontold} height="150px" alt="Spanish Antiques Store"/>
                                </a>
                                <div className="product-action">
                                    <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                    <a href="index.html"><i className="fa fa-heart"></i></a>
                                    <a href="index.html"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="product-price">
                                <h3><span>$</span>19</h3>
                                <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="product-item">
                            <div className="product-title">
                                <a href="ServiceProviderDetailsPage.js">Montreal Book Store</a>
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
                                    <img src={storefronturban} height="150px" alt="Montreal Book Store"/>
                                </a>
                                <div className="product-action">
                                    <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                    <a href="index.html"><i className="fa fa-heart"></i></a>
                                    <a href="index.html"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="product-price">
                                <h3><span>$</span>29</h3>
                                <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FeaturedSPs;