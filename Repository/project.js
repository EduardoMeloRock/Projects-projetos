
const elonMusk = {
    _hoursfree: [10, 12,9],
    acceptedPurposy: 'any',
    pendingMeeting: [],
    declinedMeetings: [],
    approvedMeetings: [],
    _feedback: '',

    get hoursFree() {
        return this._hoursfree;
    },

    get feedBack() {
        return this._feedback;
    },
    
};


set newMeeting() {
    if(this._hoursFree.indexOf(time) !== -1) {
        this.pendingMeeting.push(time);
        this._feedback = 
        'Your meeting was sent successfully. Elon Musk can now revie and approve or decline';
    } else {
        this._feedback = 'Time not suitable for Elon Musk';
    }
},

elonMusk.newMeeting = 10
console.log(elonMusk.feedback)

