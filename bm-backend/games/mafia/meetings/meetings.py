from mafia.meetings.meeting import Meeting
from mafia.time import Time
from mafia.jobs.alignment import Alignment

class TownMeeting(Meeting):

    def __init__(self) -> None:
        super().__init__()
        self.id = 1
        self.time = Time.Day
        self.action = "Exile"

    def valid_target() -> function:
        return lambda _: True

class MafiaMeeting(Meeting):

    def __init__(self) -> None:
        super().__init__()
        self.id = 2
        self.time = Time.Night
        self.action = "Hit"

    def valid_target() -> function:
        return lambda player: player.role.alignment != Alignment.Mafia

