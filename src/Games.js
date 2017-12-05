import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Games = (props) => (
    <div>
        <ul>
            { props.games.map(game =>
                <ol key={game.id}>
                    <Link to={`/game/${game.id}`}>
                        {game.timestamp} - {game.players[0]} VS {game.players[1]} 
                    </Link>
                </ol>
            )}
        </ul> 
    </div>
);

const mapStateToProps = (state) => {
    return {
      games: state.dartApp.games
    }
}
  
export default connect(mapStateToProps)(Games);