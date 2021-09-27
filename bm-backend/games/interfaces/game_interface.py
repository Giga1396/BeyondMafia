from interfaces.player_interface import PlayerInterface
from abc import ABC, abstractmethod

class GameInterface(ABC):

    @abstractmethod
    def __init__(self, players : set[int], player_type : type, options : dict = None) -> None:
        pass

    @abstractmethod
    def initialize_players(self, options):
        pass