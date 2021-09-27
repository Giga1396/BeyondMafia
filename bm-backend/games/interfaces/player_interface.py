from abc import ABC, abstractmethod
class PlayerInterface(ABC):

    @abstractmethod
    def __init__(self, name):
        self.name = name