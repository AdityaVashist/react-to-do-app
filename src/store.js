import React from 'react';
const { Provider, Consumer } = React.createContext();

const initialState = {
    tasks: [],
    input: {
        value: ""
    }
}

export class StoreProvider extends React.Component {
    state = initialState;
    getStoreState = () => {
        return this.state;
    }
    setStoreState = (newState, callback) => {
        this.setState(newState, callback);
    }
    render() {
        return <Provider 
            value={{
                getStore: this.getStoreState,
                updateStore: this.setStoreState 
            }}>
            {this.props.children}
        </Provider>
    }
}

export const withStore = Component => {
    const componentWithStoreAccess = props => {
        return <Consumer>
            {
                store => <Component {...props} store={store} />
            }
        </Consumer>
    }
    return componentWithStoreAccess;
}
