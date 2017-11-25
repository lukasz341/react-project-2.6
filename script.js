//console.log(test);
var Counter = React.createClass ({
    getInitialState: function (){
        return {
            counter: 0
        };
    },

    increment: function (){
        this.setState ({
            counter: this.state.counter + 1

        });

    },


    decrement: function (){
        this.setState ({
            counter: this.state.counter - 1

        });

    },


    render: function(){
        return React.createElement ('div', {},
            React.createElement('button', {onClick: this.increment}, 'Zwiększenie o 1'),
            React.createElement('button', {onClick: this.decrement}, 'Zmniejszenie o 1'),
            React.createElement('p', {}, 'Licznik ' +this.state.counter)
    );
    }

});

var app = React.createElement(Counter);
ReactDOM.render(app, document.getElementById('app'));
