import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="banner">
                        <div className="top">
                            <h1 className="heading">ABOUT US</h1>
                            <p>The only thing we're serious about is food.</p>
                        </div>
                        <p className="mid">
                            Welcome to Grillz, where we celebrate culinary diversity. Located in the heart of Kolkata, we offer a wide range of cuisines, from hearty non-vegetarian dishes to wholesome vegan options.

                            Our passionate chefs use the freshest ingredients to bring you flavors from around the world. Whether you're here for a casual lunch, a family dinner, or a special celebration, our inviting ambiance and friendly staff ensure a memorable dining experience for everyone.

                            Join us at Grillz and enjoy a gastronomic journey that caters to all tastes and dietary preferences. We look forward to serving you!
                        </p>
                    </div>
                    <div className="banner">
                        <img src="about.png" alt="about" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;