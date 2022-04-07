import React, { useEffect, useState } from "react";
import Slider from "../Slider";
import styled from "styled-components";
import Covbg from "../../image/imagebg.png";
import Headerpost from "../HeadePost/HeaderPost";
import Header from "../Header/index";
import Post from "../Post/Post";
import { getAllPost, getAlluser } from "../../http/getdata";

const Section = styled.section`
    height: 100%;
    width: 100%;
    background-color: transparent;
    padding-bottom: 600px;
    background: no-repeat 105% 25% / auto 330px url(${Covbg}),
        no-repeat -12% 100% / auto 330px url(${Covbg});
    z-index: 100;
    .container {
        max-width: 949px;
        background-color: transparent;
        margin-right: 100px;
        margin-bottom: 40px;
        padding: 0 5px;
        float: right;
    }
    @media (max-width: 768px) {
        .container {
            margin: 0 auto;
        }
    }
`;
const Main = () => {
    const [stateUser, setstateUser] = useState(null);
    const [posts, setposts] = useState(null);
    const [curentUser, setCurrentUser] = useState(null);

    const handleClick = (e) => {
        const Id = Number(e.target.id);
        //!refactory
        let usernew = stateUser.reduce((acc, user) => {
            if (user.id === Id) {
                return [...acc, { ...user, active: true }];
            } else {
                return [...acc, { ...user, active: false }];
            }
        }, []);
        const [{ username }] = usernew.filter(({ username, id }) => Id === id);
        setCurrentUser(username);
        setstateUser(usernew);
        getAllPost(setposts, Id);
    };

    useEffect(() => {
        if (stateUser === null) {
            getAlluser(setstateUser);
        }
    }, [stateUser]);

    return (
        <Section className="main">
            <Header />
            <Slider props={stateUser} handleClick={handleClick} />
            {curentUser && <Headerpost name={curentUser} />}
            <div className="container">
                {posts &&
                    posts.map(({ title, body }) => (
                        <Post title={title} body={body} key={title} />
                    ))}
            </div>
        </Section>
    );
};

export default Main;
//id, user_nick, user_name
