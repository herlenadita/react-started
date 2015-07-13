var HelloUser = React.createClass({
    render: function(){
        return (
            <div className="container">
                Hello {this.props.name}
            </div>
        )
    }
});
React.render(<HelloUser name="Budi Wahyu H. A."/>, document.getElementById('app'));