import React from 'react';
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png"

const Footer = () => {
    return (
        <div >
            <footer
                style={{
                    background: `url(${footer})`,
                    backgroundSize: 'cover'
                }}
                className="footer p-10">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Emergency Checkup</Link>
                    <Link className="link link-hover">Monthly Checkup</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link className="link link-hover">Fluoride Treatment</Link>
                    <Link className="link link-hover">Cavity Filling</Link>
                    <Link className="link link-hover">Teath Whitening</Link>

                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link className="link link-hover">New York - 101010 Hudson</Link>

                </div>
            </footer>
            <footer className="footer border-t py-1 text-accent grid justify-items-center">
                <p>Copyright © 2023 - All right reserved by Doctor Saiful Islam</p>
            </footer>
        </div>
    );
};

export default Footer;