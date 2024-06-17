import React from 'react';
import './css/ourDesign.css';
import './css/styleToAll.css';
import ux from '../photos/ux.png';
import code from '../photos/code.png';
import heart from '../photos/heart.png';
import security from '../photos/security.png';
import sucsess from '../photos/sucsess.png';
import quality from '../photos/quality.png';
export default function OurDesign(){
    const ourDesigns = [
        {id:1 , photo : ux, title: "UX Driven Engineering", paragraph:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam ex doloribus et illum minus a vitae dicta architecto! Sapiente, voluptatibus." },
        {id:2 , photo : code, title: "Development shering understanding", paragraph:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam ex doloribus et illum minus a vitae dicta architecto! Sapiente, voluptatibus." },
        {id:3 , photo : heart, title: "Proven Experience and Expertise", paragraph:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam ex doloribus et illum minus a vitae dicta architecto! Sapiente, voluptatibus." },
        {id:4 , photo : security, title: "Security & Intellectual property (Ip)", paragraph:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam ex doloribus et illum minus a vitae dicta architecto! Sapiente, voluptatibus." },
        {id:5 , photo : sucsess, title: "Code Reviews", paragraph:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam ex doloribus et illum minus a vitae dicta architecto! Sapiente, voluptatibus." },
        {id:6 , photo : quality, title: "Quality Assurance & Testing", paragraph:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam ex doloribus et illum minus a vitae dicta architecto! Sapiente, voluptatibus." },
    ]
    const design = ourDesigns.map((ourDesign) => {
        return(
            <div className='flex-card'>
                <div className='photo-design'>
                    <img src = {ourDesign.photo}/>
                </div>
                <div className='text-design'>
                    <h4> {ourDesign.title}</h4>
                    <p>{ourDesign.paragraph}</p>

                </div>

            </div>
        );

    });
    return(
        <section className='our-design'>
            <div className='container'>

            {design}
            </div>

        </section>
    );
    
}