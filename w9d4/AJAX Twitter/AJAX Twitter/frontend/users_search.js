class UsersSearch {
    constructor(data){
        console.log(data)
        this.$data = data;
        this.input = ""
        let that = this;
        // console.log(this.$data.user-search-input)
        $('.user-search-input').on("input", function(event){
            that.input += this.value;
            $('.users').text(this.value)
            //grab all users (input)
            //for each user    user.include(str+=this.value)
            //if yes, push to new array
            //for each user in array. create new li and output name with follow button 
        })
    }

    handleInput(){
        
    }
    //keypress

}


module.exports = UsersSearch;