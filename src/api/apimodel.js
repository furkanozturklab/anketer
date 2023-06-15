import axios from "axios";
import { setCookie  } from "Tools/Gears";

export const loadSurver = async (setJsonData, setPostVoteData) => {
    const postData = {
        post_securityCode: 'meltdown',
        post_action: 'SURVEY_DAY',
        post_status: true,
        post_react: 'true'
    };
    const formData = new FormData();
    for (let key in postData) {
        formData.append(key, postData[key]);
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    
    axios.post('https://furkanozturklab.com/api', formData)
        .then(response => {
            setJsonData(response.data);  
     
            
            console.log(response.data);
            if(response.data['bypass'] === true) {
                setPostVoteData(true);      
            }
            else {
                setPostVoteData(false);
            }

        })
        .catch(error => {
            console.error('İstek hatası:', error);
        });
    
}

export const voteSend = async (id, text , vote_col,setJsonData) => {
    const postData = {
        post_securityCode: 'meltdown',
        post_action: 'SURVEY_VOTE',
        post_status: true,
        post_id : id,
        post_voteCol: vote_col.replace("_text","_val"),
        post_react: 'true'
    };
    const formData = new FormData();
    for (let key in postData) {
        formData.append(key, postData[key]);
    }
    
    axios.post('https://furkanozturklab.com/api', formData)
        .then(response => {
            console.log(response.data);
            setJsonData(response.data);
        })
        .catch(error => {
            console.error('İstek hatası:', error);
    });

    let cookieValue = id + "½" + text;
    const date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
    const expires = date;
    await setCookie("voteCookie", cookieValue, expires);
}

export const oldLoadSurver = async (setOldJsonData) =>{

    console.log("working");

    const postData = {
        post_securityCode: 'meltdown',
        post_action: 'SURVEY_OLD',
        post_react: 'true'
    };
    const formData = new FormData();
    for (let key in postData) {
        formData.append(key, postData[key]);
    }
    console.log("working");
    await new Promise(resolve => setTimeout(resolve, 3500));
    axios.post('https://furkanozturklab.com/api', formData)
        .then(response => {
        
            console.log(response.data);
            setOldJsonData(response.data); 
        })
        .catch(error => {
            console.error('İstek hatası:', error);
        });

}