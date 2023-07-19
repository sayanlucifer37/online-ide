/*

        {
            commentId:
            comment:
            username:
            replies: []
        }

*/

import { useState } from "react";

function DisplayComment({comment, depth}){
    return(
        <div key={comment.commentId} 
            className="comment-container"
            style={{
                marginLeft: `${depth*10}px`
            }}>
            <span style={{
                fontWeight: "bolder"}}> 

                {comment.username}
            </span>

            <span> {comment.body} </span>
            <button> Reply </button>

            {comment.replies.map(reply => 
            <DisplayComment 
                key={reply.commentId} 
                comment={reply} 
                depth={depth+1}/>)}
        </div>
    );
}

export default function CommentingSystem(){
    const [allcomments, setComments]=useState([
        {
            commentId: "comment-1",
            body:" test comment",
            username: "Name",
            replies:[
                {
                    commentId: "comment-2",
                    body: "test1",
                    username: "Abcd",
                    replies:[
                        {
                            commentId: "comment-3",
                            body: "Level 3",
                            username:"Def",
                            replies:[]
                        }
                    ]
                }
            ]
        },
        {
            commentId: "comment-4",
            body: "Second comment",
            username: "Ghij",
            replies:[]
        }
    ]);
    return(
        <div style={{
            width: '100vw',
            display: 'flex',
            flexDirection: "column"

        }}>
            {allcomments.map(comment=>
            <DisplayComment 
                depth={1}
                comment={comment} 
                key={comment.commentId}/>)}
        </div>
    );
}