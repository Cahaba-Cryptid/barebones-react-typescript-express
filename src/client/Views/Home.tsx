import * as React from 'react';
import ChirpCard from '../Components/ChirpCard'

export default class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);

        this.state = { chirps: [], user: undefined, chirp: undefined }

        // this.handleSUbmit = this.handleSubmit.bind(this);
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
            this.setState({ chirps })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <>
            <div className="row bg-dark p-2 m-2 border border-secondary rounded shadow">
                <h3 className="text-light">"If you can't say anything nice, don't say anything at all." ~ Mom</h3>

                <div className="form-group">
                    <input type="text" className="form-control m-2" placeholder="User"/>
                    <input type="text" className="form-control m-2" placeholder="Chirp"/>
                    <button type="submit" className="btn btn-secondary m-2">Submit</button>
                </div>
            </div>

            <div>
            { this.state.chirps.map(chirp => {
                return <ChirpCard key={chirp.id} chirp= { chirp }/>
            }) }
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