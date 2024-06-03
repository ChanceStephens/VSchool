import React from "react";

export default function BlogPost({ title, subTitle, author, date }) {
    return (
        <div className="blogPost">
            <h1 className="title">{title}</h1>
            <h2 className="subTitle">{subTitle}</h2>        
            <h4>Posted by {author} on {date}</h4>
        </div>
    );
}
