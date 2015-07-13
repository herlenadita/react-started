//Child Component
var ShowList = React.createClass({
    render: function(){
        var listItems = this.props.names.map(function(friend, i){
            return <li key={i} > { friend } </li>;
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
    render: function(){
        return(
            <div>
                <h3>Name: {this.state.name}</h3>
                <ShowList names={this.state.friends} />
            </div>
        );
    }
});

React.render(<FriendsContainer/>, document.getElementById('app'))