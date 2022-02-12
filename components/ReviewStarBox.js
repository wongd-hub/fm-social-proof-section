import React from 'react'
import Image from 'next/image'

import star from '../static/images/icon-star.svg'

export default function ReviewStarBox(props) {

    return (
        <div className="review-star-box">
            <div className="review-star-box__stars">
                {
                    [...Array(5).keys()].map((i) => (
                            <div className="review-star-box__single-star" key={i}>
                                <Image src={star} alt="" key={i} />
                            </div>
                        )
                    )
                }
            </div>
            <p className="review-star-box__text">{props.text}</p>
        </div>
    )

}