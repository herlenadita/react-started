//Child Component
var AddFriend = React.createClass({displayName: "AddFriend",
    getInitialState: function(){
        return {
            newFriend: ''
        }
    },
    updateNewFriend: function(e){
        this.setState({
            newFriend: e.target.value
        });
    },
    handleAddNew: function(){
        this.props.addNew(this.state.newFriend);
        this.setState({
            newFriend: ''
        });
    },
    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("input", {type: "text", value: this.state.newFriend, onChange: this.updateNewFriend}), 
                React.createElement("button", {onClick: this.handleAddNew}, "Add Friend")
            )
        );
    }
});

//Child Component
var ShowList = React.createClass({displayName: "ShowList",
    render: function(){
        var _this = this;
        var listItems = _this.props.names.map(function(friend, i){
            return React.createElement("li", {key: i}, " ",  friend, " ", React.createElement("button", {onClick: _this.props.deleteFriend.bind(null, i)}, "x"));
        })
        return(
            React.createElement("div", null, 
                React.createElement("h3", null, "Friends"), 
                React.createElement("ul", null, 
                    listItems
                )
            )
        )
    }
});

//Parent Component
var FriendsContainer = React.createClass({displayName: "FriendsContainer",
    getInitialState: function(){
        return{
            name: 'Budi Wahyu Herlen Adit',
            friends : ['Vika F. S.', 'Sarah I', 'Laurensia A. R.']
        }
    },
    addFriend: function(friend){
        this.state.friends.push(friend);
        this.setState({
            friends: this.state.friends
        });
    },
    deleteFriend: function(ind){
        this.state.friends.splice(ind, 1);
        this.setState({
            friends: this.state.friends
        });
    },
    render: function(){
        return(
            React.createElement("div", null, 
                React.createElement("h3", null, "Name: ", this.state.name), 
                React.createElement(AddFriend, {addNew: this.addFriend}), 
                React.createElement(ShowList, {names: this.state.friends, deleteFriend: this.deleteFriend})
            )
        );
    }

});React.render(React.createElement(FriendsContainer, null), document.getElementById('app'))