import React from 'react'

export default function Vote({ text, id, voteEffect ,vote ,setPostVoteData ,vote_col ,setJsonData}) {
    console.log("vote col : "+vote_col);
    return (
        <button className='mx-3 my-4' onClick={() => voteEffect(vote,setPostVoteData,text,id,vote_col,setJsonData)}>{text}</button>
    )
}
