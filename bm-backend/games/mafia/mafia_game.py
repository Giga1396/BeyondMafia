from interfaces.game_interface import GameInterface
import numpy as np

class MafiaGame(GameInterface):


    def __init__(self, players : set[int], player_type : type, options = None) -> None:
        self.players = {i : player_type() for i in players}

        self.initialize_players(options['alignments'])


    def initialize_players(self, options) -> None:
        roles = np.concatenate([np.random.choice(align['roles'], size = align['size'], replace = align['unique']) for align in options.values()])
        np.random.shuffle(roles)

        for i, player in enumerate(self.players.values()):
            player.set_role(roles[i])

    def __repr__(self) -> str:
        return str(self.players)

        
