import React from 'react';
import dateFormat from 'dateformat';

const LoadComments = props => {
    return (
        props.comments.map(comment => {
            return(
                <div key={comment.id}>
                    <h6>{comment.author}</h6>
                    {/* <h4>{comment.rating}</h4> */}
                    <p>{comment.comment}</p>
                    <p><code>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</code></p>

                </div>
            );
        })
    );
}

export default LoadComments;