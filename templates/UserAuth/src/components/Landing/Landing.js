import React from "react";
import css from "./landing.module.css"

export default function Landing()
{

    return<>
        <section className={css["home-section"]}>
            <div className={css["home-quote"]}>
                <h2 className={css["quote-text"]}>
                    “What mental health needs <br/>
                    is more sunlight, more candor, <br/>
                    and more unashamed conversation.”
                </h2>
                <h4 className={css["quote-author"]}>— Glenn Close</h4>
            </div>
            <h4 className={css["tagline"]}>
                Assess yourself to keep a track of your mental weelbeing
            </h4>
            <a href="" className={css["start"]}>Begin</a>
        </section>


    </>
}