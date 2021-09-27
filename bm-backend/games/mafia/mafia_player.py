from interfaces.player_interface import PlayerInterface
from mafia.roles import *

class MafiaPlayer(PlayerInterface):

    def __init__(self):
        self.role = None

    def set_role(self, role):
        self.role = globals()[role]()

    def __repr__(self) -> str:
        return str(self.role)