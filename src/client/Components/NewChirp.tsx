import * as React from 'react';

export default class NewChirp extends React.Component<INewChirpProps, INewChirpState> {
    constructor(props: INewChirpProps) {
        super(props);

        this.state = {
            user: '',
            chirp: ''
        }
    }

    handleChirp = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ chirp: e.target.value })
    }

    handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ user: e.target.value })
    }

    handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let body = { user: this.state.user, chirp: this.state.chirp }
        try {
            await fetch('/api/chirps', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "content-type": "application/json"
                }
            })
        } catch (error) {
            console.log(error)
        }
        this.setState({ chirp: "", user: "" });
    }

    render() {
        return (
            <>
            <div className="container">
                <form action="" className="row form-group">
                    <input type="text"
                        value={this.state.user} className="form-control p-2 m-2" placeholder="User" onChange={this.handleUser}/>
                    <input type="text"
                        value={this.state.chirp} className="form-control p-2 m-2" placeholder="Chirp" onChange={this.handleChirp}/>
                    <button onClick={this.handleSubmit} className="btn btn-success m-2">Chirp!</button>
                </form>
            </div>
            </>
        )

    }



}

interface INewChirpProps {

}

interface INewChirpState {
    user: string;
    chirp: string;
}

