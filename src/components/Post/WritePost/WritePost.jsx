import React from "react";
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../lib/styleUtils';
import Textarea from 'react-textarea-autosize';
import { media } from '../../../lib/styleUtils';
import { useState } from 'react';

const Wrapper = styled.div`
    width: 768px;
    margin: 0 auto;
    border-radius: 15px;
    padding: 1rem;
    background: ${oc.gray[7]};
    position: relative;
    ${shadow(1)}
    ${media.desktop`
        width: 736px;
    `}
    ${media.tablet`
        width: 100%;
    `}
`;

const StyledTextarea = styled(Textarea)`
    width: 100%;
    background: transparent;
    border: none;
    resize: none;
    outline: none;
    font-size: 1.5rem;
    font-weight: 300;
    color: white;
    ::placeholder {
        color: ${oc.gray[3]};
    }
    ${media.tablet`
        font-size: 1rem;
    `}
`;

const Button = styled.button`
    position: absolute;
    bottom: 0;
    right: 3%;
    background-color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem;
    height: 50px;
`

const Form = styled.form`
    position: relative;
`

function WritePost({setData, userName}) {
    const [input, setInput] = useState('');
    const [cnt, setCnt] = useState(6);
    const onSubmit = (event) => {
       event.preventDefault();
      setData((prev) => [
     {  __v: 0,
        count: cnt,
        username: userName,
        content: input,
        _id: "595f8972e3d79767f1e35430",
        comments: [],
        likes: [],
        likesCount: 5,
        createdAt: new Date(),
    },
        ...prev
        ])
        setInput("");
        setCnt((prev) => prev + 1);
    }
    return (
        <Wrapper>
                <Form onSubmit={onSubmit}>
                    <StyledTextarea
                        minRows={3}
                        maxRows={10}
                        placeholder="입력해주세요"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        />
                        <Button type="submit">새 게시글 작성</Button>
                </Form>

        </Wrapper>
    )
}


export default WritePost;
