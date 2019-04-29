import * as React from 'react';
import Home from './Views/Home'
import './scss/app';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class App extends React.Component<IAppProps, IAppState> {


    constructor(props: IAppProps) {
        super(props);

        this.state = { 
            chirps: []
         };
    }

    async componentWillMount() {
        let r = await fetch('/api/chirps');
        let data = await r.json();
        let Chirps = Object.keys(data).map(key => {
            return {
                id: key,
                user: data[key].user,
                chirp: data[key].chirp
            }
        });
    }

    render() {
        return (
            <Router>
                <>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                </Switch>
                </>
            </Router>

        )
    }
}

interface IAppProps {

}

interface IAppState {
    chirps: { user: string, chirp: string }[]
}