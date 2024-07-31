import React from "react";
import BlogPost from "./BlogPost";
import data from "../data";

export default function BlogList() {
    const posts = data.map((item, index) => {
        return (
            <BlogPost
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                author={item.author}
                date={item.date}
            />
        );
    });

    return (
        <div className="blogList">
            {posts}
        </div>
    );
}
