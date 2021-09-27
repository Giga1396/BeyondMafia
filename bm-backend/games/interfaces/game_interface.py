from interfaces.player_interface import PlayerInterface
from abc import ABC, abstractmethod

class GameInterface(ABC):

    @abstractmethod
    def __init__(self, players : dict[int, PlayerInterface], num_players : int = 7, options : dict = None) -> None:
        pass

    @abstractmethod
    def initialize_players(self, options):
        pass