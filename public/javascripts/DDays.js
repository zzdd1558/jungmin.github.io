class DDays {

    constructor(settings) {

        this.setDate = new Date(settings);
    }

    getDday(){
        this.date = new Date();
        let distance = this.setDate - this.date;

        let day = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let second = Math.floor((distance % (1000 * 60)) / 1000);
        if(second < 10){
            second = '0'+second;
        }

        return `${day}일 ${hour}시간 ${minute}분`;

    }


}

