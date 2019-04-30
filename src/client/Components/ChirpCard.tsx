import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ChirpCardProps {
    chirp: { id: string, user: string, chirp: string }
}

const ChirpCard: React.SFC<ChirpCardProps> = (props) => {
    return (
        <div className="col-md-12">
            <div className="card m-2 shadow">
                <div className="card-body">
                    <div className="card-title text-success">{props.chirp.user}:</div>
                    <div className="card-text text-success">{props.chirp.chirp}</div>
                    <Link to={`/admin/${props.chirp.id}`} className="btn btn-warning mt-2">Oops, didn't mean to...</Link>
                </div>
            </div>
        </div>
    );
}

export default ChirpCard;