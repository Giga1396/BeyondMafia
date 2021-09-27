from mafia.mafia_game import MafiaGame
from mafia.mafia_player import MafiaPlayer

from mafia.actions.actions import *
import random

from pathlib import Path

def test():
    import json
    data = None
    here = Path(__file__).parent
    with open(here/"default_setup.json", 'r') as f:
        data = json.load(f)

    game = MafiaGame({(1, "luis4rod"), (2, "sand"), (3, "drafterman"), (4, "Fran"), (5, "Emma"), (6, "lanadeltaco"), (7, "Lucio")}, MafiaPlayer, data)

    for player in game.players.values():
        print(player)

    
    print('-------------------------------------------------------------------')

    for player in game.players.values():
        for a in player.role.night_actions:
            action = globals()[a](player, [random.choice(list(game.players.values()))])
            print(action)
            action.apply()

    print('-------------------------------------------------------------------')

    for player in game.players.values():
        print(player)




if __name__ == "__main__":
    test()