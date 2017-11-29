
var Counter = React.createClass ({
    getInitialState: function (){
        return {
            counter: 0
        };
    },
    
   
        componentWillMount: function (){
            console.log(' wywoływana w momencie inicjalizacji komponentu przed wykonaniem ')
        },
        
        componentDidMount: function (){
            console.log(' metoda wywoływana gdy nasz komponent widnieje już na stronie, możemy wczytać coś z serwera ')
        },

        componentWillReceiveProps: function (){
            console.log(' aktualizowanie stanu na podstawie nadchodzących właściwości')
        },
        
     
        
        componentWillUpdate: function (){
            console.log(' wywoływana tylko do przygotowania na nadchodzące zmiany')
        },
        
        componentDidUpdate : function (){
            console.log(' możemy wykonać jakieś manipulacje na DOM bo komponent został już przerysowany')
        },
        
        componentWillUnmount: function (){
            console.log(' rzeczy związane z usuwaniem komponentu, odpinanie timerów czy nasłuchiwania zdarzeń na elementach dom')
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
            React.createElement('p', {}, 'Licznik ' + this.state.counter)
    );
    },

});

var app = React.createElement('div',{},
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter)
        );
   
ReactDOM.render(app, document.getElementById('app'));
