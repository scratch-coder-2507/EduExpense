import React from 'react'
import { useHistory } from 'react-router';
import "../Styling/Userblog.css";

const Userblog = ({ author, content, image, tag, title}) => {
    const history = useHistory();

    return (
        <div className="userblog">
            <div className="blogss">
                <div className="blog" onClick={() => {
                            history.push("/page")
                        }}>
                    <img src={image} alt=""/>
                    <div>
                        <h3 className="sourceName">
                            <span>{tag}</span>
                        </h3>
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <h4>-{author}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userblog
