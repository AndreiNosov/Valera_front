import axios from 'axios';

export function pushMessage(message) {
    axios
        .post('http://localhost:5005/', {
            message: message
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error('Error communicating with Rasa:', error)
        })
}
