// ID приложения:	7777812
// защищенный ключ: PyucjYxieVPRJLBnhm1R
// сервисный ключ доступа: a05b9f7aa05b9f7aa05b9f7a73a02d316eaa05ba05b9f7ac0664b74cc7864ae6bfeadc2

// access_token=ea74e298425fc04bddcf10ccc5214232a2b9f06c0af6447b27b4f1b229d90499ff4bc983efa1e9909b7d6
// &expires_in=86400
// user_id=16462017

// запрос на получение токена:
// https://oauth.vk.com/authorize?client_id=7777812&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.52

// запрос на друзей online
// https://api.vk.com/method/friends.getOnline?v=5.52&access_token=eb492bb31d5f17fb1bfd4186dcfc18d03f92edc50085ac1df5670260b57129d8767298dbf92d126d36471


// import * as axios from 'axios';
import jsonp from 'jsonp'

const baseURL = `https://api.vk.com/method`
const access_token = `ea74e298425fc04bddcf10ccc5214232a2b9f06c0af6447b27b4f1b229d90499ff4bc983efa1e9909b7d6`
const queryParams = `?v=5.52&fields=nickname, domain, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities,domain&count=20&access_token=${access_token}`

export const friendsAPI = {
    url: `${baseURL}/friends.`,


    // getOnline () {
    //   jsonp(`${this.url}getOnline${queryParams}`, null, (err, data) => {
    //     // if (err) {
    //     //   console.error(err.message);
    //     // } else {
    //     //   console.log(data);
    //     // }
    //   });
    // },

    getFriendsIds (test) {
        return jsonp(`${this.url}get${queryParams}`, null, (err, data) => {
        test (err, data)
        });
    },



}








