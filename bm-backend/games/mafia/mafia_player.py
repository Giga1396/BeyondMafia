from interfaces.player_interface import PlayerInterface


class MafiaPlayer(PlayerInterface):

    def __init__(self):
        self.role = None

    def set_role(self, role):
        self.role = role

    def __repr__(self) -> str:
        return str(self.role)