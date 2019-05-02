import * as React from 'react';
import ChirpCard from '../Components/ChirpCard'

export default class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);

        this.state = { chirps: [], user: undefined, chirp: undefined }

    }

    async componentDidMount() {
        try {
            let r = await fetch('/api/chirps');
            let data = await r.json();
            let chirps = Object.keys(data).map(key => {
                return {
                    id: key,
                    user: data[key].user,
                    chirp: data[key].chirp
                }
            });
            chirps.pop();
            chirps.reverse();
            this.setState({ chirps })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <>
                <div>
                    {this.state.chirps.map(chirp => {
                        return <ChirpCard key={chirp.id} chirp={ chirp } />
                    })}
                </div>
            </>
        )
    }
}

interface IHomeProps {

}

interface IHomeState {
    chirps: { id: string; user: string; chirp: string; }[];
    user: string;
    chirp: string;
}