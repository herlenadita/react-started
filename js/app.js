//Child Component
var AddFriend = React.createClass({
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
            <div>
                <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
                <button onClick={this.handleAddNew}>Add Friend</button>
            </div>
        );
    }
});

//Child Component
var ShowList = React.createClass({
    render: function(){
        var _this = this;
        var listItems = _this.props.names.map(function(friend, i){
            return <li key={i} > { friend } <button onClick={_this.props.deleteFriend.bind(null, i)}>x</button></li>;
        })
        return(
            <div>
                <h3>Friends</h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
});

//Parent Component
var FriendsContainer = React.createClass({
    getInitialState: function(){
        return{
            name: 'Budi Wahyu H. A.',
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
            <div>
                <h3>Name: {this.state.name}</h3>
                <AddFriend addNew={this.addFriend}/>
                <ShowList names={this.state.friends} deleteFriend={this.deleteFriend}/>
            </div>
        );
    }

});

React.render(<FriendsContainer/>, document.getElementById('app'))