from mafia.jobs.role import Role
from mafia.jobs.alignment import Alignment

class Villager(Role):
    def __init__(self) -> None:
        super().__init__()
        self.alignment = Alignment.Town

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
        self.alignment = Alignment.Mafia

class Mafia(BaseMafia):
    def __init__(self) -> None:
        super().__init__()
        self.night_actions.append("Hit") #TODO add functionality here      