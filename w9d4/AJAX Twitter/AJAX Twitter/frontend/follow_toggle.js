class FollowToggle{
    //ifs = initial_follow_state
    constructor(data){
        // console.log(data)
        data = (data.dataset)
        this.userId = data.userId;
        // debugger
        if(data.initialFollowState === "true"){
            this.followState='followed'  
        }else{
            this.followState='unfollowed'
        }
        console.log(this)
        // this.followState = data.initialFollowState;
        // console.log(this.userId)
        this.render();
        this.handleClick = this.handleClick.bind(this);
        $(".follow-toggle").on("click", this.handleClick)
    }

    render(){
        console.log("in render")
        if(this.followState==="following" || this.followState==="unfollowing"){
            console.log("we disabled the prop")
            $(".follow-toggle").prop({"disabled":true})
        }
        else{
            $(".follow-toggle").empty()
            $(".follow-toggle").prop({ "disabled": false })
            if (this.followState === "followed") {
                $(".follow-toggle").append("Unfollow!")
            }
            else{
                $(".follow-toggle").append("Follow!")
            }
        }
    }

    handleClick(event){
        // debugger
        event.preventDefault();
        if(this.followState==="unfollowed"){
            this.followState = 'following'
            this.render();
            $.ajax({
                url: `/users/${this.userId}/follow`,
                method: "POST",
                dataType: 'JSON'
            }).then(() => {
                this.followState = 'followed'
                this.render()
            });
        }else{
            this.followState = 'unfollowing'
            this.render();
            $.ajax({
                url: `/users/${this.userId}/follow`,
                method: "DELETE",
                dataType: 'JSON'
            }).then(() => {
                this.followState = 'unfollowed'
                this.render()
            });
        }
        
    }

}
module.exports = FollowToggle;