from interfaces.player_interface import PlayerInterface
from mafia.jobs.roles import *

class MafiaPlayer(PlayerInterface):

    def __init__(self, name):
        super().__init__(name)
        self.role = None

    def set_role(self, role):
        self.role = globals()[role]()

    def __repr__(self) -> str:
        return f"{self.name}: {self.role}"