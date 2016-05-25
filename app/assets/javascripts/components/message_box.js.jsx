var MessageBox = React.createClass({
    getInitialState: function() {
        return {
            messages: [
            ]
        };
    },

    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(messages) {
                this.setState({ messages: messages });
            }.bind(this),
            error: function(_xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleMessageSubmit: function(message) {
        message.id = new Date();
        var newMessages = this.state.messages.concat(message);
        this.setState({messages: newMessages});
    },

    render: function () {
        var messageItems = this.state.messages.map(function(message) {
            return (
                <MessageItem key={message.id} message={message} />
            );
        });

        return (
            <div className="messageBox">
                {messageItems}
                <MessageForm onMessageSubmit={this.handleMessageSubmit} />
            </div>
        );
    }
});