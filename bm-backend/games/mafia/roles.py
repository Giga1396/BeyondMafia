from mafia.role import Role
from mafia.alignment import Alignment

class Villager(Role):
    def __init__(self) -> None:
        super().__init__()
        self.alignment = Alignment.TOWN

class Doctor(Villager):
    def __init__(self) -> None:
        super().__init__()
        self.night_actions.append("Save") #TODO add functionality here

class Cop(Villager):
    def __init__(self) -> None:
        super().__init__()
        self.night_actions.append("Investigate") #TODO add functionality here

class BaseMafia(Role):
    def __init__(self) -> None:
        super().__init__()
        self.alignment = Alignment.MAFIA

class Mafia(BaseMafia):
    def __init__(self) -> None:
        super().__init__()
        self.night_actions.append("Kill") #TODO add functionality here