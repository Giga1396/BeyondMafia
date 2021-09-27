from mafia.mafia_game import MafiaGame
from mafia.mafia_player import MafiaPlayer

from pathlib import Path

def test():
    import json
    data = None
    here = Path(__file__).parent
    with open(here/"default_setup.json", 'r') as f:
        data = json.load(f)

    game = MafiaGame({1, 2, 3, 4, 5, 6, 7}, MafiaPlayer, data)
    for player in game.players.values():
        print(player)



if __name__ == "__main__":
    test()