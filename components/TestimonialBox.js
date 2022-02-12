import React from 'react'
import Image from 'next/image'

export default function TestimonialBox(props) {


    return (
        <div className="testimonial-box">
            <div className="author">
                <div className="author__icon">
                    <Image 
                        src={props.imgSrc} 
                        alt="" 
                        width={50}
                        height={50}
                    />
                </div>
                <div className="author__namebar">
                    <p className="author__namebar__name">
                        {props.author}
                    </p>
                    <p className="author__namebar__verified">
                        Verified Buyer
                    </p>
                </div>
            </div>
            <p className="testimonial">
                {props.testimonial}
            </p>
        </div>
    )

}