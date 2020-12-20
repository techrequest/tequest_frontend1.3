import React from 'react';

function FooterMenuItems(){
    return(
        <div class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Get in Touch</h2>
                            <div class="contact-info">
                                <p><i class="fa fa-map-marker"></i>Address Line 1</p>
                                <p><i class="fa fa-envelope"></i>TeQuestSol@gmail.com</p>
                                <p><i class="fa fa-phone"></i>+xxx-xxx-xxx-xxxx</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Follow Us</h2>
                            <div class="contact-info">
                                <div class="social">
                                    <a href="index.html"><i class="fab fa-twitter"></i></a>
                                    <a href="index.html"><i class="fab fa-facebook-f"></i></a>
                                    <a href="index.html"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="index.html"><i class="fab fa-instagram"></i></a>
                                    <a href="index.html"><i class="fab fa-youtube"></i></a>                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Company Info</h2>
                            <ul>
                                <li><a href="#AboutUs.js">About Us</a></li>
                                <li><a href="PrivacyPolicy.js">Privacy Policy</a></li>
                                <li><a href="TNC.js">Terms and Condition</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Purchase Info</h2>
                            <ul>
                                <li><a href="PaymentPolicy.js">Payment Policy</a></li>
                                <li><a href="ShippingPolicy.js">Shipping Policy</a></li>
                                <li><a href="ReturnPolicy.js">Return Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p>
                &nbsp;<br/>
            </p>
        </div>

    )
}

export default FooterMenuItems
