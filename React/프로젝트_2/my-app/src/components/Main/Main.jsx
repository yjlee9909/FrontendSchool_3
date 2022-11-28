import { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import UserContext from "../../context/UserContext";
import React from "react";
import About from "./about/About";
import Posts from "./posts/Posts";
import "./main.css";

export default function Main() {
    const { isLogin } = useContext(UserContext);
    const [posts, setPosts] = useState();

    // fetch, axios는 useEffect로 감싸고 []로 한번만 실행해주도록 한다.
    useEffect(() => {
        // axios 일단 undefined 던지고 그 다음에 통신 완료됨
        axios.get("https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json").then((json) => {
            // console.log(json.data);
            setPosts(json.data);
        });
    }, []);

    return (
        <main>
            {posts === undefined ? (
                <></>
            ) : (
                <div className="max-width">
                    <h2 className="a11y-hidden">Post</h2>
                    <ul className="posts">
                        <Posts posts={posts} />
                    </ul>
                    {isLogin ? <About /> : <></>}
                </div>
            )}
        </main>
    );
}
